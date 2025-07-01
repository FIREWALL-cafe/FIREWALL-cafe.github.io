import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchModeIndicator from './SearchModeIndicator';
import SearchModeLink from './SearchModeLink';
import SearchIcon from '../../assets/icons/image_search.svg';
import './SearchInputRedesign.css';

function SearchInputRedesign({
  mode = 'compare',
  initialQuery = '',
  onSearch,
  translation = '',
  isLoading = false,
  error = '',
  showFilters = false,
  onFiltersClick
}) {
  const [query, setQuery] = useState(initialQuery);
  const [searchParams] = useSearchParams();
  const inputRef = useRef(null);

  // Update query when URL params change
  useEffect(() => {
    const urlQuery = searchParams.get('q') || '';
    if (urlQuery !== query) {
      setQuery(urlQuery);
    }
  }, [searchParams, query]);

  // Update query when initialQuery prop changes
  useEffect(() => {
    if (initialQuery !== query) {
      setQuery(initialQuery);
    }
  }, [initialQuery, query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    onSearch?.(query.trim());
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const getPlaceholder = () => {
    return mode === 'archive' ? 'Search the archive' : 'Search Google + Baidu';
  };

  return (
    <div className="search-input-redesign">
      {/* Header with mode indicator and navigation link */}
      <div className="search-header">
        <SearchModeIndicator mode={mode} />
        <SearchModeLink currentMode={mode} query={query} />
      </div>

      {/* Search input container */}
      <div className="search-container">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="search-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder={getPlaceholder()}
              className="search-input"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="search-submit"
              disabled={isLoading || !query.trim()}
            >
              <img src={SearchIcon} alt="Search" className="search-icon" />
            </button>
          </div>
        </form>

        {/* Filters button for archive mode */}
        {mode === 'archive' && showFilters && (
          <button
            onClick={onFiltersClick}
            className="filters-button"
            type="button"
          >
            filters ⚙
          </button>
        )}
      </div>

      {/* Translation display */}
      {translation && (
        <div className="translation-display">
          <span className="translation-label">Translation:</span>
          <span className="translation-text">{translation}</span>
        </div>
      )}

      {/* Error display */}
      {error && (
        <div className="error-display">
          {error}
        </div>
      )}
    </div>
  );
}

export default SearchInputRedesign;