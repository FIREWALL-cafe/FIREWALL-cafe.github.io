import React from 'react';
import { ReactComponent as ClockIcon } from '../../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location_on.svg';

function OffNyc() {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/OFF17_1-1.jpg',
      description: "From left to right: Teng Biao, human rights activist and lawyer, Joyce Yu-Jean Lee, founder of FIREWALL, Lu Miaoqing, human rights laywer"
    },
    {
      src: process.env.PUBLIC_URL + '/images/OFF17_2-1.jpg',
      description: "A search session for \"Xi Jinping Winnie the Pooh\""
    },
    {
      src: process.env.PUBLIC_URL + '/images/OFF17_3-1.jpg',
      description: "Professor Joyce Yu-Jean Lee with students from New Jersey City University"
    },
    {
      src: process.env.PUBLIC_URL + '/images/OFF17_4-1.jpg',
      description: "A search station at Alice Tully Hall, Lincoln Center"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              2017 Oslo Freedom Forum New York Interactive Expo
            </h1>
            
            <div className="mt-8 space-y-6 font-body-02">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="font-body-01">Sep. 19, 2017, 9 AM-5 PM</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-body-01 text-gray-600">
                    Alice Tully Hall
                    <br />
                    Lincoln Center
                    <br />
                    NYC
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <p className="mb-4">
                A one-day "Search Session" at an Interactive Expo focusing on the 
                intersection of human rights with technology, media and politics. 
                Event held concurrent with the UN General Assembly in NYC.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {images.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <img 
                      src={image.src} 
                      alt={image.description}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600 italic">{image.description}</p>
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

export default OffNyc; 