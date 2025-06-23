# 🚀 Hosting Migration Plan: Google App Engine → Modern PaaS

## 📋 Executive Summary

We're planning to migrate Firewall Cafe from Google App Engine (GAE) to a modern Platform-as-a-Service provider to achieve:
- **70-80% cost reduction** ($50-100/month → $10-20/month)
- **Better developer experience** with modern deployment workflows
- **Improved performance** with newer Node.js runtimes and edge networks
- **Enhanced features** like preview deployments and better monitoring

## 🎯 Recommended Platform: Render

After analyzing multiple options, **Render** emerges as the best choice for Firewall Cafe:

### Why Render?
- **Cost**: $7/month (Starter) - 86% savings
- **Performance**: Global CDN, automatic SSL, zero-downtime deploys
- **Developer Experience**: GitHub integration, preview environments, automatic deploys
- **Reliability**: 99.99% SLA, automatic health checks, instant rollbacks
- **Support**: Excellent documentation and responsive support team

## 💰 Cost Comparison

| Platform | Monthly Cost | Annual Savings | Key Features |
|----------|--------------|----------------|--------------|
| **Google App Engine** | $50-100 | - | Current setup |
| **Render** ⭐ | $7-19 | $516-1,116 | Best overall value |
| **Railway** | $5+ | $540-1,140 | Good for small projects |
| **Fly.io** | $10-20 | $360-960 | Global edge deployment |
| **Vercel** | $20 | $360-960 | Optimized for Next.js |

## 🏗️ Technical Requirements

### Current Architecture
- **Frontend**: React 18.2 SPA served by Express
- **Backend**: Node.js 20 + Express API
- **Build**: `yarn build` creates static assets
- **Server**: Single `index.js` serves both API and static files
- **Database**: None (external API only)
- **File Storage**: None required

### Migration Requirements
1. Node.js 20 runtime support ✅ (all platforms)
2. Express server compatibility ✅ (all platforms)
3. Environment variable management ✅ (all platforms)
4. Custom domain + SSL ✅ (all platforms)
5. Static file serving ✅ (all platforms)

## 📊 Platform Analysis

### 1. Render (Recommended)
**Pros:**
- Cheapest option at $7/month
- Automatic GitHub deploys
- Preview environments included
- Built-in CDN and DDoS protection
- Zero-downtime deployments
- Excellent Node.js support

**Cons:**
- Cold starts on free tier (not an issue with paid)
- Less global presence than Fly.io

**Perfect for:** Cost-conscious projects that want reliability and ease of use

### 2. Railway
**Pros:**
- Usage-based pricing (potentially cheaper)
- Modern UI and great DX
- Fast deployments
- Good for development

**Cons:**
- Can get expensive with traffic
- Smaller community
- Less mature platform

**Perfect for:** Small projects with variable traffic

### 3. Fly.io
**Pros:**
- Global edge deployment
- Great performance
- Docker-first approach
- Good for scaling

**Cons:**
- More complex setup
- Requires Dockerfile
- Higher learning curve

**Perfect for:** Projects needing global low-latency

### 4. Vercel
**Pros:**
- Excellent for React apps
- Great developer experience
- Preview deployments
- Edge functions

**Cons:**
- More expensive for full-stack apps
- Optimized for Next.js
- API route limitations

**Perfect for:** Next.js applications

## 🚀 Migration Strategy

### Phase 1: Preparation (1-2 days)
1. **Audit current configuration**
   - Document all environment variables
   - Review `app.yaml` handlers
   - Check custom domain setup
   - Note traffic patterns

2. **Create Render account**
   - Set up team/organization
   - Connect GitHub repository
   - Configure billing

3. **Prepare codebase**
   - Ensure `PORT` environment variable is used
   - Update any GAE-specific code
   - Test locally with production build

### Phase 2: Test Deployment (2-3 days)
1. **Deploy to Render staging**
   ```yaml
   # render.yaml
   services:
     - type: web
       name: firewall-cafe
       env: node
       buildCommand: yarn && yarn build
       startCommand: yarn start
       envVars:
         - key: NODE_ENV
           value: production
         - key: IMAGE_SEARCH_PROVIDER
           value: serper
   ```

2. **Configure environment**
   - Add all environment variables
   - Set up custom domain (staging)
   - Configure SSL certificate

3. **Comprehensive testing**
   - Test all search functionality
   - Verify image proxying works
   - Check API endpoints
   - Load test with expected traffic

### Phase 3: Migration (1 day)
1. **DNS preparation**
   - Reduce TTL to 5 minutes
   - Document current DNS settings
   - Prepare new DNS records

2. **Deploy to production**
   - Create production service on Render
   - Deploy main branch
   - Verify all functionality

3. **Traffic switchover**
   - Update DNS to point to Render
   - Monitor traffic during transition
   - Keep GAE running as backup

### Phase 4: Cleanup (1 week later)
1. **Monitor and optimize**
   - Check performance metrics
   - Review error logs
   - Optimize if needed

2. **Decommission GAE**
   - Ensure all traffic on Render
   - Download any GAE logs
   - Shut down GAE instance
   - Cancel GAE billing

## 📝 Render Configuration

### render.yaml
```yaml
services:
  - type: web
    name: firewall-cafe
    env: node
    region: oregon
    plan: starter
    buildCommand: yarn && yarn build
    startCommand: yarn start
    healthCheckPath: /
    envVars:
      - key: NODE_ENV
        value: production
      - key: PUBLIC_URL
        value: https://firewallcafe.com
      - key: IMAGE_SEARCH_PROVIDER
        value: serper
      - key: SERPER_API_KEY
        sync: false
      - key: serpApiKey
        sync: false
      - key: apiKey
        sync: false
      - key: apiSecret
        sync: false
      - key: postmarkApiKey
        sync: false
```

### Required Environment Variables
1. `NODE_ENV=production`
2. `PUBLIC_URL=https://firewallcafe.com`
3. `IMAGE_SEARCH_PROVIDER=serper`
4. `SERPER_API_KEY` (from config.js)
5. `serpApiKey` (backup provider)
6. `apiKey` (Google Translate)
7. `apiSecret` (internal API)
8. `postmarkApiKey` (email service)

## ⚠️ Risk Mitigation

### Potential Issues & Solutions

1. **Cold Starts**
   - Solution: Use paid tier ($7/month) for always-on instance
   - Render Starter plan includes no cold starts

2. **Traffic Spikes**
   - Solution: Render auto-scales on higher tiers
   - Monitor and upgrade if needed

3. **DNS Propagation**
   - Solution: Keep GAE running during transition
   - Use low TTL for quick updates

4. **Environment Variables**
   - Solution: Document all vars before migration
   - Test with staging environment first

5. **Rollback Plan**
   - Keep GAE instance ready for 1 week
   - Document DNS rollback procedure
   - Maintain GAE deployment scripts

## 📊 Success Metrics

### Week 1
- [ ] Zero downtime during migration
- [ ] All functionality working correctly
- [ ] Response times ≤ GAE baseline
- [ ] No increase in error rates

### Month 1
- [ ] 80%+ cost reduction achieved
- [ ] 99.9%+ uptime maintained
- [ ] Deployment time < 5 minutes
- [ ] Team satisfied with new workflow

### Month 3
- [ ] Stable performance confirmed
- [ ] GAE fully decommissioned
- [ ] Cost savings reinvested
- [ ] Consider scaling optimizations

## 🎯 Next Steps

1. **Get team buy-in** on Render as platform choice
2. **Create Render account** and connect GitHub
3. **Deploy staging environment** for testing
4. **Schedule migration window** (low-traffic period)
5. **Execute migration** following this plan
6. **Monitor and optimize** post-migration

## 💡 Alternative Quick Wins

If full migration is delayed, consider these immediate cost optimizations:

1. **Review GAE instance class** - Downgrade if over-provisioned
2. **Optimize static file serving** - Use CDN for assets
3. **Reduce GAE regions** - Serve from single region if acceptable
4. **Clean up old versions** - Remove unused GAE deployments

---

**Document Date**: June 23, 2025  
**Status**: Planning Phase  
**Estimated Savings**: $516-1,116/year  
**Recommended Platform**: Render ($7/month)