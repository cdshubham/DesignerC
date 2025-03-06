import Marquee from "react-fast-marquee";
interface props {
  heading: string;
  images1: { img: string }[];
  images2: { img: string }[];
}

const Withmarquee = ({ heading, images1, images2 }: props) => {
  return (
    <div className="w-full bg-background-blue-300 flex flex-col gap-[30px] py-[60px]">
      <span className="text-center text-white text-avg">{heading}</span>
      <div className="flex flex-col w-full gap-[10px]">
        <div className="flex   items-center gap-4  ">
          <Marquee speed={50}>
            {images1.map((item) => (
              <div className="w-[138px]  flex items-center md:py-[12.64px]">
                <img
                  src={item.img}
                  alt=""
                  className="md:w-[128px] object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="flex   items-center gap-4  ">
          <Marquee speed={50}>
            {images2.map((item) => (
              <div className="w-[138px]  flex items-center md:py-[12.64px]">
                <img
                  src={item.img}
                  alt=""
                  className="md:w-[128px] object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Withmarquee;
