import React from 'react';
import { useState } from 'react';
import { Layout } from './components';
// import './style.css';

function timeInShanghai() {
  return new Date().toLocaleTimeString('en-us', {
    timeStyle: 'short',
    timeZone: 'Asia/Shanghai',
  })
}

const currentTime = new Date().toLocaleTimeString('en-us', { timeStyle: 'short'});

function App() {
  return (
    <div className="flex flex-col items-end px-16 max-md:pl-5">
      <div className="flex overflow-hidden items-start bg-white min-h-[200px]">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
            <div className="flex overflow-hidden justify-between px-8 w-full bg-red-600 min-h-[40px] max-md:px-5 max-md:max-w-full">
              <div className="flex flex-wrap flex-1 shrink gap-10 justify-between max-w-screen-xl basis-0 min-w-[240px] size-full max-md:max-w-full">
                <div className="flex gap-5 items-center pr-8 h-full text-lg font-medium text-center min-w-[240px] text-slate-100">
                  <div className="flex gap-6 items-center self-stretch my-auto min-w-[240px]">
                    <div className="self-stretch my-auto">
                      Your time: {currentTime}
                    </div>
                    <div className="self-stretch my-auto">Beijing: {timeInShanghai()}</div>
                  </div>
                </div>
                <div className="flex gap-6 items-center my-auto min-w-[240px]">
                  <div className="flex gap-1 items-center self-stretch my-auto">
                    <div className="flex overflow-hidden gap-2.5 items-center self-stretch p-0.5 my-auto w-6 bg-red-700 border border-white border-solid min-h-[12px] rounded-[1000px]">
                      <div className="flex self-stretch my-auto w-2 h-2 bg-pink-50 min-h-[8px] rounded-[10000px]" />
                    </div>
                    <div className="self-stretch my-auto text-lg font-medium text-center text-slate-100">
                      Fullscreen
                    </div>
                  </div>
                  <div className="flex gap-1 items-center self-stretch my-auto text-lg font-medium text-center text-white">
                    <div className="self-stretch my-auto">Cursor color</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceb40ccfef9d0bc81d0f8b9bf895e4e5cd328856e2413a06a07bce01c4b9cc3d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                      className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex overflow-hidden gap-10 justify-center items-center px-8 py-5 w-full bg-white min-h-[80px] max-md:px-5 max-md:max-w-full">
              <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch my-auto w-full max-w-screen-xl basis-0 min-w-[240px] max-md:max-w-full">
                <div className="flex gap-1 justify-center items-center self-stretch px-2 py-px my-auto w-56 text-xl text-red-600 border-b border-solid border-b-red-600 min-h-[32px]">
                  <div className="flex-1 shrink self-stretch my-auto basis-0">
                    Search site
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2475b8ea19bd0c6a8a054415daea1bff7a9e84690086aedbb683524c532a1926?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </div>
                <div className="wenquanyi gap-4 self-stretch my-auto text-4xl font-medium leading-none text-black bg-white border-black min-w-[240px]">
                  FIREWALL CAFE
                </div>
                <div className="flex gap-4 items-center self-stretch my-auto w-56">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/83349c3a9382c00e86e55e6ca35418548aa29f33028b38a50e82825ce4293e46?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                    className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
                  />
                  <div className="flex overflow-hidden flex-col justify-center items-center self-stretch my-auto w-9 h-9 bg-red-600 rounded min-h-[36px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/df4fef47a211a63c0be6b3cd7cab4c41174e064b703b96d1003a02cf3811422f?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                      className="object-contain w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex overflow-hidden flex-col justify-center items-center px-24 py-40 w-full bg-white min-h-[641px] max-md:px-5 max-md:py-24 max-md:max-w-full">
              <div id="page_title" className="wenquanyi text-7xl font-medium leading-tight text-center text-black border-black tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
                WHAT IS BEHIND THE WALL?_
              </div>
              <div className="flex overflow-hidden flex-col mt-20 max-w-full w-[720px] max-md:mt-10">
                <div className="flex flex-wrap gap-4 items-center w-full border-b border-solid border-b-red-600 max-md:max-w-full">
                  <div className="flex items-center self-stretch my-auto min-w-[240px]">
                    <div className="flex flex-col justify-center items-center self-stretch px-9 py-2 my-auto rounded border-t border-l border-solid bg-slate-100 border-l-red-600 border-t-red-600 w-[148px] max-md:px-5">
                      <div className="flex gap-2 items-start">
                        <div className="flex gap-2.5 justify-center items-center p-1 w-8 min-h-[32px]">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cb2af37324c5a4bc1362790c12bbf94f45bcbeb50506c9959a362c2b0f248e7?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                            className="object-contain self-stretch my-auto w-6 aspect-square"
                          />
                        </div>
                        <div className="flex gap-2.5 justify-center items-center p-1 w-8 min-h-[32px]">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d380536645d407ab526be6d9d0cb270a83ff2af41d78e8b7f955cb8f2e2d94f3?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                            className="object-contain self-stretch my-auto w-6 aspect-square"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-8 py-2.5 my-auto text-2xl font-medium tracking-widest leading-none text-red-600 whitespace-nowrap bg-white rounded border border-red-600 border-red-600 border-solid min-h-[48px] w-[148px] max-md:px-5">
                      Archive
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d70fb4b995f1da679e81ce75ef9eefb16d818264512776481755365e3e2efc?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 w-full rounded-none border-r border-b border-l border-solid bg-slate-100 border-b-red-600 border-x-red-600 max-md:max-w-full">
                  <div className="flex overflow-hidden flex-wrap w-full bg-white rounded border border-solid border-neutral-300 min-h-[56px] max-md:max-w-full">
                    <div className="flex-1 shrink px-4 my-auto text-xl min-h-[40px] min-w-[240px] text-zinc-400 max-md:max-w-full">
                      Search Google + Baidu
                    </div>
                    <div className="flex overflow-hidden gap-1 justify-center items-center pr-4 h-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ef66cc2edc9a68306f187f679b1c0c81b6ac30ef7e5593073bf3d53270a8511?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d909f6ee0d0749d0fd5a6968b854d7a1c246dcec15239e0c8c1a975e7049e66?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex overflow-hidden flex-col items-center pb-52 w-full bg-white max-md:pb-24 max-md:max-w-full">
              <div className="flex flex-wrap gap-10 justify-center items-center max-w-full w-[1080px]">
                <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[526px] max-md:max-w-full">
                  <div className="flex flex-col w-full text-5xl font-medium leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    <div className="text-black border-black max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                      Would you know censorship if you saw it?{" "}
                    </div>
                    <div className="wenquanyi text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                      你知道什么时候会看到审查制度吗?{" "}
                    </div>
                  </div>
                  <div className="mt-10 text-2xl leading-9 text-black max-md:max-w-full">
                    Lorem ipsum dolor sit amet. Sed inventore corrupti sit rerum
                    animi ut voluptate laborum. Qui repellat voluptatum qui enim
                    debitis ut dolore debitis vel dolorem exercitationem.
                  </div>
                  <div className="flex gap-1 justify-center items-center self-start px-4 mt-10 text-lg leading-snug text-center text-red-600 whitespace-nowrap bg-white rounded border border-red-600 border-solid min-h-[56px]">
                    <div className="self-stretch my-auto">About</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef910262dbb507bfac4e4187d83a7705cdfd7dda7730e1969376dc912b298ab6?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[350px]">
                  <div className="flex overflow-hidden flex-col justify-center max-w-full bg-white border-0 border-black border-solid w-[350px]">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/afcf531e105184e447f8866a2d66344c042e7a242ff786596f2671ec68f21571?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/afcf531e105184e447f8866a2d66344c042e7a242ff786596f2671ec68f21571?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afcf531e105184e447f8866a2d66344c042e7a242ff786596f2671ec68f21571?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/afcf531e105184e447f8866a2d66344c042e7a242ff786596f2671ec68f21571?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/afcf531e105184e447f8866a2d66344c042e7a242ff786596f2671ec68f21571?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afcf531e105184e447f8866a2d66344c042e7a242ff786596f2671ec68f21571?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/afcf531e105184e447f8866a2d66344c042e7a242ff786596f2671ec68f21571?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/afcf531e105184e447f8866a2d66344c042e7a242ff786596f2671ec68f21571?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                      className="object-contain w-full bg-blend-multiply aspect-[1.9]"
                    />
                  </div>
                  <div className="flex overflow-hidden flex-col justify-end mt-3.5 max-w-full border-0 border-black border-solid bg-neutral-300 w-[350px]">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5a602451031d65dc7eeb3cf0f8f1e0c78c3121b9858f3c0b6aa73909dd340180?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a602451031d65dc7eeb3cf0f8f1e0c78c3121b9858f3c0b6aa73909dd340180?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a602451031d65dc7eeb3cf0f8f1e0c78c3121b9858f3c0b6aa73909dd340180?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a602451031d65dc7eeb3cf0f8f1e0c78c3121b9858f3c0b6aa73909dd340180?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a602451031d65dc7eeb3cf0f8f1e0c78c3121b9858f3c0b6aa73909dd340180?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a602451031d65dc7eeb3cf0f8f1e0c78c3121b9858f3c0b6aa73909dd340180?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a602451031d65dc7eeb3cf0f8f1e0c78c3121b9858f3c0b6aa73909dd340180?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a602451031d65dc7eeb3cf0f8f1e0c78c3121b9858f3c0b6aa73909dd340180?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                      className="object-contain w-full bg-blend-multiply aspect-[1.89]"
                    />
                  </div>
                  <div className="flex overflow-hidden flex-col mt-3.5 max-w-full border-0 border-black border-solid bg-zinc-400 w-[350px]">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/760941301fa3bce6cc4b53880fccd9e4834f9ae05ccfd041ecb12f6792d48ee6?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/760941301fa3bce6cc4b53880fccd9e4834f9ae05ccfd041ecb12f6792d48ee6?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/760941301fa3bce6cc4b53880fccd9e4834f9ae05ccfd041ecb12f6792d48ee6?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/760941301fa3bce6cc4b53880fccd9e4834f9ae05ccfd041ecb12f6792d48ee6?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/760941301fa3bce6cc4b53880fccd9e4834f9ae05ccfd041ecb12f6792d48ee6?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/760941301fa3bce6cc4b53880fccd9e4834f9ae05ccfd041ecb12f6792d48ee6?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/760941301fa3bce6cc4b53880fccd9e4834f9ae05ccfd041ecb12f6792d48ee6?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/760941301fa3bce6cc4b53880fccd9e4834f9ae05ccfd041ecb12f6792d48ee6?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                      className="object-contain w-full bg-blend-normal aspect-[1.9]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-center px-36 pb-52 w-full text-center max-md:px-5 max-md:pb-24 max-md:max-w-full">
            <div className="flex flex-col items-center w-full max-w-[1080px] max-md:max-w-full">
              <div className="flex flex-col justify-center items-start w-full text-5xl font-medium leading-tight max-md:text-4xl">
                <div className="text-black border-black max-md:max-w-full max-md:text-4xl">
                  Peer over the wall. Decide for yourself.
                </div>
                <div className="wenquanyi text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl">
                  越过墙往外看。自己决定。
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c8751c2264842788b54a29155c022b7bdc3b1004075ae5ab4f226fccff54d7d9?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8751c2264842788b54a29155c022b7bdc3b1004075ae5ab4f226fccff54d7d9?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8751c2264842788b54a29155c022b7bdc3b1004075ae5ab4f226fccff54d7d9?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8751c2264842788b54a29155c022b7bdc3b1004075ae5ab4f226fccff54d7d9?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8751c2264842788b54a29155c022b7bdc3b1004075ae5ab4f226fccff54d7d9?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8751c2264842788b54a29155c022b7bdc3b1004075ae5ab4f226fccff54d7d9?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8751c2264842788b54a29155c022b7bdc3b1004075ae5ab4f226fccff54d7d9?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8751c2264842788b54a29155c022b7bdc3b1004075ae5ab4f226fccff54d7d9?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                className="object-contain mt-10 max-w-full aspect-[11.11] w-[720px]"
              />
              <div className="gap-8 self-stretch mt-10 w-full text-2xl leading-9 text-black max-md:max-w-full">
                Firewall Cafe was created in 2015 to shine a light on the CCP’s
                suppression of free speech, and educate others on authoritarian
                control on public discourse.
                <br />
                <br />
                Our search bar will automatically translate your query, and
                provide image results from the West’s Google, and China’s
                government controlled search engine, Baidu. Compare the results
                side by side, and vote on if you believe the results are being
                censored or not, or lost in translation.
              </div>
              <div className="flex gap-1 justify-center items-center px-4 mt-10 text-lg leading-snug text-red-600 bg-white rounded border border-red-600 border-solid min-h-[56px]">
                <div className="self-stretch my-auto">Start Searching</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f85ee68f32688d30cdee38a11d3127d6fae6f9fafeb8b4877920d03ca15e202e?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pb-52 w-full max-md:pb-24 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-center items-center max-w-full w-[1080px]">
              <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                <div className="flex flex-col justify-center w-full text-5xl font-medium max-md:max-w-full max-md:text-4xl">
                  <div className="text-black border-black leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    What are others seeking over the wall?{" "}
                  </div>
                  <div className="wenquanyi leading-tight text-red-600 border-red-600 max-md:max-w-full max-md:text-4xl">
                    人们翻墙时在寻找什么?{" "}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 items-center mt-10 w-full text-base text-center text-black max-md:max-w-full">
                  <div className="gap-1 self-stretch px-4 py-2.5 my-auto bg-white border border-black border-solid min-h-[40px] rounded-[10000px]">
                    Most searched 1
                  </div>
                  <div className="gap-1 self-stretch px-4 py-2.5 my-auto bg-white border border-black border-solid min-h-[40px] rounded-[10000px]">
                    Most searched 1
                  </div>
                  <div className="gap-1 self-stretch px-4 py-2 my-auto text-lg text-red-600 bg-white border border-red-600 border-solid min-h-[40px] rounded-[10000px]">
                    搜索最多 3
                  </div>
                  <div className="gap-1 self-stretch px-4 py-2 my-auto text-lg text-red-600 bg-white border border-red-600 border-solid min-h-[40px] rounded-[10000px]">
                    搜索最多 4
                  </div>
                  <div className="gap-1 self-stretch px-4 py-2.5 my-auto bg-white border border-black border-solid min-h-[40px] rounded-[10000px]">
                    Most searched 5
                  </div>
                </div>
                <div className="flex gap-1 justify-center items-center self-start px-4 mt-10 text-lg leading-snug text-center text-red-600 bg-white rounded border border-red-600 border-solid min-h-[56px]">
                  <div className="self-stretch my-auto">
                    Explore stats + data
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4afdc202990bfcb32c4d4c5a3cc95dc4f2e33e68d060755f5b566c074b9790b?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center self-stretch py-4 my-auto min-w-[240px] w-[500px] max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/755a83e3cecab7b765c273bf895ae17bdcc9a5d104d2aabdb8c53e2eb60a655d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/755a83e3cecab7b765c273bf895ae17bdcc9a5d104d2aabdb8c53e2eb60a655d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/755a83e3cecab7b765c273bf895ae17bdcc9a5d104d2aabdb8c53e2eb60a655d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/755a83e3cecab7b765c273bf895ae17bdcc9a5d104d2aabdb8c53e2eb60a655d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/755a83e3cecab7b765c273bf895ae17bdcc9a5d104d2aabdb8c53e2eb60a655d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/755a83e3cecab7b765c273bf895ae17bdcc9a5d104d2aabdb8c53e2eb60a655d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/755a83e3cecab7b765c273bf895ae17bdcc9a5d104d2aabdb8c53e2eb60a655d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/755a83e3cecab7b765c273bf895ae17bdcc9a5d104d2aabdb8c53e2eb60a655d?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                  className="object-contain w-full aspect-[1.15] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden relative justify-center items-start w-full bg-rose-100 border-0 border-black border-solid min-h-[500px] max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e7bb51d82e992a07972173da95326f997726aaf8c4ce0db45b11843cc0ab5592?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7bb51d82e992a07972173da95326f997726aaf8c4ce0db45b11843cc0ab5592?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7bb51d82e992a07972173da95326f997726aaf8c4ce0db45b11843cc0ab5592?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7bb51d82e992a07972173da95326f997726aaf8c4ce0db45b11843cc0ab5592?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7bb51d82e992a07972173da95326f997726aaf8c4ce0db45b11843cc0ab5592?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7bb51d82e992a07972173da95326f997726aaf8c4ce0db45b11843cc0ab5592?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7bb51d82e992a07972173da95326f997726aaf8c4ce0db45b11843cc0ab5592?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7bb51d82e992a07972173da95326f997726aaf8c4ce0db45b11843cc0ab5592?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
              className="object-contain absolute top-2/4 left-2/4 z-0 justify-center items-center -translate-x-2/4 -translate-y-2/4 aspect-[3.76] min-w-[240px] w-[1878px] max-md:max-w-full"
            />
            <div className="flex absolute top-0 left-0 z-0 shrink-0 h-[499px] min-w-[240px] w-[640px]" />
            <div className="flex z-0 flex-col justify-center items-start self-stretch my-auto max-w-[1080px] min-w-[240px] w-[1080px] max-md:max-w-full">
              <div className="flex flex-col max-w-full border-0 border-white border-solid shadow-sm w-[420px]">
                <div className="flex flex-col w-full shadow-sm">
                  <div className="flex flex-col w-full text-5xl font-medium leading-tight max-md:text-4xl">
                    <div className="text-white max-md:text-4xl">
                      Stay connected
                    </div>
                    <div className="wenquanyi text-red-600 max-md:text-4xl">保持联系</div>
                  </div>
                  <div className="flex flex-col mt-10 w-full text-xl">
                    <div className="leading-8 text-white">
                      Get updates about upcoming events, press releases, and
                      expert commentary with the Firewall Cafe newsletter.
                    </div>
                    <div className="flex mt-5 w-full bg-gray-50 rounded border border-solid border-neutral-300 min-h-[56px]">
                      <div className="overflow-hidden flex-1 shrink px-4 py-3.5 text-rose-500 min-w-[240px] max-md:pr-5">
                        Email <span className="wenquanyi text-rose-500">电子邮件 </span>
                      </div>
                      <div className="gap-1 self-start px-4 py-3.5 text-center text-red-600 whitespace-nowrap bg-white rounded border border-red-600 border-solid">
                        Submit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden justify-between items-start px-6 pt-32 pb-44 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
            <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-start w-full max-w-screen-xl basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex gap-3 font-medium min-h-[56px] w-[183px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1a0fc0c1e3ad99e0bc980f348e5521c522af12314fa868ae6066790ba5452b8?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                  className="object-contain shrink-0 my-auto w-12 aspect-square"
                />
                <div className="flex flex-col flex-1 shrink basis-0">
                  <div className="text-2xl leading-7 text-black border-black tracking-[2.86px]">
                    FIREWALL
                    <br />
                    Cafe{" "}
                  </div>
                  <div className="wenquanyi z-10 self-end mt-0 text-2xl leading-none text-red-600 border-red-600">
                    防火墙
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5 items-start min-w-[240px] max-md:max-w-full">
                <div className="flex overflow-hidden flex-col items-start px-4 text-xl text-center text-red-600 rounded-lg">
                  <div className="gap-1 self-stretch">About firewall</div>
                  <div className="mt-3.5">Sponsors</div>
                  <div className="mt-3.5">Press</div>
                </div>
                <div className="flex overflow-hidden flex-col items-start px-4 text-xl text-center text-red-600 rounded-lg">
                  <div className="gap-1 self-stretch">Search archive</div>
                  <div className="mt-3.5">stats & data</div>
                  <div className="mt-3.5">Analysis</div>
                </div>
                <div className="flex overflow-hidden flex-col justify-between items-start self-stretch px-4 rounded-lg">
                  <div className="gap-1 self-stretch text-xl text-center text-red-600">
                    Partner with us
                  </div>
                  <div className="mt-4 text-xl text-center text-red-600">
                    contact
                  </div>
                  <div className="flex gap-2 items-center mt-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/01fddf13d7000367a3160ada499748073cbc7f265a5d53134c044d4335acaae8?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square fill-red-600"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ac3f41dd298562864ce7ee3402ec913eb73d413db286a40ee9d0d632d6e7553?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square fill-red-600"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a3b0ca21208940ebedba3e73c4e0e4b3adc11e94a24b37d55c1f9f5f1b9f530?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square fill-red-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// const App = () => (
//   <>
//     <link rel="canonical" href="index.css"/>
//     <meta name="description" content="FIREWALL juxtaposes Google and Baidu image searches and allows users to vote if images are censored" />
//     <meta property="og:title" content="Firewall Cafe"/>
//     <meta property="og:type" content="article"/>
//     <meta property="og:url" content="https://firewallcafe.com"/>
//     <meta property="og:description" content="FIREWALL juxtaposes Google and Baidu image searches and allows users to vote if images are censored" />
//     <meta property="og:image" content="%PUBLIC_URL%/favicon.ico" />
//     <meta name="twitter:card" content="FIREWALL juxtaposes Google and Baidu image searches and allows users to vote if images are censored" />
//     <div className="app__container">
//       <h1 className="text-3xl font-bold underline">
//         Firewall 2.0
//       </h1>
//       <Layout />
//     </div>
//   </>
// );

export default App;
