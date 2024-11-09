import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/icons/arrow_right_alt.svg";
import censoreda from "../assets/images/homepage-section_1-image_a-default.jpg";
import censoredb from "../assets/images/homepage-section_1-image_b-default.jpg";
import censoredc from "../assets/images/homepage-section_1-image_c-default.jpg";

import hovera from "../assets/images/homepage-section_1-image_a-hover.jpg";
import hoverb from "../assets/images/homepage-section_1-image_b-hover.jpg";
import hoverc from "../assets/images/homepage-section_1-image_c-hover.jpg";

function AboutSection() {
  return (
    <section className="flex overflow-hidden flex-col items-center px-32  pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex gap-10 justify-center items-center max-w-full w-[1080px]">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <div className="chinese flex flex-col w-full text-5xl font-medium leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            <h2 className="text-black border-black max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              <Link to="/about">What does internet censorship look like?</Link>
            </h2>
            <div className="text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              你知道什么时候会看到审查制度吗?
            </div>
          </div>
          <p className="mt-10 text-2xl leading-9 text-black max-md:max-w-full">
            “Just Google it.” That phrase has become almost a knee-jerk response whenever we’re stumped. But does the internet truly have all the answers?
          </p>
          <p className="mt-10 text-2xl leading-9 text-black max-md:max-w-full">
            FIREWALL Cafe is an art project launched in 2016 to shine a light on Google’s search engine monopoly and China’s suppression of free speech through Baidu, the primary Chinese search engine.
          </p>
          <Link to="/about">
            <button className="flex gap-1 justify-center items-center self-start px-4 mt-10 text-lg leading-snug text-center text-red-600 whitespace-nowrap bg-white rounded border border-red-600 border-solid min-h-[56px]">
              <span className="self-stretch my-auto">About</span>
              <img src={ArrowRight} alt="Arrow right" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </button>
          </Link>
        </div>
        <div className="flex flex-col self-stretch min-w-[240px] w-[350px]">
          <div className="flex overflow-hidden flex-col justify-center max-w-full bg-white border-0 border-solid border-neutral-600 w-[350px]">
            <img
              src={censoreda}
              onMouseOver={e => (e.currentTarget.src = hovera)}
              onMouseOut={e => (e.currentTarget.src = censoreda)}
              alt="Illustration 1"
              className="object-contain w-full bg-blend-multiply aspect-[2]"
            />
          </div>
          <div className="flex overflow-hidden flex-col justify-center mt-3.5 max-w-full border-0 border-solid bg-neutral-300 border-neutral-600 w-[350px]">
            <img
              src={censoredb}
              onMouseOver={e => (e.currentTarget.src = hoverb)}
              onMouseOut={e => (e.currentTarget.src = censoredb)}
              alt="Illustration 2"
              className="object-contain w-full aspect-[1.99]"
            />
          </div>
          <div className="flex overflow-hidden flex-col justify-end mt-3.5 max-w-full border-0 border-solid bg-zinc-400 border-neutral-600 w-[350px]">
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
