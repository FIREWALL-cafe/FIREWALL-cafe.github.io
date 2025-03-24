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
    <section className="w-full flex flex-col py-16">
      <div className="flex flex-col md:flex-row gap-10 justify-between">
        <div className="w-full md:w-[55%] order-2 md:order-1">
          <div className="chinese">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-2">
              <Link to="/about" className="hover:text-gray-800">What does internet censorship look like?</Link>
            </h2>
            <div className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-red-600">
              你知道什么时候会看到审查制度吗?
            </div>
          </div>
          <div className="mt-8 space-y-6 text-lg md:text-xl lg:text-2xl">
            <p>
              "Just Google it." That phrase has become almost a knee-jerk response whenever we're stumped. But does the internet truly have all the answers?
            </p>
            <p>
              FIREWALL Cafe is an art project launched in 2016 to shine a light on Google's search engine monopoly and China's suppression of free speech through Baidu, the primary Chinese search engine.
            </p>
          </div>
          <Link 
            to="/about"
            className="mt-8 inline-flex items-center px-6 py-3 text-lg text-red-600 border border-red-600 rounded hover:bg-red-50 transition-colors"
          >
            About
            <ArrowRight 
              fill="#DC2626" 
              className="ml-2 w-6 h-6" 
            />
          </Link>
        </div>
        
        <div className="w-full md:w-[40%] space-y-4 order-1 md:order-2">
          <div className="w-full overflow-hidden">
            <img
              src={censoreda}
              onMouseOver={e => (e.currentTarget.src = hovera)}
              onMouseOut={e => (e.currentTarget.src = censoreda)}
              alt="Illustration 1"
              className="w-full object-cover aspect-[2]"
            />
          </div>
          <div className="w-full overflow-hidden">
            <img
              src={censoredb}
              onMouseOver={e => (e.currentTarget.src = hoverb)}
              onMouseOut={e => (e.currentTarget.src = censoredb)}
              alt="Illustration 2"
              className="w-full object-cover aspect-[2]"
            />
          </div>
          <div className="w-full overflow-hidden">
            <img
              src={censoredc}
              onMouseOver={e => (e.currentTarget.src = hoverc)}
              onMouseOut={e => (e.currentTarget.src = censoredc)}
              alt="Illustration 3"
              className="w-full object-cover aspect-[2]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
