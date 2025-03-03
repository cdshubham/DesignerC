"use client";
import { marqueimages } from "@/components/data";
import Navigationservice from "@/components/navigation/Navigationservice";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { boxshadow } from "../platform/page";

const page = () => {
  const content = [
    {
      title: "Creatives",
      content: "Elevate your brand value with engaging and creative videos",
      className: "bg-gradient-to-b from-[#3A2A29] to-[#E4B156]",
      color1: "#FFFFFF",
      color2: "#1EaD5D",
    },
    {
      title: "Marketing",
      content: "Leverage technology to reach potential audience faster.",
      className: "bg-gradient-to-b from-[#3C1750] to-[#BD41AD]",
      color1: "#FFFFFF",
      color2: "#1EaD5D",
    },
  ];

    const marketinglinkdata = [
      { 
        icon: "icon21",
        name: "Custom Web Development",
        description: "Description",
        link: "/home/custom-web-development",
      },
      {
        icon: "icon22",
        name: "Performance Marketing",
        description: "Description",
        link: "/home/performance-marketing",
      },
      {
        icon: "icon23",
        name: "Lead Gen-Funnel",
        description: "Description",
        link: "/home/lead-gen-funnel",
      },
      {
        icon: "icon24",
        name: "Technical SEO",
        description: "Description",
        link: "/home/technical-seo",
      },
      {
        icon: "icon25",
        name: "Market Research/Survey",
        description: "Description",
        link: "/home/market-research-survey",
      },
      {
        icon: "icon26",
        name: "Social Media Marketing",
        description: "Description",
        link: "/home/social-media-management",
      },
      {
        icon: "icon27",
        name: "LinkedIn Marketing",
        description: "Description",
        link: "/home/linkedin-marketing",
      },
      {
        icon: "icon28",
        name: "WhatsApp / Email Marketing",
        description: "Description",
        link: "/home/whatsapp-email",
      },
    ];

    const [selectedCard, setSelectedCard] = useState("Get Hired");
  return (
    <div className="flex flex-col">
      <div className="flex font-helvetica ">
        <div className="flex-1 flex flex-col bg-darkblue pt-[30px] pr-[30px] pl-[80px]  ">
          <div className=" flex flex-col flex-grow gap-[30px]  ">
            <div className="text-sm text-gold-yellow flex gap-2 items-center font-semibold">
              <Image
                src="/icons/star2.png"
                width={16}
                height={16}
                alt="solution icon"
                className="h-full aspect-square"
              />
              <span className="h-full flex items-end ">TALENT NETWORK</span>
            </div>
            <div className="flex justify-between ">
              <div
                className={`min-h-[469px] min-w-[506px] max-w-min max-h-min flex flex-col py-[30px] px-[20px]   text-white relative gap-[20px] rounded-[4px] bg-gradient-to-b from-[#201563] to-[#6450EC] hover:cursor-pointer`}
                onClick={() => setSelectedCard("Get Hired")}
                style={{
                  boxShadow:
                    selectedCard === "Get Hired"
                      ? `0 0 0 2px ${boxshadow.blue}`
                      : "",
                }}
              >
                <div className="flex  justify-between items-center">
                  <span className="text-xl">Get Hired</span>
                  <Image
                    src="/images/icons/arrow.png"
                    width={42}
                    height={42}
                    alt="arrow"
                  />
                </div>
                <div></div>

                <div></div>
              </div>

              <div className="min-w-[455px] min-h-[469px] max-w-min max-h-min flex flex-col justify-between  ">
                <div
                  className={`h-[227px] w-[455px] flex flex-col py-[30px] px-[20px]   text-white relative gap-[20px] rounded-[4px] bg-gradient-to-b from-[#3A164F] to-[#BC41AD] hover:cursor-pointer`}
                  onClick={() => setSelectedCard("Get Talent")}
                  style={{
                    boxShadow:
                      selectedCard === "Get Talent"
                        ? `0 0 0 2px ${boxshadow.pink}`
                        : "",
                  }}
                >
                  <div className="flex  justify-between items-center">
                    <span className="text-xl">Get Talent</span>
                    <Image
                      src="/images/icons/arrow.png"
                      width={42}
                      height={42}
                      alt="arrow"
                    />
                  </div>
                  <div>Uncover how Brands drive revenue with Designera.</div>

                  <div></div>
                </div>

                <div
                  className={`h-[227px] w-[455px] flex flex-col py-[30px] px-[20px]   text-white relative gap-[20px] rounded-[4px] bg-gradient-to-b from-[#173342] to-[#29C77B] hover:cursor-pointer`}
                  onClick={() => setSelectedCard("Designera Learning")}
                  style={{
                    boxShadow:
                      selectedCard === "Designera Learning"
                        ? `0 0 0 2px ${boxshadow.green}`
                        : "",
                  }}
                >
                  <div className="flex  justify-between items-center">
                    <span className="text-xl">Designera Learning</span>
                    <Image
                      src="/images/icons/arrow.png"
                      width={42}
                      height={42}
                      alt="arrow"
                    />
                  </div>
                  <div>Description</div>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navigationservice linkdata={marketinglinkdata} />
      </div>
      <div className="w-full h-[150px] bg-background-blue-300 relative flex items-start pt-[30px]">
        <Marquee speed={50} className="flex items-center">
          {marqueimages.map((item) => (
            <div className="w-[138px]  flex items-center ">
              <img
                src={item.img}
                alt=""
                className="md:w-[128px] object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default page;
