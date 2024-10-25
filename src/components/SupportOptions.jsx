import React from 'react';
import FeatureCards from './FeatureCards';

const features = [
  {
    title: "Make a donation",
    chineseTitle: { text: "进行信用卡捐赠", color: "text-black border-black" },
    description: "Support us directly with a credit card donation.",
    bgColor: "bg-sky-400",
    textColor: "text-white",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8201f227dc09364969ace680a8cad69da9b1cd9652a1263c784a7df58bf5f6e7?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99"
  },
  {
    title: "Become a sponsor",
    chineseTitle: { text: "成为赞助商", color: "text-red-600 border-red-600" },
    description: "Get in touch and learn how you can support our long term vision.",
    bgColor: "bg-cyan-100",
    textColor: "text-black",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e26ab0317170f2e909d8086602501c900c4d3af7872e4c5fecbc4fd5e3fcda5f?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
    borderColor: "border-sky-400"
  },
  {
    title: "Contact us",
    chineseTitle: { text: "以其他方式支持", color: "text-red-600 border-red-600" },
    description: "Have an idea? We'd love to hear about it.",
    bgColor: "bg-white",
    textColor: "text-black",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/14331301e55a1f1c917cd3d63b9ce0d533064fb394faeae3bfaee529a7f7d486?placeholderIfAbsent=true&apiKey=d56f8d62d9074d509de3faeb2651bd99",
    borderColor: "border-sky-400"
  }
];

function SupportOptions() {
  return (
    <section className="flex flex-col justify-center w-full px-6 pb-16 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <FeatureCards features={features} />
    </section>
  );
}

export default SupportOptions;