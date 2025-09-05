import React from 'react';
import { Link } from 'react-router-dom';
import imageCollage from '../assets/images/homepage-section_2-image_collage.png';

function SearchTrendsSection() {
  const trendingSearches = [
    { id: 1, text: 'tank man', isEnglish: true },
    { id: 2, text: 'june 4', isEnglish: true },
    { id: 3, text: '天安门广场', isEnglish: false },
    { id: 4, text: '小熊维尼 xi', isEnglish: false },
    { id: 5, text: 'uyghur', isEnglish: true },
  ];

  return (
    <section className="w-full flex flex-col py-16">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="font-bitmap-song">
            <h2 className="font-display-04 mb-2">What are others seeking over the wall?</h2>
            <div className="font-display-04 text-red-600">人们翻墙时在寻找什么?</div>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            {trendingSearches.map(search => (
              <Link
                key={search.id}
                to={`/archive?q=${encodeURIComponent(search.text)}`}
                className={`px-4 py-2.5 rounded-full border font-body-03 ${
                  search.isEnglish
                    ? 'border-neutral-900 text-neutral-900'
                    : 'border-red-600 text-red-600'
                } hover:bg-neutral-50 transition-colors`}
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
