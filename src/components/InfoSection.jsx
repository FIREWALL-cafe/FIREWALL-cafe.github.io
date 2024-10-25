import React from "react";
import { Link } from "react-router-dom";

function InfoSection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-36 pb-32 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col items-center w-full max-w-[1080px] max-md:max-w-full">
        <div className="chinese flex flex-col justify-center items-start w-full text-5xl font-medium leading-tight max-md:text-4xl">
          <h2 className="text-black border-black max-md:max-w-full max-md:text-4xl">
            Peer over the wall. Decide for yourself.
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
        <p className="gap-8 self-stretch mt-10 w-full text-2xl leading-9 max-md:max-w-full">
          <Link to="/archive" className="underline">What are others seeking over the wall?</Link>
        </p>
      </div>
    </section>
  );
}

export default InfoSection;
