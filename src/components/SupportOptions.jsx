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
      bgColor: "bg-sky-400",
      hoverBgColor: "hover:bg-sky-500",
      textColor: "text-white",
      borderColor: "border-solid",
      url: "https://www.nyfa.org/#button=45138"
    },
    {
      title: "Become a sponsor",
      chineseTitle: {
        text: "成为赞助商",
        color: "text-red-600"
      },
      description: "Get in touch and learn how you can support our long term vision.",
      iconSrc: SponsorGray,
      iconSrcHover: Sponsor,
      bgColor: "bg-cyan-100",
      hoverBgColor: "hover:bg-cyan-200",
      textColor: "text-black",
      borderColor: "border-solid border-sky-400",
      url: "https://www.nyfa.org/#button=45138"
    },
    {
      title: "Contact us",
      chineseTitle: {
        text: "以其他方式支持",
        color: "text-red-600"
      },
      description: "Have an idea? We'd love to hear about it.",
      iconSrc: SupportGray,
      iconSrcHover: Support,
      bgColor: "bg-white",
      hoverBgColor: "hover:bg-cyan-50",
      textColor: "text-black",
      borderColor: "border-solid border-sky-400",
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