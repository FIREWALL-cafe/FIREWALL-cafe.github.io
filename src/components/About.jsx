import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Consequences from './Consequences';
import Artist from './Artist';
import Supporters from './Supporters';
import CallToAction from './CallToAction';

function About() {
  return (
    <main>
      <section className="flex overflow-hidden flex-col justify-center py-32 w-full text-6xl font-medium leading-tight text-center tracking-[2.16px] max-md:py-24 max-md:max-w-full max-md:text-4xl">
        <div className="flex flex-col max-w-[1080px] max-md:max-w-full items-center">
          <div className="chinese flex flex-col items-center max-w-full">
            <h2 className="flex flex-col justify-center items-center text-6xl font-medium leading-tight max-w-[1080px] tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
              What do we lose in the dark?
            </h2>
            <div className="mt-2 text-7xl font-medium leading-tight text-red-600 tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
              我们在黑暗中失去了什么?
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-center mt-24 w-full max-w-[1080px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <p className="text-2xl leading-8 text-black max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis viverra mauris. Cras pretium blandit arcu ut accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis viverra mauris. Cras pretium blandit arcu ut accumsan.
              <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis viverra mauris.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center min-w-[240px] w-[516px] max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c49e04bc86e21ff43a3bd05456f7c220ddd3dbb5d573f89ca6d4a5301b63a96?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="Illustration related to the topic" className="object-contain max-w-full aspect-[1.07] w-[395px]" />
          </div>
        </div>
      </section>
      <Artist />
      <Supporters />
      <CallToAction />
    </main>
  );
}

export default About;