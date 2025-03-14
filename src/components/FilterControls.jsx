import React, { useState } from 'react';
import VoteButton from './VoteButton';

function FilterControls({ onUpdate, isOpen }) {
  const [shouldResetVotes, setShouldResetVotes] = useState(false);

  const years = [2025, 2024, 2022, 2021, 2020, 2019, 2018, 2017, 2016];
  const cities = [
    "Miami", "New York City", "Oslo", "St. Polten", 
    "Hong Kong", "Ann Arbor", "Vienna", "Asheville", "Poughkeepsie"
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
    
    // Get selected years
    const yearsSelect = form.querySelector('select[name="years"]');
    if (yearsSelect.value) {
      filterOptions.years = [yearsSelect.value];
    }

    // Get selected cities
    const citiesSelect = form.querySelector('select[name="cities"]');
    if (citiesSelect.value) {
      filterOptions.cities = [citiesSelect.value];
    }

    // Get vote values
    for (let [key, value] of formData.entries()) {
      if (key.startsWith('votes') && value) {
        filterOptions.vote_ids.push(value);
      }
    }
    
    console.log('Filter options being sent:', filterOptions);
    onUpdate(filterOptions);
  };

  const handleReset = () => {
    const form = document.getElementById('filter-options-form');
    form.reset();

    setShouldResetVotes(true);
    // Reset the flag after a short delay to allow for future resets
    setTimeout(() => {
      setShouldResetVotes(false);
      // Update with empty filters but don't close the panel
      onUpdate({ vote_ids: [], years: [], cities: [] }, false);
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

            {/* Cities Section */}
            <div className="flex flex-col">
              <label htmlFor="cities" className="text-lg font-black mb-2">Location</label>
              <select
                name="cities"
                className="w-full border border-zinc-400 rounded p-2"
                onChange={handleFilterChange}
              >
                <option value="">All Locations</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
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
                onClick={() => onUpdate({ vote_ids: [], years: [], cities: [] }, true)}
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