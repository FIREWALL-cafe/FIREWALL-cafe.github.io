import React from 'react';

function Newsletter() {
  return (
    <section className="flex overflow-hidden flex-wrap mx-5 bg-gray-800 border-t border-b border-solid border-y-black max-w-[1400px]">
      <div className="flex flex-col justify-center p-20 border-0 border-white border-solid min-w-[240px] w-1/2 max-md:px-5">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="chinese flex flex-col w-full text-5xl font-medium max-md:max-w-full max-md:text-4xl">
            <h2 className="text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Want to be notified when we release new articles?
            </h2>
            <div className="leading-tight text-red-600 max-md:max-w-full max-md:text-4xl">
              保持联系
            </div>
          </div>
          <div className="flex flex-col mt-10 w-full text-xl max-md:max-w-full">
            <p className="leading-8 text-white max-md:max-w-full">
              Get updates about upcoming events, press releases, and expert commentary with the FIREWALL Cafe newsletter.
            </p>
            <form className="flex mt-5 w-full bg-gray-50 rounded border border-solid border-neutral-300 min-h-[56px] max-md:max-w-full">
              <label htmlFor="newsletterEmail" className="sr-only">Email</label>
              <input
                type="email"
                id="newsletterEmail"
                placeholder="Email 电子邮件"
                className="overflow-hidden flex-1 shrink px-4 pt-4 pb-2.5 text-rose-500 min-w-[240px] max-md:pr-5 bg-transparent border-none outline-none"
              />
              <button type="submit" className="gap-1 self-start px-4 text-center text-red-600 whitespace-nowrap bg-white rounded border border-red-600 border-solid min-h-[56px]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/602bf7047036e5f96e8984efff6c9a7f8a4111d2c7cc4ea6d413355cf868a486?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" alt="Newsletter illustration" className="object-contain flex-1 shrink w-full aspect-[1.07] basis-40 min-w-[240px] max-md:max-w-full" />
    </section>
  );
}

export default Newsletter;