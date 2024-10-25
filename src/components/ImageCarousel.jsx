import React, { useState } from 'react';

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    console.log("NEXT: " + currentIndex);
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    console.log("PREVIOUS: " + currentIndex);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/d56f8d62d9074d509de3faeb2651bd99/967c736fc8cd83726decf310ee2a937cd7d3a12dc303be5438cdc8750c69b38e?apiKey=d56f8d62d9074d509de3faeb2651bd99&"
        className="object-contain w-full aspect-[15.63] max-md:max-w-full"
        />
      <div className="p-4 min-h-[240px]">
      <img
        loading="lazy"
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="object-contain w-full aspect-[15.63] max-md:max-w-full"
        />
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
        aria-label="Previous image"
      >
        ←
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
        aria-label="Next image"
      >
        →
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
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
  );
}

export default ImageCarousel;