"use client";
import Image from 'next/image';
import BlueButton from '../ui/BlueButton';

const Bookdemoform = () => {
    
  return (
    <div className="w-full flex justify-center items-center text-background-blue-300 bg-[#FFE599] ">
      <div className=" w-[1170px] grid grid-cols-2 py-[60px] gap-[30px]">
        <div className="flex flex-col w-full gap-[20px]">
          
            <h1 className="text-heading/[69px]">
              Let's Connect over a Cup of Coffee ☕️
            </h1>

          

          <p className="text-body">
            Still confused how Designera can help you. Let's schedule a meeting.
          </p>
          <form action="" className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="px-4 w-full h-[48px]"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="px-4 w-full h-[48px]"
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              className="w-full px-4 h-[48px]"
              placeholder="Company Name"
            />
            <input
              type="text"
              className="w-full px-4 h-[48px]"
              placeholder="example@papercontent.in"
            />
            <BlueButton
              children="Book a Demo"
              className="w-full h-[48px] text-white"
            />
          </form>
          <p className="text-footer text-center w-full">
            By registering you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Image
            src="/images/bulbeye.png"
            width={469}
            height={294}
            alt="bulbeyeimage"
          />
        </div>
      </div>
    </div>
  );
}

export default Bookdemoform;