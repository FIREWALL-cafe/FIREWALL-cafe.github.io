import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import VoteButton from './VoteButton';
import Question from '../assets/icons/question_red.svg';
function FilterControls({ onUpdate, isOpen, isLoading }) {
  const [shouldResetVotes, setShouldResetVotes] = useState(false);

  const years = [2025, 2024, 2022, 2021, 2020, 2019, 2018, 2017, 2016];
  
  const locationMapping = {
    'st_polten': 'St. Polten',
    'vienna': 'Vienna',
    'hong_kong': 'Hong Kong',
    'poughkeepsie': 'Poughkeepsie',
    'new_york_city': 'New York City',
    'asheville': 'Asheville',
    'oslo': 'Oslo',
    'ann_arbor': 'Ann Arbor',
    'taiwan': 'Taiwan',
    'miami_beach': 'Miami Beach',
    'new_jersey': 'New Jersey',
  };

  // Get unique city keys and sort them by their display names
  const uniqueCityKeys = [...new Set(Object.keys(locationMapping))]
    .filter(key => locationMapping[key] !== 'Censored Terms Bot')
    .sort((a, b) => locationMapping[a].localeCompare(locationMapping[b]));

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
    const filterOptions = { 
      vote_ids: [], 
      years: [], 
      cities: [],
      page: 1,
      page_size: 10
    };
    
    // Get selected years
    const yearsSelect = form.querySelector('select[name="years"]');
    if (yearsSelect.value) {
      filterOptions.years = [yearsSelect.value];
    }

    // Get selected cities and query_bot
    const citiesSelect = form.querySelector('select[name="cities"]');
    const queryBotCheckbox = form.querySelector('input[name="query_bot"]');
    
    if (citiesSelect.value) {
      filterOptions.cities = [citiesSelect.value];
    }
    if (queryBotCheckbox.checked) {
      filterOptions.cities.push('automated_scraper');
    }

    // Get vote values
    for (let [key, value] of formData.entries()) {
      if (key.startsWith('votes') && value) {
        filterOptions.vote_ids.push(value);
      }
    }
    
    // Pass false as second argument to prevent closing
    onUpdate(filterOptions, false);
  };

  const handleReset = () => {
    const form = document.getElementById('filter-options-form');
    form.reset();

    setShouldResetVotes(true);
    setTimeout(() => {
      setShouldResetVotes(false);
      // Pass false as second argument to prevent closing
      onUpdate({ 
        vote_ids: [], 
        years: [], 
        cities: [],
        page: 1,
        page_size: 10
      }, false, true);
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
              <label htmlFor="years" className="text-lg font-black mb-2">Year</label>
              <select 
                name="years"
                className="w-full border border-zinc-400 rounded p-2"
                onChange={handleFilterChange}
              >
                <option value="">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Updated Cities Section */}
            <div className="flex flex-col">
              <label htmlFor="cities" className="text-lg font-black mb-2">Location</label>
              <select
                name="cities"
                className="w-full border border-zinc-400 rounded p-2 mb-2"
                onChange={handleFilterChange}
                disabled={isLoading}
              >
                <option value="">All Locations</option>
                {uniqueCityKeys.map((cityKey) => (
                  <option key={cityKey} value={cityKey}>
                    {locationMapping[cityKey]}
                  </option>
                ))}
              </select>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="query_bot"
                  name="query_bot" 
                  value="automated_scraper"
                  onChange={handleFilterChange}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="query_bot" className="ml-2 text-sm text-gray-700 flex items-center">
                  Query Bot
                  <img 
                    src={Question} 
                    alt="Question mark red"
                    className="ml-1 w-6 h-6 object-contain"
                    data-tooltip-id="tooltip"
                    data-tooltip-content="Potentially sensitive queries tracked by the Firewall Cafe Query Bot"
                    data-tooltip-place="top"
                  />
                </label>
              </div>
            </div>
            
            {/* Vote Results Section */}
            <div className="border-t border-gray-200 pt-3 hidden">
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
            </div>
          </div>

          {/* Close/Clear buttons */}
          <div className="flex justify-end gap-4 pt-3 border-t border-gray-200">
            <button 
              type="button"
              onClick={handleReset}
              className="px-3 py-1.5 text-sm text-black bg-white border border-black hover:bg-gray-50">
              Clear all
            </button>
            <button
              type="button"
              onClick={() => onUpdate({ vote_ids: [], years: [], cities: [] }, true, true)}
              className="px-3 py-1.5 text-sm text-white bg-black hover:bg-gray-800">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilterControls; 