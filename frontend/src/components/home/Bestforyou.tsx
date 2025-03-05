
const Card = ({content,main}:any)=>{
    return (
      <div className="grid grid-cols-[5fr_4fr] gap-[20px] items-center">
        <div className="w-full h-full flex justify-center items-center">
          <span className="text-body">{content}</span>
        </div>
        <div className="w-full h-full flex items-center justify-end text-end text-heading/[69px]">
          {main}
        </div>
      </div>
    );
}




const Bestforyou = () => {
  return (
    <div className="w-full md:px-[125px] items-center justify-center md:py-[60px] text-body/[20.7px] gap-[30px] flex flex-col bg-[#7B23FD] text-white">
      <h1 className="text-heading/[69px] text-center">
        Designera is best for your business
      </h1>
      <div className="w-full grid grid-cols-2 gap-[30px]">
        <Card
          content="Social media creative projects completed to date"
          main="20K+"
        />{" "}
        <Card
          content="Social media creative projects completed to date"
          main="20K+"
        />{" "}
        <Card
          content="Social media creative projects completed to date"
          main="20K+"
        />{" "}
        <Card
          content="Social media creative projects completed to date"
          main="20K+"
        />
      </div>
    </div>
  );
}

export default Bestforyou;