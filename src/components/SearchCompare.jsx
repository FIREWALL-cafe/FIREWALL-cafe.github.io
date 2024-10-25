import React from 'react';
import ImageCarousel from './ImageCarousel';
import VotingSection from './VotingSection';
import GoogleResult from '../assets/google_result.png';
import BaiduResult from '../assets/baidu_result.png';

const carouselImages = [
  { src: GoogleResult },
  { src: BaiduResult }
];
  
const displayVoting = false;

function ResultsDisplay() {
  return (
    <section className="flex gap-2.5 justify-center items-center px-4 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col self-stretch my-auto max-w-screen-xl rounded-lg border border-red-600 border-solid min-w-[240px] w-[1248px] max-md:max-w-full">
        <ImageCarousel images={carouselImages} />
        {displayVoting && <VotingSection />}
      </div>
    </section>
  );
}

export default ResultsDisplay;