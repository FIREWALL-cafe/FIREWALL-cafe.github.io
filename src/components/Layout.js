import React, { createContext, useCallback, useMemo, useState } from 'react';
import { SearchBar, Translation, VotePanel, Results } from './';

export const LayoutContext = createContext({})

const Layout = () => {
  const [imageResults, setImageResults] = useState({});
  const [translation, setTranslation] = useState('');
  const [loading, isLoading] = useState(false);
  const setResults = useCallback((results) => setImageResults(results), []);
  const contextValue = useMemo(() => ({
    imageResults,
    setResults,
    translation,
    setTranslation,
  }), [imageResults, setResults]);

  return (
    <LayoutContext.Provider value={contextValue}>
      <SearchBar />
      <Translation />
      <VotePanel />
      <Results />
    </LayoutContext.Provider>
  );
};

export default Layout;
