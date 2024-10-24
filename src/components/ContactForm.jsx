import React from 'react';

const ContactForm = () => {
  return (
    <form className="flex flex-col grow shrink-0 items-start p-8 mt-2 bg-white rounded-lg border border-red-600 border-solid basis-0 w-fit max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col self-stretch w-full max-md:max-w-full">
        <div className="flex flex-col w-full whitespace-nowrap max-md:max-w-full">
          <div className="flex overflow-hidden gap-1 items-start py-1.5 w-full max-md:max-w-full">
            <label htmlFor="name" className="text-lg">Name</label>
            <span className="text-sm">*</span>
          </div>
          <div className="flex flex-col w-full max-md:max-w-full">
            <input type="text" id="name" required className="w-full border-b border-solid border-b-zinc-200 py-1.5" />
          </div>
        </div>
        
        <div className="flex flex-col mt-6 w-full max-md:max-w-full">
          <div className="flex overflow-hidden gap-1 py-1.5 w-full max-md:max-w-full">
            <label htmlFor="email" className="text-lg">Email address</label>
            <span className="self-start text-sm">*</span>
          </div>
        </div>
        <input type="email" id="email" required className="w-full border-b border-solid border-b-zinc-200 py-1.5" />
        
        <div className="flex flex-col mt-6 w-full whitespace-nowrap max-md:max-w-full">
          <div className="flex overflow-hidden gap-1 py-1.5 w-full max-md:max-w-full">
            <label htmlFor="subject" className="text-lg">Subject</label>
            <span className="self-start text-sm">*</span>
          </div>
        </div>
        <input type="text" id="subject" required className="w-full border-b border-solid border-b-zinc-200 py-1.5" />
        
        <div className="flex flex-col mt-6 w-full text-lg whitespace-nowrap max-md:max-w-full">
          <label htmlFor="message">Message*</label>
          <textarea id="message" required className="flex mt-1 w-full bg-gray-50 border border-solid border-zinc-200 min-h-[100px] max-md:max-w-full" />
        </div>
      </div>
      <div className="flex gap-2 items-center mt-6 text-lg">
        <input type="checkbox" id="subscribe" className="w-6 h-6 border border-solid border-zinc-400" />
        <label htmlFor="subscribe" className="self-stretch my-auto">
          Subscribe to newsletter?
        </label>
      </div>
      <button type="submit" className="flex gap-1 justify-center items-center px-4 mt-6 text-xl text-center whitespace-nowrap bg-white rounded border border-red-600 border-solid min-h-[40px]">
        Send
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2055f429093a317ad35a67b28f0188c70621ab00f72c34082650913a27f58443?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
      </button>
    </form>
  );
};

export default ContactForm;