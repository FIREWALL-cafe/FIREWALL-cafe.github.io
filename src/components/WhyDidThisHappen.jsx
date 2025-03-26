import React from 'react';
import Timeline from './Timeline';
import FeatureCards from './FeatureCards';
import TimelineIcon from '../assets/icons/Timeline.png'
import Commentary from '../assets/icons/expert-commentary_grayscale.png'
import CommentaryHover from '../assets/icons/expert-commentary.png'
import Archive from '../assets/icons/Archive_grayscale.png'
import ArchiveHover from '../assets/icons/Archive.png'

const features = [
    {
      title: "Archive",
      chineseTitle: { text: "档案", color: "text-black border-black" },
      description: "Explore what other users have searched and vote on results.",
      iconSrc: Archive,
      iconSrcHover: ArchiveHover,
      bgColor: "bg-red-600",
      textColor: "text-white",
      borderColor: "border-red-600"
    },
    {
      title: "Expert commentary",
      chineseTitle: { text: "专家点评", color: "text-red-600 border-red-600" },
      description: "Read and listen to in-depth commentary from experts.",
      iconSrc: Commentary,
      iconSrcHover: CommentaryHover,
      bgColor: "bg-white",
      textColor: "text-black",
      borderColor: "border-red-600"
    }
];

function WhyDidThisHappen() {
  return (
    <main>
      <section className="flex overflow-hidden flex-col justify-center py-16 w-full text-6xl font-medium leading-tight text-center bg-white tracking-[2.16px] max-md:py-24 max-md:max-w-full max-md:text-4xl">
        <div className="flex flex-col justify-center w-full max-md:max-w-full max-md:text-4xl">
          <div className="chinese flex flex-wrap gap-5 items-center self-center text-black max-md:max-w-full max-md:text-4xl">
            <img loading="lazy" src={TimelineIcon} className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" alt="" />
            <h1 className="self-stretch my-auto text-[56px] font-medium border-black max-md:text-4xl">
              How has internet censorship evolved?
            </h1>
          </div>
          <div className="chinese mt-2.5 text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl">
            那么为什么会发生这一切呢?{" "}
          </div>
        </div>
      </section>
      
      <section className="flex flex-col w-full max-md:max-w-full">
        <div className="flex justify-center items-start px-44 pt-12 w-full bg-white min-h-[340px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <div className="pb-16 min-w-[240px] w-[928px] max-md:pb-24">
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