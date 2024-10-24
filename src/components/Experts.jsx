import React from 'react';
import FeaturedArticle from './FeaturedArticle';
import Newsletter from './Newsletter';

function Experts() {
  return (
    <main className="flex overflow-hidden flex-col bg-white min-h-[200px]">
      <section className="flex flex-col justify-center items-center px-14 py-32 w-full text-center max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[1080px]">
          <div className="flex flex-col max-w-full text-7xl font-medium leading-tight tracking-[2.16px] w-[664px] max-md:text-4xl">
            <div className="flex flex-wrap gap-5 items-center self-center text-black max-md:max-w-full max-md:text-4xl">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ae14bb0e273ccde106a710014c0736bca9ef6b07dc604115689b98093b8114b?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" />
              <h1 className="self-stretch my-auto max-md:max-w-full max-md:text-4xl">
                Expert commentary
              </h1>
            </div>
            <div className="chinese text-red-600 max-md:max-w-full max-md:text-4xl">
              专家点评
            </div>
          </div>
          <p className="mt-5 text-2xl leading-9 text-neutral-600 w-[840px] max-md:max-w-full">
            Explain your intent, and any clarifications about how this is different from a blog - Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
          </p>
        </div>
      </section>
      <FeaturedArticle />
      <Newsletter />
    </main>
  );
}

export default Experts;