/**
 * Comparison of image search providers
 * Shows current SerpAPI implementation vs proposed alternatives
 */

const axios = require('axios');

// Current SerpAPI implementation (from fetch.js)
class SerpApiProvider {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.name = 'SerpAPI';
  }

  async getImages(query) {
    console.log(`[${this.name}] Fetching images for: ${query}`);
    
    const { getJson } = require("serpapi");
    const params = {
      q: query,
      engine: "google_images",
      ijn: "0",
      api_key: this.apiKey,
    };

    try {
      const results = await getJson(params);
      const images = this.extractImageUrls(results["images_results"]);
      console.log(`[${this.name}] Found ${images.length} images`);
      return images;
    } catch (error) {
      console.error(`[${this.name}] Error:`, error);
      throw error;
    }
  }

  extractImageUrls(results) {
    if (!results) return [];
    return results.slice(0, 9).map((result) => result.original);
  }
}

// Proposed Serper.dev implementation
class SerperProvider {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.name = 'Serper.dev';
    this.endpoint = 'https://google.serper.dev/images';
  }

  async getImages(query) {
    console.log(`[${this.name}] Fetching images for: ${query}`);
    
    try {
      const response = await axios.post(this.endpoint, {
        q: query,
        num: 10,
        gl: 'us',
        hl: 'en'
      }, {
        headers: {
          'X-API-KEY': this.apiKey,
          'Content-Type': 'application/json'
        }
      });

      const images = this.extractImageUrls(response.data);
      console.log(`[${this.name}] Found ${images.length} images`);
      return images;
    } catch (error) {
      console.error(`[${this.name}] Error:`, error.response?.data || error.message);
      throw error;
    }
  }

  extractImageUrls(data) {
    if (!data || !data.images) return [];
    
    // Based on typical SERP API response structure
    // We'll need to verify the exact field name when we get API access
    return data.images.slice(0, 9).map((image) => {
      // Common field names in SERP APIs for full-size images:
      return image.imageUrl || image.original || image.link || image.url;
    });
  }
}

// Proposed Google Custom Search implementation
class GoogleCustomSearchProvider {
  constructor(apiKey, searchEngineId) {
    this.apiKey = apiKey;
    this.searchEngineId = searchEngineId;
    this.name = 'Google Custom Search';
    this.endpoint = 'https://www.googleapis.com/customsearch/v1';
  }

  async getImages(query) {
    console.log(`[${this.name}] Fetching images for: ${query}`);
    
    try {
      const response = await axios.get(this.endpoint, {
        params: {
          key: this.apiKey,
          cx: this.searchEngineId,
          q: query,
          searchType: 'image',
          num: 9,
          safe: 'off'
        }
      });

      const images = this.extractImageUrls(response.data);
      console.log(`[${this.name}] Found ${images.length} images`);
      return images;
    } catch (error) {
      console.error(`[${this.name}] Error:`, error.response?.data || error.message);
      throw error;
    }
  }

  extractImageUrls(data) {
    if (!data || !data.items) return [];
    return data.items.slice(0, 9).map((item) => item.link);
  }
}

// Unified service with fallback chain
class ImageSearchService {
  constructor(config) {
    this.providers = [];
    
    // Primary provider
    if (config.serperApiKey) {
      this.providers.push(new SerperProvider(config.serperApiKey));
    }
    
    // Fallback provider
    if (config.googleCustomSearchKey && config.googleCustomSearchEngineId) {
      this.providers.push(new GoogleCustomSearchProvider(
        config.googleCustomSearchKey, 
        config.googleCustomSearchEngineId
      ));
    }
    
    // Emergency fallback (current SerpAPI)
    if (config.serpApiKey) {
      this.providers.push(new SerpApiProvider(config.serpApiKey));
    }
  }

  async getImages(query) {
    console.log(`\n🔍 Searching for images: "${query}"`);
    
    for (let i = 0; i < this.providers.length; i++) {
      const provider = this.providers[i];
      
      try {
        console.log(`\n⚡ Attempting with ${provider.name} (provider ${i + 1}/${this.providers.length})`);
        const startTime = Date.now();
        
        const results = await provider.getImages(query);
        
        const duration = Date.now() - startTime;
        console.log(`✅ Success! ${provider.name} returned ${results.length} images in ${duration}ms`);
        
        return {
          provider: provider.name,
          images: results,
          duration,
          fallbackLevel: i
        };
        
      } catch (error) {
        console.log(`❌ ${provider.name} failed:`, error.message);
        
        // If this is the last provider, re-throw the error
        if (i === this.providers.length - 1) {
          console.log(`🚨 All providers failed!`);
          throw new Error(`All image search providers failed. Last error: ${error.message}`);
        }
        
        console.log(`🔄 Trying next provider...`);
      }
    }
  }
}

// Cost comparison
function printCostComparison() {
  console.log('\n💰 Cost Comparison (per 1,000 queries)');
  console.log('==========================================');
  console.log('SerpAPI:              $10.00 - $15.00 (current: ~$150/month)');
  console.log('Serper.dev:           $0.30 (80-98% savings)');
  console.log('Google Custom Search: $5.00 (after 100 free daily)');
  console.log('');
  console.log('Monthly cost estimates (assuming 10k queries):');
  console.log('SerpAPI:              ~$150');
  console.log('Serper.dev:           ~$3');
  console.log('Google Custom Search: ~$50 (after free tier)');
}

// Example usage
async function demonstrateUsage() {
  console.log('🚀 Image Search Provider Demonstration');
  console.log('=====================================');
  
  printCostComparison();
  
  const config = {
    serperApiKey: process.env.SERPER_API_KEY,
    googleCustomSearchKey: process.env.GOOGLE_CUSTOM_SEARCH_KEY,
    googleCustomSearchEngineId: process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID,
    serpApiKey: process.env.SERP_API_KEY // existing key
  };
  
  const imageService = new ImageSearchService(config);
  
  if (imageService.providers.length === 0) {
    console.log('\n⚠️  No API keys configured. Set environment variables:');
    console.log('   SERPER_API_KEY=your_serper_key');
    console.log('   GOOGLE_CUSTOM_SEARCH_KEY=your_google_key');
    console.log('   GOOGLE_CUSTOM_SEARCH_ENGINE_ID=your_engine_id');
    console.log('   SERP_API_KEY=your_serpapi_key');
    return;
  }
  
  console.log(`\n🔧 Configured ${imageService.providers.length} provider(s):`);
  imageService.providers.forEach((provider, i) => {
    console.log(`   ${i + 1}. ${provider.name}`);
  });
  
  try {
    const result = await imageService.getImages('test query');
    
    console.log('\n📊 Result Summary:');
    console.log(`Provider used: ${result.provider}`);
    console.log(`Fallback level: ${result.fallbackLevel}`);
    console.log(`Response time: ${result.duration}ms`);
    console.log(`Images found: ${result.images.length}`);
    console.log('Sample URLs:');
    result.images.slice(0, 3).forEach((url, i) => {
      console.log(`   ${i + 1}. ${url}`);
    });
    
  } catch (error) {
    console.error('\n❌ Demonstration failed:', error.message);
  }
}

// Export for testing
module.exports = {
  SerpApiProvider,
  SerperProvider,
  GoogleCustomSearchProvider,
  ImageSearchService,
  demonstrateUsage
};

// Run demonstration if called directly
if (require.main === module) {
  demonstrateUsage().catch(console.error);
}