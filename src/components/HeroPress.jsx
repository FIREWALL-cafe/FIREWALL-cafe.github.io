import React from 'react';

import Press from '../assets/icons/press.png';

function HeroPress() {
  return (
    <section className="flex flex-col justify-center items-center pb-16 w-full max-md:py-24 max-md:max-w-full is-large-width-content">
      <div className="flex flex-col items-center w-full">
        <div className="chinese flex flex-col w-full font-display-03 md:font-display-04 font-bitmap-song leading-tight tracking-[2.16px]">
          <h2 className="flex flex-wrap gap-5 items-center text-black">
            <img src={Press} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" />
            <div className="self-stretch my-auto">In the press</div>
          </h2>
          <div className="mt-2 text-red-600 ">在新闻界</div>
        </div>
        <div className="mt-5 font-body-01 leading-8 text-black max-md:max-w-full">
          Since its inception, FIREWALL Cafe has garnered media attention, including coverage by major outlets like the BBC and The Washington Post.
        </div>
      </div>
    </section>
  );
}

export default HeroPress;