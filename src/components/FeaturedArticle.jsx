import React from 'react';

import ImagesMode from '../assets/icons/imagesmode.svg';
import ArrowRight from "../assets/icons/arrow_right_alt.svg";

function FeaturedArticle() {
  return (
    <section className="flex overflow-hidden justify-center items-start pb-32 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 max-w-[1080px] min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[516px] max-md:max-w-full">
            <div className="text-zinc-400">Featured</div>
            <div className="chinese flex flex-col mt-10 w-full text-5xl font-medium max-md:max-w-full max-md:text-4xl">
              <h2 className="text-black leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Article title: Lorem ipsum dolor sit amet
              </h2>
              <div className="leading-tight text-red-600 max-md:max-w-full max-md:text-4xl">
                图表标题
              </div>
            </div>
            <p className="mt-10 leading-9 text-black max-md:max-w-full">
              Article preview line - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis viverra mauris. Cras pretium blandit arcu ut accumsan.
            </p>
            <a href="#" className="flex gap-1 justify-center items-center self-start px-4 mt-10 text-xl text-center text-red-600 bg-white rounded border border-red-600 border-solid min-h-[56px]">
              <span className="self-stretch my-auto">Read article</span>
              <img src={ArrowRight} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink justify-center items-center basis-0 min-w-[240px] max-md:max-w-full">
          <img src={ImagesMode} alt="Featured article illustration" className="object-contain max-w-full aspect-[1.47] w-[432px]" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticle;