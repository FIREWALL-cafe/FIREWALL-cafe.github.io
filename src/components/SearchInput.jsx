import React, { useEffect, useState, useCallback } from 'react';
import { Link, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import QueryList from './QueryList';
import useCookie from '../useCookie';
import Modal from './Modal';
import VoteButton from './VoteButton';

import GoogleLogoBlue from '../assets/icons/google-logo_blue.svg';
import BaiduLogoRed from '../assets/icons/baidu_logo_red.svg';
import Question from '../assets/icons/question_red.svg';
import SearchIcon from '../assets/icons/image_search.svg';
import ArchiveIcon from '../assets/icons/folder_open_search.svg';
import SearchCompare from './SearchCompare';
import Spinner from '../assets/spinner.svg';
import FilterIcon from '../assets/icons/tune.svg';

function SearchInput({ searchMode }) {
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
  
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
  const cities = [
    "Miami beach", "New York city", "Oslo", "St. Polten", 
    "hong Kong", "Ann Arbor", "Vienna", "Asheville", "Poughkeepsie"
  ];
  const vote_categories = ['votes_censored', 'votes_uncensored', 'votes_bad_translation', 'votes_good_translation', 'votes_lost_in_translation'];
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
    } else if (searchMode === 'archive' && location.pathname === '/archive' && !ranonce) {
      loadDefaultResults();
      ranonce = true;
    }
  }, [searchParams]);

  const loadDefaultResults = async () => {
    console.log('fetching default archive results');
    const response = await fetch(`/searches?page=${1}&page_size=${10}`, urlConfig);
    const results = await response.json();

    console.log('results', results);
    setSearchId("archived searches");
    setarchiveResults(results);
  }

  const handleSubmit = async () => {
    setLoading(true);
    if (location.pathname === '/') {
      console.log('navigating to search');
      navigate('/search?q=' + query);
      return;
    }

    console.log('submitting search for:', query);
    urlConfig.body = JSON.stringify({ query, search_client_name: username });
    setResults({ googleResults: [], baiduResults: [] });

    try {
      if (searchMode === 'archive') {
        setarchiveResults([]);
        const response = await fetch(`/searches?query=${query}`, urlConfig);
        setSearchId("archived searches");
        const results = await response.json();
        console.log('results', results);
        setarchiveResults(results);
      } else {
        const response = await fetch(`/images`, urlConfig);
        const { googleResults, baiduResults, translation, searchId } = await response.json();
        setSearchId(searchId);
        setResults({ googleResults, baiduResults });
        setTranslation(translation);
        let user = 'Bob:'+ searchId;
        let nextWeek = new Date()
        nextWeek.setDate(nextWeek.getDate() + 7)
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

  const displaySearchIcon = searchMode === 'live' ? SearchIcon : ArchiveIcon;
  const displayTooltipContent = searchMode === 'live'
    ? 'Your query will be translated into Chinese and sent to Google and Baidu simultaneously.'
    : "Explore the archive to view past results from other users and see how they've changed over time.";

  const searchLocations = async () => {
    console.log('searching locations');
  }

  const handleKeyDownLocation = (e) => {
    if (e.keyCode === 13) searchLocations();
  }
  
  return (
    <div className="flex overflow-hidden flex-col self-center mt-20 min-h-[200px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap self-center max-w-[720px] w-[720px] max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-center w-full border-b border-solid border-b-red-600 max-md:max-w-full">
          <div className="flex items-center self-stretch my-auto min-w-[240px]">
            <div className={`${searchMode === 'live' ? 'bg-slate-100' : 'bg-white' } flex flex-col justify-center items-center self-stretch px-9 py-2 my-auto rounded border-t border-l border-solid border-l-red-600 border-t-red-600 w-[148px] max-md:px-5`}>
              <div className="flex gap-2 items-start">
                <div className="flex gap-2.5 justify-center items-center w-8 min-h-[32px]">
                  <Link to="/search"><img src={GoogleLogoBlue} alt="Google logo blue" className="object-contain self-stretch my-auto aspect-square" /></Link>
                </div>
                <div className="flex gap-2.5 justify-center items-center w-8 min-h-[32px]">
                  <Link to="/search"><img src={BaiduLogoRed} alt="Baidu logo red" className="object-contain self-stretch my-auto w-6 aspect-square" /></Link>
                </div>
              </div>
            </div>
            <div className={`${searchMode === 'archive' ? 'bg-slate-100' : 'bg-white' } self-stretch px-8 py-2.5 my-auto text-2xl font-medium tracking-widest leading-none text-red-600 whitespace-nowrap rounded border-x border-t border-red-600 border-red-600 border-solid min-h-[48px] w-[148px] max-md:px-5`}>
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
        <div className="flex justify-center p-5 w-full rounded-none border-r border-b border-l border-solid bg-slate-100 border-b-red-600 border-x-red-600 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap w-full bg-white rounded border border-solid border-neutral-300 min-h-[56px] max-md:max-w-full">
            <input
              placeholder="Search"
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
          <div onClick={() => setFilterOpen(true)} className="flex justify-center items-center p-2 text-md text-red-600"><div>filter</div><img src={FilterIcon} /></div>
          <Modal open={filterOpen} onClose={() => setFilterOpen(false)}>
            <div className="mx-auto">
              <form className="grow flex flex-col py-2 mt-2 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="flex flex-col w-full whitespace-nowrap max-md:max-w-full">
                    <div className="flex gap-1 items-start py-1.5 w-full max-md:max-w-full">
                      <label htmlFor="year" className="text-lg">Year</label>
                    </div>
                    <div className="grid grid-cols-4 gap-4 items-start w-full text-md max-md:max-w-full">
                      {years.map((year) => (
                        <div key={year} className="flex gap-8 items-center px-2.5 py-2 max-w-full">
                          <div className="flex gap-2 items-center self-stretch my-auto">
                            <input type="checkbox" id="year" className="w-6 h-6 border border-solid border-zinc-400" />
                            <div className="self-stretch my-auto">{year}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col mt-6 border-t border-solid border-t-gray-400 w-full max-md:max-w-full">
                    <div className="flex gap-1 py-1.5 w-full max-md:max-w-full">
                      <label htmlFor="location"className="text-lg">Location</label>
                    </div>
                  </div>
                  <div className="flex overflow-hidden flex-wrap w-full rounded border border-solid border-neutral-300 min-h-[56px] max-md:max-w-full">
                    <input
                      placeholder="Search Locations"
                      type="text"
                      onChange={(e) => searchLocations()}
                      onKeyDown={handleKeyDownLocation}
                      disabled={false}
                      className="flex-1 shrink px-4 my-auto text-xl min-h-[40px] min-w-[240px] text-zinc-400 max-md:max-w-full" aria-label="Search Locations"
                    />
                    <div className="flex overflow-hidden gap-1 justify-center items-center py-4 pr-4 h-full">
                      <button onClick={searchLocations} disabled={!!isLoading}>
                        <img src={isLoading ? Spinner : SearchIcon} alt="Search icon" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-start mt-2 w-full text-xl font-semibold text-center whitespace-nowrap rounded border border-solid bg-slate-200 border-neutral-300 min-h-[56px] max-md:max-w-full">
                    <button className="flex-1 shrink gap-1 self-stretch px-4 text-black bg-white rounded border border-black border-solid min-h-[56px] min-w-[240px]">
                      City
                    </button>
                    <button className="flex-1 shrink gap-1 self-stretch px-4 rounded min-h-[56px] min-w-[240px] text-zinc-400">
                      Country
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 justify-between items-center mt-2 w-full text-xl max-md:max-w-full">
                    {cities.map((city, index) => (
                      <div key={index} className="flex gap-4 items-center self-stretch px-2.5 py-2 my-auto">
                        <div className="flex gap-2 items-center self-stretch my-auto">
                          <input type="checkbox" value={city} id={`city-${index}`} className="w-6 h-6 border border-solid border-zinc-400" />
                          <label htmlFor={`city-${index}`} className="self-stretch my-auto">{city}</label>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col mt-6 w-full text-lg whitespace-nowrap max-md:max-w-full">
                    <label htmlFor="vote">Vote Result</label>
                    <div className="grid grid-cols-3 gap-4 justify-between items-center mt-2 w-full text-xl max-md:max-w-full">
                      {vote_categories.map((category, index) => (
                        <div className="flex flex-col grow shrink justify-between items-center p-3 rounded border border-solid border-neutral-300 min-h-[124px]  hover:bg-sky-700">
                          <div className="flex gap-2.5 items-center w-full h-9">
                            <VoteButton voteCategory={category} setVote={() => {}} isDisabled={false} setDisabled={() => {}} />
                          </div>
                          <div className="flex-1 shrink gap-2 self-stretch mt-10 w-full text-xl font-semibold leading-tight text-black">
                            {category}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Modal>
        </div>
        <span class={`mt-4 p-1 leading-8 text-medium bg-slate-50 border border-black rounded ${translation ? '' : 'hidden'}`}>
          <span className="font-bold">Translation:</span> {translation}
        </span>
      </div>
      {(currentSearchId && (searchMode !== 'archive')) && <SearchCompare images={imageResults} query={query} searchId={currentSearchId} />}
      { (currentSearchId && (searchMode === 'archive')) && <QueryList results={archiveResults} /> }
    </div>
  );
}

export default SearchInput;