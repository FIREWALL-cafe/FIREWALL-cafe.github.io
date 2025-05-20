import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location_on.svg';

function OffSeventeen() {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/FirewallOFFoslo6_1920.jpg',
      description: "LED lights released in the Spikersuppa Square foundtain outside FIREWALL"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FirewallOFFoslo3_1920.jpg',
      description: "Free wi-fi and Starbucks inside tent"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FirewallOFFoslo5_1920.jpg',
      description: "Dan Phiffer & activist Maria Toorpakai Wazir search Pakistani conspiracy theory, \"Is Donald Trump Pakistani?\""
    },
    {
      src: process.env.PUBLIC_URL + '/images/FirewallOFFoslo1_1920.jpg',
      description: "Searching Chinese political dissidents with Oslo Freedom Forum founder, Thor Halvorssen"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FirewallOFFoslo_1920.jpg',
      description: "Inside pop-up at Spikersuppa Square, Oslo, Norway"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FirewallOFFoslo5_1920-1.jpg',
      description: "FIREWALL pop-up in Spikersuppa Square, Oslo, Norway during Oslo Freedom Forum 2017"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              2017 Oslo Freedom Forum Pop-Up
            </h1>
            
            <div className="mt-8 space-y-6 font-body-02">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="font-body-01">May 20-24, 2017</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-body-01 text-gray-600">
                    Spikersuppa Square
                    <br />
                    Oslo, Norway
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <p>
                Learn firsthand about online censorship through FIREWALL at the{' '}
                <a 
                  href="https://oslofreedomforum.com/events/2017-oslo-freedom-forum/program"
                  className="text-red-600 hover:text-red-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oslo Freedom Forum
                </a>
                . This interactive pop-up internet cafe lets you experience how the 
                Great Firewall operates in China versus Google in Norway. The exhibit 
                will be open all day to the public in the park during the run of the 
                conference. Stop by for coffee and a search session!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {images.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <img 
                      src={image.src} 
                      alt={image.description}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600 italic pl-4 border-l-2 border-red-600">
                      {image.description}
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

export default OffSeventeen; 