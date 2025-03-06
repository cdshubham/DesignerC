import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
function Clients() {
  const content = [
    {
      stars: 4,
      data: "I recruited a creative team from Designera, and every individual has been performing outstandingly well!",
      name: "Anik JainDesinr",
      title: "Desinr",
    },
    {
      stars: 4,
      data: "I recruited a creative team from Designera, and every individual has been performing outstandingly well!",
      name: "Anik JainDesinr",
      title: "Desinr",
    },
    {
      stars: 4,
      data: "I recruited a creative team from Designera, and every individual has been performing outstandingly well!",
      name: "Anik JainDesinr",
      title: "Desinr",
    },
    {
      stars: 4,
      data: "I recruited a creative team from Designera, and every individual has been performing outstandingly well!",
      name: "Anik JainDesinr",
      title: "Desinr",
    },
    {
      stars: 4,
      data: "I recruited a creative team from Designera, and every individual has been performing outstandingly well!",
      name: "Anik JainDesinr",
      title: "Desinr",
    },
    {
      stars: 4,
      data: "I recruited a creative team from Designera, and every individual has been performing outstandingly well!",
      name: "Anik JainDesinr",
      title: "Desinr",
    },
  ];
  return (
    <div className="flex flex-col md:py-[60px] bg-background-white-100 md:px-[125px] items-start justify-center w-full gap-[30px]">
      <span className="text-heading/[68.99px] font-normal ">
        Clients are Pitching about Designera.
      </span>
      <div className="flex gap-[30px] w-full">
        <div className="w-[70px] h-[70px] border-[3px] cursor-pointer border-[#D9D9D9] text-[#D9D9D9] rounded-full flex items-center justify-center">
          <FaArrowLeft size={40} />
        </div>
        <div className="w-[70px] h-[70px] border-[3px] cursor-pointer text-white bg-black rounded-full flex items-center justify-center">
          <FaArrowRight size={40} />
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-[30px] ">
        {content.map((item, index) => (
          <div className="md:w-[360px] flex flex-col gap-[10px]">
            <div className="flex  text-[#EAEDF0]">
              {[...Array(5)].map((stars, indexs) => (
                <span
                  key={indexs}
                  className={`${
                    indexs < item.stars
                      ? "text-background-blue-100"
                      : "text-[#EAEDF0]"
                  }`}
                >
                  <IoStarSharp className="w-[15px] " />
                </span>
              ))}
            </div>
            <span className="text-body/[20.1px] font-normal">{item.data}</span>

            <div className="flex gap-2 items-center">
              <div className="w-[43px] h-[43px] bg-[#D9D9D9] rounded-full"></div>
              <div className="flex flex-col gap-1 text-cta/[18.3px] font-normal">
                <span>{item.name}</span>
                <span className="text-[#B0B0B0]">{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
