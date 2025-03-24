import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/icons/ArrowRight";
import censoreda from "../assets/images/homepage-section_1-image_a-default.jpg";
import censoredb from "../assets/images/homepage-section_1-image_b-default.jpg";
import censoredc from "../assets/images/homepage-section_1-image_c-default.jpg";

import hovera from "../assets/images/homepage-section_1-image_a-hover.jpg";
import hoverb from "../assets/images/homepage-section_1-image_b-hover.jpg";
import hoverc from "../assets/images/homepage-section_1-image_c-hover.jpg";

function AboutSection() {
  return (
    <section className="flex flex-col justify-center items-center pb-16 w-full max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-center items-start max-w-[1080px]">
        <div className="flex flex-col w-[55%] min-w-[240px] order-2 md:order-1">
          <div className="chinese flex flex-col w-full text-3xl md:text-4xl lg:text-[48px] font-medium leading-tight 
            lg:leading-[58px]">
            <h2 className="text-black border-black">
              <Link to="/about">What does internet censorship look like?</Link>
            </h2>
            <div className="text-red-600 border-red-600">
              你知道什么时候会看到审查制度吗?
            </div>
          </div>
          <p className="mt-6 md:mt-10 text-xl md:text-2xl leading-normal md:leading-9 text-black">
            "Just Google it." That phrase has become almost a knee-jerk response whenever we're stumped. But does the internet truly have all the answers?
          </p>
          <p className="mt-6 md:mt-10 text-xl md:text-2xl leading-normal md:leading-9 text-black">
            FIREWALL Cafe is an art project launched in 2016 to shine a light on Google's search engine monopoly and China's suppression of free speech through Baidu, the primary Chinese search engine.
          </p>
          <Link to="/about">
            <button className="flex gap-1 justify-center items-center self-start px-4 mt-10 text-lg leading-snug text-center text-red-600 whitespace-nowrap bg-white rounded border border-red-600 border-solid min-h-[56px]">
              <span className="self-stretch my-auto">About</span>
              <ArrowRight 
                fill="#DC2626" 
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
              />
            </button>
          </Link>
        </div>
        <div className="flex flex-col w-[40%] min-w-[240px] order-1 md:order-2 pl-4">
          <div className="flex overflow-hidden flex-col justify-center w-full bg-white">
            <img
              src={censoreda}
              onMouseOver={e => (e.currentTarget.src = hovera)}
              onMouseOut={e => (e.currentTarget.src = censoreda)}
              alt="Illustration 1"
              className="object-contain w-full bg-blend-multiply aspect-[2]"
            />
          </div>
          <div className="flex overflow-hidden flex-col justify-center mt-3.5 w-full bg-neutral-300">
            <img
              src={censoredb}
              onMouseOver={e => (e.currentTarget.src = hoverb)}
              onMouseOut={e => (e.currentTarget.src = censoredb)}
              alt="Illustration 2"
              className="object-contain w-full aspect-[1.99]"
            />
          </div>
          <div className="flex overflow-hidden flex-col justify-end mt-3.5 w-full bg-zinc-400">
            <img
              src={censoredc}
              onMouseOver={e => (e.currentTarget.src = hoverc)}
              onMouseOut={e => (e.currentTarget.src = censoredc)}
              alt="Illustration 3"
              className="object-contain w-full aspect-[2]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
