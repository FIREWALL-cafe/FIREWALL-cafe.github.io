import React from 'react';

function NetworkedFem() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/Feminism_panel_edit.jpg",
      description: "Lu Pin, Program manager of Media Monitor for Women Network and chief editor of Feminist Voices, speaks in front of audience"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/Feminism_audience_edit.jpg",
      description: "Audience at the panel discussion 'Networked Feminism in China', Chinatown Soup, NYC."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/Feminism_Susan_edit.jpg",
      description: "Susan E. McGregor, panel moderator, Assistant Director of the Tow Center for Digital Journalism & Assistant Professor at Columbia Journalism School"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/Feminism_Mingming_edit.jpg",
      description: "Shitou, queer filmmaker and activist from Beijing, China."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/Feminism_Shitou_edit.jpg",
      description: "Mingming, queer filmmaker and activist from Beijing, China."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/Feminism_Joyce_edit.jpg",
      description: "Joyce Yu-Jean Lee, Founder of FIREWALL"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/Feminism_Xintong_edit.jpg",
      description: "Xintong Liu, designer, social innovator, and feminist organizer."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/Feminism_Siodhbhra_edit.jpg",
      description: "Siodhbhra Parkin, Translator/Fellow of the Paul Tsai China Center at Yale Law School."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/Feminism_Barbara_edit.jpg",
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
            <div className="text-zinc-400">Feminism</div>
            
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
                Networked Feminism in China
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Feb. 19, 2016, 7:30 PM
              </h2>

            <div className="mt-8">
              <p className="mb-4">
                Location: Orbital, 155 Rivington Street, NYC 10002
              </p>

              <p className="mb-4">
                Please join us for a FIREWALL exhibition viewing and reception from 5-7p at Chinatown Soup, 
                16B Orchard Street, NYC 10002, followed by a roundtable discussion about China's Young 
                Feminist Activists, and the role of the Internet in this movement at 7:30p at Orbital.
              </p>

              <p className="mb-8">
                <a 
                  href="https://www.youtube.com/watch?v=VnEtGXp3gmA"
                  className="text-blue-600 hover:text-blue-800"
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
                            className="text-blue-600 hover:text-blue-800"
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