// Vercel Function to handle search locations requests
// Simple proxy to backend API for search locations

export default async function handler(req, res) {
  // Get backend API URL from environment variable or use default
  const backendUrl = process.env.BACKEND_API_URL;

  if (req.method === 'GET') {
    try {
      const url = `${backendUrl}search-locations`;
      console.log('Fetching search locations from:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      res.status(response.status).json(data);
    } catch (error) {
      console.error('Search locations error:', error);
      res.status(500).json({
        error: 'Failed to fetch search locations',
        message: error.message
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};