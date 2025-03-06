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
    heading: "Driving Strategic Growth with Expert",
    coloredHeading: "Market Research & Consultancy",
    color: "highlight-gold-yellow",
    keypoints: [
      "Data-Driven SEO Solutions for Impact",
      "Flawless Website Functionality for Search Engines",
      "On-board the Top 1% SEO Experts",
    ],
    image: "/images/leadgenfunnelshome.png",
    cardheading1: "Insights That Transform Your Business",
    cardheading2: "Strategy",
    cards: [
      {
        logo: "/icons/mrs1.png",
        title: "Customized Funnels for ",
        subtitle: "Maximum Impact",
        img: "/icons/clock.png",
        subheading:
          "Seamless support for all programming languages and advanced integrations tailored to your needs.",
      },
      {
        logo: "/icons/mrs2.png",
        title: "Insight-Driven Funnel ",
        subtitle: "Optimization ",
        img: "/icons/star1.png",
        subheading:
          "Custom web development designed to adapt and grow with your business requirements",
      },
      {
        logo: "/icons/mrs3.png",
        title: "Effortless and Engaging ",
        subtitle: "User Journeys",
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
      
      <With3images
        heading="Process"
        subheading="Our top-tier market research and consultancy services are designed to uncover insights that drive growth, tailored to your unique needs. 
Whether you're entering a new market, launching a product, or refining your strategy, 
we ensure your decisions are data-driven, impactful, and resonate universally with your audience."
        content={[
          {
            src: "/images/campaign.png",
            imagetitle: "Research-Driven Market Analysis",
            subtitle:
              "We analyze your audience, trends, and competitors to craft impactful, resonating strategies.",
          },
          {
            src: "/images/rebranding.png",
            imagetitle: "Strategic Consultation and Planning",
            subtitle:
              "Our team designs tailored funnels, mapping out every stage from awareness to conversion, ensuring seamless customer journeys.",
          },
          {
            src: "/images/advertising.png",
            imagetitle: "Execution and Continuous Optimization",
            subtitle:
              "We design user-friendly, optimized landing pages to capture leads and boost engagement.",
          },
        ]}
      />
      <DesignWillBenifitYou />
      <Clients />
      <MileStones />
      {/* <Portfolio />
      <CaseStudy /> */}

      {/* <Hiring /> */}

      <Faq />
      <Service />

      {/* <BenefitProcess /> */}
    </div>
  );
};

export default page;
