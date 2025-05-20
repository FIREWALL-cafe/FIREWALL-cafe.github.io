import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location_on.svg';

function Inaugural() {
  const images = [
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/IMG_3948.jpg',
      alt: 'Inaugural Image 1'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/IMG_3814.jpg',
      alt: 'Inaugural Image 2'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/IMG_3774-1.jpg',
      alt: 'Inaugural Image 3'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/IMG_3864-2.jpg',
      alt: 'Inaugural Image 4'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/IMG_3960crop-1.jpeg',
      alt: 'Inaugural Image 5'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/IMG_4230crop.jpeg',
      alt: 'Inaugural Image 6'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/IMG_4212crop.jpeg',
      alt: 'Inaugural Image 7'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/IMG_4248.jpg',
      alt: 'Inaugural Image 8'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/IMG_3973.jpg',
      alt: 'Inaugural Image 9'
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-4 md:px-8 pb-16 w-full bg-white max-md:pb-24">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full max-w-[1080px]">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px]">
          <div className="flex flex-col w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              INAUGURAL New York 2016 Pop-up!
            </h1>
            
            <div className="mt-8 space-y-6 font-body-02">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <ClockIcon className="w-5 h-5" />
                  <div>
                    <p className="text-xl">Exhibition: Feb. 8 - Mar. 6, 2016</p>
                    <p className="text-gray-600">Artist Reception: Feb. 21, 2016, 6–9 PM</p>
                  </div>
                </div>
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

              <hr className="my-6 border-gray-200" />

              <div>
                <p>
                  Please join Franklin Furnace Fund, Asian Women Giving Circle and Lower Manhattan Cultural Council for the opening reception of FIREWALL Internet Cafe, created by 
                  Joyce Yu-Jean Lee in collaboration with Dan Phiffer.
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

export default Inaugural; 