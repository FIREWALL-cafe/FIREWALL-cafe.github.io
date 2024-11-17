import React from 'react';

import SearchInput from './SearchInput';
import FeatureCards from './FeatureCards';
import Archive from '../assets/icons/Archive_grayscale.png';
import SearchIcon from '../assets/icons/search-color.png';
import Commentary from '../assets/icons/expert-commentary_grayscale.png';

const features = [
    {
      title: "Archive",
      url: "/archive",
      chineseTitle: { text: "档案", color: "text-black border-black" },
      description: "Explore what other users have searched and vote on results.",
      iconSrc: Archive,
      bgColor: "bg-red-600",
      textColor: "text-white",
      borderColor: "border-red-600"
    },
    {
      title: "Expert editorial",
      url: "/editorial",
      chineseTitle: { text: "专家点评", color: "text-red-600 border-red-600" },
      description: "Read and listen to in-depth commentary from experts.",
      iconSrc: Commentary,
      bgColor: "bg-white",
      textColor: "text-black",
      borderColor: "border-red-600"
    }
];
  
function Search() {
  return (
    <main>
      <section className="flex overflow-hidden flex-col justify-center py-16 w-full bg-white max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col justify-center w-full text-center max-md:max-w-full">
          <div className="chinese flex flex-col w-full text-7xl font-medium leading-tight tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
            <div className="flex flex-wrap gap-5 items-center self-center text-black max-md:max-w-full max-md:text-4xl">
              <img src={SearchIcon} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" />
              <div className="self-stretch my-auto border-black max-md:max-w-full max-md:text-4xl">
                Search Session
              </div>
            </div>
            <div className="text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl">搜索结果</div>
          </div>
        </div>
        <SearchInput searchMode='live' />
        <FeatureCards features={features} />
      </section>
    </main>
  );
}

export default Search;