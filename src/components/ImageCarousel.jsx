import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';

import googleLogo from '../assets/icons/Google-logo_long.svg';
import baiduLogo from '../assets/icons/baidu_logo_long.svg';
import CarouselLeft from "../assets/icons/carousel-left.svg";
import CarouselRight from "../assets/icons/carousel-right.svg";
import QuestionIcon from './icons/QuestionIcon';
import NoImageAvailable from '../assets/icons/no-image-available.svg';
import CensoredBrokenImage from '../assets/icons/censored-broken-image.png';

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnError = (e, isBaidu = false) => {
    console.log("Baidu, images.baiduResults.length", isBaidu, images.baiduResults.length);
    if (isBaidu && images.baiduResults.length === 0) {
      e.target.src = CensoredBrokenImage;
    } else {
      e.target.src = NoImageAvailable;
    }
  };

  const baiduImage = (image) => images.baiduResults.length > 0 ? `/proxy-image?url=${encodeURIComponent(image)}` : CensoredBrokenImage;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 8 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? 8 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Headers */}
        <div className="flex flex-row w-full md:hidden">
          <div id="google-header" className="flex items-center px-8 pb-4 w-1/2">
            <img src={googleLogo} alt="Google" className="w-16 pt-4" />
            <QuestionIcon
              fill="#77B5F0"
              className="w-8 h-8 pt-4"
              data-tooltip-id="tooltip-google"
              data-tooltip-content='Results from US based Google images.'
              data-tooltip-place="top"
              noArrow={true}
            />
            <Tooltip id="tooltip-google" noArrow={true} />
          </div>
          <div id="baidu-header" className="flex items-center px-8 pb-4 w-1/2">
            <img src={baiduLogo} alt="Baidu" className="w-16 pt-4" />
            <QuestionIcon
              fill="#ef4444"
              className="w-8 h-8 pt-4"
              data-tooltip-id="tooltip-baidu"
              data-tooltip-content='Results from China based Baidu images.'
              data-tooltip-place="top"
              noArrow={true}
            />
            <Tooltip id="tooltip-baidu" noArrow={true} />
          </div>
        </div>

        {/* Google Section */}
        <div className="w-full md:w-1/2 ipad-portrait:pb-5 md:border-r border-red-300">
          <div id="google-header-md" className="hidden md:flex justify-between items-center px-8 pb-8">
            <img src={googleLogo} alt="Google" className="w-28" />
            <QuestionIcon
              fill="#77B5F0"
              className="w-6 h-6"
              data-tooltip-id="tooltip-google"
              data-tooltip-content='Results from US based Google images.'
              data-tooltip-place="top"
              noArrow={true}
            />
            <Tooltip id="tooltip-google" noArrow={true} />
          </div>
          <div id="google-carousel" className="relative justify-center items-center h-[320px] hidden ipad-portrait:flex">
            <div className="absolute left-0 h-full w-[60px] flex justify-center items-center">
              <button
                onClick={goToPrevious}
                className="h-full w-full flex justify-center items-center"
                aria-label="Previous image"
              >
                <img src={CarouselLeft} alt="Previous" className="w-12 h-12" />
              </button>
            </div>
            <img
              src={`/proxy-image?url=${encodeURIComponent(images.googleResults[currentIndex])}`}
              className="object-contain max-h-full max-w-full rounded-lg shadow-[2px_2px_3px_rgba(0,0,0,0.3)]"
              onError={handleOnError}
            />
          </div>
        </div>

        {/* Baidu Section */}
        <div className="w-full md:w-1/2 ipad-portrait:pb-5 bg-neutral-100">
          <div id="baidu-header-md" className="hidden md:flex justify-between items-center px-8 pb-8">
            <img src={baiduLogo} alt="Baidu" className="w-28 pt-1" />
            <QuestionIcon
              fill="#ef4444"
              className="w-6 h-6"
              data-tooltip-id="tooltip-baidu"
              data-tooltip-content='Results from China based Baidu images.'
              data-tooltip-place="top"
              noArrow={true}
            />
            <Tooltip id="tooltip-baidu" noArrow={true} />
          </div>
          <div id="baidu-carousel" className="relative justify-center items-center h-[320px] hidden ipad-portrait:flex">
            <img
              src={baiduImage(images.baiduResults[currentIndex])}
              className="object-contain max-h-full max-w-full rounded-lg  shadow-[2px_2px_3px_rgba(0,0,0,0.3)]"
              onError={(e) => handleOnError(e, true)}
            />
            <div className="absolute right-0 h-full w-[60px] flex justify-center items-center">
              <button
                onClick={goToNext}
                className="h-full w-full flex justify-center items-center"
                aria-label="Next image"
              >
                <img src={CarouselRight} alt="Next" className="w-12 h-12" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex flex-row">
        <div className="w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4 border-r border-red-300">
          {images.googleResults.map((image, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentIndex(index)}
              className={`aspect-square rounded-lg overflow-hidden ${currentIndex === index ? 'ring-2 ring-blue-400' : ''}`}
            >
              <img
                src={`/proxy-image?url=${encodeURIComponent(image)}`}
                className="w-full h-full object-cover"
                onError={handleOnError}
              />
            </button>
          ))}
        </div>
        <div className="w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4 bg-sky-50">
          {images.baiduResults.map((image, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentIndex(index)}
              className={`aspect-square rounded-lg overflow-hidden ${currentIndex === index ? 'ring-2 ring-red-400' : ''}`}
            >
              <img
                src={`/proxy-image?url=${encodeURIComponent(image)}`}
                className="w-full h-full object-cover"
                onError={(e) => handleOnError(e, true)}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;