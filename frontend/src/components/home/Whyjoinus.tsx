import Image from "next/image";

const Whyjoinus = () => {
    const lidata =["Constant, proactive communication",
    "Cutting-Edge, Tailored Content",
    "Vibrant, Interactive Community",
    "Affordable and Flexible Learning Experience",
    "Championing Inclusivity"]
  return (
    <div className="w-full bg-white text-black flex justify-center items-center">
      <div className="max-w-[1170px] flex justify-center items-center py-[60px] gap-[30px] ">
        <div className="flex flex-col gap-[20px]  max-w-full whitespace-normal px-[30px]">
          <div className="text-heading/[69px]">Why would you want to Join us?</div>
          <ul className="list-disc pl-7 space-y-5">
            {lidata.map((li) => (
              <li className="w-full text-start text-body">{li}</li>
            ))}
          </ul>
        </div>

        <Image width={407} height={447} src="/images/joinus.png" alt="joinus" />
      </div>
    </div>
  );
}

export default Whyjoinus;