"use client";
import React, { useState } from "react";

import Image from "next/image";

interface propsType {
  question: string;
  answer: string;
  color?: string;
}

function Accordian({ question, answer, color = "#00B1CC" }: propsType) {
  const [show, setShow] = useState<boolean>(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div
      className="w-full  flex flex-col rounded-[2px] overflow-hidden border-b-4 gap-[10px] pb-[5px]"
      style={{ borderColor: color }}
    >
      <div
        className="cursor-pointer flex h-full w-full p-3 justify-between items-center "
        onClick={handleShow}
      >
        <h3 className="text-subheading/[27px] font-semibold ">{question}</h3>
        <Image
          src="/icons/downarrow.png"
          height={7}
          width={12}
          alt="down arrow"
          className={`h-[6px] transition-transform duration-300 ${
            !show ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          show ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-body/[20px] px-3 pb-3 ">{answer}</p>
      </div>
    </div>
  );
}

export default Accordian;
