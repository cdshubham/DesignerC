import Image from "next/image";
import BlueButton from "../ui/BlueButton";








interface props  
{   
    highlightcolor:string;
    headingstarticon:string;
    headingendicon:string;
    headingone:string;
    headingtwo:string;
    subheading:string;
    image:string;
}







const colorClasses: any = {
  "highlight-findopportunity": "text-[#90FF95]",
};

const Findopportunities = ({highlightcolor,headingstarticon,headingendicon,headingone,headingtwo,subheading,image}:props) => {
  return (
    <div className="w-full md:px-[355px] pt-[110px] pb-[60px] flex flex-col gap-[30px] font-helvetica justify-center mx-auto  bg-background-blue-300 text-white items-center">
      <div className="grid grid-cols-[1fr_12fr_1fr] w-[970px]">
        <div className="h-full flex justify-center items-start ">
          {" "}
          <Image
            src={headingstarticon}
            width={41}
            height={66}
            alt="headingstarticon"
          />
        </div>
        <div className="flex flex-col w-full items-center ">
          <span
            className={`${colorClasses[highlightcolor]} text-heading leading-[70px]`}
          >
            {headingone}
          </span>

          <span className="text-heading leading-[70px]">{headingtwo}</span>
        </div>
        <div className="h-full flex justify-center items-end ">
          {" "}
          <Image
            src={headingendicon}
            width={41}
            height={66}
            alt="headingendicon"
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="md:w-[756px] h-[72px] text-body text-center">{subheading}</div>
      </div>
      <div className="w-full flex justify-center items-center">
        {" "}
        <BlueButton
          children="Find Opportunities"
          className="text-cta font-bold md:w-[153px] md:h-[37px] hover:bg-yellow-100 hover:text-black"
        />
      </div>
      <Image
        src={image}
        width={1024}
        height={516}
        alt="Hero image"
        className="rounded-[16px] md:my-[30px]"
      />
    </div>
  );
}

export default Findopportunities;