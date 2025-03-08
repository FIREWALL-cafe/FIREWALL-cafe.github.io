import React, { useEffect, useState, useCallback, useContext } from 'react';
import { Link, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import QueryList from './QueryList';
import useCookie from '../useCookie';
import FilterControls from './FilterControls';
import ApiContext from '../contexts/ApiContext';

import GoogleLogoBlue from '../assets/icons/google-logo_blue.svg';
import BaiduLogoRed from '../assets/icons/baidu_logo_red.svg';
import Question from '../assets/icons/question_red.svg';
import SearchIcon from '../assets/icons/image_search.svg';
import ArchiveIcon from '../assets/icons/folder_open_search.svg';
import FilterIcon from '../assets/icons/tune.svg';
import SearchCompare from './SearchCompare';
import Spinner from '../assets/spinner.svg';

function SearchInput({ searchMode }) {
  const { searchImages, searchArchive } = useContext(ApiContext);
  const [isLoading, setLoading] = useState(false);
  const [imageResults, setImageResults] = useState({});
  const [archiveResults, setarchiveResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [translation, setTranslation] = useState('');
  const [currentSearchId, setSearchId] = useState(null);
  const setResults = useCallback((results) => setImageResults(results), []);
  const [username, setUsername, deleteUsername] = useCookie("username");
  const [filterOpen, setFilterOpen] = useState(false);
  const [isArchive, setIsArchive] = useState(searchMode === 'archive');
  const [currentFilters, setCurrentFilters] = useState({ vote_ids: [], years: [], cities: [] });

  const navigate = useNavigate();
  const location = useLocation();
  const urlConfig = {
      method: 'post',
      headers: { 
        'Accept': 'application/json' ,
        'Content-Type': 'application/json' 
      },
  };

  var ranonce = false;
  useEffect(() => {
    // Update the input field when query params change
    if (searchParams.get('q')) {
      setQuery(searchParams.get('q'));
      if (!ranonce) {
        handleSubmit(); 
        ranonce = true;
      }
    } else if (isArchive && location.pathname === '/archive' && !ranonce && archiveResults.length === 0) {
      ranonce = true;
      loadDefaultResults();
    }
  }, [searchParams]);

  const loadDefaultResults = async () => {
    console.log('fetching default archive results');
    const filterOptions = { page: 1, page_size: 25 }
    const results = await searchArchive({ ...filterOptions });
    setSearchId("archived searches");
    setarchiveResults(results);
    setFilteredResults(results);
  }

  const handleSubmit = async () => {
    setLoading(true);
    if (location.pathname === '/') {
      console.log('navigating to search');
      navigate('/search?q=' + query);
      return;
    }

    try {
      if (isArchive) {
        setarchiveResults([]);
        setFilteredResults([]);
        let results = await searchArchive({ 
          keyword: query,
          page: 1, 
          page_size: 25 
        });
        setSearchId("archived searches");
        setarchiveResults(results);
        setFilteredResults(results);
      } else {
        const { googleResults, baiduResults, translation, searchId } = await searchImages({ 
          body: JSON.stringify({ query, search_client_name: username }) 
        });
        setSearchId(searchId);
        setResults({ googleResults, baiduResults });
        setTranslation(translation);
      }
    } catch (e) {
      if (!isArchive) {
        setResults({ googleResults: [], baiduResults: [] });
        setTranslation(e);
        setQuery('');
      }
    } finally {
      setLoading(false);
    }
  }

  const applyFilters = (filterOptions) => {
    setCurrentFilters(filterOptions);
    
    // If all filters are empty, close the filter panel
    if (filterOptions.years.length === 0 && 
        filterOptions.cities.length === 0 && 
        filterOptions.vote_ids.length === 0) {
      setFilterOpen(false);
    }
    
    let filtered = [...archiveResults];

    // Filter by years
    if (filterOptions.years.length > 0) {
      filtered = filtered.filter(item => {
        const itemYear = new Date(parseInt(item.search_timestamp)).getFullYear().toString();
        return filterOptions.years.includes(itemYear);
      });
    }

    // Filter by cities
    if (filterOptions.cities.length > 0) {
      filtered = filtered.filter(item => 
        filterOptions.cities.includes(item.search_location)
      );
    }

    // Filter by votes
    if (filterOptions.vote_ids.length > 0) {
      filtered = filtered.filter(item => {
        // Check if any of the item's votes match the filter vote IDs
        return filterOptions.vote_ids.some(voteId => 
          item.votes && item.votes.includes(parseInt(voteId))
        );
      });
    }

    setFilteredResults(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) handleSubmit();
  }

  const displaySearchIcon = !isArchive ? SearchIcon : ArchiveIcon;
  const displayTooltipContent = !isArchive
    ? 'Your query will be translated into Chinese and sent to Google and Baidu simultaneously.'
    : "Explore the archive to view past results from other users and see how they've changed over time.";
  
  return (
    <div className="flex overflow-hidden flex-col self-center mt-20 min-h-[200px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap self-center max-w-[720px] w-[720px] max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-center w-full border-b border-solid border-b-red-600 max-md:max-w-full">
          <div className="flex items-center self-stretch my-auto min-w-[240px]">
            <div className={`${!isArchive ? 'bg-slate-100' : 'bg-white' } flex flex-col justify-center items-center px-9 py-2 my-auto rounded border-t border-l border-solid border-l-red-600 border-t-red-600 cursor-pointer`}>
              <div onClick={() => setIsArchive(false)}className="flex gap-2 items-start">
                <div className="flex gap-2.5 justify-center items-center w-8 min-h-[32px]">
                  <img src={GoogleLogoBlue} alt="Google logo blue" className="object-contain self-stretch my-auto aspect-square" />
                </div>
                <div className="flex gap-2.5 justify-center items-center w-8 min-h-[32px]">
                  <img src={BaiduLogoRed} alt="Baidu logo red" className="object-contain self-stretch my-auto w-6 aspect-square" />
                </div>
              </div>
            </div>
            <div
              onClick={() => setIsArchive(true)}
              className={`${isArchive ? 'bg-slate-100' : 'bg-white'} px-8 py-2 my-auto text-2xl font-medium text-red-600 rounded border-x border-t border-red-600 border-red-600 border-solid cursor-pointer`}
            >
              Archive
            </div>
          </div>
          <img
            src={Question}
            alt="Question mark red"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            data-tooltip-id="tooltip"
            data-tooltip-content={displayTooltipContent}
            data-tooltip-place="top"
          />
          <Tooltip id="tooltip" />
          <span className="font-bold">Username:</span> {username}
        </div>
        <div className="flex justify-center p-5 gap-4 w-full rounded-none border-r border-b border-l border-solid bg-slate-100 border-b-red-600 border-x-red-600 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap w-full bg-white rounded border border-solid border-neutral-300 min-h-[56px] max-md:max-w-full">
            <input
              placeholder={isArchive ? 'Search' : 'Search Google & Baidu'}
              value={query}
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={!!isLoading}
              className="flex-1 shrink px-4 my-auto text-xl min-h-[40px] min-w-[240px] max-md:max-w-full focus:ring-0 focus:outline-none" aria-label="Search query"
            />
            <div className="flex overflow-hidden gap-1 justify-center items-center py-4 pr-4 h-full">
              <button onClick={handleSubmit} disabled={!!isLoading}>
                <img src={isLoading ? Spinner : displaySearchIcon} alt="Search icon" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
              </button>
            </div>
          </div>
          {isArchive && (
            <button 
              onClick={() => setFilterOpen(!filterOpen)} 
              className={`flex cursor-pointer justify-center items-center px-4 py-2 text-md text-red-600 bg-white border border-red-600 hover:bg-red-50 transition-colors duration-200 ${filterOpen ? 'bg-red-50' : ''}`}
            >
              <div>filters</div>
              <img 
                src={FilterIcon} 
                alt="Filter" 
                className={`ml-2 w-5 h-5 transition-transform duration-200 ${filterOpen ? 'rotate-180' : ''}`} 
              />
            </button>
          )}
        </div>
        <span className={`mt-4 p-1 leading-8 text-medium bg-slate-50 border border-black rounded ${translation ? '' : 'hidden'}`}>
          <span className="font-bold">Translation:</span> {translation}
        </span>
      </div>
      {isArchive && <FilterControls onUpdate={applyFilters} isOpen={filterOpen} />}
      {(currentSearchId && !isArchive && imageResults.googleResults && imageResults.googleResults.length > 0) && <SearchCompare images={imageResults} query={query} searchId={currentSearchId} />}
      {(currentSearchId && isArchive) && (
        <>
          <div className="flex flex-col self-center max-w-[720px] w-[720px] mt-4">
            {(currentFilters.years.length > 0 || currentFilters.cities.length > 0 || currentFilters.vote_ids.length > 0) && (
              <>
                <h2 className="text-xl font-bold mb-2">Current Filters</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                {currentFilters.years.length > 0 && (
                  <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                    Years: {currentFilters.years.join(', ')}
                  </span>
                )}
                {currentFilters.cities.length > 0 && (
                  <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                    Cities: {currentFilters.cities.join(', ')}
                  </span>
                )}
                {currentFilters.vote_ids.length > 0 && (
                  <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                    Votes: {currentFilters.vote_ids.length} selected
                  </span>
                )}
                </div>
              </>
            )}
          </div>
          <QueryList results={filteredResults} />
        </>
      )}
    </div>
  );
}

export default SearchInput;