import React from 'react';

function FeatureCard({ title, chineseTitle, description, iconSrc, bgColor, textColor, borderColor }) {
  return (
    <div className={`flex flex-col flex-1 shrink justify-center items-center self-stretch px-8 my-auto ${bgColor} rounded-lg border ${borderColor} border-solid aspect-square basis-0 min-h-[400px] min-w-[240px] max-md:px-5`}>
      <div className="flex flex-col flex-1 justify-between w-full">
        <div className="flex flex-col w-full">
          <div className="flex gap-2 items-center w-full">
            <div className={`flex-1 shrink gap-2.5 self-stretch my-auto text-4xl font-medium leading-none ${textColor} whitespace-nowrap border-${textColor} min-w-[240px]`}>
              {title}
            </div>
            <div className="flex flex-col items-center self-stretch my-auto min-h-[52px] w-[52px]">
              <img loading="lazy" src={iconSrc} className="object-contain aspect-square w-[52px]" alt={`${title} icon`} />
            </div>
          </div>
          <div className={`chinese text-4xl font-medium leading-none ${chineseTitle.color} border-${chineseTitle.color}`}>
            {chineseTitle.text}
          </div>
        </div>
        <div className={`mt-44 text-xl leading-8 ${textColor} max-md:mt-10`}>
          {description}
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;