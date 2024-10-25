import React from 'react';
import EventCard from './EventCard';

const pastEvents = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/94a40e16695e18f167d11939cf2e7dc7928393498bedcdd6fef756e35483df09?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
    title: "Marymount Manhattan \"Digital Media & Society\" Class Field Trip",
    date: "Jan 01, 2024",
    time: "5:00pm EST",
    location: "New York City, NY"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ab028cc4d290f134119a677cd9d32a4e97130e752df14c82189d6c85110eb55?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
    title: "Oslo Freedom Forum 2022 Taiwan Interactive Expo",
    date: "Jan 01, 2024",
    time: "5:00pm EST",
    location: "New York City, NY"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0543e306fdf8c198a44ab8d084741000ce502a6dd97b57489403acc0c881cca5?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
    title: "Re(actions) to the Great Chinese Firewall",
    date: "Jan 01, 2024",
    time: "5:00pm EST",
    location: "New York City, NY"
  }
];

function PastEvents() {
  return (
    <section className="flex flex-col items-center px-14 pt-12 pb-16 w-full border-t border-solid bg-slate-100 border-t-neutral-300 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1080px] max-md:max-w-full">
        <h2 className="self-center text-5xl font-medium leading-tight text-black max-md:text-4xl">
          Past events
        </h2>
        <div className="flex flex-wrap gap-5 justify-center items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
          {pastEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PastEvents;