import React, { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import QueryList from './QueryList';

import GoogleLogoBlue from '../assets/icons/google-logo_blue.svg';
import BaiduLogoRed from '../assets/icons/baidu_logo_red.svg';
import Question from '../assets/icons/question_red.svg';
import SearchIcon from '../assets/icons/search.svg';
import SearchCompare from './SearchCompare';
import Spinner from '../assets/spinner.svg';

function SearchInput({ searchMode }) {
  const [isLoading, setLoading] = useState(false);
  const [imageResults, setImageResults] = useState({});
  const [archiveResults, setarchiveResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [translation, setTranslation] = useState('');
  const [currentSearchId, setSearchId] = useState(null);
  const setResults = useCallback((results) => setImageResults(results), []);
  const ref = useRef();

  const handleSubmit = async () => {
    console.log('submitting search');
    const query = ref.current.value;
    const config = {
          method: 'post',
          headers: { 
            'Accept': 'application/json' ,
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify({ query }),
    };
    
    setLoading(true);
    setSearchQuery(query);
    setResults({ googleResults: [], baiduResults: [] });

    try {
      if (searchMode === 'archive') {
        const response = await fetch(`/searches?query=${query}`, config);
        setSearchId("archived searches");
        const results = await response.json();
        console.log('results', results);
        setarchiveResults(results);
      } else {
        const response = await fetch(`/images`, config);
        const { googleResults, baiduResults, translation, searchId } = await response.json();
        setSearchId(searchId);
        setResults({ googleResults, baiduResults });
        setTranslation(translation);
      }
    } catch (e) {
      setResults({ googleResults: [], baiduResults: [] });
      setTranslation(e);
      ref.current.value = ''; // Reset search bar text
    } finally {
      setLoading(false);
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) handleSubmit();
  }

  return (
    <div className="flex overflow-hidden flex-col self-center mt-20 min-h-[200px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap self-center max-w-[720px] w-[720px] max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-center w-full border-b border-solid border-b-red-600 max-md:max-w-full">
          <div className="flex items-center self-stretch my-auto min-w-[240px]">
            <div className={`${searchMode === 'live' ? 'bg-white' : 'bg-slate-100'} flex flex-col justify-center items-center self-stretch px-9 py-2 my-auto rounded border-t border-l border-solid border-l-red-600 border-t-red-600 w-[148px] max-md:px-5`}>
              <div className="flex gap-2 items-start">
                <div className="flex gap-2.5 justify-center items-center w-8 min-h-[32px]">
                  <img src={GoogleLogoBlue} alt="Google logo blue" className="object-contain self-stretch my-auto aspect-square" />
                </div>
                <div className="flex gap-2.5 justify-center items-center w-8 min-h-[32px]">
                  <img src={BaiduLogoRed} alt="Baidu logo red" className="object-contain self-stretch my-auto w-6 aspect-square" />
                </div>
              </div>
            </div>
            <div className={`${searchMode === 'archive' ? 'bg-white' : 'bg-slate-100'} self-stretch px-8 py-2.5 my-auto text-2xl font-medium tracking-widest leading-none text-red-600 whitespace-nowrap rounded border border-red-600 border-red-600 border-solid min-h-[48px] w-[148px] max-md:px-5`}>
              <Link to="/archive">Archive</Link>
            </div>
          </div>
          <img src={Question} alt="Question mark red" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </div>
        <div className="flex flex-col justify-center p-5 w-full rounded-none border-r border-b border-l border-solid bg-slate-100 border-b-red-600 border-x-red-600 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap w-full bg-white rounded border border-solid border-neutral-300 min-h-[56px] max-md:max-w-full">
            <input placeholder="Search" name="query" type="text" ref={ref} onKeyDown={handleKeyDown} disabled={!!isLoading} className="flex-1 shrink px-4 my-auto text-xl min-h-[40px] min-w-[240px] text-zinc-400 max-md:max-w-full" aria-label="Search query" />
            <div className="flex overflow-hidden gap-1 justify-center items-center py-4 pr-4 h-full">
              <button onClick={handleSubmit} disabled={!!isLoading}>
                <img src={isLoading ? Spinner : SearchIcon} alt="Search icon" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {(currentSearchId && (searchMode !== 'archive')) && <SearchCompare images={imageResults} />}
      { (currentSearchId && (searchMode === 'archive')) && <QueryList results={archiveResults} /> }
    </div>
  );
}

export default SearchInput;