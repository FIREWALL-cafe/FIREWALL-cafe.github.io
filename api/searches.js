// Vercel Function to handle search requests
// Simple proxy to backend API for searches

export default async function handler(req, res) {
  // Get backend API URL from environment variable or use default
  const backendUrl = process.env.BACKEND_API_URL;

  // Handle both GET and POST (app uses POST, backend expects GET)
  if (req.method === 'GET' || req.method === 'POST') {
    try {
      // Extract query parameters
      const { query, page, page_size, cities, search_locations, ...otherFilters } = req.query;

      if (cities) {
        otherFilters.search_locations = cities;
        delete otherFilters.cities;
      }

      // Handle search_locations parameter directly
      if (search_locations) {
        otherFilters.search_locations = search_locations;
      }

      const params = new URLSearchParams({
        ...(query && { query }),
        ...(page && { page }),
        ...(page_size && { page_size }),
        ...otherFilters
      });

      // Use filter endpoint when filters are present (anything other than basic pagination)
      const hasFilters = Object.keys(otherFilters).length > 0 || query;
      const endpoint = hasFilters ? 'searches/filter' : 'searches';
      const url = `${backendUrl}${endpoint}?${params.toString()}`;

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
    res.setHeader('Allow', ['GET', 'POST']);
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
