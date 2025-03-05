import React from "react";
import { FaArrowDown,FaArrowRight } from "react-icons/fa6";

function CaseStudy() {
  const images = [
    "/logos/park.png",
    "/logos/piramal.png",
    "/logos/adani.png",
    "/logos/rvshare.png",
    "/logos/apolo247.png",
  ];
  return (
    <div className=" md:py-[60px] py-[40px] flex flex-col  bg-background-blue-200 gap-[30px] px-[40px] md:px-[125px] items-center justify-center w-full ">
      <div className="flex gap-1 text-[#9DA6AF] items-center justify-center w-[70%] md:w-full">
        <FaArrowDown />
        <span className="text-cta/[24px] font-normal ">
          Click on the logos to view the case study
        </span>
      </div>
      <div className="flex justify-center md:gap-[40px] gap-[20px]">
        {images.map((img) => (
          <img src={img} className="md:w-[192px] w-[96px] object-contain" />
        ))}
      </div>
      <div className="text-white flex flex-col md:flex-row   w-full gap-[30px] ">
        <div className="flex flex-col md:gap-[60px] gap-[40px] w-full md:order-1 order-2">
          <div className="flex flex-col md:text-mediumheading/[52px] text-[34px]/[40px] font-normal gap-[30px] ">
            <div className="md:flex gap-2 items-center hidden ">
              <div className="w-[32px] h-[32px] rounded-cardraius bg-yellow-100"></div>
              <span className="text-xs font-semibold">FEATURED CASE STUDY</span>
            </div>
            <span>
              "Reimagining a Legacy: Redefining Top's India Brand Identity and
              Strategy for the Modern Consumer"
            </span>
            <div className="flex md:flex-row flex-col text-[#20DF79] gap-[30px] text-[48px]/[55px] md:text-[80px]/[88px] font-normal">
              <div className="flex flex-col md:gap-4 gap-2">
                <span>250%</span>
                <span className="text-body/[21.6%] font-normal text-[#C5CCD3]">
                  Increase in Click Rate
                </span>
              </div>
              <div className="flex flex-col md:gap-4 gap-2">
                <span>192k+</span>
                <span className="text-body/[21.6%] font-normal text-[#C5CCD3]">
                  Leads Generated with Creatives
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <span className="text-[20px]/[24%] font-normal ">
              Read Case Study
            </span>
            <div className="w-[31px] h-[31px] rounded-full flex items-center justify-center bg-background-white-100 text-black cursor-pointer">
              <FaArrowRight size={20} />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:hidden">
          <div className="flex gap-2 items-center ">
            <div className="w-[32px] h-[32px] rounded-cardraius bg-yellow-100"></div>
            <span className="text-xs font-semibold">FEATURED CASE STUDY</span>
          </div>
        </div>
        <img
          src="/images/pizza.png"
          alt=""
          className="md:h-[513px] md:w-[473px] h-[298px] w-[297px]  object-cover md:order-2 order-1"
        />
      </div>
    </div>
  );
}

export default CaseStudy;
