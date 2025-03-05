import React from 'react';

function GroupRvcc() {
  const images = [
    {
      src: "https://firewallcafe.com/wp-content/uploads/2022/11/2022_FIREWALL_RVC-05.png",
      description: "From left to right: Joyce Yu-Jean Lee, artist and founder of FIREWALL, Lydia Grey, curator of 'The Future is'."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2022/11/2022_FIREWALL_RVC-04.png",
      description: "FIREWALL Pop-up at RVCC Art Gallery."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2022/11/2022_FIREWALL_RVC-07.png",
      description: "A group of students engaging in FIREWALL searching and discussing the results."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2022/11/2022_FIREWALL_RVC-08.png",
      description: "A group of students engaging in FIREWALL searching and discussing the results."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2022/11/2022_FIREWALL_RVC-06.png",
      description: "A visitor being surprised by the censored results on Baidu."
    },
    {
      src: "https://firewallcafe.com/wp-content/uploads/2022/11/2022_FIREWALL_RVC-01.png",
      description: "An artist sharing by Joyce Yu-Jean Lee about FIREWALL and internet censorship to a full room at Raritan Valley Community College."
    }
  ];

  const artists = [
    "Alisha B Wormsley",
    "Jim Jeffers",
    "Jonathan Leiter",
    "Joyce Yu-Jean Lee",
    "Lauren Rosenthal McManus",
    "Paul Rucker",
    "Rebekah Taussig",
    "Sonia Garcia",
    "Vivian Vassar",
    "Lydia Grey"
  ];

  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 text-5xl font-medium leading-[58px] text-black max-md:text-4xl max-md:leading-[54px]">
              FIREWALL Pop-up Group Show in RVCC
            </h1>
            
            <h2 className="mt-6 text-2xl">
              Aug. 31 - Sep. 30, 2022
            </h2>

            <div className="mt-8">
              <p className="mb-4">
                Location:{' '}
                <a 
                  href="https://www.google.com/maps/place/Murray+Student+Center/@41.7206041,-73.9355196,18.25z/data=!4m5!3m4!1s0x89dd3e077b997377:0xf1e3a80dd614c1f0!8m2!3d41.721027!4d-73.9355703"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Raritan Valley Community College Art Gallery
                </a>
                <br />
                118 Lamington Road, Branchburg, NJ 08876
              </p>

              <p className="mb-8">
                FIREWALL Pops-Up in a Group exhibition, <em>The Future is</em>, curated by Lydia Grey Barnes 
                and coordinated by Darren McManus, featuring artists:
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

export default GroupRvcc; 