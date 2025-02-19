import React from 'react'
import WhiteButton from '../ui/WhiteButton'

function Service() {
  return (
    <div className='md:py-[60px] bg-background-blue-100 text-heading flex flex-col text-white font-normal text-center gap-[30px]'>
        <div className='flex flex-col '>
        <p className=''>Unlock your Potential to get  </p>
        <p>noticed among Top 1% ventures!</p>
        </div>

        <div className='flex gap-4 justify-center'>
            <WhiteButton children="Book a Demo" className="md:w-[153px] h-[37px] bg-yellow-100 rounded-[4px] text-black text-cta font-bold"/>
            <WhiteButton children="Sign up" className="md:w-[153px] h-[37px] rounded-[4px]  text-cta font-bold border "/>
        </div>
    </div>
  )
}

export default Service