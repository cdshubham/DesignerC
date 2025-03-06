import React from "react";
import BlueButton from "../ui/BlueButton";

const Hiringforenterprises = () => {
  const content = [
    "Get Placed with Top Brands Like Google and Amazon",
    "Showcase Your Creative Talent to the World",
    "Get Hired for Projects That Elevate Your Career.",
  ];

  return (
    <div className="flex justify-between h-full w-full">
      <div className="flex flex-col gap-[30px] col-span-1 w-1/2 ">
        <div className="flex flex-col gap-6 text-heading/[69.99%] font-normal text-justify">
        <span>Optimize Marketing </span>
        <span>Bandwidth and Costs</span>
        <span>with Top Vetted </span>
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
        <BlueButton
          children="Become Talent"
          className="w-[153px] py-2 text-white"
        />
      </div>

      <div className="h-full ">
        <img
          src="/images/hiring.png"
          alt=""
          className=" object-cover rounded-cta-raduis"
        />
      </div>
    </div>
  );
};

export default Hiringforenterprises;
