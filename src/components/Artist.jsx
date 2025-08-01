import React from 'react';
import { Link } from 'react-router-dom';
import ArtistHeadshot from '../assets/images/joyce-BW-450x450.jpg';

function Artist() {
  return (
    <section className="flex overflow-hidden flex-col w-full bg-white py-16">
      <div className="container mx-auto px-2 md:px-4">
        <div className="font-display-01 font-bitmap-song ipad-portrait:font-display-03 flex flex-col">
          <h2 className="leading-tight">
            About Joyce
          </h2>
          <div className="mt-2 leading-tight text-red-600 tracking-[2.16px]">
            关于乔伊斯
          </div>
          <p className="mt-2 text-xl sm:text-2xl text-zinc-400">Artist</p>
        </div>
        <div className="flex flex-col gap-10 mt-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0 w-full max-w-sm md:order-2 order-1">
              <Link to="http://www.joyceyujeanlee.com/">
                <img src={ArtistHeadshot} alt="Joyce Yu-Jean Lee" className="w-full h-auto object-cover" />
              </Link>
            </div>
            <div className="flex-1 mb-4 font-body-01 md:order-1 order-2">
              Motivated by a desire to challenge both state and corporate censorship, NYC-based artist Joyce Yu-Jean Lee founded the FIREWALL Cafe in 2013. This digital art project uses a participatory approach to examine internet visual culture, encouraging users to actively engage and see for themselves how censorship shapes their understanding of the world.
            </div>
          </div>
          <div className="w-full">
            <p className="mb-4 font-body-02">
              Lee's journey into this project was catalyzed by her experience abroad in 2011, when she coordinated an artist residency program in CaoChangDi, Beijing, China.
              There, she helped a dozen North American artists navigate the complexities of Chinese internet access, providing VPN software and advice on circumventing the "Great Firewall."
              This experience inspired her to creatively show online audiences how the internet manifests differently across various parts of the world demonstrate to netizens the varied appearances of the internet across different global regions.
              Through FIREWALL Internet Cafe, Lee aims to make these disparities visible and provoke thoughtful discussion on Internet freedom and censorship.
            </p>
            <p className="mb-4 font-body-02">
              Lee's art practice spans video, glass, installation, and performance.
              She creates tech-based artwork that scrutinizes how visual culture and mass media influence our understanding of truth and shape perceptions of the "other."
              Her work has been showcased in the United States and internationally, and has attracted attention from major media outlets, including The New York Times, The Washington Post, Huffington Post, NPR, Hyperallergic, and ArtCritical.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Artist;