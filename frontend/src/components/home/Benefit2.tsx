// components/BenefitProcess.js

import React from "react";
import Image from "next/image";
import researchImage from "/public/images/research.png"; // Replace with your image path
import prototypingImage from "/public/images/prototyping.png"; // Replace with your image path
import implementationImage from "/public/images/implementation.png"; // Replace with your image path

const BenefitProcess = () => {
  const processes = [
    {
      title: "Innovative Research & Creative Ideation",
      descriptiontitile: "Market Research:",
      descriptions: [
        {
          descriptiontitile: "Concept Development:",
          description:
            " Brainstorming, designing, and creating prototypes that directly impact the ability to serve growth.",
        },
        {
          descriptiontitile: "Concept Development:",
          description:
            " Brainstorming, designing, and creating prototypes that directly impact the ability to serve growth.",
        },
      ],
      image: researchImage,
      process: "PROCESS 1",
      bulletColor: "bg-[#1DC96C]",
      bgColor: "bg-[#EAEDF0]", // Light blue background
    },
    {
      title: "Concept Creation & Precision Prototyping",
      descriptions: [
        {
          descriptiontitile: "Concept Development:",
          description:
            " Brainstorming, designing, and creating prototypes that directly impact the ability to serve growth.",
        },
        {
          descriptiontitile: "Concept Development:",
          description:
            " Brainstorming, designing, and creating prototypes that directly impact the ability to serve growth.",
        },
      ],
      image: prototypingImage,
      process: "PROCESS 2",
      bulletColor: "bg-[#00C5E5]",
      bgColor: "bg-[#D0F8FF]", // Light blue background
    },
    {
      title: "Design Implementation & Visual Testing",
      descriptiontitile: "Digital Product Design:",
      descriptions: [
        {
          descriptiontitile: "Concept Development:",
          description:
            " Brainstorming, designing, and creating prototypes that directly impact the ability to serve growth.",
        },
        {
          descriptiontitile: "Concept Development:",
          description:
            " Brainstorming, designing, and creating prototypes that directly impact the ability to serve growth.",
        },
      ],
      image: implementationImage,
      process: "PROCESS 3",
      bulletColor: "bg-[#7566FF]",
      bgColor: "bg-[#F0E5FF]", // Light purple background
    },
  ];

  return (
    <div className="flex flex-col items-center md:py-[60px] md:px-[129px] w-full gap-[60px]">
      <h1 className="font-helvetica text-heading/[69px] text-start w-full">
        Designera will Benefit You.
      </h1>

      <div className="flex flex-col gap-[60px]">
        {processes.map((process, index) => (
          <div key={index} className={`flex p-6  ${process.bgColor} w-full p-[30px] px-[80px] gap-[80px] h-[620px] max-h-[620px] rounded-[16px] `}>
            {" "}
            <div className="flex flex-col gap-[30px] py-[60px]">
              <div className="flex gap-2 items-center">
                <span className={`w-[32px] h-[32px] ${process.bulletColor} rounded-[2px] `}></span><span className="text-footer/[18px] font-semibold ">{process.process}</span>
              </div>

              <h3 className="text-mediumheading/[52px] font-semibold">{process.title}</h3>
              <ul className="space-y-[30px]" >{process.descriptions.map((item)=>
            (
                <li><span className="font-semibold text-body">{item.descriptiontitile}</span><span className="text-body">{item.description}</span></li>
            ))}</ul>
            </div>
            <div className="mt-4">
              <Image
                src={process.image}
                alt={process.title}
                className="object-cover rounded-lg md:min-w-[497px] md:min-h-[524px]"
                width={497} // Adjust width as needed
                height={524} // Adjust height as needed
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitProcess;
