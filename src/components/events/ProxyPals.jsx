import React from 'react';
import { ReactComponent as ClockIcon } from '../../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location_on.svg';

function ProxyPals() {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/FIREWALLuProxy2.18-1.jpg',
      description: "uProxy team leader explains how proxy technology works"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FIREWALLuProxy2.18-2.jpg',
      description: "Participants test out uProxy"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FIREWALLuProxy2.18-3-1.jpg',
      description: "Participants test out uProxy"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-4 md:px-8 pb-16 w-full bg-white max-md:pb-24">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full max-w-[1080px]">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px]">
          <div className="flex flex-col w-full">
            <h1 className="mt-10 md:text-[56px] text-3xl font-medium leading-[58px] text-black max-md:leading-[54px]">
              Proxy Pals: Trial by FIREwall
            </h1>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="text-xl">Feb. 25, 2016, 8 PM</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">
                    Chinatown Soup
                    <br />
                    16B Orchard Street
                    <br />
                    NYC, 10002
                  </p>
                </div>
              </div>

              <p className="text-gray-700">
                <a 
                  href="https://www.uproxy.org/"
                  className="text-blue-600 hover:text-blue-800"
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
                    alt={image.description}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="mt-2 text-sm text-gray-600">{image.description}</p>
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