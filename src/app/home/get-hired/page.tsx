import Beyondai from "@/components/home/Beyondai";
import Bookdemoform from "@/components/home/Bookdemoform";
import Findopportunities from "@/components/home/Findopportunities";
import Hearfromleaders from "@/components/home/Hearfromleaders";
import Learnearngrow from "@/components/home/Learnearngrow";
import Marketinggoals from "@/components/home/Marketinggoals";
import Threesteps from "@/components/home/Threesteps";
import Top1withcards from "@/components/home/Top1withcards";
import Whyjoinus from "@/components/home/Whyjoinus";
import Withmarquee from "@/components/home/Withmarquee";
import BlueButton from "@/components/ui/BlueButton";
import WhiteButton from "@/components/ui/WhiteButton";

const page = () => {
  const findopportunitydata = {
    headingstarticon: "/icons/purpleyellowstar.png",
    headingendicon: "/icons/purplewhitestar.png",
    highlightcolor: "highlight-findopportunity",
    image: "/images/gethiredhome.png",
    headingone: `"Kickstart Your Dream Career`,
    headingtwo: `with Industry-Leading Brands"`,
    subheading:
      "Fuel your career journey with Knowledge, Opportunities, Mentorship, and a Community that drives success and fosters lifelong connections.",
  };


      const marqueedata = {
        heading: "Boasting Our Top 2500+ Global Hiring Partners",
        images1: [
          { img: "/logos/adobe.png" },
          { img: "/logos/airmeet.png" },
          { img: "/logos/amazon.png" },
          { img: "/logos/amazonpay.png" },
          { img: "/logos/appolo.png" },
          { img: "/logos/axis.png" },
          { img: "/logos/binance.png" },
          { img: "/logos/darwing.png" },
        ],
        images2: [
          { img: "/logos/adobe.png" },
          { img: "/logos/airmeet.png" },
          { img: "/logos/amazon.png" },
          { img: "/logos/amazonpay.png" },
          { img: "/logos/appolo.png" },
          { img: "/logos/axis.png" },
          { img: "/logos/binance.png" },
          { img: "/logos/darwing.png" },
        ],
      };

      const marketingdata = {
        heading: "Achieve your Marketing goals faster by using Designera",
        image: "/images/marketinggoal.png",
        cards: [
          {
            icon: "/icons/marketinggoal1.png",
            title: "Interview as a Service Platform",
            color: "#FFD766",
          },
          {
            icon: "/icons/marketinggoal2.png",
            title: "Interview as a Service Platform",
            color: "#8FEFBC",
          },
          {
            icon: "/icons/marketinggoal3.png",
            title: "Interview as a Service Platform",
            color: "#4CE6FF",
          },
        ],
      };


      const hearleadersdata = {
        headingone: "Hear it Directly from ",
        headingtwo: "Top Marketing Leaders",
        subheading:
          "Hear what our clients have to say. Our testimonials reflect the satisfaction our clients that trust us with their Hiring.",
        color: "#FFBF00",
        image: "/images/hearfromleaders.png",
      };

      
       //for beyond ai
      const tabledataa2 = [
        {
          feature: "Your brand, your voice",
          designera: "/icons/checkmark.png",
          other_marketplaces: "/icons/crossmark.png",
        },
        {
          feature: "No hallucinations, just factual content",
          designera: "/icons/checkmark.png",
          other_marketplaces: "/icons/crossmark.png",
        },
        {
          feature:
            "Smarter AI, improved by millions of marketers across the globe",
          designera: "/icons/checkmark.png",
          other_marketplaces: "/icons/crossmark.png",
        },
        {
          feature: "Scaling at warp speed",
          designera: "/icons/checkmark.png",
          other_marketplaces: "/icons/crossmark.png",
        },
        {
          feature: "Robust editor layer, powered by humans",
          designera: "/icons/checkmark.png",
          other_marketplaces: "/icons/crossmark.png",
        },
        {
          feature: "Privacy and data protection",
          designera: "/icons/checkmark.png",
          other_marketplaces: "/icons/crossmark.png",
        },
        {
          feature: "Easy plug-and-play with the tools you love",
          designera: "/icons/checkmark.png",
          other_marketplaces: "/icons/crossmark.png",
        },
        {
          feature: "End-to-end content control and visibility",
          designera: "/icons/checkmark.png",
          other_marketplaces: "/icons/crossmark.png",
        },
        {
          feature: "Collaborative platform",
          designera: "/icons/checkmark.png",
          other_marketplaces: "/icons/crossmark.png",
        },
      ];

      

  return (
    <div className="w-full flex flex-col  font-helvetica bg-background-blue-300 justify-center">
      {/* <Findopportunities {...findopportunitydata}/>
    <Withmarquee {...marqueedata}/>
    <Marketinggoals {...marketingdata}/>
    <Whyjoinus/>
    <Beyondai/>
    <Learnearngrow/>
    <Hearfromleaders {...hearleadersdata} /> */}
      {/* <Threesteps/> */}
      <Bookdemoform />
      {/* <Beyondai
        heading="Why Designera is Beyond AI"
        tabledata={tabledataa2}
        darktheme={true}
        highlight="#0A0066"
        color1="#FFCC33"
        color2="#00B1CC"
      /> */}
      {/* <Top1withcards /> */}
      
    </div>
  );

}

export default page;