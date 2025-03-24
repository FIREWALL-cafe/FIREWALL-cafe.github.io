import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/icons/ArrowRight";

function InfoSection() {
  return (
    <section className="flex flex-col justify-center items-center pb-16 w-full max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-[1080px] w-full">
        <div className="chinese flex flex-col justify-center items-center w-full text-5xl font-medium leading-tight max-md:text-4xl">
          <h2 className="text-black border-black max-md:max-w-full">
            <Link to="/search">Peer over the wall. Decide for yourself.</Link>
          </h2>
          <div className="text-red-600 border-red-600 max-md:max-w-full">
            越过墙往外看。自己决定。
          </div>
        </div>
        <p className="mt-10 w-full text-2xl leading-9">
          The FIREWALL dual-search engine will automatically translate your query, and provide image results from both Google and Baidu. Compare the image results side by side, and vote on whether you believe the results are being censored, manipulated, or lost in translation!
        </p>
        <p className="mt-10 w-full text-2xl leading-9">
          The goal of this art project is to educate the public about internet freedom and censorship.
        </p>
        <Link to="/search" className="mt-10">
          <button className="flex gap-1 justify-center items-center px-4 text-lg leading-snug text-red-600 bg-white rounded border border-red-600 border-solid min-h-[56px]">
            <span>Start Searching</span>
            <ArrowRight 
              fill="#DC2626" 
              className="object-contain shrink-0 w-6 aspect-square" 
            />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default InfoSection;
