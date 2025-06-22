/**
 * Test the new integrated getGoogleImages function
 */

const { getGoogleImages } = require('./fetch');

async function testIntegration() {
  console.log('🧪 Testing integrated getGoogleImages function');
  console.log('=============================================');
  
  const testQuery = 'dogs';
  
  try {
    console.log(`\n🔍 Searching for: "${testQuery}"`);
    const startTime = Date.now();
    
    const results = await getGoogleImages(testQuery);
    
    const duration = Date.now() - startTime;
    
    console.log('\n✅ Success!');
    console.log(`📊 Results: ${results.length} images`);
    console.log(`⏱️  Duration: ${duration}ms`);
    
    console.log('\n🖼️  Sample URLs:');
    results.slice(0, 5).forEach((url, i) => {
      console.log(`   ${i + 1}. ${url}`);
    });
    
    // Verify URLs are valid
    const validUrls = results.filter(url => url && url.startsWith('http'));
    console.log(`\n✅ Valid URLs: ${validUrls.length}/${results.length}`);
    
    if (validUrls.length !== results.length) {
      console.log('⚠️  Some URLs may be invalid:');
      results.forEach((url, i) => {
        if (!url || !url.startsWith('http')) {
          console.log(`   ${i + 1}. "${url}"`);
        }
      });
    }
    
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    console.error('Stack:', error.stack);
  }
}

// Test both providers if both are configured
async function testBothProviders() {
  console.log('\n🔄 Testing provider switching');
  console.log('==============================');
  
  const serverConfig = require('./config');
  const originalProvider = serverConfig.imageSearchProvider;
  
  // Test Serper
  console.log('\n🧪 Testing Serper.dev...');
  serverConfig.imageSearchProvider = 'serper';
  try {
    const serperResults = await getGoogleImages('test serper');
    console.log(`✅ Serper: ${serperResults.length} results`);
  } catch (error) {
    console.log(`❌ Serper failed: ${error.message}`);
  }
  
  // Test SerpAPI
  console.log('\n🧪 Testing SerpAPI...');
  serverConfig.imageSearchProvider = 'serpapi';
  try {
    const serpApiResults = await getGoogleImages('test serpapi');
    console.log(`✅ SerpAPI: ${serpApiResults.length} results`);
  } catch (error) {
    console.log(`❌ SerpAPI failed: ${error.message}`);
  }
  
  // Restore original
  serverConfig.imageSearchProvider = originalProvider;
  console.log(`\n🔄 Restored provider to: ${originalProvider}`);
}

async function main() {
  await testIntegration();
  await testBothProviders();
  
  console.log('\n🎯 Integration test complete!');
  console.log('\nNext steps:');
  console.log('1. Verify image quality compared to SerpAPI');
  console.log('2. Test error handling and fallbacks');
  console.log('3. Monitor performance in production');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { testIntegration, testBothProviders };