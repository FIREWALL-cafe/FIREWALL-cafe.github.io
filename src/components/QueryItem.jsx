import React, { useState } from 'react';
import SearchCompare from './SearchCompare';

const QueryItem = ({ id, tags, title, excerpt, date, galleries }) => {
  const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`;

  const [dropdown, setDropdown] = useState(true);
  const toggleDropdown = () => setDropdown(!dropdown);

  const parseLocation = (tags) => {
    const locs = tags.filter(tag => tag.name.startsWith('has_search_location_'));
    return locs.length > 0 ? locs[0].name.split('_').slice(-1)[0] : 'N/A';
  }

  const handleOnLoad = () => {
    setStatus("fulfilled");
  };

  const handleOnError = () => {
    setStatus("failed");
  };
      
  return (
    <div className="flex flex-wrap gap-4 py-2 w-full min-h-[48px] max-md:max-w-full">
      <div className="flex flex-wrap gap-4 py-2 w-full text-xl text-black min-h-[48px] max-md:max-w-full" onClick={toggleDropdown}>
        <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px]">
          <div className="z-10 flex-1 shrink self-stretch my-auto w-full min-w-[240px]">{title.rendered}</div>
        </div>
        <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px] text-zinc-400">
          <div className="z-10 flex-1 shrink self-stretch my-auto w-full min-w-[240px]">{excerpt.rendered.replace(/<[^>]*>/g, '')}</div>
        </div>
        <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px]">
          <div className="z-10 flex-1 shrink self-stretch my-auto w-full min-w-[240px]">{parseLocation(tags)}</div>
        </div>
        <div className="flex gap-6 items-center h-full whitespace-nowrap w-[191px]">
          <div className="flex-1 shrink self-stretch my-auto basis-0">{new Date(date).toLocaleDateString()}</div>
        </div>
      </div>
      <div className={`flex flex-wrap`} style={dropdown ? { display: 'none' } : {}}>
        <SearchCompare images={ { googleResults: galleries[0].src, baiduResults: galleries[1].src } } />
      </div>
    </div>
  );
};

export default QueryItem;