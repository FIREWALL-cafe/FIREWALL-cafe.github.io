import HeroArchive from './HeroArchive';
import QueryList from './QueryList';
import FeatureCards from './FeatureCards';

import TimelineIcon from '../assets/icons/Timeline.png';
import Commentary from '../assets/icons/expert-commentary_grayscale.png';

const features = [
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
    description: "Read and listen to in-depth commentary from experts in the east and west.",
    iconSrc: Commentary,
    bgColor: "bg-white",
    textColor: "text-black",
    borderColor: "border-red-600"
  }
];
  
const SearchArchive = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white min-h-[200px]">
      <main>
        <HeroArchive />
        <QueryList />
        <FeatureCards features={features} />
      </main>
    </div>
  );
};

export default SearchArchive;