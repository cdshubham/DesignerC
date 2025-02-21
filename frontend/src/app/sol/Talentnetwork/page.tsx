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
  ];
  return (
    <div className="flex flex-col">
      <div className="flex font-helvetica ">
        <div className="flex-1 flex flex-col bg-darkblue p-[20px] px-[30px] ">
          <div className=" flex flex-col gap-[30px] py-[60px] md:ml-[30px] max-w-[1104px]">
            <div className="text-sm text-gold-yellow flex gap-2 py-4 items-center font-semibold">
              <Image
                src="/images/icons/solutions.png"
                width={16}
                height={16}
                alt="solution icon"
                className="h-full aspect-square"
              />{" "}
              <span className="h-full flex items-end ">Talent Network</span>
            </div>
            <div className="flex justify-between">
              <div
                className={`min-h-[469px] min-w-[506px] max-w-min max-h-min flex flex-col py-[30px] px-[20px]   text-white relative gap-[20px] rounded-[4px] bg-gradient-to-b from-[#201563] to-[#6450EC]`}
              >
                <div className="flex  justify-between items-center">
                  <span className="text-xl">Get Hired</span>
                  <Image
                    src="/images/icons/arrow.png"
                    width={42}
                    height={42}
                    alt="arrow"
                  />
                </div>
                <div></div>

                <div></div>
              </div>

              <div className="min-w-[455px] min-h-[469px] max-w-min max-h-min flex flex-col justify-between  ">
                <div
                  className={`h-[220px] w-[455px] flex flex-col py-[30px] px-[20px]   text-white relative gap-[20px] rounded-[4px] bg-gradient-to-b from-[#3A164F] to-[#BC41AD] `}
                >
                  <div className="flex  justify-between items-center">
                    <span className="text-xl">Get Talent</span>
                    <Image
                      src="/images/icons/arrow.png"
                      width={42}
                      height={42}
                      alt="arrow"
                    />
                  </div>
                  <div>Uncover how Brands drive revenue with Designera.</div>

                  <div></div>
                </div>

                <div
                  className={`h-[220px] w-[455px] flex flex-col py-[30px] px-[20px]   text-white relative gap-[20px] rounded-[4px] bg-gradient-to-b from-[#173342] to-[#29C77B] `}
                >
                  <div className="flex  justify-between items-center">
                    <span className="text-xl">Designera Learning</span>
                    <Image
                      src="/images/icons/arrow.png"
                      width={42}
                      height={42}
                      alt="arrow"
                    />
                  </div>
                  <div>Description</div>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[336px] min-w-[336px] flex flex-col bg-gradient-to-b from-[#11015A] to-[#370197] p-[20px] px-[30px] ">
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
};

export default page;
