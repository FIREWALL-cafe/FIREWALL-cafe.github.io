import React from 'react';
import QueryItem from './QueryItem';

const QueryList = ({ results }) => {
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

  return (
    <section className="flex overflow-hidden flex-col pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex-1 shrink gap-2.5 self-stretch px-20 py-6 w-full max-w-screen-xl text-2xl text-black min-h-[57px] max-md:px-5 max-md:max-w-full">
        {results.length} related queries {getFilterOptions() ? `with ${JSON.stringify(getFilterOptions())}` : ''}
      </div>
      <div className="flex flex-col items-center px-9 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-screen-xl max-md:max-w-full">
          <div className="flex flex-wrap gap-4 py-2 w-full text-xl text-black border-b border-solid border-b-neutral-300 min-h-[48px] max-md:max-w-full">
            <div className="gap-1 self-stretch my-auto w-16 whitespace-nowrap">Votes</div>
            <div className="flex flex-1 shrink gap-1 items-center h-full basis-0">Query EN</div>
            <div className="flex flex-1 shrink gap-1 items-center h-full basis-0">搜索结果 中文</div>
            <div className="flex flex-1 shrink gap-1 items-center h-full whitespace-nowrap basis-0">Location</div>
            <div className="gap-6 self-stretch h-full">Date</div>
          </div>

          <div className="flex flex-col mt-6 w-full max-md:max-w-full">
            {results.map((item, index) => (
              <QueryItem key={index} {...item} />
            ))}
          </div>
          <div className="flex flex-col w-full min-h-[24px] max-md:max-w-full">
            <div className="w-full border border-solid bg-zinc-400 border-zinc-400 min-h-[1px] max-md:max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueryList;