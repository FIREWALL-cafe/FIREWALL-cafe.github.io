import React from 'react';
import ImageCarousel from './ImageCarousel';
import VotingSection from './VotingSection';

function SearchCompare({ images, query, searchId }) {
  return (
    <section
      id={`search-compare-${searchId}`}
      className="flex mt-10 gap-2.5 justify-center items-center pb-8 w-full bg-white max-md:max-w-full"
    >
      <div className="flex overflow-hidden flex-col self-stretch my-auto max-w-[1280px] rounded-lg border border-red-600 border-solid min-w-[240px] w-full max-md:max-w-full">
        <ImageCarousel images={images} searchId={searchId} />
        {<VotingSection query={query} searchId={searchId} />}
      </div>
    </section>
  );
}

export default SearchCompare;
