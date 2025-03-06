import React from 'react';
import ImageCarousel from './ImageCarousel';
import VotingSection from './VotingSection';
import serverConfig from '../config';

const displayVoting = serverConfig.displayVoting;

function SearchCompare({ images, query, searchId }) {
  return (
    <section className="flex mt-10 gap-2.5 justify-center items-center pb-8 w-full bg-white max-md:max-w-full">
      <div className="flex overflow-hidden flex-col self-stretch my-auto max-w-screen-xl rounded-lg border border-red-600 border-solid min-w-[240px] w-[1248px] max-md:max-w-full">
        <ImageCarousel images={images} searchId={searchId} />
        {displayVoting && <VotingSection query={query} searchId={searchId} />}
      </div>
    </section>
  );
}

export default SearchCompare;