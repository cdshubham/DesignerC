import React from "react";
import BlueButton from "../ui/BlueButton";
import Marquee from "react-fast-marquee";



interface carditem {
  logo:string;
   title:string;
 subtitle:string;
  subheading:string;
  img:string;
}

interface props {
 heading:string;
 coloredHeading:string;
 image?:string;
 color:string;
 cardheading1:string;
 cardheading2:string;
 cards:carditem[];
 keypoints?:string[];
}


const colorClasses:any = {
  "yellow-100": "text-yellow-100",
  "highlight-purple": "text-highlight-purple",
  "highlight-green": "text-highlight-green",
  // Add more colors as needed
};

function CampaignArea({
  heading = "Driving Sales and Capturing Attention Through",
  coloredHeading = "Graphic Designs",
  color = "yellow-100",
  keypoints = [
    "On-board the Top 1% Design Talent.",
    "Communicate your brand’s story.",
    "Impactful Marketing Collateral.",
  ],
  image="/images/home.png",
  cardheading1="Engaging Visual Creatives",
  cardheading2="That Drive Results",
  cards=[
    {
      logo: "/icons/schedule.png",
      title: "Punctuality Meets ",
      subtitle:"Perfection",
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
  ]
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
    <div className="flex flex-col w-full  gap-5  mx-auto  bg-background-blue-300 text-white  justify-between ">
      <div className="  mx-auto flex px-[178px] gap-[30px] items-center ">
        <div className=" md:w-[624px] flex flex-col gap-5 md:pt-16 pr-28  ">
          <div className="flex flex-col  text-heading/[69px] font-normal ">
            <span className="flex flex-wrap ">{heading}</span>

            <span  className={colorClasses[color] || "text-yellow-100"}>
              {coloredHeading}
            </span>
          </div>
          <div className="text-body/[20.7px]  ">
            <ul className="list-disc px-8 font-normal flex flex-col gap-1">
              {keypoints.map((items, index) => (
                <li key={index}>{items}</li>
              ))}
            </ul>
          </div>
          <BlueButton
            children="Book a Demo"
            className="text-cta font-bold md:w-[153px] md:h-[37px] hover:bg-yellow-100 hover:text-black"
          />
        </div>
        <div className="max-h-[476px] max-w-[443px] min-h-max min-w-max">
          <img src={image} alt="" />
        </div>
      </div>

      <div className="flex  md:h-[150px] items-center gap-4 md:py-[30px] ">
        <Marquee speed={50}>
          {images.map((item) => (
            <div className="w-[138px]  flex items-center md:py-[12.64px]">
              <img
                src={item.img}
                alt=""
                className="md:w-[128px] object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="flex flex-col md:py-[60px] md:gap-[60px]  ">
        <div className="text-heading/[68.99px] text-center flex flex-col ">
          <span>{cardheading1}</span>
          <span>{cardheading2}</span>
        </div>
        <div className="flex items-center justify-around  md:px-[125px] gap-20">
          {cards.map((item) => (
            <div className="flex flex-col md:w-[308px] gap-5">
              <img src={item.logo} alt="" className="w-[40px] object-contain" />

              <span className="text-subheading/[27.6px] text-left font-bold flex flex-col gap-1">
                {item.title}
                <div className="flex gap-1 text-subheading/[27.6px] items-center justify-start font-bold">
                  <span>{item.subtitle}</span>
                  <img src={item.img} alt="" className="w-8 object-contain" />
                </div>
              </span>

              <span className="text-body font-normal text-justify">
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
