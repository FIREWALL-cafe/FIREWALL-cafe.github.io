import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location_on.svg';

function ProxyPals() {
  const images = [
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/FIREWALLuProxy2.18-1.jpg',
      alt: 'Proxy Pals Image 1'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/FIREWALLuProxy2.18-2.jpg',
      alt: 'Proxy Pals Image 2'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/FIREWALLuProxy2.18-3-1.jpg',
      alt: 'Proxy Pals Image 3'
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              Proxy Pals with uProxy
            </h1>
            
            <div className="mt-8 space-y-6 font-body-02">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="font-body-01">Feb. 18, 2016, 7:30 PM</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-body-01 text-gray-600">
                    Orbital
                    <br />
                    155 Rivington Street, NYC 10002
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <p className="text-gray-700">
                <a 
                  href="https://www.uproxy.org/"
                  className="text-red-600 hover:text-red-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uProxy
                </a>
                {' '}is a free extension for Chrome and Firefox that allows people all over the world to share 
                Internet connections to get past repressive censorship, and also powers part of the FIREWALL 
                experience. Come to learn more about how this technology works directly from the uProxy team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {images.map((image, index) => (
                <div key={index} className="flex flex-col">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="mt-2 text-sm text-gray-600">{image.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProxyPals; 