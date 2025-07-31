import React from 'react';
import FeaturedEditorial from './FeaturedEditorial';
import NewsletterSection from './NewsletterSection';

import Commentary from '../assets/icons/expert-commentary.png';

function Experts() {
  const image = 'subscribeA';

  return (
    <main className="flex overflow-hidden flex-col bg-white min-h-[200px]">
      <section className="flex flex-col justify-center items-center py-16 w-full max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full">
            <div className="font-bitmap-song items-center gap-2">
              <h1 className="flex flex-row items-center gap-2 my-auto font-display-04">
                <img src={Commentary} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" />
                Expert commentary
              </h1>
              <div className="text-red-600 font-display-04 text-center">
                专家点评
              </div>
          </div>
          <p className="mt-5 font-body-01 leading-9 max-md:max-w-full">
            We've invited journalists, scholars, and social activists from around the world to provide insights on local news censorship, internet censorship practices, and related legislation, exploring how these issues shape cultural phenomena worldwide.
          </p>
        </div>
      </section>
      <FeaturedEditorial />
      <NewsletterSection image={image} />
    </main>
  );
}

export default Experts;