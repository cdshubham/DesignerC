import Image from "next/image";

interface props {
    title:string;
    content:string;
    className:string;
    color1:string;
    color2:string;
    border?:string;
    selectedCard?:string;
    
    setSelectedCard?:(val:string)=>void;
    
    
}
const Solutioncard = ({title,content,className,color1,color2,border,selectedCard,setSelectedCard}:props) => {
  return (
    <div
      className={`min-h-[334px] min-w-[232px] max-w-min max-h-min flex flex-col py-[30px] px-[20px] text-white relative gap-[20px] rounded-[4px] ${className} hover:cursor-pointer`}
      style={{
        boxShadow: selectedCard === title ? `0 0 0 2px ${border}` : "",
      }}
      onClick={() => {setSelectedCard && setSelectedCard(title)}}
    >
      <div className="flex  justify-between items-center">
        <span className="text-xl">{title}</span>
        <Image
          src="/images/icons/arrow.png"
          width={42}
          height={42}
          alt="arrow"
        />
      </div>
      <div>{content}</div>
      <div
        className="min-w-[212px] min-h-[51px] absolute bottom-[100px] right-0 rounded-tl-[6px] rounded-bl-[6px]"
        style={{ backgroundColor: color1 }}
      ></div>
      <div
        className="min-w-[212px] min-h-[51px] absolute bottom-[30px] right-0 rounded-tl-[6px] rounded-bl-[6px]"
        style={{ backgroundColor: color2 }}
      ></div>
      <div></div>
    </div>
  );
}

export default Solutioncard;