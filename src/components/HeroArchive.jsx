import React from 'react';
import SearchInput from './SearchInput';

import Archive from '../assets/icons/Archive.png';

const HeroArchive = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center py-16 w-full bg-white max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full text-center max-md:max-w-full">
        <div className="chinese flex flex-col w-full text-7xl font-medium leading-tight tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
          <div className="flex flex-wrap gap-5 items-center self-center text-black max-md:max-w-full max-md:text-4xl">
            <img src={Archive} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" />
            <div className="self-stretch my-auto border-black max-md:max-w-full max-md:text-4xl">
              Archive Search
            </div>
          </div>
          <div className="text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl">
            搜索结果存档
          </div>
        </div>
        <div className="mt-5 text-lg text-black max-md:max-w-full">
          Browse what others are searching, vote on their results, and see how they voted too.
        </div>
      </div>
      <SearchInput searchMode="archive"/>
    </section>
  );
};

export default HeroArchive;