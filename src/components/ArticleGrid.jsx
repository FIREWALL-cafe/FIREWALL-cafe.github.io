import React from 'react';
import ArticleCard from './ArticleCard';

const articles = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/812717510f806df102ef901e8ee73f8514b49c0886eeec349f4443d519875be6?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
    title: "Smart Bets: REDIRECT",
    date: "Jan 01, 2024"
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fd6818ae4cd1d5a88ac7b287aa250e37a36df74e8417cf42de393aac630b12b?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
    title: "Slow Connection: TSA GVL presents REDIRECT in Asheville",
    date: "Jan 01, 2024"
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2096308054d06e519485b233486c0efbec4f43408a25472c61971ea4028318fd?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
    title: "The Real Story: Russia's New Internet Firewall (cue 35:06)",
    date: "Jan 01, 2024",
    tag: { text: "Podcast", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fefdc08b53e322b07458f1bba645a2606cefcd921108da1f79622329ed37e77?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" }
  },
  {
    id: 4,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d10e7b2f8dcfd19522cb029c496b96307b24039c7fa3f7062e8b98a4a107efcb?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
    title: "#42 Hacking China's Censorship | FIREWALL Cafe",
    date: "Jan 01, 2024",
    tag: { text: "Special guest", color: "text-sky-400" }
  },
  {
    id: 5,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/05a69a3b4f643e4856be945aa3ccab508d332ad004a8e88e05ec5daabf0d7453?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
    title: "Google vs. Baidu – Artist Joyce Yu-Jean Lee examines cultural and political bias online… and in ourselves",
    date: "Jan 01, 2024"
  },
  {
    id: 6,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/20ef1e051a4214755bae2bc838e6925e6ac7892bdc24a1f2a5026f566b5f8c94?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
    title: "Two artists ask: what does it mean to live under the shadow of the Great Firewall",
    date: "Jan 01, 2024"
  }
];

function ArticleGrid() {
  return (
    <section className="flex flex-col items-center px-14 pt-16 pb-32 w-full bg-gray-50 border-t border-solid border-t-neutral-300 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1080px] max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-center self-center text-xl text-center text-gray-800 max-md:max-w-full">
          <button className="gap-1 self-stretch px-3 py-px my-auto text-black bg-gray-100 rounded border border-black border-solid min-h-[32px]">
            All articles
          </button>
          <button className="gap-1 self-stretch px-3 py-px my-auto rounded border border-solid border-neutral-300 min-h-[32px]">
            Category 1
          </button>
          <button className="gap-1 self-stretch px-3 py-px my-auto rounded border border-solid border-neutral-300 min-h-[32px]">
            Category 2
          </button>
          <button className="gap-1 self-stretch px-3 py-px my-auto rounded border border-solid border-neutral-300 min-h-[32px]">
            Category 3
          </button>
        </div>
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