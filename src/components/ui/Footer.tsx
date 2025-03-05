import Link from "next/link";
import Image from "next/image";
import facebook from "/public/images/facebook.png";
import insta from "/public/images/insta.png";
import linkedin from "/public/images/linkedin.png";
import india from "/public/images/india.png";

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
    <footer className="w-full bg-white text-background-blue-300 font-helvetica">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Sections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-line-blue">
          {/* Platform Section */}
          <div className="space-y-6">
            <h3 className="font-bold text-yellow-200 mb-4">PLATFORM</h3>
            <ul className="space-y-2">
              {platform.navs.map((nav, index) => (
                <li key={index} className="hover:text-yellow-200 transition-colors">
                  <Link href={nav.link}>{nav.text}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="font-bold text-yellow-200 mb-4">YET TO BE DECIDED</h3>
              <ul className="space-y-2">
                <li>Text 1</li>
                <li>Text 2</li>
              </ul>
            </div>
          </div>

          {/* Brand Services Section */}
          <div className="space-y-6">
            <h3 className="font-bold text-yellow-200 mb-4">BRAND SERVICES</h3>
            <ul className="space-y-2">
              {[
                "Content Writing", "Graphic Design", "Video Production", 
                "Localization", "Product Design", "Packaging Design", 
                "UI-UX Design", "Launch a Brand"
              ].map((service, index) => (
                <li key={index} className="hover:text-yellow-200 transition-colors">{service}</li>
              ))}
            </ul>
          </div>

          {/* Martech Services Section */}
          <div className="space-y-6">
            <h3 className="font-bold text-yellow-200 mb-4">MARTECH SERVICES</h3>
            <ul className="space-y-2">
              {[
                "Custom Web Development", "Performance Marketing", "Lead-Gen Funnel", 
                "Technical SEO", "Market Research & Survey", "Social Media Marketing", 
                "LinkedIn Marketing", "WhatsApp/Email Marketing", "CRM"
              ].map((service, index) => (
                <li key={index} className="hover:text-yellow-200 transition-colors">{service}</li>
              ))}
            </ul>
          </div>

          {/* Media Services & Talent Network Section */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-yellow-200 mb-4">MEDIA SERVICES</h3>
              <ul className="space-y-2">
                {[
                  "Affluence Marketing", "Influencer Marketing", "Event Marketing"
                ].map((service, index) => (
                  <li key={index} className="hover:text-yellow-200 transition-colors">{service}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="font-bold text-yellow-200 mb-4">TALENT NETWORK SERVICES</h3>
              <ul className="space-y-2">
                {[
                  "Get Hired", "Get Talent", "Evaluate Creative Talent"
                ].map((service, index) => (
                  <li key={index} className="hover:text-yellow-200 transition-colors">{service}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources Section */}
          <div className="space-y-6">
            <h3 className="font-bold text-yellow-200 mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              {[
                "Blogs", "Our Work", "Community", "E-books", 
                "Events", "Creators Hub", "Global CMO's", "Help Center"
              ].map((resource, index) => (
                <li key={index} className="hover:text-yellow-200 transition-colors">{resource}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact and Social Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-line-blue">
          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-yellow-200 mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li className="hover:text-yellow-200 transition-colors">About Us</li>
              <li className="hover:text-yellow-200 transition-colors">Careers</li>
              <li className="py-2">
                <span className="bg-background-blue-100 rounded-sm text-white px-3 py-2 hover:bg-opacity-90 transition-colors">
                  Join Team
                </span>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-yellow-200 mb-4">ADDRESS</h3>
            <ul className="space-y-2">
              <li>Address</li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-yellow-200 mb-4">GET IN TOUCH</h3>
            <div className="space-y-2">
              <p>Please connect with us at</p>
              <p className="font-semibold">+91-XXXXXXXXXX</p>
              <p>or Write us at</p>
              <Link 
                href="mailto:designera@gmail.com" 
                className="text-background-blue-100 hover:underline"
              >
                designera@gmail.com
              </Link>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-yellow-200 mb-4">SOCIAL</h3>
            <div className="flex flex-row ">
              <div className="flex space-x-4">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src={facebook} alt="Facebook" width={24} height={24} />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src={insta} alt="Instagram" width={24} height={24} />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image src={facebook} alt="Facebook" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 text-light-violet-text">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-center sm:text-left mb-4 sm:mb-0">
            <span>© 2024, Designera Inc. All Rights Reserved</span>
            <span>Terms of service</span>
            <span>Privacy Policy</span>
            <span>Sitemap</span>
          </div>
          <div className="flex items-center">
            <span>A Proud&nbsp;</span>
            <Image src={india} alt="India flag" width={30} height={30} />
            <span>&nbsp;Design Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;