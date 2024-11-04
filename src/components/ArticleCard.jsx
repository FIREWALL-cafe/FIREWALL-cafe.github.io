import React from 'react';

function ArticleCard({ image, title, date, tag }) {
  return (
    <article className="flex overflow-hidden flex-col grow shrink self-stretch my-auto w-64 rounded border border-black border-solid min-h-[400px] min-w-[240px]">
      <img loading="lazy" src={image} className="object-contain flex-1 w-full aspect-[1.78]" />
      <div className="flex flex-col justify-between px-5 py-6 w-full bg-white min-h-[220px]">
        <h3 className="flex-1 text-xl leading-8 text-black whitespace-nowrap text-ellipsis">
          {title}
        </h3>
        <div className="flex gap-3 items-center mt-8 w-full h-5 text-lg text-zinc-400">
          <time className="flex-1 shrink gap-2 self-stretch my-auto w-full min-w-[240px] text-ellipsis">
            {date}
          </time>
        </div>
      </div>
      {tag && (
        <div className={`absolute top-4 right-4 gap-2 self-start px-2 py-1 text-base font-medium ${tag.color || 'text-red-600'} bg-white rounded shadow-sm`}>
          {tag.icon && <img loading="lazy" src={tag.icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />}
          <span>{tag.text}</span>
        </div>
      )}
    </article>
  );
}

export default ArticleCard;