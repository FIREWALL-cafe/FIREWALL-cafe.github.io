import React from 'react';
import QueryItem from './QueryItem';

const QueryList = ({ results, onPageChange, isLoading, filterOptions }) => {
  const { total, page, page_size, data } = results;
  const totalPages = Math.ceil(total / page_size);

  if (!isLoading && (!data || data.length === 0)) {
    return (
      <section className="flex overflow-hidden flex-col pb-8 w-full bg-white max-md:pb-12">
        <div className="flex flex-col items-center px-4 md:px-8 w-full">
          <div className="flex flex-col w-full max-w-screen-xl">
            <div className="flex flex-wrap gap-4 py-1 w-full text-[20px] text-black border-b border-solid border-b-neutral-300 min-h-[32px] pr-4">
              <div className="w-16 whitespace-nowrap iphone:w-12">Votes</div>
              <div className="flex-1 min-w-[180px] ipad-portrait:min-w-[140px] iphone:min-w-0 iphone:w-full">Query EN</div>
              <div className="flex-1 min-w-[180px] ipad-portrait:min-w-0 iphone:hidden">搜索结果 中文</div>
              <div className="flex-1 min-w-[120px] ipad-portrait:min-w-0 iphone:hidden">Location</div>
              <div className="w-56 text-right iphone:w-auto">Date</div>
              <div className="w-8 flex justify-center"></div>
            </div>
            <div className="flex justify-center items-center py-8 text-gray-500">
              No results found with the current filters
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex overflow-hidden flex-col pb-8 w-full bg-white max-md:pb-12">
      <div className="flex flex-col items-center px-4 md:px-8 w-full">
        <div className="flex flex-col w-full max-w-screen-xl">
          <div className="flex flex-wrap gap-4 py-1 w-full text-[20px] text-black border-b border-solid border-b-neutral-300 min-h-[32px] pr-4">
            <div className="w-16 whitespace-nowrap iphone:w-12">Votes</div>
            <div className="flex-1 min-w-[180px] ipad-portrait:min-w-[140px] iphone:min-w-0 iphone:w-full">Query EN</div>
            <div className="hidden ipad-landscape:flex flex-1 min-w-[180px]">搜索结果 中文</div>
            <div className="hidden ipad-landscape:flex flex-1 min-w-[120px]">Search Source</div>
            <div className="hidden ipad-landscape:flex w-56 text-right">Date</div>
            <div className="w-8 flex justify-center"></div>
          </div>

          <div className="flex flex-col w-full divide-y divide-gray-100 mt-6">
            <div className="relative mb-6">
              {isLoading && (
                <div className="absolute inset-0 bg-white/60 z-10 flex items-center justify-center">
                  <div className="text-gray-600">Loading...</div>
                </div>
              )}
              {data && data.map((item, index) => (
                <QueryItem 
                  key={item.search_id} 
                  {...item} 
                  filterOptions={filterOptions}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full min-h-[24px]">
            <div className="w-full border border-solid bg-zinc-400 border-zinc-400 min-h-[1px]" />
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center gap-4">
          {totalPages > 1 && (
            <div className="flex gap-2 items-center">
              <button
                onClick={() => onPageChange(page - 1)}
                disabled={isLoading || page === 1}
                className={`px-3 py-1 rounded border ${
                  isLoading || page === 1
                    ? 'bg-gray-100 text-gray-400 border-gray-300'
                    : 'bg-white text-black border-black hover:bg-gray-50'
                }`}
              >
                {isLoading ? 'Loading...' : 'Previous'}
              </button>
              <span className="text-sm">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => onPageChange(Number(page) + 1)}
                disabled={isLoading || page === totalPages}
                className={`px-3 py-1 rounded border ${
                  isLoading || page === totalPages
                    ? 'bg-gray-100 text-gray-400 border-gray-300'
                    : 'bg-white text-black border-black hover:bg-gray-50'
                }`}
              >
                {isLoading ? 'Loading...' : 'Next'}
              </button>
              <span className="text-sm">Total: {total}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QueryList;