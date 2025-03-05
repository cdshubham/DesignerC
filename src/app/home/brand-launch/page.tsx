import Add from "@/components/home/Add";
import BenefitProcess from "@/components/home/Benefit2";
import Bookademo from "@/components/home/Bookademo";
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
    heading: "Powerful & ImpactfulStrategies for a Head-Turning  ",
    coloredHeading: "Brand Launch",
    color: "highlight-brandlaunch",
    keypoints: [
      "On-board the Top 1% UI/UX Talent.",
      "Seamless and Intuitive User Experiences.",
      "Customer-Centric Designs Powered by Data.",
    ],
    image: "/images/brandlaunchhome.png",
    cardheading1: "Strategic Brand Launches That Create",
    cardheading2: "Impact",
    cards: [
      {
        logo: "/icons/brand1.png",
        title: "Strategic Branding That  ",
        subtitle: "Drives Growth",
        img: "/icons/clock.png",
        subheading:
          "We craft tailored brand identities and strategies that amplify recognition and fuel business success.",
      },
      {
        logo: "/icons/brand2.png",
        title: "Launch Strategies That ",
        subtitle: "Maximize ROI",
        img: "/icons/star1.png",
        subheading:
          "Tailored launch strategies to boost brand visibility, drive engagement, and maximize ROI.",
      },
      {
        logo: "/icons/brand3.png",
        title: "Transforming Brands into",
        subtitle: "Market Leaders",
        img: "/icons/graph1.png",
        subheading:
          "From refined branding to powerful marketing, we position your brand for long-term success and impact.",
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
      
      <With3images />
      <Bookademo color={"highlight-brandlaunch"} heading="Affordable subtitling services with" coloredHeading="quick TAT" image="/images/brandlaunchutil.png"/>
      <Portfolio />
      <CaseStudy />
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

      {/* <BenefitProcess /> */}
    </div>
  );
};

export default page;
