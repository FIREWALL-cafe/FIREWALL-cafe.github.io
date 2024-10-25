import React from 'react';

import Events from '../assets/icons/events.png';

function UpcomingEvents() {
  return (
    <section className="flex flex-col justify-center items-center px-14 py-32 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1080px] max-md:max-w-full items-center">
        <div className="chinese flex flex-col items-center max-w-full w-[588px]">
          <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
            <img src={Events} alt="" className="object-contain self-stretch my-auto w-[51px]" />
            <h2 className="self-stretch my-auto text-6xl font-medium leading-tight text-black tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
              Upcoming events
            </h2>
          </div>
          <div className="mt-2 text-6xl font-medium leading-tight text-red-600 tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
            即将举行的活动
          </div>
        </div>
        <p className="mt-5 text-xl max-md:max-w-full">
          Explore our events, including exhibitions, screenings, and talks. These gatherings engage a global audience and further the mission of FIREWALL Internet Cafe.
        </p>
      </div>
    </section>
  );
}

export default UpcomingEvents;