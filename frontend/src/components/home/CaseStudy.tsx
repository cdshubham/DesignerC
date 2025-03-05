import React from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";

function CaseStudy() {
  const images = [
    "/logos/park.png",
    "/logos/piramal.png",
    "/logos/adani.png",
    "/logos/rvshare.png",
    "/logos/apolo247.png",
  ];
  return (
    <div className=" md:py-[60px] flex flex-col  bg-background-blue-200 gap-[30px] p-6 md:px-[125px] items-center justify-center w-full md:p-5">
      <div className="flex gap-1 text-[#9DA6AF] items-center justify-center">
        <FaArrowDown />
        <span className="text-cta/[24px] font-normal ">
          Click on the logos to view the case study
        </span>
      </div>
      <div className="flex justify-center gap-6 md:gap-[40px] md:w-auto w-full overflow-auto ">
        {images.map((img) => (
          <img src={img} className="w-[95px] md:w-[192px] object-contain" />
        ))}
      </div>
      <div className="text-white flex md:flex-row flex-col w-full gap-[30px] ">
        <div className="md:hidden flex gap-2 items-center">
          <div className="w-[32px] h-[32px] rounded-cardraius bg-yellow-100"></div>
          <span className="text-xs font-semibold">FEATURED CASE STUDY</span>
        </div>
        <img
          src="/images/pizza.png"
          alt=""
          className="md:hidden md:h-[513px] object-cover"
        />
        <div className="flex flex-col gap-[60px] w-full">
          <div className="flex flex-col text-[34px]/[39px] md:text-[46px]/[52px] font-normal gap-[30px] ">
            <div className="hidden md:flex gap-2 items-center">
              <div className="w-[32px] h-[32px] rounded-cardraius bg-yellow-100"></div>
              <span className="text-xs font-semibold">FEATURED CASE STUDY</span>
            </div>
            <span>
              "Reimagining a Legacy: Redefining Top's India Brand Identity and
              Strategy for the Modern Consumer"
            </span>
            <div className="flex md:flex-row flex-col text-[#20DF79] gap-10 md:gap-[30px] text-[48px]/[55.2px] md:text-[80px]/[88px] font-normal">
              <div className="flex flex-col gap-4">
                <span>250%</span>
                <span className="text-body/[21.6%] font-normal text-[#C5CCD3]">
                  Increase in Click Rate
                </span>
              </div>
              <div className="flex flex-col gap-4 ">
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

        <img
          src="/images/pizza.png"
          alt=""
          className="hidden md:block md:h-[513px] object-cover"
        />
      </div>
    </div>
  );
}

export default CaseStudy;
