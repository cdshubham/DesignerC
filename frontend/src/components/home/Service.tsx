import React from "react";
import WhiteButton from "../ui/WhiteButton";

function Service() {
  return (
    <div className="w-full py-[60px] bg-background-blue-100 text-heading flex flex-col text-white font-normal text-center gap-[30px] md:px-[125px] px-[30px] items-center justify-center">
      <div className="flex flex-col text-[32px]/[36px] ">
        <p className="">
          Unlock the Power of Creativity with our expert Talent Marketplace{" "}
        </p>
     
      </div>

      <div className="flex gap-4 justify-center md:flex-row flex-col w-full">
        <WhiteButton
          children="Book a Demo"
          className="md:w-[153px] h-[37px] w-[295px] bg-yellow-100 rounded-[4px] text-black text-cta font-bold"
        />
        <WhiteButton
          children="Sign up"
          className="md:w-[153px] h-[37px] w-[295px] rounded-[4px]  text-cta font-bold border text-white "
        />
      </div>
    </div>
  );
}

export default Service;
