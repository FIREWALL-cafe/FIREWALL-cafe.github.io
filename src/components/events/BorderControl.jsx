import React from 'react';

function BorderControl() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/1_FWC_NMC_-7626.jpg",
      description: "FIREWALL popup at New Media Caucus \"Border Control\" Symposium."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/2_NMC_CoCreatingBorder-7512.jpg",
      description: "From left to right: Nadav Assor, Patricia Villalobos Echeverría, Joyce Yu-Jean Lee, Maria del Carmen Montoya"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/3_FWC_NMC_-7601.jpg",
      description: "Participants engage with FIREWALL at Penny W. Stamps School Of Art & Design, University of Michigan."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/4_FWC_NMC_-7632.jpg",
      description: "Participants engage with FIREWALL at Penny W. Stamps School Of Art & Design, University of Michigan."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/5_FWC_NMC_-7615.jpg",
      description: "Participants engage with FIREWALL at Penny W. Stamps School Of Art & Design, University of Michigan."
    }
  ];

  const panelists = [
    {
      name: "Nadav Assor",
      role: "Moderator",
      title: "Professor of Expanded Media at Connecticut College's and Associate Director of the Ammerman Center for Arts and Technology",
      url: "http://www.nadassor.net/"
    },
    {
      name: "Patricia Villalobos Echeverría",
      role: "Panelist",
      title: "Professor of Print Media, Western Michigan University",
      url: "https://www.patriciavillalobos.com/"
    },
    {
      name: "Joyce Yu-Jean Lee",
      role: "Panelist",
      title: "Asst. Professor of Digital Media at Marist College, creator of FIREWALL Internet Cafe",
      url: "http://www.joyceyujeanlee.com/"
    },
    {
      name: "Maria del Carmen Montoya",
      role: "Panelist",
      title: "Asst. Professor of Sculpture and Spatial Practices at Corcoran School of Arts and Design, George Washington University",
      url: "https://corcoran.gwu.edu/maria-del-carmen-montoya"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
                New Media Caucus "Border Control" Symposium
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Sep. 21, 2019, 10:45 AM to 12:15 PM
            </h2>

            <div className="mt-8 space-y-6">
              <p className="text-gray-700">
                Location: Univ. of Michigan Penny Stamps Gallery, Penny W. Stamps School Of Art & Design
                <br />
                2000 Bonisteel Boulevard, Ann Arbor, MI 48109
              </p>

              <p className="italic">
                Please join Nadav Assor, Patricia Villalobos Echeverría, and Maria del Carmen Montoya, 
                in a panel discussion with Joyce Yu-Jean Lee, creator of FIREWALL Internet Cafe, 
                as she discusses FIREWALL, internet censorship, and virtual borders.
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-4 underline">PANELISTS</h3>
                <div className="space-y-4">
                  {panelists.map((panelist, index) => (
                    <div key={index} className="pl-4 border-l-2 border-gray-200">
                      <a 
                        href={panelist.url}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {panelist.name}
                      </a>
                      <span className="text-gray-600"> - {panelist.role}</span>
                      <p className="text-sm text-gray-700 mt-1">{panelist.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {images.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <img 
                      src={image.src} 
                      alt={image.description}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600 italic">
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

export default BorderControl; 