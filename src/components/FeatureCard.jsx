import React from 'react';
import { Link } from 'react-router-dom';

function FeatureCard({ title, chineseTitle, description, iconSrc, bgColor, textColor, borderColor, url }) {
  const hoverImg = Array.isArray(iconSrc);
  
  return (
    <Link 
      to={url || '/'} 
      className={`block h-full ${bgColor} rounded-lg border ${borderColor} transition-transform hover:scale-[1.02]`}
    >
      <div className="flex flex-col h-full p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-col gap-2">
            <h2 className={`chinese text-2xl md:text-4xl font-medium ${textColor}`}>
              {title}
            </h2>
            <div className={`chinese text-2xl md:text-4xl font-medium ${chineseTitle.color}`}>
              {chineseTitle.text}
            </div>
          </div>
          <div className="flex-shrink-0 w-[52px] h-[52px]">
            {hoverImg ? (
              <img
                onMouseOver={e => (e.currentTarget.src = iconSrc[0])}
                onMouseOut={e => (e.currentTarget.src = iconSrc[1])}
                src={iconSrc[1]}
                className="w-full h-full object-contain"
                alt={`${title} icon`}
              />
            ) : (
              <img
                src={iconSrc}
                className="w-full h-full object-contain"
                alt={`${title} icon`}
              />
            )}
          </div>
        </div>
        <p className={`mt-auto text-lg md:text-xl leading-relaxed ${textColor}`}>
          {description}
        </p>
      </div>
    </Link>
  );
}

export default FeatureCard;