import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from "../assets/icons/arrow_right_alt.svg";

function CallToAction() {
  return (
    <section className="flex flex-col items-center px-16 py-16 w-full text-xl bg-rose-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="chinese flex flex-col items-center max-w-full">
        <div className="flex flex-wrap gap-5 items-center max-md:max-w-full">
          <h2 className="flex flex-col items-center mt-6 text-5xl font-medium leading-none max-md:max-w-full max-md:text-4xl">
            Become a Firewall Cafe supporter
          </h2>
        </div>
        <div className="mt-2 text-7xl font-medium leading-tight text-red-600 tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
          成为赞助商
        </div>
      </div>
      <p className="mt-6 leading-8 text-center text-black w-[590px] max-md:max-w-full">
        Learn how you can support Firewall Cafe and fight for the freedom of information in China and worldwide.
      </p>
      <Link to="/support" className="flex gap-1 justify-center items-center px-4 mt-6 text-center text-black rounded border border-black border-solid min-h-[56px]">
        <span className="self-stretch my-auto">Learn more</span>
        <img src={ArrowRight} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      </Link>
    </section>
  );
}

export default CallToAction;