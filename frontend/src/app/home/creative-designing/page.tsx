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
import Expertise from "@/components/home/Expertise";
import Shopify from "@/components/home/Shopify";
import Bestforyou from "@/components/home/Bestforyou";


const page = () => {

      const data = {
    heading: "Driving Sales and Capturing Attention Through",
    coloredHeading: "Creative Designing",
    color: "yellow-100",
    keypoints: [
      "On-board the Top 1% Design Talent.",
      "Communicate your brand’s story.",
      "Impactful Marketing Collateral.",
    ],
    Image: "/images/home.png",
    cardheading1: "Engaging Visual Creatives",
    cardheading2: "That Drive Results",
    cards: [
      {
        logo: "/icons/schedule.png",
        title: "Punctuality Meets ",
        subtitle: "Perfection",
        img: "/icons/clock.png",
        subheading:
          "We deliver creatives, precise designs on schedule, ensuring excellence for your brand every time.",
      },
      {
        logo: "/icons/star.png",
        title: "Showcase Your Brand's ",
        subtitle: "Personality",
        img: "/icons/star1.png",
        subheading:
          "Whether it's minimalist elegance or bold statements, we tailor designs that resonate with your audience.",
      },
      {
        logo: "/icons/graph.png",
        title: "Engage with Strategic",
        subtitle: "Visuals",
        img: "/icons/graph1.png",
        subheading:
          "From social media posts to digital ads, our graphics are crafted to drive engagement and action.",
      },
    ],
  };

  return (
    <div className=" w-full ">
      <CampaignArea {...data} />
      <HelpBussiness />
    

      <DesignWillBenifitYou />

      {/* <CaseStudy /> */}
      <Expertise />
      <Shopify/>
      <Portfolio />
    
      {/* <Clients /> */}
      <Hiring />
      {/* <Bestforyou/> */}
      <MileStones />
      <Faq />
      <Service />
    </div>
  );
}

export default page;