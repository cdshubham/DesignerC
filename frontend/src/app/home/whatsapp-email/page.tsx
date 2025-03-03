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
    heading: "Expand Your Professional Network with Strategic",
    coloredHeading: "LinkedIn Marketing",
    color: "highlight-linkedin",
    keypoints: [
      "On-board the Top LinkedIn Marketers.",
      "Build Meaningful Professional Relationships.",
      "Data-Driven Campaigns for Maximum Engagement.",
    ],
    image: "/images/whatsapphome.png",
    cardheading1: "Strategic LinkedIn Outreach That",
    cardheading2: "Delivers Results",
    cards: [
      {
        logo: "/icons/linkedin1.png",
        title: "Targeted Outreach That",
        subtitle: "Converts",
        img: "/icons/clock.png",
        subheading:
          "We connect you with decision-makers through precise targeting, ensuring meaningful engagement and impactful results.",
      },
      {
        logo: "/icons/linkedin2.png",
        title: "Build Credibility, Boost ",
        subtitle: "Visibility ",
        img: "/icons/star1.png",
        subheading:
          "Showcase your expertise with tailored content that strengthens your professional brand and drives authority on LinkedIn.",
      },
      {
        logo: "/icons/linkedin3.png",
        title: "Data-Driven Success ",
        subtitle: "Strategies",
        img: "/icons/graph1.png",
        subheading:
          "Leverage analytics and insights to optimize campaigns, maximize ROI, and deliver measurable outcomes.",
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
      <Portfolio />
      {/* <DesignWillBenifitYou /> */}
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
