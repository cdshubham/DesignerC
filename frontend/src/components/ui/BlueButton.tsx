import React from 'react'

function BlueButton({children,className}:any) {
  return (
    <button className={`flex gap-1  items-center rounded-cta-raduis  justify-center bg-background-blue-100 ${className}`}>
          <span >{children}</span>
          
       </button>
  )
}

export default BlueButton