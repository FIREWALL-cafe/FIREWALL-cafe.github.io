import React, { useState, useEffect } from 'react';
import SearchCompare from './SearchCompare';
import VoteIcon from '../assets/icons/how_to_vote.svg';
import { locationMapping } from '../constants/locations';
import ExpandIcon from './icons/ExpandIcon';

const QueryItem = ({ total_votes, search_id, search_term_initial, search_term_translation, search_location, search_timestamp, filterOptions }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formatDate = timestamp => {
    const date = new Date(parseInt(timestamp));
    return isDesktop
      ? date.toLocaleString(undefined, { 
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      : date.toLocaleDateString();
  };

  const [dropdown, setDropdown] = useState(false);
  const [imageResults, setImageResults] = useState({});
  

  const toggleDropdown = () => {
    setDropdown(!dropdown);
    if (!dropdown && !imageResults.googleResults) {
      loadGallery();
    }
  };

  // Load images for search id
  const loadGallery = async () => {
    const url = `/searches/${search_id}/images`;

    const response = await fetch(url, { method: 'post' });
    const results = await response.json();
    const [googleResults, baiduResults] = [
      results.filter(result => result.image_search_engine === 'google').map(result => result.image_href).slice(0, 9),
      results.filter(result => result.image_search_engine === 'baidu').map(result => result.image_href).slice(0, 9)
    ];
    
    setImageResults({ googleResults: googleResults, baiduResults: baiduResults });
  };

  // Get location from either search_location or filter city
  const locationLabel = locationMapping[search_location] || 
                       (filterOptions?.cities?.length === 1 && locationMapping[filterOptions.cities[0]]) || 
                       search_location;

  return (
    <div id={search_id} className="hover:bg-gray-100 w-full">
      <div className="flex flex-wrap gap-4 py-3 w-full text-[20px] text-black h-12 cursor-pointer items-center" onClick={toggleDropdown}>
        <div className="w-16 flex items-center max-sm:w-12">
          <img src={VoteIcon} alt="Votes" className="w-4 h-4 mr-1" />
          <span>{total_votes}</span>
        </div>
        <div className="flex-1 min-w-[180px] max-md:min-w-[140px] max-sm:min-w-0 max-sm:w-full truncate">
          {search_term_initial}
        </div>
        <div className="flex-1 min-w-[180px] max-md:min-w-0 max-md:hidden text-zinc-400 truncate">
          {search_term_translation}
        </div>
        <div className="flex-1 min-w-[120px] max-md:min-w-0 max-md:hidden truncate">
          {locationLabel}
        </div>
        <div className="w-56 text-right max-sm:w-auto">
          {formatDate(search_timestamp)}
        </div>
        <div className="w-8 flex justify-center">
          <ExpandIcon isExpanded={dropdown} />
        </div>
      </div>
      <div className={dropdown ? 'w-full' : 'hidden'}>
        {imageResults && imageResults.googleResults && <SearchCompare images={imageResults} searchId={search_id} />}
      </div>
    </div>
  );
};

export default QueryItem;