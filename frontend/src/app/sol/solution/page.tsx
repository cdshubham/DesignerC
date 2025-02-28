"use client";
import Solutioncard from "@/components/home/Solutioncard";
import Solutionservicecard from "@/components/home/Solutionservicecard";
import { link } from "fs";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";


export interface servicetype {
 name:string,
 description:string,
 link:string,
}

const page = () => {
  

   const creativeslinkdata = [
     {
       name: "Content Writing",
       description: "Create authentic content with expert writers",
       link: "/home/content-writing",
     },
     {
       name: "Graphic Designing",
       description: "Branding and visual design",
       link: "/home",
     },
     {
       name: "Video Production",
       description: "Motion graphics, Animations",
       link: "/home/video-production",
     },
     {
       name: "Localization",
       description: "Motion graphics, Animations",
       link:"/home/localization"
     },
     {
      name:"Product Designing",
      description:"3D modeling",
      link:"/home/product"
     },
     {
      name:"Packaging Designing",
      description:"Description",
      link:"/home/packaging-design"
     },
     {
      name:"UX-UI Designing",
      description:"Description",
      link:"/home/ui-ux"
     },
     {
      name:"Launch a Brand",
      description:"Re-branding, New Branding",
      link:"/home/brand-launch"
     }
   ];


   const talentnetworklinkdata = [
     {
       name: "Find a Job",
       description: "For Candidates",
       link: "/home/find-a-job",
     },
     {
       name: "Hire Professionals",
       description: "For Businesses",
       link: "/home/hire-professionals",
     },
     {
       name: "Become Interviewer",
       description: "For Evaluators",
       link: "/home/become-interviewer",
     },
     {
       name: "Upskill your team",
       description: "For Industry Trainings",
       link: "/home/upskill-your-team",
     },
   ];

   const medialinkData = [
     {
       name: "Affluence Marketing",
       description: "Description",
       link: "/home/affluence-marketing",
     },
     {
       name: "Influencer Marketing",
       description: "Description",
       link: "/home/influencer-marketing",
     },
     {
       name: "Event Marketing",
       description: "Description",
       link: "/home/event-marketing",
     },
     {
       name: "CRM",
       description: "Description",
       link: "/home/crm",
     },
   ];

   const marketinglinkdata =  [
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
  const images = [
    { img: "/logos/adobe.png" },
    { img: "/logos/airmeet.png" },
    { img: "/logos/amazon.png" },
    { img: "/logos/amazonpay.png" },
    { img: "/logos/appolo.png" },
    { img: "/logos/axis.png" },
    { img: "/logos/binance.png" },
    { img: "/logos/darwing.png" },
  ];
  return (
    <div className="flex flex-col ">
      {" "}
      <div className="flex font-helvetica  ">
        <div className=" flex flex-grow flex-col bg-darkblue  gap-[30px] py-[60px]   ">
          <div className=" flex flex-col gap-[30px]  md:ml-[30px] ">
            <div className="text-sm text-gold-yellow flex gap-2 py-4 items-center font-semibold ">
              <Image
                src="/images/icons/solutions.png"
                width={16}
                height={16}
                alt="solution icon"
                className="h-full aspect-square"
              />{" "}
              <span className="h-full flex items-end ">SOLUTIONS</span>
            </div>
            <div className="grid grid-cols-4  w-full">
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
        <div className="w-[336px] min-w-[300px] flex flex-col bg-gradient-to-b from-[#11015A] to-[#370197] p-[20px] px-[30px] min-h-[590px] max-h-[590px]">
          <div className="flex justify-start items-center gap-4 p-2 py-4">
            <Image
              src="/images/icons/cuboid.png"
              width={14}
              height={15}
              alt="Cuboid"
            />{" "}
            <span className="text-[16px] text-white">SERVICES</span>
          </div>
          {servicemap[selectedCard].map((service, index) => (
            <Solutionservicecard
              title={service.name}
              content={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-[150px] bg-background-blue-300 relative flex items-center">
        <Marquee speed={50}>
          {images.map((item) => (
            <div className="w-[138px]  flex items-center md:py-[12.64px]">
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