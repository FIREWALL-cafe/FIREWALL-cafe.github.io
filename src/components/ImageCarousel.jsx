import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';

import googleLogo from '../assets/icons/Google-logo_long.svg';
import baiduLogo from '../assets/icons/baidu_logo_long.svg';
import CarouselLeft from "../assets/icons/carousel-left.svg";
import CarouselRight from "../assets/icons/carousel-right.svg";
import QuestionBaidu from '../assets/icons/question_red.svg';
import QuestionGoogle from '../assets/icons/question.svg';
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
      <div className="flex flex-col md:flex-row mx-4 mb-4">
        {/* Google Section */}
        <div className="w-full md:w-1/2 pb-5 md:border-r border-red-300">
          <div className="flex justify-between items-center px-4 mb-4">
            <img src={googleLogo} alt="Google" className="h-8 object-contain" />
            <img
              src={QuestionGoogle}
              alt="Google results"
              className="w-6 h-6"
              data-tooltip-id="tooltip-google"
              data-tooltip-content='Results from US based Google images.'
              data-tooltip-place="top"
              noArrow={true}
            />
            <Tooltip id="tooltip-google" noArrow={true} />
          </div>
          <div className="relative flex justify-center items-center h-[320px] px-4">
            <img
              src={`/proxy-image?url=${encodeURIComponent(images.googleResults[currentIndex])}`}
              className="object-contain max-h-full max-w-full rounded-lg"
              onError={handleOnError}
            />
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white/90 transition-colors"
              aria-label="Previous image"
            >
              <img src={CarouselLeft} alt="Previous" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Baidu Section */}
        <div className="w-full md:w-1/2 pb-5 bg-sky-50">
          <div className="flex justify-between items-center px-4 mb-4">
            <img src={baiduLogo} alt="Baidu" className="h-8 object-contain pt-1" />
            <img
              src={QuestionBaidu}
              alt="Baidu results"
              className="w-6 h-6"
              data-tooltip-id="tooltip-baidu"
              data-tooltip-content='Results from China based Baidu images.'
              data-tooltip-place="top"
              noArrow={true}
            />
            <Tooltip id="tooltip-baidu" noArrow={true} />
          </div>
          <div className="relative flex justify-center items-center h-[320px] px-4">
            <img
              src={baiduImage(images.baiduResults[currentIndex])}
              className="object-contain max-h-full max-w-full rounded-lg"
              onError={(e) => handleOnError(e, true)}
            />
            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white/90 transition-colors"
              aria-label="Next image"
            >
              <img src={CarouselRight} alt="Next" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex flex-col md:flex-row border-t border-red-300">
        <div className="w-full md:w-1/2 grid grid-cols-3 gap-2 p-4 md:border-r border-red-300">
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
        <div className="w-full md:w-1/2 grid grid-cols-3 gap-2 p-4 bg-sky-50">
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