import Image from "next/image";

const Sidebar = () => {
  const navitems = [{name:"Home",icon:""},{name:"Solutions",icon:""},{name:"Social Media Audit",icon:""},{name:"Hire Professionals",icon:""},{name:"Manage & Track Hiring",icon:""},{name:"Upskill & Track Hiring",icon:""},{name:"Upskill your Team",icon:""}]


  return (
    <div className="w-[300px] h-full flex flex-col text-lg justify-start px-[30px] bg-gray-200 gap-[20px]">
      <div className="w-full flex justify-center items-center h-[200px]">
        <span className="px-4 py-2 bg-black text-white">DESIGN ERA</span>
      </div>
      {navitems.map((item, index) => (
        <div className="w-full justify-start gap-[20px] items-center flex" key={index}>
          <Image src={item.icon} alt="" width={20} height={20} />{" "}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;