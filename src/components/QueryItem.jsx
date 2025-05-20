import React, { useState, useEffect } from 'react';
import SearchCompare from './SearchCompare';
import VoteIcon from '../assets/icons/how_to_vote.svg';
import { locationMapping } from '../constants/locations';
import ExpandIcon from './icons/ExpandIcon';

// Separate the date formatting logic into a custom hook
const useDateFormat = (isDesktop) => {
  return (timestamp) => {
    const date = new Date(parseInt(timestamp));
    return isDesktop
      ? {
          date: date.toLocaleDateString(undefined, {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
          }),
          time: date.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          })
        }
      : date.toLocaleDateString();
  };
};

// Separate the image loading logic into a custom hook
const useImageGallery = (searchId) => {
  const [imageResults, setImageResults] = useState({});

  const loadGallery = async () => {
    const url = `/searches/${searchId}/images`;
    const response = await fetch(url, { method: 'post' });
    const results = await response.json();
    
    const googleResults = results
      .filter(result => result.image_search_engine === 'google')
      .map(result => result.image_href)
      .slice(0, 9);
      
    const baiduResults = results
      .filter(result => result.image_search_engine === 'baidu')
      .map(result => result.image_href)
      .slice(0, 9);
    
    setImageResults({ googleResults, baiduResults });
  };

  return { imageResults, loadGallery };
};

const QueryItem = ({ 
  total_votes, 
  search_id, 
  search_term_initial, 
  search_term_initial_language_code, 
  search_term_translation, 
  search_location, 
  search_timestamp, 
  filterOptions 
}) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 744);
  const [dropdown, setDropdown] = useState(false);
  const formatDate = useDateFormat(isDesktop);
  const { imageResults, loadGallery } = useImageGallery(search_id);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 744);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
    if (!dropdown && !imageResults.googleResults) {
      loadGallery();
    }
  };

  const locationLabel = locationMapping[search_location] || 
                       (filterOptions?.cities?.length === 1 && locationMapping[filterOptions.cities[0]]) || 
                       search_location;

  var isEnglish = true;
  if (search_term_initial_language_code === 'zh-CN') {
    isEnglish = false;
  }
  const englishLang = isEnglish ? search_term_initial : search_term_translation;
  const chineseLang = isEnglish ? search_term_translation : search_term_initial;

  return (
    <div id={`search-item-${search_id}`} className="hover:bg-gray-100 w-full">
      <div 
        className="grid grid-cols-[80px_1fr_1fr_1fr_160px_40px] gap-1 py-3 w-full text-[20px] h-12 cursor-pointer items-center" 
        onClick={toggleDropdown}
      >
        <div className="flex items-center whitespace-nowrap">
          <img src={VoteIcon} alt="Votes" className="w-6 h-6 mr-1" />
          <span>{total_votes}</span>
        </div>
        
        <div className={`truncate whitespace-nowrap ${isEnglish ? '' : 'text-zinc-400'}`}>
          {englishLang}
        </div>
        
        <div className={`hidden ipad-landscape:block font-sc-sans whitespace-nowrap ${isEnglish ? 'text-zinc-400' : ''} truncate`}>
          {chineseLang}
        </div>
        
        <div className="hidden ipad-landscape:block truncate whitespace-nowrap">
          {locationLabel}
        </div>
        
        <div className="text-right whitespace-nowrap">
          {isDesktop ? (
            <span>
              {formatDate(search_timestamp).date}
              <span className="mx-4"></span>
              {formatDate(search_timestamp).time}
            </span>
          ) : (
            formatDate(search_timestamp)
          )}
        </div>
        
        <div className="flex justify-center">
          <ExpandIcon isExpanded={dropdown} />
        </div>
      </div>

      <div className={dropdown ? 'w-full' : 'hidden'}>
        {imageResults?.googleResults && (
          <SearchCompare 
            images={imageResults} 
            searchId={search_id} 
          />
        )}
      </div>
    </div>
  );
};

export default QueryItem;