import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
function Navbar() {
  const navnames = ["Plateform", "Solutions", "Resources", "Talent Network"];
  
  return (
    <div className="flex w-full  mx-auto  bg-background-blue-300 text-white items-center justify-between md:px-[130px] md:py-[10px] border-b border-background-white-100/50 sticky">
      <div className="flex gap-4 items-center font-normal ">
        <img
          src="/logos/designeralogo.png"
          alt=""
          className="md:w-[138px] object-contain"
        />

        {navnames.map((items, index) => (
          <button className=" text-cta cursor-pointer  hover:text-yellow-100 font-helvetica font-normal text-white flex items-center gap-1">
            <span>{items}</span>
            <MdKeyboardArrowDown size={20}/>
          </button>
        ))}
      </div>

      <div className="text-cta font-normal flex gap-5">
       <button className="flex gap-1 md:w-[128px] md:h-[32px] items-center rounded-cta-raduis border border-background-white-100 justify-center
       hover:bg-white hover:text-black
       ">
          <span >Hire Talent</span>
          <MdArrowOutward size={18} />
       </button>
       <button className="flex gap-1 md:w-[128px] md:h-[32px] items-center rounded-cta-raduis  justify-center bg-background-blue-100 hover:bg-yellow-100 hover:text-black">
          <span >Get Started</span>
          
       </button>
      </div>
    </div>
  );
}

export default Navbar;
