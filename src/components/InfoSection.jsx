import React from "react";
import { Link } from "react-router-dom";

function InfoSection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-36 pb-32 w-full text-center max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col items-center w-full max-w-[1080px] max-md:max-w-full">
        <div className="chinese flex flex-col justify-center items-start w-full text-5xl font-medium leading-tight max-md:text-4xl">
          <h2 className="text-black border-black max-md:max-w-full max-md:text-4xl">
            Peer over the wall. Decide for yourself.
          </h2>
          <div className="text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl">
            越过墙往外看。自己决定。
          </div>
        </div>
        <p className="gap-8 self-stretch mt-10 w-full text-2xl leading-9 text-black max-md:max-w-full">
          Firewall Cafe was created in 2015 to shine a light on the CCP's
          suppression of free speech, and educate others on authoritarian
          control on public discourse.
          <br />
          <br />
          Our search bar will automatically translate your query, and provide
          image results from the West's Google, and China's government
          controlled search engine, Baidu. Compare the results side by side, and
          vote on if you believe the results are being censored or not, or lost
          in translation.
        </p>
        Continuing from where we left off:
        <Link to="/search">
          <button className="flex gap-1 justify-center items-center px-4 mt-10 text-lg leading-snug text-red-600 bg-white rounded border border-red-600 border-solid min-h-[56px]">
            <span className="self-stretch my-auto">Start Searching</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a2c2850258b839081a5dd761ed3aeb3ee3426ccf77608e60a7e3d81c29811b2?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default InfoSection;
