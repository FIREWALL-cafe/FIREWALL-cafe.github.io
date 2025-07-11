import React, { useEffect, useState, useCallback, useContext, useRef } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import QueryList from './QueryList';
import useCookie from '../useCookie';
import FilterControls from './FilterControls';
import ApiContext from '../contexts/ApiContext';
import QuestionIcon from './icons/QuestionIcon';

import GoogleLogoBlue from '../assets/icons/google-logo_blue.svg';
import BaiduLogoRed from '../assets/icons/baidu_logo_red.svg';
import SearchIcon from '../assets/icons/image_search.svg';
import ArchiveIcon from '../assets/icons/folder_open_search.svg';
import ArchiveGrayscale from '../assets/icons/Archive_grayscale.png';
import Archive from '../assets/icons/Archive.png';
import FilterIcon from './FilterIcon';
import SearchCompare from './SearchCompare';
import Spinner from '../assets/spinner.svg';

function SearchInput({ searchMode }) {
  const { searchImages, searchArchive } = useContext(ApiContext);
  const [isLoading, setLoading] = useState(false);
  const [imageResults, setImageResults] = useState({});
  const [archiveResults, setarchiveResults] = useState({ total: 0, page: 1, page_size: 10, data: [] });
  const [filteredResults, setFilteredResults] = useState({ total: 0, page: 1, page_size: 10, data: [] });
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [translation, setTranslation] = useState('');
  const [currentSearchId, setSearchId] = useState(null);
  const setResults = useCallback((results) => setImageResults(results), []);
  const [username] = useCookie("username");
  const [filterOpen, setFilterOpen] = useState(false);
  const [isArchive] = useState(searchMode === 'archive');
  const [currentFilters, setCurrentFilters] = useState({ vote_ids: [], years: [], cities: [] });
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const ranonce = useRef(false);

  const loadDefaultResults = useCallback(async () => {
    const filterOptions = { page: 1, page_size: 10 }
    const results = await searchArchive({ ...filterOptions });
    setSearchId("archived searches");
    setarchiveResults(results);
    setFilteredResults(results);
  }, [searchArchive]);

  const handleSubmit = useCallback(async () => {
    if (!query || query.trim() === '') {
      setTranslation('Please enter a search query');
      return;
    }
    setError('');

    if (location.pathname === '/') {
      navigate('/search?q=' + query);
      return;
    }

    setLoading(true);
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
            search_client_name: username 
          })
        });

        if (response.error) {
          throw new Error(response.error);
        }

        const { googleResults, baiduResults, translation, searchId } = response;
        setSearchId(searchId);
        setResults({ googleResults: googleResults || [], baiduResults: baiduResults || [] });
        setTranslation(translation || '');
      }
    } catch (e) {
      console.error('Search error:', e);
      if (!isArchive) {
        setResults({ googleResults: [], baiduResults: [] });
        setError(e.message || String(e));
        setTranslation('');
      } else {
        setarchiveResults({ total: 0, page: 1, page_size: 10, data: [] });
        setFilteredResults({ total: 0, page: 1, page_size: 10, data: [] });
        setError(e.message || 'Failed to search archives');
        setTranslation('');
      }
    } finally {
      setLoading(false);
    }
  }, [query, location.pathname, navigate, isArchive, searchArchive, username, searchImages, setResults]);

  useEffect(() => {
    // Update the input field when query params change
    if (searchParams.get('q')) {
      setQuery(searchParams.get('q'));
      if (!ranonce.current) {
        handleSubmit(); 
        ranonce.current = true;
      }
    } else if (isArchive && location.pathname === '/archive' && !ranonce.current && archiveResults.data.length === 0) {
      ranonce.current = true;
      loadDefaultResults();
    }
  }, [searchParams, handleSubmit, isArchive, location.pathname, archiveResults.data.length, loadDefaultResults]);

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
    ? '<span class="font-body-03">Your query will automatically translate into the other language. English queries will be searched in <b>Google</b>. Chinese queries will be searched in <b>Baidu</b>.</span>'
    : '<span class="font-body-03">Explore the archive to view past results from other users and see how they\'ve changed over time.</span>';
  
  return (
    <>
      <div className="flex overflow-hidden flex-col self-center mt-20 min-h-[200px] iphone:mt-10 iphone:max-w-full">
        <div className="flex flex-wrap self-center max-w-[720px] w-[720px] iphone:max-w-full">
          <div className="flex flex-wrap items-center w-full border-b border-solid border-red-600 iphone:max-w-full">
            <div className="flex items-center self-stretch my-auto min-w-[240px] relative iphone:min-w-[200px]">
              <div 
                onClick={() => navigate(isArchive ? '/archive' : '/search')} 
                className={`
                  relative z-10
                  flex items-center gap-2 px-8 md:py-3 py-2
                  rounded-t border-t border-l border-r border-solid border-red-600 
                  cursor-pointer
                  bg-slate-100 border-b-0 mb-[-2px]
                  iphone:px-4
                `}
              >
                <div className="flex gap-1 items-center">
                  {isArchive ? (
                    <>
                      <img src={Archive} alt="Archive" className="w-6 h-6" />
                      <span className="font-semibold text-red-600 ml-2">Archive</span>
                    </>
                  ) : (
                    <>
                      <div className={`flex gap-2.5 justify-center items-center w-8 min-h-[24px] iphone:w-6 w-8 h-8`}>
                        <img src={GoogleLogoBlue} alt="Google logo blue" className="object-contain self-stretch my-auto w-8 aspect-square" />
                        </div>
                      <span className="font-semibold text-red-600">vs.</span>
                      <div className={`flex gap-2.5 justify-center items-center w-8 min-h-[24px] iphone:w-6 h-8`}>
                        <img src={BaiduLogoRed} alt="Baidu logo red" className="object-contain self-stretch my-auto w-8 aspect-square" />
                      </div>
                    </>
                  )}
                </div>
                <QuestionIcon
                  fill="#ef4444"
                  className="w-6 h-6"
                  data-tooltip-id="tooltip"
                  data-tooltip-html={displayTooltipContent}
                  data-tooltip-place="right"
                />
              </div>
              <div
                onClick={() => navigate(isArchive ? '/search' : '/archive')}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors cursor-pointer text-sm"
              >
                {isArchive ? (
                  <>
                    <div className="flex gap-0.5 items-center">
                      <img src={GoogleLogoBlue} alt="Google" className="w-4 h-4 grayscale opacity-60" />
                      <span className="font-semibold text-red-600  grayscale opacity-60">vs.</span>
                      <img src={BaiduLogoRed} alt="Baidu" className="w-4 h-4 grayscale opacity-60" />
                    </div>
                  </>
                ) : (
                  <>
                    <img src={ArchiveGrayscale} alt="Archive" className="w-4 h-4" />
                    <span>Archive</span>
                  </>
                )}
              </div>
            </div>
            <Tooltip id="tooltip" noArrow={true} />
          </div>
          <div className="flex justify-center p-1.5 md:p-5 gap-4 w-full rounded-none border-r border-b border-l border-solid bg-slate-100 border-red-600 iphone:max-w-full">
            <div className="flex w-full bg-white rounded border border-solid border-gray-400 h-[56px] iphone:flex-1 overflow-hidden">
              <input
                placeholder={isArchive ? 'Search the query archive' : 'Search Google & Baidu'}
                value={query}
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={!!isLoading}
                className="flex-1 px-4 font-body-02 border-none h-[56px] focus:ring-0 focus:outline-none iphone:text-lg" 
                aria-label="Search query" 
              />
              <div className="flex items-center bg-white">
                <button 
                  onClick={handleSubmit} 
                  disabled={!!isLoading}
                  className="flex items-center justify-center w-14 h-[56px] bg-white hover:bg-gray-50 transition-colors iphone:w-12"
                >
                  <img 
                    src={isLoading ? Spinner : displaySearchIcon} 
                    alt="Search icon" 
                    className="w-6 h-6 object-contain aspect-square min-w-[28px] min-h-[28px] iphone:w-5 iphone:h-5" 
                  />
                </button>
              </div>
            </div>
            {isArchive && (
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className={`hidden md:flex cursor-pointer justify-center items-center px-4 py-2 text-red-600 bg-white border border-red-600 hover:bg-red-50 transition-colors duration-200 rounded ${filterOpen ? 'bg-red-50' : ''} iphone:px-3 iphone:py-1.5 iphone:text-sm`}
              >
                <div className="font-body-02">filters</div>
                <FilterIcon
                  className={`ml-2 w-5 h-5 transition-transform duration-200 [filter:invert(19%)_sepia(92%)_saturate(2352%)_hue-rotate(343deg)_brightness(94%)_contrast(97%)] ${filterOpen ? 'rotate-180' : ''} iphone:w-4 iphone:h-4`}
                />
              </button>
            )}
          </div>
          <div className="flex items-center gap-4 mt-4">
            <span className={`p-1 leading-8 text-medium bg-slate-50 border border-black rounded ${translation ? '' : 'hidden'}`}>
              <span className="font-bold">Translation:</span> {translation}
            </span>
            {error && (
              <span className="p-1 leading-8 text-medium bg-red-50 border border-red-600 rounded text-red-600">
                <span className="font-bold">Error:</span> {error}
              </span>
            )}
            {isArchive && (
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className={`md:hidden flex cursor-pointer justify-center items-center px-4 py-2 text-red-600 bg-white border border-red-600 hover:bg-red-50 transition-colors duration-200 rounded ${filterOpen ? 'bg-red-50' : ''} iphone:px-3 iphone:py-1.5 iphone:text-sm`}
              >
                <div className="font-body-02">filters</div>
                <FilterIcon
                  className={`ml-2 w-5 h-5 transition-transform duration-200 [filter:invert(19%)_sepia(92%)_saturate(2352%)_hue-rotate(343deg)_brightness(94%)_contrast(97%)] ${filterOpen ? 'rotate-180' : ''} iphone:w-4 iphone:h-4`}
                />
              </button>
            )}
          </div>
        </div>
        {isArchive && <FilterControls 
          onUpdate={applyFilters} 
          isOpen={filterOpen}
          isLoading={isLoading} 
        />}
        {(currentSearchId && !isArchive && imageResults?.googleResults.length > 0) && (
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
      {/* Default most recent archive results */}
      {currentSearchId && isArchive && (
        <QueryList 
          results={filteredResults} 
          onPageChange={handlePageChange}
          isLoading={isLoading}
          filterOptions={currentFilters}
        />
      )}
    </>
  );
}

export default SearchInput;