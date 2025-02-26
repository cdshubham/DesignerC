import Globalcmosmallcard, { cmoprops } from "@/components/home/Globalcmosmallcard";
import Image from "next/image";
import WhiteButton from "@/components/ui/WhiteButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Carouselprofilecard from "@/components/home/Carouselprofilecard";

const page = () => {




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
              <button className="py-[12px] px-[55px] w-[270px] h-[48px] bg-yellow-100 text-[#1700E6] rounded-full">
                Download Ebook
              </button>
              <button className="py-[12px] px-[55px] w-[270px] h-[48px] bg-white text-[#1700E6] rounded-full">
                Get Insights
              </button>
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
        <div className="w-full flex flex-col gap-[30px] ">
          <h1 className="text-center text-heading">
            Meet The Global Content Stars
          </h1>
          <Carousel>
            <CarouselContent >
              <CarouselItem className="flex justify-center max-w-full">
                <Carouselprofilecard/>
              </CarouselItem>
              <CarouselItem className="flex justify-center max-w-full">
                <Carouselprofilecard/>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default page;