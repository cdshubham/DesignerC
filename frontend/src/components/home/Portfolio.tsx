import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Portfolio() {
  return (
    <div className="w-full px-4 md:px-[125px] py-8 md:py-[60px] bg-background-blue-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[30px]">
        <div className="w-full md:w-auto flex flex-col items-center md:items-start gap-6 md:gap-[30px]">
          <img
            src="/logos/zepto.png"
            alt="Zepto Logo"
            className="w-[260px] md:w-[235px] h-auto object-contain"
          />
          <div className="flex flex-col md:items-start gap-1  md:text-left self-start pl-11 sm:pl-0">
            <span className="text-lg md:text-[20px] text-[#FFD97C]">
              Sanskruti Verma
            </span>
            <span className="text-lg md:text-[20px] text-white">
              Visual Design Manager
            </span>
          </div>
        </div>

        <div className="w-full md:w-[812px] bg-white rounded-cardradius p-6 md:p-[30px] flex flex-col gap-6 md:gap-[30px]">
          <p className="text-body text-base md:text-[20.7px] md:text-left font-semibold p-2">
            Zepto has partnered with Designera to enhance our brand's visual
            identity through expert graphic design. This collaboration drives
            revenue growth by creating high-quality, engaging designs that
            resonate with our audience. Together, we're scaling our brand and
            staying ahead in a competitive market.
          </p>

          <button className="flex items-center  md:justify-start gap-2 text-background-blue-100 font-normal text-base md:text-cta  md:mx-0 md:w-[140px] pl-2">
            <span>View Portfolio</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className=" flex gap-2  md:w-[1000px] mx-auto justify-end right-0 mt-4 ml-36">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`lg:h-[6px] lg:w-[6px]  rounded-full lg:border  ${
              index === 0 ? "bg-background-blue-100" : "bg-[#B0B0B0]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
