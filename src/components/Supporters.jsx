import React from 'react';

import Lambent from '../assets/images/Lambent_logo_typeimage_CS5-300x196.jpg';
import NYC from '../assets/images/NYCulture_current_vector-04_16_2008-300x139.jpg';
import Jerome from '../assets/images/JEROME_LOGO_4c-300x76.jpg';

function Supporters() {
  return (
    <section className="flex overflow-hidden flex-col px-32 pb-16 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex-wrap grid grid-rows-2 grid-flow-col gap-4 justify-center w-full max-md:max-w-full">
        <div className="chinese flex flex-col col-span-1 self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <h2 className="text-6xl font-medium leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Thanks to our supporters.
          </h2>
          <div className="mt-2 text-7xl font-medium leading-tight text-red-600 tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
            感谢我们的支持者。
          </div>
        </div>
        <div className="flex col-span-1 max-w-full max-md:max-w-full text-xl">
          FIREWALL was made possible by the Asian Women Giving Circle; by the Franklin Furnace Fund supported by Jerome Foundation, the Lambent Foundation, The SHS Foundation; and in part with public funds from Creative Engagement, supported by the New York City Department of Cultural Affairs in partnership with the City Council and administered by Lower Manhattan Cultural Council.
        </div>
        <div className="flex flex-col col-span-2 row-span-2 self-stretch my-auto w-[240px]">
          <div className="mt-10">
            <img loading="lazy" src={Jerome} alt="Supporter logo 1" className="object-contain aspect-[3.98] w-[251px]" />
          </div>
          <div className="mt-10 min-h-[116px]">
            <img loading="lazy" src={NYC} alt="Supporter logo 2" className="object-contain w-full aspect-[2.16]" />
          </div>
          <div className="mt-10">
            <img loading="lazy" src={Lambent} alt="Supporter logo 3" className="object-contain w-full aspect-[2.24]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Supporters;