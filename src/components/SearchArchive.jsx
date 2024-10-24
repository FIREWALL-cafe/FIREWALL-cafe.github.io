import HeroArchive from './HeroArchive';
import QueryList from './QueryList';
import FeatureCards from './FeatureCards';

const features = [
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