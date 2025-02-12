import React from 'react'

function WhiteButton({children,className,img}:any) {
  return (
    <button className={`flex gap-1 text-cta items-center rounded-cta-raduis justify-center ${className}`}>
    <span >{children}</span>
    <img src={img} alt="" className="md:w-[12px] object-contain " />
 </button>
  )
}

export default WhiteButton