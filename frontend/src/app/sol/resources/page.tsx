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

     const marketinglinkdata = [
       {
         name: "Custom Web Development",
         description: "Description",
         link: "/home/custom-web-development",
       },
       {
         name: "Performance Marketing",
         description: "Description",
         link: "/home/performance-marketing",
       },
       {
         name: "Lead Gen-Funnel",
         description: "Description",
         link: "/home/lead-gen-funnel",
       },
       {
         name: "Technical SEO",
         description: "Description",
         link: "/home/technical-seo",
       },
       {
         name: "Market Research/Survey",
         description: "Description",
         link: "/home/market-research-survey",
       },
       {
         name: "Social Media Marketing",
         description: "Description",
         link: "/home/social-media-management",
       },
       {
         name: "LinkedIn Marketing",
         description: "Description",
         link: "/home/linkedin-marketing",
       },
       {
         name: "WhatsApp / Email Marketing",
         description: "Description",
         link: "/home/whatsapp-email",
       },
     ];

     
  return (
    <div className="flex flex-col">
      {" "}
      <div className="flex font-helvetica ">
        <div className="flex-1 flex flex-col bg-darkblue p-[20px] ">
          <div className="flex flex-col gap-[30px] py-[60px] md:ml-[30px]">
            {" "}
            <div className="text-sm text-gold-yellow flex gap-2 py-4 items-center font-semibold">
              <Image
                src="/images/icons/solutions.png"
                width={16}
                height={16}
                alt="solution icon"
                className="h-full aspect-square"
              />{" "}
              <span className="h-full flex items-end ">RESOURCES</span>
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
              <div
                className={`h-[334px]  flex flex-col py-[30px] px-[20px]   text-white relative gap-[20px] rounded-[4px] col-span-2 w-full bg-gradient-green-solution`}
              >
                <div className="flex  justify-between items-center">
                  <span className="text-xl">Join Desgignera Community</span>
                  <Image
                    src="/images/icons/arrow.png"
                    width={42}
                    height={42}
                    alt="arrow"
                  />
                </div>
                <div>
                  Explore how our work which help the clients to become top
                  brand
                </div>
                <div
                  className="min-w-[424px] min-h-[51px] absolute bottom-[100px] right-0 rounded-tl-[6px] rounded-bl-[6px]"
                  style={{ backgroundColor: "#FFFFFF" }}
                ></div>
                <div
                  className="min-w-[424px] min-h-[80px] absolute bottom-[30px] right-0 rounded-tl-[6px] rounded-bl-[6px]"
                  style={{ backgroundColor: "#FFFFFF" }}
                ></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[336px] min-w-[336px] flex flex-col bg-gradient-to-b from-[#11015A] to-[#370197] p-[20px] px-[40px] ">
          <div className="flex justify-start items-center gap-4 p-2 py-4">
            <Image
              src="/images/icons/cuboid.png"
              width={14}
              height={15}
              alt="Cuboid"
            />{" "}
            <span className="text-[16px] text-white">SERVICES</span>
          </div>
          {marketinglinkdata.map((service, index) => (
            <Solutionservicecard
              title={service.name}
              content={service.description}
              link={service.link}
            />
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