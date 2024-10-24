import React from 'react';

const QueryItem = ({ votes, queryEN, queryCN, location, date, time }) => {
  return (
    <div className="flex flex-wrap gap-4 py-2 w-full text-xl text-black min-h-[48px] max-md:max-w-full">
      <div className="flex gap-1 items-center my-auto w-16 whitespace-nowrap">
        <img loading="lazy" src={`http://b.io/ext_${votes > 0 ? '14' : '19'}-`} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <div className="self-stretch my-auto">{votes.toString().padStart(2, '0')}</div>
      </div>
      <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px]">
        <div className="z-10 flex-1 shrink self-stretch my-auto w-full min-w-[240px]">{queryEN}</div>
      </div>
      <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px] text-zinc-400">
        <div className="z-10 flex-1 shrink self-stretch my-auto w-full min-w-[240px]">{queryCN}</div>
      </div>
      <div className="flex flex-1 shrink gap-1 items-center h-full basis-0 min-w-[240px]">
        <div className="z-10 flex-1 shrink self-stretch my-auto w-full min-w-[240px]">{location}</div>
      </div>
      <div className="flex gap-6 items-center h-full whitespace-nowrap w-[191px]">
        <div className="flex-1 shrink self-stretch my-auto basis-0">{date}</div>
        <div className="self-stretch my-auto w-14">{time}</div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/86ce09343f25d96cd9130eef11e745d5a7ed8da7884b0c7bbe08a0c1d9b4702a?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain shrink-0 my-auto w-8 aspect-square" />
    </div>
  );
};

export default QueryItem;