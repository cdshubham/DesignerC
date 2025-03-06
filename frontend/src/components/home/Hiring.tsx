import React from "react";
import BlueButton from "../ui/BlueButton";

function Hiring() {
  const content = [
    "Get Placed with Top Brands Like Google and Amazon",
    "Showcase Your Creative Talent to the World",
    "Get Hired for Projects That Elevate Your Career.",
  ];
  return (
    <div className=" p-[32px] items-center justify-center w-full md:py-[60px] md:px-[125px] bg-background-white-200 flex flex-col gap-8 md:gap-[60px]">
      <div className="md:hidden md:text-[48px]/[55.2px] md:text-left md:w-full text-[28px]/[32.2px] pt-[60px] md:pt-0">
        Get Access to the <span className="text-lighter-violet">Top 1%</span>
      </div>
      <div className="md:hidden text-base font-normal text-[#B0B0B0] flex bg-[#F9F5EC] w-fit md:self-start">
        <span className="w-[152px] h-[48px] flex items-center justify-center border-b-4 border-background-blue-100 rounded-b-lg text-background-blue-100">
          For Candidates
        </span>
        <span className="w-[152px] h-[48px] flex items-center justify-center border-b-2 ">
          For Enterprises
        </span>
      </div>

      <div className="pb-[60px] md:pb-0 flex md:flex-row flex-col gap-5 md:gap-0 justify-between h-full w-full">
        <div className="flex flex-col gap-8">
          <div className="hidden md:flex md:text-[48px]/[55.2px] md:text-left md:w-full text-[28px]/[32.2px] pt-[60px] md:pt-0">
            Get Access to the{" "}
            <span className="text-lighter-violet">Top 1%</span>
          </div>
          <div className="hidden text-base font-normal text-[#B0B0B0] md:flex bg-[#F9F5EC] w-fit md:self-start">
            <span className="w-[152px] h-[48px] flex items-center justify-center border-b-4 border-background-blue-100 rounded-b-lg text-background-blue-100">
              For Candidates
            </span>
            <span className="w-[152px] h-[48px] flex items-center justify-center border-b-2 ">
              For Enterprises
            </span>
          </div>
          <div className="flex flex-col gap-[30px] col-span-1 w-full md:w-1/2 ">
            {/* <div className="flex flex-col gap-6 md:text-heading/[69.99%] font-normal text-justify">
            <span>Scale your Teams</span>
            <span>Faster by Hiring</span>
            <div className="flex gap-1">
              <span>the </span>
              <span className="text-background-blue-100">Top 1%</span>
              <span> Skilled</span>
            </div>
            <span>Creative Talent.</span>
          </div> */}
            <span className="md:text-[32px]/[36.8px] md:w-[445px] font-bold text-[24px]/[27.6px]">
              Designera carefully screens and onboards talent, boasting a
              network of over{" "}
              <span className="text-lighter-violet">
                100,000 skilled designers.
              </span>
            </span>
            <span className="md:text-body/6 md:font-normal md:w-[445px] text-[20px]/[23px]">
              We match you with the best creator and ensure content diversity,
              customized expertise, and editorial excellence.
            </span>
            {/* <ul className="list-disc text-body/6 font-normal md:px-5">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}
            <BlueButton
              children="Get hired"
              className="w-[153px] py-2 text-white self-center md:self-start"
            />
          </div>
        </div>

        <div className="h-full mt-4 md:mt-0">
          <img
            src="/images/getHired.png"
            alt=""
            className="md:h-[531px] object-cover rounded-cta-raduis"
          />
        </div>
      </div>
    </div>
  );
}

export default Hiring;
