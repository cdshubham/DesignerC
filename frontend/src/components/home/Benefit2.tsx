import React from "react";
import Image from "next/image";
import researchImage from "/public/images/research.png";
import prototypingImage from "/public/images/prototyping.png";
import implementationImage from "/public/images/implementation.png";

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
      bgColor: "bg-[#EAEDF0]",
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
      bgColor: "bg-[#D0F8FF]",
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
      bgColor: "bg-[#F0E5FF]",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 py-8 sm:py-12 md:py-16 lg:py-[60px] sm:px-8 md:px-12 lg:px-16 xl:px-[129px] gap-8 md:gap-12 lg:gap-[60px]">
      <h1 className="font-helvetica text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-heading leading-tight md:leading-[69px] text-start w-full">
        Designera will Benefit You.
      </h1>

      <div className="flex flex-col w-full gap-6 sm:gap-8 md:gap-10 lg:gap-[60px]">
        {processes.map((process, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${process.bgColor} w-full p-6 sm:p-8 md:p-10 lg:p-[30px] lg:px-[40px] xl:px-[80px] gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] xl:gap-[80px] rounded-[16px] overflow-hidden`}
          >
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-[30px] py-4 sm:py-6 md:py-8 lg:py-[30px] xl:py-[60px]">
              <div className="flex gap-2 items-center">
                <span
                  className={`w-6 h-6 sm:w-8 sm:h-8 md:w-[32px] md:h-[32px] ${process.bulletColor} rounded-[2px]`}
                ></span>
                <span className="text-sm sm:text-base md:text-footer leading-tight md:leading-[18px] font-semibold">
                  {process.process}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-mediumheading leading-tight lg:leading-[52px] font-semibold">
                {process.title}
              </h3>

              <ul className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-[30px]">
                {process.descriptions.map((item, idx) => (
                  <li key={idx}>
                    <span className="font-semibold text-sm sm:text-base md:text-body">
                      {item.descriptiontitile}
                    </span>
                    <span className="text-sm sm:text-base md:text-body">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-auto mt-4 flex justify-center lg:justify-end">
              <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:min-w-[350px] xl:min-w-[497px] lg:h-[450px] xl:h-[524px]">
                <Image
                  src={process.image}
                  alt={process.title}
                  className="object-cover rounded-lg"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitProcess;
