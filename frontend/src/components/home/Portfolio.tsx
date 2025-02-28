import React from "react";
import { FaArrowRight } from "react-icons/fa6";
function Portfolio() {
  return (
    <div className="w-full md:px-[125px] items-center justify-center  md:py-[60px] text-body/[20.7px] gap-[30px] flex flex-col font-normal bg-background-white-200">
      <div className=" flex justify-center gap-[30px] items-center ">
        <div className="flex flex-col md:w-[247px] gap-[30px]">
          <img
            src="/logos/zepto.png"
            alt=""
            className="md:w-[155px] object-contain"
          />
          <div className="flex flex-col gap-1">
            <span>Sanskruti Verma</span>
            <span className="= text-[#B0B0B0]">Visual Design Manager</span>
          </div>
        </div>
        <div className="md:w-[720px] md:p-[30px] bg-background-white-100 flex flex-col gap-[30px] rounded-cards-raduis ">
          <span>
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
