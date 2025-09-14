// Vercel Function to handle search requests
// Simple proxy to backend API for searches

export default async function handler(req, res) {
  // Get backend API URL from environment variable or use default
  const backendUrl = process.env.BACKEND_API_URL || 'https://api.firewallcafe.com/';

  if (req.method === 'GET') {
    try {
      // Extract query parameters
      const { query, page, page_size, cities, ...otherFilters } = req.query;

      if (cities) {
        otherFilters.search_locations = cities;
        delete otherFilters.cities;
      }

      const params = new URLSearchParams({
        ...(query && { query }),
        ...(page && { page }),
        ...(page_size && { page_size }),
        ...otherFilters
      });

      const url = `${backendUrl}searches?${params.toString()}`;
      console.log('Fetching searches from:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      res.status(response.status).json(data);
    } catch (error) {
      console.error('Search error:', error);
      res.status(500).json({
        error: 'Failed to fetch searches',
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