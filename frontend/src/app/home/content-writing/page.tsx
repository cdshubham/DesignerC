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
    heading: "Enhance Your Brand Story with Thoughtful",
    coloredHeading: "Content Writing",
    color: "highlight-greenblue",
    keypoints: [
      "Engaging Content That Converts.",
      "SEO-Optimized Content That Ranks.",
      "Hire Top 1% Content Writers Instantly.",
    ],
    image: "/images/contentwritinghome.png",
    cardheading1: "Engaging Content Tailored to Your",
    cardheading2: "Audience ",
    cards: [
      {
        logo: "/icons/cw1.png",
        title: "Content for Every Platform",
        subtitle: "Requirement",
        img: "/icons/clock.png",
        subheading:
          "Web copy, social media posts, email campaigns, and more—strategized for each medium.",
      },
      {
        logo: "/icons/cw2.png",
        title: "SEO-Optimized for ",
        subtitle: "Maximum Reach",
        img: "/icons/star1.png",
        subheading:
          "Whether it's minimalist elegance or bold statements, we tailor designs that resonate with your audience.",
      },
      {
        logo: "/icons/cw3.png",
        title: "Engages & Converts Lead ",
        subtitle: "Faster",
        img: "/icons/graph1.png",
        subheading:
          "High-impact content tailored to captivate your audience and accelerate your lead conversion journey.",
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
    <div className="w-full flex flex-col items-center">
      <CampaignArea {...data} />
      <HelpBussiness />
     

      <ProcessSteps
        mainheading={stepsdata.mainheading}
        steps={stepsdata.steps}
      />
      <CaseStudy />
      <Clients />
      <MileStones />
      <Faq />
      {/* <DesignWillBenifitYou />
      <BenefitProcess />
      <Portfolio />

      <Hiring />

      <Service /> */}
    </div>
  );
};

export default page;
