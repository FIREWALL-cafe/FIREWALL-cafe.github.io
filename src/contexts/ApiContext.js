import { createContext } from 'react';
import querystring from 'querystring';

const defaultConfig = {
    method: 'post',
    headers: { 
      Accept: 'application/json' ,
      'Content-Type': 'application/json' 
    },
  };

const searchArchive = async (options) => {
  try {
    const defaultQuery = { page: 1, page_size: 25 };
    const queryParams = options.query ? 
      { ...defaultQuery, query: encodeURIComponent(options.query.trim()) } : 
      { ...defaultQuery, ...options };
    
    const url = `/searches?${querystring.stringify(queryParams)}`;
    console.log('searchArchive request URL:', url);
    
    const response = await fetch(url, defaultConfig);
    console.log('searchArchive response status:', response.status);
    
    const results = await response.json();
    console.log('searchArchive results:', results);
    return results;
  } catch (error) {
    console.error('searchArchive error:', error);
    throw error;
  }
}

const searchImages = async (options) => {
  try {
    console.log('searchImages request options:', options);
    const response = await fetch('/images', {...defaultConfig, ...options});
    console.log('searchImages response status:', response.status);
    
    const results = await response.json();
    console.log('searchImages results:', results);
    return results;
  } catch (error) {
    console.error('searchImages error:', error);
    throw error;
  }
}

const getDashboard = async () => {
  try {
    const response = await fetch('/dashboardData');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
}

const ApiContext = createContext({
  searchImages,
  searchArchive,
  getDashboard,
});

export default ApiContext;

export const ApiProvider = ({ children }) => {
    // ... existing provider code ...

    const getDashboard = async () => {
        try {
            const response = await fetch('/dashboardData');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            throw error;
        }
    };

    return (
        <ApiContext.Provider value={{
            // ... existing context values ...
            getDashboard,
        }}>
            {children}
        </ApiContext.Provider>
    );
};
