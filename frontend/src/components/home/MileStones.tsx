import React from 'react'

function MileStones() {
    const content = [
        {heading:"$10M+",sub:"Revenue for Clients"},
        {heading:"1500+",sub:"Project Delivered"},
        {heading:"$10K+",sub:"Expert Designers"},
    ]
    const images=[
        {img:"/images/campaign.png",category:"Campaign Planning"},
        {img:"/images/uiux.png",category:"UX/UI Design"},
        {img:"/images/advertising.png",category:"Advertising"},
        {img:"/images/rebranding.png",category:"Rebranding"},
    ]
  return (
    <div className="w-full md:py-[60px] bg-background-blue-300 text-white flex flex-col justify-center items-center md:gap-[30px]">
      <span className="text-heading/[68.99px] font-normal">
        Explore Perfect needs with Designera.
      </span>
      <span className="text-center text-[#D6D8D2]">
        Social media creative projects completed to date
      </span>
      <div className="flex w-full items-center px-[24px] justify-around overflow-auto">
        {images.map((item) => (
          <div className="flex flex-col gap-[20px]">
            <img
              src={item.img}
              alt=""
              className="max-w-[369px] max-h-[305px] object-cover rounded-[8px]"
            />
            <h3 className="text-center text-[24px] font-semibold ">
              {item.category}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MileStones