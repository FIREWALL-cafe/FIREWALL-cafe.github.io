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

  const isEnglish = search_term_initial_language_code === 'en';
  const englishLang = isEnglish ? search_term_initial : search_term_translation;
  const chineseLang = isEnglish ? search_term_translation : search_term_initial;

  return (
    <div id={search_id} className="hover:bg-gray-100 w-full">
      <div 
        className="flex flex-wrap gap-4 py-3 w-full text-[20px] text-black h-12 cursor-pointer items-center" 
        onClick={toggleDropdown}
      >
        <div className="w-16 flex items-center iphone:w-12">
          <img src={VoteIcon} alt="Votes" className="w-6 h-6 mr-1" />
          <span>{total_votes}</span>
        </div>
        
        <div className={`flex-1 min-w-[180px] ipad-portrait:min-w-[140px] iphone:min-w-0 iphone:w-full truncate ${isEnglish ? '' : 'text-zinc-400'}`}>
          {englishLang}
        </div>
        
        <div className={`hidden ipad-landscape:flex flex-1 min-w-[180px] font-sc-sans ${isEnglish ? 'text-zinc-400' : ''} truncate`}>
          {chineseLang}
        </div>
        
        <div className="hidden ipad-landscape:flex flex-1 min-w-[120px] truncate">
          {locationLabel}
        </div>
        
        <div className="flex-1 w-56 text-right">
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
        
        <div className="w-8 flex justify-center">
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