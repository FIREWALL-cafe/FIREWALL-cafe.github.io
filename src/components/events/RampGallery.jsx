import React from 'react';

function RampGallery() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/REDIRECT_1.jpg",
      description: "in conversation with a FIREWALL participant"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/REDIRECT_2.jpg",
      description: "FIREWALL Pop-up at Ramp Gallery in Asheville, NC"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/REDIRECT_3.jpg",
      description: "Artist talks moderated by Lei Han with (left to right) Janna Dyk, Joyce, Victoria Bradbury and Ben Duvall"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/REDIRECT_4.jpg",
      description: "Artist talks moderated by Lei Han, Director of New Media program at University of North Carolina, Asheville"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/REDIRECT_5.jpg",
      description: "Exhibiting artists (left to right): Ben Duvall, Janna Dyk, Joyce Yu-Jean Lee, Suzanne Dittenber (curator) and Victoria Bradbury"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/REDIRECT_6.jpg",
      description: "FIREWALL Pop-up at Ramp Gallery"
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2020/01/REDIRECT_7.jpg",
      description: "Gallery installation view"
    }
  ];

  const artists = [
    "Conrad Bakker",
    "Victoria Bradbury",
    "Ben Duvall",
    "Janna Dyk",
    "Benjamin Grosser",
    "Joyce Yu-Jean Lee",
    "Jorge Lucero"
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              Tiger Strikes Asteroid presents "REDIRECT"
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Jan. 24 - Feb. 24, 2020
            </h2>

            <div className="mt-8">
              <p className="mb-4">
                Location:{' '}
                <a 
                  href="http://www.revolveavl.org/calendar/2020/1/24/revolve-hosts-reception-for-redirect-tsa-at-ramp-gallery"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RAMP Gallery, 821 Riverside Drive, Asheville, NC
                </a>
              </p>

              <p className="mb-6">
                FIREWALL Pops-Up in a Group exhibition curated by Suzanne Dittenber featuring artists:
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {artists.map((artist, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {artist}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-8">
                <p>
                  <span className="underline">Opening</span>: Fri, Jan 24th, 2020 6-8pm
                </p>
                <p>
                  <span className="underline">On view</span>: 2-5pm Mon and 3-7pm Tues, Jan. 24 – Feb. 24, 2020
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
      </div>
    </section>
  );
}

export default RampGallery; 