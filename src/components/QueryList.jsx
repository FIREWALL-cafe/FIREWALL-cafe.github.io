import React from 'react';
import QueryItem from './QueryItem';

const QueryList = ({ results }) => {
  return (
    <section className="flex overflow-hidden flex-col pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      
      <div className="flex-1 shrink gap-2.5 self-stretch px-10 pt-6 w-full max-w-screen-xl text-2xl text-black min-h-[57px] max-md:px-5 max-md:max-w-full">
        {results.length} related queries
      </div>
      <div className="flex flex-col items-center px-9 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-screen-xl max-md:max-w-full">
          <div className="flex flex-wrap gap-4 py-2 w-full text-xl text-black border-b border-solid border-b-neutral-300 min-h-[48px] max-md:max-w-full">
            <div className="flex flex-1 shrink gap-1 items-center h-full basis-0">
              <div className="z-10 flex-1 shrink self-stretch my-auto w-full">Query</div>
            </div>
            <div className="flex flex-1 shrink gap-1 items-center h-full basis-0">
              <div className="z-10 flex-1 shrink self-stretch my-auto w-full">Translation</div>
            </div>
            <div className="flex flex-1 shrink gap-1 items-center h-full whitespace-nowrap basis-0">
              <div className="z-10 flex-1 shrink self-stretch my-auto w-full">Location</div>
            </div>
            <div className="gap-6 self-stretch h-full whitespace-nowrap w-[191px]">Date</div>
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