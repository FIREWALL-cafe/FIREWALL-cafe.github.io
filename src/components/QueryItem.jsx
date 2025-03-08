import React, { useState, useEffect } from 'react';
import SearchCompare from './SearchCompare';
import VoteIcon from '../assets/icons/how_to_vote.svg';

const QueryItem = ({ total_votes, search_id, search_term_initial, search_term_translation, search_location, search_timestamp }) => {
  const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`;
  const humanize = str => str.split('_').map(capitalize).join(' ');
  const formatDate = timestamp => new Date(parseInt(timestamp)).toLocaleDateString();

  const [dropdown, setDropdown] = useState(true);
  const [imageResults, setImageResults] = useState({});
  
  const toggleDropdown = () => {
    setDropdown(!dropdown);
    if (dropdown && !imageResults.googleResults) {
      console.log('loading gallery:', search_id);
      loadGallery();
    }
  };

  // Load images for search id
  const loadGallery = async () => {
    const url = `/searches/${search_id}/images`;

    console.log('loadGallery:', url);
    const response = await fetch(url, { method: 'post' });
    const results = await response.json();
    const [googleResults, baiduResults] = [results.filter(result => result.image_search_engine === 'google').map(result => result.image_href).slice(0, 9), results.filter(result => result.image_search_engine === 'baidu').map(result => result.image_href).slice(0, 9)];
    
    console.log('gallery results', results);
    setImageResults({ googleResults: googleResults, baiduResults: baiduResults });
  };

  return (
    <div className="hover:bg-gray-100">
      <div className="flex flex-wrap gap-4 py-1 w-full text-sm text-black min-h-[32px] max-md:max-w-full cursor-pointer" onClick={toggleDropdown}>
        <div className="w-16 flex items-center max-sm:w-12">
          <img src={VoteIcon} alt="Votes" className="w-4 h-4 mr-1" />
          <span>{total_votes}</span>
        </div>
        <div className="flex-1 min-w-[180px] max-md:min-w-[140px] max-sm:min-w-0 max-sm:w-full truncate">
          {search_term_initial}
        </div>
        <div className="flex-1 min-w-[180px] max-md:min-w-[140px] max-sm:min-w-0 max-sm:hidden text-zinc-400 truncate">
          {search_term_translation}
        </div>
        <div className="flex-1 min-w-[120px] max-md:min-w-[100px] max-sm:min-w-0 max-sm:hidden truncate">
          {search_location && humanize(search_location)}
        </div>
        <div className="w-24 text-right max-sm:w-auto">
          {formatDate(search_timestamp)}
        </div>
      </div>
      <div className={dropdown ? 'hidden' : 'w-full'}>
        {imageResults && imageResults.googleResults && <SearchCompare images={imageResults} searchId={search_id} />}
      </div>
    </div>
  );
};

export default QueryItem;