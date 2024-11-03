import React, { useState } from 'react';

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
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/d56f8d62d9074d509de3faeb2651bd99/967c736fc8cd83726decf310ee2a937cd7d3a12dc303be5438cdc8750c69b38e?apiKey=d56f8d62d9074d509de3faeb2651bd99&"
          className="object-contain w-full aspect-[15.63] max-md:max-w-full"
          />
        <div className="w-1/2  border-r border-red-300">
          <img
            src={images.googleResults[currentIndex]}
            className="object-contain w-full aspect-[15.63] min-h-[100px] max-md:max-w-full"
            />
        </div>
        <div className="w-1/2">
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
            {images.googleResults.map((image) => (
              <div className="relative aspect-w-1 aspect-h-1">
                <img src={image} className="object-cover aspect-square rounded-lg w-[100px]" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 w-1/2">
            {images.baiduResults.map((image) => (
              <div className="aspect-w-1 aspect-h-1">
                <img src={image} className="object-cover aspect-square rounded-lg w-[100px]" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.googleResults.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? 'bg-red-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
              alt={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;