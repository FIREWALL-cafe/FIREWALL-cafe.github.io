import React from 'react';
import { ReactComponent as ClockIcon } from '../../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location_on.svg';

function ApexYouth() {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/FIREWALLApex-49.jpg',
      description: "Middle schoolers from PS 184 trying out the FIREWALL plugin"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FIREWALLApex-47.jpg',
      description: "Students interacting with FIREWALL"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FIREWALLApex-41.jpg',
      description: "Roundtable conversation with students from PS 184"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FIREWALLApex-25.jpg',
      description: "Artist Joyce Yu-Jean Lee talking to youths about internet censorship"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FIREWALLApex-22.jpg',
      description: "Artist Joyce Yu-Jean Lee talking to youths about internet censorship"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-4 md:px-8 pb-16 w-full bg-white max-md:pb-24">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full max-w-[1080px]">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px]">
          <div className="flex flex-col w-full">
            <h1 className="mt-10 text-[56px] font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              Apex for Youth After-School Field Trip
            </h1>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="text-xl">Feb. 25 & Mar. 3, 2016, 4-6 PM</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">
                    Chinatown Soup
                    <br />
                    16B Orchard Street, NYC, 10002
                  </p>
                </div>
              </div>

              <p className="text-gray-700">
                60 local middle schoolers from the{' '}
                <a 
                  href="http://www.apexforyouth.org/"
                  className="text-blue-600 hover:text-blue-800"
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
    </section>
  );
}

export default ApexYouth; 