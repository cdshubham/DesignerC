import Image from "next/image";
const page = () => {
  return (
    <div className="flex flex-col h-full">
        {/**Header */}
      <div className="w-full h-[50px] flex justify-between p-[20px]">
        <div className="flex justify-start"><Image src="" width={20} height={20} alt="with title"/> <span>Job Posts and Proposals</span></div>
        <div className="flex justify-start">
            <div className="border px-4 py-1"><Image src="" width={20} height={20} alt="search icon"/><input placeholder="Search for projects or items" className="outline-none focus:outline-none"/></div>
        </div>
      </div>
    </div>
  );
}

export default page;