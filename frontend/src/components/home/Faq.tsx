'use client'
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

  // State to track which items are open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to show/hide content
  const handleToggle = (index:any) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full bg-background-white-100 py-[60px] px-[30px] md:px-[125px] flex flex-col gap-[30px]">
      <span className="text-[28px]/[32px] md:text-heading/[68.99%] font-normal md:pt-[30px]">
        Resolve your Doubts here.
      </span>

      <ol className="flex flex-col w-full">
        {content.map((item, index) => (
          <li key={index} className="flex md:gap-[30px] gap-[10px] w-full py-[30px]">
            <span className="text-[16px] md:text-subheading/[28px] font-semibold">
              {index + 1}.
            </span>

            <div className="flex flex-col w-full text-[16px]/[18.4px] md:text-subheading/[27.6px] font-bold gap-[20px]">
              {/* Question Header */}
              <div className="flex justify-between w-full">
                <span className="md:w-full w-[70%]">{item.heading}</span>

                <div
                  className={`md:w-[45px] md:h-[45px] w-[30px] h-[30px] rounded-full cursor-pointer flex items-center justify-center ${
                    openIndex === index
                      ? "bg-background-blue-100 text-white"
                      : "border border-background-blue-100 text-background-blue-100"
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  {openIndex === index ? <RxCross2 /> : <FiPlus />}
                </div>
              </div>

              {/* Conditionally Rendered Content */}
              {openIndex === index && (
                <span className="text-[14px]/[16px] md:text-body/[27px] font-normal">
                  {item.sub}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Faq;
