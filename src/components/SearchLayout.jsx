import React, { createContext, useState } from 'react';
import SearchBar from './SearchBar';
import Translation from './Translation';
import VotePanel from './VotePanel';
import Results from './Results';

export const LayoutContext = createContext({})

const SearchLayout = () => {
  const [currentSearchId, setSearchId] = useState(null);
  const contextValue = {
    currentSearchId,
    setSearchId,
  }

  return (
    <LayoutContext.Provider value={contextValue}>
        <SearchBar />
        <Translation />
        {currentSearchId && <VotePanel />}
        <Results />
    </LayoutContext.Provider>
  );
};

export default SearchLayout;
