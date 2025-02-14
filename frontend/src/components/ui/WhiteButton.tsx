import React from 'react'

function WhiteButton({children,className,img,Component}:any) {
  return (
    <button className={`flex gap-1 text-cta items-center rounded-cta-raduis justify-center ${className}`}>
    <span >{children}</span>
    {img && <img src={img} alt="" className="md:w-[12px] object-contain" />}
    {Component && <Component />}
 </button>
  )
}

export default WhiteButton