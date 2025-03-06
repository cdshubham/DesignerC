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
import Navbar from "@/components/ui/navbar";

const page = () => {
  const data = {
    heading: "Creating Long Lasting Impressions with",
    coloredHeading: "Localization",
    color: "highlight-radiumgreen",
    keypoints: [
      "Engaging Content That Converts.",
      "SEO-Optimized Content That Ranks.",
      "Hire Top 1% Content Writers Instantly.",
    ],
    image: "/images/localizationhome.png",
    cardheading1: "Ads Designed to Engage and Deliver",
    cardheading2: "Results",
    cards: [
      {
        logo: "/icons/loc1.png",
        title: "Punctuality Meets",
        subtitle: "Perfection",
        img: "/icons/clock.png",
        subheading:
          "We deliver creatives, precise designs on schedule, ensuring excellence for your brand every time.",
      },
      {
        logo: "/icons/loc2.png",
        title: "Showcase Your Brand's",
        subtitle: "Personality",
        img: "/icons/star1.png",
        subheading:
          "Whether it's minimalist elegance or bold statements, we tailor designs that resonate with your audience.",
      },
      {
        logo: "/icons/loc3.png",
        title: "Engage with Strategic",
        subtitle: "Visuals",
        img: "/icons/graph1.png",
        subheading:
          "From social media posts to digital ads, our graphics are crafted to drive engagement and action.",
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
      <Clients />
      <MileStones />
      <Faq />
      <Service />
      {/* <LatestTool />

      <ProcessSteps
        mainheading={stepsdata.mainheading}
        steps={stepsdata.steps}
      />
      <CaseStudy /> */}

      {/* <BenefitProcess /> */}
      {/* <Portfolio /> */}

      {/* <Hiring /> */}
    </div>
  );
};

export default page;
