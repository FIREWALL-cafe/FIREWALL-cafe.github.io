import React from 'react';
import { Link } from 'react-router-dom';

function SearchModeLink({ currentMode, query }) {
  if (currentMode === 'compare') {
    // Link to archive mode, preserve query
    const archiveUrl = query ? `/archive?q=${encodeURIComponent(query)}` : '/archive';

    return (
      <Link to={archiveUrl} className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
        search Archive →
      </Link>
    );
  }

  if (currentMode === 'archive') {
    // Link to compare mode, preserve query
    const compareUrl = query ? `/search?q=${encodeURIComponent(query)}` : '/search';

    return (
      <Link to={compareUrl} className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
        search Comparison →
      </Link>
    );
  }

  return null;
}

export default SearchModeLink;
