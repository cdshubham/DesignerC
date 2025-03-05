import React from "react";
import BlueButton from "../ui/BlueButton";
import Marquee from "react-fast-marquee";
import Image from "next/image";

interface carditem {
  logo: string;
  title: string;
  subtitle: string;
  subheading: string;
  img: string;
}

interface props {
  heading?: string;
  coloredHeading?: string;
  image?: string;
  color?: string;
  cardheading1?: string;
  cardheading2?: string;
  cards?: carditem[];
  keypoints?: string[];
}

const colorClasses: any = {
  "yellow-100": "text-yellow-100",
  "highlight-purple": "text-highlight-purple",
  "highlight-green": "text-highlight-green",
  "highlight-greenblue": "text-[#25C3E5]",
  "highlight-radiumgreen": "text-[#B2FE11]",
  "highlight-videoproduction": "text-[#F06F3B]",
  "highlight-packagingdesign": "text-[#3E7FFF]",
  "highlight-brandlaunch": "text-[#E2B86E]",
  "highlight-performancemarketing": "text-[#FF6A49]",
  "highlight-technicalseo": "text-[#12D4FF]",
  "highlight-customwebdevelopment": "text-[#FF4980]",
  "highlight-leadgenfunnels": "text-[#D3BBF5]",
  "highlight-gold-yellow": "text-[#FFD97C]",
  "highlight-smm": "text-[#FF542F]",
  "highlight-whatsapp": "text-[#4BEC43]",
  "highlight-linkedin": "text-[#47B2FF]",
  "highlight-affluence": "text-[#94FFD8]",
  "highlight-influencemarketing": "text-[#FF39B0]",
  "highlight-eventmarketing": "text-[#FF4F64]",
  "highlight-CRM": "text-[#FF9839]",
};

function CampaignArea({
  heading = "Driving Sales and Capturing Attention Through",
  coloredHeading = "Graphic Designs",
  color = "yellow-100",
  keypoints = [
    "On-board the Top 1% Design Talent.",
    "Communicate your brand's story.",
    "Impactful Marketing Collateral.",
  ],
  image = "/images/home.png",
  cardheading1 = "Engaging Visual Creatives",
  cardheading2 = "That Drive Results",
  cards = [
    {
      logo: "/icons/schedule.png",
      title: "Punctuality Meets ",
      subtitle: "Perfection",
      img: "/icons/clock.png",
      subheading:
        "We deliver creatives, precise designs on schedule, ensuring excellence for your brand every time.",
    },
    {
      logo: "/icons/star.png",
      title: "Showcase Your Brand's ",
      subtitle: "Personality",
      img: "/icons/star1.png",
      subheading:
        "Whether it's minimalist elegance or bold statements, we tailor designs that resonate with your audience.",
    },
    {
      logo: "/icons/graph.png",
      title: "Engage with Strategic",
      subtitle: "Visuals",
      img: "/icons/graph1.png",
      subheading:
        "From social media posts to digital ads, our graphics are crafted to drive engagement and action.",
    },
  ],
}: props) {
  const images = [
    { img: "/logos/adobe.png" },
    { img: "/logos/airmeet.png" },
    { img: "/logos/amazon.png" },
    { img: "/logos/amazonpay.png" },
    { img: "/logos/appolo.png" },
    { img: "/logos/axis.png" },
    { img: "/logos/binance.png" },
    { img: "/logos/darwing.png" },
  ];
  return (
    <div className="flex flex-col w-full mx-auto bg-background-blue-300 text-white justify-between items-center py-10 px-4 sm:px-6 lg:px-[125px]">
      {/* First Section: Heading, Keypoints, and Image */}
      <div className="flex flex-col-reverse md:flex-row w-full items-center justify-center gap-6 md:gap-10 pb-15">
        <div className="flex flex-col w-full md:w-1/2 gap-6 order-2 md:order-1">
          <div className=" space-y-2 p-2 text-4xl leading-12 lg:text-heading sm:text-3xl md:text-4xl md:leading-[0.9] lg:leading-[1]">
            <span className="  font-normal  ">{heading}</span>
            <span
              className={`pl-2   ${colorClasses[color] || "text-yellow-100"} `}
            >
              {coloredHeading}
            </span>
          </div>

          <div className="text-base md:text-body">
            <ul className="list-disc pl-6 md:pl-8 font-normal flex flex-col gap-3 md:gap-5">
              {keypoints.map((items, index) => (
                <li key={index} className="text-sm sm:text-base">
                  {items}
                </li>
              ))}
            </ul>
          </div>

          <BlueButton
            children="Book a Demo"
            className="text-sm md:text-base font-bold md:w-[153px] h-10 md:h-[37px] hover:bg-yellow-100 hover:text-black w-[120px] self-center md:self-start md:ml-4"
          />
        </div>

        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
          <Image
            src={image}
            alt="Campaign Visual"
            height={621}
            width={574}
            className="object-contain w-full max-w-[400px] md:max-w-[500px] lg:max-w-[574px]"
          />
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-full overflow-hidden py-6">
        <Marquee speed={50} className="flex items-center">
          {images.map((item, index) => (
            <div key={index} className="px-4 flex items-center justify-center">
              <img
                src={item.img}
                alt=""
                className="max-w-[100px] sm:max-w-[128px] object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Cards Section */}
      <div className="w-full flex flex-col items-center pt-10 md:pt-[60px]">
        <div className="text-3xl md:text-heading text-center flex flex-col mb-10 md:leading-[1]">
          <span>{cardheading1}</span>
          <span>{cardheading2}</span>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 w-full px-2 md:px-0">
          {cards.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full md:w-[308px] gap-6 mb-6 md:mb-0"
            >
              <div className="h-[50px]">
                <img
                  src={item.logo}
                  alt=""
                  className="w-[40px] object-contain"
                />
              </div>

              <span className="text-2xl md:text-subheading text-left font-bold flex flex-col gap-1 whitespace-nowrap">
                {item.title}
                <div className="flex gap-2 items-center justify-start font-bold text-">
                  <span>{item.subtitle}</span>
                  <img src={item.img} alt="" className="w-8 object-contain" />
                </div>
              </span>

              <span className="text-base font-normal text-justify">
                {item.subheading}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CampaignArea;
