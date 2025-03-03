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
    heading: "Building Stronger Relationships with Smart ",
    coloredHeading: "CRM",
    color: "highlight-CRM",
    keypoints: [
      "Empower Your Team with Top CRM Expertise.",
      "Seamless Customer Management for Lasting Relationships.",
      "Data-Driven Insights for Customer-Centric Growth.",
    ],
    image: "/images/eventmarketinghome.png",
    cardheading1: "Enhancing Customer Loyalty Through",
    cardheading2: "Intuitive CRM",
    cards: [
      {
        logo: "/icons/crm1.png",
        title: "Smarter Solutions for",
        subtitle: "Customer Management",
        img: "/icons/clock.png",
        subheading:
          "Effortlessly organize, track, and manage customer interactions with intuitive CRM tools designed for efficiency.",
      },
      {
        logo: "/icons/crm2.png",
        title: "Data Insights for Stronger",
        subtitle: "Relationships",
        img: "/icons/star1.png",
        subheading:
          "Leverage data-driven insights to enhance customer engagement and foster long-term loyalty.",
      },
      {
        logo: "/icons/crm3.png",
        title: "Seamless Integration for ",
        subtitle: "Productivity",
        img: "/icons/graph1.png",
        subheading:
          "Leverage data-driven insights to enhance customer engagement and foster long-term loyalty.",
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
     
      <ProcessSteps {...stepsdata} />
      <Clients />
      {/* <With3images
        heading="Services"
        content={[
          {
            src: "/images/campaign.png",
            imagetitle: "Personalized Event Strategies",
          },
          {
            src: "/images/rebranding.png",
            imagetitle: "Immersive and Memorable Experiences",
          },
          {
            src: "/images/advertising.png",
            imagetitle: "Seamless Execution and Optimization",
          },
        ]}
      /> */}
      {/* <Portfolio /> */}

      <MileStones />
      {/* <DesignWillBenifitYou /> */}

      {/* <Hiring /> */}

      <Faq />
      <Service />

      <CaseStudy />

      {/* <BenefitProcess /> */}
    </div>
  );
};

export default page;
