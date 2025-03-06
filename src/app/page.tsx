"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { marqueimages } from "@/components/data";
import Marquee from "react-fast-marquee";
import BlueButton from "@/components/ui/BlueButton";

const page = () => {
  return (
    <div className="w-full max-h-full overflow-hidden flex-grow relative bg-background-blue-300 pt-[60px] flex flex-col gap-[80px] items-center   px-[125px] text-white    ">
      <h1 className="text-heading/[60px]">
        <span>
          <span className="text-[#9857F8]">Accelerate</span> your Revenue
        </span>
      </h1>

      <div className="w-full flex flex-col items-center gap-[20px]">
        <p className="text-body w-[50%] text-center flex flex-wrap justify-center items-center mb-[20px] ">
          Welcome to Superspace. Quickly submit a brief, review in platform,
          keep track of usage and more in one easy place.
        </p>{" "}
        <BlueButton
          children="Get started"
          className="text-white rounded-cta-raduis w-[153px] h-[37px] text-[16px] "
        />
        <div className="w-full flex flex-col items-center ">
          <div className="flex w-[814px] h-[450px] items-start overflow-hidden max-h-full z-[10]">
            <Image
              src="/images/gif/home.gif"
              width={814}
              height={450}
              alt="GIF"
              className="object-cover "
            />
          </div>
        </div>
      </div>
      <div className="h-[93px] relative bottom-0 flex justify-center items-center  bg-background-blue-300 ">
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
