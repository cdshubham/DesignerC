import React from "react";
import WhiteButton from "../ui/WhiteButton";
import { MdArrowOutward } from "react-icons/md";

function DesignWillBenefitYou() {
  return (
    <div className="w-full py-8 md:py-[60px] bg-[#F9F5EC] flex flex-col text-black px-4 md:px-[125px] space-y-8 md:space-y-[60px]">
      <h1 className="text-2xl md:text-5xl font-bold text-start md:text-left">
        Designera Will Benefit You.
      </h1>
      
      <div className="flex flex-col space-y-6 md:space-y-[36px]">
        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg overflow-hidden shadow-md">
          <div className="p-6 md:p-[50px] flex flex-col justify-center ">
            <h2 className="text-xl md:text-[32px] font-bold text-start md:text-left">
              Hire Us or On-board Top 1% Creative Talent ✨
            </h2>
            <p className="text-base md:text-body text-start md:text-left">
              Collaborate with our expert team for tailored, high-quality
              designs aligned with your brand's goals, or onboard top creative
              talent for fresh perspectives. Our flexible approach ensures
              impactful, client-focused solutions that resonate with your
              audience.
            </p>
            <div className="flex justify-start text-start items-start">
              <WhiteButton
                Component={MdArrowOutward}
                children="Hire Designera"
                className="text-background-blue-100 font-normal text-base md:text-cta flex items-start justify-center w-full md:w-[140px] text-start"
              />
            </div>
          </div>
          <div className="h-full w-full">
            <img
              src="/images/benifit.png"
              alt="Design benefit"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Second Section with Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[36px]">
          {/* Left Column */}
          <div className="bg-white rounded-lg p-6 md:p-[50px] flex flex-col items-center text-start relative">
            <div className="space-y-4 md:space-y-[20px] max-w-full">
              <h2 className="text-xl md:text-[32px] font-bold">
                Creatives that Drives Revenue 💵
              </h2>
              <p className="text-base md:text-body">
                Strategically crafted concepts that captivates engagement and
                boost conversions to maximize Profitability.
              </p>
              <button className="mx-auto flex items-center justify-center space-x-1 text-background-blue-100 font-normal text-base md:text-cta">
                <span>Know more</span>
                <MdArrowOutward />
              </button>
            </div>
            <div className="mt-8 md:mt-0 md:absolute md:bottom-0">
              <img
                src="/images/creative.png"
                alt="Creative design"
                className="w-48 md:w-[327px] object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 bg-white rounded-lg p-6 md:p-[60px] relative overflow-hidden">
            <div className="space-y-4 md:space-y-[20px] max-w-full md:max-w-[599px]">
              <h2 className="text-xl md:text-[32px] font-bold">
                Top-notch quality, consistently delivered with excellence 😍
              </h2>
              <p className="text-base md:text-body">
                Scale your content with precisely crafted visuals that ensure
                consistency and lasting impact, seamlessly aligning with your
                brand to create engaging, resonant results.
              </p>
              <button className="flex items-center justify-start space-x-1 text-background-blue-100 font-normal text-base md:text-cta">
                <span>Know more</span>
                <MdArrowOutward />
              </button>
            </div>
            <div className="mt-8 md:mt-0 md:absolute md:bottom-0 md:left-[60px]">
              <img
                src="/images/excellence.png"
                alt="Design excellence"
                className="w-full md:w-[calc(100%-60px)] h-48 md:h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignWillBenefitYou;