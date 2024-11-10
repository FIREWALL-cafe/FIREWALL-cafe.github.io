import React from 'react';
import { Link } from 'react-router-dom';

function FeatureCard({ title, chineseTitle, description, iconSrc, bgColor, textColor, borderColor, url }) {
  const hoverImg = Array.isArray(iconSrc);
  return (
    <div className={`flex flex-col flex-1 shrink justify-center items-center self-stretch p-4 my-auto ${bgColor} rounded-lg border ${borderColor} border-solid basis-0 min-w-[240px] max-md:px-5`}>
      <Link to={url ? url : '/'}>
        <div className="flex flex-col flex-1 justify-between w-full">
          <div className="flex flex-col w-full">
            <div className="flex gap-2 items-center w-full">
              <div className={`chinese flex-1 shrink gap-2.5 self-stretch my-auto text-4xl font-medium leading-none ${textColor} whitespace-nowrap border-${textColor} min-w-[240px]`}>
                {title}
              </div>
              <div className="flex flex-col items-center self-stretch my-auto min-h-[52px] w-[52px]">
                {
                  hoverImg ?
                    <img
                    onMouseOver={e => (e.currentTarget.src = iconSrc[0])}
                    onMouseOut={e => (e.currentTarget.src = iconSrc[1])}
                    src={iconSrc[0]}
                    className="object-contain aspect-square w-[52px]"
                    alt={`${title} icon`}
                  />
                  :
                    <img
                    src={iconSrc}
                    className="object-contain aspect-square w-[52px]"
                    alt={`${title} icon`}
                  />
                }
              </div>
            </div>
            <div className={`chinese text-4xl font-medium leading-none ${chineseTitle.color} border-${chineseTitle.color}`}>
              {chineseTitle.text}
            </div>
          </div>
          <div className={`mt-32 text-xl leading-8 ${textColor} max-md:mt-10`}>
            {description}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FeatureCard;