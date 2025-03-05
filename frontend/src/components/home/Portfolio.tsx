import React from "react";
import { FaArrowRight } from "react-icons/fa6";
function Portfolio() {
  return (
    <div className="w-full px-5 py-14 md:px-[125px] items-center justify-center  md:py-[60px] text-body/[20.7px] gap-[30px] flex flex-col font-normal bg-background-blue-100">
      <div className="w-full flex gap-8 md:gap-0 md:flex-row flex-col justify-between  items-center ">
        <div className="flex flex-col  gap-[30px]">
          <img
            src="/logos/zepto.png"
            alt=""
            className="w-[235px] h-[91px] object-contain"
          />
          <div className="flex flex-col gap-1">
            <span className="text-[20px]/[23px] text-[#FFD97C]">
              Sanskruti Verma
            </span>
            <span className="= text-white text-[20px]/[23px]">
              Visual Design Manager
            </span>
          </div>
        </div>
        <div className="w-[300px]  md:w-[812px] p-[30px] bg-white flex flex-col gap-[30px] rounded-cardradius ">
          <span className="text-[18px]/[20.7px] md:text-body">
            Zepto has partnered with Designera to enhance our brand’s visual
            identity through expert graphic design. This collaboration drives
            revenue growth by creating high-quality, engaging designs that
            resonate with our audience. Together, we’re scaling our brand and
            staying ahead in a competitive market.
          </span>

          <button className="flex md:w-[140px] text-background-blue-100 font-normal text-cta  items-center gap-2">
            <span>View Portfolio</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className=" flex gap-2  md:w-[1000px] mx-auto justify-end right-0">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-[9px] w-[9px]  rounded-full border  ${
              index === 0 ? "bg-background-blue-100" : "bg-[#B0B0B0]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
