import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location_on.svg';

function OsloTaiwan() {
  const images = [
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/2022_FIREWALL_OFF_TW-02.png',
      alt: 'Oslo Taiwan Image 1'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/2022_FIREWALL_OFF_TW-04.png',
      alt: 'Oslo Taiwan Image 2'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/2022_FIREWALL_OFF_TW-07.png',
      alt: 'Oslo Taiwan Image 3'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/2022_FIREWALL_OFF_TW-08.png',
      alt: 'Oslo Taiwan Image 4'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/2022_FIREWALL_OFF_TW-05.png',
      alt: 'Oslo Taiwan Image 5'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/2022_FIREWALL_OFF_TW-06.jpg',
      alt: 'Oslo Taiwan Image 6'
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-2 md:px-8 pb-16 w-full bg-white max-md:pb-24">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full max-w-[1080px]">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px]">
          <div className="flex flex-col w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              Oslo Freedom Forum 2022 Taiwan Interactive Expo
            </h1>
            
            <div className="mt-8 space-y-6 font-body-02">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="text-xl">Nov. 3, 2022</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <a 
                    href="https://www.google.com/maps/place/Murray+Student+Center/@41.7206041,-73.9355196,18.25z/data=!4m5!3m4!1s0x89dd3e077b997377:0xf1e3a80dd614c1f0!8m2!3d41.721027!4d-73.9355703"
                    className="text-red-600 hover:text-red-800 text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Grand Hyatt Taipei
                  </a>
                  <p className="text-gray-600">
                    No.2, Songshou Rd, Xinyi District
                    <br />
                    Taipei City, Taiwan 110
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <p className="text-gray-700">
                A one-day pop-up at an interactive expo focusing on the intersection of human rights with technology, media and politics. 
                The event was part of the Oslo Freedom Forum 2022, Taiwan.
              </p>

              <p>
                <a 
                  href="https://oslofreedomforum.com/offtw22/"
                  className="text-red-600 hover:text-red-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about the event →
                </a>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8  font-body-02">
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

export default OsloTaiwan; 