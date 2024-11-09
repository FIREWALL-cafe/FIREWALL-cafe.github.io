import React from 'react';
import { Link } from 'react-router-dom';
import Artist from './Artist';
import Supporters from './Supporters';
import CallToAction from './CallToAction';
import AboutHero from '../assets/images/about-hero.jpg';

function About() {
  return (
    <main>
      <section className="flex overflow-hidden flex-col justify-center w-full bg-white max-md:max-w-full"></section>
        <div className="flex flex-col items-end pt-12 px-20 max-md:px-5">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full items-center">
              <div className="chinese font-medium flex flex-col items-center max-w-full">
                <h2 className="flex flex-col justify-center items-center text-6xl leading-tight tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
                  What do we lose in the dark?
                </h2>
                <div className="mt-2 text-7xl leading-tight text-red-600 tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
                  我们在黑暗中失去了什么?
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center mt-10 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col flex-1 shrink my-auto basis-0 min-w-[240px] max-md:max-w-full">
                <p className="text-xl max-md:max-w-full mb-4">
                  FIREWALL Cafe exists to advocate for freedom of speech for the netizens around the world.
                  Our goal is to investigate online censorship by comparing the disparities of Google searches in western nations versus Baidu searches in China.
                  We aim to increase public awareness and dialogue about Internet freedom. We believe that power, if left unchallenged, inevitably leads to abuse.
                </p>
                <p className="text-xl max-md:max-w-full mb-4">
                  Through our innovative dual-image browser, we aim to visualize censorship in real time: simply enter a query, and the tool will present side-by-side image results from both search engines.
                  By doing so, we hope to enhance public awareness and spark dialogue about internet freedom. We believe that power, if left unchallenged, inevitably leads to abuse.
                </p>
                <p className="text-xl max-md:max-w-full">
                  A pivotal moment occurred during our inaugural show in New York City in 2016 around our “Networked Feminism” roundtable.
                  We faced interference from Chinese state authorities and this incident was covered by The Washington Post.
                  The repercussions propelled the art project on an international exhibition tour, setting new stages for dialogue and understanding across borders.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center min-w-[240px] w-[516px] max-md:max-w-full">
                <img src={AboutHero} alt="Illustration related to the topic" className="object-contain max-w-full aspect-[1.07]" />
              </div>
            </div>
            <Artist />
            <Supporters />
            <CallToAction />
        </div>
      </div>
    </main>
  );
}

export default About;