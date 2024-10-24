import React from 'react';

const SocialFollow = () => {
  return (
    <section className="flex flex-col flex-1 shrink p-20 bg-rose-100 basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <h2 className="flex flex-col w-full text-5xl font-medium leading-tight whitespace-nowrap max-md:max-w-full max-md:text-4xl">
        <span className="text-black max-md:max-w-full max-md:text-4xl">Follow</span>
        <span className="chinese text-red-600 max-md:max-w-full max-md:text-4xl">跟随</span>
      </h2>
      <div className="flex gap-2.5 items-center mt-10 w-full max-md:max-w-full">
        <div className="flex flex-col justify-center self-stretch my-auto w-12">
          <a href="#" aria-label="Follow us on social media platform 1">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/22d92ef9e9a9129927207fd89a9cc54a4c85e031e615f93ca03e9581607c31e3?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain w-full aspect-square fill-red-600" alt="" />
          </a>
          <a href="#" aria-label="Follow us on social media platform 2">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/56cfb2c36a5036ee92ec0dfa7a66f781a07ca9e12722204e77c771fb4537da39?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain mt-4 w-full aspect-square fill-red-600" alt="" />
          </a>
          <a href="#" aria-label="Follow us on social media platform 3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0835d4319b83c2f49df9e907f3ed01acaa546053339359fdc60db6e4b9ae4888?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain mt-4 w-full aspect-square fill-red-600" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialFollow;