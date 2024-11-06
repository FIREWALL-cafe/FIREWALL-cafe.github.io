import React, { useState } from 'react';
import googleLogo from '../assets/icons/Google-logo_long.svg';
import baiduLogo from '../assets/icons/baidu_logo_long.svg';
import ArrowLeft from "../assets/icons/arrow_left_alt.svg";
import ArrowRight from "../assets/icons/arrow_right_alt.svg";

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="">
      <div className="flex flex-wrap mx-4 mb-4">
        <div className="relative w-1/2 pb-5 h-[400px] border-r border-red-300">
          <div><img src={googleLogo} /></div>
          <div className="flex max-h-[400px] justify-center items-center">
            <img
            src={images.googleResults[currentIndex]}
            className="object-cover aspect-square max-h-[320px] max-md:max-w-full" />
          </div>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
            aria-label="Previous image"
          >
            <img src={ArrowLeft} alt="Previous image" />
          </button>
        </div>
        <div className="relative w-1/2 px-4">
          <div><img src={baiduLogo} className="pt-1" /></div>
          <div className="flex justify-center items-center">
            <img
              src={images.baiduResults[currentIndex]}
              className="object-cover aspect-square max-h-[320px]" />
          </div>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
            aria-label="Next image"
          >
            <img src={ArrowRight} alt="Next image" />
          </button>
        </div>
        <div className="flex border-b border-red-300 w-full">
          <div className="grid grid-cols-3 gap-4 border-r border-red-300 w-1/2">
            {images.googleResults.map((image, index) => (
              <div className={`flex justify-center items-center aspect-w-1 aspect-h-1 ${currentIndex === index ? 'bg-blue-200' : ''}`}>
                <button onClick={() => setCurrentIndex(index)}>
                  <img src={image} className={`object-cover aspect-square rounded-lg`} />
                </button>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 w-1/2 pl-4">
            {images.baiduResults.map((image, index) => (
              <div className={`flex justify-center items-center aspect-w-1 aspect-h-1 ${currentIndex === index ? 'bg-red-200' : ''}`}>
                <button onClick={() => setCurrentIndex(index)}>
                  <img src={image} className="object-cover aspect-square rounded-lg" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;