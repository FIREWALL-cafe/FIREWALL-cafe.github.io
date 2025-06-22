import React, { useState } from 'react';
import SearchInputRedesign from './SearchInputRedesign';
import ApiContext from '../contexts/ApiContext';

function SearchInputDemo() {
  const [compareQuery, setCompareQuery] = useState('');
  const [archiveQuery, setArchiveQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const handleCompareSearch = (query) => {
    console.log('Compare search:', query);
    setCompareQuery(query);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000); // Simulate search
  };

  const handleArchiveSearch = (query) => {
    console.log('Archive search:', query);
    setArchiveQuery(query);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000); // Simulate search
  };

  const handleFiltersClick = () => {
    setShowFilters(!showFilters);
    console.log('Filters clicked');
  };

  // Mock API context for demo
  const mockApiContext = {
    searchImages: async () => ({ googleResults: [], baiduResults: [] }),
    searchArchive: async () => ({ data: [], total: 0 })
  };

  return (
    <ApiContext.Provider value={mockApiContext}>
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>
        Search Input Redesign Demo
      </h1>
      
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>Compare Mode</h2>
        <SearchInputRedesign
          mode="compare"
          initialQuery={compareQuery}
          onSearch={handleCompareSearch}
          translation={compareQuery ? '背心' : ''}
          isLoading={isLoading}
        />
      </div>

      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>Archive Mode</h2>
        <SearchInputRedesign
          mode="archive"
          initialQuery={archiveQuery}
          onSearch={handleArchiveSearch}
          translation={archiveQuery ? '背心' : ''}
          isLoading={isLoading}
          showFilters={true}
          onFiltersClick={handleFiltersClick}
        />
        {showFilters && (
          <div style={{ 
            marginTop: '20px', 
            padding: '16px', 
            background: '#f5f5f5', 
            borderRadius: '4px' 
          }}>
            <p>Filters panel would appear here</p>
          </div>
        )}
      </div>

      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>With Error State</h2>
        <SearchInputRedesign
          mode="compare"
          initialQuery=""
          onSearch={handleCompareSearch}
          error="Please enter a search query"
        />
      </div>
    </div>
    </ApiContext.Provider>
  );
}

export default SearchInputDemo;