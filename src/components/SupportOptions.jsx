import React from 'react';
import Support from '../assets/icons/support.png';
import SupportGray from '../assets/icons/support_grayscale.png';
import Sponsor from '../assets/icons/sponsor.png';
import SponsorGray from '../assets/icons/sponsor_grayscale.png';
import Donation from '../assets/icons/donation.png';
import DonationGray from '../assets/icons/donation_grayscale.png';

function SupportOptions() {
  return (
    <section className="w-full px-4 md:px-6 pb-8 md:pb-16">
      <div className="flex flex-col md:flex-row gap-4 md:gap-2">
        <div className="flex-1 p-4 md:p-6 bg-sky-400 rounded-lg border border-solid">
          <a href="https://www.nyfa.org/#button=45138" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-col">
                <div className="flex justify-between items-start gap-2">
                  <div className="chinese text-2xl md:text-4xl font-medium leading-tight text-white">
                    Make a donation
                  </div>
                  <div className="flex-shrink-0 w-[52px]">
                    <img
                      onMouseOver={e => (e.currentTarget.src = Donation)}
                      onMouseOut={e => (e.currentTarget.src = DonationGray)}
                      src={DonationGray}
                      className="w-full aspect-square"
                      alt="Make a donation icon"
                    />
                  </div>
                </div>
                <div className="chinese text-2xl md:text-4xl font-medium leading-tight text-black mt-2">
                  进行信用卡捐赠
                </div>
              </div>
              <div className="mt-8 md:mt-32 text-lg md:text-xl leading-relaxed text-white">
                Support us directly with a credit card donation.
              </div>
            </div>
          </a>
        </div>
        <div className="flex-1 p-4 md:p-6 bg-cyan-100 rounded-lg border border-sky-400 border-solid">
          <a href="https://www.nyfa.org/#button=45138" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-col">
                <div className="flex justify-between items-start gap-2">
                  <div className="chinese text-2xl md:text-4xl font-medium leading-tight text-black">
                    Become a sponsor
                  </div>
                  <div className="flex-shrink-0 w-[52px]">
                    <img
                      onMouseOver={e => (e.currentTarget.src = Sponsor)}
                      onMouseOut={e => (e.currentTarget.src = SponsorGray)}
                      src={SponsorGray}
                      className="w-full aspect-square"
                      alt="Become a sponsor icon"
                    />
                  </div>
                </div>
                <div className="chinese text-2xl md:text-4xl font-medium leading-tight text-red-600 mt-2">
                  成为赞助商
                </div>
              </div>
              <div className="mt-8 md:mt-32 text-lg md:text-xl leading-relaxed text-black">
                Get in touch and learn how you can support our long term vision.
              </div>
            </div>
          </a>
        </div>
        <div className="flex-1 p-4 md:p-6 bg-white rounded-lg border border-sky-400 border-solid">
          <a href="/contact" rel="noopener noreferrer">
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-col">
                <div className="flex justify-between items-start gap-2">
                  <div className="chinese text-2xl md:text-4xl font-medium leading-tight text-black">
                    Contact us
                  </div>
                  <div className="flex-shrink-0 w-[52px]">
                    <img
                      onMouseOver={e => (e.currentTarget.src = Support)}
                      onMouseOut={e => (e.currentTarget.src = SupportGray)}
                      src={SupportGray}
                      className="w-full aspect-square"
                      alt="Contact us icon"
                    />
                  </div>
                </div>
                <div className="chinese text-2xl md:text-4xl font-medium leading-tight text-red-600 mt-2">
                  以其他方式支持
                </div>
              </div>
              <div className="mt-8 md:mt-32 text-lg md:text-xl leading-relaxed text-black">
                Have an idea? We'd love to hear about it.
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SupportOptions;