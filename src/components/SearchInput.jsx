import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
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
import FilterIcon from './FilterIcon';
import SearchCompare from './SearchCompare';
import Spinner from '../assets/spinner.svg';

function SearchInput({ searchMode }) {
  const { searchImages, searchArchive } = useContext(ApiContext);
  const [isLoading, setLoading] = useState(false);
  const [imageResults, setImageResults] = useState({});
  const [archiveResults, setarchiveResults] = useState({ total: 0, page: 1, page_size: 10, data: [] });
  const [filteredResults, setFilteredResults] = useState({ total: 0, page: 1, page_size: 10, data: [] });
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [translation, setTranslation] = useState('');
  const [currentSearchId, setSearchId] = useState(null);
  const setResults = useCallback((results) => setImageResults(results), []);
  const [username] = useCookie("username");
  const [filterOpen, setFilterOpen] = useState(false);
  const [isArchive, setIsArchive] = useState(searchMode === 'archive');
  const [currentFilters, setCurrentFilters] = useState({ vote_ids: [], years: [], cities: [] });

  const navigate = useNavigate();
  const location = useLocation();

  var ranonce = false;
  useEffect(() => {
    // Update the input field when query params change
    if (searchParams.get('q')) {
      setQuery(searchParams.get('q'));
      if (!ranonce) {
        handleSubmit(); 
        ranonce = true;
      }
    } else if (isArchive && location.pathname === '/archive' && !ranonce && archiveResults.data.length === 0) {
      ranonce = true;
      loadDefaultResults();
    }
  }, [searchParams]);

  const loadDefaultResults = async () => {
    const filterOptions = { page: 1, page_size: 10 }
    const results = await searchArchive({ ...filterOptions });
    setSearchId("archived searches");
    setarchiveResults(results);
    setFilteredResults(results);
  }

  const handleSubmit = async () => {
    if (!query || query.trim() === '') {
      setTranslation('Please enter a search query');
      return;
    }

    setLoading(true);
    if (location.pathname === '/') {
      navigate('/search?q=' + query);
      return;
    }

    try {
      if (isArchive) {
        setarchiveResults({ total: 0, page: 1, page_size: 10, data: [] });
        setFilteredResults({ total: 0, page: 1, page_size: 10, data: [] });

        const results = await searchArchive({ query: query.trim() });
        
        if (results.error) {
          throw new Error(results.error);
        }

        setSearchId("archived searches");
        setarchiveResults(results);
        setFilteredResults(results);
      } else {
        const response = await searchImages({ 
          body: JSON.stringify({ 
            query: query.trim(), 
            search_client_name: username || 'anonymous' 
          })
        });

        if (response.error) {
          throw new Error(response.error);
        }

        navigate('/archive');
        // const { googleResults, baiduResults, translation, searchId } = response;
        // setSearchId(searchId);
        // setResults({ googleResults: googleResults || [], baiduResults: baiduResults || [] });
        // setTranslation(translation || '');
      }
    } catch (e) {
      console.error('Search error:', e);
      if (!isArchive) {
        setResults({ googleResults: [], baiduResults: [] });
        setTranslation(e.message || String(e));
      } else {
        setarchiveResults({ total: 0, page: 1, page_size: 10, data: [] });
        setFilteredResults({ total: 0, page: 1, page_size: 10, data: [] });
        setTranslation(e.message || 'Failed to search archives');
      }
    } finally {
      setLoading(false);
    }
  }

  const applyFilters = async (filterOptions, shouldClose = true, isReset = false) => {
    setLoading(true);
    setCurrentFilters(filterOptions);
    
    if (shouldClose) {
      setFilterOpen(false);
    }
    
    try {
      // If this is a reset operation, fetch fresh results
      if (isReset) {
        const results = await searchArchive({
          ...(query ? { query: query.trim() } : {}),
          page: 1,
          page_size: archiveResults.page_size
        });
        setarchiveResults(results);
        setFilteredResults(results);
        return;
      }

      // Fetch new results with filters applied
      const searchParams = {
        ...(query ? { query: query.trim() } : {}),
        page: filterOptions.page || 1,
        page_size: filterOptions.page_size || archiveResults.page_size,
        years: filterOptions.years,
        cities: filterOptions.cities,
        vote_ids: filterOptions.vote_ids
      };

      const results = await searchArchive(searchParams);
      setarchiveResults(results);
      setFilteredResults(results);
    } catch (error) {
      console.error('Error applying filters:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (newPage) => {
    // Include current filters when changing pages
    await applyFilters({
      ...currentFilters,
      page: newPage,
      page_size: archiveResults.page_size,
      ...(query ? { query: query.trim() } : {})
    }, false);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) handleSubmit();
  }

  const displaySearchIcon = !isArchive ? SearchIcon : ArchiveIcon;
  const displayTooltipContent = !isArchive
    ? 'Your query will be translated into Chinese and sent to Google and Baidu simultaneously.'
    : "Explore the archive to view past results from other users and see how they've changed over time.";
  
  return (
    <>
      <div className="flex overflow-hidden flex-col self-center mt-20 min-h-[200px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap self-center max-w-[720px] w-[720px] max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-center w-full border-b border-solid border-red-600 max-md:max-w-full">
            <div className="flex items-center self-stretch my-auto min-w-[240px]">
              <div 
                onClick={() => navigate('/search')} 
                className={`${!isArchive ? 'bg-slate-100' : 'bg-white'} flex flex-col justify-center items-center px-9 py-2 my-auto rounded-t border-t border-l border-r border-solid border-red-600 cursor-pointer`}
              >
                <div className="flex gap-2 items-start">
                  <div className="flex gap-2.5 justify-center items-center w-8 min-h-[32px]">
                    <img src={GoogleLogoBlue} alt="Google logo blue" className="object-contain self-stretch my-auto aspect-square" />
                  </div>
                  <div className="flex gap-2.5 justify-center items-center w-8 min-h-[32px]">
                    <img src={BaiduLogoRed} alt="Baidu logo red" className="object-contain self-stretch my-auto w-6 aspect-square" />
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate('/archive')}
                className={`${isArchive ? 'bg-slate-100' : 'bg-white'} px-8 py-2 my-auto text-2xl font-medium text-red-600 rounded-t border-t border-l border-r border-solid border-red-600 cursor-pointer`}
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
              data-tooltip-place="top" />
            <Tooltip id="tooltip" />
          </div>
          <div className="flex justify-center p-5 gap-4 w-full rounded-none border-r border-b border-l border-solid bg-slate-100 border-b-red-600 border-x-red-600 max-md:max-w-full">
            <div className="flex w-full bg-white rounded border border-solid border-neutral-300 h-[56px]">
              <input
                placeholder={isArchive ? 'Search' : 'Search Google & Baidu'}
                value={query}
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={!!isLoading}
                className="flex-1 px-4 text-xl h-[56px] focus:ring-0 focus:outline-none" 
                aria-label="Search query" 
              />
              <div className="flex items-center py-4 pr-4">
                <button 
                  onClick={handleSubmit} 
                  disabled={!!isLoading}
                  className="flex items-center justify-center w-10 h-10"
                >
                  <img 
                    src={isLoading ? Spinner : displaySearchIcon} 
                    alt="Search icon" 
                    className="w-6 h-6 object-contain aspect-square min-w-[28px] min-h-[28px]" 
                  />
                </button>
              </div>
            </div>
            {isArchive && (
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className={`flex cursor-pointer justify-center items-center px-4 py-2 text-md text-red-600 bg-white border border-red-600 hover:bg-red-50 transition-colors duration-200 rounded ${filterOpen ? 'bg-red-50' : ''}`}
              >
                <div>filters</div>
                <FilterIcon
                  className={`ml-2 w-5 h-5 transition-transform duration-200 [filter:invert(19%)_sepia(92%)_saturate(2352%)_hue-rotate(343deg)_brightness(94%)_contrast(97%)] ${filterOpen ? 'rotate-180' : ''}`}
                />
              </button>
            )}
          </div>
          <span className={`mt-4 p-1 leading-8 text-medium bg-slate-50 border border-black rounded ${translation ? '' : 'hidden'}`}>
            <span className="font-bold">Translation:</span> {translation}
          </span>
        </div>
        {isArchive && <FilterControls 
          onUpdate={applyFilters} 
          isOpen={filterOpen}
          isLoading={isLoading} 
        />}
        {(currentSearchId && !isArchive && imageResults.googleResults && imageResults.googleResults.length > 0) && (
          <SearchCompare images={imageResults} query={query} searchId={currentSearchId} />
        )}
        {(currentSearchId && isArchive && (currentFilters.years.length > 0 || currentFilters.cities.length > 0 || currentFilters.vote_ids.length > 0)) && (
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
      {currentSearchId && isArchive && (
        <div className="mt-[120px] min-h-[70px]">
          <QueryList 
            results={filteredResults} 
            onPageChange={handlePageChange}
            isLoading={isLoading}
            filterOptions={currentFilters}
          />
        </div>
      )}
    </>
  );
}

export default SearchInput;