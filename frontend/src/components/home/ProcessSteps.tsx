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
  mainheading?: string;
}

const defaultSteps: Item[] = [
  {
    title: "Dive Into User Insights",
    description:
      "We unravel user behaviors, craft detailed personas, and map out their journeys to uncover unique needs.",
    image: "/images/yellow.png",
    step: "Step 1",
    color: "#FFCA33",
  },
  {
    title: "Craft Stunning Interfaces",
    description:
      "Bringing ideas to life, we design sleek, intuitive prototypes and visually striking user experiences.",
    image: "/images/green.png",
    step: "Step 2",
    color: "#4DE593",
  },
  {
    title: "Test and Execute",
    description:
      "With rigorous usability testing and fine-tuning, we polish every detail to deliver flawless experiences.",
    image: "/images/purple.png",
    step: "Step 3",
    color: "#B78EF0",
  },
];

const ProcessSteps: React.FC<ProcessStepsProps> = ({
  steps = defaultSteps,
  mainheading = "Hire Writers from Designera or get Pre-Vetted Top Expert Writers for your Project",
}) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8  py-8 sm:py-12 md:py-16 items-center justify-center w-full ">
      <div className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight w-full flex justify-start px-12">
        <span className="w-full sm:w-[90%] md:w-[80%]">{mainheading}</span>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 w-full ">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-6 md:gap-8 lg:gap-12 items-center`}
          >
            <div className="w-full flex items-start justify-start">
              <div className="flex flex-col py-4 sm:py-6 px-8 sm:px-6 md:px-10 lg:px-20 xl:px-32">
                <div className="flex items-center">
                  <span
                    className="h-6 w-6 sm:h-8 sm:w-8 rounded-sm"
                    style={{ backgroundColor: step.color }}
                  ></span>
                  <span className="text-lg sm:text-xl md:text-2xl font-semibold px-3 sm:px-4">
                    {step.step}
                  </span>
                </div>
                <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
                    {step.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-auto sm:h-64 md:h-80 lg:h-96">
              <div className="relative w-full h-full min-h-64">
                <Image
                  src={step.image}
                  alt={step.title}
                  className="object-cover w-[375px] h-[352.1600036621094px]"
                  fill
                  sizes="w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
