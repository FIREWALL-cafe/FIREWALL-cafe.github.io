import React, { useState, useEffect } from 'react';
import VoteButton from './VoteButton';
import { useContext } from 'react';
import SearchContext from '../SearchContext';

function FilterControls({ onUpdate, isOpen }) {
  const { doSearch, searchResults } = useContext(SearchContext);
  const [shouldResetVotes, setShouldResetVotes] = useState(false);

  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  const cities = [
    "Miami beach", "New York city", "Oslo", "St. Polten", 
    "hong Kong", "Ann Arbor", "Vienna", "Asheville", "Poughkeepsie"
  ];
  const vote_categories = ['votes_censored', 'votes_uncensored', 'votes_bad_translation', 'votes_good_translation', 'votes_lost_in_translation'];

  const metaKeyToId = {
    votes_censored: 1,
    votes_uncensored: 2,
    votes_bad_translation: 3,
    votes_good_translation: 4,
    votes_lost_in_translation: 5,
    votes_bad_result: 6,
    votes_nsfw: 7,
  }

  const voteHandler = (voteCategory) => {
    let votebtn = document.getElementById(voteCategory);
    votebtn.value = votebtn.value === metaKeyToId[voteCategory] ? '' : metaKeyToId[voteCategory];
    handleFilterChange();
  }

  const handleFilterChange = () => {
    const form = document.getElementById('filter-options-form');
    const formData = new FormData(form);
    const filterOptions = { vote_ids: [], years: [], cities: [] };
    
    for (let [key, value] of formData.entries()) {
      if (value) {
        if (key.startsWith('votes')) {
          filterOptions.vote_ids.push(value);
        } else if (value === 'on') {
          filterOptions.years.push(key);
        } else if (key.startsWith('city')) {
          filterOptions.cities.push(value);
        }
      }
    }
    
    onUpdate(filterOptions);
  };

  const handleReset = () => {
    document.getElementById('filter-options-form').reset();
    setShouldResetVotes(true);
    // Reset the flag after a short delay to allow for future resets
    setTimeout(() => {
      setShouldResetVotes(false);
      handleFilterChange(); // Trigger update after reset
    }, 100);
  };

  return (
    <div className={`
      mx-auto w-full max-w-[720px] bg-white border border-red-600 rounded-md overflow-hidden transition-all duration-300 ease-in-out
      ${isOpen ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0 border-0'}
    `}>
      <div className="p-4">
        <form id="filter-options-form" className="grow flex flex-col text-black">
          <div className="grid grid-cols-2 gap-6 mb-4">
            {/* Years Section */}
            <div className="flex flex-col">
              <label htmlFor="year" className="text-lg font-black mb-2">Year</label>
              <div className="grid grid-cols-3 gap-x-4 gap-y-1">
                {years.map((year, index) => (
                  <div key={index} className="flex items-center">
                    <input 
                      type="checkbox" 
                      id={year} 
                      name={year} 
                      className="w-4 h-4 border border-solid border-zinc-400 mr-2" 
                      onChange={handleFilterChange}
                    />
                    <label htmlFor={year} className="text-sm">{year}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Cities Section */}
            <div className="flex flex-col">
              <label htmlFor="location" className="text-lg font-black mb-2">Location</label>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {cities.slice(0, 8).map((city, index) => (
                  <div key={index} className="flex items-center">
                    <input 
                      type="checkbox" 
                      value={city} 
                      id={`city-${index}`} 
                      name={`city-${index}`} 
                      className="w-4 h-4 border border-solid border-zinc-400 mr-2" 
                      onChange={handleFilterChange}
                    />
                    <label htmlFor={`city-${index}`} className="text-sm truncate">{city}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vote Results Section */}
          <div className="border-t border-gray-200 pt-3">
            <label htmlFor="vote" className="text-lg font-black block mb-3">Vote Result</label>
            <div className="flex gap-2 flex-wrap mb-4">
              {vote_categories.map((category, index) => (
                <VoteButton 
                  key={index} 
                  voteCategory={category} 
                  voteHandler={voteHandler} 
                  isDisabled={false} 
                  setDisabled={() => {}} 
                  shouldReset={shouldResetVotes}
                />
              ))}
            </div>
            <div className="flex justify-end gap-4 pt-3 border-t border-gray-200">
              <button 
                type="button"
                onClick={handleReset}
                className="px-3 py-1.5 text-sm text-black bg-white border border-black hover:bg-gray-50">
                Clear all
              </button>
              <button
                type="button"
                onClick={() => onUpdate({ vote_ids: [], years: [], cities: [] })}
                className="px-3 py-1.5 text-sm text-white bg-black hover:bg-gray-800">
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilterControls; 