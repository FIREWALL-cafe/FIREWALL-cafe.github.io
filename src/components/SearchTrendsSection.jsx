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
    <section className="flex flex-col justify-center items-center pb-16 w-full max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-center items-center max-w-full w-[1080px]">
        <div className="flex flex-col p-8 flex-1 min-w-[240px] max-md:max-w-full order-2 md:order-1">
          <div className="chinese flex flex-col justify-center w-full text-5xl font-medium max-md:max-w-full max-md:text-4xl">
            <h2 className="text-black border-black leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              What are others seeking over the wall?
            </h2>
            <div className="leading-tight text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl">
              人们翻墙时在寻找什么?
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-10 w-full text-base text-center text-black max-md:max-w-full">
            {trendingSearches.map((search) => (
              <div
                key={search.id}
                className={`gap-1 self-stretch px-4 py-2.5 my-auto bg-white border border-solid min-h-[40px] rounded-[10000px] ${
                  search.isEnglish
                    ? "border-black text-black"
                    : "border-red-600 text-red-600 text-lg"
                }`}
              >
                <Link to={`/archive?q=${encodeURIComponent(search.text)}`}>{search.text}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 justify-center self-stretch py-4 my-auto min-w-[240px] order-1 md:order-2">
          <img
            src={imageCollage}
            alt="Search trends visualization"
            className="object-contain w-full aspect-[1.15]"
          />
        </div>
      </div>
    </section>
  );
}

export default SearchTrendsSection;
