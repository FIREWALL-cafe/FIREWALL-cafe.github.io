import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from "../assets/icons/arrow_right_alt.svg";

function CallToAction() {
  return (
    <section className="flex flex-col items-center w-full bg-rose-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="chinese text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
            Become a FIREWALL Cafe supporter
          </h2>
          <div className="mt-2 text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight text-red-600 tracking-[2.16px]">
            成为赞助商
          </div>
        </div>
        <p className="mt-6 text-lg lg:text-xl text-center max-w-2xl">
          Learn how you can support FIREWALL Cafe and fight for the freedom of information in China and worldwide.
        </p>
        <Link 
          to="/support" 
          className="flex gap-2 items-center px-6 py-3 mt-6 text-center text-black rounded border border-black border-solid hover:bg-black hover:text-white transition-colors"
        >
          <span>Learn more</span>
          <img src={ArrowRight} alt="" className="w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;