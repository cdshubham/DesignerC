import React from 'react'
import WhiteButton from '../ui/WhiteButton'



interface props 
{
 heading:string;
 cardscontent:{
    heading:string;
    content:string;
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
    <div className="flex flex-col mx-auto md:py-[60px] gap-5 md:px-[125px]  bg-background-white-100 ">
        <div className=' w-full flex flex-col gap-[30px]'>
            <span className='text-heading/[68.99px] font-normal md:py-[10px]'>Let’s see how we can help your business</span>
            <div className='grid grid-cols-3 gap-[30px]'>
                {options.map((item)=>(
                    <div className='flex flex-col gap-[10px] border border-gray-200 md:px-[15px] md:py-[20px] rounded-cards-raduis '>
                        <div className='flex gap-2 items-center'>
                            <img src="/icons/book.png" alt="" className='md:w-[29px] object-contain' />
                            <span className='text-[20px]/[23px] font-bold'>{item.title}</span>
                        </div>
                        <div className=' md:w-[310px]  mx-auto text-justify'>
                            <span className='text-body/[20px] text-justify text-gray-100 '>{item.subheading}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='w-full flex justify-center md:py-[20px]'>
        <WhiteButton children="Show less" className="text-black md:w-[163px] md:h-[37px] border border-black" img="/icons/arrow-upside.png"/>
        </div>
      
    </div>
  )
}

export default HelpBussiness