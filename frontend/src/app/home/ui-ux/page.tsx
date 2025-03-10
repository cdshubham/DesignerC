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
import LaunchProcess from "@/components/home/LaunchProcess";
import MileStones from "@/components/home/MileStones";
import Portfolio from "@/components/home/Portfolio";
import ProcessSteps from "@/components/home/ProcessSteps";
import Service from "@/components/home/Service";
import With3images from "@/components/home/With3images";

const page = () => {
  const data = {
    heading: "Elevating Experiences with Thoughtful ",
    coloredHeading: "UX/UI Designs",
    color: "highlight-purple",
    keypoints: [
      "On-board the Top 1% UI/UX Talent.",
      "Seamless and Intuitive User Experiences.",
      "Customer-Centric Designs Powered by Data.",
    ],
    image: "/images/uxuihome.png",
    cardheading1: "User-Centric UI/UX That",
    cardheading2: "Creates Lasting Impact",
    cards: [
      {
        logo: "/icons/ahead.png",
        title: "Design That Truly Thinks",
        subtitle: "Ahead",
        img: "/icons/clock.png",
        subheading:
          "We deliver creatives, precise designs on schedule, ensuring excellence for your brand every time.",
      },
      {
        logo: "/icons/precision.png",
        title: "Creativity Meets Data",
        subtitle: "Precision",
        img: "/icons/star1.png",
        subheading:
          "Whether it's minimalist elegance or bold statements, we tailor designs that resonate with your audience.",
      },
      {
        logo: "/icons/empathy.png",
        title: "Empathy-Driven",
        subtitle: "Experiences",
        img: "/icons/graph1.png",
        subheading:
          "From social media posts to digital ads, our graphics are crafted to drive engagement and action.",
      },
    ],
  };
  return (
    <div className=" w-full">
      <CampaignArea {...data} />
      <HelpBussiness />

      <ProcessSteps mainheading="Intuitive content ordering process to meet your needs  " />
      <With3images />
      {/* 
    <DesignWillBenifitYou /> */}
      {/* <BenefitProcess /> */}
      <LaunchProcess />
      <Portfolio />
      <CaseStudy />
      <Clients />
      <Hiring />
      <MileStones />
      <Faq />
      <Service />
    </div>
  );
};

export default page;
