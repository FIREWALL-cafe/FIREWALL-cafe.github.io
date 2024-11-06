import React, { useState } from 'react';
import ThumbUp from '../assets/icons/thumb_up.svg';

// {
//     "search_id": 2226,
//     "search_timestamp": "1457217733000",
//     "search_location": "new_york_city",
//     "search_ip_address": null,
//     "search_client_name": "taiwan",
//     "search_engine_initial": null,
//     "search_engine_translation": null,
//     "search_term_initial": "tank man",
//     "search_term_translation": "坦克人",
//     "search_term_translation_language_code": null,
//     "search_term_status_banned": false,
//     "search_term_status_sensitive": false,
//     "search_schema_initial": 0,
//     "image_hrefs": [
//         "http://img4.imgtn.bdimg.com/it/u=253820337,2253814063&fm=21&gp=0.jpg",
//         "http://img5.imgtn.bdimg.com/it/u=1949464498,1299724015&fm=21&gp=0.jpg",
//         "http://www.pbs.org/wgbh/pages/frontline/teach/tankman/art/bigphoto.jpg",
//     ]
// }
const QueryItem = ({ search_id, search_term_initial, search_term_translation, search_location, search_timestamp, image_hrefs }) => {
  const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`;
  const humanize = str => str.split('_').map(capitalize).join(' ');
  const formatDate = timestamp => new Date(parseInt(timestamp)).toLocaleDateString();

  const [status, setStatus] = useState("loading");

  const handleOnLoad = () => {
    setStatus("fulfilled");
  };

  const handleOnError = () => {
    setStatus("failed");
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