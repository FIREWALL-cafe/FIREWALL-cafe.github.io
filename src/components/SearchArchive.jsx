import HeroArchive from './HeroArchive';
import FeatureCards from './FeatureCards';

import Commentary from '../assets/icons/expert-commentary_grayscale.png';
import CommentaryHover from '../assets/icons/expert-commentary.png';
import Search from '../assets/icons/search-grayscale.png';
import SearchHover from '../assets/icons/search-color.png';

const features = [
  {
    title: "Search",
    url: "/search",
    chineseTitle: { text: "专家点评", color: "border-red-600" },
    description: "Search Google and Baidu and compare the results.",
    iconSrc: Search,
    iconSrcHover: SearchHover,
    bgColor: "bg-red-600",
    textColor: "text-white",
    borderColor: "border-red-600"
  },
  {
    title: "Expert commentary",
    url: "/editorial",
    chineseTitle: { text: "专家点评", color: "text-red-600 border-red-600" },
    description: "Read and listen to in-depth commentary from experts.",
    iconSrc: Commentary,
    iconSrcHover: CommentaryHover,
    bgColor: "bg-white",
    textColor: "text-black",
    borderColor: "border-red-600"
  }
];

const SearchArchive = () => {
  return (
    <main id="search-archive" className="is-large-width-content max-w-[1280px]">
      <section className="flex overflow-hidden flex-col justify-center w-full bg-white max-md:max-w-full">
        <HeroArchive />
        <FeatureCards features={features} />
      </section>
    </main>
  );
};

export default SearchArchive;