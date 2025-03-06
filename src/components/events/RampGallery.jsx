import React from 'react';
import { ReactComponent as ClockIcon } from '../../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location_on.svg';

import RampGallery1 from '../../assets/images/REDIRECT_1.jpg';
import RampGallery2 from '../../assets/images/REDIRECT_2.jpg';
import RampGallery3 from '../../assets/images/REDIRECT_3.jpg';
import RampGallery4 from '../../assets/images/REDIRECT_4.jpg';
import RampGallery5 from '../../assets/images/REDIRECT_5.jpg';
import RampGallery6 from '../../assets/images/REDIRECT_6.jpg';
function RampGallery() {
  const images = [
    {
      src: RampGallery1,
      description: "in conversation with a FIREWALL participant"
    },
    {
      src: RampGallery2,
      description: "FIREWALL Pop-up at Ramp Gallery in Asheville, NC"
    },
    {
      src: RampGallery3,
      description: "Artist talks moderated by Lei Han with (left to right) Janna Dyk, Joyce, Victoria Bradbury and Ben Duvall"
    },
    {
      src: RampGallery4,
      description: "Artist talks moderated by Lei Han, Director of New Media program at University of North Carolina, Asheville"
    },
    {
      src: RampGallery5,
      description: "Exhibiting artists (left to right): Ben Duvall, Janna Dyk, Joyce Yu-Jean Lee, Suzanne Dittenber (curator) and Victoria Bradbury"
    },
    {
      src: RampGallery6,
      description: "FIREWALL Pop-up at Ramp Gallery"
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
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              Tiger Strikes Asteroid presents "REDIRECT"
            </h1>
            
            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <ClockIcon className="w-5 h-5" />
                  <div>
                    <p className="text-xl">Exhibition: Jan. 24 - Feb. 24, 2020</p>
                    <p className="text-gray-600 pl-7">Opening Reception: Jan. 24, 2020, 6-8 PM</p>
                    <p className="text-gray-600 pl-7">Gallery Hours: Mon 2-5 PM, Tues 3-7 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <a 
                    href="http://www.revolveavl.org/calendar/2020/1/24/revolve-hosts-reception-for-redirect-tsa-at-ramp-gallery"
                    className="text-blue-600 hover:text-blue-800"
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
      </div>
    </section>
  );
}

export default RampGallery; 