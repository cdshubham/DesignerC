import Image from "next/image";
import Link from "next/link";
export interface cmoprops  
{
  link:string;
  heading:string;
  image:string;
}



const Globalcmosmallcard = ({link,heading,image}:cmoprops) => {
    return <div className="relative w-[369px] h-[383px] flex flex-col rounded-[12px] p-[30px] bg-gradient-marketingcard">
      <Link href={link}>
        {" "}
        <div className="w-full grid grid-cols-2">
          <div className="text-avg/[40px]">{heading}</div>
          <div className="h-full w-full flex items-start justify-end ">
            <div className="w-[56px] h-[56px] rounded-full flex justify-center items-center bg-white bg-opacity-30 ">
              <Image
                src="/icons/downarrow.png"
                width={24}
                height={24}
                alt="down arrow"
                className="rotate-90"
              />
            </div>
          </div>
        </div>
      </Link>

      <Image
        width={369}
        height={209}
        src={image}
        alt="maverick1"
        className="absolute bottom-0 left-0 right-0"
      />
    </div>;
}

export default Globalcmosmallcard;