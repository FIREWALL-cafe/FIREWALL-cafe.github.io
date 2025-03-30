import React from 'react';
import { Link } from 'react-router-dom';
import ArtistHeadshot from '../assets/images/joyce-BW-450x450.jpg';

function Artist() {
  return (
    <section className="flex overflow-hidden flex-col w-full bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="font-display-01 ipad-portrait:font-display-03 flex flex-col">
          <h2 className="leading-tight">
            About Joyce
          </h2>
          <div className="mt-2 leading-tight text-red-600 tracking-[2.16px]">
            关于乔伊斯
          </div>
          <p className="mt-2 text-xl sm:text-2xl text-zinc-400">Artist</p>
        </div>
        <div className="flex flex-wrap gap-10 mt-10">
          <div className="flex-1 basis-[300px] max-w-2xl">
            <p className="text-lg lg:text-xl mb-4">
              Motivated by a desire to challenge both state and corporate censorship, NYC-based artist Joyce Yu-Jean Lee founded the FIREWALL Cafe in 2013. This digital art project uses a participatory approach to examine internet visual culture, encouraging users to actively engage and see for themselves how censorship shapes their understanding of the world.
            </p>
            <p className="text-lg lg:text-xl mb-4">
              Lee's journey into this project was catalyzed by her experience abroad in 2011, when she coordinated an artist residency program in CaoChangDi, Beijing, China.
              There, she helped a dozen North American artists navigate the complexities of Chinese internet access, providing VPN software and advice on circumventing the "Great Firewall."
              This experience inspired her to creatively show online audiences how the internet manifests differently across various parts of the world demonstrate to netizens the varied appearances of the internet across different global regions.
              Through FIREWALL Internet Cafe, Lee aims to make these disparities visible and provoke thoughtful discussion on Internet freedom and censorship.
            </p>
            <p className="text-lg lg:text-xl mb-4">
              Lee's art practice spans video, glass, installation, and performance.
              She creates tech-based artwork that scrutinizes how visual culture and mass media influence our understanding of truth and shape perceptions of the "other."
              Her work has been showcased in the United States and internationally, and has attracted attention from major media outlets, including The New York Times, The Washington Post, Huffington Post, NPR, Hyperallergic, and ArtCritical.
            </p>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm">
            <Link to="http://www.joyceyujeanlee.com/">
              <img src={ArtistHeadshot} alt="Joyce Yu-Jean Lee" className="w-full h-auto object-cover" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Artist;