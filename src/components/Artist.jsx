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
            <p className="pb-2">
              Joyce Yu-Jean Lee is a NYC-based artist working with video, installation, and performance. She creates tech-based art that examines how visual culture and mass media shape notions of truth and perception of the "other." Lee has exhibited widely domestically and internationally and her work has been written about in The New York Times, The Washington Post, Huffington Post, NPR, Hyperallergic, and ArtCritical. She teaches as an Assistant Professor of Art & Digital Media at Marist College.
            </p>
            <p>
              Shout out to the <Link to="/contributors" className="text-base font-bold leading-6 underline">team of contributors</Link> who have supported my work over the years and made this vision possible.
            </p>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/264f652583cf9907439c55f0d28d677831d71eb68fac5cdc986c5807cb1832e4?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="Joyce Yu-Jean Lee" className="object-contain shrink-0 aspect-[0.7] w-[214px]" />
        </div>
      </div>
    </section>
  );
}

export default Artist;