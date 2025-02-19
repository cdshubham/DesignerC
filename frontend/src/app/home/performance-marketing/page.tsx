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
    heading: "Transform yourClicks into Conversions with ",
    coloredHeading: "Performance Marketing",
    color: "highlight-performancemarketing",
    keypoints: [
      "Precision Targeting for Higher Conversions.",
      "Optimized Campaigns Backed by Data Insights.",
      "Flexible Strategies for Measurable Growth",
    ],
    image: "/images/performancemarketinghome.png",
    cardheading1: "Achieve Goals with Performance-",
    cardheading2: "Driven Campaigns",
    cards: [
      {
        logo: "/icons/perf1.png",
        title: "recision Targeting with  ",
        subtitle: "Data-Driven Insights",
        img: "/icons/clock.png",
        subheading:
          "Leverage advanced analytics to identify and engage the right audience for maximum impact.",
      },
      {
        logo: "/icons/perf2.png",
        title: "Real-Time Campaign ",
        subtitle: "Optimization",
        img: "/icons/star1.png",
        subheading:
          "Continuously monitor and adjust campaigns to ensure top performance and better ROI.",
      },
      {
        logo: "/icons/perf3.png",
        title: "Comprehensive Multi-",
        subtitle: "Channel Strategies",
        img: "/icons/graph1.png",
        subheading:
          "Run impactful campaigns on Google, social media, and more for broader audience engagement.",
      },
    ],
  };

  const stepsdata = {
    mainheading: "Trendy Creatives to meet your Social Media needs",
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
      {/* <With3images /> */}
      <BenefitProcess />
      <Portfolio />
      {/* <CaseStudy /> */}
      <Clients />
      <MileStones />
      {/* <ProcessSteps
        mainheading={stepsdata.mainheading}
        steps={stepsdata.steps}
      /> */}

      {/* <Hiring /> */}

      <Faq />
      <Service />
      {/* <DesignWillBenifitYou /> */}
    </div>
  );
};

export default page;
