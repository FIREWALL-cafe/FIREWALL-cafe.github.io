import React, { useState, useEffect } from 'react';
import QueryItem from './QueryItem';

// Separate the header component for better organization
const QueryListHeader = () => {
  const [screenSize, setScreenSize] = useState(() => {
    const width = window.innerWidth;
    if (width < 640) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('mobile');
      else if (width < 1024) setScreenSize('tablet');
      else setScreenSize('desktop');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (screenSize === 'mobile') return null;

  if (screenSize === 'tablet') {
    return (
      <div className="grid grid-cols-[60px_1fr_1fr_120px_40px] gap-2 py-2 px-4 w-full text-base font-medium border-b border-solid border-b-neutral-300 min-h-[32px]">
        <div className="whitespace-nowrap">Votes</div>
        <div className="truncate whitespace-nowrap">Query EN</div>
        <div className="font-sc-sans truncate whitespace-nowrap">搜索结果 中文</div>
        <div className="text-right whitespace-nowrap">Date</div>
        <div></div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="grid grid-cols-[80px_1fr_1fr_1fr_160px_40px] gap-1 py-1 px-4 w-full text-[20px] border-b border-solid border-b-neutral-300 min-h-[32px]">
      <div className="whitespace-nowrap">Votes</div>
      <div className="truncate whitespace-nowrap">Query EN</div>
      <div className="font-sc-sans truncate whitespace-nowrap">搜索结果 中文</div>
      <div className="truncate whitespace-nowrap">Search Source</div>
      <div className="text-right whitespace-nowrap">Date</div>
      <div></div>
    </div>
  );
};

// Load More component
const LoadMore = ({ page, totalPages, total, onLoadMore, isLoading }) => {
  // Don't show if we're on the last page or there's only one page
  if (totalPages <= 1 || page >= totalPages) return null;

  return (
    <div className="mt-8 flex flex-col items-center gap-2">
      <button
        onClick={onLoadMore}
        disabled={isLoading}
        className="flex flex-col items-center gap-2 text-black hover:text-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="text-lg font-normal">load more</span>
        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

// Separate the empty state component
const EmptyState = () => (
  <section className="flex overflow-hidden flex-col pb-8 w-full bg-white max-md:pb-12">
    <div className="flex flex-col items-center px-4 w-full">
      <div className="flex flex-col w-full max-w-screen-xl">
        <QueryListHeader />
        <div className="flex justify-center items-center py-8 text-gray-500">
          No results found with the current filters
        </div>
      </div>
    </div>
  </section>
);

const QueryList = ({ results, onLoadMore, isLoading, filterOptions }) => {
  const { total, page, page_size, data } = results;
  const totalPages = Math.ceil(total / page_size);

  if (!isLoading && (!data || data.length === 0)) {
    return <EmptyState />;
  }

  return (
    <section id="query-list" className="mt-[120px] min-h-[70px] flex overflow-hidden flex-col pb-8 w-full bg-white max-md:pb-12">
      <div className="flex flex-col items-center px-4 md:px-4 w-full">
        <div className="flex flex-col w-full max-w-screen-xl">
          <QueryListHeader />

          <div className="flex flex-col w-full mt-6 md:mt-6">
            <div className="relative mb-6">
              {isLoading && (
                <div className="absolute inset-0 bg-white/60 z-10 flex items-center justify-center">
                  <div className="text-gray-600">Loading...</div>
                </div>
              )}
              {data?.map((item) => (
                <QueryItem 
                  key={item.search_id} 
                  {...item} 
                  filterOptions={filterOptions}
                />
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-col w-full min-h-[24px]">
            <div className="w-full border border-solid bg-zinc-400 border-zinc-400 min-h-[1px]" />
          </div>
        </div>

        <LoadMore 
          page={page}
          totalPages={totalPages}
          total={total}
          onLoadMore={onLoadMore}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
};

export default QueryList;