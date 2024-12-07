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
  const defaultQuery = { page: 1, page_size: 25 };
  const response = await fetch(`/searches?${querystring.stringify({ ...defaultQuery, ...options })}`, defaultConfig);
  const results = await response.json();
  console.log('searchArchive:', results);
  return results;
}

const searchImages = async (options) => {
  const response = await fetch('/images', {...defaultConfig, ...options});
  const results = await response.json();
  console.log('searchImages:', results);
  return results;
}

const ApiContext = createContext({
  searchImages,
  searchArchive,
});

export default ApiContext;
