import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";
const Shopify = () => {
  return (
    <div className="w-full md:px-[125px] px-[30px] items-center justify-center py-[60px] text-body/[20.7px] gap-[60px] flex md:flex-row flex-col">
      <div className="flex justify-center h-full md:w-[400px] w-[209px] items-center">
        <Image
          width={268}
          height={268}
          className="rounded-full min-h-full"
          src="/images/shopifyprofile.png"
          alt="shopify "
        />
      </div>
      <div className="flex gap-[30px] md:flex-row flex-col">
        <div className="flex flex-col md:w-[90%] gap-[20px]">
          {" "}
          <div className="w-full md:justify-start justify-center flex ">
            <Image
              src="/logos/shopify.png"
              width={103}
              height={30}
              alt="shopify image"
            />
          </div>
          <p className="text-subheading/[27px] md:text-start text-center">
            "Designera makes it easy for Shopify's Growth team to get design done well and fast.
            <span className="font-semibold">
              {" "}
              Their platform is intuitive and enables speed.
            </span>
            "
          </p>
          <p className="md:text-start text-center text-body text-[#080522]">
            Amir Jaffari, Growth Lead at Shopify
          </p>
          <div className="flex gap-[30px] md:flex-row flex-col items-center  md:items-baseline">
            <div className="flex-col gap-[30px] md:items-start text-center">
              <h1 className="text-heading/[69px] text-background-blue-100">
                250%
              </h1>
              <p className="md:text-start text-center text-body">Increase in Click Rate</p>
            </div>
            <div className="flex-col gap-[30px] md:items-start text-center">
              <h1 className="text-heading/[69px] text-background-blue-100">
                192k+
              </h1>
              <p className="text-start text-body">
                Leads Generated with Creatives
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[10%] md:min-h-full flex flex-grow items-center justify-center md:justify-end gap-2">
        <div className="w-[50px] h-[50px] border-[3px] cursor-pointer md:hidden    rounded-full flex items-center justify-center">
            <FaArrowLeft size={30} />
          </div>
          <div className="w-[50px] h-[50px] border-[3px] cursor-pointer text-white bg-black rounded-full flex items-center justify-center">
            <FaArrowRight size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopify;