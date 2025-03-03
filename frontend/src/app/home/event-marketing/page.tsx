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
    heading: "Harness the Power of Experiences Through",
    coloredHeading: "Event Marketing",
    color: "highlight-eventmarketing",
    keypoints: [
      "Seamlessly Plan and Execute Unforgettable Events.",
      "Create Immersive Experiences That Captivate Audiences.",
      "Tailored Strategies for Maximum Event Impact.",
    ],
    image: "/images/eventmarketinghome.png",
    cardheading1: "Engaging Visual Creatives That Drive",
    cardheading2: "Results",
    cards: [
      {
        logo: "/icons/event1.png",
        title: "Strategic Event Planning",
        subtitle: "for Maximum Impact ",
        img: "/icons/clock.png",
        subheading:
          "Tailored strategies that align with your brand to create memorable and goal-driven events.",
      },
      {
        logo: "/icons/event2.png",
        title: "Showcase Your Brand’s",
        subtitle: "Authentic Voice",
        img: "/icons/star1.png",
        subheading:
          "Our influencer campaigns highlight your brand's story through genuine, relatable, and impactful collaborations.",
      },
      {
        logo: "/icons/event3.png",
        title: "Creative Solutions That ",
        subtitle: "Engage and Inspire",
        img: "/icons/graph1.png",
        subheading:
          "Innovative ideas and immersive experiences designed to captivate audiences and foster connections.",
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
      />
      <Portfolio />
      <Clients />

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
