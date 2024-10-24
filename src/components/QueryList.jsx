import React from 'react';
import QueryItem from './QueryItem';

const queryData = [
  { votes: 185, queryEN: "Tankman june 4", queryCN: "坦克人 6 月 4 日", location: "New york city, NY", date: "01/03/2024", time: "05:53" },
  { votes: 0, queryEN: "Tankman june 4", queryCN: "坦克人 6 月 4 日", location: "New york city, NY", date: "01/03/24", time: "05:53" },
  { votes: 16, queryEN: "Tankman june 4", queryCN: "坦克人 6 月 4 日", location: "Beijing, CH", date: "01/01/24", time: "05:53" },
  { votes: 4, queryEN: "Tankman june 4", queryCN: "坦克人 6 月 4 日", location: "London, UK", date: "12/12/23", time: "05:53" },
  { votes: 105, queryEN: "Tankman june 4", queryCN: "坦克人 6 月 4 日", location: "San Jose, CA", date: "08/12/23", time: "05:53" },
  { votes: 1, queryEN: "Tankman june 4", queryCN: "坦克人 6 月 4 日", location: "Taipei City, TW", date: "04/12/23", time: "05:53" },
  { votes: 0, queryEN: "Tankman june 4", queryCN: "坦克人 6 月 4 日", location: "Dallas, TX", date: "04/11/23", time: "05:53" },
  { votes: 0, queryEN: "Tankman june 4", queryCN: "坦克人 6 月 4 日", location: "Washington, DC", date: "01/10/23", time: "05:53" },
  { votes: 1, queryEN: "Tankman june 4", queryCN: "坦克人 6 月 4 日", location: "Hong Kong, CH", date: "21/10/23", time: "05:53" },
  { votes: 0, queryEN: "Tankman june 4", queryCN: "坦克人 6 月 4 日", location: "Los Angeles, CA", date: "19/04/23", time: "05:53" },
];

const QueryList = () => {
  return (
    <section className="flex overflow-hidden flex-col pb-32 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex-1 shrink gap-2.5 self-stretch px-20 pb-6 w-full max-w-screen-xl text-2xl text-black min-h-[57px] max-md:px-5 max-md:max-w-full">
        25 related queries
      </div>
      <div className="flex flex-col items-center px-9 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-screen-xl max-md:max-w-full">
          <div className="flex flex-wrap gap-4 py-2 w-full text-xl text-black border-b border-solid border-b-neutral-300 min-h-[48px] max-md:max-w-full">
            <div className="gap-1 self-stretch my-auto w-16 whitespace-nowrap">Votes</div>
            <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px]">
              <div className="z-10 flex-1 shrink self-stretch my-auto w-full min-w-[240px]">Query EN</div>
            </div>
            <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px]">
              <div className="z-10 flex-1 shrink self-stretch my-auto w-full min-w-[240px]">搜索结果 中文</div>
            </div>
            <div className="flex flex-1 shrink gap-1 items-center h-full whitespace-nowrap basis-0 min-w-[240px]">
              <div className="z-10 flex-1 shrink self-stretch my-auto w-full min-w-[240px]">Location</div>
            </div>
            <div className="gap-6 self-stretch h-full whitespace-nowrap w-[191px]">Date</div>
            <div className="flex shrink-0 my-auto w-8 h-8" />
          </div>
          Continuing from where we left off:

          <div className="flex flex-col mt-6 w-full max-md:max-w-full">
            {queryData.map((item, index) => (
              <QueryItem key={index} {...item} />
            ))}
          </div>
          <div className="flex flex-col w-full min-h-[24px] max-md:max-w-full">
            <div className="w-full border border-solid bg-zinc-400 border-zinc-400 min-h-[1px] max-md:max-w-full" />
          </div>
          <div className="flex flex-col items-center self-center px-6 py-7 max-w-full text-2xl text-black w-[161px] max-md:px-5">
            <div>load more</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83c361a622b5a07e3d4834157a197144fe9143c6fdd77a9f991a2906a2b02001?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain mt-3 w-9 aspect-[4]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueryList;