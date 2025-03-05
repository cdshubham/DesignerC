"use client";
import React, { useState } from "react";

function Add() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="w-full hidden xl:visible ">
      <div className="flex bg-background-blue-100 text-white justify-between px-4 py-2 md:px-[100px] md:py-[10px]">
        <div className="flex gap-2 md:gap-4 items-center">
          <img
            src="/emojie/fire.png"
            alt=""
            className="w-[16px] md:w-[20px] object-contain"
          />
          <p className="text-xs leading-tight md:text-sm/[16.1px] font-bold">
            Join the Designera's Company Placement Programme 2025 & Get work
            opportunities in top Companies!
          </p>
        </div>
        <button
          onClick={handleClose}
          className="flex items-center ml-2"
          aria-label="Close announcement"
        >
          <img
            src="/icons/cross.png"
            alt="close"
            className="w-[10px] md:w-[13px] object-contain"
          />
        </button>
      </div>
    </div>
  );
}

export default Add;
