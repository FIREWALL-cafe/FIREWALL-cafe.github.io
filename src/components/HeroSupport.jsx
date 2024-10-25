import React from 'react';

function HeroSupport() {
  return (
    <section className="flex overflow-hidden flex-col items-center py-32 w-full bg-white max-md:py-24 max-md:max-w-full">
      <div className="chinese flex flex-col items-center max-w-full min-w-[388px]">
        <h1 className="flex flex-col justify-center items-center self-stretch w-full text-5xl font-medium text-center max-md:max-w-full max-md:text-4xl">
          Support the frontline of internet freedom fighters.
        </h1>
        <div className="mt-2 text-5xl font-medium leading-tight text-red-600 tracking-[2.16px] max-md:max-w-full max-md:text-4xl">
          支持互联网自由战士的前线。
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-32 max-w-full w-[1080px] max-md:mt-10">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl leading-9 text-black basis-0 min-w-[240px] max-md:max-w-full">
          <p className="w-full max-md:max-w-full">
            Firewall Cafe is supported by individual contributions, corporate sponsorships, and foundation grants. Your contribution supports the maintenance of X and the expansion of Y so that we can continue to Z. Donate to our cause through <a href="https://www.nyfa.org/#button=45138" className="underline" target="_blank">NYFA</a>, a 501(c)3 supporting the arts in NY.
          </p>
        </div>
        <div className="flex flex-col flex-1 shrink justify-center items-center basis-0 min-w-[240px] max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/db738558fc4a68decfbd7caa2ee7cceba38b2cefd3af6c910907a86363f4cb6c?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain max-w-full aspect-[1.47] w-[432px]" alt="Donation illustration" />
        </div>
      </div>
      {/* <div className="flex flex-col items-start mt-32 max-w-full text-4xl font-medium leading-10 text-center w-[720px] max-md:mt-10">
        <p className="text-black max-md:max-w-full">
          With your support we pledge to XYZ and carry out our mission of 123.
        </p>
        <p className="chinese text-red-600 max-md:max-w-full">
          在您的支持下，我们向 XYZ 承诺并履行我们的 123 使命。
        </p>
      </div> */}
    </section>
  );
}

export default HeroSupport;