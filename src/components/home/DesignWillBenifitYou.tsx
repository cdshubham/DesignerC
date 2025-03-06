import React from "react";
import WhiteButton from "../ui/WhiteButton";
import { MdArrowOutward } from "react-icons/md";

function DesignWillBenefitYou() {
  return (
    <div className="w-full py-8 md:py-[60px] bg-[#F9F5EC] flex flex-col text-black px-4 md:px-[125px] space-y-8 md:space-y-[60px]">
      <h1 className="text-3xl md:text-5xl text-start md:text-left font-thin ">
        Designera Will Benefit You.
      </h1>

      <div className="flex flex-col space-y-6 md:space-y-[36px]">
        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-md overflow-hidden shadow-md ">
          <div className="p-6 md:p-[50px] flex flex-col justify-center ">
            <h2 className="text-3xl md:text-[32px] font-bold text-start md:text-left  lg:mb-8">
              Hire Us or On-board Top 1% Creative Talent ✨
            </h2>
            <p className="text-[18px] font-medium leading-[1.2rem] md:text-body text-start md:text-left pr-6">
              Collaborate with vetted experts and creative teams who have a
              proven track record with renowned brands such as ITC, Apollo,
              Amazon, Kotak Bank, and many more.
            </p>
            <div className="flex justify-start text-start items-start mt-4 w-fit">
              <WhiteButton
                Component={MdArrowOutward}
                children="Hire Designera"
                className="text-background-blue-100 font-normal text-base md:text-cta flex items-start justify-center  text-start"
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
              <h2 className="text-3xl md:text-[32px] font-bold text-start md:text-lef lg:w-[290px]">
                Creatives that Drives Revenue 💵
              </h2>
              <p className="text-[18px] font-medium leading-[1.2rem] lg-leading-[2rem] md:text-body text-start md:text-left pr-6">
                Strategically crafted concepts that captivates engagement and
                boost conversions to maximize Profitability.
              </p>
              <div className="flex justify-start text-start items-start pb-8">
                <WhiteButton
                  Component={MdArrowOutward}
                  children="Know more"
                  className="text-background-blue-100 font-normal text-base md:text-cta flex items-start justify-center md:w-[140px] text-start"
                />
              </div>
            </div>
            <div className="h-full w-full">
              <img
                src="/images/creative.png"
                alt="Creative design"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 bg-white rounded-lg p-6 md:p-[60px] relative overflow-hidden">
            <div className="space-y-4 md:space-y-[20px] max-w-full md:max-w-[599px]">
              <h2 className="text-3xl md:text-[32px] font-bold text-start md:text-lef pr-4">
                Top-notch quality, consistently delivered with excellence 😍
              </h2>
              <p className="text-[18px] font-medium leading-[1.2rem] md:text-body text-start md:text-left pr-8">
                Our video process is well-structured, with defined steps,
                rigorous quality checks, and set turnaround times, ensuring a
                seamless journey from start to finish.
              </p>
              <div className="flex justify-start text-start items-start">
                <WhiteButton
                  Component={MdArrowOutward}
                  children="Know more"
                  className="text-background-blue-100 font-normal text-base md:text-cta flex items-start justify-center md:w-[140px] text-start space-x-1"
                />
              </div>
            </div>
            <div className="w-full h-full mt-4">
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
