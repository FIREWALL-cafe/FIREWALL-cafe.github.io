import { createContext } from 'react';

const doSearch = (filterOptions) => {
  console.log('SearchContext: do search', filterOptions);
}
const searchResults = [1,2,3,4,5];

const SearchContext = createContext({
  doSearch,
  searchResults,
});

export default SearchContext;
