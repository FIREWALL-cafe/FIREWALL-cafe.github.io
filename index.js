const path = require('path');
const express = require('express');
const axios = require('axios');
const { getDashboardData, getGoogleImages, getBaiduImages, getDetectedLanguage, getSearchImages, getSearchesByTerm, getSearchesFilter, getTranslation, postVote, saveImages, getSearchVoteCounts, getSearchLocations } = require('./server/fetch');
const postmark = require('postmark');
const { ipMiddleware, getClientIp } = require('./server/ip-utils');

const serverConfig = require('./server/config');

const app = express();

// Configure Express to trust proxy headers (required for Google App Engine)
app.set('trust proxy', true);

app.use(express.json());

// Add IP extraction middleware - makes req.clientIp available in all routes
app.use(ipMiddleware);

app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(500).send('Something broke!')
})

app.use(express.static(path.join(__dirname, "build")));

app.get('/dashboardData', async (req, res) => {
  console.log('Received dashboardData request');
  const data = await getDashboardData();
  console.log('dashboardData:', data);
  res.json(data);
});


app.get('/proxy-image', async (req, res) => {
  try {
    const imageUrl = req.query.url;
    
    if (!imageUrl || imageUrl === 'undefined' || imageUrl === 'null') {
      console.error('No valid image URL provided');
      return res.sendFile(path.join(__dirname, 'src/assets/icons/broken-image-placeholder.svg'));
    }

    // Basic URL validation
    try {
      new URL(imageUrl);
    } catch (e) {
      console.error('Invalid URL format:', imageUrl);
      return res.sendFile(path.join(__dirname, 'src/assets/icons/broken-image-placeholder.svg'));
    }

    console.log('Fetching image from:', imageUrl);

    const response = await axios({
      url: imageUrl,
      method: 'GET',
      responseType: 'stream',
      timeout: 10000, // 10 second timeout
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
      }
    });

    // Validate content type is an image
    const contentType = response.headers['content-type'];
    if (!contentType || !contentType.startsWith('image/')) {
      console.error('Invalid content type:', contentType);
      console.log('placeholder for', imageUrl);
      return res.sendFile(path.join(__dirname, 'src/assets/icons/broken-image-placeholder.svg'));
    }

    // Set appropriate headers
    res.set({
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000',
      'Access-Control-Allow-Origin': '*'
    });

    // Pipe the image stream to the response
    response.data.pipe(res);

    // Handle errors in the pipeline
    response.data.on('error', (error) => {
      console.error('Error in image stream:', error);
      if (!res.headersSent) {
        res.sendFile(path.join(__dirname, 'src/assets/icons/broken-image-placeholder.svg'));
      }
    });
  } catch (error) {
    console.error('Error proxying image:', error.message);
    console.error('Error details:', error);
    
    if (!res.headersSent) {
      res.sendFile(path.join(__dirname, 'src/assets/icons/broken-image-placeholder.svg'));
    }
  }
});

app.post("/searches/:search_id/images", async (req, res) => {
  console.log('/searches/:search_id/images:', req.params);
  console.log("trying to get images for search id", req.params.search_id);
  const { search_id } = req.params;

  const data = await getSearchImages(search_id);

  res.json(data);
});

app.post('/images', async (req, res) => {
  const data = {};
  let langTo;
  const { query, search_client_name } = req.body; 
  console.log('query', query)

  try {
    if (!query || query.trim() === '') {
      throw new Error('Search query is required');
    }

    const { language: langFrom } = await getDetectedLanguage(encodeURIComponent(query));
    langTo = langFrom === 'en' ? 'zh-CN' : 'en';
    console.log('langFrom', langFrom);
    console.log('langTo', langTo);

    const translatedQuery = await getTranslation(encodeURIComponent(query), langFrom, langTo);
    const enQuery = langFrom === 'en' ? query : translatedQuery;
    const cnQuery = langTo === 'zh-CN' ? translatedQuery : query;
    console.log('translatedQuery', translatedQuery);
    const results = await Promise.all([
      getGoogleImages(enQuery),
      getBaiduImages(cnQuery),
    ]);

    const { searchId } = await saveImages({ 
      query, 
      google: results[0].slice(0, 9), 
      baidu: results[1].slice(0, 9), 
      langTo, 
      langFrom, 
      search_client_name, 
      search_ip_address: req.clientIp,  // Add IP tracking
      translation: translatedQuery 
    });
    
    console.log('Search saved with IP:', req.clientIp);

    data.searchId = searchId;
    data.googleResults = results[0];
    data.baiduResults = results[1];
    data.translation = translatedQuery;
  } catch (error) {
    console.error('Error processing image search:', error);
    return res.status(400).json({ 
      error: error.message || 'Failed to process search request',
      details: error.toString()
    });
  }

  res.json(data);
});

app.post('/searches', async (req, res) => {
  console.log('/searches query params:', req.query);

  const { query, page, page_size, ...otherFilters } = req.query;

  if (req.query.cities) {
    otherFilters.search_locations = req.query.cities;
  }
  
  // Pass through us_states parameter for geographic filtering
  if (req.query.us_states) {
    otherFilters.us_states = req.query.us_states;
  }
  
  // Pass through countries parameter for geographic filtering
  if (req.query.countries) {
    otherFilters.countries = req.query.countries;
  }
  
  // Pass through date parameters for filtering
  if (req.query.start_date) {
    otherFilters.start_date = req.query.start_date;
  }
  
  if (req.query.end_date) {
    otherFilters.end_date = req.query.end_date;
  }

  // Ensure pagination parameters are numbers
  const paginationParams = {
    page: parseInt(page) || 1,
    page_size: parseInt(page_size) || 25
  };

  try {
    let data;
    if (query) {
      console.log('Processing search by term:', query);
      const decodedQuery = decodeURIComponent(query);
      data = await getSearchesByTerm(decodedQuery, paginationParams);
    } else {
      console.log('Processing filter options:', { ...otherFilters, ...paginationParams });
      data = await getSearchesFilter({ ...otherFilters, ...paginationParams });
    }

    console.log('Search results:', data.data.length);
    
    res.json(data);
  } catch (error) {
    console.error('Error in /searches endpoint:', error);
    console.error('Error stack:', error.stack);
    res.status(400).json({ 
      error: error.message || 'Failed to process search request',
      details: error.toString(),
      stack: error.stack
    });
  }
});

app.post('/vote', async (req, res) => {
  console.log('/vote:', req.body);
  
  try {
    req.body.vote_ip_address = req.clientIp;
    
    console.log('Vote IP extracted:', req.body.vote_ip_address);
    
    const data = await postVote({ ...req.body });
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to submit vote' });
  }
});

app.post('/searches/votes/counts/:search_id', async (req, res) => {
  try {
    console.log('Getting vote counts for search:', req.params.search_id);
    const data = await getSearchVoteCounts(req.params.search_id);
    res.json(data);
  } catch (error) {
    console.error('Error getting vote counts:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to get vote counts'
    });
  }
});

// Geographic analytics endpoint
app.get('/api/analytics/geographic', async (req, res) => {
  console.log('/api/analytics/geographic: request received');
  
  try {
    const response = await axios.get(`${serverConfig.apiUrl}analytics/geographic`);
    res.json(response.data);
  } catch (error) {
    console.error('Geographic analytics error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch geographic analytics',
      message: error.message 
    });
  }
});

// US States analytics endpoint
app.get('/api/analytics/geographic/us-states', async (req, res) => {
  console.log('/api/analytics/geographic/us-states: request received');
  
  try {
    const response = await axios.get(`${serverConfig.apiUrl}analytics/geographic/us-states`);
    res.json(response.data);
  } catch (error) {
    console.error('US states analytics error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch US states analytics',
      message: error.message 
    });
  }
});

// Countries list endpoint
app.get('/api/countries', async (req, res) => {
  console.log('/api/countries: request received');
  
  try {
    const response = await axios.get(`${serverConfig.apiUrl}countries`);
    res.json(response.data);
  } catch (error) {
    console.error('Countries list error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch countries list',
      message: error.message 
    });
  }
});

// Search locations list endpoint
app.get('/searches/search-locations', async (req, res) => {
  console.log('/searches/search-locations: request received');
  
  try {
    const data = await getSearchLocations();
    res.json(data);
  } catch (error) {
    console.error('Search locations list error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch search locations list',
      message: error.message 
    });
  }
});

// Search analytics endpoint
app.get('/api/analytics/searches', async (req, res) => {
  console.log('/api/analytics/searches: request received');
  
  try {
    const response = await axios.get(`${serverConfig.apiUrl}analytics/searches`);
    res.json(response.data);
  } catch (error) {
    console.error('Search analytics error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch search analytics',
      message: error.message 
    });
  }
});

// Vote analytics endpoint
app.get('/api/analytics/votes', async (req, res) => {
  console.log('/api/analytics/votes: request received');
  
  try {
    const response = await axios.get(`${serverConfig.apiUrl}analytics/votes`);
    res.json(response.data);
  } catch (error) {
    console.error('Vote analytics error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch vote analytics',
      message: error.message 
    });
  }
});

// Recent activity endpoint
app.get('/api/analytics/recent-activity', async (req, res) => {
  console.log('/api/analytics/recent-activity: request received');
  
  try {
    const response = await axios.get(`${serverConfig.apiUrl}analytics/recent-activity`);
    res.json(response.data);
  } catch (error) {
    console.error('Recent activity analytics error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch recent activity',
      message: error.message 
    });
  }
});

// Current user IP endpoint
app.get('/api/my-ip', (req, res) => {
  console.log('/api/my-ip: request received');
  
  try {
    const userIP = req.clientIp;
    
    console.log('User IP detected:', userIP);
    
    res.json({
      ip: userIP,
      timestamp: new Date().toISOString(),
      headers: {
        'x-forwarded-for': req.headers['x-forwarded-for'],
        'x-appengine-user-ip': req.headers['x-appengine-user-ip'],
        'user-agent': req.headers['user-agent']
      }
    });
  } catch (error) {
    console.error('Error getting user IP:', error);
    res.status(500).json({ 
      error: 'Failed to detect IP address',
      message: error.message 
    });
  }
});


// Search comparison demo endpoint
app.post('/api/search-demo', async (req, res) => {
  console.log('/api/search-demo: request received', req.body);
  const { query } = req.body;
  
  if (!query || query.trim() === '') {
    return res.status(400).json({ 
      error: 'Query parameter is required' 
    });
  }

  try {
    const results = await Promise.allSettled([
      // Force SerpAPI
      (async () => {
        const originalProvider = serverConfig.imageSearchProvider;
        serverConfig.imageSearchProvider = 'serpapi';
        try {
          const images = await getGoogleImages(query);
          return images.slice(0, 5).map(url => ({
            url,
            title: 'SerpAPI Result',
            source: 'via SerpAPI'
          }));
        } finally {
          serverConfig.imageSearchProvider = originalProvider;
        }
      })(),
      
      // Force Serper
      (async () => {
        const originalProvider = serverConfig.imageSearchProvider;
        serverConfig.imageSearchProvider = 'serper';
        try {
          const images = await getGoogleImages(query);
          return images.slice(0, 5).map(url => ({
            url,
            title: 'Serper Result',
            source: 'via Serper.dev'
          }));
        } finally {
          serverConfig.imageSearchProvider = originalProvider;
        }
      })()
    ]);

    const [serpApiResult, serperResult] = results;
    
    res.json({
      serpapi: serpApiResult.status === 'fulfilled' ? serpApiResult.value : [],
      serper: serperResult.status === 'fulfilled' ? serperResult.value : [],
      errors: {
        serpapi: serpApiResult.status === 'rejected' ? serpApiResult.reason.message : null,
        serper: serperResult.status === 'rejected' ? serperResult.reason.message : null
      }
    });
    
  } catch (error) {
    console.error('Search demo error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch search results',
      message: error.message 
    });
  }
});

app.post('/send-email', async (req, res) => {
  console.log('/send-email: trying!', req.body);
  const { to, subject, text } = req.body;
  const client = new postmark.ServerClient(serverConfig.postmarkApiKey);

  try {
    await client.sendEmail({
      From: 'info@firewallcafe.com',
      To: to,
      Subject: subject,
      TextBody: text
    });

    console.log('Email sent successfully:', { to, subject, text });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Catch-all handler: send back React's index.html file for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`Using API URL: ${serverConfig.apiUrl}`);
})

module.exports = app;
