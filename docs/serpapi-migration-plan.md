# SerpAPI Migration Plan: Cost-Effective Google Images Search Alternative

## Executive Summary
Migration from SerpAPI ($150/month) to cost-effective alternatives for Google Images search functionality.

## Current State Analysis
- **Current Cost**: $150/month for SerpAPI
- **Current Usage**: Google Images search via SerpAPI in `server/fetch.js` (lines 71-81)
- **Current Implementation**: Uses `serpapi` npm package with engine `google_images`
- **API Key**: Configured in `server/config.js` as `serpApiKey`
- **Data Returned**: Array of image URLs from `results["images_results"]`
- **Function**: `getGoogleImages(query)` returns array of image URLs

## Current Code Analysis
```javascript
// Current implementation in server/fetch.js
const getGoogleImages = async (query) => {
  const params = {
    q: query,
    engine: "google_images",
    ijn: "0",
    api_key: serverConfig.serpApiKey,
  };
  const results = await getJson(params);
  return getGoogleImageSrcs(results["images_results"]) || [];
};

const getGoogleImageSrcs = (results) => {
  return results.slice(0, 9).map((result) => result.original)
};
```

## Recommended Alternatives (Cost Comparison)

### 🥇 **Serper.dev** (Primary Choice)
- **Cost**: $0.30 per 1,000 queries ($30 for 100k vs $150 current)
- **Speed**: 1-2 seconds response time
- **Features**: Google Images API with full feature parity
- **Pros**: 80% cost savings, fast, stable production API
- **Cons**: Newer service (less established than SerpAPI)
- **API Endpoint**: https://google.serper.dev/images
- **Response Format**: JSON with images array

### 🥈 **Google Custom Search JSON API** (Fallback Option)
- **Cost**: 100 queries/day free, then $5 per 1,000 queries
- **Features**: Official Google API with image search capability
- **Pros**: Direct from Google, very reliable, extremely cheap for low volume
- **Cons**: 10k daily query limit, requires custom search engine setup
- **API Endpoint**: https://www.googleapis.com/customsearch/v1
- **Setup Required**: Custom Search Engine configuration

### 🥉 **Scrape-it Cloud** (Budget Option)
- **Cost**: $0.003 per request ($3 for 1,000 vs $150 current)
- **Speed**: ~4.7 seconds response time
- **Pros**: Cheapest option, 98% cost savings
- **Cons**: Slower response times, less proven for production

## Implementation Plan

### Phase 1: Setup & Documentation ✅
1. **Create Migration Branch** ✅
   - Create `feature/serpapi-migration` branch from main
   - Document current SerpAPI implementation details
   - Create comprehensive migration plan document

2. **Research & Account Setup** 🔄
   - Sign up for free trials/accounts with Serper.dev and Google Custom Search
   - Test API response formats and image quality
   - Validate rate limits and response times with sample queries

### Phase 2: Implementation (2-3 days)
1. **Create Abstraction Layer**
   - Build provider-agnostic service interface
   - Implement adapter pattern for easy provider switching
   - Add configuration option to switch between providers

2. **Implement Primary Provider (Serper.dev)**
   - Install required dependencies
   - Implement Serper API integration matching current interface
   - Update environment configuration for new API keys

3. **Implement Fallback Provider (Google Custom Search)**
   - Set up Google Custom Search Engine
   - Implement Google Custom Search JSON API integration
   - Add intelligent fallback logic

### Phase 3: Testing & Validation (1-2 days)
1. **Functional Testing**
   - Test image search results quality vs current SerpAPI
   - Validate all existing search functionality works
   - Test error handling and fallback mechanisms

2. **Performance Testing**
   - Measure response times vs current implementation
   - Test under load (if possible within rate limits)
   - Validate image URL quality and accessibility

### Phase 4: Deployment & Monitoring (1 day)
1. **Production Deployment**
   - Deploy with feature flag for gradual rollout
   - Monitor error rates and response times
   - Keep SerpAPI as emergency fallback initially

2. **Cost Monitoring**
   - Track actual usage costs vs projections
   - Monitor for any unexpected rate limit issues
   - Document cost savings achieved

## Technical Implementation Details

### New Service Architecture
```javascript
// Proposed provider abstraction
class ImageSearchService {
  constructor() {
    this.primaryProvider = new SerperProvider();
    this.fallbackProvider = new GoogleCustomSearchProvider();
    this.emergencyProvider = new SerpApiProvider(); // for rollback
  }
  
  async getImages(query) {
    try {
      return await this.primaryProvider.search(query);
    } catch (error) {
      console.warn('Primary provider failed, trying fallback:', error);
      try {
        return await this.fallbackProvider.search(query);
      } catch (fallbackError) {
        console.error('Fallback failed, using emergency provider:', fallbackError);
        return await this.emergencyProvider.search(query);
      }
    }
  }
}
```

### Configuration Changes
```javascript
// Add to server/config.js
module.exports = {
  // ... existing config
  
  // Image search provider configuration
  imageSearchProvider: process.env.IMAGE_SEARCH_PROVIDER || 'serper', // 'serper', 'google-custom', 'serpapi'
  
  // New API keys
  serperApiKey: process.env.SERPER_API_KEY || '',
  googleCustomSearchKey: process.env.GOOGLE_CUSTOM_SEARCH_KEY || '',
  googleCustomSearchEngineId: process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID || '',
  
  // Keep existing for rollback
  serpApiKey: 'b8cccfc8ac2095532f5acdbb8d277cd5386f4f339a489b688accfcf284f7f6b5',
};
```

### Files to Create/Modify
1. ✅ **Document Migration Plan**: `docs/serpapi-migration-plan.md`
2. 🔄 **Create Git Branch**: `feature/serpapi-migration`
3. **Update Configuration**: `server/config.js` (add new provider keys)
4. **Refactor Services**: `server/fetch.js` (add abstraction layer)
5. **Create Provider Classes**: `server/imageProviders/` (new directory)
6. **Update Dependencies**: `package.json` (if needed for new providers)
7. **Add Tests**: `server/tests/` (test provider switching)

## API Response Format Mapping

### Current SerpAPI Response
```javascript
{
  "images_results": [
    {
      "position": 1,
      "thumbnail": "https://...",
      "original": "https://...", // <- We use this field
      "title": "...",
      "source": "..."
    }
  ]
}
```

### Serper.dev Response Format
```javascript
{
  "images": [
    {
      "title": "...",
      "imageUrl": "https://...", // <- Map to 'original'
      "imageWidth": 1200,
      "imageHeight": 800,
      "thumbnailUrl": "https://...",
      "source": "..."
    }
  ]
}
```

### Google Custom Search Response Format
```javascript
{
  "items": [
    {
      "title": "...",
      "link": "https://...", // <- Map to 'original'
      "mime": "image/jpeg",
      "image": {
        "contextLink": "...",
        "height": 800,
        "width": 1200,
        "thumbnailLink": "..."
      }
    }
  ]
}
```

## Expected Outcomes
- **Cost Savings**: 80-98% reduction ($30-120/month savings)
- **Performance**: Maintained or improved response times (1-2s vs current)
- **Reliability**: Maintained service quality with fallback options
- **Flexibility**: Easy provider switching for future optimization

## Risk Mitigation
- Implement comprehensive error handling with cascading fallbacks
- Maintain SerpAPI integration for emergency rollback
- Use feature flags for gradual rollout
- Monitor closely for first 30 days
- Keep detailed logs of provider performance and costs

## Success Metrics
- **Cost Reduction**: Target 80%+ savings
- **Response Time**: Maintain <3 second average
- **Error Rate**: Keep <1% for image search requests
- **Image Quality**: Maintain same relevance and resolution
- **Uptime**: 99.9%+ availability

## Rollback Plan
- Keep SerpAPI credentials and code intact for 60 days
- Implement instant rollback via configuration flag
- Monitor error rates and revert if >5% error rate
- Document all issues encountered for future reference

## Timeline: 5-7 days total
- **Day 1**: Setup, documentation, account creation ✅
- **Day 2-3**: Implement Serper.dev integration
- **Day 4**: Implement Google Custom Search fallback
- **Day 5**: Testing and validation
- **Day 6**: Deployment and monitoring setup
- **Day 7**: Buffer for issues and optimization

## Contact Information
- **Serper.dev Support**: Available via their website
- **Google Custom Search**: Google Cloud Console support
- **Emergency Contact**: Keep SerpAPI account active for 60 days

---
**Document Version**: 1.0  
**Created**: 2025-06-22  
**Last Updated**: 2025-06-22  
**Status**: Phase 1 Complete