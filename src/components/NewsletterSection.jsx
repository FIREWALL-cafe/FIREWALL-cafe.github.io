import React from "react";

function NewsletterSection() {
  return (
    <section className="flex overflow-hidden relative justify-center items-start w-full bg-rose-100 border-0 border-black border-solid min-h-[500px] max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7b8323ea47a870d70eb941f18280ff6d635a297dfb12a0025469b7d272761a8?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
        alt="Background pattern"
        className="object-contain absolute top-2/4 left-2/4 z-0 justify-center items-center -translate-x-2/4 -translate-y-2/4 aspect-[3.76] min-w-[240px] w-[1878px] max-md:max-w-full"
      />
      <div className="flex absolute top-0 left-0 z-0 shrink-0 h-[499px] min-w-[240px] w-[640px]" />
      <div className="flex z-0 flex-col justify-center items-start self-stretch my-auto max-w-[1080px] min-w-[240px] w-[1080px] max-md:max-w-full">
        <div className="flex flex-col max-w-full border-0 border-white border-solid shadow-sm w-[420px]">
          <div className="flex flex-col w-full shadow-sm">
            <div className="chinese flex flex-col w-full text-5xl font-medium leading-tight max-md:text-4xl">
              <h2 className="text-white max-md:text-4xl">Stay connected</h2>
              <div className="text-red-600 max-md:text-4xl">保持联系</div>
            </div>
            <div className="flex flex-col mt-10 w-full text-xl">
              <p className="leading-8 text-white">
                Get updates about upcoming events, press releases, and expert
                commentary with the Firewall Cafe newsletter.
              </p>
              <form className="flex mt-5 w-full bg-gray-50 rounded border border-solid border-neutral-300 min-h-[56px]">
                <label htmlFor="emailInput" className="sr-only">
                  Email 电子邮件
                </label>
                <input
                  type="email"
                  id="emailInput"
                  className="overflow-hidden flex-1 shrink px-4 py-3.5 text-rose-500 min-w-[240px] max-md:pr-5"
                  placeholder="Email 电子邮件"
                  aria-label="Email 电子邮件"
                />
                <button
                  type="submit"
                  className="gap-1 self-start px-4 text-center text-red-600 whitespace-nowrap bg-white rounded border border-red-600 border-solid min-h-[56px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;