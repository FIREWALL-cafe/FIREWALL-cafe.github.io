import React from "react";
import { Link } from "react-router-dom";

function InfoSection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-36 pb-16 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col items-center w-full max-w-[1080px] max-md:max-w-full">
        <div className="chinese flex flex-col justify-center items-start items-center w-full text-5xl font-medium leading-tight max-md:text-4xl">
          <h2 className="text-black border-black max-md:max-w-full max-md:text-4xl">
            <Link to="/search">Peer over the wall. Decide for yourself.</Link>
          </h2>
          <div className="text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl">
            越过墙往外看。自己决定。
          </div>
        </div>
        <p className="gap-8 self-stretch mt-10 w-full text-2xl leading-9 max-md:max-w-full">
          The FIREWALL dual-search engine will automatically translate your query, and provide image results from both Google and Baidu. Compare the image results side by side, and vote on whether you believe the results are being censored, manipulated, or lost in translation!
        </p>
        <p className="gap-8 self-stretch mt-10 w-full text-2xl leading-9 max-md:max-w-full">
          The goal of this art project is to educate the public about internet freedom and censorship.
        </p>
        <div className="flex gap-1 justify-center items-center px-4 mt-10 text-lg leading-snug text-red-600 bg-white rounded border border-red-600 border-solid min-h-[56px]">
          <div className="self-stretch my-auto"><Link to="/search">Start Searching</Link></div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f85ee68f32688d30cdee38a11d3127d6fae6f9fafeb8b4877920d03ca15e202e?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
