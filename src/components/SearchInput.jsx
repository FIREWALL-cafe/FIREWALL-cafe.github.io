import React, { useEffect, useState, useCallback, useContext } from 'react';
import { Link, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import SearchContext from '../SearchContext';
import QueryList from './QueryList';
import useCookie from '../useCookie';
import FilterOptionsModal from './FilterOptionsModal';
import ApiContext from '../contexts/ApiContext';

import GoogleLogoBlue from '../assets/icons/google-logo_blue.svg';
import BaiduLogoRed from '../assets/icons/baidu_logo_red.svg';
import Question from '../assets/icons/question_red.svg';
import SearchIcon from '../assets/icons/image_search.svg';
import ArchiveIcon from '../assets/icons/folder_open_search.svg';
import SearchCompare from './SearchCompare';
import Spinner from '../assets/spinner.svg';

function SearchInput({ searchMode }) {
  const { doSearch, searchResults } = useContext(SearchContext);
  const { searchImages, searchArchive } = useContext(ApiContext);
  const [isLoading, setLoading] = useState(false);
  const [imageResults, setImageResults] = useState({});
  const [archiveResults, setarchiveResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [translation, setTranslation] = useState('');
  const [currentSearchId, setSearchId] = useState(null);
  const setResults = useCallback((results) => setImageResults(results), []);
  const [username, setUsername, deleteUsername] = useCookie("username");
  const [filterOpen, setFilterOpen] = useState(false);
  const isArchive = searchMode === 'archive';

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
      loadDefaultResults();
      ranonce = true;
    }
  }, [searchParams]);

  const loadDefaultResults = async () => {
    console.log('fetching default archive results');
    const response = await fetch(`/searches?page=${1}&page_size=${10}`, urlConfig);
    const results = await response.json();

    setSearchId("archived searches");
    setarchiveResults(results);
  }

  const allValuesEmpty = (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (value !== null && value !== undefined && value !== "" && value.length !== 0) {
          return false;
        }
      }
    }
    return true;
  }
  const getFilterOptions = () => {
    let form = document.getElementById('filter-options-form');
    const formData = new FormData(form);
    const filterOptions = { votes: [], years: [], cities: [] };
    for (let [key, value] of formData.entries()) {
      if (value) {
        console.log(key, value);
        if (key.startsWith('votes')) {
          filterOptions.votes.push(value);
        } else if (value === 'on') {
          filterOptions.years.push(key);
        } else if (key.startsWith('city')) {
          filterOptions.cities.push(value);
        } else {
          console.log('unknown filter option:', key, value);
        }
      }
    }
    console.log('filter options:', filterOptions);
    let empty = allValuesEmpty(filterOptions);
    return !empty ? filterOptions : false;
  }

  const handleSubmit = async () => {
    setLoading(true);
    if (location.pathname === '/') {
      console.log('navigating to search');
      navigate('/search?q=' + query);
      return;
    }
    // doSearch()
    console.log('submitting search for:', query);
    urlConfig.body = JSON.stringify({ query, search_client_name: username });
    setResults({ googleResults: [], baiduResults: [] });

    try {
      if (isArchive) {
        setarchiveResults([]);
        const filterOptions = getFilterOptions();
        // const filters = filterOptions ? querystring.stringify(filterOptions) : '';
        // const response = await fetch(`/searches?query=${query}&${filters}`, urlConfig);
        let results;
        if (filterOptions) {
          if (query) {
            results = await searchArchive({ ...filterOptions, ...{ keyword: query } });
          } else {
            results = await searchArchive({ ...filterOptions });
          }
        } else {
          results = await searchArchive({ query});
        }
        setSearchId("archived searches");
        console.log('results', results);
        setarchiveResults(results);
      } else {
        const { googleResults, baiduResults, translation, searchId } = await searchImages({ body: JSON.stringify({ query, search_client_name: username }) });
        setSearchId(searchId);
        setResults({ googleResults, baiduResults });
        setTranslation(translation);
        let user = 'Bob:'+ searchId;
        let nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);
        setUsername(user, nextWeek);
      }
    } catch (e) {
      setResults({ googleResults: [], baiduResults: [] });
      setTranslation(e);
      setQuery('');
    } finally {
      setLoading(false);
    }
  }

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
            <div className={`${!isArchive ? 'bg-slate-100' : 'bg-white' } flex flex-col justify-center items-center self-stretch px-9 py-2 my-auto rounded border-t border-l border-solid border-l-red-600 border-t-red-600 w-[148px] max-md:px-5`}>
              <div className="flex gap-2 items-start">
                <div className="flex gap-2.5 justify-center items-center w-8 min-h-[32px]">
                  <Link to="/search"><img src={GoogleLogoBlue} alt="Google logo blue" className="object-contain self-stretch my-auto aspect-square" /></Link>
                </div>
                <div className="flex gap-2.5 justify-center items-center w-8 min-h-[32px]">
                  <Link to="/search"><img src={BaiduLogoRed} alt="Baidu logo red" className="object-contain self-stretch my-auto w-6 aspect-square" /></Link>
                </div>
              </div>
            </div>
            <div className={`${isArchive ? 'bg-slate-100' : 'bg-white' } self-stretch px-8 py-2.5 my-auto text-2xl font-medium tracking-widest leading-none text-red-600 whitespace-nowrap rounded border-x border-t border-red-600 border-red-600 border-solid min-h-[48px] w-[148px] max-md:px-5`}>
              <Link to="/archive">Archive</Link>
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
              className="flex-1 shrink px-4 my-auto text-xl min-h-[40px] min-w-[240px] text-zinc-400 max-md:max-w-full" aria-label="Search query"
            />
            <div className="flex overflow-hidden gap-1 justify-center items-center py-4 pr-4 h-full">
              <button onClick={handleSubmit} disabled={!!isLoading}>
                <img src={isLoading ? Spinner : displaySearchIcon} alt="Search icon" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
              </button>
            </div>
          </div>
          {isArchive && <FilterOptionsModal open={filterOpen} onClose={setFilterOpen} />}
        </div>
        <span class={`mt-4 p-1 leading-8 text-medium bg-slate-50 border border-black rounded ${translation ? '' : 'hidden'}`}>
          <span className="font-bold">Translation:</span> {translation}
        </span>
      </div>
      {(currentSearchId && !isArchive) && <SearchCompare images={imageResults} query={query} searchId={currentSearchId} />}
      { (currentSearchId && isArchive) && <QueryList results={archiveResults} /> }
    </div>
  );
}

export default SearchInput;