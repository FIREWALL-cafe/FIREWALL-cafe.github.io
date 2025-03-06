import React from 'react';
import { ReactComponent as ClockIcon } from '../../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location_on.svg';

import Marymount1 from '../../assets/images/FIREWALLMarymount2.29-4_edit.jpg';
import Marymount2 from '../../assets/images/FIREWALLMarymount2.29-7.jpg';
import Marymount3 from '../../assets/images/FIREWALLMarymount2.29-9.jpg';
import Marymount4 from '../../assets/images/FIREWALLMarymount2.29-12.jpg';
import Marymount5 from '../../assets/images/FIREWALLMarymount2.29-2_edit.jpg';

function Marymount() {
  const images = [
    {
      src: Marymount1,
      description: "Students trying out FIREWALL"
    },
    {
      src: Marymount2,
      description: "Students ask questions about how censorship works in China"
    },
    {
      src: Marymount3,
      description: "Student discussion about censorship in China"
    },
    {
      src: Marymount4,
      description: "FIREWALL founder Joyce Yu-Jean Lee with students"
    },
    {
      src: Marymount5,
      description: "Students engage in FIREWALL search sessions"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              Marymount Manhattan "Digital Media & Society" Class Field Trip
            </h1>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="text-xl">Feb. 29, 2016, 8-9:30 PM</span>
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

              <p className="text-gray-700">
                16 college students from the "Digital Media & Society" communications course at{' '}
                <a 
                  href="http://www.mmm.edu/departments/communication-arts/"
                  className="text-blue-600 hover:text-blue-800"
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

export default Marymount;