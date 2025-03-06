import React from 'react';
import { ReactComponent as ClockIcon } from '../../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location_on.svg';

function HongKongNotFound() {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/Firewall_HK_1920.jpg',
      description: "Participants keying search terms into FIREWALL dual-search browser"
    },
    {
      src: process.env.PUBLIC_URL + '/images/Firewall_HK5_1920-1.jpg',
      description: "Artist Joyce Yu-Jean Lee explains the concept of FIREWALL to participants"
    },
    {
      src: process.env.PUBLIC_URL + '/images/Firewall_HK6_1920-950x629-1.jpg',
      description: "Discussion group after \"Not Found\", a performance by artist Ying Ting"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              "NOT FOUND" in Hong Kong
            </h1>
            
            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <ClockIcon className="w-5 h-5" />
                  <div>
                    <p className="text-xl">Exhibition: Jan. 12-23, 2019</p>
                    <p className="text-gray-600 pl-7">Opening Reception: Jan. 12, 2019, 1-8 PM</p>
                    <p className="text-gray-600 pl-7">Gallery Hours: Tues-Sun, 1-8 PM</p>
                    <p className="text-gray-600 pl-7">Ying Ting Performances: Jan. 12 & 13, 3 PM & 7 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <a 
                    href="https://www.facebook.com/greenwaveart/photos/a.934648293318071/1977824189000471/?type=3&theater"
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Center for Community Cultural Development – Green Wave Art
                  </a>
                  <br />
                  404 Shanghai Street
                  <br />
                  Yau Ma Tei, Kowloon
                </div>
              </div>

              <p className="text-gray-700">
                Two-person exhibition with artist, Ying Ting; curated by Iago
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

export default HongKongNotFound; 