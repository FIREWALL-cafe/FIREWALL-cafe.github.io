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
    url: "https://burnaway.org/daily/tsa-gvl-redirect-avl/",
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
    title: "The Real Story: Russia's New Internet Firewall",
    url: "https://www.bbc.co.uk/sounds/play/w3csydds",
    date: "Nov 1, 2019",
    note: "(cue 35:06)"
  },
  {
    image: PressChinaUnscripted,
    imageHover: PressChinaUnscriptedHover,
    title: "#42 Hacking China's Censorship | FIREWALL Cafe",
    url: "http://chinaunscripted.libsyn.com/42-hacking-chinas-censorship-firewall-cafe",
    date: "Aug 23, 2019"
  },
  {
    image: PressHKFP,
    imageHover: PressHKFPHover,
    title: "Google vs. Baidu – Artist Joyce Yu-Jean Lee examines cultural and political bias online… and in ourselves",
    url: "https://www.hongkongfp.com/2019/02/24/video-google-vs-baidu-artist-joyce-yu-jean-lee-examines-cultural-political-bias-online/",
    date: "February 24, 2019"
  },
  {
    image: PressHKFP,
    imageHover: PressHKFPHover,
    title: "Two artists ask: what does it mean to live under the shadow of the Great Firewall",
    url: "https://www.hongkongfp.com/2019/01/20/two-artists-ask-what-does-it-mean-to-live-under-the-shadow-of-the-great-firewall/",
    date: "January 20, 2019"
  },
  {
    title: "Data Justice: Joyce Yu-Jean Lee on \"The Great Firewall\"",
    url: "http://www.mediasanctuary.org/",
    date: "March 13, 2018",
    source: "Sanctuary for Independent Media, WOOC 105.3 FM radio"
  },
  {
    title: "Professor creates political commentary through art",
    url: "https://signalscv.com/",
    date: "February 20, 2018",
    source: "The Signal"
  },
  {
    title: "FIREWALL at Oslo Freedom Forum in NY",
    url: "https://monocle.com/radio/shows/the-monocle-daily/1527/",
    date: "September 19, 2017",
    source: "The Monocle Daily radio",
    note: "episode 1527 (cue 38:12)"
  },
  {
    title: "Art Attack: Ai Weiwei and other artists have increased the popularity of Chinese art, but censorship has followed",
    url: "https://www.indexoncensorship.org/",
    date: "September 20, 2016",
    source: "Index on Censorship"
  },
  {
    title: "How a New York art show about Chinese online censorship found itself censored",
    url: "https://www.washingtonpost.com/",
    date: "March 11, 2016",
    source: "The Washington Post"
  },
  {
    title: "Surf China's Censored Web at an Internet Cafe in New York",
    url: "https://hyperallergic.com/",
    date: "March 4, 2016",
    source: "Hyperallergic"
  },
  {
    title: "How an Art Exhibition in New York Led to Harassment from Chinese Authorities",
    url: "https://artfcity.com/",
    date: "Feb 26, 2016",
    source: "Art F City"
  },
  // Chinese Language Press
  {
    title: "華埠「防火牆」網吧 體驗中共網路封鎖",
    url: "https://www.ntdtv.com/",
    date: "March 7, 2016",
    source: "New Tang Dynasty (NTD) Television",
    language: "Chinese"
  },
  {
    title: "專訪李玉瑾：華裔藝術家為什麼要在紐約開防火牆網吧",
    url: "https://theinitium.com/",
    date: "March 22, 2016",
    source: "The Initium",
    language: "Chinese"
  },
  {
    title: "網路長城有多威？台裔女孩開網咖讓老美體驗",
    url: "https://www.appledaily.com.tw/",
    date: "March 4, 2016",
    source: "Apple Daily Taiwan",
    language: "Chinese"
  }
];

function ArticleGrid() {
  return (
    <section className="flex flex-col items-center px-14 pt-16 pb-16 w-full bg-gray-50 border-t border-solid border-t-neutral-300 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1080px] max-md:max-w-full">
        <div className="flex gap-8 mb-12">
          <button className="text-lg font-medium text-gray-700 hover:text-black">English</button>
          <button className="text-lg font-medium text-gray-700 hover:text-black">中文</button>
        </div>
        <div className="flex flex-wrap gap-5 justify-center items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticleGrid;