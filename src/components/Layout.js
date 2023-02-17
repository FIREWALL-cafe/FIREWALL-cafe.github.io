import React, { createContext, useContext, useCallback, useMemo, useState } from 'react';
import { SearchBar, Translation, VotePanel, Results } from './';

export const LayoutContext = createContext({})

const Layout = () => {
  const [imageResults, setImageResults] = useState({});
  const setResults = useCallback((results) => setImageResults(results), []);
  const contextValue = useMemo(() => ({
    imageResults,
    setResults,
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
