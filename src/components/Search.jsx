import React from 'react';

import SearchInput from './SearchInput';
import SearchCompare from './SearchCompare';
import FeatureCards from './FeatureCards';

const features = [
    {
      title: "Archive",
      chineseTitle: { text: "档案", color: "text-black border-black" },
      description: "Explore what other users have searched and vote on results.",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/43fd09d2605185335d23773f2561fcb2ded3adbfd5e94e9cc41d1b5c6f67684e?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
      bgColor: "bg-red-600",
      textColor: "text-white",
      borderColor: "border-red-600"
    },
    {
      title: "Timeline",
      chineseTitle: { text: "时间线", color: "text-red-600 border-red-600" },
      description: "Why did all this happen?",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5c35978f81aa12a10a5251a03d41c24a605bb1871811e8cce8e99605780ce75?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
      bgColor: "bg-rose-100",
      textColor: "text-black",
      borderColor: "border-red-600"
    },
    {
      title: "Expert commentary",
      chineseTitle: { text: "专家点评", color: "text-red-600 border-red-600" },
      description: "Read and listen to in-depth commentary from experts in the east and west.",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/93109040a8c5bb26e9936f7a12c249e8b5ba72d7f40fb61cdb12de89b360914d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
      bgColor: "bg-white",
      textColor: "text-black",
      borderColor: "border-red-600"
    }
];
  
function Search() {
  return (
    <main>
      <SearchInput />
      <SearchCompare />
      <FeatureCards features={features} />
    </main>
  );
}

export default Search;