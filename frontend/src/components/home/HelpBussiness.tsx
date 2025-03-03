import React from 'react'
import WhiteButton from '../ui/WhiteButton'
import Image from 'next/image';


interface props 
{
 heading?:string;
 cardscontent?:{
    heading?:string;
    content?:string;
 }[];
}
function HelpBussiness({heading,cardscontent}:props) {
    const options =[
        {title:"Logo Design",subheading:"Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience."},
        {title:"Logo Design",subheading:"Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience."},
        {title:"Logo Design",subheading:"Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience."},
        {title:"Logo Design",subheading:"Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience."},
        {title:"Logo Design",subheading:"Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience."},{title:"Logo Design",subheading:"Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience."},{title:"Logo Design",subheading:"Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience."},{title:"Logo Design",subheading:"Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience."},{title:"Logo Design",subheading:"Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience."},
        {title:"Logo Design",subheading:"Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience."},
        {title:"Logo Design",subheading:"Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience."},
        {title:"Logo Design",subheading:"Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience."},
    ]


    
  return (
    <div className="flex flex-col mx-auto md:py-[60px] gap-5   bg-background-white-100 w-full md:px-[125px] items-center justify-center px-[30px]">
      <div className=" w-full flex flex-col gap-[30px]">
        <span className="text-heading/[68.99px] font-normal ">
          Let’s see how we can help your business
        </span>
        <div className="flex w-full max-w-full overflow-x-hidden  gap-[20px]">
          {options.map((item) => (
            <div className="flex flex-col rounded-cardradius gap-[20px] h-[418px] min-w-[329px]  border border-gray-200 overflow-y-hidden">
              <Image
                height={292}
                width={330}
                src="/images/redditrecap.png"
                alt="reddit recap"
                className="rounded-t-cardradius"
              />
              <div className="px-[20px] pb-[20px] w-full flex flex-grow flex-col justify-between">
                <h1 className="text-start text-body font-semibold">
                  Logo Design
                </h1>
                <p className="text-justify text-[#67737E] text-footer">
                  Craft unique and memorable logos that embody your brand’s
                  identity, leaving a lasting impression on your audience.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default HelpBussiness