import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/icons/ArrowRight";

function InfoSection() {
  return (
    <section className="w-full flex flex-col py-16">
      <div className="flex flex-col items-center">
        <div className="chinese text-center">
          <h2 className="font-display-04 font-medium leading-tight mb-2">
            <Link to="/search" className="hover:text-gray-800">Peer over the wall. Decide for yourself.</Link>
          </h2>
          <div className="font-display-04 font-medium leading-tight text-red-600">
            越过墙往外看。自己决定。
          </div>
        </div>
        <div className="mt-8 space-y-6 font-body-01">
          <p>
            The FIREWALL dual-search engine will automatically translate your query, and provide image results from both Google and Baidu. Compare the image results side by side, and vote on whether you believe the results are being censored, manipulated, or lost in translation!
          </p>
          <p>
            The goal of this art project is to educate the public about internet freedom and censorship.
          </p>
        </div>
        <Link 
          to="/search"
          className="mt-8 inline-flex items-center px-6 py-3 text-lg text-red-600 border border-red-600 rounded hover:bg-red-50 transition-colors"
        >
          Start Searching
          <ArrowRight 
            fill="#DC2626" 
            className="ml-2 w-6 h-6" 
          />
        </Link>
      </div>
    </section>
  );
}

export default InfoSection;
