import React from 'react'
import WhiteButton from '../ui/WhiteButton'

function Service() {
  return (
    <div className="w-full py-8 md:py-[60px] px-4 md:px-[125px] bg-background-blue-100 text-white text-center 
      flex flex-col items-center justify-center gap-6 md:gap-[30px]">
      <div className="flex flex-col space-y-2 max-w-full">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          Unlock your Potential to get 
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          noticed among Top 1% ventures!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md items-center">
        <WhiteButton
          children="Book a Demo"
          className="w-[220px] sm:w-[153px] h-10 sm:h-[37px] 
            bg-yellow-100 rounded-[4px] text-black text-sm sm:text-cta font-bold"
        />
        <WhiteButton
          children="Sign up"
          className="w-[220px] sm:w-[153px] h-10 sm:h-[37px] 
            rounded-[4px] text-sm sm:text-cta font-bold border text-white"
        />
      </div>
    </div>
  );
}

export default Service