import React from 'react';

function Hero() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center py-32 w-full bg-white max-md:py-24 max-md:max-w-full">
      <h1 className="flex flex-col justify-center w-full text-6xl font-medium leading-tight max-w-[1080px] tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
        <span className="self-center max-w-full text-black w-[933px] max-md:max-w-full max-md:text-4xl">
          What do we lose in the dark?
        </span>
        <span className="mt-2 text-center chinese text-red-600 max-md:max-w-full max-md:text-4xl">
          我们在黑暗中失去了什么?{" "}
        </span>
      </h1>
      <div className="flex flex-wrap gap-10 justify-center mt-24 w-full max-w-[1080px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <p className="text-2xl leading-8 text-black max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis viverra mauris. Cras pretium blandit arcu ut accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis viverra mauris. Cras pretium blandit arcu ut accumsan.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis viverra mauris.
          </p>
          <a href="#about" className="flex gap-1 justify-center items-center self-start px-4 mt-10 text-xl text-center text-red-600 whitespace-nowrap bg-white rounded border border-red-600 border-solid min-h-[56px]">
            <span className="self-stretch my-auto">About</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ef81045bf083d1aeb49a0e5c94a0eaa37995945d922e14cb6d5d991fb8af956?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center min-w-[240px] w-[516px] max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c49e04bc86e21ff43a3bd05456f7c220ddd3dbb5d573f89ca6d4a5301b63a96?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="Illustration related to the topic" className="object-contain max-w-full aspect-[1.07] w-[395px]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;