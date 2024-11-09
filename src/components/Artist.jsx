import React from 'react';
import { Link } from 'react-router-dom';

function Artist() {
  return (
    <section className="flex overflow-hidden flex-col justify-center py-16 w-full bg-white max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col px-8 max-md:px-5 max-md:max-w-full">
        <div className="chinese flex flex-col max-w-full">
          <h2 className="text-6xl font-medium leading-[56px] max-md:text-4xl max-md:leading-10">
            About Joyce
          </h2>
          <div className="mt-2 text-7xl font-medium leading-tight text-red-600 tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
            关于乔伊斯
          </div>
          <p className="mt-2 text-2xl text-zinc-400">Artist</p>
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-10 text-xl leading-8 text-black max-md:max-w-full">
          <div className="w-[500px] max-md:max-w-full">
            <p className="text-xl max-md:max-w-full mb-4">
              Motivated by a desire to challenge both state and corporate censorship, NYC-based artist Joyce Yu-Jean Lee founded the FIREWALL Cafe in 2013. This digital art project uses a participatory approach to examine internet visual culture, encouraging users to actively engage and see for themselves how censorship shapes their understanding of the world.
            </p>
            <p className="text-xl max-md:max-w-full mb-4">
              Lee’s journey into this project was catalyzed by her experience abroad in 2011, when she coordinated an artist residency program in CaoChangDi, Beijing, China.
              There, she helped a dozen North American artists navigate the complexities of Chinese internet access, providing VPN software and advice on circumventing the “Great Firewall.”
              This experience inspired her to creatively show online audiences how the internet manifests differently across various parts of the world demonstrate to netizens the varied appearances of the internet across different global regions.
              Through FIREWALL Internet Cafe, Lee aims to make these disparities visible and provoke thoughtful discussion on Internet freedom and censorship.
            </p>
            <p className="text-xl max-md:max-w-full mb-4">
              Lee’s art practice spans video, glass, installation, and performance.
              She creates tech-based artwork that scrutinizes how visual culture and mass media influence our understanding of truth and shape perceptions of the “other.”
              Her work has been showcased in the United States and internationally, and has attracted attention from major media outlets, including The New York Times, The Washington Post, Huffington Post, NPR, Hyperallergic, and ArtCritical.
            </p>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/264f652583cf9907439c55f0d28d677831d71eb68fac5cdc986c5807cb1832e4?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="Joyce Yu-Jean Lee" className="object-contain shrink-0 aspect-[0.7] w-[214px]" />
        </div>
      </div>
    </section>
  );
}

export default Artist;