import React from "react";
import { Link } from "react-router-dom";
import imageCollage from "../assets/images/homepage-section_2-image_collage.png";

function SearchTrendsSection() {
  const trendingSearches = [
    { id: 1, text: "tank man", isEnglish: true },
    { id: 2, text: "june 4", isEnglish: true },
    { id: 3, text: "天安门广场", isEnglish: false },
    { id: 4, text: "小熊维尼 xi", isEnglish: false },
    { id: 5, text: "uyghur", isEnglish: true },
  ];

  return (
    <section className="w-full flex flex-col py-16">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="chinese">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-2">
              What are others seeking over the wall?
            </h2>
            <div className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-red-600">
              人们翻墙时在寻找什么?
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            {trendingSearches.map((search) => (
              <Link 
                key={search.id}
                to={`/archive?q=${encodeURIComponent(search.text)}`}
                className={`px-4 py-2.5 rounded-full border ${
                  search.isEnglish
                    ? "border-black text-black"
                    : "border-red-600 text-red-600 text-lg"
                } hover:bg-gray-50 transition-colors`}
              >
                {search.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img
            src={imageCollage}
            alt="Search trends visualization"
            className="w-full object-contain aspect-[1.15]"
          />
        </div>
      </div>
    </section>
  );
}

export default SearchTrendsSection;
