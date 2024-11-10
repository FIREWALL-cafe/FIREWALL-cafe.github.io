import React from 'react';

import Press from '../assets/icons/press.png';

function HeroPress() {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-16 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-center w-full max-w-[1080px] max-md:max-w-full">
        <div className="chinese flex flex-col w-full text-7xl font-medium leading-tight tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
          <div className="flex flex-wrap gap-5 items-center text-black max-md:max-w-full max-md:text-4xl">
            <img src={Press} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" />
            <div className="self-stretch my-auto max-md:text-4xl">In the press</div>
          </div>
          <div className="mt-2 text-red-600 max-md:max-w-full max-md:text-4xl">在新闻界</div>
        </div>
        <div className="mt-5 text-xl leading-8 text-black max-md:max-w-full">
          Since its inception, FIREWALL Cafe has garnered media attention, including coverage by major outlets like the BBC and The Washington Post.
        </div>
      </div>
    </section>
  );
}

export default HeroPress;