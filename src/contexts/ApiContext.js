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
    const queryParams = options.query ? 
      { query: encodeURIComponent(options.query.trim()) } : { ...options };
    
    const url = `/searches?${querystring.stringify(queryParams)}`;
    console.log('searchArchive request URL:', url);
    
    const response = await fetch(url, defaultConfig);
    
    const results = await response.json();
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
    
    const results = await response.json();
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
