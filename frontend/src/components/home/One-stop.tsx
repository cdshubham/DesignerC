import Image from "next/image";

const Onestopcard = ({ icon, heading, subheading,color }:any) => {
  return (
    <div
      className="flex flex-col gap-[30px] min-w-[271px] min-h-[671px] max-h-min max-w-min rounded-cardradius p-[30px]"
      style={{ backgroundColor: color }}
    >
      <div className="grid grid-rows-[8fr_7fr] h-full">
        <div className="flex flex-col gap-[30px]">
          <div className="flex justify-start">
            <Image src={icon} width={40} height={40} alt="icon" />
          </div>
          <div className="text-avg font-semibold">{heading}</div>
        </div>
        <div className="text-body">{subheading}</div>
      </div>
    </div>
  );};

const Onestop = () => {

    const cardata = [
      {
        color: "#FFE599",
        icon: "/images/onestop/one.png",
        heading: "Creative  + Technical Solutions that examine top quality ✨",
        subheading:
          "Welcome to Designera. Quickly submit a brief, review in platform, keep track of usage and more in one easy place.",
      },
      {
        color: "#FFCCE2",
        icon: "/images/onestop/two.png",
        heading: "Marketing + Media Solutions that drives revenue 💵",
        subheading:
          "Grow your organic presence and reduce dependence on paid channels with optimised content",
      },
      {
        color: "#BCF5D7",
        icon: "/images/onestop/three.png",
        heading: "Hire the Top 1% of Global Creative Talent 🤩",
        subheading:
          "From website to social media, we have you covered with our expert team of designers and developers.",
      },
      {
        color: "#D4BBF6",
        icon: "/images/onestop/four.png",
        heading: "Find the right opportunity around the table 💼",
        subheading:
          "Our team of strategists and content creators work together to create content that resonates with your audience.",
      },
    ];
   return <section className="expertise md:py-[60px] py-[40px] md:px-[125px] px-[40px] flex flex-col gap-[30px] justify-center items-center w-full  ">
     <div className="flex flex-col gap-[30px] w-full">
       <div className="flex text-mediumheading">
         A One-Stop Solution Crafted to Elevate Your Brandd
       </div>
       <div className="flex justify-between">
        {cardata.map((item, index) => (
            <Onestopcard {...item}/>
        ))}
       </div>
     </div>
   </section>;
}

export default Onestop;