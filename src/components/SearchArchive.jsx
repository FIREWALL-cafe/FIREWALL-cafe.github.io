import HeroArchive from './HeroArchive';
import FeatureCards from './FeatureCards';

import Commentary from '../assets/icons/expert-commentary_grayscale.png';

const features = [
  {
    title: "Search",
    url: "/search",
    chineseTitle: { text: "专家点评", color: "border-red-600" },
    description: "Search Google and Baidu and compare the results.",
    iconSrc: Commentary,
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

const SearchArchive = () => {
  return (
    <main>
      <section className="flex overflow-hidden flex-col justify-center w-full px-5 bg-white max-md:max-w-full">
        <HeroArchive />
        <FeatureCards features={features} />
      </section>
    </main>
  );
};

export default SearchArchive;