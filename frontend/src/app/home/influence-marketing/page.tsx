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
    heading: "Leverage the Popularity of Creators Through",
    coloredHeading: "Influencer Marketing",
    color: "highlight-influencemarketing",
    keypoints: [
      "Collaborate with the Top Influencers.",
      "Authentic and Impactful Brand Campaigns.",
      "Strategically Partner with Top-Tier Influencers.",
    ],
    image: "/images/influencemarketinghome.png",
    cardheading1: "Authentic Influencer Collaborations ",
    cardheading2: "That Drive Results",
    cards: [
      {
        logo: "/icons/infl1.png",
        title: "Strategic Partnerships",
        subtitle: "That Amplify Reach",
        img: "/icons/clock.png",
        subheading:
          "We connect you with the right influencers to maximize brand exposure and audience engagement.",
      },
      {
        logo: "/icons/infl2.png",
        title: "Showcase Your Brand’s",
        subtitle: "Authentic Voice",
        img: "/icons/star1.png",
        subheading:
          "Our influencer campaigns highlight your brand's story through genuine, relatable, and impactful collaborations.",
      },
      {
        logo: "/icons/infl3.png",
        title: "Drive Real Results with",
        subtitle: "Influencers",
        img: "/icons/graph1.png",
        subheading:
          "From boosting awareness to increasing conversions, our influencer strategies deliver measurable success for your brand.",
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
      <LatestTool />
      <DesignWillBenifitYou />
      <Clients />
      {/* <Hiring /> */}

      <MileStones />
      <Faq />
      <Service />

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
