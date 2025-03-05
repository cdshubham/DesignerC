
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
  heading: string;
  coloredHeading: string;
  image?: string;
  color: string;
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
  // Add more colors as needed
};

const Bookademo = ({
  heading = "Driving Sales and Capturing Attention Through",
  coloredHeading = "Graphic Designs",
  color = "yellow-100",
  keypoints = [
    "On-board the Top 1% Design Talent.",
    "Communicate your brand’s story.",
    "Impactful Marketing Collateral.",
  ],
  image = "/images/home.png",
}: props) => {
  return (
    <div className="flex flex-col w-full  gap-5  mx-auto  bg-background-blue-300 text-white  justify-between py-[60px] ">
      <div className="  mx-auto flex px-[178px]  items-center ">
        <div className=" md:w-[580px] flex flex-col gap-5 md:pt-16 pr-28  ">
          <div className="flex flex-col  text-heading/[69px] font-normal ">
            <span className="flex flex-wrap ">{heading}</span>

            <span className={colorClasses[color] || "text-yellow-100"}>
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
        <div className="max-h-[61px] max-w-[574px] min-h-max min-w-max">
          <Image
            src={image}
            alt=""
            height={621}
            width={574}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Bookademo;