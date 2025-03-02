"use client";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";
function Navbar() {
  const router = useRouter();

  const navnames = [
    { name: "Platform", link: "/sol/platform" },
    { name: "Solutions", link: "/sol/solution" },
    { name: "Resources", link: "/sol/resources" },
    { name: "Talent Network", link: "/sol/Talentnetwork" },
    
  ];  

  
  const [selected,setSelected] = useState("");
  return (
    <div className="flex  w-[100vw]  mx-auto  bg-background-blue-300 text-white items-center justify-between md:px-[80px] md:py-[10px] border-b border-background-white-100/50 sticky">
      <div className="flex gap-4 items-center font-normal ">
        <img
          src="/logos/designeralogo.png"
          alt=""
          className="md:w-[138px] object-contain"
        />

        {navnames.map((items, index) => (
          <button
            className={`${
              selected === items.name ? "text-yellow-100" : ""
            } text-cta cursor-pointer font-helvetica font-normal text-white flex items-center gap-1`}
            onClick={() => {
              setSelected(items.name);
              router.push(items.link);
            }}
          >
            <span>{items.name}</span>
            <MdKeyboardArrowDown
              size={20}
              className={`${selected === items.name ? "rotate-180" : ""}`}
            />
          </button>
        ))}
      </div>

      <div className="text-cta font-normal flex gap-5">
        <button
          className="flex gap-1 md:w-[128px] md:h-[32px] items-center rounded-cta-raduis border border-background-white-100 justify-center
       hover:bg-white hover:text-black
       "
        >
          <span>Hire Talent</span>
          <MdArrowOutward size={18} />
        </button>
        <button className="flex gap-1 md:w-[128px] md:h-[32px] items-center rounded-cta-raduis  justify-center bg-background-blue-100 hover:bg-yellow-100 hover:text-black">
          <span>Get Started</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
