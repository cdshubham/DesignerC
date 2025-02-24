import Beyondai from "@/components/home/Beyondai";
import Findopportunities from "@/components/home/Findopportunities";
import Hearfromleaders from "@/components/home/Hearfromleaders";
import Learnearngrow from "@/components/home/Learnearngrow";
import Marketinggoals from "@/components/home/Marketinggoals";
import Threesteps from "@/components/home/Threesteps";
import Whyjoinus from "@/components/home/Whyjoinus";
import Withmarquee from "@/components/home/Withmarquee";

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

      


  return (<div className="w-full flex flex-col  font-helvetica bg-background-blue-300 justify-center">
    {/* <Findopportunities {...findopportunitydata}/>
    <Withmarquee {...marqueedata}/>
    <Marketinggoals {...marketingdata}/>
    <Whyjoinus/>
    <Beyondai/>
    <Learnearngrow/>
    <Hearfromleaders {...hearleadersdata} /> */}
    <Threesteps/>
  </div>)

}

export default page;