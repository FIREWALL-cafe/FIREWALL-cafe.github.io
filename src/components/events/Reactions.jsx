import React from 'react';

function Reactions() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/VBKO_Panel-2-of-4.jpg",
      description: "From left to right: Julia Hartmann, Ye Hui, Ingrid Fischer-Schreiber, Joyce Yu-Jean Lee, at the panel discussion Re(actions) to the Great Chinese Firewall. Photo by Claudia Romero."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/VBKO_Panel-4-of-4.jpg",
      description: "From left to right: Joyce Yu-Jean Lee, Ye Hui, Julia Hartmann, Ingrid Fischer-Schreiber. In the background: LOOK AT HER, Digital Prints, by Hui Ye, Artist. Photo by Claudia Romero."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/A6_Flyer_SearchforFeminism_FINAL-back.jpg",
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
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              Re(actions) to the Great Chinese Firewall
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Jan. 16, 2020, 6:00 PM
            </h2>

            <div className="mt-8">
              <p className="mb-4">
                Location:{' '}
                <a 
                  href="https://www.vbkoe.org/"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VBKÖ – Vereinigung bildender Künstlerinnen Österreichs (Austrian Association of Women Artists)
                </a>
                <br />
                Maysedergasse 2 (4th floor), 1010 Vienna
              </p>

              <p className="mb-4">
                Please join{' '}
                {panelists.map((panelist, index) => (
                  <span key={index}>
                    <a 
                      href={panelist.link}
                      className="text-blue-600 hover:text-blue-800 font-bold"
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

export default Reactions; 