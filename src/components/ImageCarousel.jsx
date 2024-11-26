import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';

import googleLogo from '../assets/icons/Google-logo_long.svg';
import baiduLogo from '../assets/icons/baidu_logo_long.svg';
import ArrowLeft from "../assets/icons/arrow_left_alt.svg";
import ArrowRight from "../assets/icons/arrow_right_alt.svg";
import QuestionBaidu from '../assets/icons/question_red.svg';
import QuestionGoogle from '../assets/icons/question.svg';

import BrokenImage from '../assets/icons/broken-image_grayscale.png';

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [status, setStatus] = useState("loading");

  const handleOnLoad = (e) => {
    e.target.src = e.target.src;
    e.target.setAttribute("src", e.target.src);
    setStatus("fulfilled");
  };

  const handleOnError = (e) => {
    e.target.src = BrokenImage;
  };

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
        <div className="relative w-1/2 pb-5 border-r border-red-300">
          <div className="flex flex-wrap justify-between">
            <img src={googleLogo} />
            <img
              src={QuestionGoogle}
              alt="Google results"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square mr-5"
              data-tooltip-id="tooltip-google"
              data-tooltip-content='Results from US based Google images.'
              data-tooltip-place="top"
            />
            <Tooltip id="tooltip-google" />
          </div>
          <div className="flex max-h-[400px] justify-center items-center">
            <img
              src={images.googleResults[currentIndex]}
              className="object-cover aspect-square max-h-[320px] max-md:max-w-full"
              onError={handleOnError}
             />
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
          <div className="flex flex-wrap justify-between">
            <img src={baiduLogo} className="pt-1" />
            <img
              src={QuestionBaidu}
              alt="Baidu results"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              data-tooltip-id="tooltip-baidu"
              data-tooltip-content='Results from China based Baidu images.'
              data-tooltip-place="top"
            />
            <Tooltip id="tooltip-baidu" />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={images.baiduResults[currentIndex]}
              className="object-cover aspect-square max-h-[320px]"
              onError={handleOnError}
            />
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
              <div key={index} className={`flex justify-center items-center aspect-w-1 aspect-h-1 ${currentIndex === index ? 'bg-blue-200' : ''}`}>
                <button onClick={() => setCurrentIndex(index)}>
                  <img
                    src={image}
                    className={`object-cover aspect-square rounded-lg`}
                    onError={handleOnError}
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 w-1/2 pl-4">
            {images.baiduResults.map((image, index) => (
              <div key={index} className={`flex justify-center items-center aspect-w-1 aspect-h-1 ${currentIndex === index ? 'bg-red-200' : ''}`}>
                <button onClick={() => setCurrentIndex(index)}>
                  <img
                    src={image}
                    className={`object-cover aspect-square rounded-lg`}
                    onError={handleOnError}
                  />
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