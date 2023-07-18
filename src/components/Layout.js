import React, { createContext, useCallback, useState } from 'react';
import { SearchBar, Translation, VotePanel, Results } from './';

export const LayoutContext = createContext({})

const Layout = () => {
  const [imageResults, setImageResults] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [translation, setTranslation] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [currentSearchId, setSearchId] = useState(null);
  const setResults = useCallback((results) => setImageResults(results), []);
  const contextValue = {
    isLoading,
    setLoading,
    imageResults,
    setResults,
    searchQuery,
    setSearchQuery,
    translation,
    setTranslation,
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

export default Layout;
