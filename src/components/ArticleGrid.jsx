import React from 'react';
import ArticleCard from './ArticleCard';
import PressRussia from '../assets/images/press-russia.jpg.webp';
import PressHKFP from '../assets/images/press/press-hkfp-default.jpg';
import PressHKFPHover from '../assets/images/press/press-hkfp-hover.jpg';
import PressBurnway from '../assets/images/press/Press-Burnway-default.jpg';
import PressBurnwayHover from '../assets/images/press/Press-Burnway-hover.jpg';
import PressMountain from '../assets/images/press/press-mountain_xpress-default.jpg';
import PressMountainHover from '../assets/images/press/press-mountain_xpress-hover.jpg';
import PressBBC from '../assets/images/press/press-bbc-default.jpg';
import PressBBCHover from '../assets/images/press/press-bbc-hover.jpg';
import PressChinaUnscripted from '../assets/images/press/press-china_unscripted-default.jpg';
import PressChinaUnscriptedHover from '../assets/images/press/press-china_unscripted-hover.jpg';

const articles = [
  {
    image: PressBurnway,
    imageHover: PressBurnwayHover,
    title: "Slow Connection: TSA GVL presents REDIRECT in Asheville",
    url: "https://burnaway.org/tsa-gvl-redirect-avl/",
    date: "Feb 13, 2020"
  },
  {
    image: PressMountain,
    imageHover: PressMountainHover,
    title: "Smart Bets: REDIRECT",
    url: "https://mountainx.com/arts/smart-bets-redirect/",
    date: "Jan 20, 2020"
  },
  {
    image: PressBBC,
    imageHover: PressBBCHover,
    title: "The Real Story: Russia's New Internet Firewall (cue 35:06)",
    url: "https://www.bbc.co.uk/sounds/play/w3csydds",
    date: "Nov 1, 2019",
  },
  {
    image: PressChinaUnscripted,
    imageHover: PressChinaUnscriptedHover,
    title: "#42 Hacking China’s Censorship | FIREWALL Cafe",
    url: "http://chinaunscripted.libsyn.com/42-hacking-chinas-censorship-firewall-cafe",
    date: "Aug 23, 2019",
  },
  {
    image: PressHKFP,
    imageHover: PressHKFPHover,
    title: "Two artists ask: what does it mean to live under the shadow of the Great Firewall",
    url: "https://www.hongkongfp.com/2019/01/20/two-artists-ask-what-does-it-mean-to-live-under-the-shadow-of-the-great-firewall/",
    date: "January 20, 2019"
  },
  {
    image: PressHKFP,
    imageHover: PressHKFPHover,
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