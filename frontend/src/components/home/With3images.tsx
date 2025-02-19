import Image from "next/image";

interface props 
{
    heading?:string;
    subheading?:string;
    content?:{src:string;
        imagetitle:string;
        subtitle?:string;
    }[]
}

const With3images = ({
  heading = "Process of Lead Generation at Designera",
  subheading = "At Designera, we craft lead generation funnels that seamlessly guide your audience through every stage of the customer journey. Whether you're targeting new prospects or nurturing existing leads, our expertly designed funnels ensure your message resonates&apos;conversions increase, and business growth scales effectively.",
  content=[{src:"/images/campaign.png",imagetitle:"Lead Generation",subtitle:"We create lead generation strategies that are tailored to your business goals and target audience, ensuring your brand reaches the right people at the right time."},{src:"/images/rebranding.png",imagetitle:"Lead Nurturing",subtitle:"Our lead nurturing strategies are designed to build trust and credibility with your audience, guiding them through the sales funnel and increasing the likelihood of conversion."},{src:"/images/advertising.png",imagetitle:"Conversion Optimization",subtitle:"We optimize your conversion process to maximize the number of leads that turn into customers, ensuring your business achieves its growth objectives."}],
}: props) => {
  return (
    <div className="md:py-[120px] w-full flex flex-col  text-text-grey md:px-[125px] gap-[60px] jus">
      <div className="w-full flex justify-center ">
        <span className="w-[80%] text-center text-heading/[60px]">
          {heading}
        </span>
      </div>
      <div className="w-full text-[20px]/[24px] text-center text-grey-300">
        {subheading}
      </div>
      <div className="flex gap-[30px] justify-around min-h-[438px] max-h-min px-[24px]">
        {content?.map((item, index) => (
          <div className="h-full flex flex-col justify-between min-w-[367px] gap-[15px]">
            <Image
              width={320}
              height={281}
              src={item.src}
              alt={item.src}
              className=" rounded-[6px]"
            />
            <div className="text-subheading font-semibold  ">
              {item.imagetitle}
            </div>
            <div className="text-body">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default With3images;