import Image from "next/image";
import Top1largecard from "./Top1largecard";
import Top1smallcard from "./Top1smallcard";


const top1data = [
  {
    color: "#7566FF",
    heading: "More than 25000+ Interviews",
    content: "with high-quality content, at speed and scale",
    image: "/images/graphimagecard.png",
  },
  {
    color: "#7566FF",
    heading: "Accelerate revenue growth",
    content: "with design, content and that drives engagement and conversions",
    image: "/images/graphimagecard.png",
  },
];

 const smallcarddata = [
   {
     icon: "/icons/apolloicon.png",
     heading: "3.5x",
     subheading: "Faster Hiring",
     color: "#ff9c33",
     link: "/",
   },
   {
     icon: "/icons/park.png",
     heading: "10,000+",
     subheading: "Hiring Candidates got Placed in Top Comapnies ",
     color: "#8b32d8",
     link: "/",
   },
   {
     icon: "/icons/adani.png",
     heading: "8/10",
     subheading: "Recommended Candidates are Hired by Companies",
     color: "#d510e7",
     link: "/",
   },
   {
     icon: "/icons/rvshare.png",
     heading: "2500+",
     subheading: "Companies Trust us for their Creative Team Hiring",
     color: "#1f81c2",
     link: "/",
   },
 ];


const Top1withcards = ({highlightcolor,texthighlight}:{highlightcolor?:string,texthighlight?:string}) => {
  return (
    <div className="w-full flex  justify-center items-center bg-gradient-primary ">
      <div className="w-[1170px] py-[60px] flex flex-col items-center justify-center gap-[60px] ">
        {/**Heading card */}
        <div className=" flex w-[770px] justify-center items-center gap-4">
          {" "}
          <div className="h-full flex justify-center items-start  ">
            {" "}
            <Image
              src="/icons/purpleyellowstar.png"
              width={41}
              height={66}
              alt="headingstarticon"
            />
          </div>
          <div className="flex flex-col items-center [700px] ">
            <span className={`text-heading leading-[70px]`}>
              Get Access to the
            </span>

            <span
              className="text-heading leading-[70px]"
              style={{ color: highlightcolor }}
            >
              Top 1% of Talent
            </span>
          </div>
          <div className="h-full  flex justify-start items-start ">
            {" "}
            <Image
              src="/icons/purplewhitestar.png"
              width={41}
              height={66}
              alt="headingendicon"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-2">
          <div className="flex flex-col w-full pr-[150px]  items-center gap-[30px] pt-[60px]  ">
            <div className="flex flex-col text-avg font-semibold items-start   ">
              <span className="">
                Designera carefully screens and onboards talent, boasting a
                network of over
              </span>
              <span style={{ color: texthighlight }}>
                100,000 skilled designers.
              </span>
            </div>
            <div className="text-body/[23px] flex justify-start">
              We match you with the best creator and ensure content diversity,
              customized expertise, and editorial excellence, ultimately saving
              time and resources, and enabling businesses to engage audiences
              while maintaining quality standards effectively.
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src="/images/imagewithlens.png"
              width={528}
              height={616}
              alt="imagewithlens"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="grid grid-cols-2 justify-center items-start relative ">
            <div className="w-full text-heading">
              “Outperforming traditional methods of Hiring & Move to Data Driven
              Results”
            </div>
            <div className="w-full h-full flex justify-center items-end pb-8">
              <Image
                src="/icons/3downarrow.png"
                width={49}
                height={112}
                alt="3downarrow"
              />{" "}
            </div>
          </div>
          <div className="w-full flex gap-[20px] flex-wrap">
            <Top1largecard {...top1data[0]} />
            <Top1smallcard {...smallcarddata[0]} />
            <Top1smallcard {...smallcarddata[1]} />
            <Top1smallcard {...smallcarddata[2]} />
            <Top1smallcard {...smallcarddata[3]} />
            <Top1largecard {...top1data[1]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top1withcards;