import React from 'react'

interface props {
    toolsimg?:string[];
}
function LatestTool({toolsimg}:props) {
    const images=[
        {img:"/logos/Tool1.png"},
        {img:"/logos/Tool2.png"},
        {img:"/logos/Tool3.png"},
        {img:"/logos/Tool4.png"},
        {img:"/logos/Tool5.png"},
        {img:"/logos/Tool6.png"},
        {img:"/logos/Tool7.png"},
        {img:"/logos/Tool8.png"},
        {img:"/logos/Tool9.png"},
    ]

  return (
    <div className="md:py-[60px] bg-background-white-200 flex flex-col md:gap-[52px] md:px-[125px] items-center justify-center w-full">
      <div className="flex flex-col gap-1 text-heading/[68.99px] font-normal text-center">
        <div className="">Expertly Crafted with </div>
        <div> the Latest Tools</div>
      </div>

      <div className="flex w-full justify-center gap-[30px]">
        {images.map((item) => (
          <img src={item.img} alt="" className="md:w-[69px] object-contain" />
        ))}
      </div>
    </div>
  );
}

export default LatestTool