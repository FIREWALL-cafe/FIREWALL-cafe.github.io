import React from 'react';

function Supporters() {
  return (
    <section className="flex overflow-hidden flex-col px-32 pb-16 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap grid grid-rows-3 grid-flow-col gap-4 gap-10 justify-center w-full max-md:max-w-full">
        <div className="chinese flex flex-col col-span-1 self-stretch my-auto min-w-[240px] max-md:max-w-full w-[700px]">
          <h2 className="text-6xl font-medium leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Thanks to our supporters.
          </h2>
          <div className="mt-2 text-7xl font-medium leading-tight text-red-600 tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
            感谢我们的支持者。
          </div>
        </div>
        <div className="flex col-span-1 max-w-full max-md:max-w-full text-xl w-[700px]">
          FIREWALL was made possible by the Asian Women Giving Circle; by the Franklin Furnace Fund supported by Jerome Foundation, the Lambent Foundation, The SHS Foundation; and in part with public funds from Creative Engagement, supported by the New York City Department of Cultural Affairs in partnership with the City Council and administered by Lower Manhattan Cultural Council.
        </div>
        <div className="flex flex-col col-span-2 row-span-2 self-stretch my-auto w-[240px]">
          <div className="mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aab69bcb014261f1b3a67055083fa4625b97808fdd84aca00f36c9cc99978571?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="Supporter logo 1" className="object-contain aspect-[3.98] w-[251px]" />
          </div>
          <div className="mt-10 min-h-[116px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61281a411d3d25b43d23bf93f6e8f6a9e1b8689f6c560aa330bcd1be513fdefc?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="Supporter logo 2" className="object-contain w-full aspect-[2.16]" />
          </div>
          <div className="mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/461091cb584185d91fbdb602455a16d5e1af4fc7bee6b09550826e3bccc6c756?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="Supporter logo 3" className="object-contain w-full aspect-[2.24]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Supporters;