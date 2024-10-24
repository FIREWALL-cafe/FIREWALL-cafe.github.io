import React from 'react';

function CallToAction() {
  return (
    <section className="flex flex-col items-center px-16 py-44 w-full text-xl bg-rose-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e0c3b73c092a952ab0c7984619bec925b0e88d6c43474ff23cda402f3c6682a?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain w-14 aspect-square" />
      <h2 className="flex flex-col items-center mt-6 text-6xl font-medium leading-none max-md:max-w-full max-md:text-4xl">
  <span className="text-black max-md:max-w-full max-md:text-4xl">
    Become a Firewall Cafe supporter
  </span>
  <span className="mt-2 text-red-600 max-md:text-4xl">成为赞助商</span>
</h2>
<p className="mt-6 leading-8 text-center text-black w-[590px] max-md:max-w-full">
  Learn how you can support Firewall Cafe and fight for the freedom of information in China and worldwide.
</p>
<a href="#learn-more" className="flex gap-1 justify-center items-center px-4 mt-6 text-center text-black rounded border border-black border-solid min-h-[56px]">
  <span className="self-stretch my-auto">Learn more</span>
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9f9bbeff432762e242862067806e0329598fe2f2f2a63fb33fe33da0837cca1?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
</a>
    </section>
  );
}

export default CallToAction;