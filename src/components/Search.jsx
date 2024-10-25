import React from 'react';

import SearchInput from './SearchInput';
import SearchCompare from './SearchCompare';
import FeatureCards from './FeatureCards';
import Archive from '../assets/icons/Archive_grayscale.png';
import TimelineIcon from '../assets/icons/Timeline.png';
import Commentary from '../assets/icons/expert-commentary_grayscale.png';

const features = [
    {
      title: "Archive",
      chineseTitle: { text: "档案", color: "text-black border-black" },
      description: "Explore what other users have searched and vote on results.",
      iconSrc: Archive,
      bgColor: "bg-red-600",
      textColor: "text-white",
      borderColor: "border-red-600"
    },
    {
      title: "Timeline",
      chineseTitle: { text: "时间线", color: "text-red-600 border-red-600" },
      description: "Why did all this happen?",
      iconSrc: TimelineIcon,
      bgColor: "bg-rose-100",
      textColor: "text-black",
      borderColor: "border-red-600"
    },
    {
      title: "Expert commentary",
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
      <section className="flex overflow-hidden flex-col justify-center py-32 w-full bg-white max-md:py-24 max-md:max-w-full">
        <h1 className="chinese flex flex-col w-full text-7xl font-medium leading-tight text-center tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
          <span className="text-black border-black max-md:max-w-full max-md:text-4xl">Search results</span>
          <span className="text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl">搜索结果</span>
        </h1>

        <SearchInput />
        <SearchCompare />
        <FeatureCards features={features} />
      </section>
    </main>
  );
}

export default Search;