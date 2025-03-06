import React from 'react'
import Add from './Add'
import Navbar from '../ui/navbar'
import CampaignArea from './CampaignArea'
import HelpBussiness from './HelpBussiness'
import LatestTool from './LatestTool'
import DesignWillBenifitYou from './DesignWillBenifitYou'
import Portfolio from './Portfolio'
import CaseStudy from './CaseStudy'
import Clients from './Clients'
import Hiring from './Hiring'
import MileStones from './MileStones'
import Faq from './Faq'
import Service from './Service'
import ProcessSteps from './ProcessSteps'
import BenefitProcess from './Benefit2'




function Parent() {

  const data = {
    heading: "Driving Sales and Capturing Attention Through",
    coloredHeading: "Graphic Designs",
    color: "yellow-100",
    keypoints: [
      "On-board the Top 1% Design Talent.",
      "Communicate your brand’s story.",
      "Impactful Marketing Collateral.",
    ],
    Image: "/images/home.png",
    cardheading1: "Engaging Visual Creatives",
    cardheading2: "That Drive Results",
    cards: [
      {
        logo: "/icons/schedule.png",
        title: "Punctuality Meets ",
        subtitle: "Perfection",
        img: "/icons/clock.png",
        subheading:
          "We deliver creatives, precise designs on schedule, ensuring excellence for your brand every time.",
      },
      {
        logo: "/icons/star.png",
        title: "Showcase Your Brand's ",
        subtitle: "Personality",
        img: "/icons/star1.png",
        subheading:
          "Whether it's minimalist elegance or bold statements, we tailor designs that resonate with your audience.",
      },
      {
        logo: "/icons/graph.png",
        title: "Engage with Strategic",
        subtitle: "Visuals",
        img: "/icons/graph1.png",
        subheading:
          "From social media posts to digital ads, our graphics are crafted to drive engagement and action.",
      },
    ],
  };
  return (
    <div className="w-full">

      <CampaignArea {...data} />
      <HelpBussiness />
    
      <DesignWillBenifitYou />
    
      <Portfolio />
      {/* <CaseStudy /> */}
      {/* <Clients /> */}
      <Hiring />
      <MileStones />
      <Faq />
      <Service />
    </div>
  );
}

export default Parent