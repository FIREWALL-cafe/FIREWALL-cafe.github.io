import React, { useState } from 'react';
import SearchCompare from './SearchCompare';
import ThumbUp from '../assets/icons/thumb_up.svg';
const QueryItem = ({ search_id, search_term_initial, search_term_translation, search_location, search_timestamp, image_hrefs }) => {
  const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`;
  const humanize = str => str.split('_').map(capitalize).join(' ');
  const formatDate = timestamp => new Date(parseInt(timestamp)).toLocaleDateString();

  const [status, setStatus] = useState("loading");
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
  
  const displayCarousel = (googleResults, baiduResults) => {
    return (googleResults.length > 0 || baiduResults.length > 0);
  };

  return (
    <div className="flex flex-wrap gap-4 py-2 w-full text-xl text-black min-h-[48px] max-md:max-w-full">
      <div className="flex gap-1 items-center my-auto w-16 whitespace-nowrap">
        <img loading="lazy" src={ThumbUp} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <div className="self-stretch my-auto">???</div>
      </div>
      <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px]">
        <div className="z-10 flex-1 shrink self-stretch my-auto w-full min-w-[240px]">{search_term_initial}</div>
      </div>
      <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px] text-zinc-400">
        <div className="z-10 flex-1 shrink self-stretch my-auto w-full min-w-[240px]">{search_term_translation}</div>
      </div>
      <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px]">
        <div className="z-10 flex-1 shrink self-stretch my-auto w-full min-w-[240px]">{search_location && humanize(search_location)}</div>
      </div>
      <div className="flex gap-6 items-center h-full whitespace-nowrap w-[191px]">
        <div className="flex-1 shrink self-stretch my-auto basis-0">{formatDate(search_timestamp)}</div>
        </div>
        <div className="flex flex-1">
          <img src={image_hrefs[0]} onLoad={handleOnLoad} onError={handleOnError} className={`object-contain shrink-0 my-auto w-8 aspect-square ${status === "fulfilled" ? "visible" : "hidden"}`} />
        </div>
    </div>
  );
};

export default QueryItem;