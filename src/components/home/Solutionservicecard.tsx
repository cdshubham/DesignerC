"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SolutionServiceCardProps {
  title: string;
  content: string;
  link: string;
}

const SolutionServiceCard = ({
  title,
  content,
  link,
}: SolutionServiceCardProps) => {
  const router = useRouter();
  return (
    <div
      className="w-full grid grid-cols-[auto_1fr_auto] items-center py-3 px-4 border-t border-t-[#B0B0B0] text-white hover:cursor-pointer gap-4 justify-start"
      onClick={() => router.push(link)}
    >
      <div className="flex items-center justify-start h-8 shrink-0">
        <Image
          src="/images/icons/cloud.png"
          width={24}
          height={24}
          alt="cloud icon"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col min-w-0 ">
        <div className="text-start text-sm ">{title}</div>
        <div className="text-start text-xs text-[#B0B0B0] ">{content}</div>
      </div>
      <div className="flex items-center justify-end w-8">
        <Image
          src="/images/icons/simplearrow.png"
          width={13}
          height={15}
          alt="simplearrow"
          className="max-w-[13px] max-h-[15px] object-contain"
        />
      </div>
    </div>
  );
};

export default SolutionServiceCard;
