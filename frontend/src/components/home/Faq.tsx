"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";

function Faq() {
  const content = [
    {
      heading: "What services does Designera offer in graphic designing?",
      sub: "Designera provides a full suite of graphic design services, including logo design, social media creatives, ad banners, branding collaterals, infographics, packaging, and more.",
    },
    {
      heading: "Can you design interfaces for both web and mobile platforms?",
      sub: "Yes, we specialize in creating responsive designs that ensure consistent and engaging user experiences across web and mobile platforms.",
    },
    {
      heading: "How do you ensure the designs meet our brand guidelines?",
      sub: "We align with your brand’s identity by integrating your style guides, visual elements, and feedback throughout the design process.",
    },
    {
      heading: "What tools do you use for UI/UX design?",
      sub: "We utilize industry-leading tools like Figma, Sketch, Adobe XD, and InVision to create interactive prototypes and high-fidelity designs.",
    },
    {
      heading: "Do you offer usability testing for the designs?",
      sub: "Yes, we conduct usability testing to gather user feedback and refine designs for maximum functionality and engagement.",
    },
    {
      heading: "How do you ensure the designs are user-focused?",
      sub: "We conduct user research, interviews, and usability tests to gather insights and craft designs centered around user needs.",
    },
  ];

  const [accoridanstatus, setStatus] = useState<boolean[]>(
    content.map(() => false)
  );
  return (
    <div className="w-full bg-background-white-100 py-[40px] md:py-[60px] md:px-[125px] px-[40px] flex flex-col gap-[30px]">
      <span className="md:text-heading/[68.99%] text-mobilesubheading font-normal md:pb-[30px]">
        Resolve your Doubts here.
      </span>
      <ol className="flex flex-col gap-[30px]  w-full">
        {content.map((item, index) => (
          <li className="flex gap-[30px] w-full ">
            <span className="text-subheading/[28px] font-semibold">
              {index + 1}.
            </span>
            <div className="flex flex-col w-full text-subheading/[27.6px] font-bold md:gap-[20px]">
              <div className="flex justify-between w-full">
                <span>{item.heading}</span>
                {accoridanstatus[index] ? (
                  <div
                    className="w-[45px] h-[45px] rounded-full cursor-pointer bg-background-blue-100 flex text-white items-center justify-center"
                    onClick={() => {
                      const newstatus = [...accoridanstatus];
                      newstatus[index] = !newstatus[index];
                      setStatus(newstatus);
                    }}
                  >
                    <RxCross2 />
                  </div>
                ) : (
                  <div
                    className="w-[45px] h-[45px] rounded-full text-background-blue-100 cursor-pointer flex border border-background-blue-100 items-center justify-center"
                    onClick={() => {
                      const newstatus = [...accoridanstatus];
                      newstatus[index] = !newstatus[index];
                      setStatus(newstatus);
                    }}
                  >
                    <FiPlus />
                  </div>
                )}
              </div>
              <span
                className={`${
                  accoridanstatus[index] === true && item.sub !== ""
                    ? "block"
                    : "hidden"
                } text-body/[27px] font-normal `}
              >
                {item.sub}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Faq;
