import React, { useState } from 'react';

const ContactForm = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subscribe = document.getElementById('subscribe').checked;

    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nSubscribe: ${subscribe}`;
    const config = {
          method: 'post',
          headers: { 
            'Accept': 'application/json' ,
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify({ to: 'info@firewallcafe.com', subject: 'Firewall Cafe NYC 2024', text: text }),
    };
    console.log('submitting form');
    const response = await fetch(`/send-email`, config);
    setAlertMessage(response.text());
    setDisplayAlert(true);
  }

  return (
    <form className="grow flex flex-col p-8 mt-2 bg-white rounded-lg border border-red-600 border-solid max-md:px-5">
      <div id="alert" className={`text-center bg-blue ${displayAlert ? '' : 'hidden'}`}>{alertMessage}</div>
      <div className="flex flex-col w-full max-md:max-w-full">
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
      <button
        type="submit"
        className="flex gap-1 justify-center items-center px-4 mt-6 text-xl text-center whitespace-nowrap bg-white rounded border border-red-600 border-solid min-h-[40px]"
        onClick={handleSubmit}
      >
        Send
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2055f429093a317ad35a67b28f0188c70621ab00f72c34082650913a27f58443?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
      </button>
    </form>
  );
};

export default ContactForm;