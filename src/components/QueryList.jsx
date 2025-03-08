import React from 'react';
import QueryItem from './QueryItem';

const QueryList = ({ results }) => {
  return (
    <section className="flex overflow-hidden flex-col pb-8 w-full bg-white max-md:pb-12">
      <div className="flex flex-col items-center px-4 md:px-8 w-full">
        <div className="flex flex-col w-full max-w-screen-xl">
          <div className="flex flex-wrap gap-4 py-1 w-full text-sm text-black border-b border-solid border-b-neutral-300 min-h-[32px] pr-4">
            <div className="w-16 whitespace-nowrap max-sm:w-12">Votes</div>
            <div className="flex-1 min-w-[180px] max-md:min-w-[140px] max-sm:min-w-0 max-sm:w-full">Query EN</div>
            <div className="flex-1 min-w-[180px] max-md:min-w-[140px] max-sm:min-w-0 max-sm:hidden">搜索结果 中文</div>
            <div className="flex-1 min-w-[120px] max-md:min-w-[100px] max-sm:min-w-0 max-sm:hidden">Location</div>
            <div className="w-24 text-right max-sm:w-auto">Date</div>
          </div>

          <div className="flex flex-col w-full divide-y divide-gray-100">
            <div className="max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {results.map((item, index) => (
                <QueryItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full min-h-[24px]">
            <div className="w-full border border-solid bg-zinc-400 border-zinc-400 min-h-[1px]" />
          </div>
        </div>
        <div className="mt-2 text-sm">{results.length} Results</div>
      </div>
    </section>
  );
};

export default QueryList;