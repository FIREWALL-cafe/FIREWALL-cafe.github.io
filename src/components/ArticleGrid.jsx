import React from 'react';
import ArticleCard from './ArticleCard';
import PressSmart from '../assets/images/press-smart_redirect-1100x696.jpg';

const articles = [
  {
    id: 1,
    image: "/press-smart_redirect-1100x696.jpg",
    title: "Smart Bets: REDIRECT",
    url: "https://mountainx.com/arts/smart-bets-redirect/",
    date: "Jan 20, 2020"
  },
  {
    id: 3,
    image: "/images/press-russia.jpg.webp",
    title: "The Real Story: Russia's New Internet Firewall (cue 35:06)",
    url: "https://www.bbc.co.uk/sounds/play/w3csydds",
    date: "Nov 1, 2019",
  },
  {
    id: 5,
    image: "/images/press-hkfp.jpg",
    title: "Google vs. Baidu – Artist Joyce Yu-Jean Lee examines cultural and political bias online… and in ourselves",
    url: "https://www.hongkongfp.com/2019/02/24/video-google-vs-baidu-artist-joyce-yu-jean-lee-examines-cultural-political-bias-online/",
    date: "February 24, 2019"
  },
];

function ArticleGrid() {
  return (
    <section className="flex flex-col items-center px-14 pt-16 pb-16 w-full bg-gray-50 border-t border-solid border-t-neutral-300 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1080px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-center items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
          {articles.map(article => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticleGrid;