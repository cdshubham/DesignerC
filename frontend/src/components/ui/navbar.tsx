"use client";
import React, { useState, useEffect } from "react";
import {
  MdArrowOutward,
  MdKeyboardArrowDown,
  MdDashboard,
} from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { BsFillPuzzleFill } from "react-icons/bs";
import { IoBook } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const navnames = [
    {
      name: "Platform",
      link: "/sol/platform",
      icon: (
        <Image
          src="/icons/platform.png"
          width={16}
          height={16}
          alt="solution icon"
          className="h-full aspect-square "
        />
      ),
      subItems: <First />,
    },
    {
      name: "Solutions",
      link: "/sol/solution",
      icon: (
        <Image
          src="/icons/solutions.png"
          width={16}
          height={16}
          alt="solutions icon"
          className="h-full aspect-square"
        />
      ),
      subItems: <Second />,
    },
    {
      name: "Resources",
      link: "/sol/resources",
      icon: (
        <Image
          src="/images/icons/solutions.png"
          width={16}
          height={16}
          alt="solutions icon"
          className="h-full aspect-square"
        />
      ),
      subItems: <Third />,
    },
    {
      name: "Talent Network",
      link: "/sol/Talentnetwork",
      icon: (
        <Image
          src="/icons/star2.png"
          width={16}
          height={16}
          alt="talent network icon"
          className="h-full aspect-square"
        />
      ),
      subItems: <Fourth />,
    },
  ];

  const [selected, setSelected] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
        setOpenAccordion(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setOpenAccordion(null);
    }
  };

  const handleAccordionToggle = (itemName: string) => {
    setOpenAccordion(openAccordion === itemName ? null : itemName);
  };

  const handleNavClick = (item: any) => {
    setSelected((prev) => (prev === item.name ? "" : item.name));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="w-full inset-0 z-40">
        {/* Desktop Navbar (unchanged) */}
        <div className="flex w-full mx-auto bg-black text-white items-center justify-between px-4 py-3 sm:px-6 lg:px-6 xl:px-[80px] xl:py-[10px] border-b border-background-white-100/50 sticky top-0 z-50">
          {/* Desktop Navigation (same as before) */}
          <div className="flex gap-[40px] items-center font-normal ">
            <img
              src="/logos/designeralogo.png"
              alt="Designera Logo"
              className="w-[90px] sm:w-[100px] md:w-[120px] xl:w-[138px] object-contain"
            />
            {/* Desktop Nav Items (unchanged) */}
            <div className="hidden xl:flex xl:items-center xl:gap-[20px]">
              {navnames.map((items, index) => (
                <button
                  className={` ${
                    selected === items.name ? "text-yellow-100 " : ""
                  } text-cta cursor-pointer font-helvetica font-normal text-white flex items-center gap-1`}
                  onClick={() => {
                    setSelected(items.name);
                    router.push(items.link);
                  }}
                >
                  <span>{items.name}</span>
                  <MdKeyboardArrowDown
                    size={20}
                    className={` ${
                      selected === items.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Buttons (unchanged) */}
          <div className="text-cta font-normal hidden xl:flex gap-5">
            <button className="flex gap-1 w-[128px] h-[32px] items-center rounded-cta-raduis border border-background-white-100 justify-center hover:bg-white hover:text-black transition-colors duration-300">
              <span className="whitespace-nowrap">Hire Talent</span>
              <MdArrowOutward size={18} />
            </button>
            <button className="flex gap-1 w-[128px] h-[32px] items-center rounded-cta-raduis justify-center bg-background-blue-100 hover:bg-yellow-100 hover:text-black transition-colors duration-300 text-white">
              <span className="whitespace-nowrap">Get Started</span>
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={toggleSidebar}
              className="text-white p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Accordion Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="xl:hidden fixed inset-0 top-[60px] bg-gradient-to-t from-[#070425] to-[#090059] z-50 flex flex-col overflow-y-auto " //samy overflow-y-auto
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col h-full w-full overflow-y-auto justify-between"
              >
                {/* Nav Items - Expands when accordion opens */}
                <div className="flex flex-col mt-8">
                  {navnames.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="mb-2"
                    >
                      {/* Button */}
                      <button
                        className={`${
                          selected === item.name ? "text-yellow-100 " : ""
                        } text-xl sm:text-2xl cursor-pointer font-helvetica font-normal text-white flex gap-2 w-full justify-between pl-8 py-3`}
                        onClick={() => {
                          handleNavClick(item);
                          handleAccordionToggle(item.name);
                        }}
                      >
                        <div className="flex gap-2">
                          <div
                            className={`self-center ${
                              selected != item.name &&
                              "brightness-200 contrast-200"
                            }`}
                          >
                            {item.icon}
                          </div>
                          <div>{item.name}</div>
                        </div>
                        {item.subItems && (
                          <MdKeyboardArrowDown
                            size={24}
                            className={`mr-6 lg:mr-8 ${
                              openAccordion === item.name ? "rotate-180" : ""
                            } transition-transform duration-300`}
                          />
                        )}
                      </button>

                      {/* Accordion SubItems */}
                      <AnimatePresence>
                        {item.subItems && openAccordion === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            {item.subItems}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="h-[0.06px] w-full bg-white/20"></div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Buttons - Will move down as content expands */}
                <div className="px-6 pb-12 mt-4">
                  <button className="flex gap-1 h-[50px] items-center rounded-cta-raduis justify-center bg-[#1700EB] hover:bg-white hover:text-black transition-colors duration-300 text-white mt-4 w-full">
                    <span className="whitespace-nowrap">Hire Talent</span>
                    <MdArrowOutward size={18} />
                  </button>

                  <button className="flex gap-1 h-[50px] items-center rounded-cta-raduis justify-center bg-[#1700EB] hover:bg-yellow-100 hover:text-black transition-colors duration-300 text-white mt-4 w-full">
                    <span>Get Started</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Navbar;

import Image from "next/image";
import { marketinglinkdata } from "../../app/sol/solution/page";
import Navigationservice from "@/components/navigation/Navigationservice";
import Solutioncard from "../home/Solutioncard";

export const boxshadow = {
  yellow: "#FFBF00",
  green: "#24D171",
  pink: "#BA40AA",
  peachpink: "#B75C4E",
  blue: "#A190FF",
};

const First = () => {
  console.log(marketinglinkdata);
  const content = [
    {
      title: "Creatives",
      content: "Elevate your brand value with engaging and creative videos",
      className: "bg-gradient-to-b from-[#3A2A29] to-[#E4B156]",
      color1: "#FFFFFF",
      color2: "#1EaD5D",
    },
    {
      title: "Marketing",
      content: "Leverage technology to reach potential audience faster.",
      className: "bg-gradient-to-b from-[#3C1750] to-[#BD41AD]",
      color1: "#FFFFFF",
      color2: "#1EaD5D",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row font-helvetica w-full">
      {/* Main content area */}
      <div className="flex flex-grow flex-col bg-darkblue gap-4 md:gap-6 p-4 md:p-6 lg:pt-8 lg:pl-8 lg:pr-4 xl:pl-20 xl:pr-8">
        {/* Header */}
        <div className="text-xs sm:text-sm text-gold-yellow flex gap-2 items-center font-semibold"></div>

        {/* Card layout - changes from vertical to horizontal on larger screens */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
          {/* Cards container */}
          <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-64">
            {/* Social Media Audit Card */}
            <div
              className="min-h-24 w-full flex flex-col p-4 text-white relative gap-2 rounded-sm bg-gradient-gold-solution hover:cursor-pointer transition-all duration-300 m-auto"
              style={{
                width: "289.3333435058594px",
                height: "184px",
              }}
            >
              <div className="flex flex-row justify-between items-start h-full">
                <div className="flex flex-col justify-center">
                  <span className="text-[24px] pr-12 font-medium">
                    Social Media Audit
                  </span>
                  <div className="text-sm mt-2">Description</div>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/icons/arrow.png"
                    width={28}
                    height={28}
                    alt="arrow"
                    className="w-8 h-8"
                  />
                </div>
              </div>
            </div>
            {/* Details panel - visible on all screen sizes */}
            <div
              className="flex flex-col py-6 px-4 rounded-lg transition-all duration-300 m-auto"
              style={{
                width: "289.3333435058594px",
                height: "510px",
                background: "linear-gradient(to bottom, #CC970033, #FFD55E)",
              }}
            >
              {/* Empty card with just the gradient background */}
            </div>

            {/* Talent Marketplace Card */}
            <div
              className="min-h-24 w-full flex flex-col p-4 text-white relative gap-2 rounded-lg hover:cursor-pointer transition-all duration-300 m-auto"
              style={{
                width: "289.3333435058594px",
                height: "184px",
                backgroundImage: "linear-gradient(to bottom, #3A164F, #BC41AD)",
              }}
            >
              <div className="flex flex-row justify-between h-full">
                <div className="flex flex-col justify-start w-3/4 text-[24px] pr-12">
                  <span className="text-lg font-medium">
                    Talent Marketplace
                  </span>
                  <div className="text-sm mt-2">Description</div>
                </div>
                <div className="flex items-start justify-end w-1/4">
                  <Image
                    src="/images/icons/arrow.png"
                    width={28}
                    height={28}
                    alt="arrow"
                    className="w-8 h-8 object-contain"
                    style={{ flexShrink: 0 }}
                  />
                </div>
              </div>
            </div>

            {/* Designera Learning Card */}
            <div
              className="min-h-24 w-full flex flex-col p-4 text-white relative gap-2 rounded-lg hover:cursor-pointer transition-all duration-300 m-auto"
              style={{
                width: "289.3333435058594px",
                height: "184px",
                backgroundImage:
                  "linear-gradient(to bottom, #4DE59333, #20DF78)",
              }}
            >
              <div className="flex flex-row justify-between items-start h-full">
                <div className="flex flex-col justify-center w-3/4">
                  <span className="text-[24px] font-medium pr-12">
                    Designera Learning
                  </span>
                  <div className="text-sm mt-2">Description</div>
                </div>
                <div className="flex items-center justify-center w-1/4">
                  <Image
                    src="/images/icons/arrow.png"
                    width={28}
                    height={28}
                    alt="arrow"
                    className="w-8 h-8 object-contain"
                    style={{ flexShrink: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation service - visible on all screen sizes */}
      <div className="w-full lg:w-auto mt-6 lg:mt-0 p-4 md:p-6 lg:p-0">
        <Navigationservice
          linkdata={marketinglinkdata}
          heading="Industries Served"
        />
      </div>
    </div>
  );
};

const solutionsData = [
  {
    title: "Creatives",
    content: "Elevate your brand value with engaging and creative videos",
    gradient: "bg-[linear-gradient(-180deg,#CC970033,#FFD55E)]",
    services: [
      {
        name: "Video Production",
        description: "High-quality creative video services",
      },
      {
        name: "Graphic Design",
        description: "Innovative visual content creation",
      },
      {
        name: "Brand Storytelling",
        description: "Compelling narrative development",
      },
    ],
  },
  {
    title: "Marketing",
    content: "Leverage technology to reach potential audience faster.",
    gradient: "bg-[linear-gradient(0deg,#BC41AD,#3A164F)]",
    services: [
      {
        name: "Digital Marketing",
        description: "Comprehensive online marketing strategies",
      },
      {
        name: "Social Media Management",
        description: "Targeted social media campaigns",
      },
      { name: "SEO Optimization", description: "Improve online visibility" },
    ],
  },
  {
    title: "Media",
    content: "Boost market impact with targeted demand generation solutions",
    gradient: "bg-[linear-gradient(180deg,#4DE59333,#20DF78)]",
    services: [
      {
        name: "Content Strategy",
        description: "Effective media content planning",
      },
      { name: "Media Buying", description: "Strategic ad placement" },
      {
        name: "Analytics",
        description: "Comprehensive media performance tracking",
      },
    ],
  },
  {
    title: "Talent Network",
    content: "Onboard top 1% Creative talent and Reduce your hiring process",
    gradient: "bg-[linear-gradient(180deg,#6D485B,#B75C4E)]",
    services: [
      {
        name: "Talent Acquisition",
        description: "Recruit top-tier creative professionals",
      },
      {
        name: "Talent Matching",
        description: "Connect businesses with ideal candidates",
      },
      {
        name: "Talent Development",
        description: "Ongoing professional growth programs",
      },
    ],
  },
];

const creativeslinkdata = [
  {
    icon: "icon1",
    name: "Content Writing",
    description: "All helpful resources for Peppers business's platform.",
    link: "/home/content-writing",
  },
  {
    icon: "icon2",
    name: "Graphic Designing",
    description: "Read about latests trends, insights related to Design.",
    link: "/home",
  },
  {
    icon: "icon3",
    name: "Video Production",
    description: "Join us for creative Industry events, Virtual and offline.",
    link: "/home/video-production",
  },
  {
    icon: "icon4",
    name: "Localization",
    description:
      "Learn from top Global Creative leaders experiences about fusion.",
    link: "/home/localization",
  },
  {
    icon: "icon5",
    name: "Packaging Designing",
    description:
      "Learn from top Global Creative leaders experiences about fusion.",
    link: "/home/product",
  },
  {
    icon: "icon6",
    name: "UX-UI Designing",
    description:
      "Learn from top Global Creative leaders experiences about fusion.",
    link: "/home/packaging-design",
  },
  {
    icon: "icon8",
    name: "Launch a Brand",
    description:
      "Explore how our work which help the clients to become top brands.",
    link: "/home/brand-launch",
  },
];

const Second = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure initial selection happens only on client-side
    if (!selectedCard && solutionsData.length > 0) {
      setSelectedCard(solutionsData[0].title);
    }
    setIsMounted(true);
  }, []);

  // Get selected card details
  const getSelectedCardDetails = () => {
    return (
      solutionsData.find((card) => card.title === selectedCard) ||
      solutionsData[0]
    );
  };

  // Prevent hydration errors by checking mount status
  if (!isMounted) {
    return null;
  }

  const selectedCardDetails = getSelectedCardDetails();

  return (
    <div className="flex flex-col lg:flex-row font-helvetica w-full">
      {/* Main content area */}
      <div className="flex flex-grow flex-col bg-darkblue gap-4 md:gap-6 p-4 md:p-6 lg:pt-8 lg:pl-8 lg:pr-4 xl:pl-20 xl:pr-8">
        {/* Header */}
        <div className="text-xs sm:text-sm text-gold-yellow flex gap-2 items-center font-semibold"></div>

        {/* Card layout */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
          {/* Cards container */}
          <div className="flex flex-wrap gap-4 justify-center">
            {solutionsData.map((card, index) => (
              <div
                key={index}
                className={`${card.gradient} w-[288.51px] h-[310.21px] rounded-lg p-4 text-white flex flex-col items-center`}
                onClick={() => setSelectedCard(card.title)}
              >
                {/* Title & Content in a row */}
                <div className="flex items-start text-start gap-4">
                  {/* Text Container */}
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold">{card.title}</h2>
                    <p className="text-sm mt-2">{card.content}</p>
                  </div>
                  {/* Image Container */}
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/icons/arrow.png"
                      width={50}
                      height={50}
                      alt="arrow"
                      className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-auto mt-6 lg:mt-0 p-4 md:p-6 lg:p-0">
        <Navigationservice linkdata={creativeslinkdata} heading="Services" />
      </div>
    </div>
  );
};

const Third = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const content = [
    {
      title: "Blog",
      content:
        "Learn about Design Research and Creativity with the fusion of Technology to get ahead of the curve.",
      gradient: "bg-gradient-to-b from-[#3A2A29] to-[#E4B156]",
      services: [
        {
          name: "Content Strategy",
          description: "Uncover how Brands drive revenue with Designera.",
        },
      ],
    },
    {
      title: "Case Studies",
      content: "Leverage technology to reach potential audience faster.",
      gradient: "bg-gradient-to-b from-[#3C1750] to-[#BD41AD]",
      services: [
        {
          name: "Technology Integration",
          description: "Innovative solutions to expand your market reach",
        },
        {
          name: "Audience Targeting",
          description:
            "Precision strategies to connect with your ideal customers",
        },
      ],
    },
  ];
  const servicesData = [
    {
      icon: "icon23",
      name: "Help Center",
      description: "All helpful resources for Peppers business's platform.",
      link: "/help-center",
    },
    {
      icon: "icon23",
      name: "Ebooks and Whitepapers",
      description: "Read about latest trends, insights related to Design.",
      link: "/ebooks-whitepapers",
    },
    {
      icon: "icon23",
      name: "Events",
      description: "Join us for creative Industry events, Virtual and offline.",
      link: "/events",
    },
    {
      icon: "icon23",
      name: "Top Global CMO’s",
      description:
        "Learn from top Global Creative leaders' experiences about fusion.",
      link: "/top-global-cmos",
    },
    {
      icon: "icon23",
      name: "About Designera",
      description: "Explore how our work helps clients become top brands.",
      link: "/about-designera",
    },
  ];

  useEffect(() => {
    // Ensure initial selection happens only on client-side
    if (!selectedCard && content.length > 0) {
      setSelectedCard(content[0].title);
    }
    setIsMounted(true);
  }, []);

  // Get selected card details
  const getSelectedCardDetails = () => {
    return content.find((card) => card.title === selectedCard) || content[0];
  };

  // Prevent hydration errors by checking mount status
  if (!isMounted) {
    return null;
  }

  const selectedCardDetails = getSelectedCardDetails();

  return (
    <div className="flex flex-col lg:flex-row font-helvetica w-full">
      {/* Main content area */}
      <div className="flex flex-grow flex-col bg-darkblue gap-4 md:gap-6 p-4 md:p-6 lg:pt-8 lg:pl-8 lg:pr-4 xl:pl-20 xl:pr-8">
        {/* Header */}
        <div className="text-xs sm:text-sm text-gold-yellow flex gap-2 items-center font-semibold"></div>

        {/* Card layout */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
          {/* Cards container */}
          <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-64">
            {content.map((card) => (
              <div
                key={card.title}
                style={{
                  width: "288.5133361816406px",
                  height: "310.20001220703125px",
                }}
                className={`
      flex flex-col p-4 text-white 
      relative gap-2 md:gap-4 
      rounded-md 
      ${card.gradient}
      hover:cursor-pointer 
      transition-all duration-300 m-auto
      ${selectedCard === card.title ? "" : ""}
    `}
                onClick={() => setSelectedCard(card.title)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl pr-5">{card.title}</span>
                  <Image
                    src="/images/icons/arrow.png"
                    width={28}
                    height={28}
                    alt="arrow"
                    className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  />
                </div>
                <div className="text-sm md:text-base pr-6">{card.content}</div>
              </div>
            ))}

            {/* Community Card */}
            <div
              style={{
                width: "288.5133361816406px",
                height: "310.20001220703125px",
              }}
              className={`
    flex flex-col 
    p-4 text-white 
    relative gap-2 md:gap-4 
    rounded-md 
    bg-gradient-green-solution 
    hover:cursor-pointer mx-auto
    ${selectedCard === "Join Designera Community" ? "ring-2 ring-white" : ""}
  `}
              onClick={() => setSelectedCard("Join Designera Community")}
            >
              <div className="flex justify-between items-center">
                <span className="text-2xl">Join Designera Community</span>
                <Image
                  src="/images/icons/arrow.png"
                  width={28}
                  height={28}
                  alt="arrow"
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </div>
              <div className="text-sm md:text-base">
                Explore how our work helps clients become top brands
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Service */}
      <div className="w-full lg:w-auto mt-6 lg:mt-0 p-4 md:p-6 lg:p-0">
        <Navigationservice linkdata={servicesData} heading="SERVICES" />{" "}
        {/* Assuming this exists */}
      </div>
    </div>
  );
};

const Fourth = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const content = [
    {
      title: "Get Hired",
      content: "Uncover opportunities and advance your career with Designera",
      gradient: "bg-gradient-to-b from-[#201563] to-[#6450EC]",
      services: [
        {
          name: "Career Opportunities",
          description: "Connect with top employers in your field",
        },
        {
          name: "Professional Networking",
          description: "Expand your professional connections",
        },
      ],
    },
    {
      title: "Get Talent",
      content: "Uncover how Brands drive revenue with Designera",
      gradient: "bg-gradient-to-b from-[#3A164F] to-[#BC41AD]",
      services: [
        {
          name: "Talent Acquisition",
          description: "Find top-tier professionals for your team",
        },
        {
          name: "Recruitment Solutions",
          description: "Streamline your hiring process",
        },
      ],
    },
    {
      title: "Designera Learning",
      content: "Enhance your skills with comprehensive learning programs",
      gradient: "bg-gradient-to-b from-[#173342] to-[#29C77B]",
      services: [
        {
          name: "Online Courses",
          description: "Expert-led learning modules",
        },
        {
          name: "Skill Development",
          description: "Tailored learning paths",
        },
      ],
    },
  ];

  const servicesData = [
    {
      icon: "icon1",
      name: "Get Hired",
      description: "Description",
      link: "/services/get-hired",
    },
    {
      icon: "icon2",
      name: "Get Talent",
      description: "Description",
      link: "/services/get-talent",
    },
    {
      icon: "icon3",
      name: "Evaluate Creative Team",
      description: "Description",
      link: "/services/evaluate-creative-team",
    },
    {
      icon: "icon4",
      name: "Designera Learning",
      description: "Description",
      link: "/services/designera-learning",
    },
  ];

  useEffect(() => {
    // Ensure initial selection happens only on client-side
    if (!selectedCard && content.length > 0) {
      setSelectedCard(content[0].title);
    }
    setIsMounted(true);
  }, []);

  // Get selected card details
  const getSelectedCardDetails = () => {
    return content.find((card) => card.title === selectedCard) || content[0];
  };

  // Prevent hydration errors by checking mount status
  if (!isMounted) {
    return null;
  }

  const selectedCardDetails = getSelectedCardDetails();

  return (
    <div className="flex flex-col lg:flex-row font-helvetica w-full">
      {/* Main content area */}
      <div className="flex-grow flex flex-col bg-darkblue gap-4 md:gap-6 p-4 md:p-6 lg:pt-8 lg:pl-8 lg:pr-4 xl:pl-20 xl:pr-8">
        {/* Header */}
        <div className="text-xs sm:text-sm text-gold-yellow flex gap-2 items-center font-semibold"></div>

        {/* Card layout */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
          {/* Cards container */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            {content.map((card) => (
              <div
                key={card.title}
                className={`
      w-[288.51px] h-[310.21px] 
      flex flex-col 
      p-4 text-white 
      relative gap-2 md:gap-4 
      rounded-md 
      ${card.gradient}
      hover:cursor-pointer 
      transition-all duration-300 mx-auto
      ${selectedCard === card.title ? "" : ""}
    `}
                onClick={() => setSelectedCard(card.title)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl">{card.title}</span>
                  <Image
                    src="/images/icons/arrow.png"
                    width={28}
                    height={28}
                    alt="arrow"
                    className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                  />
                </div>
                <div className="text-sm md:text-base">Description</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Service */}
      <div className="w-full lg:w-auto mt-6 lg:mt-0 px-4 md:px-6 lg:xp-0 h-[375px]">
        <Navigationservice linkdata={servicesData} heading="SERVICES" />
      </div>
    </div>
  );
};
