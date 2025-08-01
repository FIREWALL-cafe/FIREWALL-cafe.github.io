import React from 'react';
import Facebook from "../assets/icons/Facebook_Logo.png";
import Youtube from "../assets/icons/youtube_social_circle_red.png";
import Instagram from "../assets/icons/Instagram_Logo.png";

const SocialFollow = () => {
  return (
    <section className="flex flex-col w-full md:w-1/2 p-8 md:p-20 bg-rose-100 justify-between border-l border-red-600">
      <div className="flex flex-col">
        <h2 className="flex flex-col font-medium leading-tight whitespace-nowrap max-md:font-display-02 font-display-04 font-bitmap-song">
          <span className="text-black max-md:text-4xl">Follow</span>
          <span className="text-red-500 max-md:text-4xl">跟踪</span>
        </h2>
      </div>
      <div className="flex justify-center md:justify-end mt-8 md:mt-4">
        <div className="flex flex-row md:flex-col gap-4 md:gap-6 items-center md:items-end">
          <a href="http://instagram.com/firewallcafe" aria-label="Follow us on Instagram">
            <img src={Instagram} className="object-contain aspect-square w-[48px] hover:opacity-80 transition-opacity" alt="" />
          </a>
          <a href="https://www.facebook.com/firewallcafe" aria-label="Follow us on Facebook">
            <img src={Facebook} className="object-contain aspect-square w-[48px] hover:opacity-80 transition-opacity" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCMTAKSSmI9iKD7a3GB1JIrA" aria-label="Follow us on Youtube">
            <img src={Youtube} className="object-contain aspect-square w-[48px] hover:opacity-80 transition-opacity" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialFollow;