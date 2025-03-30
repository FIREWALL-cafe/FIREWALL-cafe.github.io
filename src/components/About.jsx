import React from 'react';
import Artist from './Artist';
import Supporters from './Supporters';
import CallToAction from './CallToAction';
import Contributors from './Contributors';
import AboutHero from '../assets/images/about-hero.jpg';

function About() {
  return (
    <main className="max-w-[1080px] mx-auto">
      <section className="flex overflow-hidden flex-col justify-center w-full bg-white">
        <div className="flex flex-col items-end container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center">
              <div className="font-display-01 ipad-portrait:font-display-03 flex flex-col items-center text-center">
                <h1 className="leading-tight tracking-[2.16px]">
                  What do we lose in the dark?
                </h1>
                <div className="mt-2 leading-tight text-red-600 tracking-[2.16px]">
                  我们在黑暗中失去了什么?
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center mt-10 font-body-01">
              <div className="flex flex-col flex-1 basis-[300px] max-w-2xl">
                <p className="mb-4">
                  FIREWALL Cafe exists to advocate for freedom of speech for the netizens around the world.
                  Our goal is to investigate online censorship by comparing the disparities of Google searches in western nations versus Baidu searches in China.
                  We aim to increase public awareness and dialogue about Internet freedom. We believe that power, if left unchallenged, inevitably leads to abuse.
                </p>
                <p className="mb-4">
                  Through our innovative dual-image browser, we aim to visualize censorship in real time: simply enter a query, and the tool will present side-by-side image results from both search engines.
                  By doing so, we hope to enhance public awareness and spark dialogue about internet freedom. We believe that power, if left unchallenged, inevitably leads to abuse.
                </p>
                <p className="">
                  A pivotal moment occurred during our inaugural show in New York City in 2016 around our "Networked Feminism" roundtable.
                  We faced interference from Chinese state authorities and this incident was covered by The Washington Post.
                  The repercussions propelled the art project on an international exhibition tour, setting new stages for dialogue and understanding across borders.
                </p>
              </div>
              <div className="flex-shrink-0 w-full max-w-lg">
                <img src={AboutHero} alt="Illustration related to the topic" className="w-full h-auto object-cover" />
              </div>
            </div>
            <Artist />
            <Contributors />
          </div>
        </div>
      </section>
      <CallToAction />
    </main>
  );
}

export default About;