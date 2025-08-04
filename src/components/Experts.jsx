import React from 'react';
import FeaturedEditorial from './FeaturedEditorial';
import ExpertArticles from './ExpertArticles';
import NewsletterSection from './NewsletterSection';

import Commentary from '../assets/icons/expert-commentary.png';

function Experts() {
  const image = 'subscribeC';
  const newsletterTitle = 'Want to be notified when we release new articles?';

  return (
    <>
      <main className="flex overflow-hidden flex-col bg-white min-h-[200px]">
        <section className="flex flex-col justify-center items-center py-32 w-full max-md:py-24 is-medium-width-content">
          <div className="flex flex-col items-center w-full max-w-[1080px]">
              <div className="font-bitmap-song items-center gap-2">
                <h1 className="flex flex-row items-center gap-5 my-auto font-display-04 md:font-display-05">
                  <img src={Commentary} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" />
                  Expert commentary
                </h1>
                <div className="text-red-600 font-display-04 md:font-display-05 text-center mt-2">
                  专家点评
                </div>
            </div>
            <p className="mt-5 text-xl leading-9 text-center max-md:max-w-full">
              We've invited journalists, scholars, and social activists from around the world to provide insights on local news censorship, internet censorship practices, and related legislation, exploring how these issues shape cultural phenomena worldwide.
            </p>
          </div>
        </section>
        <FeaturedEditorial />
        <ExpertArticles />
      </main>
      <NewsletterSection image={image} title={newsletterTitle} />
    </>
  );
}

export default Experts;