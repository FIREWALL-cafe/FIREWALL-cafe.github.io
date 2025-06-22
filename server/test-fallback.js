/**
 * Test fallback mechanism by simulating errors
 */

const serverConfig = require('./config');

// Save original values
const originalSerperKey = serverConfig.serperApiKey;
const originalSerpApiKey = serverConfig.serpApiKey;

async function testFallbackMechanism() {
  console.log('🧪 Testing Fallback Mechanism');
  console.log('==============================');
  
  const { getGoogleImages } = require('./fetch');
  
  // Test 1: Primary provider fails, fallback succeeds
  console.log('\n📝 Test 1: Invalid Serper key, should fallback to SerpAPI');
  serverConfig.imageSearchProvider = 'serper';
  serverConfig.serperApiKey = 'invalid_key';
  
  try {
    const results = await getGoogleImages('fallback test 1');
    console.log(`✅ Fallback successful: ${results.length} results`);
  } catch (error) {
    console.log(`❌ Fallback failed: ${error.message}`);
  }
  
  // Test 2: Both providers fail
  console.log('\n📝 Test 2: Both providers invalid, should fail gracefully');
  serverConfig.serpApiKey = 'invalid_serpapi_key';
  
  try {
    const results = await getGoogleImages('fallback test 2');
    console.log(`❌ Should have failed but got: ${results.length} results`);
  } catch (error) {
    console.log(`✅ Failed gracefully: ${error.message}`);
  }
  
  // Restore original values
  serverConfig.serperApiKey = originalSerperKey;
  serverConfig.serpApiKey = originalSerpApiKey;
  
  console.log('\n🔄 Restored original API keys');
  
  // Test 3: Normal operation after restore
  console.log('\n📝 Test 3: Normal operation after restore');
  try {
    const results = await getGoogleImages('normal test');
    console.log(`✅ Normal operation: ${results.length} results`);
  } catch (error) {
    console.log(`❌ Normal operation failed: ${error.message}`);
  }
}

if (require.main === module) {
  testFallbackMechanism().catch(console.error);
}