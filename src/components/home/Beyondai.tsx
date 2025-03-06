import Image from "next/image";

interface props {
  tabledata:{feature:string,designera:string,other_marketplaces:string}[],
  darktheme?:boolean,
  highlight?:string,
  color1:string,
  color2:string,
  heading:string
}

const Beyondai = ({darktheme,tabledata,color1,color2,highlight,heading}:props) => {
  const lidata = [
    "Constant, proactive communication",
    "Cutting-Edge, Tailored Content",
    "Vibrant, Interactive Community",
    "Affordable and Flexible Learning Experience",
    "Championing Inclusivity",
  ];


  const tabledataa =[
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


   const tabledataa2 = [
     {
       feature: "Your brand, your voice",
       designera: "/icons/checkmark.png",
       other_marketplaces: "/icons/crossmarkgrey.png",
     },
     {
       feature: "No hallucinations, just factual content",
       designera: "/icons/checkmark.png",
       other_marketplaces: "/icons/crossmark.png",
     },
     {
       feature:
         "Smarter AI, improved by millions of marketers across the globe",
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
    <div
      className={`w-full ${
        darktheme ? "text-white" : "bg-[#FFF9E9] text-black"
      }   flex justify-center items-center`}
    >
      <div className="max-w-[1170px] w-[1770px] flex flex-col justify-center items-center py-[60px] gap-[30px] ">
        <div className="text-heading/[69px] ">{heading}</div>

        <div className=" grid grid-cols-[3fr_1fr_1fr] px-[96px] w-full text-body text-[#0B0720] ">
          <div className="font-semibold py-3 text-subheading h-[69px]">Key Benefits</div>{" "}
          <div
            className="text-background-blue-100 border-b-2 border-[#0C0080] pl-2 py-3 text-subheading"
            style={{ color: color1 }}
          >
            Designera
          </div>
          <div
            className="text-[#00B1CC] border-b-2 border-[#0C0080] whitespace-nowrap py-3 text-subheading"
            style={{ color: color2 }}
          >
            Other Marketplaces
          </div>
          {tabledata.map((data, index) => (
            <div
              className={`contents   ${darktheme ? "text-white" : ""}`}
              key={index}
            >
              <div
                key={`feature-${index}`}
                className={`p-2  py-5 `}
                style={
                  index % 2 !== 0
                    ? { backgroundColor: highlight }
                    : { backgroundColor: "" }
                }
              >
                {data.feature}
              </div>
              <div
                key={`designera-${index}`}
                className={`flex justify-center items-center py-5 ${
                  darktheme ? "text-white" : ""
                }`}
                style={
                  index % 2 !== 0
                    ? { backgroundColor: highlight }
                    : { backgroundColor: "" }
                }
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
                className={`flex justify-center items-center  py-5`}
                style={
                  index % 2 !== 0
                    ? { backgroundColor: highlight }
                    : { backgroundColor: "" }
                }
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
