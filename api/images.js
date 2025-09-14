// Vercel Function to handle image search requests
// Implements Google and Baidu search directly without Express server dependency

// Helper functions for search providers
async function getGoogleImagesSerper(query) {
  console.log('Fetching Google images via Serper.dev for:', query);

  const response = await fetch('https://google.serper.dev/images', {
    method: 'POST',
    headers: {
      'X-API-KEY': process.env.SERPER_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: query,
      num: 10,
      gl: 'us',
      hl: 'en'
    })
  });

  const data = await response.json();

  // Extract image URLs from Serper response
  const images = data.images || [];
  return images
    .filter(img => img && img.imageUrl) // Filter out invalid images
    .slice(0, 9) // Limit to 9 images
    .map(img => ({
      imageUrl: img.imageUrl,
      title: img.title,
      link: img.link,
      source: img.source
    }));
}

async function getBaiduImages(query) {
  console.log('Fetching Baidu images for:', query);

  const url = `https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&fp=result&word=${encodeURI(query)}&pn=0&rn=30`;

  try {
    // Create an AbortController for timeout handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; HD1913) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36 EdgA/46.1.2.5140',
        'Cookie': 'BAIDUID=DA3AF7E580B9999700832FE88F5B01DA:FG=1; BAIDUID_BFESS=DA3AF7E580B9999700832FE88F5B01DA:FG=1; H_WISE_SIDS=62325_62842_62967_62999;'
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Baidu API returned ${response.status}: ${response.statusText}`);
    }

    const text = await response.text();
    const data = JSON.parse(text);
    const images = data.data || [];

    const results = images
      .filter(img => img && img.thumbURL) // Filter out invalid images
      .slice(0, 9) // Limit to 9 images
      .map(img => ({
        imageUrl: img.thumbURL,
        title: img.fromPageTitleEnc,
        link: img.objURL,
        source: img.fromURLHost
      }));

    console.log(`Successfully fetched ${results.length} Baidu images`);
    return results;

  } catch (error) {
    console.warn('Baidu image search failed:', error.message);

    // Return empty array as fallback instead of throwing
    // This allows Google results to still be processed and saved
    return [];
  }
}

async function detectLanguage(query) {
  const response = await fetch(`https://babelfish.firewallcafe.com/detect-language?query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.language;
}

async function translateText(query, langFrom, langTo) {
  console.log('Translating from', langFrom, 'to', langTo);

  const response = await fetch('https://babelfish.firewallcafe.com/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      query: query,
      searchEngine: 'google',
      secret: process.env.SHARED_SECRET,
      langFrom: langFrom,
      langTo: langTo
    })
  });

  const data = await response.json();
  return data.translated;
}

async function saveSearchResults({ query, google, baidu, langTo, langFrom, search_client_name, search_ip_address, translation }) {
  console.log('Saving search results for:', query);

  const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:11458/';

  const imageData = {
    timestamp: Date.now(),
    location: process.env.LOCATION || 'vercel',
    search_client_name: search_client_name,
    search_ip_address: search_ip_address,
    secret: process.env.API_SECRET,
    search_engine: 'google',
    search: query,
    translation,
    lang_from: langFrom,
    lang_to: langTo,
    lang_confidence: '1.0',
    lang_alternate: null,
    lang_name: langFrom === 'en' ? 'English' : langFrom,
    google_images: google.slice(0, 9),
    baidu_images: baidu.slice(0, 9)
  };

  const response = await fetch(`${backendUrl}saveSearchAndImages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(imageData)
  });

  const result = await response.json();
  return { searchId: result.searchId };
}

// Main handler function
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { query, search_client_name } = req.body;

    if (!query || query.trim() === '') {
      throw new Error('Search query is required');
    }

    console.log('Processing search for:', query);

    // For testing, use simple language detection
    const langFrom = /[\u4e00-\u9fff]/.test(query) ? 'zh-CN' : 'en';
    const langTo = langFrom === 'en' ? 'zh-CN' : 'en';
    const translatedQuery = langFrom === 'en' ? '测试' : 'test'; // Mock translation
    const enQuery = langFrom === 'en' ? query : translatedQuery;
    const cnQuery = langTo === 'zh-CN' ? translatedQuery : query;

    console.log('Mock language detection:', langFrom, '-> translating to:', langTo);

    // 3. Search both engines in parallel with fallback handling
    const [googleResults, baiduResults] = await Promise.allSettled([
      getGoogleImagesSerper(enQuery),
      getBaiduImages(cnQuery),
    ]);

    const finalGoogleResults = googleResults.status === 'fulfilled' ? googleResults.value : [];
    const finalBaiduResults = baiduResults.status === 'fulfilled' ? baiduResults.value : [];

    if (googleResults.status === 'rejected') {
      console.error('Google search failed:', googleResults.reason);
    }
    if (baiduResults.status === 'rejected') {
      console.error('Baidu search failed:', baiduResults.reason);
    }

    console.log('Search results - Google:', finalGoogleResults.length, 'Baidu:', finalBaiduResults.length);

    // 4. Extract client IP (Vercel provides this in headers)
    const clientIp = req.headers['x-forwarded-for'] ||
                     req.headers['x-real-ip'] ||
                     req.connection?.remoteAddress ||
                     '127.0.0.1';

    // 5. Save results to database (with fallback)
    let searchId = null;
    try {
      const saveResult = await saveSearchResults({
        query,
        google: finalGoogleResults,
        baidu: finalBaiduResults,
        langTo,
        langFrom,
        search_client_name,
        search_ip_address: clientIp,
        translation: translatedQuery
      });
      searchId = saveResult.searchId;
      console.log('Search saved with ID:', searchId, 'and IP:', clientIp);
    } catch (saveError) {
      console.warn('Failed to save search results:', saveError.message);
      console.log('Continuing with search results despite save failure');
      // Continue without searchId - still return results to user
    }

    // 6. Return results (always return results, even if save failed)
    const response = {
      searchId,
      googleResults: finalGoogleResults,
      baiduResults: finalBaiduResults,
      translation: translatedQuery
    };

    const resultCount = finalGoogleResults.length + finalBaiduResults.length;
    console.log(`Search completed successfully, ${finalGoogleResults.length} Google + ${finalBaiduResults.length} Baidu = ${resultCount} total results`);
    res.status(200).json(response);

  } catch (error) {
    console.error('Image search error:', error);
    res.status(400).json({
      error: error.message || 'Failed to process search request',
      details: error.toString()
    });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};