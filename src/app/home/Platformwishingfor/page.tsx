import Roundbutton from "@/components/home/Roundbutton";
import Wishingplatformprofilecard from "@/components/home/Wishingplatformprofilecard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white ">
      <div className="w-[1170px] flex flex-col gap-[30px] items-center py-[60px]">
        <h1 className="text-heading/[60px] text-center text-[#1300C2] w-[870px]">
          The Content Marketing Platform Everyone Is Wishing For
        </h1>
        <Carousel className="max-w-full">
          <CarouselContent className="max-w-full">
            <CarouselItem className="flex justify-center max-w-full basis-1/2  ">
              <Wishingplatformprofilecard />
            </CarouselItem>
            <CarouselItem className="flex justify-center max-w-full basis-1/2  ">
              <Wishingplatformprofilecard />
            </CarouselItem>
            <CarouselItem className="flex justify-center max-w-full basis-1/2  ">
              <Wishingplatformprofilecard />
            </CarouselItem>
            <CarouselItem className="flex justify-center max-w-full basis-1/2  ">
              <Wishingplatformprofilecard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="w-full bg-background-blue-300 flex justify-center items-center py-[60px]">
        <div className="max-w-[1170px] grid grid-cols-2  gap-[30px] items-center">
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src="/images/contentwriters.png"
              width={470}
              height={419}
              alt="content writers"
            />
          </div>
          <div className="h-full w-full flex justify-start items-start pt-[40px] ">
            <div className="flex flex-col w-[50%] gap-[20px]">
              <span className="text-avg font-semibold">
                Get started with Pepper’s&nbsp;
                <span style={{ color: "#FFBF00" }}>
                  Content Marketing Platform.
                </span>
              </span>
              <p className="text-[20px]/[23px]">
                Designed for{" "}
                <span className="font-semibold">Winning Teams</span>
              </p>
              <Roundbutton
                text="Book A Demo"
                className="w-[370px] bg-yellow-100 text-black font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
