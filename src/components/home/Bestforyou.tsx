import React from "react";

const Card = ({ content, main }: { content: string; main: string }) => {
  return (
    <div>
      <div className="flex gap-2">
        <div className="flex-grow flex items-center md:text-left lg:pr-6">
          <span className="text-sm md:text-base">{content}</span>
        </div>
        <div className="flex items-center justify-center md:justify-end text-right min-w-[100px]">
          <span className="text-4xl md:text-8xl font-bold">{main}</span>
        </div>
      </div>
      <div className="bg-gray-400 h-[0.5px] mt-4"></div>
    </div>
  );
};

const Bestforyou = () => {
  const cardData = [
    {
      content: "Social media creative projects completed to date",
      main: "20K+",
    },
    {
      content: "Social media creative projects completed to date",
      main: "190K+",
    },
    {
      content: "Social media creative projects completed to date",
      main: "30k+",
    },
    {
      content: "Social media creative projects completed to date",
      main: "4.8/5",
    },
  ];

  return (
    <div className="w-full px-8 sm:px-8 md:px-[125px] py-10 md:py-[60px] bg-[#7B23FD] text-white">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-5xl mb-8 md:mb-12">
          Designera is best for your business
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[30px]">
          {cardData.map((card, index) => (
            <Card key={index} content={card.content} main={card.main} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestforyou;
