
const Card = ({content,main}:any)=>{
    return (
      <div className="flex items-center gap-3 w-full">
        <div className="flex justify-center items-center">
          <span className="text-body">{content}</span>
        </div>
        <div className="flex items-center justify-end text-end text-[48px]/[55.2px] md:text-heading/[69px]">
          {main}
        </div>
      </div>
    );
}




const Bestforyou = () => {
  return (
    <div className="w-full p-8 md:px-[125px] items-center justify-center md:py-[60px] text-body/[20.7px] gap-[30px] flex flex-col bg-[#7B23FD] text-white">
      <h1 className="text-[48px]/[55.2px] md:text-heading/[69px] md:text-center">
        Designera is best for your business
      </h1>
      <div className="w-full flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-[30px]">
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