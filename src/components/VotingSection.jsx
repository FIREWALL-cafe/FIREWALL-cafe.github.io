import React from 'react';

function VotingSection() {
  return (
    <div className="flex overflow-hidden flex-col w-full bg-gray-50 border border-red-600 border-solid max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap gap-10 justify-center p-12 w-full border-solid border-b-[1.28px] border-b-neutral-300 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col my-auto min-w-[240px] w-[601px] max-md:max-w-full">
          <div className="flex gap-2.5 items-start w-full text-2xl text-black min-h-[61px] max-md:max-w-full">
            <div className="flex flex-wrap flex-1 shrink gap-2.5 items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
              <div className="self-stretch my-auto max-md:max-w-full">What do you think about these search results?</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a823733f765b51f85e9cddedb4d2f5875d317f037ccf314971e7a52b0ed5ba7a?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-start mt-8 w-full rounded-md max-md:max-w-full">
            {['Censored', 'Not censored', 'Lost in translation'].map((option, index) => (
              <div key={index} className="flex flex-col grow shrink justify-between p-3 bg-white rounded border border-solid border-neutral-300 min-h-[124px] min-w-[190px] w-[152px]">
                <div className="flex gap-2.5 items-center w-full h-9">
                  <img loading="lazy" src={`http://b.io/ext_${16 + index}-`} className="object-contain self-stretch my-auto w-12 aspect-square" alt="" />
                </div>
                <div className="flex-1 shrink gap-2 self-stretch mt-10 w-full text-xl font-semibold leading-tight text-black">
                  {option}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden justify-center items-start h-full min-w-[240px] w-[395px]">
          <div className="flex flex-col min-w-[240px] w-[395px]">
            <div className="flex gap-2.5 items-start w-full text-2xl min-h-[61px] text-zinc-400">
              <div className="flex flex-1 shrink gap-2.5 items-center w-full basis-0 min-w-[240px]">
                <div className="self-stretch my-auto">How is this translation?</div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa49eaaae6f0a6491e499c65def80066487dab13b20e659c0087e72f2ad2fbd4?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
              </div>
            </div>
            <div className="flex gap-4 items-start mt-8 w-full rounded-md">
              {['Bad translation', 'Good translation'].map((option, index) => (
                <div key={index} className="flex flex-col justify-between p-3 rounded border border-solid bg-slate-200 border-zinc-400 min-h-[124px] min-w-[190px] w-[190px]">
                  <div className="flex gap-2.5 items-center w-full h-9">
                  <img loading="lazy" src={`http://b.io/ext_${20 + index}-`} className="object-contain self-stretch my-auto w-12 aspect-square" alt="" />
                </div>
                <div className="flex-1 shrink gap-2 self-stretch mt-10 w-full text-xl font-semibold leading-tight text-zinc-400">
                  {option}
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-center px-8 py-5 w-full text-center bg-gray-50 border-solid border-b-[1.28px] border-b-red-600 border-x-[1.28px] border-x-red-600 max-md:px-5 max-md:max-w-full">
        <button className="gap-1 self-stretch px-4 my-auto text-lg leading-snug whitespace-nowrap rounded border border-solid bg-slate-200 border-zinc-400 min-h-[56px] text-zinc-400">
          Submit
        </button>
        <div className="flex gap-6 items-center self-stretch my-auto text-xl min-w-[240px] max-md:max-w-full">
          <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
            <div className="self-stretch my-auto text-black">See past results for this query in the</div>
            <div className="flex gap-2 items-center self-stretch my-auto text-red-600">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/27152eb916f9be9e8c9f7d305bf1ab41ab7ea2c9627a6beceefffa8c8299ed0d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" alt="" />
              <div className="self-stretch my-auto underline">
                <span className="font-bold text-red-600 underline">Archive</span>
                <span className="text-red-600">.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VotingSection;