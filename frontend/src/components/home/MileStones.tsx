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
    <div className="md:py-[60px] bg-background-blue-300 text-white flex flex-col justify-center items-center md:gap-[45px]">
      <span className="text-heading/[68.99px] font-normal">
        Designera is best for your business.
      </span>
      <div className="flex ">
        {content.map((item, index) => (
          <div
            className={`flex flex-col gap-2  ${
              index < content.length - 1
                ? "border-r border-background-white-100"
                : ""
            } px-8`}
          >
            <span className="text-heading/[68px] font-bold">
              {item.heading}
            </span>
            <span className="text-base/5 font-nprmal">{item.sub}</span>
          </div>
        ))}
      </div>
      <div className="md:w-[950px] bg-white mx-auto h-[1px]"></div>
      <span className="text-heading/[68.99px] font-normal">
        Explore Perfect needs with Designera.
      </span>

      <div className="flex w-full items-center   px-[24px] justify-between ">
        {images.map((item) => (
          <div className="flex flex-col gap-[20px]">
            <img
              src={item.img}
              alt=""
              className="w-[369px] h-[305px] object-contain"
            />
            <h3 className='text-center text-[24px] font-semibold '>{item.category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MileStones