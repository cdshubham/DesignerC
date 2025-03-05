import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
const Shopify = () => {
  return (
    <div className="w-full md:px-[125px] px-[40px] items-center justify-center md:py-[60px] py-[40px] text-body/[20.7px] md:gap-[60px] gap-[30px] flex flex-col md:flex-row">
      <div className="flex justify-center h-full w-[400px] items-center">
        <Image
          width={268}
          height={268}
          className="rounded-full min-h-full"
          src="/images/shopifyprofile.png"
          alt="shopify "
        />
      </div>
      <div className="flex md:flex-row flex-col gap-[30px]">
        <div className="flex flex-col md:w-[90%] md:gap-[20px] gap-[30px]">
          {" "}
          <div className="w-full md:justify-start justify-center flex  ">
            <Image
              src="/logos/shopify.png"
              width={103}
              height={30}
              alt="shopify image"
              className="md:w-[103px] md:h-[30px] w-[166px] h-[47px]"
            />
          </div>
          <p className="text-subheading/[27px] md:text-start text-center">
            "Superside makes it easy for Shopify's Growth team to get design
            done well and fast.
            <span className="font-semibold md:text-start text-center">
              {" "}
              Their platform is intuitive and enables speed.
            </span>
            "
          </p>
          <p className=" text-body text-[#080522] md:text-start text-center">
            Amir Jaffari, Growth Lead at Shopify
          </p>
          <div className="flex md:flex-row flex-col gap-[30px] md:justify-start justify-center ">
            <div className="flex-col gap-[30px] items-start md:text-start text-center">
              <h1 className="text-heading/[69px] text-background-blue-100 md:text-start text-center">
                250%
              </h1>
              <p className=" text-body md:text-start text-center">
                Increase in Click Rate
              </p>
            </div>
            <div className="flex-col gap-[30px] items-start md:text-start text-center">
              <h1 className="text-heading/[69px] text-background-blue-100 md:text-start text-center">
                192k+
              </h1>
              <p className=" text-body md:text-start text-center">
                Leads Generated with Creatives
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[10%] min-h-full flex flex-grow items-center md:justify-end justify-center">
          <div className="w-[120px] flex gap-[20px]">
            
            <div className="w-[50px] h-[50px] border-[3px] border-gray-400 cursor-pointer text-black bg-white rounded-full flex items-center justify-center">
              <FaArrowRight size={30} className="rotate-180" />
            </div>
            <div className="w-[50px] h-[50px] border-[3px] cursor-pointer text-white bg-black rounded-full flex items-center justify-center">
              <FaArrowRight size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopify;