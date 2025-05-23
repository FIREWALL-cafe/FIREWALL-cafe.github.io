import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location_on.svg';

function CreativeHack() {
  const images = [
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/FIREWALLCreativeHactivism2.19-8.jpg',
      alt: 'Creative Hack Image 1'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/FIREWALLCreativeHactivism2.19-5.jpg',
      alt: 'Creative Hack Image 2'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/FIREWALLCreativeHactivism2.19-4.jpg',
      alt: 'Creative Hack Image 3'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/FIREWALLCreativeHactivism2.19-2.jpg',
      alt: 'Creative Hack Image 4'
    }
  ];

  const panelists = [
    {
      name: "Jason Q. Ng",
      description: "Research Fellow at the University of Toronto's Citizen Lab; Lecturer, Columbia University SIPA; and a data analyst at Tumblr. He is the author of Blocked on Weibo and a research consultant at China Digital Times where he develops censorship monitoring.",
      links: [
        { text: "Citizen Lab", url: "https://citizenlab.org/2015/07/tracking-censorship-on-wechat-public-accounts-platform/" },
        { text: "Blocked on Weibo", url: "https://blockedonweibo.tumblr.com/" }
      ]
    },
    {
      name: "Dan Phiffer",
      description: "programmer and artist based in Brooklyn working on projects that use computer networks as a raw material. Dan collaborated to build the technology that runs FIREWALL Cafe. He is a Research Fellow at Columbia's Tow Center for Digital Journalism and works at Mapzen.",
      links: [{ text: "Website", url: "http://phiffer.org" }]
    },
    {
      name: "Sisi Wei",
      description: "an investigative journalist, designer and developer at ProPublica. Her work has ranged from investigating which U.S. colleges saddle students with debt to monitoring how often China blocks international news outlets.",
      links: [
        { text: "U.S. colleges project", url: "https://projects.propublica.org/colleges/" },
        { text: "China blocks monitoring", url: "https://projects.propublica.org/firewall/" }
      ]
    },
    {
      name: "Josh B.",
      description: "works closely with the founders of GreatFire.org, the organization behind FreeBrowser, as well as on uProxy, a censorship circumvention tool which also powers part of the FIREWALL experience. Previously, he was a senior software engineer for Lantern.",
      links: [
        { text: "GreatFire.org", url: "https://en.greatfire.org/" },
        { text: "FreeBrowser", url: "https://freebrowser.org/en/" },
        { text: "uProxy", url: "https://www.uproxy.org/" },
        { text: "Lantern", url: "https://getlantern.org/" }
      ]
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-04 font-bitmap-song">
              Creative Hacktivism Roundtable
            </h1>

            <div className="mt-8 space-y-6 font-body-02">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="font-body-01">Feb. 26, 2016, 7:30 PM</span>
              </div>

              <div className="flex gap-2">
                <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-body-01 text-gray-600">
                    Orbital
                    <br />
                    155 Rivington Street, NYC 10002
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <p className="mb-4 italic">
                Discussion about Internet censorship in China and international hacktivism in its many creative forms: 
                constructing virtual networks; implementing collateral freedom; creating research, journalism, 
                infographics, development, and design.
              </p>

              <p className="mb-4">
                <a 
                  href="https://www.youtube.com/watch?v=PMj4aQcighU"
                  className="text-red-600 hover:text-red-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Panel VIDEO Recording
                </a>
              </p>

              <div>
                <h3 className="text-2xl font-bold mb-4 underline">PANELISTS</h3>
                <div className="space-y-6">
                  {panelists.map((panelist, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-bold mb-2">{panelist.name}</h4>
                      <p className="mb-2">{panelist.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {panelist.links.map((link, linkIndex) => (
                          <a 
                            key={linkIndex}
                            href={link.url}
                            className="text-red-600 hover:text-red-800 mr-3"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {images.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
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

export default CreativeHack; 