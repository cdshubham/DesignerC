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
    heading: "Maximizing ROI Through Strategic",
    coloredHeading: "Affluence Marketing",
    color: "highlight-affluence",
    keypoints: [
      "Partner with Leading Media Agencies.",
      "Strategic and Targeted Media Placements.",
      "Performance-Driven Campaigns Powered by Insights.",
    ],
    image: "/images/technicalseohome.png",
    cardheading1: "Engaging Visual Creatives That Drive",
    cardheading2: "Results",
    cards: [
      {
        logo: "/icons/affl1.png",
        title: "Strategic Media Solution",
        subtitle: "That Maximize Reach",
        img: "/icons/clock.png",
        subheading:
          "Seamless support for all programming languages and advanced integrations tailored to your needs.",
      },
      {
        logo: "/icons/affl2.png",
        title: "Optimized Media Buying",
        subtitle: "for Maximum ROI",
        img: "/icons/star1.png",
        subheading:
          "Custom web development designed to adapt and grow with your business requirements",
      },
      {
        logo: "/icons/affl3.png",
        title: "Seamless Execution",
        subtitle: "Across Multiple Channels ",
        img: "/icons/graph1.png",
        subheading:
          "Designera’s skilled team ensures precision and excellence in executing your custom development goals.",
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
      <Hiring />
      <Clients />
      <MileStones />
      <Faq />
      <Service />
      {/* <LatestTool />
      <DesignWillBenifitYou /> */}
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

      {/* <Portfolio />
      <CaseStudy /> */}

      {/* <BenefitProcess /> */}
    </div>
  );
};

export default page;
