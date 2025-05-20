import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location_on.svg';

function ApexYouth() {
  const images = [
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/FIREWALLApex-49.jpg',
      alt: 'Apex Youth Image 1'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/FIREWALLApex-47.jpg',
      alt: 'Apex Youth Image 2'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/FIREWALLApex-41.jpg',
      alt: 'Apex Youth Image 3'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/FIREWALLApex-25.jpg',
      alt: 'Apex Youth Image 4'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/FIREWALLApex-22.jpg',
      alt: 'Apex Youth Image 5'
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              Apex for Youth After-School Field Trip
            </h1>
            
            <div className="mt-8 space-y-6 font-body-02">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="font-body-01">Feb. 25 & Mar. 3, 2016, 4-6 PM</span>
              </div>

              <div className="flex gap-2 font-body-02">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-body-01 text-gray-600">
                    Chinatown Soup
                    <br />
                    16B Orchard Street, NYC, 10002
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <p className="mb-4 font-body-02">
                60 local middle schoolers from the{' '}
                <a 
                  href="http://www.apexforyouth.org/"
                  className="text-red-600 hover:text-red-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apex for Youth
                </a>
                {' '}program at PS 184 in the Two Trees, Chinatown neighborhood visit FIREWALL cafe to experience 
                the installation. Representatives from FIREWALL and uProxy led discussions about information 
                freedom and Internet censorship.
              </p>
            </div>

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
    </section>
  );
}

export default ApexYouth; 