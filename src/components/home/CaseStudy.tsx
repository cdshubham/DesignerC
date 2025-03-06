import React from "react";
import Image from "next/image";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

function CaseStudy() {
  const images = [
    "/logos/park.png",
    "/logos/piramal.png",
    "/logos/adani.png",
    "/logos/rvshare.png",
    "/logos/apolo247.png",
  ];

  return (
    <div className="bg-background-blue-200 pt-8 md:pt-12 lg:pt-16 ">
      {/* Instruction Section */}
      <div className="flex justify-center items-center gap-1 lg:gap-0 text-[#9DA6AF] mb-6 md:mb-8 px-28 text-center">
        <FaArrowDown className="text-lg md:text-base self-start " />
        <span className="text-sm md:text-base ">
          Click on the logos to view the case study
        </span>
      </div>

      {/* Logo Section */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
        <Marquee speed={50} className="flex items-center">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-20 md:w-32 lg:w-40 h-16 md:h-24 relative"
            >
              <Image
                src={img}
                alt={`Logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Case Study Content */}
      <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12 items-center px-8 md:px-12 lg:px-24 bg-black py-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 lg:gap-8 order-2 md:order-1">
          {/* Featured Case Study Header */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-md bg-yellow-100"></div>
            <span className="text-xs font-semibold text-white">
              FEATURED CASE STUDY
            </span>
          </div>

          {/* Image Section - Visible only on mobile */}
          <div className="block md:hidden w-full relative aspect-square mb-4">
            <Image
              src="/images/pizza.png"
              alt="Case Study Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Case Study Title */}
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-normal text-white leading-tight mr-12 lg:pr-28">
            "Reimagining a Legacy: Redefining Top's India Brand Identity and
            Strategy for the Modern Consumer"
          </h2>

          {/* Statistics */}
          <div className="flex gap-6 lg:gap-8 text-[#20DF79] flex-col lg:flex-row">
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl lg:text-7xl font-normal">
                250%
              </span>
              <span className="text-lg md:text-lg text-[#C5CCD3]">
                Increase in Click Rate
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl md:text-6xl lg:text-7xl font-normal">
                192k+
              </span>
              <span className="text-lg md:text-lg text-[#C5CCD3]">
                Leads Generated with Creatives
              </span>
            </div>
          </div>

          {/* Read Case Study Button */}
          <div className="flex items-center gap-3 mt-4 md:mt-6">
            <span className="text-lg md:text-lg text-white">
              Read Case Study
            </span>
            <div
              className="w-10 h-10 rounded-full bg-white 
            flex items-center justify-center text-black 
            cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <FaArrowRight className="text-lg" />
            </div>
          </div>
        </div>

        {/* Image Section - Visible only on larger screens */}
        <div className="hidden md:block w-full md:w-1/2 relative aspect-square order-1 md:order-2">
          <Image
            src="/images/pizza.png"
            alt="Case Study Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
