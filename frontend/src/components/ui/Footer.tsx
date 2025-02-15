import Link from "next/link";
import Image from "next/image";
import facebook from '/public/images/facebook.png';
import insta from '/public/images/insta.png';
import linkedin from '/public/images/linkedin.png';

import india from '/public/images/india.png';

const Footer = () => {
  const platform = {
    heading: "PLATFORM",
    navs: [
      { text: "Text 1", link: "" },
      { text: "Text 2", link: "" },
      { text: "Text 3", link: "" },
      { text: "Text 4", link: "" },
      { text: "Text 5", link: "" },
      { text: "Text 6", link: "" },
    ],
  };

  return (
    <div className="flex flex-col md:py-[60px] md:px-[129px] gap-[60px] text-background-blue-300 text-footer/[16px] font-helvetica">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6  border-b-[1px] border-line-blue">
        <div className="flex flex-col gap-[46px]">
          <div className="flex flex-col gap-[20px]">
            <h3 className="font-bold mb-2 text-yellow-200">PLATFORM</h3>
            <ul className="space-y-[8px]">
              <li>Text 1</li>
              <li>Text 2</li>
              <li>Text 3</li>
              <li>Text 4</li>
              <li>Text 5</li>
              <li>Text 6</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[20px]">
            <h3 className="font-bold mb-2 text-yellow-200">
              YET TO BE DECIDED
            </h3>
            <ul className="space-y-[8px]">
              <li>Text 1</li>
              <li>Text 2</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold mb-2 text-yellow-200">BRAND SERVICES</h3>
          <ul className="space-y-[8px]">
            <li>Content Writing</li>
            <li>Graphic Design</li>
            <li>Video Production</li>
            <li>Localization</li>
            <li>Product Design</li>
            <li>Packaging Design</li>
            <li>UI-UX Design</li>
            <li>Launch a Brand</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold mb-2 text-yellow-200">MARTECH SERVICES</h3>
          <ul className="space-y-[8px]">
            <li>Custom Web Development</li>
            <li>Performance Marketing</li>
            <li>Lead-Gen Funnel</li>
            <li>Technical SEO</li>
            <li>Market Research & Survey</li>
            <li>Social Media Marketing</li>
            <li>LinkedIn Marketing</li>
            <li>WhatsApp/Email Marketing</li>
            <li>CRM</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[46px]">
          <div className="flex flex-col gap-[20px]">
            <h3 className="font-bold mb-2 text-yellow-200">MEDIA SERVICES</h3>
            <ul className="space-y-[8px]">
              <li>Affluence Marketing</li>
              <li>Influencer Marketing</li>
              <li>Event Marketing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h3 className="font-bold mb-2 text-yellow-200">
              TALENT NETWORK SERVICES
            </h3>
            <ul className="space-y-[8px]">
              <li>Get Hired</li>
              <li>Get Talent</li>
              <li>Evaluate Creative Talent</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold mb-2 text-yellow-200">RESOURCES</h3>
          <ul className="space-y-[8px]">
            <li>Blogs</li>
            <li>Our Work</li>
            <li>Community</li>
            <li>E-books</li>
            <li>Events</li>
            <li>Creators Hub</li>
            <li>Global CMO’s</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6  border-b-[1px] border-line-blue ">
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold mb-2 text-yellow-200">Company</h3>
          <ul className="space-y-[8px]">
            <li>About Us</li>
            <li>Careers</li>
            <li className="py-[8px]">
              <span className=" bg-background-blue-100 rounded-[2px] text-white p-[8px]  ">
                Join Team
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold mb-2 text-yellow-200 ">ADDRESS</h3>
          <ul className="space-y-[8px]">
            <li>Address</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px]"></div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold mb-2 text-yellow-200">GET IN TOUCH</h3>
          <ul className="space-y-[8px]">
            <li className="whitespace-normal">
              Please connect with use at <p>+91-XXXXXXXXXX</p>
            </li>
            <li>
              or Write us at{" "}
              <p>
                <Link
                  href="desginera@gmail.com"
                  className="text-background-blue-100 "
                >
                  designera@gmail.com
                </Link>
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold mb-2 text-yellow-200">SOCIAL</h3>
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[10px]">
              <Image src={facebook} alt="" />
              <Image src={insta} alt="" />
            </div>
            <div className="flex gap-[10px]">
              <Image src={linkedin} alt="" />
              <Image src={facebook} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-footersmall/[15.6px] text-light-violet-text items-center">
        <div className="flex gap-[30px]">
          <span>© 2024, Designera Inc. All Rights Reserved</span>
          <span>Terms of service</span>
          <span>Privacy Policy</span>
          <span>Sitemap</span>
        </div>
        <div className="flex  items-center">
          <span>A Proud&nbsp;</span>
          <Image src={india} alt="India flag" width={30} height={30} />
          <span>&nbsp;Design Agency</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
