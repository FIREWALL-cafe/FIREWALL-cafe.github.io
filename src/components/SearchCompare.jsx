import React from 'react';
import ImageCarousel from './ImageCarousel';
import VotingSection from './VotingSection';
  
const displayVoting = false;

function SearchCompare({ images }) {
  return (
    <section className="flex mt-10 gap-2.5 justify-center items-center pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col self-stretch my-auto max-w-screen-xl rounded-lg border border-red-600 border-solid min-w-[240px] w-[1248px] max-md:max-w-full">
        <ImageCarousel images={images} />
        {displayVoting && <VotingSection />}
      </div>
    </section>
  );
}

export default SearchCompare;