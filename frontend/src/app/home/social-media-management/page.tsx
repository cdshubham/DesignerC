import React from "react";
import Add from "@/components/home/Add";
import BenefitProcess from "@/components/home/Benefit2";
import CampaignArea from "@/components/home/CampaignArea";
import CaseStudy from "@/components/home/CaseStudy";
import Clients from "@/components/home/Clients";
import DesignWillBenifitYou from "@/components/home/DesignWillBenifitYou";
import Faq from "@/components/home/Faq";
import HelpBussiness from "@/components/home/HelpBussiness";
import Hiring from "@/components/home/Hiring";
import LatestTool from "@/components/home/LatestTool";
import MileStones from "@/components/home/MileStones";
import Portfolio from "@/components/home/Portfolio";
import ProcessSteps from "@/components/home/ProcessSteps";
import Service from "@/components/home/Service";
import With3images from "@/components/home/With3images";
import Navbar from "@/components/ui/navbar";

const page = () => {
  const data = {
    heading: "Master Your Digital Voice with Expert ",
    coloredHeading: "Social Media Marketing",
    color: "highlight-smm",
    keypoints: [
      "Hire the Top 1% Social Media Managers at Designera.",

      "Mange your Social Media from Best Talent at Designera.",
      "Engaging Strategies & Creatives which Drive Growth.",
    ],
    image: "/images/technicalseohome.png",
    cardheading1: "Creative Social Media Content That",
    cardheading2: "Works",
    cards: [
      {
        logo: "/icons/smm1.png",
        title: "Precision-Driven Social",
        subtitle: "Media Management",
        img: "/icons/clock.png",
        subheading:
          "Delivering impactful creatives, Reels, and campaigns on time, ensuring consistent engagement for your brand.",
      },
      {
        logo: "/icons/smm2.png",
        title: "Showcase Your Brand's ",
        subtitle: "Personality",
        img: "/icons/star1.png",
        subheading:
          "Whether it's minimalist elegance or bold statements, we tailor designs that resonate with your audience.",
      },
      {
        logo: "/icons/smm3.png",
        title: "Let Us Market or Hire Top ",
        subtitle: "Talent from Designera",
        img: "/icons/graph1.png",
        subheading:
          "Choose our expert marketing services or hire our top 1% talent to enhance your brand’s growth and performance.",
      },
    ],
  };

  const stepsdata = {
    mainheading:
      "Hire Writers from Designera or  get Pre-Vetted Top Expert Writers for your Project",
    steps: [
      {
        title: "Tell us what you need",
        description:
          "Our expert team outlines the project objectiveand crafts a thorough brief.",
        image: "/images/yellow.png", // Replace with your image path
        step: "Step 1",
        color: "#FFCA33",
      },
      {
        title: "We match the expert writers",
        description:
          "From our curated pool, we find the best creatorwho fits your brief and launch them into your project.",
        image: "/images/green.png", // Replace with your image path
        step: "Step 2",
        color: "#4DE593",
      },
      {
        title: "Review & track your content projects",
        description:
          "You can monitor the progress at every step on your easy-to-use dashboard and work with your remote team.",
        image: "/images/purple.png", // Replace with your image path
        step: "Step 3",
        color: "#B78EF0",
      },
    ],
  };

  return (
    <div className=" w-full">
      <CampaignArea {...data} />
      <HelpBussiness />
   
      <DesignWillBenifitYou />
      {/* <With3images
        heading="Services"
        content={[
          {
            src: "/images/campaign.png",
            imagetitle: "Native Language Optimizers",
          },
          {
            src: "/images/rebranding.png",
            imagetitle: "Code-Centric Optimization ",
          },
          {
            src: "/images/advertising.png",
            imagetitle: "Context-Aware Site Performance",
          },
        ]}
      /> */}

      <Portfolio />
      <CaseStudy />
      <Clients />
      <MileStones />
      {/* <Hiring /> */}

      <Faq />
      <Service />

      {/* <BenefitProcess /> */}
    </div>
  );
};

export default page;
