import Image from "next/image";

interface props {
  headingone: string;
  headingtwo: string;
  color:string;
  cards: { icon: string; content: string; name:string,position:string }[];
}

const Hearfromleaders = ({ headingone, headingtwo, cards,color }: props) => {
  return (
    <div className="w-full flex justify-center">
      {" "}
      <div className="w-full py-[60px] max-w-[1170px] flex flex-col gap-[30px] ">
        <h1 className="text-heading/[69px] text-center">{headingone}</h1>
        <h1 className="text-heading/[69px] text-center"
        style={{color:color}}>{headingone}</h1>
        <div className="max-w-full flex justify-between overflow-hidden">
          {cards.map((card) => (
            <div
              className={`md:min-h-[365px] md:min-w-[374px] max-h-min max-w-min rounded-[16px] border relative p-[32px] overflow-hidden flex flex-col gap-[30px]  `}
              style={{ borderColor: card.color }}
            >
              <div className="w-full  flex justify-start items-center">
                <Image src={card.icon} width={49} height={49} alt="cardicon" />
              </div>
              <div className="text-avg/[40px] ">{card.title}</div>
              <div
                className="absolute bottom-0 left-0 right-0 h-[53px] flex justify-center items-center"
                style={{ backgroundColor: card.color }}
              >
                <span className="flex gap-1 text-footersmall text-black h-full items-center">
                  Know more
                  <span>
                    <Image
                      src="/icons/rightarrow.png"
                      width={7}
                      height={12}
                      alt="right arrow"
                    />
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hearfromleaders;
