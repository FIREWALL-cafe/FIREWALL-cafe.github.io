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
    <div className="flex flex-wrap gap-4 py-2 w-full text-xl text-black min-h-[48px] max-md:max-w-full hover:bg-gray-100">
      <div className="flex flex-wrap gap-4 py-2 w-full text-xl text-black min-h-[48px] max-md:max-w-full" onClick={toggleDropdown}>
        <div className="flex gap-1 items-center my-auto w-16 whitespace-nowrap">
          <img src={VoteIcon} alt="Votes" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <div className="self-stretch my-auto">{total_votes}</div>
        </div>
        <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px]">
          {search_term_initial}
        </div>
        <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px] text-zinc-400">
          {search_term_translation}
        </div>
        <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px]">
          {search_location && humanize(search_location)}
        </div>
        <div className="flex gap-6 items-center h-full text-right">
          {formatDate(search_timestamp)}
        </div>
      </div>
      <div className={`flex flex-wrap`} style={dropdown ? { display: 'none' } : {}}>
        {imageResults && imageResults.googleResults && <SearchCompare images={ imageResults } searchId={search_id} />}
      </div>
    </div>
  );
};

export default QueryItem;