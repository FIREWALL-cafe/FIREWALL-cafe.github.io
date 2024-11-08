import React from 'react';
import Facebook from "../assets/icons/Facebook_Logo.png";
import Youtube from "../assets/icons/youtube_social_circle_red.png";
import Instagram from "../assets/icons/Instagram_Logo.png";

const SocialFollow = () => {
  return (
    <section className="flex flex-col flex-1 shrink p-20 bg-rose-100 basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <h2 className="flex flex-col w-full text-5xl font-medium leading-tight whitespace-nowrap max-md:max-w-full max-md:text-4xl">
        <span className="text-black max-md:max-w-full max-md:text-4xl">Follow</span>
        <span className="chinese text-red-600 max-md:max-w-full max-md:text-4xl">跟随</span>
      </h2>
      <div className="flex gap-2.5 items-center mt-4 w-full max-md:max-w-full">
        <div className="flex gap-2 justify-center items-center self-stretch my-auto">
          <div className="">
          <a href="http://instagram.com/firewallcafe" aria-label="Follow us on Instagram">
            <img src={Instagram} className="object-contain w-full aspect-square w-[48px]" alt="" />
          </a>
          </div>
          <div className="">
          <a href="https://www.facebook.com/firewallcafe" aria-label="Follow us on Facebook">
            <img src={Facebook} className="object-contain w-full aspect-square w-[48px]" alt="" />
            </a>
          </div>
          <div className="">
            <a href="https://www.youtube.com/channel/UCMTAKSSmI9iKD7a3GB1JIrA" aria-label="Follow us on Youtube">
              <img src={Youtube} className="object-contain w-full aspect-square w-[48px]" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFollow;