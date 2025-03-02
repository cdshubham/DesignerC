"use client";
import Image from "next/image";
//servicemap[selectedCard]
import Solutionservicecard from "../home/Solutionservicecard";
import { servicetype } from "@/app/sol/solution/page";
const Navigationservice = ({linkdata}:{linkdata:servicetype[]}) => {
  return (
    <div className="max-w-[336px] min-w-[336px] flex flex-col bg-gradient-to-b from-[#11015A] to-[#370197] p-[20px] px-[30px] min-h-[590px] max-h-[590px]">
      <div className="flex flex-col max-h-full overflow-y-scroll hide-scrollbar">
        {" "}
        <div className="flex justify-start items-center gap-4 p-2 py-4">
          <Image
            src="/images/icons/cuboid.png"
            width={14}
            height={15}
            alt="Cuboid"
          />{" "}
          <span className="text-[16px] text-white">SERVICES</span>
        </div>
        {linkdata.map((service:servicetype, index:number) => (
          <Solutionservicecard
            title={service.name}
            content={service.description}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Navigationservice;