import React, { createContext, useCallback, useMemo, useState } from 'react';
import { SearchBar, Translation, VotePanel, Results } from './';

export const LayoutContext = createContext({})

const Layout = () => {
  const [imageResults, setImageResults] = useState({});
  const [translation, setTranslation] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [currentSearchId, setSearchId] = useState(null);
  const setResults = useCallback((results) => setImageResults(results), []);
  const contextValue = {
    isLoading,
    setLoading,
    imageResults,
    setResults,
    translation,
    setTranslation,
    currentSearchId,
    setSearchId,
  }
  // }), [imageResults, setResults]);

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
