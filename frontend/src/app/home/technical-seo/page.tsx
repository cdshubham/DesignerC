import React from 'react';
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
    heading: "Optimize yourSearch Rankings with Precision",
    coloredHeading: "Technical SEO",
    color: "highlight-technicalseo",
    keypoints: [
      "Data-Driven SEO Solutions for Impact",
      "Flawless Website Functionality for Search Engines",
      "On-board the Top 1% SEO Experts",
    ],
    image: "/images/technicalseohome.png",
    cardheading1: "Search Optimization ",
    cardheading2: "Beyond the Surface",
    cards: [
      {
        logo: "/icons/seo1.png",
        title: "Precision-Driven ",
        subtitle: "Optimization",
        img: "/icons/clock.png",
        subheading:
          "Videos designed to deliver clear, impactful messages that connect brands with their audiences seamlessly.",
      },
      {
        logo: "/icons/seo2.png",
        title: "Boost Rankings with ",
        subtitle: "Seamless Crawling",
        img: "/icons/star1.png",
        subheading:
          "Our expert strategies optimize your site structure, enabling search engines to crawl and index efficiently.",
      },
      {
        logo: "/icons/seo3.png",
        title: "Speed and Performance ",
        subtitle: "Perfected",
        img: "/icons/graph1.png",
        subheading:
          "Enhance user experience and SEO rankings with faster load times, mobile responsiveness, and error-free navigation.",
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
     
      <With3images
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
      />

      <Portfolio />
      <CaseStudy />
      <Clients />
      <MileStones />
      {/* <Hiring /> */}

      <Faq />
      <Service />
      {/* <DesignWillBenifitYou /> */}

      {/* <BenefitProcess /> */}
    </div>
  );
};

export default page;
