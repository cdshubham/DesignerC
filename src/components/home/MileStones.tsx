import React from "react";

function MileStones() {
  const content = [
    { heading: "$10M+", sub: "Revenue for Clients" },
    { heading: "1500+", sub: "Project Delivered" },
    { heading: "$10K+", sub: "Expert Designers" },
  ];
  const images = [
    { img: "/images/campaign.png", category: "Campaign Planning" },
    { img: "/images/uiux.png", category: "UX/UI Design" },
    { img: "/images/advertising.png", category: "Advertising" },
    { img: "/images/rebranding.png", category: "Rebranding" },
  ];
  return (
    <div className="w-full py-10 md:py-[60px] bg-background-blue-300 text-white flex flex-col justify-center items-center space-y-6 md:space-y-[30px]">
      <div className="text-center px-4">
        <h2 className="text-xl md:text-[68.99px] font-normal mb-4">
          Explore Perfect needs with Designera.
        </h2>
        <p className="text-sm md:text-base text-[#D6D8D2] max-w-2xl mx-auto">
          Social media creative projects completed to date
        </p>
      </div>

      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {images.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="w-full aspect-w-16 aspect-h-9">
                <img
                  src={item.img}
                  alt={item.category}
                  className="w-full h-full object-cover rounded-[8px]"
                />
              </div>
              <h3 className="text-center text-base md:text-[24px] font-semibold">
                {item.category}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MileStones;

// import React from "react";

// function MileStones() {
//   const content = [
//     { heading: "$10M+", sub: "Revenue for Clients" },
//     { heading: "1500+", sub: "Project Delivered" },
//     { heading: "$10K+", sub: "Expert Designers" },
//   ];
//   const images = [
//     // {img:"/images/campaign.png",category:"Campaign Planning"},
//     { img: "/images/uiux.png", category: "UX/UI Design" },
//     // {img:"/images/advertising.png",category:"Advertising"},
//     // {img:"/images/rebranding.png",category:"Rebranding"},
//   ];
//   return (
//     <div className="px-8 w-full py-10 md:py-[60px] bg-background-blue-300 text-white flex flex-col justify-center items-center space-y-6 md:space-y-[30px]">
//       <div className="">
//         <h2 className="text-3xl md:text-[68.99px] font-normal mb-4">
//           Explore Perfect needs with Designera.
//         </h2>
//         <p className="text-lg md:text-base text-[#D6D8D2] max-w-2xl mx-auto">
//           Social media creative projects completed to date
//         </p>
//       </div>

//       <div className="w-full">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
//           {images.map((item, index) => (
//             <div key={index} className="flex flex-col items-center space-y-4">
//               <div className="w-full aspect-w-16 aspect-h-9">
//                 <img
//                   src={item.img}
//                   alt={item.category}
//                   className="w-full h-full object-cover rounded-[8px]"
//                 />
//               </div>
//               <h3 className="text-center text-base md:text-[24px] font-semibold">
//                 {item.category}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MileStones;
