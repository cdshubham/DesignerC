import Image from "next/image";

const Wishingplatformprofilecard = () => {
  return (
    <div className="w-[470px] rounded-[8px] py-[34px] px-[26px] border border-[#D1CCFF] flex flex-col gap-[50px]">
      <div className="flex w-full gap-4">
        <Image
          src="/images/cmosprofile/profile1.png"
          width={176}
          height={176}
          alt="profilecard"
        />
        <div className="flex flex-grow text-text-grey">
          A platform where I could have all my freelancers, generate research
          reports,  check traffic numbers, manage keywords, and other SEO
          tools... It's a laundry list!
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <h2 className="text-text-grey text-subheading font-semibold">
            Andy Przystanski
          </h2>
          <p className="text-start text-footer text-text-grey">
            {" "}
            Senior Content Marketing Manager at Lattice
          </p>
        </div>
        <div className="flex flex-col"></div>
        <Image src="/icons/3v.png" width={32} height={32} alt="wishing icon" />
      </div>
    </div>
  );
}

export default Wishingplatformprofilecard;