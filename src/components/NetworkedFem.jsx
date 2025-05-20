import React from 'react';
import { ReactComponent as ClockIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location_on.svg';

function NetworkedFem() {
  const images = [
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/Feminism_panel_edit.jpg',
      alt: 'Networked Feminism Image 1'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/Feminism_audience_edit.jpg',
      alt: 'Networked Feminism Image 2'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/Feminism_Susan_edit.jpg',
      alt: 'Networked Feminism Image 3'
    },
    {
      src: 'https://firewall-cafe-space.nyc3.digitaloceanspaces.com/images/Feminism_Mingming_edit.jpg',
      alt: 'Networked Feminism Image 4'
    },
    {
      src: process.env.PUBLIC_URL + '/images/Feminism_Xintong_edit.jpg',
      description: "Xintong Liu, designer, social innovator, and feminist organizer."
    },
    {
      src: process.env.PUBLIC_URL + '/images/Feminism_Joyce_edit.jpg',
      description: "Joyce Yu-Jean Lee, Founder of FIREWALL"
    },
    {
      src: process.env.PUBLIC_URL + '/images/Feminism_Xintong_edit.jpg',
      description: "Xintong Liu, designer, social innovator, and feminist organizer."
    },
    {
      src: process.env.PUBLIC_URL + '/images/Feminism_Siodhbhra_edit.jpg',
      description: "Siodhbhra Parkin, Translator/Fellow of the Paul Tsai China Center at Yale Law School."
    },
    {
      src: process.env.PUBLIC_URL + '/images/Feminism_Barbara_edit.jpg',
      description: "Barbara Pollack, art critic, curator, and journalist"
    }
  ];

  const panelists = [
    {
      name: "Susan E. McGregor",
      role: "moderator, Assistant Director of the Tow Center for Digital Journalism & Assistant Professor at Columbia Journalism School",
      description: "where she teaches data journalism & information visualization, with research interests in digital security",
      links: [
        { url: "http://susanemcgregor.com/", text: "Personal Website" },
        { url: "http://www.journalism.columbia.edu/profile/365-susan-e-mcgregor/10", text: "Tow Center Profile" }
      ]
    },
    {
      name: "Lu Pin",
      role: "Program manager of Media Monitor for Women Network and chief editor of Feminist Voices",
      description: "a major leading feminist alternative media in China",
      links: [{ url: "http://www.genderwatch.cn/", text: "Gender Watch" }]
    },
    {
      name: "Mingming & Shitou",
      role: "queer filmmaker and artist collaborators/activists from Beijing, China"
    },
    {
      name: "Xintong Liu",
      role: "designer, social innovator, and feminist organizer",
      links: [{ url: "http://www.xintongliu.com/", text: "Website" }]
    },
    {
      name: "Siodhbhra Parkin",
      role: "translator/Fellow of the Paul Tsai China Center at Yale Law School"
    },
    {
      name: "Joyce Yu-Jean Lee",
      role: "visual artist and adjunct professor, creator of FIREWALL Internet Cafe, NYC",
      links: [{ url: "http://www.joyceyujeanlee.com/", text: "Website" }]
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              Networked Feminism in China
            </h1>
            
            <div className="mt-8 space-y-6 font-body-02">
              <div className="flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span className="font-body-01">Feb. 19, 2016, 7:30 PM</span>
              </div>

              <div className="space-y-4">
                <div className="flex gap-2">
                  <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                  <div>
                    <p className="font-body-01 text-gray-600">
                      Panel Discussion:
                      <br />
                      Orbital
                      <br />
                      155 Rivington Street
                      <br />
                      NYC, 10002
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <LocationIcon className="w-5 h-5 mt-1 text-gray-600 flex-shrink-0" />
                  <div>
                    <p className="font-body-01 text-gray-600">
                      Exhibition & Reception (5-7 PM):
                      <br />
                      Chinatown Soup
                      <br />
                      16B Orchard Street
                      <br />
                      NYC, 10002
                    </p>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-gray-200" />

              <p className="text-gray-700">
                Please join us for a FIREWALL exhibition viewing and reception from 5-7p at Chinatown Soup, 
                followed by a roundtable discussion about China's Young Feminist Activists, and the role of 
                the Internet in this movement at 7:30p at Orbital.
              </p>

              <p className="mb-8">
                <a 
                  href="https://www.youtube.com/watch?v=VnEtGXp3gmA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Panel VIDEO Recording
                </a>
              </p>

              <h3 className="text-2xl font-bold mb-4 underline">PANELISTS</h3>
              <div className="space-y-6 mb-8">
                {panelists.map((panelist, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-bold">
                      {panelist.name}
                    </h4>
                    <p className="mb-1">{panelist.role}</p>
                    {panelist.description && (
                      <p className="mb-1">{panelist.description}</p>
                    )}
                    {panelist.links && (
                      <div className="flex gap-2">
                        {panelist.links.map((link, linkIndex) => (
                          <a 
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}

export default NetworkedFem; 