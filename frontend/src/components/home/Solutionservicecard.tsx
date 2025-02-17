import Image from "next/image";
interface props 
{
    title?:string;
    content?:string;
}
const Solutionservicecard = ({
  title = "Content Writing",
  content = "Create authentic content with expert writers.",
}: props) => {
  return (
    <div className="w-full grid grid-cols-[1fr_7fr_2fr] py-3 px-2 border-t border-t-[#B0B0B0] border-t-gradient- text-white justify-center gap-2">
      <div>
        <Image
          src="/images/icons/cloud.png"
          width={16}
          height={14}
          alt="coloud"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-start text-sm">{title}</div>
        <div className="text-start text-xs text-[#B0B0B0]">{content}</div>
      </div>
      <div className="flex justify-end">
        <Image
          src="/images/icons/simplearrow.png"
          className="max-w-[13px] max-h-[15px]"
          width={13}
          height={15}
          alt="simplearrow"
        />
      </div>
    </div>
  );
};

export default Solutionservicecard;