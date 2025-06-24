# Staging Environment Setup Guide

This guide provides step-by-step instructions for setting up a staging environment to safely test the secure secrets management implementation before deploying to production.

## Overview

### Why Staging Environment?

Setting up a staging environment is critical when implementing sensitive changes like secrets management. It allows you to:

- **Test safely** without affecting production users
- **Validate secrets loading** from Google Cloud Secret Manager
- **Debug configuration issues** in a production-like environment
- **Ensure API integrations** work correctly with secure configuration
- **Practice deployment procedures** before production rollout

### Recommended Approach: Separate Google Cloud Project

Based on Google Cloud best practices, we'll use a **separate Google Cloud project** for staging rather than versions/services within the same project. This provides:

✅ **Complete isolation** of code, data, and permissions  
✅ **Independent quotas** and billing  
✅ **Safe testing** without risk to production  
✅ **Better access control** management  
✅ **Realistic production simulation**  

## Prerequisites

Before starting, ensure you have:

- [ ] Google Cloud account with billing enabled
- [ ] `gcloud` CLI installed and authenticated
- [ ] Project Editor/Owner permissions for creating new projects
- [ ] Access to existing production secrets (for copying to staging)
- [ ] Understanding of the secure secrets implementation (`SECRETS_MANAGEMENT.md`)

## Phase 1: Google Cloud Project Setup

### 1.1 Create Staging Project

```bash
# Set your desired project ID (must be globally unique)
export STAGING_PROJECT_ID="firewall-cafe-staging"

# Create the project
gcloud projects create $STAGING_PROJECT_ID --name="Firewall Cafe Staging"

# Set as active project
gcloud config set project $STAGING_PROJECT_ID

# Link to billing account (replace BILLING_ACCOUNT_ID)
gcloud billing projects link $STAGING_PROJECT_ID --billing-account=BILLING_ACCOUNT_ID
```

### 1.2 Enable Required APIs

```bash
# Enable necessary APIs
gcloud services enable appengine.googleapis.com
gcloud services enable secretmanager.googleapis.com
gcloud services enable cloudbuild.googleapis.com
```

### 1.3 Initialize App Engine

```bash
# Initialize App Engine (choose your preferred region)
gcloud app create --region=us-central1
```

### 1.4 Set Up IAM Permissions

```bash
# Get your current user email
export USER_EMAIL=$(gcloud config get-value account)

# Grant yourself necessary roles
gcloud projects add-iam-policy-binding $STAGING_PROJECT_ID \
    --member="user:$USER_EMAIL" \
    --role="roles/appengine.appAdmin"

gcloud projects add-iam-policy-binding $STAGING_PROJECT_ID \
    --member="user:$USER_EMAIL" \
    --role="roles/secretmanager.admin"

# Grant App Engine service account Secret Manager access
export PROJECT_NUMBER=$(gcloud projects describe $STAGING_PROJECT_ID --format="value(projectNumber)")
gcloud projects add-iam-policy-binding $STAGING_PROJECT_ID \
    --member="serviceAccount:$STAGING_PROJECT_ID@appspot.gserviceaccount.com" \
    --role="roles/secretmanager.secretAccessor"
```

## Phase 2: Secret Manager Setup

### 2.1 Create Staging Secrets

⚠️ **Important**: Use separate API keys for staging. Never use production keys in staging!

```bash
# Create all required secrets (empty initially)
gcloud secrets create google-translate-api-key --project=$STAGING_PROJECT_ID
gcloud secrets create api-secret --project=$STAGING_PROJECT_ID
gcloud secrets create serpapi-key --project=$STAGING_PROJECT_ID
gcloud secrets create serper-api-key --project=$STAGING_PROJECT_ID
gcloud secrets create postmark-api-key --project=$STAGING_PROJECT_ID
gcloud secrets create shared-secret --project=$STAGING_PROJECT_ID
```

### 2.2 Add Secret Values

For each secret, you have several options:

#### Option A: Use Staging/Test Keys (Recommended)
```bash
# Example: Add staging Google Translate API key
echo -n "YOUR_STAGING_GOOGLE_TRANSLATE_KEY" | gcloud secrets versions add google-translate-api-key --data-file=-

# Repeat for other secrets with staging/test values
```

#### Option B: Copy from Production (Temporary)
```bash
# Only if you don't have staging keys yet - remember to replace later!
# Get from production project
export PROD_PROJECT_ID="your-production-project"
gcloud secrets versions access latest --secret="google-translate-api-key" --project=$PROD_PROJECT_ID | \
    gcloud secrets versions add google-translate-api-key --data-file=- --project=$STAGING_PROJECT_ID
```

#### Option C: Use Console
1. Navigate to [Secret Manager](https://console.cloud.google.com/security/secret-manager) in staging project
2. Click on each secret name
3. Click "ADD VERSION"
4. Paste the staging key value

### 2.3 Verify Secret Access

```bash
# Test access to each secret
gcloud secrets versions access latest --secret="google-translate-api-key"
gcloud secrets versions access latest --secret="api-secret"
gcloud secrets versions access latest --secret="serpapi-key"
gcloud secrets versions access latest --secret="serper-api-key"
gcloud secrets versions access latest --secret="postmark-api-key"
gcloud secrets versions access latest --secret="shared-secret"
```

## Phase 3: App Engine Staging Configuration

### 3.1 Create Staging App Configuration

Create `app-staging.yaml` in your project root:

```yaml
# app-staging.yaml
runtime: nodejs20
default_expiration: "5s"

env_variables:
  NODE_ENV: "production"  # Use production mode to trigger Secret Manager
  GOOGLE_CLOUD_PROJECT_ID: "firewall-cafe-staging"  # Your staging project ID
  PUBLIC_URL: "https://staging.firewallcafe.com"  # Or your staging domain

handlers:
- url: /proxy-image.*
  script: auto
  secure: always

- url: /searches.*
  script: auto
  secure: always

- url: /events.*
  script: auto
  secure: always

- url: /images.*
  script: auto
  secure: always

- url: /vote.*
  script: auto
  secure: always

- url: /dashboardData.*
  script: auto
  secure: always

- url: /api/analytics/.*
  script: auto
  secure: always

# Serve static assets from build directory first
- url: /static/(.*)
  static_files: build/static/\1
  upload: build/static/(.*)
  secure: always

# Serve root level static files
- url: /(.*\.(json|ico|png|txt|css|js))$
  static_files: build/\1
  upload: build/.*\.(json|ico|png|txt|css|js)$
  secure: always
  http_headers:
    Cache-Control: "no-cache, no-store, must-revalidate"
    Pragma: "no-cache"
    Expires: "0"

# Serve index.html for all other routes (for client-side routing)
- url: /.*
  static_files: build/index.html
  upload: build/index.html
  secure: always
  redirect_http_response_code: 301
  http_headers:
    Cache-Control: "no-cache, no-store, must-revalidate"
    Pragma: "no-cache"
    Expires: "0"
```

### 3.2 Update Configuration for Staging Backend API

Modify `server/config-secure.js` to handle staging environment:

```javascript
// Add this to the loadConfiguration method in config-secure.js
const getApiUrl = () => {
    if (process.env.NODE_ENV === 'production') {
        // Check if this is staging based on project ID
        if (process.env.GOOGLE_CLOUD_PROJECT_ID && 
            process.env.GOOGLE_CLOUD_PROJECT_ID.includes('staging')) {
            return 'https://staging-api.firewallcafe.com/'; // Adjust to your staging API
        }
        return 'https://api.firewallcafe.com/';
    }
    return 'http://localhost:11458/';
};

// Update the config object
config.apiUrl = getApiUrl();
```

## Phase 4: Deployment and Testing

### 4.1 Build and Deploy

```bash
# Ensure you're in the project directory
cd /path/to/firewall/client

# Build the application
npm run build

# Deploy to staging
gcloud app deploy app-staging.yaml --project=$STAGING_PROJECT_ID --no-promote
```

### 4.2 Access Staging Application

```bash
# Get the staging URL
gcloud app browse --project=$STAGING_PROJECT_ID
```

The URL will be: `https://$STAGING_PROJECT_ID.uc.r.appspot.com`

### 4.3 Comprehensive Testing Checklist

#### ✅ Secrets Management Testing
- [ ] Application starts without errors
- [ ] Console shows "Loading secrets from Google Cloud Secret Manager..."
- [ ] All 6 secrets load successfully (check logs)
- [ ] No "Failed to load secret" errors in logs

#### ✅ Dashboard Functionality
- [ ] Navigate to `/dashboard` 
- [ ] Summary cards display data (Total Searches, Images, Votes, Users)
- [ ] Geographic analytics loads and displays charts
- [ ] Search analytics shows volume trends and top terms
- [ ] Vote analytics displays category breakdowns
- [ ] Recent activity shows latest searches

#### ✅ API Endpoints Testing
```bash
# Test each analytics endpoint
curl https://$STAGING_PROJECT_ID.uc.r.appspot.com/dashboardData
curl https://$STAGING_PROJECT_ID.uc.r.appspot.com/api/analytics/geographic
curl https://$STAGING_PROJECT_ID.uc.r.appspot.com/api/analytics/searches
curl https://$STAGING_PROJECT_ID.uc.r.appspot.com/api/analytics/votes
curl https://$STAGING_PROJECT_ID.uc.r.appspot.com/api/analytics/recent-activity
```

#### ✅ Search Functionality (If Backend API Available)
- [ ] Search comparison demo works
- [ ] Image search returns results
- [ ] Translation functionality works
- [ ] Vote submission works

#### ✅ Error Handling
- [ ] Check App Engine logs for any errors
- [ ] Verify graceful handling of missing secrets
- [ ] Test fallback mechanisms

### 4.4 View Logs and Debug

```bash
# View recent logs
gcloud app logs tail --project=$STAGING_PROJECT_ID

# View logs in browser
gcloud app logs read --project=$STAGING_PROJECT_ID --limit=50
```

Look for these success messages:
```
Loading secrets from Google Cloud Secret Manager...
✓ Loaded secret: google-translate-api-key
✓ Loaded secret: api-secret
✓ Loaded secret: serpapi-key
✓ Loaded secret: serper-api-key
✓ Loaded secret: postmark-api-key
✓ Loaded secret: shared-secret
All secrets loaded successfully
Server listening at http://localhost:8080
Using API URL: https://api.firewallcafe.com/
```

## Phase 5: Advanced Configuration (Optional)

### 5.1 Custom Domain Setup

If you want to use a custom domain like `staging.firewallcafe.com`:

```bash
# Map custom domain
gcloud app domain-mappings create staging.firewallcafe.com --project=$STAGING_PROJECT_ID

# Follow the instructions to add DNS records
```

### 5.2 CI/CD Integration

Create `.github/workflows/deploy-staging.yml`:

```yaml
name: Deploy to Staging

on:
  push:
    branches: [ staging ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
    
    - name: Authenticate to Google Cloud
      uses: google-github-actions/auth@v1
      with:
        credentials_json: ${{ secrets.GCP_SA_KEY_STAGING }}
    
    - name: Deploy to App Engine
      uses: google-github-actions/deploy-appengine@v1
      with:
        project_id: firewall-cafe-staging
        deliverables: app-staging.yaml
        promote: false
```

## Troubleshooting Guide

### Common Issues and Solutions

#### 1. "Failed to retrieve secret" Errors

**Symptoms**: Secrets not loading, application won't start
**Solutions**:
```bash
# Check if secrets exist
gcloud secrets list --project=$STAGING_PROJECT_ID

# Verify service account permissions
gcloud projects get-iam-policy $STAGING_PROJECT_ID

# Test secret access manually
gcloud secrets versions access latest --secret="google-translate-api-key" --project=$STAGING_PROJECT_ID
```

#### 2. "PROJECT_ID environment variable must be set"

**Symptoms**: Configuration loading fails
**Solutions**:
- Verify `GOOGLE_CLOUD_PROJECT_ID` is set in `app-staging.yaml`
- Check that environment variable matches your actual project ID

#### 3. Dashboard Shows No Data

**Symptoms**: Dashboard loads but shows empty charts
**Solutions**:
- Verify staging backend API is accessible
- Check `config-secure.js` has correct staging API URL
- Ensure staging API has test data

#### 4. Build or Deployment Failures

**Symptoms**: `gcloud app deploy` fails
**Solutions**:
```bash
# Check build logs
npm run build

# Verify app.yaml syntax
gcloud app deploy app-staging.yaml --dry-run

# Check App Engine quotas
gcloud app describe --project=$STAGING_PROJECT_ID
```

### Debug Commands

```bash
# Check project configuration
gcloud config list

# View secret manager configuration
gcloud secrets list --project=$STAGING_PROJECT_ID

# Check service account permissions
gcloud projects get-iam-policy $STAGING_PROJECT_ID

# View App Engine versions
gcloud app versions list --project=$STAGING_PROJECT_ID

# Check logs for specific errors
gcloud app logs read --project=$STAGING_PROJECT_ID --filter="SECRET"
```

## Phase 6: Validation and Sign-off

### 6.1 Complete System Test

Before promoting to production, ensure:

- [ ] All secrets load successfully from Secret Manager
- [ ] Dashboard displays complete analytics data
- [ ] No console errors or application crashes
- [ ] Performance is acceptable (check loading times)
- [ ] All API endpoints respond correctly
- [ ] Log files show no errors or warnings
- [ ] Memory and CPU usage within expected limits

### 6.2 Security Validation

- [ ] No hardcoded secrets in deployed code
- [ ] Secrets are properly isolated from production
- [ ] Only staging API keys are used
- [ ] Access logs show proper authentication
- [ ] No unauthorized access attempts

### 6.3 Documentation Update

- [ ] Update deployment procedures based on staging experience
- [ ] Document any configuration changes needed
- [ ] Record any issues found and their resolutions
- [ ] Update production deployment checklist

## Phase 7: Cleanup and Maintenance

### 7.1 Cost Management

```bash
# Monitor staging costs
gcloud billing accounts list
gcloud billing projects describe $STAGING_PROJECT_ID

# Stop staging when not needed
gcloud app versions stop VERSION --service=default --project=$STAGING_PROJECT_ID
```

### 7.2 Regular Maintenance

- **Weekly**: Review logs for any issues
- **Monthly**: Update staging secrets if keys are rotated
- **Before major releases**: Redeploy and test latest changes

### 7.3 Cleanup After Testing

```bash
# Delete staging project entirely (if no longer needed)
gcloud projects delete $STAGING_PROJECT_ID

# Or just stop the service
gcloud app versions stop --service=default --project=$STAGING_PROJECT_ID
```

## Next Steps

After successful staging validation:

1. **Document findings**: Note any issues or improvements needed
2. **Update production deployment plan**: Based on staging experience
3. **Schedule production deployment**: During low-traffic period
4. **Prepare rollback plan**: In case production deployment has issues
5. **Monitor production closely**: After deployment for any unexpected behavior

## Estimated Timeline

- **Initial Setup**: 2-3 hours (project creation, secrets, configuration)
- **Deployment and Testing**: 1-2 hours (building, deploying, validation)
- **Issue Resolution**: Variable (depends on any problems found)
- **Documentation**: 30 minutes (recording process and findings)

**Total**: 4-6 hours for complete staging environment setup and validation

## Support and Resources

- [Google Cloud Secret Manager Documentation](https://cloud.google.com/secret-manager/docs)
- [App Engine Deployment Guide](https://cloud.google.com/appengine/docs/standard/nodejs/runtime)
- [Project SECRETS_MANAGEMENT.md](./SECRETS_MANAGEMENT.md)
- [Google Cloud Best Practices](https://cloud.google.com/docs/enterprise/best-practices-for-enterprise-organizations)

---

**Remember**: Staging environment should mirror production as closely as possible while maintaining complete isolation. Always test thoroughly before promoting changes to production!