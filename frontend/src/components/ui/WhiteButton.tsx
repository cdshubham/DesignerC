import React from 'react'

function WhiteButton({children,className,img,Component}:any) {
  return (
    <button
      className={`text-background-blue-100 font-normal  md:w-[140px] flex gap-1 text-cta items-center rounded-cta-raduis justify-center ${className}`}
    >
      <span className="font-semibold">{children}</span>
      {img && <img src={img} alt="" className="md:w-[12px] object-contain" />}
      {Component && <Component />}
    </button>
  );
}

export default WhiteButton