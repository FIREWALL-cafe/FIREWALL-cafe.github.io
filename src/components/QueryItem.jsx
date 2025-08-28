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
  search_city,
  search_country,
  search_region,
  search_timestamp, 
  filterOptions,
  isExpanded = false,
  onToggle
}) => {
  const [screenSize, setScreenSize] = useState(() => {
    const width = window.innerWidth;
    if (width < 640) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  });
  const formatDate = useDateFormat(screenSize !== 'mobile');
  const { imageResults, loadGallery } = useImageGallery(search_id);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('mobile');
      else if (width < 1024) setScreenSize('tablet');
      else setScreenSize('desktop');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load gallery when expanded
  useEffect(() => {
    if (isExpanded && !imageResults.googleResults) {
      loadGallery();
    }
  }, [isExpanded]);

  const handleClick = () => {
    if (onToggle) {
      onToggle();
    }
    if (!isExpanded && !imageResults.googleResults) {
      loadGallery();
    }
  };

  const locationLabel = search_city || (search_region || search_country) || search_location;

  var isEnglish = true;
  if (search_term_initial_language_code === 'zh-CN') {
    isEnglish = false;
  }
  const englishLang = isEnglish ? search_term_initial : search_term_translation;
  const chineseLang = isEnglish ? search_term_translation : search_term_initial;

  return (
    <div id={`search-item-${search_id}`} className="hover:bg-gray-100 w-full border-b border-gray-200">
      <div 
        className={`grid ${
          screenSize === 'desktop' 
            ? 'grid-cols-[80px_1fr_1fr_1fr_160px_40px]' 
            : screenSize === 'tablet'
            ? 'grid-cols-[60px_1fr_1fr_120px_40px]'
            : 'grid-cols-[1fr_auto_auto]'
        } gap-2 py-4 px-4 w-full cursor-pointer items-center`}
        onClick={handleClick}
      >
        {/* Mobile Layout */}
        {screenSize === 'mobile' ? (
          <>
            {/* Left: Search Terms */}
            <div className="flex flex-col space-y-1">
              <div className={`${isEnglish ? 'text-gray-900' : 'text-gray-500'} text-base`}>
                {englishLang}
              </div>
              <div className={`font-sc-sans ${isEnglish ? 'text-gray-500' : 'text-gray-900'} text-base`}>
                {chineseLang}
              </div>
            </div>
            
            {/* Right: Vote Count and Date stacked */}
            <div className="flex flex-col items-end space-y-1">
              <div className="flex items-center space-x-1 text-base">
                <img src={VoteIcon} alt="Votes" className="w-5 h-5" />
                <span className="font-medium">{total_votes.toString().padStart(2, '0')}</span>
              </div>
              <div className="text-base text-gray-900">
                {formatDate(search_timestamp)}
              </div>
            </div>
            
            {/* Expand Icon */}
            <div className="flex items-center">
              <ExpandIcon isExpanded={isExpanded} />
            </div>
          </>
        ) : screenSize === 'tablet' ? (
          /* Tablet Layout */
          <>
            <div className="flex items-center whitespace-nowrap">
              <img src={VoteIcon} alt="Votes" className="w-5 h-5 mr-1" />
              <span className="text-base">{total_votes}</span>
            </div>
            
            <div className={`truncate ${isEnglish ? 'text-gray-900' : 'text-gray-500'} text-base`}>
              {englishLang}
            </div>
            
            <div className={`font-sc-sans truncate ${isEnglish ? 'text-gray-500' : 'text-gray-900'} text-base`}>
              {chineseLang}
            </div>
            
            <div className="text-right whitespace-nowrap text-base">
              {formatDate(search_timestamp).date}
              <span className="mx-2"></span>
              {formatDate(search_timestamp).time}
            </div>
            
            <div className="flex justify-center">
              <ExpandIcon isExpanded={isExpanded} />
            </div>
          </>
        ) : (
          /* Desktop Layout - Keep existing */
          <>
            <div className="flex items-center whitespace-nowrap">
              <img src={VoteIcon} alt="Votes" className="w-6 h-6 mr-1" />
              <span>{total_votes}</span>
            </div>
            
            <div className={`truncate whitespace-nowrap ${isEnglish ? '' : 'text-zinc-400'}`}>
              {englishLang}
            </div>
            
            <div className={`font-sc-sans whitespace-nowrap ${isEnglish ? 'text-zinc-400' : ''} truncate`}>
              {chineseLang}
            </div>
            
            <div className="truncate whitespace-nowrap">
              {locationLabel}
            </div>
            
            <div className="text-right whitespace-nowrap">
              <span>
                {formatDate(search_timestamp).date}
                <span className="mx-4"></span>
                {formatDate(search_timestamp).time}
              </span>
            </div>
            
            <div className="flex justify-center">
              <ExpandIcon isExpanded={isExpanded} />
            </div>
          </>
        )}
      </div>

      <div className={isExpanded ? 'w-full' : 'hidden'}>
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