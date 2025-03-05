import React from 'react';

function CreativeHack() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2016/06/FIREWALLCreativeHactivism2.19-8.jpg",
      description: "Panelists Joyce Yu-Jean Lee, Jason Q. Ng, Sisi Wei, Dan Phiffer, and Josh B"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2016/06/FIREWALLCreativeHactivism2.19-5.jpg",
      description: "Jason speaks about words blocked on Weibo"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2016/06/FIREWALLCreativeHactivism2.19-4.jpg",
      description: "Dan discusses coding and designing FIREWALL"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2016/06/FIREWALLCreativeHactivism2.19-2.jpg",
      description: "Panelists engage the FIREWALL Installation"
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
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              Creative Hacktivism Roundtable
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Feb. 26, 2016, 7:30 PM
            </h2>

            <div className="mt-8">
              <p className="mb-4">
                Location: Orbital, 155 Rivington Street, NYC 10002
              </p>

              <p className="mb-4 italic">
                Discussion about Internet censorship in China and international hacktivism in its many creative forms: 
                constructing virtual networks; implementing collateral freedom; creating research, journalism, 
                infographics, development, and design.
              </p>

              <p className="mb-8">
                <a 
                  href="https://www.youtube.com/watch?v=PMj4aQcighU"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Panel VIDEO Recording
                </a>
              </p>

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
                          className="text-blue-600 hover:text-blue-800 mr-3"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
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

export default CreativeHack; 