const axios = require('axios');

/**
 * Test script to explore Serper.dev API
 * Based on common SERP API patterns and research
 */

// Test configuration
const SERPER_API_KEY = process.env.SERPER_API_KEY || 'YOUR_API_KEY_HERE';
const TEST_QUERY = 'cats';

// Common endpoints based on research
const ENDPOINTS = {
  search: 'https://google.serper.dev/search',
  images: 'https://google.serper.dev/images',
  news: 'https://google.serper.dev/news'
};

async function testSerperEndpoint(endpoint, query, type = 'images') {
  console.log(`\n=== Testing ${type.toUpperCase()} endpoint ===`);
  console.log(`URL: ${endpoint}`);
  console.log(`Query: ${query}`);
  
  try {
    const response = await axios.post(endpoint, {
      q: query,
      // Common parameters based on research
      num: 10,
      gl: 'us', // country
      hl: 'en'  // language
    }, {
      headers: {
        'X-API-KEY': SERPER_API_KEY,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('✅ Success!');
    console.log('Status:', response.status);
    console.log('Response structure:');
    
    // Log the structure without overwhelming output
    const data = response.data;
    console.log('Top-level keys:', Object.keys(data));
    
    if (type === 'images' && data.images) {
      console.log(`Images count: ${data.images.length}`);
      if (data.images.length > 0) {
        console.log('First image structure:', Object.keys(data.images[0]));
        console.log('First image sample:');
        console.log(JSON.stringify(data.images[0], null, 2));
      }
    }
    
    // Save full response for analysis
    require('fs').writeFileSync(
      `/tmp/serper-${type}-response.json`, 
      JSON.stringify(data, null, 2)
    );
    console.log(`Full response saved to /tmp/serper-${type}-response.json`);
    
    return data;
    
  } catch (error) {
    console.log('❌ Error!');
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Response:', error.response.data);
    } else {
      console.log('Error:', error.message);
    }
    return null;
  }
}

async function analyzeImageResults(data) {
  if (!data || !data.images) {
    console.log('No images data to analyze');
    return;
  }
  
  console.log('\n=== Image Results Analysis ===');
  const images = data.images;
  
  console.log(`Total images: ${images.length}`);
  
  // Analyze image data structure
  const firstImage = images[0];
  console.log('\nImage data fields:');
  Object.keys(firstImage).forEach(key => {
    const value = firstImage[key];
    const type = typeof value;
    const sample = type === 'string' ? value.substring(0, 50) + '...' : value;
    console.log(`  ${key}: ${type} - ${sample}`);
  });
  
  // Check for URL fields that could map to SerpAPI's 'original'
  const urlFields = Object.keys(firstImage).filter(key => 
    typeof firstImage[key] === 'string' && 
    firstImage[key].startsWith('http')
  );
  
  console.log('\nURL fields found:', urlFields);
  
  // Create mapping analysis for our current implementation
  console.log('\n=== Mapping Analysis ===');
  console.log('Current SerpAPI mapping:');
  console.log('  results["images_results"].map(result => result.original)');
  console.log('\nPossible Serper mapping:');
  urlFields.forEach(field => {
    console.log(`  data.images.map(image => image.${field})`);
  });
}

async function main() {
  console.log('🔍 Serper.dev API Explorer');
  console.log('==============================');
  
  if (SERPER_API_KEY === 'YOUR_API_KEY_HERE') {
    console.log('⚠️  Please set SERPER_API_KEY environment variable');
    console.log('   Example: SERPER_API_KEY=your_key node test-serper.js');
    console.log('\n📝 This script will still show you the expected request format');
  }
  
  // Test the images endpoint (our primary interest)
  const imageData = await testSerperEndpoint(ENDPOINTS.images, TEST_QUERY, 'images');
  
  if (imageData) {
    await analyzeImageResults(imageData);
  }
  
  // Also test general search to see if images are included
  console.log('\n' + '='.repeat(50));
  const searchData = await testSerperEndpoint(ENDPOINTS.search, TEST_QUERY, 'search');
  
  if (searchData) {
    console.log('\n=== General Search Analysis ===');
    console.log('Top-level keys:', Object.keys(searchData));
    if (searchData.images) {
      console.log('✅ Images included in general search');
      console.log(`Images count: ${searchData.images.length}`);
    } else {
      console.log('ℹ️  No images in general search response');
    }
  }
  
  console.log('\n🎯 Next Steps:');
  console.log('1. Sign up at https://serper.dev to get an API key');
  console.log('2. Set SERPER_API_KEY environment variable');
  console.log('3. Run this script again to see actual responses');
  console.log('4. Compare response format with current SerpAPI implementation');
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  testSerperEndpoint,
  analyzeImageResults,
  ENDPOINTS
};