import Readmore from "../ui/Readmore";
import WhiteButton from "../ui/WhiteButton";
import Image from "next/image";
const Carouselprofilecard = () => {
  return (
    <div className="w-[1002px] h-[349px] flex justify-center items-center ">
      <Image
        className="min-h-full object-cover"
        src="/images/emily.png"
        width={432}
        height={350}
        alt="Person image"
      />
      <div className="h-full w-full flex flex-grow flex-col gap-[25px] p-[30px] bg-[#FF80B7]   text-black rounded-tr-[6px] rounded-br-[6px]">
        <h1 className="text-avg font-bold text-start">Emily Dumas</h1>
        <p className="font-semibold">
          Senior Content Strategist at The Knot Worldwide (Former - Senior
          Content Marketing Manager, Evernote)
        </p>
        <p className="font-semibold">
          Emily Dumas is the Senior Content Marketing Manager at Evernote where
          she was in charge of full tunnel content marketing across all
          platforms including SEO, blog, website, social media, and influencer
          campaigns. 
        </p>
        <div className="flex justify-between">
          <Readmore name="Read More" link="/home/CMOS" />

          <div className="flex gap-3 pr-4">
            <Image
              src="/icons/twitterx.png"
              width={20}
              height={20}
              alt="twitter x"
            />{" "}
            <Image
              src="/icons/linkedin.png"
              width={20}
              height={20}
              alt="twitter x"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carouselprofilecard;