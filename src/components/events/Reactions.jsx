import React from 'react';
import { ReactComponent as ClockIcon } from '../../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/location_on.svg';

function Reactions() {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/VBKO_Panel-2-of-4.jpg',
      description: "From left to right: Julia Hartmann, Ye Hui, Ingrid Fischer-Schreiber, Joyce Yu-Jean Lee, at the panel discussion Re(actions) to the Great Chinese Firewall. Photo by Claudia Romero."
    },
    {
      src: process.env.PUBLIC_URL + '/images/VBKO_Panel-4-of-4.jpg',
      description: "From left to right: Joyce Yu-Jean Lee, Ye Hui, Julia Hartmann, Ingrid Fischer-Schreiber. In the background: LOOK AT HER, Digital Prints, by Hui Ye, Artist. Photo by Claudia Romero."
    },
    {
      src: process.env.PUBLIC_URL + '/images/A6_Flyer_SearchforFeminism_FINAL-back.jpg',
      description: "Event flyer"
    }
  ];

  const panelists = [
    {
      name: "Joyce Yu-Jean Lee",
      role: "visual artist and founder of FIREWALL",
      link: "http://www.joyceyujeanlee.com/"
    },
    {
      name: "Julia Hartmann",
      role: "moderator and curator",
      link: "https://www.juliahartmann.at/"
    },
    {
      name: "Ingrid Fischer-Schreiber",
      role: "Vienna-based China Expert",
      link: "http://chinaculturedesk.com/en/about/"
    },
    {
      name: "Ye Hui",
      role: "visual artist",
      link: "https://yehui.org/"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              Re(actions) to the Great Chinese Firewall
            </h1>

            <div className="mt-8 space-y-6 font-body-02">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="font-body-01">Jan. 16, 2020, 6:00 PM</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <a 
                    href="https://www.vbkoe.org/"
                    className="text-red-600 hover:text-red-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VBKÖ – Vereinigung bildender Künstlerinnen Österreichs
                  </a>
                  <p className="font-body-01 text-gray-600">
                    (Austrian Association of Women Artists)
                    <br />
                    Maysedergasse 2 (4th floor)
                    <br />
                    1010 Vienna
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <p className="text-gray-700 font-body-02">
                Please join{' '}
                {panelists.map((panelist, index) => (
                  <span key={index}>
                    <a 
                      href={panelist.link}
                      className="text-red-600 hover:text-red-800 font-bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {panelist.name}
                    </a>
                    {' '}({panelist.role}){index < panelists.length - 1 ? ', ' : ' '}
                  </span>
                ))}
                in "Re(actions) to the Great Chinese Firewall", a panel discussion held in conjunction with the exhibition "Search for Feminism" at VBKÖ, Vienna, Austria.
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

export default Reactions; 