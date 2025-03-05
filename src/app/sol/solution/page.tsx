"use client";
import { marqueimages } from "@/components/data";
import Solutioncard from "@/components/home/Solutioncard";
import Solutionservicecard from "@/components/home/Solutionservicecard";
import Navigationservice from "@/components/navigation/Navigationservice";
import { link } from "fs";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";


export interface servicetype {
icon:string,
 name:string,
 description:string,
 link:string,
}
 const creativeslinkdata = [
   {
     icon: "icon1",
     name: "Content Writing",
     description: "Create authentic content with expert writers",
     link: "/home/content-writing",
   },
   {
     icon: "icon2",
     name: "Graphic Designing",
     description: "Branding and visual design",
     link: "/home",
   },
   {
     icon: "icon3",
     name: "Video Production",
     description: "Motion graphics, Animations",
     link: "/home/video-production",
   },
   {
     icon: "icon4",
     name: "Localization",
     description: "Motion graphics, Animations",
     link: "/home/localization",
   },
   {
     icon: "icon5",
     name: "Product Designing",
     description: "3D modeling",
     link: "/home/product",
   },
   {
     icon: "icon6",
     name: "Packaging Designing",
     description: "Description",
     link: "/home/packaging-design",
   },
   {
     icon: "icon7",
     name: "UX-UI Designing",
     description: "Description",
     link: "/home/ui-ux",
   },
   {
     icon: "icon8",
     name: "Launch a Brand",
     description: "Re-branding, New Branding",
     link: "/home/brand-launch",
   },
 ];

 const talentnetworklinkdata = [
   {
     icon: "icon9",
     name: "Find a Job",
     description: "For Candidates",
     link: "/home/find-a-job",
   },
   {
     icon: "icon10",
     name: "Hire Professionals",
     description: "For Businesses",
     link: "/home/hire-professionals",
   },
   {
     icon: "icon11",
     name: "Become Interviewer",
     description: "For Evaluators",
     link: "/home/become-interviewer",
   },
   {
     icon: "icon12",
     name: "Upskill your team",
     description: "For Industry Trainings",
     link: "/home/upskill-your-team",
   },
 ];

 const medialinkData = [
   {
     icon: "icon13",
     name: "Affluence Marketing",
     description: "Description",
     link: "/home/affluence-marketing",
   },
   {
     icon: "icon14",
     name: "Influencer Marketing",
     description: "Description",
     link: "/home/influencer-marketing",
   },
   {
     icon: "icon15",
     name: "Event Marketing",
     description: "Description",
     link: "/home/event-marketing",
   },
   {
     icon: "icon16",
     name: "CRM",
     description: "Description",
     link: "/home/crm",
   },
 ];

 export const marketinglinkdata:servicetype[] = [
   {
     icon: "icon17",
     name: "Custom Web Development",
     description: "Description",
     link: "/home/custom-web-development",
   },
   {
     icon: "icon18",
     name: "Performance Marketing",
     description: "Description",
     link: "/home/performance-marketing",
   },
   {
     icon: "icon19",
     name: "Lead Gen-Funnel",
     description: "Description",
     link: "/home/lead-gen-funnel",
   },
   {
     icon: "icon20",
     name: "Technical SEO",
     description: "Description",
     link: "/home/technical-seo",
   },
   {
     icon: "icon21",
     name: "Market Research/Survey",
     description: "Description",
     link: "/home/market-research-survey",
   },
   {
     icon: "icon22",
     name: "Social Media Marketing",
     description: "Description",
     link: "/home/social-media-management",
   },
   {
     icon: "icon23",
     name: "LinkedIn Marketing",
     description: "Description",
     link: "/home/linkedin-marketing",
   },
   {
     icon: "icon24",
     name: "WhatsApp / Email Marketing",
     description: "Description",
     link: "/home/whatsapp-email",
   },
 ];


const page = () => {
  

 

const servicemap: Record<string, servicetype[]> = {
  Creatives: creativeslinkdata,
  Marketing: marketinglinkdata,
  Media: medialinkData,
  "Talent Network": talentnetworklinkdata,
};

  

    const content = [
      {
        title: "Creatives",
        content: "Elevate your brand value with engaging and creative videos",
        className: "bg-gradient-to-b from-[#3A2A29] to-[#E4B156]",
        color1: "#FFFFFF",
        color2: "#1EaD5D",
        border: "#FFBF00",
        services:creativeslinkdata
      },
      {
        title: "Marketing",
        content: "Leverage technology to reach potential audience faster.",
        className: "bg-gradient-to-b from-[#3C1750] to-[#BD41AD]",
        color1: "#FFFFFF",
        color2: "#1EaD5D",
        border: "#BA40AA",
        services:marketinglinkdata
      },
      {
        title: "Media",
        content:
          "Boost market impact with targeted demand generation solutions",
        className: "bg-gradient-to-b from-[#193844] to-[#29C77C]",
        color1: "#FFFFFF",
        color2: "#FFFFFF",
        border: "#FFBF00",
        services:talentnetworklinkdata
      },
      {
        title: "Talent Network",
        content:
          "Onboard top 1% Creative talent and Reduce your hiring process ",
        className: "bg-gradient-to-b from-[#6F495B] to-[#B55C4F]",
        color1: "#FEE4A1",
        color2: "#A0F0C5",
        border: "#B55C4F",
        services:medialinkData
      },
    ];

    const [selectedCard,setSelectedCard] = useState("Creatives");
    const [selectedServices,setSelectedServices] = useState<servicetype[]>(creativeslinkdata);

  return (
    <div className="flex flex-col w-full ">
      {" "}
      <div className="flex font-helvetica max-w-full ">
        <div className=" flex flex-grow  bg-darkblue  gap-[30px] pt-[30px]  items-start   ">
          <div className=" flex flex-col gap-[30px]  w-full pl-[80px]">
            <div className="text-sm text-gold-yellow flex gap-2  items-center font-semibold ">
              <Image
                src="/icons/solutions.png"
                width={16}
                height={16}
                alt="solution icon"
                className="h-full aspect-square"
              />{" "}
              <span className="w-full h-full flex items-end ">SOLUTIONS</span>
            </div>
            <div className="flex justify-between w-full pr-[30px]">
              {content.map((item) => (
                <Solutioncard
                  title={item.title}
                  content={item.content}
                  className={item.className}
                  color1={item.color1}
                  color2={item.color2}
                  border={item.border}
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                />
              ))}
            </div>
          </div>
        </div>
        <Navigationservice linkdata={servicemap[selectedCard]} />
      </div>
      <div className="w-full h-[150px] bg-background-blue-300 relative flex items-start pt-[30px]">
        <Marquee speed={50} className="flex items-center">
          {marqueimages.map((item) => (
            <div className="w-[138px]  flex items-center ">
              <img
                src={item.img}
                alt=""
                className="md:w-[128px] object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default page;