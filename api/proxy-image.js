// Vercel Function to proxy image requests
// Handles /proxy-image requests to bypass CORS restrictions

export default async function handler(req, res) {
  const { url } = req.query;

  // Validate URL parameter
  if (!url || url === 'undefined' || url === 'null') {
    console.error('No valid image URL provided');
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  // Basic URL validation
  try {
    new URL(url);
  } catch (e) {
    console.error('Invalid URL format:', url);
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  console.log('Proxying image from:', url);

  try {
    // Fetch the image
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; FirewallCafe/1.0)',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch image:', response.status, response.statusText);
      return res.status(response.status).json({
        error: 'Failed to fetch image',
        status: response.status
      });
    }

    // Get content type
    const contentType = response.headers.get('content-type');

    // Check if it's an image
    if (!contentType || !contentType.startsWith('image/')) {
      console.error('Response is not an image:', contentType);
      return res.status(400).json({ error: 'URL does not point to an image' });
    }

    // Get the image data as a buffer
    const buffer = await response.arrayBuffer();

    // Set appropriate headers
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Send the image
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error('Error proxying image:', error);
    res.status(500).json({
      error: 'Failed to proxy image',
      message: error.message
    });
  }
}

export const config = {
  api: {
    responseLimit: '50mb',
  },
};