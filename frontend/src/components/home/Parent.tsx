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
  return (
    <div className=" w-full">
      <Add />
      <Navbar />
      <CampaignArea />
      <HelpBussiness />
      <LatestTool />
      <ProcessSteps />

      <DesignWillBenifitYou />
      <BenefitProcess />
      <Portfolio />
      <CaseStudy />
      <Clients />
      <Hiring />
      <MileStones />
      <Faq />
      <Service />
    </div>
  );
}

export default Parent