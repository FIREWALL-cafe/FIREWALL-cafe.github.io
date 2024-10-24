import React from 'react';
import Timeline from './Timeline';
import ImageGallery from './ImageGallery';
import FeatureCards from './FeatureCards';

const features = [
    {
      title: "Archive",
      chineseTitle: { text: "档案", color: "text-black border-black" },
      description: "Explore what other users have searched and vote on results.",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/43fd09d2605185335d23773f2561fcb2ded3adbfd5e94e9cc41d1b5c6f67684e?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
      bgColor: "bg-red-600",
      textColor: "text-white",
      borderColor: "border-red-600"
    },
    {
      title: "Expert commentary",
      chineseTitle: { text: "专家点评", color: "text-red-600 border-red-600" },
      description: "Read and listen to in-depth commentary from experts in the east and west.",
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/93109040a8c5bb26e9936f7a12c249e8b5ba72d7f40fb61cdb12de89b360914d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
      bgColor: "bg-white",
      textColor: "text-black",
      borderColor: "border-red-600"
    }
];

function WhyDidThisHappen() {
  return (
    <main>
      <section className="flex overflow-hidden flex-col justify-center py-32 w-full text-6xl font-medium leading-tight text-center bg-white tracking-[2.16px] max-md:py-24 max-md:max-w-full max-md:text-4xl">
        <div className="flex flex-col justify-center w-full max-md:max-w-full max-md:text-4xl">
          <div className="flex flex-wrap gap-5 items-center self-center text-black max-md:max-w-full max-md:text-4xl">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0be0fb2852055cbdb9af9b2d3ae143bfa6a88106fa112db3737af0c3efe7e54?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" alt="" />
            <h1 className="self-stretch my-auto border-black max-md:max-w-full max-md:text-4xl">
              Why did all this happen?
            </h1>
          </div>
          <div className="chinese mt-2.5 text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl">
            那么为什么会发生这一切呢?{" "}
          </div>
        </div>
      </section>
      
      <section className="flex flex-col w-full max-md:max-w-full">
        <div className="flex justify-center items-start px-44 pt-12 w-full bg-white min-h-[340px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <div className="pb-32 min-w-[240px] w-[928px] max-md:pb-24">
            <div className="flex max-md:flex-col">
              <Timeline />
            </div>
          </div>
        </div>
      </section>
      
      <FeatureCards features={features} />
    </main>
  );
}

export default WhyDidThisHappen;