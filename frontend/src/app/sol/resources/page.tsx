import { marqueimages } from "@/components/data";
import Solutioncard from "@/components/home/Solutioncard";
import Solutionservicecard from "@/components/home/Solutionservicecard";
import Navigationservice from "@/components/navigation/Navigationservice";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { marketinglinkdata } from "../solution/page";

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

    
     
  return (
    <div className="flex flex-col w-full">
      {" "}
      <div className="flex font-helvetica h-full ">
        <div className="flex-grow flex flex-col bg-darkblue pl-[80px] ">
          <div className="flex flex-col gap-[30px] pt-[30px] pr-[30px] ">
            {" "}
            <div className="text-sm text-gold-yellow flex gap-2 items-center font-semibold">
              <Image
                src="/images/icons/solutions.png"
                width={16}
                height={16}
                alt="solution icon"
                className="h-full aspect-square"
              />{" "}
              <span className="h-full flex items-end ">RESOURCES</span>
            </div>
            <div className="flex justify-between">
              {content.map((item) => (
                <Solutioncard
                  title={item.title}
                  content={item.content}
                  className={item.className}
                  color1={item.color1}
                  color2={item.color2}
                />
              ))}
              <div
                className={`h-[334px] w-[479px]   flex flex-col py-[30px] px-[20px]   text-white relative gap-[20px] rounded-cardradius  bg-gradient-green-solution`}
              >
                <div className="flex  justify-between items-center">
                  <span className="text-xl">Join Desgignera Community</span>
                  <Image
                    src="/images/icons/arrow.png"
                    width={42}
                    height={42}
                    alt="arrow"
                  />
                </div>
                <div>
                  Explore how our work which help the clients to become top
                  brand
                </div>
                <div
                  className="min-w-[424px] min-h-[51px] absolute bottom-[100px] right-0 rounded-tl-[6px] rounded-bl-[6px]"
                  style={{ backgroundColor: "#FFFFFF" }}
                ></div>
                <div
                  className="min-w-[424px] min-h-[80px] absolute bottom-[30px] right-0 rounded-tl-[6px] rounded-bl-[6px]"
                  style={{ backgroundColor: "#FFFFFF" }}
                ></div>
                <div></div>
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