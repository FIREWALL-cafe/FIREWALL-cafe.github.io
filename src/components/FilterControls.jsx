import React, { useState } from 'react';
import VoteButton from './VoteButton';
import { locationMapping } from '../constants/locations';

function FilterControls({ onUpdate, isOpen, isLoading }) {
  const [shouldResetVotes, setShouldResetVotes] = useState(false);

  const regions = {
    'United States': ['ann_arbor', 'st_polten', 'poughkeepsie', 'new_york_city', 'asheville', 'miami_beach', 'new_jersey'],
    'Europe': ['vienna', 'oslo'],
    'Asia': ['hong_kong', 'taiwan']
  };
  
  // Get unique city keys and sort them by their display names
  const uniqueCityKeys = [...new Set(Object.keys(locationMapping))]
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

  const handleFilterChange = (event) => {
    const form = document.getElementById('filter-options-form');
    const formData = new FormData(form);
    const filterOptions = { 
      vote_ids: [], 
      years: [], 
      cities: [],
      page: 1,
      page_size: 10
    };
    
    // Reset other dropdown based on which one changed
    const regionsSelect = form.querySelector('select[name="regions"]');
    const citiesSelect = form.querySelector('select[name="cities"]');
    
    if (event.target.name === 'regions') {
      citiesSelect.value = ''; // Reset Source dropdown
      if (regionsSelect.value) {
        filterOptions.cities = regions[regionsSelect.value];
      }
    } else if (event.target.name === 'cities') {
      regionsSelect.value = ''; // Reset Region dropdown
      if (citiesSelect.value) {
        filterOptions.cities = [citiesSelect.value];
      }
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
            {/* Regions Section */}
            <div className="flex flex-col">
              <label htmlFor="regions" className="text-lg font-black mb-2">Region</label>
              <select 
                name="regions"
                className="w-full border border-zinc-400 rounded p-2"
                onChange={(e) => handleFilterChange(e)}
              >
                <option value="">All Regions</option>
                {Object.keys(regions).map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* Sources Section */}
            <div className="flex flex-col">
              <label htmlFor="cities" className="text-lg font-black mb-2">Search Source</label>
              <select
                name="cities"
                className="w-full border border-zinc-400 rounded p-2"
                onChange={(e) => handleFilterChange(e)}
                disabled={isLoading}
              >
                <option value="">All Sources</option>
                {uniqueCityKeys.map((cityKey) => (
                  <option key={cityKey} value={cityKey}>
                    {locationMapping[cityKey]}
                  </option>
                ))}
              </select>
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