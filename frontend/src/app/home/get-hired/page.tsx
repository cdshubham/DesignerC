import Findopportunities from "@/components/home/Findopportunities";
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



  return (<div className="w-full font-helvetica">
    <Findopportunities {...findopportunitydata}/>
    <Withmarquee {...marqueedata}/>
  </div>)

}

export default page;