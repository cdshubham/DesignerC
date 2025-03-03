"use client";
import { marqueimages } from "@/components/data";
import Solutioncard from "@/components/home/Solutioncard";
import Solutionservicecard from "@/components/home/Solutionservicecard";
;
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { marketinglinkdata, servicetype } from "../solution/page";
import Navigationservice from "@/components/navigation/Navigationservice";


export const boxshadow = {
  yellow: "#FFBF00",
  green: "#24D171",
  pink: "#BA40AA",
  peachpink: "#B75C4E",
  blue: "#A190FF",
};

const page = () => {


 

  console.log(marketinglinkdata);
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


  const [selectedCard, setSelectedCard] = useState("Social Media Audit");
  return (
    <div className="flex flex-col w-full">
      <div className="flex font-helvetica max-w-full  ">
        <div className="flex flex-grow flex-col bg-darkblue gap-[30px] pt-[30px] pl-[80px] pr-[30px] justify-start">
          <div className="text-sm text-gold-yellow flex  gap-2  items-center font-semibold">
            <Image
              src="/icons/platform.png"
              width={16}
              height={16}
              alt="solution icon"
              className="h-full aspect-square"
            />{" "}
            <span className="h-full flex items-end ">PLATFORM</span>
          </div>

          <div className="flex justify-between">
            <div
              className={`min-h-[469px] min-w-[276px] max-w-min max-h-min flex flex-col justify-between`}
            >
              <div
                className={`min-h-[137px] min-w-[276px] max-w-min max-h-min flex flex-col p-[20px]   text-white relative gap-[20px] rounded-cardradius bg-gradient-gold-solution hover:cursor-pointer `}
                style={{
                  boxShadow:
                    selectedCard === "Social Media Audit"
                      ? `0 0 0 2px ${boxshadow.yellow}`
                      : "",
                }}
                onClick={() => setSelectedCard("Social Media Audit")}
              >
                <div className="flex  justify-between items-center">
                  <span className="text-xl">Social Media Audit</span>
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

              <div
                className={`min-h-[137px] min-w-[276px] max-w-min max-h-min flex flex-col p-[20px]   text-white relative gap-[20px] rounded-cardradius  bg-gradient-green-solution hover:cursor-pointer`}
                style={{
                  boxShadow:
                    selectedCard === "Talent Marketplace"
                      ? `0 0 0 2px ${boxshadow.green}`
                      : "",
                }}
                onClick={() => setSelectedCard("Talent Marketplace")}
              >
                <div className="flex  justify-between items-center">
                  <span className="text-xl">Talent Marketplace</span>
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

              <div
                className={`min-h-[137px] min-w-[276px] max-w-min max-h-min flex flex-col p-[20px]   text-white relative gap-[20px] rounded-cardradius bg-gradient-pink-solution hover:cursor-pointer`}
                onClick={() => setSelectedCard("Designera Learning")}
                style={{
                  boxShadow:
                    selectedCard === "Designera Learning"
                      ? `0 0 0 2px ${boxshadow.pink}`
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
            <div
              className={`min-h-[469px] min-w-[686px] max-w-min max-h-min flex flex-col py-[30px] px-[20px] text-white relative gap-[20px] rounded-cardradius bg-gradient-gold-solution `}
            >
              <div className="flex  justify-between items-center">
                <span className="text-xl"></span> {/*for title */}
                <Image
                  src="/images/icons/arrow.png"
                  width={42}
                  height={42}
                  alt="arrow"
                />
              </div>
              <div></div>
              {/**for content */}

              <div></div>
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
