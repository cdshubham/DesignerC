import Image from "next/image";

const Expertisecard = ({
  image,
  title,
  subheading,
}: {
  image: string;
  title: string;
  subheading: string;
}) => {
  return (
    <div className="w-full flex flex-col justify-start gap-4 sm:gap-5 md:gap-[20px]">
      <div className="w-full flex justify-start">
        <Image
          width={80}
          height={80}
          src={image}
          alt={title}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px]"
        />
      </div>
      <h3 className="text-2xl sm:text-xl md:text-subheading font-semibold">
        {title}
      </h3>
      <p className="text-lg sm:text-base md:text-body text-start leading-5">
        {subheading}
      </p>
    </div>
  );
};

const Expertise = () => {
  const data = [
    {
      image: "/images/expertise/fb.png",
      title: "Facebook",
      subheading:
        "Maximize engagement with custom creative tailored for Facebook’s unique audience and platform capabilities.",
    },
    {
      image: "/images/expertise/linkedin.png",
      title: "Linkedin",
      subheading:
        "Position your brand as an industry leader with professional and engaging content designed for LinkedIn's business-focused community.",
    },
    {
      image: "/images/expertise/instagram.png",
      title: "Instagram",
      subheading:
        "Captivate Instagram's visually-driven audience with stunning graphics and innovative content formats.",
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
        "Optimize viewer interaction with tailored creatives designed for YouTube's diverse audience and video-friendly platform features.",
    },
    {
      image: "/images/expertise/other.png",
      title: "Other Platforms",
      subheading:
        "Have another platform in mind? We're here for team. With a global team of presentation designers to tap into, we have skills across the board and can cater to any preference.",
    },
  ];

  return (
    <section className="expertise py-8 sm:py-10 md:py-[60px] px-8 sm:px-12 md:px-[125px] flex flex-col gap-6 sm:gap-8 md:gap-[30px] justify-center items-center w-full bg-[#F9F5EC]">
      <h1 className="text-start text-3xl sm:text-3xl md:text-heading  lg:leading-[1]">
        Expertise Across all Social Media Platforms
      </h1>
      <p className="w-full sm:w-[85%] md:w-[76%] text-md sm:text-base md:text-xl text-center">
        Rely on our in-depth expertise, as well as the ability to version and
        scale any kind of social media content, static, motion or video across
        your key social media channels.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-[40px] py-4 sm:py-6 md:py-[30px]">
        {data.map((item, index) => (
          <Expertisecard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
