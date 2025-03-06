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
    heading: "Bringing Stories to Life Through Captivating",
    coloredHeading: "Video Production",
    color: "highlight-videoproduction",
    keypoints: [
      "Emotion-Driven Videos That Connect",
      "High-Impact Commercial Visuals",
      "Hire Top 1% Video Experts",
    ],
    image: "/images/localizationhome.png",
    cardheading1: "Videos Designed to",
    cardheading2: "Drive ROI and Growth",
    cards: [
      {
        logo: "/icons/vid1.png",
        title: "Communicate with",
        subtitle: "Purpose and Precision",
        img: "/icons/clock.png",
        subheading:
          "Videos designed to deliver clear, impactful messages that connect brands with their audiences seamlessly.",
      },
      {
        logo: "/icons/vid2.png",
        title: "Picture Perfect Clarity in",
        subtitle: "Every Frame",
        img: "/icons/star1.png",
        subheading:
          "Crystal-clear visuals and storytelling that deliver your message effectively and resonate with your audience.",
      },
      {
        logo: "/icons/vid3.png",
        title: "Emotion-Driven Videos ",
        subtitle: "That Connect",
        img: "/icons/graph1.png",
        subheading:
          "We craft powerful narratives that resonate emotionally, building lasting connections with your audience.",
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
     
      <ProcessSteps
        mainheading={stepsdata.mainheading}
        steps={stepsdata.steps}
      />
      <Portfolio />
      <CaseStudy />
      <Clients />
      <Hiring />
      <MileStones />
      <Faq />
      <Service />
      {/* <DesignWillBenifitYou /> */}

      {/* <BenefitProcess /> */}
    </div>
  );
};

export default page;
