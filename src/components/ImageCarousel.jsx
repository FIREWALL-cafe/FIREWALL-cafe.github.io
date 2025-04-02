import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import googleLogo from '../assets/icons/Google-logo_long.svg';
import baiduLogo from '../assets/icons/baidu_logo_long.svg';
import CarouselLeft from "../assets/icons/carousel-left.svg";
import CarouselRight from "../assets/icons/carousel-right.svg";
import QuestionIcon from './icons/QuestionIcon';
import BrokenImagePlaceholder from '../assets/icons/broken-image-placeholder.svg';
import BrokenImagePadding from '../assets/icons/broken-image-placeholder_padding.svg';
import CensoredBrokenImage from '../assets/icons/censored-image-placeholder_padding.svg';

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOnError = (e, isBaidu = false) => {
    console.log("Baidu, images.baiduResults.length", isBaidu, images.baiduResults.length);
    if (isBaidu && images.baiduResults.length === 0) {
      e.target.src = CensoredBrokenImage;
    } else {
      e.target.src = BrokenImagePadding;
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

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    // Only open lightbox on iPhone screens
    const isIphoneScreen = window.innerWidth <= 420;
    if (isIphoneScreen) {
      setIsLightboxOpen(true);
    }
  };

  // Create slides array for the lightbox with pairs of images
  const slides = images.googleResults.map((googleImage, index) => ({
    google: `/proxy-image?url=${encodeURIComponent(googleImage)}`,
    baidu: baiduImage(images.baiduResults[index]),
    alt: `Image Pair ${index + 1}`
  }));

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
              className="object-contain max-h-full max-w-full shadow-[2px_2px_3px_rgba(0,0,0,0.3)]"
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
            />
            <Tooltip id="tooltip-baidu" noArrow={true} />
          </div>
          <div id="baidu-carousel" className="relative justify-center items-center h-[320px] hidden ipad-portrait:flex">
            <img
              src={baiduImage(images.baiduResults[currentIndex])}
              className="object-contain max-h-full max-w-full shadow-[2px_2px_3px_rgba(0,0,0,0.3)]"
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
              onClick={() => handleThumbnailClick(index)}
              className={`aspect-square overflow-hidden ${currentIndex === index ? 'focus-visible:ring-4 focus-visible:ring-blue-400 ring-4 ring-blue-400' : 'opacity-60'}`}
            >
              <img
                src={`/proxy-image?url=${encodeURIComponent(image)}`}
                className="w-full h-full object-cover"
                onError={handleOnError}
              />
            </button>
          ))}
        </div>
        <div className="w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4 bg-neutral-100">
          {images.baiduResults.map((image, index) => (
            <button 
              key={index} 
              onClick={() => handleThumbnailClick(index)}
              className={`aspect-square overflow-hidden ${currentIndex === index ? 'ring-4 ring-red-600 focus-visible:ring-4 focus-visible:ring-red-600' : 'opacity-60'}`}
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

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        index={currentIndex}
        slides={slides}
        carousel={{ imageFit: "cover" }}
        className="iphone:block hidden"
        render={{
          slide: ({ slide }) => (
            <div className="flex flex-row w-full">
              {/* Google Section */}
              <div className="w-1/2 relative flex flex-col items-center justify-center bg-white">
                <div className="flex flex-col items-center justify-center aspect-square overflow-hidden">
                  <img
                    src={slide.google}
                    className="w-full h-full p-2 object-cover shadow-[2px_2px_3px_rgba(0,0,0,0.3)]"
                    onError={handleOnError}
                  />
                </div>
                <div className="flex justify-between w-full pl-2 mt-4">
                  <img src={googleLogo} alt="Google" className="w-12" />
                  <QuestionIcon
                    fill="#77B5F0"
                    className="w-4 h-4 mr-2"
                    data-tooltip-id="tooltip-google"
                    data-tooltip-content='Results from US based Google images.'
                    data-tooltip-place="top"
                  />
                  <Tooltip id="tooltip-google" noArrow={true} />
                </div>
              </div>

              {/* Baidu Section */}
              <div className="w-1/2 relative flex flex-col items-center justify-center bg-neutral-100 border-l border-red-300">
                <div className="flex flex-col items-center justify-center aspect-square overflow-hidden">
                  <img
                    src={slide.baidu}
                    className="w-full h-full p-2 object-cover shadow-[2px_2px_3px_rgba(0,0,0,0.3)]"
                    onError={(e) => handleOnError(e, true)}
                  />
                </div>
                <div className="flex justify-between w-full pl-2 mt-4">
                  <img src={baiduLogo} alt="Baidu" className="w-12 pt-1" />
                  <QuestionIcon
                    fill="#ef4444"
                    className="w-4 h-4 mr-4"
                    data-tooltip-id="tooltip-baidu"
                    data-tooltip-content='Results from China based Baidu images.'
                    data-tooltip-place="left"
                  />
                  <Tooltip id="tooltip-baidu" noArrow={true} />
                </div>
              </div>
            </div>
          )
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
          root: { 
            "--yarl__color_backdrop": "rgba(0, 0, 0, 0.9)",
            "--yarl__slide_width": "100%",
            "--yarl__slide_height": "100%",
            "--yarl__slide_padding": "0"
          },
          thumbnails: { "--yarl__thumbnails_thumbnail_border_radius": "0.5rem" },
          thumbnail: { "--yarl__thumbnail_border_radius": "0.5rem" },
          slide: { padding: "0", width: "100%", height: "100%" },
          slide_container: { padding: "0", width: "100%", height: "100%" },
          slide_image: { padding: "0", width: "100%", height: "100%" },
          slide_image_container: { padding: "0", width: "100%", height: "100%" }
        }}
      />
    </div>
  );
}

export default ImageCarousel;