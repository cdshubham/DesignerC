import React from "react";

function Add() {
  return (
    <div className=" w-full h-full mx-auto ">
      <div className="flex bg-background-blue-100 text-white justify-between md:px-[130px] md:py-[10px]">
        <div className="flex gap-4 items-center">
          <img src="/emojie/fire.png" alt="" className="md:w-[20px] object-contain" />
          <p className="md:text-sm/[16.1px] font-bold">
            Join the Designera’s Company Placement Programme 2025 & Get work
            opportunities in top Companies!
          </p>
        </div>
        <img src="/icons/cross.png" alt="cross" className="md:w-[13px] object-contain" />
      </div>
    </div>
  );
}

export default Add;
