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
    <div className="w-full py-[60px] bg-background-blue-300 px-[30px] md:px-0 text-white flex flex-col justify-center items-center gap-[30px]">
      <span className=" text-[28px]/[32px] md:text-heading/[68.99px] font-normal">
        Explore Perfect needs with Designera
      </span>
      <span className="md:text-center text-[#D6D8D2] text-body font-normal">
        Social media creative projects completed to date
      </span>
      <div className="flex w-full items-center md:px-[24px] justify-around overflow-auto">
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