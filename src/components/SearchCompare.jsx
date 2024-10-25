import React from 'react';
import ImageCarousel from './ImageCarousel';
import VotingSection from './VotingSection';

const carouselImages = [
  { src: "https://cdn.builder.io/api/v1/image/assets/d56f8d62d9074d509de3faeb2651bd99/9a23cfbbb06ef03eeaa980299dfadc1598caa970a5fb23fabddcab0f15d9a831?apiKey=d56f8d62d9074d509de3faeb2651bd99&", alt: "Search result preview 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/d56f8d62d9074d509de3faeb2651bd99/394b769bb5186a97bdf9148022d914bae62d9c4a4c822f3ba7b984d639252334?apiKey=d56f8d62d9074d509de3faeb2651bd99&", alt: "Search result preview 3" }
];
  
const displayVoting = false;

function ResultsDisplay() {
  return (
    <section className="flex gap-2.5 justify-center items-center px-4 pb-32 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col self-stretch my-auto max-w-screen-xl rounded-lg border border-red-600 border-solid min-w-[240px] w-[1248px] max-md:max-w-full">
        <ImageCarousel images={carouselImages} />
        {displayVoting && <VotingSection />}
      </div>
    </section>
  );
}

export default ResultsDisplay;