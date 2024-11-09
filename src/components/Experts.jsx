import React from 'react';
import FeaturedEditorial from './FeaturedEditorial';
import Newsletter from './Newsletter';

import Commentary from '../assets/icons/expert-commentary.png';

function Experts() {
  return (
    <main className="flex overflow-hidden flex-col bg-white min-h-[200px]">
      <section className="flex flex-col justify-center items-center px-14 py-16 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[1080px]">
          <div className="chinese flex flex-col max-w-full text-6xl font-medium text-center leading-tight tracking-[2.16px] w-[664px] max-md:text-4xl">
            <div className="flex flex-wrap gap-5 items-center self-center text-black max-md:max-w-full max-md:text-4xl">
              <img src={Commentary} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" />
              <h1 className="self-stretch my-auto max-md:max-w-full max-md:text-4xl">
                Expert editorial
              </h1>
            </div>
            <div className="text-red-600 max-md:max-w-full max-md:text-4xl">
              专家点评
            </div>
          </div>
          <p className="mt-5 text-2xl leading-9 text-neutral-600 max-md:max-w-full">
            We’ve invited journalists, scholars, and social activists from around the world to provide insights on local news censorship, internet censorship practices, and related legislation, exploring how these issues shape cultural phenomena worldwide.
          </p>
        </div>
      </section>
      <FeaturedEditorial />
    </main>
  );
}

export default Experts;