import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location_on.svg';

function RampGallery() {
  const images = [
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/REDIRECT_1.jpg',
      alt: 'Ramp Gallery Image 1'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/REDIRECT_2.jpg',
      alt: 'Ramp Gallery Image 2'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/REDIRECT_3.jpg',
      alt: 'Ramp Gallery Image 3'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/REDIRECT_4.jpg',
      alt: 'Ramp Gallery Image 4'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/REDIRECT_5.jpg',
      alt: 'Ramp Gallery Image 5'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/REDIRECT_6.jpg',
      alt: 'Ramp Gallery Image 6'
    }
  ];

  const artists = [
    "Conrad Bakker",
    "Victoria Bradbury",
    "Ben Duvall",
    "Janna Dyk",
    "Benjamin Grosser",
    "Joyce Yu-Jean Lee",
    "Jorge Lucero"
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              Tiger Strikes Asteroid presents "REDIRECT"
            </h1>
            
            <div className="mt-8 space-y-6 font-body-02">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <ClockIcon className="w-5 h-5" />
                  <div>
                    <p className="text-xl">Exhibition: Jan. 24 - Feb. 24, 2020</p>
                    <p className="text-gray-600">Opening Reception: Jan. 24, 2020, 6-8 PM</p>
                    <p className="text-gray-600">Gallery Hours: Mon 2-5 PM, Tues 3-7 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="http://www.revolveavl.org/calendar/2020/1/24/revolve-hosts-reception-for-redirect-tsa-at-ramp-gallery"
                    className="text-red-600 hover:text-red-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RAMP Gallery
                  </a>
                  <br />
                  821 Riverside Drive
                  <br />
                  Asheville, NC
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <p className="text-gray-700">
                FIREWALL Pops-Up in a Group exhibition curated by Suzanne Dittenber featuring artists:
              </p>

              <div className="flex flex-wrap gap-2">
                {artists.map((artist, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {artist}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {images.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600 pl-4 border-l-2 border-red-600">{image.alt}</p>
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

export default RampGallery; 