import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
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
import PressMonocle from '../assets/images/press/press-monocle-default.jpg';
import PressMonocleHover from '../assets/images/press/press-monocle-hover.jpg';
import PressSanctuary from '../assets/images/press/press-the-sanctuary-default.jpg';
import PressSanctuaryHover from '../assets/images/press/press-the-sanctuary-hover.jpg';
import PressTheSignal from '../assets/images/press/press-the-signal-default.jpg';
import PressTheSignalHover from '../assets/images/press/press-the-signal-hover.jpg';
import PressIndex from '../assets/images/press/press-index-default.jpg';
import PressIndexHover from '../assets/images/press/press-index-hover.jpg';
import PressWashingtonPost from '../assets/images/press/press-twp-default.jpg';
import PressWashingtonPostHover from '../assets/images/press/press-twp-hover.jpg';
import PressHyperallergic from '../assets/images/press/press-hyperallergic-default.jpg';
import PressHyperallergicHover from '../assets/images/press/press-hyperallergic-hover.jpg';
import PressArtF from '../assets/images/press/press-artfcity-default.jpg';
import PressArtFHover from '../assets/images/press/press-artfcity-hover.jpg';
import PressAmny from '../assets/images/press/press-amny-default.jpg';
import PressAmnyHover from '../assets/images/press/press-amny-hover.jpg';
import PressCdt from '../assets/images/press/press-CDT-default.jpg';
import PressCdtHover from '../assets/images/press/press-CDT-hover.jpg';
import PressEweek from '../assets/images/press/press-eweek-default.jpg';
import PressEweekHover from '../assets/images/press/press-eweek-hover.jpg';
import PressPaper from '../assets/images/press/press-paper-default.jpg';
import PressPaperHover from '../assets/images/press/press-paper-hover.jpg';
import PressNewtang from '../assets/images/press/press-newtang-default.jpg';
import PressNewtangHover from '../assets/images/press/press-newtang-hover.jpg';
import PressInitium from '../assets/images/press/press-initiummedia-default.jpg';
import PressInitiumHover from '../assets/images/press/press-initiummedia-hover.jpg';
import PressApple from '../assets/images/press/press-apple-default.jpg';
import PressAppleHover from '../assets/images/press/press-apple-hover.jpg';
import PressLiteNews from '../assets/images/press/press-litenews-default.jpg';
import PressLiteNewsHover from '../assets/images/press/press-litenews-hover.jpg';
import PressBotanwang from '../assets/images/press/press-botanwang-default.jpg';
import PressBotanwangHover from '../assets/images/press/press-botanwang-hover.jpg';


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
    title: "Google vs. Baidu – Artist Joyce Yu-Jean Lee examines cultural and political bias online…",
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
    image: PressSanctuary,
    imageHover: PressSanctuaryHover,
    title: "Data Justice: Joyce Yu-Jean Lee on \"The Great Firewall\"",
    url: "https://www.mediasanctuary.org/podcasts/data-justice-joyce-yu-jean-lee-on-the-great-firewall/",
    date: "March 13, 2018",
    source: "Sanctuary for Independent Media, WOOC 105.3 FM radio"
  },
  {
    image: PressTheSignal,
    imageHover: PressTheSignalHover,
    title: "Professor creates political commentary through art",
    url: "http://www.tcnjsignal.net/2018/02/20/professor-creates-political-commentary-through-art/",
    date: "February 20, 2018",
    source: "The Signal"
  },
  {
    image: PressMonocle,
    imageHover: PressMonocleHover,
    title: "FIREWALL at Oslo Freedom Forum in NY",
    url: "https://monocle.com/radio/shows/the-monocle-daily/1527/",
    date: "September 19, 2017",
    source: "The Monocle Daily radio",
    note: "episode 1527 (cue 38:12)"
  },
  {
    image: PressIndex,
    imageHover: PressIndexHover,
    title: "Art Attack: Ai Weiwei and other artists have increased the popularity of Chinese art, but censorship has followed",
    url: "https://journals.sagepub.com/doi/full/10.1177/0306422016670329",
    date: "September 20, 2016",
    source: "Index on Censorship"
  },
  {
    image: PressWashingtonPost,
    imageHover: PressWashingtonPostHover,
    title: "How a New York art show about Chinese online censorship found itself censored",
    url: "https://www.washingtonpost.com/news/worldviews/wp/2016/03/11/how-a-new-york-art-show-about-chinese-online-censorship-found-itself-censored/",
    date: "March 11, 2016",
    source: "The Washington Post"
  },
  {
    image: PressHyperallergic,
    imageHover: PressHyperallergicHover,
    title: "Surf China's Censored Web at an Internet Cafe in New York",
    url: "http://hyperallergic.com/280849/surf-chinas-censored-web-at-an-internet-cafe-in-new-york/",
    date: "March 4, 2016",
    source: "Hyperallergic"
  },
  {
    image: PressArtF,
    imageHover: PressArtFHover,
    title: "How an Art Exhibition in New York Led to Harassment from Chinese Authorities",
    url: "http://artfcity.com/2016/02/26/how-an-art-exhibition-in-new-york-led-to-harassment-from-chinese-authorities/",
    date: "Feb 26, 2016",
    source: "Art F City"
  },
  {
    image: PressAmny,
    imageHover: PressAmnyHover,
    title: "When Chinese state censorship reached the L.E.S.",
    url: "http://thevillager.com/2016/03/31/when-chinese-state-censorship-reached-the-l-e-s/",
    date: "March 31, 2016",
    source: "The Villager"
  },
  // {
  //   title: "Exercycles and Sweethearts: Firewall Internet Café",
  //   url: "http://www.artcritical.com/2016/03/03/david-brody-on-firewall-internat-cafe/",
  //   date: "March 3, 2016",
  //   source: "Art Critical"
  // },
  {
    image: PressCdt,
    imageHover: PressCdtHover,
    title: "華埠「防火牆」網吧 體驗中共網路封鎖",
    url: "http://chinadigitaltimes.net/2016/03/chinas-overseas-critics-pressure/",
    date: "March 11, 2016",
    source: "China's Digital Times",
    language: "Chinese"
  },
  {
    image: PressEweek,
    imageHover: PressEweekHover,
    title: "How China Censors Mass Media in Your World",
    url: "http://www.eweek.com/cloud/how-china-censors-mass-media-in-your-world.html",
    date: "March 11, 2016",
    source: "eWeek",
  },
  {
    image: PressPaper,
    imageHover: PressPaperHover,
    title: "You can Surf China’s Censored Web at this Lower East Side Internet Cafe",
    url: "http://www.papermag.com/manhattan-downtown-china-censored-web-1646138164.html",
    date: "March 6, 2016",
    source: "Paper Magazine",
    language: "English"
  },
  // Chinese Language Press
  {
    image: PressNewtang,
    imageHover: PressNewtangHover,
    title: "華埠「防火牆」網吧 體驗中共網路封鎖",
    url: "http://www.ntdtv.com/xtr/b5/2016/03/08/a1256569.html",
    date: "March 7, 2016",
    source: "New Tang Dynasty (NTD) Television",
    language: "Chinese"
  },
  {
    image: PressInitium,
    imageHover: PressInitiumHover,
    title: "專訪李玉瑾：華裔藝術家為什麼要在紐約開防火牆網吧",
    url: "https://theinitium.com/article/20160322-culture-feature-FirewallCafe/",
    date: "March 22, 2016",
    source: "The Initium",
    language: "Chinese"
  },
  {
    image: PressApple,
    imageHover: PressAppleHover,
    title: "網路長城有多威？台裔女孩開網咖讓老美體驗",
    url: "http://www.appledaily.com.tw/realtimenews/article/international/20160304/808253/applesearch/網路長城有多威？台裔女孩開網咖讓老美體驗",
    date: "March 4, 2016",
    source: "Apple Daily Taiwan",
    language: "Chinese"
  },
  {
    image: PressLiteNews,
    imageHover: PressLiteNewsHover,
    title: "紐約一特色網咖 體驗內地網絡審查",
    url: "http://litenewshk.blogspot.com/2016/03/blog-post_88.html",
    date: "March 3, 2016",
    source: "Lite News(Hong Kong)",
    language: "Chinese"
  },
  {
    image: PressBotanwang,
    imageHover: PressBotanwangHover,
    title: "纽约开了一家体验中美信息审查的网络咖啡馆",
    url: "https://botanwang.com/articles/201603/纽约开了一家体验中美信息审查的网络咖啡馆.html",
    date: "March 4, 2016",
    source: "Botanwang.com",
    language: "Chinese"
  }
];

function ArticleGrid() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredArticles = articles.filter(article => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'english') return !article.language || article.language === 'English';
    if (activeFilter === 'chinese') return article.language === 'Chinese';
    return true;
  });

  return (
    <section className="flex flex-col items-center px-14 pt-16 pb-16 w-full bg-gray-50 border-t border-solid border-t-neutral-300 max-md:px-5 max-md:pb-24 is-full-width-content">
      <div className="flex flex-col w-full max-w-[1080px]">
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 border border-solid transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-red-600 text-white border-red-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
            }`}
          >
            All articles
          </button>
          <button
            onClick={() => setActiveFilter('english')}
            className={`px-6 py-2 border border-solid transition-all duration-300 ${
              activeFilter === 'english'
                ? 'bg-red-600 text-white border-red-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setActiveFilter('chinese')}
            className={`px-6 py-2 border border-solid transition-all duration-300 ${
              activeFilter === 'chinese'
                ? 'bg-red-600 text-white border-red-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
            }`}
          >
            中文
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-16 w-full max-md:mt-10 justify-items-center">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticleGrid;