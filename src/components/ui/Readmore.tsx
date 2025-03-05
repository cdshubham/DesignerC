import Link from "next/link";
import Image from "next/image";
const Readmore = ({name="Read More",link="/"}:{name?:string,link:string}) => {
  return (
    <Link href={link}>
      <div className="flex justify-start gap-2 items-center">
        <span className="text-[#1700E6]">{name}</span>
        <div className="h-full flex justify-center items-center">
          <Image
            src="/icons/rightarrow.png"
            width={8}
            height={8}
            alt="downarrow"
          />
        </div>
      </div>
    </Link>
  );
}

export default Readmore;