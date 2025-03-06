import Image from "next/image";
import Link from "next/link";


interface props 
{
    icon:string;
    color:string;
    heading:string;
    subheading:string;
    link:string;
}

const Top1smallcard = ({icon,color,heading,subheading,link}:props) => {

   
  return (
    <div className="w-[293px] h-[283px] rounded-[16px] flex flex-col items-start p-[20px] justify-around" style={{backgroundColor:color}}>
      <div className="w-full flex ">
        <Image
          src={icon}
          width={72}
          height={54}
          alt="apollo icon"
        />
      </div>
      <div className="flex flex-col items-start gap-[2px]">
        <h1 className="text-largeheading/[69px] font-bold">{heading}</h1>
        <h3 className="text-body">{subheading}</h3>
      </div>
      <Link href={link}>
        <div className="flex w-full justify-start gap-4 items-center text-background-blue-300 hover:cursor-pointer font-semibold">
          <span>Read Case Study</span>{" "}
          <div className="w-[32px] h-[32px] rounded-full bg-background-blue-300 flex items-center justify-center">
            <Image
              src="/icons/downarrow.png"
              width={16}
              height={16}
              alt="downarrow"
              className="rotate-90"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Top1smallcard;