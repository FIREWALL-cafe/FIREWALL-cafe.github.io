import React from 'react';
import Support from '../assets/icons/support.png';
import SupportGray from '../assets/icons/support_grayscale.png';
import Sponsor from '../assets/icons/sponsor.png';
import SponsorGray from '../assets/icons/sponsor_grayscale.png';
import Donation from '../assets/icons/donation.png';
import DonationGray from '../assets/icons/donation_grayscale.png';
import FeatureCards from './FeatureCards';

function SupportOptions() {
  const supportFeatures = [
    {
      title: "Make a donation",
      chineseTitle: {
        text: "进行信用卡捐赠",
        color: "text-black"
      },
      description: "Support us directly with a credit card donation.",
      iconSrc: DonationGray,
      iconSrcHover: Donation,
      bgColor: "bg-blue-500",
      hoverBgColor: "hover:bg-blue-600",
      textColor: "text-white",
      borderColor: "border-solid border-blue-500",
      url: "https://www.nyfa.org/#button=45138"
    },
    {
      title: "Become a sponsor",
      chineseTitle: {
        text: "成为赞助商",
        color: "text-red-600"
      },
      description: "Get in touch to learn about recurring donations, and how you can support our long term vision.",
      iconSrc: SponsorGray,
      iconSrcHover: Sponsor,
      bgColor: "bg-blue-200",
      hoverBgColor: "hover:bg-blue-300",
      textColor: "text-black",
      borderColor: "border-solid border-blue-500",
      url: "https://www.nyfa.org/#button=45138"
    },
    {
      title: "Other ways to support",
      chineseTitle: {
        text: "以其他方式支持",
        color: "text-red-600"
      },
      description: "Have an idea? We'd love to hear about it.",
      iconSrc: SupportGray,
      iconSrcHover: Support,
      bgColor: "bg-white",
      hoverBgColor: "hover:bg-blue-50",
      textColor: "text-black",
      borderColor: "border-solid border-blue-500",
      url: "/contact"
    }
  ];

  return (
    <section className="w-full pb-8 md:pb-16">
      <FeatureCards features={supportFeatures} />
    </section>
  );
}

export default SupportOptions;