import React from 'react';

function UpcomingEvents() {
  return (
    <section className="flex flex-col justify-center items-center px-14 py-32 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1080px] max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[588px]">
          <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
            <div className="flex grow shrink gap-3 items-center self-stretch my-auto w-[42px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2aa10e3f8bfce387544bc6cdfd2173e727042b70bf144b2577b885e8e364def3?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain self-stretch my-auto aspect-[1.02] w-[51px]" />
            </div>
            <h2 className="self-stretch my-auto text-7xl font-medium leading-tight text-black tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
              Upcoming events
            </h2>
          </div>
          <div className="mt-2 text-7xl font-medium leading-tight text-red-600 tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
            即将举行的活动
          </div>
        </div>
        <p className="mt-5 text-xl leading-8 text-black underline max-md:max-w-full">
          There are currently no upcoming events.{" "}
          <span className="font-semibold text-black">
            Want to be notified when one is scheduled?
          </span>
          <span className="underline"> Sign up for our newsletter.</span>
        </p>
      </div>
    </section>
  );
}

export default UpcomingEvents;