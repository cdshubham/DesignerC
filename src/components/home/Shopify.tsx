import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
const Shopify = () => {
  return (
    <div className="w-full md:px-[125px] items-center justify-center md:py-[60px] text-body/[20.7px] gap-[60px] flex">
      <div className="flex justify-center h-full w-[400px] items-center">
        <Image
          width={268}
          height={268}
          className="rounded-full min-h-full"
          src="/images/shopifyprofile.png"
          alt="shopify "
        />
      </div>
      <div className="flex gap-[30px]">
        <div className="flex flex-col w-[90%] gap-[20px]">
          {" "}
          <div className="w-full justify-start flex ">
            <Image
              src="/logos/shopify.png"
              width={103}
              height={30}
              alt="shopify image"
            />
          </div>
          <p className="text-subheading/[27px]">
            "Superside makes it easy for Shopify's Growth team to get design
            done well and fast.
            <span className="font-semibold">
              {" "}
              Their platform is intuitive and enables speed.
            </span>
            "
          </p>
          <p className="text-start text-body text-[#080522]">
            Amir Jaffari, Growth Lead at Shopify
          </p>
          <div className="flex gap-[30px]">
            <div className="flex-col gap-[30px] items-start">
              <h1 className="text-heading/[69px] text-background-blue-100">
                250%
              </h1>
              <p className="text-start text-body">Increase in Click Rate</p>
            </div>
            <div className="flex-col gap-[30px] items-start">
              <h1 className="text-heading/[69px] text-background-blue-100">
                192k+
              </h1>
              <p className="text-start text-body">
                Leads Generated with Creatives
              </p>
            </div>
          </div>
        </div>
        <div className="w-[10%] min-h-full flex flex-grow items-center justify-end">
    
          <div className="w-[50px] h-[50px] border-[3px] cursor-pointer text-white bg-black rounded-full flex items-center justify-center">
            <FaArrowRight size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopify;