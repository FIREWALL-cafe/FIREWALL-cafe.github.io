import React from 'react';

import Lambent from '../assets/images/Lambent_logo_typeimage_CS5-300x196.jpg';
import NYC from '../assets/images/NYCulture_current_vector-04_16_2008-300x139.jpg';
import Jerome from '../assets/images/JEROME_LOGO_4c-300x76.jpg';

function Supporters() {
  return (
    <section className="flex overflow-hidden flex-col w-full bg-white pb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="font-bitmap-song font-display-01 ipad-portrait:font-display-03 lg:col-span-1">
            <h2 className="leading-tight">
              Thanks to our supporters.
            </h2>
            <div className="mt-2 leading-tight text-red-600 tracking-[2.16px]">
              感谢我们的支持者。
            </div>
          </div>
          <div className="lg:col-span-2">
            <p className="font-body-01">
              FIREWALL was made possible by the Asian Women Giving Circle; by the Franklin Furnace Fund supported by Jerome Foundation, the Lambent Foundation, The SHS Foundation; and in part with public funds from Creative Engagement, supported by the New York City Department of Cultural Affairs in partnership with the City Council and administered by Lower Manhattan Cultural Council.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <img loading="lazy" src={Jerome} alt="Supporter logo 1" className="h-auto max-w-[250px] object-contain" />
          <img loading="lazy" src={NYC} alt="Supporter logo 2" className="h-auto max-w-[250px] object-contain" />
          <img loading="lazy" src={Lambent} alt="Supporter logo 3" className="h-auto max-w-[250px] object-contain" />
        </div>
      </div>
    </section>
  );
}

export default Supporters;