import React from 'react';
import { ReactComponent as ClockIcon } from '../../assets/icons/schedule.svg';

import Bbc from '../../assets/images/BBC.png';
function FeaturedBbc() {
  return (
    <section className="flex overflow-hidden justify-center items-start px-32 max-md:px-5 pb-16 w-full max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h1 className="mt-10 font-display-03 font-bitmap-song">
              FIREWALL Featured on BBC "The Real Story"
            </h1>
            
            <div className="mt-8 flex items-center gap-2 text-gray-600">
              <ClockIcon className="w-5 h-5" />
              <span className="text-xl">Nov. 1, 2019</span>
            </div>

            <hr className="my-6 border-gray-200" />

            <div className="mt-8 space-y-6 font-body-02">
              <p className="mb-4">
                FIREWALL founder, Joyce Yu-Jean Lee was interviewed by James Coomarasamy of BBC Sounds in:
              </p>

              <p className="mb-4">
                <a 
                  href="https://www.bbc.co.uk/sounds/play/w3csydds"
                  className="text-red-600 hover:text-red-800 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Real Story: Russia's New Internet Firewall
                </a>
              </p>

              <p className="mb-4">
                The interview segment begins at 35:06 in the podcast link below!
              </p>

              <p className="mb-8">
                <a 
                  href="https://www.bbc.co.uk/sounds/play/w3csydds"
                  className="text-red-600 hover:text-red-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.bbc.co.uk/sounds/play/w3csydds
                </a>
              </p>

              <p className="mb-8">
                <a 
                  href="https://www.bbc.com/news/world-asia-china-35551261"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BBC News Article
                </a>
              </p>

              <p className="mb-8">
                <a 
                  href="https://www.youtube.com/watch?v=VnEtGXp3gmA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Panel VIDEO Recording
                </a>
              </p>
            </div>

            <div className="mt-8">
              <img 
                src={Bbc}
                alt="BBC The Real Story screenshot"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBbc; 