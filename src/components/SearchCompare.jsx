import React from 'react';
import VotingSection from './VotingSection';

function ResultsDisplay() {
  return (
    <section className="flex gap-2.5 justify-center items-center px-4 pb-32 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col self-stretch my-auto max-w-screen-xl rounded-lg border border-red-600 border-solid min-w-[240px] w-[1248px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/967c736fc8cd83726decf310ee2a937cd7d3a12dc303be5438cdc8750c69b38e?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain w-full border-b border-solid aspect-[15.63] border-b-red-600 max-md:max-w-full" alt="Search results header" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a23cfbbb06ef03eeaa980299dfadc1598caa970a5fb23fabddcab0f15d9a831?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain w-full aspect-[2.71] max-md:max-w-full" alt="Search results subheader" />
        <div className="flex flex-col w-full bg-gray-50 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col w-full bg-slate-100 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col w-full max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/394b769bb5186a97bdf9148022d914bae62d9c4a4c822f3ba7b984d639252334?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain w-full border-solid shadow-sm aspect-[2.26] border-t-[1.28px] border-t-red-600 border-x-[1.28px] border-x-red-600 max-md:max-w-full" alt="Search results content" />
            </div>
          </div>
          <VotingSection />
        </div>
      </div>
    </section>
  );
}

export default ResultsDisplay;