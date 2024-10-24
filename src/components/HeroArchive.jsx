import React from 'react';

const HeroArchive = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center py-32 w-full bg-white max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full text-center max-md:max-w-full">
        <div className="flex flex-col w-full text-7xl font-medium leading-tight tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
          <div className="flex flex-wrap gap-5 items-center self-center text-black max-md:max-w-full max-md:text-4xl">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fce2f36c1685cfee29d555f36fbe9734a2d8d5b97e376ca92651b86a65390849?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]" />
            <div className="self-stretch my-auto border-black max-md:max-w-full max-md:text-4xl">
              Query Archive
            </div>
          </div>
          <div className="chinese text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl">
            搜索结果存档
          </div>
        </div>
        <div className="mt-5 text-lg text-black max-md:max-w-full">
          Browse what others are searching for, vote on results, and see how others voted.
        </div>
      </div>
      <div className="flex overflow-hidden flex-col self-center mt-10 max-w-full w-[720px]">
        <div className="flex flex-wrap gap-4 items-center w-full border-b border-solid border-b-red-600 max-md:max-w-full">
          <div className="flex items-center self-stretch my-auto min-w-[240px]">
            <div className="flex flex-col justify-center items-center self-stretch px-9 py-2 my-auto bg-white rounded border-t border-b border-l border-solid border-l-red-600 border-y-red-600 min-h-[48px] w-[148px] max-md:px-5">
              <div className="flex gap-2 items-start">
                <div className="flex gap-2.5 justify-center items-center p-1 w-8 min-h-[32px]">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e68d446275ff7e79de8d23d078083a29440c96d8535062a425d726f3a081951?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
                </div>
                <div className="flex gap-2.5 justify-center items-center p-1 w-8 min-h-[32px]">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b27209372ed08a64777dffd2bd7338a6b9b28a9ba9c1c924f4026a03bc35c94d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
                </div>
              </div>
            </div>
            <div className="self-stretch px-8 py-2.5 my-auto text-2xl font-medium tracking-widest leading-none text-black whitespace-nowrap rounded border-t border-r border-l border-black border-solid bg-slate-100 border-t-red-600 border-x-red-600 min-h-[48px] w-[148px] max-md:px-5">
              Archive
            </div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d57ee72eabfc8f0d1ce6e38df0d411ab96030d9847408dac328d2cff634631f8?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </div>
        <div className="flex flex-wrap gap-4 p-5 w-full rounded-none border-r border-b border-l border-solid bg-slate-100 border-b-red-600 border-x-red-600 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap flex-1 shrink my-auto bg-white rounded border border-solid basis-[34px] border-neutral-300 min-h-[56px] min-w-[240px] max-md:max-w-full">
            <div className="flex-1 shrink px-4 my-auto text-xl text-black min-h-[40px] min-w-[240px] max-md:max-w-full">
              Tank man june 4
            </div>
            <div className="flex overflow-hidden gap-1 justify-center items-center pr-4 h-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dc9efbd231232d54c62700278abab6e963f6521a978b9c62fd4f9424be639a9?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/defeec934978096013bb9e993c524686ba6248f7251b44ce6b6829c84d9d0f11?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </div>
          </div>
          <div className="flex gap-1 justify-center items-center px-4 h-full text-xl text-center text-red-600 whitespace-nowrap bg-white rounded border border-red-600 border-solid">
            <div className="self-stretch my-auto">filters</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f41e7e4eaafc24a2c4a06757c0c78cba9e56e1c5427373a8783b1db2f75ac93a?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArchive;