import React, { useState, useEffect } from 'react';

function Typewriter({ text, speed }) {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText(text.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [currentIndex, speed, text]);

  return (
    <div>{typedText}</div>
  );
}

function HeroSection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-24 py-40 w-full bg-white min-h-[641px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <h1 aria-live="polite" className="pt-0 text-6xl font-medium leading-tight text-center text-black border-black tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
        <Typewriter text="WHAT'S BEHIND THE WALL?_" speed={100} />
      </h1>
      <div className="flex overflow-hidden flex-col mt-20 max-w-full w-[720px] max-md:mt-10">
        <div className="flex flex-wrap gap-4 items-center w-full border-b border-solid border-b-red-600 max-md:max-w-full">
          <div className="flex items-center self-stretch my-auto min-w-[240px]">
            <div className="flex flex-col justify-center items-center self-stretch px-9 py-2 my-auto rounded border-t border-l border-solid bg-slate-100 border-l-red-600 border-t-red-600 w-[148px] max-md:px-5">
              <div className="flex gap-2 items-start">
                <div className="flex gap-2.5 justify-center items-center p-1 w-8 min-h-[32px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cb2af37324c5a4bc1362790c12bbf94f45bcbeb50506c9959a362c2b0f248e7?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                    alt=""
                    className="object-contain self-stretch my-auto w-6 aspect-square"
                  />
                </div>
                <div className="flex gap-2.5 justify-center items-center p-1 w-8 min-h-[32px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7916c8ace4e5242f10846b4a4e065042e04bf4e5890112dd1e93beb21e7e2a1f?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                    alt=""
                    className="object-contain self-stretch my-auto w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch px-8 py-2.5 my-auto text-2xl font-medium tracking-widest leading-none text-red-600 whitespace-nowrap bg-white rounded border border-red-600 border-red-600 border-solid min-h-[48px] w-[148px] max-md:px-5">
              Archive
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb794f4f18a3d1845866ac11e2e28fe5f5214af3f6c2267127cf1cfac18b09ad?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
        <div className="flex flex-col justify-center p-5 w-full rounded-none border-r border-b border-l border-solid bg-slate-100 border-b-red-600 border-x-red-600 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap w-full bg-white rounded border border-solid border-neutral-300 min-h-[56px] max-md:max-w-full">
            <div className="flex-1 shrink px-4 my-auto text-xl min-h-[40px] min-w-[240px] text-zinc-400 max-md:max-w-full">
              Search Google + Baidu
            </div>
            <div className="flex overflow-hidden gap-1 justify-center items-center pr-4 h-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee267da2ba1db0c3f204b3b87b29e830a581d641f81f6a473adb0f749e3bc73d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c30257e5fb70686e06919a372673c33416006c63688b9c3e2219aa1e298255d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
