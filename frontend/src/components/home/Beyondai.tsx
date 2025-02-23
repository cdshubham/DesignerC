import Image from "next/image";

const Beyondai = () => {
  const lidata = [
    "Constant, proactive communication",
    "Cutting-Edge, Tailored Content",
    "Vibrant, Interactive Community",
    "Affordable and Flexible Learning Experience",
    "Championing Inclusivity",
  ];


  const tabledata =[
    {
      feature: "Your brand, your voice",
      designera: "/icons/checkmark.png",
      other_marketplaces: "/icons/crossmark.png",
    },
    {
      feature: "No hallucinations, just factual content",
      designera: "/icons/checkmark.png",
      other_marketplaces: "/icons/crossmark.png",
    },
    {
      feature: "Smarter AI, improved by millions of marketers across the globe",
      designera: "/icons/checkmark.png",
      other_marketplaces: "/icons/crossmark.png",
    },
    {
      feature: "Scaling at warp speed",
      designera: "/icons/checkmark.png",
      other_marketplaces: "/icons/crossmark.png",
    },
    {
      feature: "Robust editor layer, powered by humans",
      designera: "/icons/checkmark.png",
      other_marketplaces: "/icons/crossmark.png",
    },
    {
      feature: "Privacy and data protection",
      designera: "/icons/checkmark.png",
      other_marketplaces: "/icons/crossmark.png",
    },
    {
      feature: "Easy plug-and-play with the tools you love",
      designera: "/icons/checkmark.png",
      other_marketplaces: "/icons/crossmark.png",
    },
    {
      feature: "End-to-end content control and visibility",
      designera: "/icons/checkmark.png",
      other_marketplaces: "/icons/crossmark.png",
    },
    {
      feature: "Collaborative platform",
      designera: "/icons/checkmark.png",
      other_marketplaces: "/icons/crossmark.png",
    },
  ];

  return (
    <div className="w-full  bg-[#FFF9E9] text-black flex justify-center items-center">
      <div className="max-w-[1170px] w-[1770px] flex flex-col justify-center items-center py-[60px] gap-[30px] ">
        <div className="text-heading/[69px] ">Beyond the ordinary AI</div>

        <div className=" grid grid-cols-[3fr_1fr_1fr] px-[96px] w-full text-subheading gap-y-4">
          <div className="font-semibold">Key Benefits</div>{" "}
          <div className="text-background-blue-100 border-b border-[#0C0080] pl-2 ">
            Designera
          </div>
          <div className="text-[#00B1CC] border-b border-[#0C0080] whitespace-nowrap">
            Other Marketplaces
          </div>
        
            {tabledata.map((data) => (
              <div className="contents">
                
                <div className="w-full max-w-full">{data.feature}</div>
                <div className="w-full flex justify-center items-center">
                  <Image
                    src={data.designera}
                    width={36}
                    height={36}
                    alt="designera"
                  />
                </div>
                <div className="w-full flex justify-center items-center">
                  <Image
                    src={data.other_marketplaces}
                    width={36}
                    height={36}
                    alt="designera"
                  />
                </div>
              </div>
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default Beyondai;
