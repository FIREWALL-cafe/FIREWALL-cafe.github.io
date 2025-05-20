import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location_on.svg';

function HongKongNotFound() {
  const images = [
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/Firewall_HK_1920.jpg',
      alt: 'Hong Kong Image 1'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/Firewall_HK5_1920-1.jpg',
      alt: 'Hong Kong Image 2'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/Firewall_HK6_1920-950x629-1.jpg',
      alt: 'Hong Kong Image 3'
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-04 font-bitmap-song">
              Hong Kong "Not Found" Exhibition
            </h1>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="font-body-01">Dec. 12-13, 2015</span>
              </div>

              <div className="flex gap-2 font-body-02">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-body-01 text-gray-600">
                    Connecting Space
                    <br />
                    G/F, 18-20 Fort Street
                    <br />
                    North Point, Hong Kong
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <p className="mb-4 font-body-02">
                FIREWALL Internet Cafe was invited to participate in "Not Found", a performance art exhibition 
                curated by Ying Ting at Connecting Space in Hong Kong. The exhibition explored the theme of 
                censorship and freedom of expression in Hong Kong and China.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {images.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600 italic pl-4 border-l-2 border-red-600">
                      {image.alt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HongKongNotFound; 