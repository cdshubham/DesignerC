import Globalcmosmallcard, { cmoprops } from "@/components/home/Globalcmosmallcard";
import Image from "next/image";
import Link from "next/link";
import WhiteButton from "@/components/ui/WhiteButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Carouselprofilecard from "@/components/home/Carouselprofilecard";
import Readmore from "@/components/ui/Readmore";
import CMOSprofilecard from "@/components/home/CMOSprofilecard";
import Roundbutton from "@/components/home/Roundbutton";

const page = () => {

const profilesinfo = [
  {
    image: "/images/cmosprofile/profile1.png",
    name: "Becky May",
    position: "Senior Content Strategist, InSided",
    about:
      "Becky May is the Senior Content Strategist at InSided - a SaaS company that provides businesses a platform to create engagement among different customers from different genres.",
  
    bg: "#FF80B7",
    mediahandle: [
      { link: "/linkedin.com", icon: "/icons/linkedin.png" },
      { link: "/twitter.com", icon: "/icons/twitterx.png" },
    ],
  },
  {
    image: "/images/cmosprofile/profile2.png",
    name: "Dina Calakovic",
    position: "Co-Founder, Authority Marketing",
    about:
      "A good place of content is where a person can apply your advice immediately after reading your content.",
   
    bg: "#FFD766",
    mediahandle: [
      { link: "/linkedin.com", icon: "/icons/linkedin.png" },
      { link: "/twitter.com", icon: "/icons/twitterx.png" },
    ],
  },
  {
    image: "/images/cmosprofile/profile3.png",
    name: "Anne McSilver",
    position: "Senior Content Marketing Manager and Editor, LinkedIn",
    about:
      "Anne McSilver, Senior Content Marketing Manager at LinkedIn, describes the importance of content marketing and how to lead with Avinash Singla, CEO and Founder of Rega.",
   
    bg: "#20DF78",
    mediahandle: [
      { link: "/linkedin.com", icon: "/icons/linkedin.png" },
      { link: "/twitter.com", icon: "/icons/twitterx.png" },
    ],
  },
  {
    image: "/images/cmosprofile/profile4.png",
    name: "Brett McGrath",
    position: "VP of Marketing, The Juice",
    about:
      "In conversation with Arjun Singh, Founder and CEO of The Juice, Brett McGrath, VP of Marketing at The Juice talks about how you can share your story.",
   
    bg: "#20DF78",
    mediahandle: [
      { link: "/linkedin.com", icon: "/icons/linkedin.png" },
      { link: "/twitter.com", icon: "/icons/twitterx.png" },
    ],
  },
  {
    image: "/images/cmosprofile/profile5.png",
    name: "Emily Dumas",
    position:
      "Senior Content Strategist at The Knot Worldwide (Former) - Senior Content",
    about:
      "Emily Dumas is the Senior Content Marketing Manager at The Knot, where she drives content across its platforms, including app, website, social media, etc.",

    bg: "#FF80B7",
    mediahandle: [
      { link: "/linkedin.com", icon: "/icons/linkedin.png" },
      { link: "/twitter.com", icon: "/icons/twitterx.png" },
    ],
  },
  {
    image: "/images/cmosprofile/profile6.png",
    name: "Diane di Costanzo",
    position: "Chief Content Officer at Dotdash Meredith",
    about:
      "As a content marketer, you should put your audience first and create content that resonates with them.",
    bg: "#20DF78",
    mediahandle: [
      { link: "/linkedin.com", icon: "/icons/linkedin.png" },
      { link: "/twitter.com", icon: "/icons/twitterx.png" },
    ],
  },
];

    const smallcarddata:any = [
      {
        link: "/home/CMOS",
        heading: "Global Designing Leaders",
        image: "/images/maverick1.png",
      },
      {
        link: "/home/CMOS",
        heading: "Indian Desining Leaders",
        image: "/images/maverick2.png",
      },
      ,
      {
        link: "/home/CMOS",
        heading: "All Designing Leaders",
        image: "/images/maverick3.png",
      },
    ];


    const icons = [
      "/icons/adobe.png",
      "/icons/unilever.png",
      "/icons/google.png",
      "/icons/deloitte.png",
      "/icons/groww.png",
      "/icons/tata.png",
      "/icons/itc.png",
      "/icons/tcs.png",
      "/icons/kotak.png",
      "/icons/pg.png",
    ];
  return (
    <div className="w-full flex justify-center items-center bg-gradient-cmos py-[60px]">
      <div className="w-[1170px] flex flex-col gap-[60px]">
        <div className="grid grid-cols-[3fr_2fr] gap-[30px]">
          <div className="flex flex-col gap-[30px]">
            <div className="w-full flex justify-start items-center">
              <Image
                src="/images/globalmarket.png"
                width={448}
                height={261}
                alt="cmosmarket"
              />
            </div>
            <p className="text-body w-[68%] text-start">
              After our conversations with global marketing leaders, we have
              curated the ultimate list of marketing luminaries who have
              transformed the face of content marketing as we know it.
            </p>
            <p className="text-body w-[68%] text-start">
              Are you ready to learn about the state and future of content
              marketing?
            </p>
            <div className="flex w-full justify-start gap-4">
             
               <Roundbutton text="Download Ebook" className="bg-yellow-100"/>
              <Roundbutton text="Get Insights" className="bg-white"/>
            </div>
          </div>
          <div className="w-full h-full justify-center items-center">
            <Image
              src="/images/cmoshome.png"
              width={512}
              height={604}
              alt="global market"
            />
          </div>
        </div>
        {/**next acrd with icons */}
        <div className="w-full flex flex-col gap-[30px]">
          <p className="text-center text-subheading font-semibold">
            Gain insights from industry titans representing globally acclaimed
            brands
          </p>
          <div className="w-full items-center justify-center flex flex-wrap gap-8">
            {icons.map((icon) => (
              <Image src={icon} width={128} height={56} alt={icon} />
            ))}
          </div>
        </div>
        {/**card with icons end */}
        {/** marketing mavericks */}
        <div className="w-full flex flex-col ">
          <div className="flex flex-col items-center text-heading/[60px] gap-4">
            <h1>Meet the marketing mavericks</h1>
            <Image
              src="/icons/noodle.png"
              width={166}
              height={16}
              alt="noodle"
            />
          </div>
        </div>
        <div className="flex justify-around ">
          {smallcarddata.map((card: cmoprops) => (
            <Globalcmosmallcard {...card} />
          ))}
        </div>
        {/**Marketting mavericcks card till here */}
        <div className="w-full flex flex-col gap-[60px]  ">
          <h1 className="text-center text-heading">
            Meet The Global Content Stars
          </h1>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="flex justify-center max-w-full">
                <Carouselprofilecard />
              </CarouselItem>
              <CarouselItem className="flex justify-center max-w-full">
                <Carouselprofilecard />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="w-full flex flex-wrap justify-between gap-y-8 py-[30px]">
            {profilesinfo.map((profile,index) => (
              <CMOSprofilecard key={index} {...profile} />
            ))}
          </div>
          <div className="w-full flex justify-center items-center">
            {/**VEIW MORE BUTTON */}
            <div className="w-[155px] h-[55px] bg-white rounded-[8px] text-background-blue-300 flex justify-around items-center py-[17px] px-[25px] text-body gap-1"><span>View More</span><div className="h-full flex justify-center items-center"><Image src="/icons/rightarrow.png" width={8} height={8} alt="righarrow.png" /></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;