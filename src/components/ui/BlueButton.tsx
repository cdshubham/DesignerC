import React from 'react'

function BlueButton({children,className}:any) {
  return (
    <button
      className={` text-cta font-bold md:w-[153px] md:h-[37px] hover:bg-yellow-100 hover:text-black flex gap-1  items-center rounded-cta-raduis  justify-center bg-background-blue-100 text-white   ${className}`}
    >
      <span>{children}</span>
    </button>
  );
}

export default BlueButton