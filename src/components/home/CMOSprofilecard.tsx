import Readmore from "../ui/Readmore";
import Image from "next/image";
import Link from "next/link";


  interface profile {
    image:string;
    name:string;
    position:string;
    about:string;
    bg:string;
    mediahandle:{link:string,icon:string}[];
   
  }
const CMOSprofilecard = ({...profile}:profile) => {
  return (
    <div
      className="h-[574px] w-[369px] flex flex-col rounded-[8px]"
      style={{ backgroundColor: profile.bg }}
    >
      <Image src={profile.image} height={288} width={369} alt="profile photo" />
      <div className="flex flex-grow flex-col justify-between p-[30px] ">
        <div className="flex  flex-col justify-start gap-[10px]">
          <h2 className="text-background-blue-300 text-body font-semibold">
            {profile.name}
          </h2>
          <h4 className="text-footer text-[#2E3338]">{profile.position}</h4>
          <h6 className="textt-footer text-[#2E3338]">{profile.about}</h6>
        </div>
        <div className="flex w-full justify-between">
          <Readmore name="Read More" link="/home/CMOS" />
          <div className="flex gap-4">
            {profile.mediahandle.map((media) => (
              <Link href={media.link}>
                <Image
                  src={media.icon}
                  width={20}
                  height={20}
                  alt={media.link}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CMOSprofilecard;