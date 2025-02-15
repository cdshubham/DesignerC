import React from "react";
import BlueButton from "../ui/BlueButton";

function Hiring() {
    const content = ["Get Placed with Top Brands Like Google and Amazon","Showcase Your Creative Talent to the World","Get Hired for Projects That Elevate Your Career."]
  return (
    <div className="md:py-[60px] md:px-[129px] bg-background-white-200 flex flex-col gap-[60px]">
      <div className="text-base font-normal text-[#B0B0B0] flex bg-[#F9F5EC] w-fit">
        <span className="w-[152px] h-[48px] flex items-center justify-center border-b-4 border-background-blue-100 rounded-b-lg text-background-blue-100">
          For Candidates
        </span>
        <span className="w-[152px] h-[48px] flex items-center justify-center border-b-2 ">
          For Enterprises
        </span>
      </div>

      <div className="flex justify-between h-full w-full">
        <div className="flex flex-col gap-[30px] col-span-1 w-1/2 ">
          <div className="flex flex-col gap-6 text-heading/[69.99%] font-normal text-justify">
            <span>Scale your Teams</span>
            <span>Faster by Hiring</span>
            <div className="flex gap-1">
              <span>the </span>
              <span className="text-background-blue-100">Top 1%</span>
              <span> Skilled</span>
            </div>
            <span>Creative Talent.</span>
          </div>
          <span className="text-body/6 font-normal">
            Join an exclusive talent pool and connect with leading brands,
            searching for top creative professionals. Showcase your expertise,
            land your dream role, and redefine your career with endless
            opportunities.
          </span>
          <ul className="list-disc text-body/6 font-normal md:px-5">
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
          </ul>
          <BlueButton children="Become Talent" className="w-[153px] py-2 text-white" />
        </div>

        <div className="h-full ">
            <img src="/images/hiring.png" alt="" className=" object-cover rounded-cta-raduis"/>
        </div>
      </div>
    </div>
  );
}

export default Hiring;
