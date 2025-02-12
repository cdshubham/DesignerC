import React from 'react'
import Add from './Add'
import Navbar from '../ui/navbar'
import CampaignArea from './CampaignArea'
import HelpBussiness from './HelpBussiness'
import LatestTool from './LatestTool'



function Parent() {
  return (
    <div className='flex flex-col w-full'>
        <Add/>
       <Navbar/>
       <CampaignArea/>
       <HelpBussiness/>
       <LatestTool/>
    </div>
  )
}

export default Parent