import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const Shopify = () => {
  return (
    <div className="w-full px-4 md:px-[125px] py-8 md:py-[60px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[60px]">
      {/* Profile Image - Centered on mobile, left-aligned on desktop */}
      <div className="w-full md:w-[400px] flex justify-center md:justify-start mb-6 md:mb-0">
        <Image
          width={268}
          height={268}
          className="rounded-full object-cover w-[250px] h-[250px] md:w-[268px] md:h-[268px]"
          src="/images/shopifyprofile.png"
          alt="Shopify profile"
        />
      </div>
      
      <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-[30px]">
        <div className="flex flex-col w-full md:w-[90%] gap-4 md:gap-[20px]">
          {/* Shopify Logo - Centered on mobile, left-aligned on desktop */}
          <div className="w-full flex justify-center md:justify-start">
            <Image
              src="/logos/shopify.png"
              width={103}
              height={30}
              alt="Shopify logo"
            />
          </div>
          
          {/* Testimonial Text - Centered on mobile, left-aligned on desktop */}
          <p className="text-center md:text-start text-xl md:text-subheading/[27px]">
            "Superside makes it easy for Shopify's Growth team to get design
            done well and fast.
            <span className="font-semibold">
              {" "}
              Their platform is intuitive and enables speed.
            </span>
            "
          </p>
          
          {/* Author - Centered on mobile, left-aligned on desktop */}
          <p className="text-center md:text-start text-sm md:text-body text-[#080522]">
            Amir Jaffari, Growth Lead at Shopify
          </p>
          
          {/* Metrics - Stacked on mobile, inline on desktop */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 md:gap-[30px]">
            <div className="flex flex-col items-center md:items-start gap-2">
              <h1 className="text-3xl md:text-heading/[69px] text-background-blue-100">
                250%
              </h1>
              <p className="text-center md:text-start text-sm md:text-body">
                Increase in Click Rate
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2">
              <h1 className="text-3xl md:text-heading/[69px] text-background-blue-100">
                192k+
              </h1>
              <p className="text-center md:text-start text-sm md:text-body">
                Leads Generated with Creatives
              </p>
            </div>
          </div>
        </div>
        
        {/* Arrow Button - Centered on mobile, right-aligned on desktop */}
        <div className="w-full md:w-auto flex items-center justify-center md:justify-end space-x-4 mt-4 md:mt-0">
      <div className="w-[50px] h-[50px] border-[2px] border-black cursor-pointer bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-colors">
        <FaArrowLeft size={30} />
      </div>
      <div className="w-[50px] h-[50px] border-[3px] border-black cursor-pointer text-white bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
        <FaArrowRight size={30} />
      </div>
    </div>
      </div>
    </div>
  );
}

export default Shopify;