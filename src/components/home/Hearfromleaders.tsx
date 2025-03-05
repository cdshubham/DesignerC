import Image from "next/image";

interface props {
  headingone: string;
  headingtwo: string;
  subheading: string;
  color:string;
  image:string;
 
}

const Hearfromleaders = ({ headingone,headingtwo,subheading,color,image }: props) => {
  return (
    <div className="w-full flex justify-center">
      {" "}
      <div className="w-full py-[60px] max-w-[1170px] flex flex-col gap-[30px] items-center ">
        <div className="flex flex-col items-center">
          <h1 className="text-heading/[69px] text-center">{headingone}</h1>
          <h1
            className="text-heading/[69px] text-center"
            style={{ color: color }}
          >
            {headingtwo}
          </h1>
          <div className="text-body text-[#999999] flex justify-center text-center w-[60%] py-4">
            {subheading}
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <Image width={1200} height={500} src={image} alt="reviews" />
        </div>
      </div>
    </div>
  );
};

export default Hearfromleaders;
