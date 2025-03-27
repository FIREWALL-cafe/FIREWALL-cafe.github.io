import React from 'react';
import { ReactComponent as ClockIcon } from '../../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location_on.svg';

function Megha() {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/FWC_POU_1.jpg',
      description: 'Students search for "Beyonce" in the FIREWALL plugin.',
    },
    {
      src: process.env.PUBLIC_URL + '/images/FWC_POU_2.jpg',
      description: "A search term censored by Baidu displays limited image results."
    },
    {
      src: process.env.PUBLIC_URL + '/images/FWC_POU_3.jpg',
      description: "Students interact with the FIREWALL Pop-up at Marist College, Poughkeepsie, NY."
    },
    {
      src: process.env.PUBLIC_URL + '/images/FWC_POU_4.jpg',
      description: "Buzzfeed correspondent, Megha Rajagopalan delivering her lecture on China and the Rise of AI and Mass Surveillance Technology."
    },
    {
      src: process.env.PUBLIC_URL + '/images/FWC_POU_5.jpg',
      description: 'Attendees at "China and the Rise of AI and Mass Surveillance Technology", a lecture by Megha Rajagopalan at Fusco Hall, Marist College, Poughkeepsie, NY.',
    },
    {
      src: process.env.PUBLIC_URL + '/images/FWC_POU_6.jpg',
      description: "A student poses a question to Megha Rajagopalan after the lecture."
    },
    {
      src: process.env.PUBLIC_URL + '/images/FWC_POU_7.jpg',
      description: "A student poses a question to Megha Rajagopalan after the lecture."
    },
    {
      src: process.env.PUBLIC_URL + '/images/FWC_POU_8.jpg',
      description: "From left to right: Joyce Yu-Jean Lee, artist and founder of FIREWALL, Megha Rajagopalan, Buzzfeed Correspondent, Peter Behr, Web Developer for FIREWALL."
    },
    {
      src: process.env.PUBLIC_URL + '/images/FWC_POU_9.jpg',
      description: "FIREWALL badges, stickers, and postcards."
    },
    {
      src: process.env.PUBLIC_URL + '/images/FWC_POU_10.jpg',
      description: "FIREWALL Pop-up stations at Marist College, Poughkeepsie, NY."
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 md:text-[56px] text-3xl font-medium leading-[58px] text-black">
              FIREWALL Pop-up with "Inside China's Surveillance State", a Lecture by Megha Rajagopalan!
            </h1>
            
            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <ClockIcon className="w-5 h-5" />
                  <span className="text-xl">Exhibition: Feb. 26, 2020, 5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 pl-7">
                  <span className="text-xl">Lecture: Feb. 26, 2020, 6:30 PM - 8:00 PM</span>
                </div>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <a 
                    href="https://www.google.com/maps/place/Murray+Student+Center/@41.7206041,-73.9355196,18.25z/data=!4m5!3m4!1s0x89dd3e077b997377:0xf1e3a80dd614c1f0!8m2!3d41.721027!4d-73.9355703"
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fusco Recital Hall, Murray Student Center, Marist College
                  </a>
                  <br />
                  3399 North Rd
                  <br />
                  Poughkeepsie, NY 12601
                </div>
              </div>

              <p className="mb-4">
                Megha Rajagopalan, an international correspondent for Buzzfeed News who has reported on digital rights from Southeast Asia to the Persian Gulf, will share her work documenting the rise of state surveillance from China's campaign targeting its Muslim minorities to cameras on the streets of New York City. How do we redefine public and private spaces at a time when we are digitally monitored without consent?
              </p>

              <p className="mb-4">
                This lecture is sponsored by Marist College Strategic Initiative Funding (SPPAC) and will be presented together with FIREWALL, a pop-up Internet café by Assistant Professor of Art & Digital Media, Joyce Yu-Jean Lee. Attendees will simultaneously surf the web in Poughkeepsie and China to compare the image results side by side.
              </p>

              <p className="mb-8">
                <em>Marist Circle</em> article: <a href="https://www.maristcircle.com/home/2020/3/3/firewall-internet-cafe-gives-glimpse-of-repressive-chinese-censorship" 
                   target="_blank" 
                   rel="noopener"
                   className="text-blue-600 hover:text-blue-800">
                  <em>FIREWALL Internet Cafe Gives Glimpse of Repressive Chinese Censorship</em>
                </a>
              </p>
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
    </section>
  );
}

export default Megha;