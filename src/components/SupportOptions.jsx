import React from 'react';
import SupportCard from './SupportCard';

const supportOptions = [
  {
    title: "Make a donation",
    titleChinese: "进行信用卡捐赠",
    description: "Support us directly with a credit card donation.",
    bgColor: "bg-sky-400",
    textColor: "text-white",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8201f227dc09364969ace680a8cad69da9b1cd9652a1263c784a7df58bf5f6e7?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
  },
  {
    title: "Become a sponsor",
    titleChinese: "成为赞助商",
    description: "Get in touch to learn about recurring donations, and how you can support our long term vision.",
    bgColor: "bg-cyan-100",
    textColor: "text-black",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e26ab0317170f2e909d8086602501c900c4d3af7872e4c5fecbc4fd5e3fcda5f?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
    borderColor: "border-sky-400"
  },
  {
    title: "Other ways to support",
    titleChinese: "以其他方式支持",
    description: "Have an idea? We'd love to hear about it.",
    bgColor: "bg-white",
    textColor: "text-black",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/14331301e55a1f1c917cd3d63b9ce0d533064fb394faeae3bfaee529a7f7d486?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
    borderColor: "border-sky-400"
  }
];

function SupportOptions() {
  return (
    <section className="flex gap-4 justify-center items-start px-6 pb-32 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-4 items-center w-full max-w-screen-xl basis-0 min-w-[240px] max-md:max-w-full">
        {supportOptions.map((option, index) => (
          <SupportCard key={index} {...option} />
        ))}
      </div>
    </section>
  );
}

export default SupportOptions;