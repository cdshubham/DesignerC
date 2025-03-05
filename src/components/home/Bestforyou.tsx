import React from 'react';

const Card = ({content, main}: {content: string, main: string}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[5fr_4fr] gap-2 md:gap-5 items-center bg-white/10 p-4 rounded-lg">
            <div className="w-full flex justify-center md:justify-start items-center text-center md:text-left">
                <span className="text-sm md:text-base">{content}</span>
            </div>
            <div className="w-full flex items-center justify-center md:justify-end text-center md:text-right">
                <span className="text-2xl md:text-5xl font-bold">{main}</span>
            </div>
        </div>
    );
}

const Bestforyou = () => {
    const cardData = [
        { content: "Social media creative projects completed to date", main: "20K+" },
        { content: "Total number of satisfied clients", main: "15K+" },
        { content: "Average customer satisfaction rating", main: "4.9/5" },
        { content: "Years of design experience", main: "10+" }
    ];

    return (
        <div className="w-full px-8 sm:px-8 md:px-[125px] py-10 md:py-[60px] bg-[#7B23FD] text-white">
            <div className="container mx-auto">
                <h1 className="text-2xl md:text-5xl font-bold text-center mb-8 md:mb-12">
                    Designera is best for your business
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[30px]">
                    {cardData.map((card, index) => (
                        <Card 
                            key={index}
                            content={card.content} 
                            main={card.main} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Bestforyou;