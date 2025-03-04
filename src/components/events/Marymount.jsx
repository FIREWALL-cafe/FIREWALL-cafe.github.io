import React from 'react';

function Marymount() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/FIREWALLMarymount2.29-4_edit.jpg",
      description: "Students trying out FIREWALL"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/FIREWALLMarymount2.29-7.jpg",
      description: "Students ask questions about how censorship works in China"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/FIREWALLMarymount2.29-9.jpg",
      description: "Student discussion about censorship in China"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/FIREWALLMarymount2.29-12.jpg",
      description: "FIREWALL founder Joyce Yu-Jean Lee with students"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2019/09/FIREWALLMarymount2.29-2_edit.jpg",
      description: "Students engage in FIREWALL search sessions"
    }
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-zinc-400">Marymount Manhattan</div>
            
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              Marymount Manhattan "Digital Media & Society" Class Field Trip
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Feb. 29, 2016, 8-9:30 PM
            </h2>

            <div className="mt-8">
              <p className="mb-4">
                Location: Chinatown Soup, 16B Orchard Street, NYC, 10002
              </p>

              <p className="mb-4">
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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

export default Marymount;