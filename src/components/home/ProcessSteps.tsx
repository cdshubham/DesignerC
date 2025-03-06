// components/ProcessSteps.js

import React from "react";
import Image from "next/image";

interface Item {
  title: string;
  description: string;
  image: string;
  step: string;
  color: string;
}

interface ProcessStepsProps {
  steps?: Item[];
  mainheading?:string; // Optional prop
}

const defaultSteps: Item[] = [
  {
    title: "Dive Into User Insights",
    description:
      "We unravel user behaviors, craft detailed personas, and map out their journeys to uncover unique needs.",
    image: "/images/yellow.png", // Replace with your image path
    step: "Step 1",
    color: "#FFCA33",
  },
  {
    title: "Craft Stunning Interfaces",
    description:
      "Bringing ideas to life, we design sleek, intuitive prototypes and visually striking user experiences.",
    image: "/images/green.png", // Replace with your image path
    step: "Step 2",
    color: "#4DE593",
  },
  {
    title: "Test and Execute",
    description:
      "With rigorous usability testing and fine-tuning, we polish every detail to deliver flawless experiences.",
    image: "/images/purple.png", // Replace with your image path
    step: "Step 3",
    color: "#B78EF0",
  },
];

const ProcessSteps: React.FC<ProcessStepsProps> = ({
  steps = defaultSteps,mainheading="Hire Writers from Designera or  get Pre-Vetted Top Expert Writers for your Project"
}) => {
  return (
    <div className="flex flex-col gap-[30px] md:py-[60px] md:px-[125px] items-center justify-center w-full">
      <div className="text-heading/[69px] w-full flex justify-start">
        <span className="w-[80%] ">{mainheading}</span>
      </div>

      <div className="flex flex-col gap-[30px]">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex h-[476px] gap-[80px]  ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center`}
          >
            <div className="h-full w-full flex items-center justify-start">
              <div className={`flex flex-col  rounded-lg  py-[36px] `}>
                <div className="flex gap">
                  <span
                    className={`h-[32px] w-[32px] aspect-square rounded-[2px]`}
                    style={{ backgroundColor: step.color }}
                  ></span>
                  <span className="text-subheading/[29px] font-semibold px-[16px] ">
                    {step.step}
                  </span>
                </div>
                <div className="w-full flex flex-col gap-6">
                  <h3 className="text-mediumheading/[52px] mt-2">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-body text-gray-100">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`w-full md:min-w-[500px] md:max-w-[500px] md:h-[476px]`}
            >
              <Image
                src={step.image}
                alt={step.title}
                className="object-cover h-full w-full rounded-[4px]"
                width={500}
                height={476}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
