import React from 'react';
import { Link } from 'react-router-dom';
import FeatureCards from './FeatureCards';
import Support from '../assets/icons/support.png';
import SupportGray from '../assets/icons/support_grayscale.png';
import Sponsor from '../assets/icons/sponsor.png';
import SponsorGray from '../assets/icons/sponsor_grayscale.png';
import Donation from '../assets/icons/donation.png';
import DonationGray from '../assets/icons/donation_grayscale.png';

function SupportOptions() {
  return (
    <section className="flex flex-col w-full px-6 pb-16 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className={`flex-1 shrink justify-center items-center self-stretch p-4 bg-sky-400 rounded-lg border border-solid basis-0 max-md:px-5`}>
        <a href="https://www.nyfa.org/#button=45138" target="_blank">
          <div className="flex flex-col flex-1 justify-between w-full">
            <div className="flex flex-col w-full">
              <div className="flex gap-2 items-center w-full">
                <div className={`chinese flex-1 shrink gap-2.5 self-stretch text-4xl font-medium leading-none text-white whitespace-nowrap border-text-white min-w-[240px]`}>
                  Make a donation
                </div>
                <div className="flex flex-col items-center self-stretch min-h-[52px] w-[52px]">
                  <img
                    onMouseOver={e => (e.currentTarget.src = Donation)}
                    onMouseOut={e => (e.currentTarget.src = DonationGray)}
                    src={DonationGray}
                    className="object-contain aspect-square w-[52px]"
                    alt={`Make a donation icon`}
                  />
                </div>
              </div>
              <div className={`chinese text-4xl font-medium leading-none text-black border-black border-black`}>
                进行信用卡捐赠
              </div>
            </div>
            <div className={`mt-32 text-xl leading-8 text-white max-md:mt-10`}>
              Support us directly with a credit card donation.
            </div>
          </div>
        </a>
      </div>
      <div className={`flex-1 shrink justify-center items-center self-stretch p-4 bg-cyan-100 rounded-lg border border-sky-400 border-solid basis-0 max-md:px-5`}>
        <a href="https://www.nyfa.org/#button=45138" target="_blank">
          <div className="flex flex-col flex-1 justify-between w-full">
            <div className="flex flex-col w-full">
              <div className="flex gap-2 items-center w-full">
                <div className={`chinese flex-1 shrink gap-2.5 self-stretch my-auto text-4xl font-medium leading-none text-black whitespace-nowrap border-black min-w-[240px]`}>
                  Become a sponsor
                </div>
                <div className="flex flex-col items-center self-stretch my-auto min-h-[52px] w-[52px]">
                  <img
                    onMouseOver={e => (e.currentTarget.src = Sponsor)}
                    onMouseOut={e => (e.currentTarget.src = SponsorGray)}
                    src={SponsorGray}
                    className="object-contain aspect-square w-[52px]"
                    alt={`Become a sponsor icon`}
                  />
                </div>
              </div>
              <div className={`chinese text-4xl font-medium leading-none text-red-600 border-red-600 border-text-red-600 border-red-600`}>
                成为赞助商
              </div>
            </div>
            <div className={`mt-32 text-xl leading-8 text-black max-md:mt-10`}>
              Get in touch and learn how you can support our long term vision.
            </div>
          </div>
        </a>
      </div>
      <div className={`flex flex-col flex-1 shrink justify-center items-center self-stretch p-4 bg-white rounded-lg border border-sky-400 border-solid basis-0 max-md:px-5`}>
        <a href="/contact">
          <div className="flex flex-col flex-1 justify-between w-full">
            <div className="flex flex-col w-full">
              <div className="flex gap-2 items-center w-full">
                <div className={`chinese flex-1 shrink gap-2.5 self-stretch my-auto text-4xl font-medium leading-none text-black whitespace-nowrap border-black min-w-[240px]`}>
                  Contact us
                </div>
                <div className="flex flex-col items-center self-stretch my-auto min-h-[52px] w-[52px]">
                  <img
                    onMouseOver={e => (e.currentTarget.src = Support)}
                    onMouseOut={e => (e.currentTarget.src = SupportGray)}
                    src={SupportGray}
                    className="object-contain aspect-square w-[52px]"
                    alt="Contact us icon"
                  />
                </div>
              </div>
              <div className={`chinese text-4xl font-medium leading-none text-red-600 border-red-600 border-text-red-600 border-red-600`}>
                以其他方式支持
              </div>
            </div>
            <div className={`mt-32 text-xl leading-8 text-black max-md:mt-10`}>
              Have an idea? We'd love to hear about it.
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default SupportOptions;