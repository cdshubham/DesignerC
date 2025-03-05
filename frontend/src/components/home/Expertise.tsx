import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";



const Expertisecard = ({image,title,subheading}:{ image:string,
    title:string,
    subheading:string,})=>
{
    return (
      <div className="w-full flex flex-col justify-start gap-[20px]">
        <div className="w-full flex justify-start">
          <Image
            width={80}
            height={80}
            src={image}
            alt="facebook"
            className="md:w-[80px] md:h-[80px] w-[64px] h-[64px]"
          />
        </div>
        <h3 className="text-subheading">{title}</h3>
        <p className="text-body text-justify">
          {subheading}
        </p>
      </div>
    );
}


const Expertise = () => {

    const data = [
      {
        image: "/images/expertise/fb.png",
        title: "Facebook",
        subheading:
          "Connect with your audience and drive engagement with our Facebook marketing services.",
      },
      {
        image: "/images/expertise/linkedin.png",
        title: "Linkedin",
        subheading:
          "Position your brand as an industry leader with professional and engaging content designed for LinkedIn’s business-focused community.",
      },
      {
        image: "/images/expertise/instagram.png",
        title: "Instagram",
        subheading:
          "Captivate Instagram’s visually-driven audience with stunning graphics and innovative content formats.",
      },
      {
        image: "/images/expertise/tiktok.png",
        title: "TikTok",
        subheading:
          "Tap into the power of viral content with TikTok creatives designed for maximum shareability and engagement.",
      },
      {
        image: "/images/expertise/youtube.png",
        title: "YouTube",
        subheading:
          "Optimize viewer interaction with tailored creatives |designed for YouTube's diverse audience and video-friendly platform features.",
      },
      {
        image: "/images/expertise/other.png",
        title: "Other Platforms",
        subheading:
          "Have another platform in mind? We’re here for team. With a global team of presentation designers to tap into, we have skills across the board and can cater to any preference.",
      },
    ];
    return (
      <section className="expertise md:py-[60px] py-[30px] md:px-[125px] px-[30px] flex flex-col gap-[30px] justify-center items-center w-full  bg-[#F9F5EC]">
        <h1 className="text-center text-[28px]/[32px] md:text-heading py-[30px] ">
          Expertise Across all Social Media Platforms
        </h1>
        <p className=" md:w-[70%] text-[16px]/[18.4px] md:text-body text-center">
          Rely on our in-depth expertise, as well as the ability to version and
          scale any kind of social media content, static, motion or video across
          your key socialmedia channels.
        </p>
        <div className="w-full grid md:grid-cols-3 md:gap-[40px] gap-[30px] py-[30px] md:gap-y-[40px]">
          {data.map((item) => (
            <Expertisecard {...item} />
          ))}
        </div>
      </section>
    );
}

export default Expertise;