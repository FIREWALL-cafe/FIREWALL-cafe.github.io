import React from 'react';

import PressPost from '../assets/images/press-washington_post.jpg';
import ArrowRight from "../assets/icons/arrow_right_alt.svg";

function LanYu() {
  return (
    <section className="flex overflow-hidden justify-center items-start pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 max-w-[1080px] min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[516px] max-md:max-w-full">
            <div className="text-zinc-400">Featured</div>
            <div className="chinese flex flex-col mt-10 w-full text-5xl font-medium max-md:max-w-full max-md:text-4xl">
              <h2 className="text-black leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                How a New York art show about Chinese online censorship found itself censored
              </h2>
              <div className="leading-tight text-red-600 max-md:max-w-full max-md:text-4xl">
                图表标题
              </div>
            </div>
            <p className="mt-10 leading-9 text-black max-md:max-w-full">
              On the eve of the event, one of the speakers, a visiting Chinese feminist who had done significant work on gender law issues, suddenly started receiving threats.
            </p>
            <a href="https://www.washingtonpost.com/news/worldviews/wp/2016/03/11/how-a-new-york-art-show-about-chinese-online-censorship-found-itself-censored/" target="_blank" className="flex gap-1 justify-center items-center self-start px-4 mt-10 text-xl text-center text-red-600 bg-white rounded border border-red-600 border-solid min-h-[56px]">
              <span className="self-stretch my-auto">Read article</span>
              <img src={ArrowRight} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink justify-center items-center basis-0 min-w-[240px] max-md:max-w-full">
          <img src={PressPost} alt="Featured article illustration" className="object-contain max-w-full aspect-[1.47] w-[432px]" />
        </div>
      </div>
    </section>
  );
}

export default LanYu;