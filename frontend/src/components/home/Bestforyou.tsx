const Card = ({ content, main }: any) => {
  return (
    <div className="md:w-[538px] border-b border-[#F7F9F226] md:border-0 py-[30px] grid grid-cols-[2fr_1fr]  items-center">
      <div className="w-full h-full flex justify-center items-center">
        <span className="text-body">{content}</span>
      </div>
      <div className="flex items-center justify-end text-end text-[48px]/[55.2px] md:text-[80px]/[91px]">
        {main}
      </div>
    </div>
  );
};

const Bestforyou = () => {
  return (
    <div className="w-full md:px-[125px] px-[40px] items-center justify-center md:py-[60px] py-[40px] text-body/[20.7px] gap-[30px] flex flex-col bg-[#7B23FD] text-white">
      <h1 className="text-heading/[69px] text-center">
        Designera is best for your business
      </h1>
      <div className="w-full flex md:flex-row flex-col flex-wrap justify-between md:gap-y-[30px]">
        <Card
          content="Social media creative projects completed to date"
          main="20K+"
        />{" "}
        <Card
          content="Social media creative projects completed to date"
          main="1900+"
        />{" "}
        <Card
          content="Social media creative projects completed to date"
          main="30K+"
        />{" "}
        <Card
          content="Social media creative projects completed to date"
          main="4.8/5+"
        />
      </div>
    </div>
  );
};

export default Bestforyou;
