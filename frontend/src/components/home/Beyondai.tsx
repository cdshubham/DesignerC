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

        <div className=" grid grid-cols-[3fr_1fr_1fr] px-[96px] w-full text-body text-[#0B0720] ">
          <div className="font-semibold py-3 text-subheading">Key Benefits</div>{" "}
          <div className="text-background-blue-100 border-b-2 border-[#0C0080] pl-2 py-3 text-subheading">
            Designera
          </div>
          <div className="text-[#00B1CC] border-b-2 border-[#0C0080] whitespace-nowrap py-3 text-subheading">
            Other Marketplaces
          </div>
          {tabledata.map((data, index) => (
            <div className={`contents`} key={index}>
              <div
                key={`feature-${index}`}
                className={`p-2 ${index % 2 === 0 ? "" : "bg-[#FEF0CE]"} py-5`}
              >
                {data.feature}
              </div>
              <div
                key={`designera-${index}`}
                className={`flex justify-center items-center ${
                  index % 2 === 0 ? "" : "bg-[#FEF0CE]"
                } py-5`}
              >
                <Image
                  src={data.designera}
                  width={36}
                  height={36}
                  alt="designera"
                />
              </div>
              <div
                key={`other-${index}`}
                className={`flex justify-center items-center ${
                  index % 2 === 0 ? "" : "bg-[#FEF0CE]"
                } py-5`}
              >
                <Image
                  src={data.other_marketplaces}
                  width={36}
                  height={36}
                  alt="other marketplaces"
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
