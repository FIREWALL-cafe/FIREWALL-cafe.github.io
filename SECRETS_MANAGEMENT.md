# Secrets Management with Google Cloud Secret Manager

This document outlines how to securely manage API keys and secrets for the Firewall Cafe web application using Google Cloud Secret Manager.

## Overview

The application previously stored sensitive information like API keys directly in the `server/config.js` file. This implementation moves all secrets to Google Cloud Secret Manager for enhanced security.

## Architecture

### Development Environment
- Uses environment variables or fallback values from the original config
- No dependency on Google Cloud Secret Manager for local development
- Secrets can be provided via `.env` files (not committed to git)

### Production Environment
- Retrieves all secrets from Google Cloud Secret Manager
- Implements caching to reduce API calls and improve performance
- Falls back to environment variables if Secret Manager is unavailable

## Secret Names

The following secrets are managed in Google Cloud Secret Manager:

| Secret Name | Description | Environment Variable Fallback |
|-------------|-------------|------------------------------|
| `google-translate-api-key` | Google Translate API key | `GOOGLE_TRANSLATE_API_KEY` |
| `api-secret` | Internal API secret | `API_SECRET` |
| `serpapi-key` | SerpAPI key for search results | `SERPAPI_KEY` |
| `serper-api-key` | Serper API key for image search | `SERPER_API_KEY` |
| `postmark-api-key` | Postmark API key for emails | `POSTMARK_API_KEY` |
| `shared-secret` | Shared secret for authentication | `SHARED_SECRET` |

## Setup Instructions

### 1. Prerequisites

- Google Cloud Project with Secret Manager API enabled
- App Engine service account with `Secret Manager Secret Accessor` role
- Node.js application with `@google-cloud/secret-manager` package installed

### 2. Create Secrets in Google Cloud Console

1. Navigate to [Secret Manager](https://console.cloud.google.com/security/secret-manager) in Google Cloud Console
2. Create each secret with the names listed above
3. Add the secret values from the original configuration

#### Using gcloud CLI:

```bash
# Create secrets using gcloud CLI
echo -n "YOUR_GOOGLE_TRANSLATE_API_KEY" | gcloud secrets create google-translate-api-key --data-file=-
echo -n "YOUR_API_SECRET" | gcloud secrets create api-secret --data-file=-
echo -n "YOUR_SERPAPI_KEY" | gcloud secrets create serpapi-key --data-file=-
echo -n "YOUR_SERPER_API_KEY" | gcloud secrets create serper-api-key --data-file=-
echo -n "YOUR_POSTMARK_API_KEY" | gcloud secrets create postmark-api-key --data-file=-
echo -n "YOUR_SHARED_SECRET" | gcloud secrets create shared-secret --data-file=-
```

### 3. Configure Service Account Permissions

Grant the App Engine default service account access to secrets:

```bash
# Get your project ID
PROJECT_ID=$(gcloud config get-value project)

# Grant Secret Manager Secret Accessor role to App Engine service account
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$PROJECT_ID@appspot.gserviceaccount.com" \
    --role="roles/secretmanager.secretAccessor"
```

### 4. Update Application Code

Replace imports of `server/config.js` with the new secure configuration:

```javascript
// Before
const config = require('./server/config');

// After
const { getConfig } = require('./server/config-secure');

// Usage (async/await required)
async function someFunction() {
    const config = await getConfig();
    const apiKey = config.apiKey;
    // ... use config
}
```

### 5. Environment Variables

Set the following environment variables for your application:

#### Required for Production:
- `NODE_ENV=production`
- `GOOGLE_CLOUD_PROJECT_ID` or `PROJECT_ID` - Your Google Cloud project ID

#### Optional for Development:
- `GOOGLE_TRANSLATE_API_KEY` - For local development
- `API_SECRET` - For local development
- `SERPAPI_KEY` - For local development
- `SERPER_API_KEY` - For local development
- `POSTMARK_API_KEY` - For local development
- `SHARED_SECRET` - For local development

## Configuration Module Usage

### Basic Usage

```javascript
const { getConfig } = require('./server/config-secure');

async function initializeApp() {
    try {
        const config = await getConfig();
        
        // Use configuration
        console.log('API URL:', config.apiUrl);
        console.log('Port:', config.port);
        
        // Access secrets (only available after successful load)
        const apiKey = config.apiKey;
        
    } catch (error) {
        console.error('Failed to load configuration:', error);
        process.exit(1);
    }
}
```

### Reloading Configuration

```javascript
const { reloadConfig } = require('./server/config-secure');

// Force reload configuration (useful for testing or updates)
async function updateConfig() {
    const newConfig = await reloadConfig();
    return newConfig;
}
```

## Caching Behavior

- Secrets are cached for 5 minutes to reduce API calls to Secret Manager
- Cache is automatically cleared when configuration is reloaded
- Individual secrets are cached separately for efficient updates

## Error Handling

The configuration module implements multiple fallback strategies:

1. **Primary**: Google Cloud Secret Manager (production)
2. **Fallback**: Environment variables
3. **Development**: Hardcoded values (development only)

If a secret cannot be retrieved from any source, the application will throw an error and refuse to start.

## Security Best Practices

### ✅ Do:
- Use Google Cloud Secret Manager for all production secrets
- Set appropriate IAM permissions with least privilege
- Rotate secrets regularly using Secret Manager versioning
- Monitor secret access through Cloud Audit Logs
- Use environment variables for development/testing

### ❌ Don't:
- Commit secrets to git repositories
- Use hardcoded secrets in production
- Share secrets through insecure channels
- Grant overly broad IAM permissions

## Deployment

### App Engine Deployment

The application automatically detects the production environment and loads secrets from Secret Manager. No additional configuration is needed in `app.yaml`.

### Local Development

For local development, create a `.env` file (not committed to git):

```bash
# .env file for local development
GOOGLE_TRANSLATE_API_KEY=your_key_here
API_SECRET=your_secret_here
SERPAPI_KEY=your_serpapi_key_here
SERPER_API_KEY=your_serper_key_here
POSTMARK_API_KEY=your_postmark_key_here
SHARED_SECRET=your_shared_secret_here
```

Load environment variables in your application:

```javascript
// Load .env file in development
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
```

## Monitoring and Troubleshooting

### Logging

The configuration module provides detailed logging:

```
Loading secrets from Google Cloud Secret Manager...
✓ Loaded secret: google-translate-api-key
✓ Loaded secret: api-secret
✓ Loaded secret: serpapi-key
✓ Loaded secret: serper-api-key
✓ Loaded secret: postmark-api-key
✓ Loaded secret: shared-secret
All secrets loaded successfully
```

### Common Issues

1. **Missing PROJECT_ID**: Ensure `GOOGLE_CLOUD_PROJECT_ID` or `PROJECT_ID` environment variable is set
2. **Permission Denied**: Verify the service account has `Secret Manager Secret Accessor` role
3. **Secret Not Found**: Check that secrets exist in Secret Manager with correct names
4. **Network Issues**: The module will fall back to environment variables if Secret Manager is unreachable

### Testing Secret Access

```bash
# Test secret access using gcloud
gcloud secrets versions access latest --secret="google-translate-api-key"
```

## Migration from Hardcoded Secrets

1. ✅ Create new secure configuration module
2. ✅ Install `@google-cloud/secret-manager` dependency
3. ⏳ Create secrets in Google Cloud Secret Manager
4. ⏳ Update application code to use new configuration
5. ⏳ Test deployment with new secrets
6. ⏳ Add original config file to `.gitignore`
7. ⏳ Remove secrets from git history
8. ⏳ Rotate all exposed API keys

## References

- [Google Cloud Secret Manager Documentation](https://cloud.google.com/secret-manager/docs)
- [Secret Manager Node.js Client Library](https://googleapis.dev/nodejs/secretmanager/latest/)
- [Creating and Accessing Secrets](https://cloud.google.com/secret-manager/docs/creating-and-accessing-secrets)
- [App Engine Authentication](https://cloud.google.com/appengine/docs/standard/nodejs/runtime#authentication)
- [IAM and Secret Manager](https://cloud.google.com/secret-manager/docs/access-control)