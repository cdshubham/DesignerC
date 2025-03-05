import React from "react";
import WhiteButton from "../ui/WhiteButton";
import { MdArrowOutward } from "react-icons/md";
function DesignWillBenifitYou() {
  return (
    <div className="w-full md:py-[60px] bg-[#F9F5EC] flex flex-col  text-black md:px-[125px] gap-[60px] p-[40px]">
      <span className="text-[28px]/[32.2px] md:text-heading/[68.99px]  ">
        Designera Will Benefit You.
      </span>
      <div className="flex flex-col gap-[30px] md:gap-[36px]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[387px] overflow-hidden bg-background-white-100  rounded-cardradius ">
          <div className="max-w-full p-[24px] md:p-[50px] flex flex-col gap-2 md:gap-[30px]  text-black  ">
            <span className="text-[24px]/[27.6px] md:text-[32px]/[36.8px] md:text-justify font-bold w-full md:w-[75%]">
              Hire Us or On-board Top 1% Creative Talent ✨
            </span>
            <span className=" text-[16px]/[18.4px] md:text-body/[20.7px] md:text-justify font-normal">
              Collaborate with our expert team for tailored, high-quality
              designs aligned with your brand’s goals, or onboard top creative
              talent for fresh perspectives. Our flexible approach ensures
              impactful, client-focused solutions that resonate with your
              audience.
            </span>
            <WhiteButton
              Component={MdArrowOutward}
              children="Hire Designera"
              className="text-background-blue-100 font-normal text-cta  flex justify-center md:w-[140px] self-start md:self-center mt-4 md:mt-0"
            />
          </div>
          <div className="h-full flex items-start justify-start">
            <img
              src="/images/benifit.png"
              alt=""
              className=" md:h-[439px]  object-cover rounded-cardradius  "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[36px] min-h-[484px] md:h-[573px] overflow-hidden">
          <div className=" md:px-[50px] md:pt-[40px] py-10 px-6  col-span-1  bg-background-white-100 text-black  rounded-cards-raduis relative flex flex-col items-center">
            <div className="flex flex-col gap-2 md:gap-[20px] md:min-w-[327px] ">
              <span className="text-[24px]/[27.6px] md:text-[32px]/[36.8px] font-bold ">
                Creatives that Drives Revenue 💵
              </span>
              <span className="text-[16px]/[18.4px] md:text-body/[20.7px] md:text-justify">
                Strategically crafted concepts that captivates engagement and
                boost conversions to maximize Profitability.
              </span>
              <button className="flex md:w-[140px] text-background-blue-100 font-normal text-cta  items-center gap-1">
                <span> Know more</span>
                <MdArrowOutward />
              </button>
            </div>
            <div className="flex w-full justify-center">
              <img
                src="/images/creative.png"
                alt=""
                className="w-[242.58px] md:w-[327px] absolute object-contain top-[260px] right-1/2 translate-x-1/2 rounded-cardradius"
              />
            </div>
          </div>
          <div className="hidden md:block md:px-[60px] md:py-[30px] md:col-span-2  bg-background-white-100 text-black  rounded-t-cards-raduis rounded-l-cards-raduis  relative overflow-hidden">
            <div className="flex flex-col gap-[20px] md:w-[599px]">
              <span className="text-[32px]/[36px] font-bold ">
                Top-notch quality, consistently delivered with excellence 😍
              </span>
              <span className="text-body/[20.7px] text-justify">
                Scale your content with precisely crafted visuals that ensure
                consistency and lasting impact, seamlessly aligning with your
                brand to create engaging, resonant results.
              </span>
              <button className="flex md:w-[140px] text-background-blue-100 font-normal text-cta  items-center gap-1">
                <span> Know more</span>
                <MdArrowOutward />
              </button>
            </div>

            <img
              src="/images/excellence.png"
              alt=""
              className=" w-full min-h-[400px] absolute left-[60px] top-[260px]  object-cover rounded-cardradius "
            />
          </div>
        </div>
        <div className="md:hidden min-h-[418px] py-5 px-6  bg-background-white-100 text-black  rounded-t-cards-raduis rounded-l-cards-raduis  relative overflow-hidden">
            <div className="flex flex-col gap-[20px] md:w-[599px]">
              <span className="text-[24px]/[27.6px] md:text-[32px]/[36px] font-bold ">
                Top-notch quality, consistently delivered with excellence 😍
              </span>
              <span className="text-[16px]/[18.4px] md:text-body/[20.7px] md:text-justify">
                Scale your content with precisely crafted visuals that ensure
                consistency and lasting impact, seamlessly aligning with your
                brand to create engaging, resonant results.
              </span>
              <button className="flex md:w-[140px] text-background-blue-100 font-normal text-cta  items-center gap-1">
                <span> Know more</span>
                <MdArrowOutward />
              </button>
            </div>

            <img
              src="/images/excellence.png"
              alt=""
              className="w-[255px] mt-4 md:mt-0 md:w-full md:min-h-[400px] absolute md:left-[60px] md:top-[260px]  object-cover rounded-cardradius "
            />
          </div>
      </div>
    </div>
  );
}

export default DesignWillBenifitYou;
