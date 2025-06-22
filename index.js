const path = require('path');
const express = require('express');
const axios = require('axios');
const { getDashboardData, getGoogleImages, getBaiduImages, getDetectedLanguage, getSearchImages, getSearchesByTerm, getSearchesFilter, getTranslation, postVote, saveImages, getSearchVoteCounts } = require('./server/fetch');
const postmark = require('postmark');

const serverConfig = require('./server/config');

const app = express();

app.use(express.json());

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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
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

    console.log('about to save images');
    const { searchId } = await saveImages({ 
      query, 
      google: results[0].slice(0, 9), 
      baidu: results[1].slice(0, 9), 
      langTo, 
      langFrom, 
      search_client_name, 
      translation: translatedQuery 
    });

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
    req.body.vote_ip_address = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const data = await postVote({ ...req.body });
    res.json(data);
  } catch (e) {
    console.error(e);
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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`Using API URL: ${serverConfig.apiUrl}`);
})

module.exports = app;
