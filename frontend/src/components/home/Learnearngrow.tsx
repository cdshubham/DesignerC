import Image from "next/image";
import BlueButton from "../ui/BlueButton";

const Learnearngrow = () => {

    const benefitsdata = [
    {
      "title": "Become a Certified Designer",
      "description": "Get detailed reports with actionable feedback within 120 minutes, enabling swift, effective hiring decisions."
    },
    {
      "title": "Apply in Right Opportunities",
      "description": "Post-interview feedback includes interviewer credentials, with interviews conducted on camera, fostering trust and fair evaluations."
    },
    {
      "title": "Expert-led Interviews",
      "description": "Gain access to a marketplace of vetted professionals from top companies."
    },
    {
      "title": "Get Placed in Top MNC’s",
      "description": "Deliver an excellent candidate experience with structured and expert-led interviews at scale."
    }
  ]
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white text-black py-[60px]">
      <div className="max-w-[1170px] flex flex-col justify-center gap-[60px]  ">
        <div className="w-full grid grid-cols-[4fr_2fr]">
          <div className="w-full flex flex-col gap-[30px]">
            <div className="text-heading/[69px] w-[95%]">
              {`"Learn, Earn and Grow 
with Endless Opportunities"`}
            </div>
            <div className="text-body text-[#67737E] w-[70%]">
              Designera connects you with the right creator from an extensive
              network of creators ready to bring your content visions to life.
            </div>
            <BlueButton
              children={"Find oppotunitites"}
              className="text-cta font-bold md:w-[153px] md:h-[37px] hover:bg-yellow-100 text-white rounded-[6px] hover:text-black "
            />
          </div>

          <div className="w-full h-full flex justify-center items-center">
            <Image
              src="/images/learnearngrow.png"
              width={347}
              height={297}
              alt="learnearngrow"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full">
          <div className="pr-4 flex flex-col justify-center  gap-[20px]">
            {benefitsdata.map((data, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 py-3 border-b-2 border-[#7566FF] w-[85%]"
              >
                <div className="text-avg font-semibold">{data.title}</div>
                <div className="text-body text-[#464D53]">
                  {data.description}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full h-full flex justify-end items-center">
            <Image
              src="/images/learnearngrowhome.png"
              width={589}
              height={566}
              alt="learearnhomeimage"
              className="rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learnearngrow;