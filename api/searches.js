// Vercel Function to handle search requests
// Simple proxy to backend API for searches

export default async function handler(req, res) {
  console.log('=== SEARCHES REQUEST START ===');
  console.log('🔍 Method:', req.method);
  console.log('🔍 URL:', req.url);
  console.log('🔍 Query params:', JSON.stringify(req.query, null, 2));
  console.log('🔍 Body:', JSON.stringify(req.body, null, 2));
  console.log('🔍 Headers:', JSON.stringify(req.headers, null, 2));

  // Get backend API URL from environment variable or use default
  const backendUrl = process.env.BACKEND_API_URL;
  console.log('🔍 Backend URL from env:', backendUrl);

  // Handle both GET and POST (app uses POST, backend expects GET)
  if (req.method === 'GET' || req.method === 'POST') {
    try {
      // Extract query parameters
      const { query, page, page_size, cities, ...otherFilters } = req.query;
      console.log('🔍 Extracted params:', { query, page, page_size, cities, otherFilters });

      if (cities) {
        otherFilters.search_locations = cities;
        delete otherFilters.cities;
        console.log('🔍 Mapped cities to search_locations:', cities);
      }

      const params = new URLSearchParams({
        ...(query && { query }),
        ...(page && { page }),
        ...(page_size && { page_size }),
        ...otherFilters
      });

      const url = `${backendUrl}searches?${params.toString()}`;
      console.log('🔄 Fetching searches from:', url);
      console.log('🔄 Query string:', params.toString());

      const requestHeaders = {
        'Content-Type': 'application/json',
        // Forward client IP information
        'x-forwarded-for': req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
        'x-real-ip': req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || 'unknown',
        'user-agent': req.headers['user-agent'] || 'vercel-function',
      };

      console.log('📋 Request headers:', JSON.stringify(requestHeaders, null, 2));

      const response = await fetch(url, {
        method: 'GET',
        headers: requestHeaders,
      });

      console.log('📥 Backend response status:', response.status);
      console.log('📥 Backend response headers:', JSON.stringify(Object.fromEntries(response.headers.entries()), null, 2));

      const responseText = await response.text();
      console.log('📥 Backend response text (raw):', responseText);

      let data;
      try {
        data = JSON.parse(responseText);
        console.log('📥 Backend response data (parsed):', JSON.stringify(data, null, 2));
      } catch (parseError) {
        console.log('⚠️ Failed to parse response as JSON:', parseError.message);
        data = { error: 'Invalid JSON response from backend', rawResponse: responseText };
      }

      console.log('✅ Sending response with status:', response.status);
      res.status(response.status).json(data);
      console.log('=== SEARCHES REQUEST END ===');

    } catch (error) {
      console.error('❌ Search error:', error);
      console.error('❌ Error stack:', error.stack);

      const errorResponse = {
        error: 'Failed to fetch searches',
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      };

      console.log('❌ Sending error response:', JSON.stringify(errorResponse, null, 2));
      res.status(500).json(errorResponse);
      console.log('=== SEARCHES REQUEST END (ERROR) ===');
    }
  } else {
    console.log('❌ Method not allowed:', req.method);
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    console.log('=== SEARCHES REQUEST END (METHOD NOT ALLOWED) ===');
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
