import React from 'react';

function ContactSection() {
  return (
    <section className="flex overflow-hidden flex-wrap w-full bg-gray-800 border-t border-b border-solid border-y-black max-md:max-w-full">
      <div className="flex flex-col justify-center p-20 my-auto border-0 border-white border-solid min-w-[240px] w-[640px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full shadow-sm max-md:max-w-full">
          <div className="flex flex-col w-full text-5xl font-medium leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            <h2 className="text-white max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Have an article idea? Get in touch.
            </h2>
            <p className="text-red-600 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              有文章想法吗? 保持联系。
            </p>
          </div>
          <button className="flex gap-1 justify-center items-center self-start px-4 mt-10 text-xl text-center text-white whitespace-nowrap rounded border border-white border-solid min-h-[56px]">
            <span className="self-stretch my-auto">Contact</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcb83f5f376687317f888fd84ea1c84754917b624a5a5fc788082b3db3bdc683?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </button>
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3db3618e2dbf3b5be8788c60f656b657c357afe3169bef5566bbce0576051467?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="Contact section background" className="object-contain flex-1 shrink w-full aspect-[1.31] basis-40 min-w-[240px] max-md:max-w-full" />
    </section>
  );
}

export default ContactSection;