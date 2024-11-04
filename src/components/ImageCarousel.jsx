import React, { useState } from 'react';
import googleLogo from '../assets/icons/Google-logo_long.svg';
import baiduLogo from '../assets/icons/baidu_logo_long.svg';

function ImageCarousel({ images }) {
  console.log('images', images);
  
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
    <div className="relative">
      <div className="flex flex-wrap m-4 min-h-[400px]">
        <div className="w-1/2  border-r border-red-300">
          <div><img src={googleLogo} /></div>
          <img
            src={images.googleResults[currentIndex]}
            className="object-contain w-full aspect-[15.63] min-h-[100px] max-md:max-w-full"
            />
        </div>
        <div className="w-1/2 px-4">
          <div><img src={baiduLogo} /></div>
          <img
            src={images.baiduResults[currentIndex]}
            className="object-contain w-full aspect-[15.63] min-h-[100px] max-md:max-w-full"
            />
        </div>
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-[100px] transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-[100px] transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
          aria-label="Next image"
        >
          →
        </button>
        <div class="flex border-b border-red-300 w-full">
          <div className="grid grid-cols-3 gap-4 border-r border-red-300 w-1/2">
            {images.googleResults.map((image, index) => (
              <div className="relative aspect-w-1 aspect-h-1">
                <button onClick={() => setCurrentIndex(index)}>
                  <img src={image} className="object-cover aspect-square rounded-lg w-[100px]" />
                </button>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 w-1/2 pl-4">
            {images.baiduResults.map((image, index) => (
              <div className="aspect-w-1 aspect-h-1">
                <button onClick={() => setCurrentIndex(index)}>
                  <img src={image} className="object-cover aspect-square rounded-lg w-[100px]" />
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