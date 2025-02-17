import Solutioncard from "@/components/home/Solutioncard";
import Solutionservicecard from "@/components/home/Solutionservicecard";
import Image from "next/image";

const page = () => {

    const content = [
      {
        title: "Creatives",
        content: "Elevate your brand value with engaging and creative videos",
        className: "bg-gradient-to-b from-[#3A2A29] to-[#E4B156]",
        color1: "#FFFFFF",
        color2: "#1EaD5D",
      },
      {
        title: "Marketing",
        content: "Leverage technology to reach potential audience faster.",
        className: "bg-gradient-to-b from-[#3C1750] to-[#BD41AD]",
        color1: "#FFFFFF",
        color2: "#1EaD5D",
      },
      {
        title: "Media",
        content: "Boost market impact with targeted demand generation solutions",
        className: "bg-gradient-to-b from-[#193844] to-[#29C77C]",
        color1: "#FFFFFF",
        color2: "#FFFFFF",
      },
      {
        title: "Talent Network",
        content:
          "Onboard top 1% Creative talent and Reduce your hiring process ",
        className: "bg-gradient-to-b from-[#6F495B] to-[#B55C4F]",
        color1: "#FEE4A1",
        color2: "#A0F0C5",
      },
    ];
  return (
    <div className="flex flex-col">
      {" "}
      <div className="flex font-helvetica ">
        <div className="flex-1 flex flex-col bg-darkblue p-[20px] ">
          <div className="text-sm text-gold-yellow flex gap-2 py-4 items-center font-semibold">
            <Image src="/images/icons/solutions.png" width={16} height={16} alt="solution icon" className="h-full aspect-square" /> <span className="h-full flex items-end ">SOLUTIONS</span>
          </div>
          <div className="grid grid-cols-4">
            {content.map((item) => (
              <Solutioncard
                title={item.title}
                content={item.content}
                className={item.className}
                color1={item.color1}
                color2={item.color2}
              />
            ))}
          </div>
        </div>
        <div className="w-[336px] flex flex-col bg-gradient-to-b from-[#11015A] to-[#370197] p-[20px] px-[40px] ">
          <div className="flex justify-start items-center gap-4 p-2 py-4">
            <Image
              src="/images/icons/cuboid.png"
              width={14}
              height={15}
              alt="Cuboid"
            />{" "}
            <span className="text-[16px] text-white">SERVICES</span>
          </div>
          {Array.from({ length: 7 }).map((_, index) => (
            <Solutionservicecard />
          ))}
        </div>
      </div>
      <div className="w-full h-[150px] bg-background-blue-300 relative">
        <Image
          src="/images/adobe.png"
          width={128}
          height={31}
          alt="adobe"
          className="absolute bottom-20 right-4"
        />
      </div>
    </div>
  );
}

export default page;