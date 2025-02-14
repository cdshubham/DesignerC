import React from "react";
import WhiteButton from "../ui/WhiteButton";
import { MdArrowOutward } from "react-icons/md";
function DesignWillBenifitYou() {
  return (
    <div className="md:py-[120px] w-full bg-background-blue-100 flex flex-col  text-white md:px-[125px] gap-[60px]">
      <span className="md:text-heading/[68.99px]  ">
        Designera Will Benifit You.
      </span>
      <div className="flex flex-col gap-[36px]">
        <div className="flex bg-background-white-100 relative w-full mx-auto  md:py-[60px] overflow-hidden md:pl-[60px] lg:pl-[50px] rounded-t-cards-raduis rounded-l-cards-raduis ">
          <div className="md:max-w-[483px] flex flex-col gap-[30px]  text-black  lg:pr-[125px]">
            <span className="text-[32px]/[36.8px] text-justify font-bold">
              Hire Us or On-board Top 1% Creative Talent ✨
            </span>
            <span className="text-body/[20.7px] text-justify font-normal">
              Collaborate with our expert team for tailored, high-quality
              designs aligned with your brand’s goals, or onboard top creative
              talent for fresh perspectives. Our flexible approach ensures
              impactful, client-focused solutions that resonate with your
              audience.
            </span>
            <WhiteButton
              Component={MdArrowOutward}
              children="Hire Designera"
              className="text-background-blue-100 font-normal text-cta  flex justify-center md:w-[140px]"
            />
          </div>

          <img
            src="/images/benifit.png"
            alt=""
            className=" md:h-[439px] absolute -right-28 top-3  object-contain  "
          />
        </div>

        <div className="grid grid-cols-3 md:gap-[36px] md:h-[573px]">
          <div className=" md:px-[50px] md:py-[30px] col-span-1  bg-background-white-100 text-black  rounded-cards-raduis relative flex flex-col">
            <div className="flex flex-col gap-[20px]  ">
              <span className="text-[32px]/[36.8px] font-bold ">
                Creatives that Drives Revenue 💵
              </span>
              <span className="text-body/[20.7px] text-justify">
              Strategically crafted concepts that captivates engagement and
              boost conversions to maximize Profitability.
              
              </span>
              <button className="flex md:w-[140px] text-background-blue-100 font-normal text-cta  items-center gap-1">
                <span> Know more</span>
                <MdArrowOutward />
              </button>
            </div>
            <img src="/images/creative.png" alt="" className=" md:w-[327px] absolute object-contain bottom-0 right-2" />
          </div>
          <div className="md:px-[60px] md:py-[30px] col-span-2  bg-background-white-100 text-black  rounded-t-cards-raduis rounded-l-cards-raduis  relative overflow-hidden">
            <div className="flex flex-col gap-[20px] md:w-[599px]">
              <span className="text-[32px]/[36px] font-bold ">
              Top-notch quality, consistently delivered with excellence 😍
              </span>
              <span className="text-body/[20.7px] text-justify">
              Scale your content with precisely crafted visuals that ensure consistency and lasting impact, seamlessly aligning with your brand to create engaging, resonant results.
              </span>
              <button className="flex md:w-[140px] text-background-blue-100 font-normal text-cta  items-center gap-1">
                <span> Know more</span>
                <MdArrowOutward />
              </button>
            </div>
            <img src="/images/excellence.png" alt="" className=" md:w-[707px] absolute object-contain -bottom-12 -right-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignWillBenifitYou;
