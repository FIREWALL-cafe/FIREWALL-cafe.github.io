import React, { useState } from 'react';

import Modal from './Modal';
import VoteButton from './VoteButton';
import { useContext } from 'react';
import SearchContext from '../SearchContext';
import FilterIcon from '../assets/icons/tune.svg';

function FilterOptionsModal({ open, onClose }) {
  const { doSearch, searchResults } = useContext(SearchContext);
  const [isLoading, setLoading] = useState(false);

  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2024];
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
  const searchLocations = async () => {
    console.log('searching locations');
  }

  const handleKeyDownLocation = (e) => {
    if (e.keyCode === 13) searchLocations();
  }

  const handleUpdateFilters = (e) => {
    e.preventDefault();
    let form = document.getElementById('filter-options-form');
    const formData = new FormData(form);
    const filterOptions = { vote_ids: [], years: [], cities: [] };
    for (let [key, value] of formData.entries()) {
      if (value) {
        console.log(key, value);
        if (key.startsWith('votes')) {
          filterOptions.vote_ids.push(value);
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
    doSearch(filterOptions);
  };

  const voteHandler = (voteCategory) => {
    let votebtn = document.getElementById(voteCategory);
    votebtn.value = votebtn.value === metaKeyToId[voteCategory] ? '' : metaKeyToId[voteCategory];
    console.log('voteHandler:', votebtn.value);
  }

  return (
    <>
      <div onClick={() => onClose(true)} className="flex cursor-pointer justify-center items-center px-4 py-2 text-md text-red-600 bg-white border border-red-600">
        <div>filters</div>
        <img src={FilterIcon} />
      </div>
      <Modal open={open} onClose={onClose} onUpdate={handleUpdateFilters}>
        <div className="mx-auto mb-[80px]">
          <form id="filter-options-form" className="grow flex flex-col py-2 mt-10 text-black bg-white max-md:px-5">
            <div className="flex flex-col w-full max-md:max-w-full">
              <div className="flex flex-col w-full whitespace-nowrap max-md:max-w-full">
                <div className="flex gap-1 items-start py-1.5 w-full max-md:max-w-full">
                  <label htmlFor="year" className="text-xl font-black my-4">Year</label>
                </div>
                <div className="grid grid-cols-4 items-start w-full text-md max-md:max-w-full">
                  {years.map((year, index) => (
                    <div key={index} className="flex gap-8 items-center px-2.5 py-2 max-w-full">
                      <div className="flex gap-2 items-center self-stretch my-auto">
                        <input type="checkbox" id={year} name={year} className="w-6 h-6 border border-solid border-zinc-400" />
                        <label htmlFor={year} className="self-stretch my-auto">{year}</label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col mt-6 border-t border-solid border-t-gray-400 w-full max-md:max-w-full">
                <div className="flex gap-1 py-1.5 w-full max-md:max-w-full">
                  <label htmlFor="location"className="text-xl font-black my-4">Location</label>
                </div>
              </div>
              {/* <div className="flex overflow-hidden flex-wrap w-full rounded border border-solid border-neutral-300 min-h-[56px] max-md:max-w-full">
                <input
                  placeholder="Search Locations"
                  type="text"
                  onChange={(e) => searchLocations()}
                  onKeyDown={handleKeyDownLocation}
                  disabled={false}
                  className="flex-1 shrink px-4 my-auto text-xl min-h-[40px] min-w-[240px] border-none text-zinc-400 max-md:max-w-full" aria-label="Search Locations"
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
              </div> */}
              <div className="grid grid-cols-3 justify-between items-center mt-2 w-full text-xl max-md:max-w-full">
                {cities.map((city, index) => (
                  <div key={index} className="flex gap-4 items-center self-stretch px-2.5 py-2 my-auto">
                    <div className="flex gap-2 items-center self-stretch my-auto">
                      <input type="checkbox" value={city} id={`city-${index}`} name={`city-${index}`} className="w-6 h-6 border border-solid border-zinc-400" />
                      <label htmlFor={`city-${index}`} className="self-stretch my-auto">{city}</label>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col mt-6 w-full text-lg whitespace-nowrap max-md:max-w-full">
                <label htmlFor="vote" className="text-xl font-black my-4">Vote Result</label>
                <div className="grid grid-cols-3 gap-2 justify-between items-center mt-2 w-full text-xl max-md:max-w-full">
                  {vote_categories.map((category, index) => (
                    <VoteButton key={index} voteCategory={category} voteHandler={voteHandler} isDisabled={false} setDisabled={() => {}} />
                  ))}
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default FilterOptionsModal;