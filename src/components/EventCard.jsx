import React from 'react';

function EventCard({ image, title, date, time, location }) {
  return (
    <article className="flex overflow-hidden flex-col self-stretch my-auto w-80 rounded border border-black border-solid min-h-[440px] min-w-[240px]">
      <div className="flex flex-col flex-1 w-full">
        <img loading="lazy" src={image} alt={title} className="object-contain w-full aspect-[1.45]" />
      </div>
      <div className="flex flex-col justify-between px-5 py-6 w-full bg-white min-h-[220px]">
        <h3 className="flex-1 text-xl leading-8 text-black whitespace-nowrap text-ellipsis">
          {title}
        </h3>
        <div className="flex flex-col w-full text-lg text-zinc-400">
          <div className="flex gap-1 items-start self-start">
            <time>{date}</time>
            <span>• </span>
            <span>{time}</span>
          </div>
          <div className="flex gap-2 items-center mt-2 w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cc5befb25f0cf67c76092b75040a748efaf6b60083f7d6be19710350853c056?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
            <div className="flex-1 shrink self-stretch my-auto basis-0">
              {location}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default EventCard;