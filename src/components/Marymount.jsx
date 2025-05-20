import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location_on.svg';

function Marymount() {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/FIREWALLMarymount2.29-4_edit.jpg',
      description: "Students trying out FIREWALL"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FIREWALLMarymount2.29-7.jpg',
      description: "Students ask questions about how censorship works in China"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FIREWALLMarymount2.29-9.jpg',
      description: "Student discussion about censorship in China"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FIREWALLMarymount2.29-12.jpg',
      description: "FIREWALL founder Joyce Yu-Jean Lee with students"
    },
    {
      src: process.env.PUBLIC_URL + '/images/FIREWALLMarymount2.29-2_edit.jpg',
      description: "Students engage in FIREWALL search sessions"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              Marymount Manhattan "Digital Media & Society" Class Field Trip
            </h1>

            <div className="mt-8 space-y-6 font-body-02">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="text-xl">Feb. 29, 2016, 8-9:30 PM</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 font-body-02">
                    Chinatown Soup
                    <br />
                    16B Orchard Street
                    <br />
                    NYC, 10002
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <p className="text-gray-700 font-body-02">
                16 college students from the "Digital Media & Society" communications course at{' '}
                <a 
                  href="http://www.mmm.edu/departments/communication-arts/"
                  className="text-red-600 hover:text-red-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marymount Manhattan College
                </a>{' '}
                visit FIREWALL. Students study "Technology, Content and Curation" as a theme for the field trip, 
                discussing how the advent and development of the Internet has transformed the ways that people create, 
                distribute and consume culture and information. The professor and a FIREWALL representative led discussion 
                about collective intelligence, user-generated content, governmental and corporate content filtering.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {images.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <img 
                      src={image.src} 
                      alt={image.description}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600 italic pl-4 border-l-2 border-red-600">{image.description}</p>
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

export default Marymount;