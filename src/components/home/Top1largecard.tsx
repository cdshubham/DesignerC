import Image from "next/image";


interface props {
    color:string;
    heading:string;
    content:string;
    image:string;
}



const Top1largecard = ({color,heading,content,image}:props) => {
  return (
    <div className="grid grid-cols-2 w-[544px] h-[283px] rounded-[12px] p-[20px] "
    style={{backgroundColor:color}}>
      <div className="w-full flex flex-col justify-around items-center">
        <h1 className="text-avg font-semibold">{heading}</h1>
        <p className="text-body">
          {content}
        </p>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <Image
          src={image}
          width={261}
          height={197}
          alt="graph image"
        />
      </div>
    </div>
  );
}

export default Top1largecard;