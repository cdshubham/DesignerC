"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

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
      sub: "We align with your brand's identity by integrating your style guides, visual elements, and feedback throughout the design process.",
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
      sub: "We employ user-centered design principles, conducting thorough research, creating user personas, and iteratively testing and refining designs based on user feedback and behavior.",
    },
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white px-8 sm:px-6 md:px-12 lg:px-[125px] py-8 sm:py-12 md:py-[60px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 md:mb-[30px]">
          Resolve your Doubts here
        </h2>

        <div className="space-y-4 sm:space-y-6 md:space-y-[30px]">
          {content.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 sm:pb-6 md:pb-[30px]"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center space-x-4 sm:space-x-6 w-[calc(100%-60px)] sm:w-[calc(100%-80px)]">
                  <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 flex-shrink-0">
                    {index + 1}.
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                    {item.heading}
                  </h3>
                </div>

                <div
                  className={`
                    flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-[45px] md:h-[45px] 
                    rounded-full flex items-center justify-center 
                    transition-all duration-800
                    ${
                      openIndex === index
                        ? "bg-blue-900 text-white"
                        : "bg-blue-100 text-blue-900 hover:bg-blue-200 border-blue-900 border-[1.3px]"
                    }`}
                >
                  {openIndex !== index ? <FiPlus /> : <RxCross2 />}
                </div>
              </div>

              {openIndex === index && (
                <div className="mt-4 sm:mt-6 md:mt-[30px] pl-0 sm:pl-10 md:pl-[50px]">
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    {item.sub}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
