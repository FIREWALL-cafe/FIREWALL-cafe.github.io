import React from 'react';

function HeroPress() {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-32 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1080px] max-md:max-w-full">
        <div className="flex flex-col w-full text-7xl font-medium leading-tight tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
          <div className="flex flex-wrap gap-5 items-center w-full text-black max-md:max-w-full max-md:text-4xl">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4a10292d31f7d8b5443dad5c40e3fb0ef7f1d3db2394bbccea1e8b36b203645?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" />
            <div className="self-stretch my-auto max-md:text-4xl">In the press</div>
          </div>
          <div className="mt-2 text-red-600 max-md:max-w-full max-md:text-4xl">在新闻界</div>
        </div>
        <div className="mt-5 text-xl leading-8 text-black max-md:max-w-full">
          Body copy - Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
        </div>
      </div>
    </section>
  );
}

export default HeroPress;