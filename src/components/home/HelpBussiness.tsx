import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface HelpBusinessProps {
  heading?: string;
  cardsContent?: {
    heading?: string;
    content?: string;
  }[];
}

function HelpBusiness({ heading, cardsContent }: HelpBusinessProps) {
  const options = [
    {
      title: "Logo Design",
      subheading:
        "Craft unique and memorable logos that embody your brand's identity, leaving a lasting impression on your audience.",
    },
    {
      title: "Brand Strategy",
      subheading:
        "Develop a comprehensive brand strategy that aligns with your business goals and resonates with your target audience.",
    },
    {
      title: "Web Design",
      subheading:
        "Create stunning, user-friendly websites that showcase your brand and drive customer engagement.",
    },
    {
      title: "Social Media Marketing",
      subheading:
        "Leverage social platforms to expand your reach and connect with potential customers effectively.",
    },
    {
      title: "Content Creation",
      subheading:
        "Produce compelling content that tells your brand's story and captures your audience's attention.",
    },
    {
      title: "Digital Advertising",
      subheading:
        "Implement targeted digital ad campaigns to boost your brand visibility and drive conversions.",
    },
  ];

  return (
    <div className="w-full bg-background-white-100 py-8 md:py-12 lg:py-16">
      <div className=" mx-auto flex flex-col gap-6 md:gap-8 lg:gap-10">
        <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-normal px-8 lg:mx-16">
          Let's see how we can help your business
        </h2>

        <div className="w-full overflow-hidden">
          <Marquee speed={50} gradient={false}>
            <div className="flex space-x-4 md:space-x-6 lg:space-x-8 py-4">
              {options.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg border border-gray-200 
                             w-[250px] sm:w-[300px] md:w-[350px] 
                             transform transition-transform duration-300 mx-6"
                >
                  <div className="relative w-full h-[270px]">
                    <Image
                      fill
                      src="/images/redditrecap.png"
                      alt={item.title}
                      className="rounded-t-lg object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-5 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#67737e] flex-grow">
                      {item.subheading}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default HelpBusiness;
