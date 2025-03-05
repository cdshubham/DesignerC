import BlueButton from "../ui/BlueButton";
import WhiteButton from "../ui/WhiteButton";

const Hiretoptalent = () => {
  return (
    <div className="w-full bg-white text-[#1E0A0A] flex justify-center items-center py-[60px]">
      <div className="w-[1770px]  flex flex-col items-center gap-[40px]">
        <div className="max-w-[50%] flex justify-center items-center">
          <h1 className="text-heading/[60px] text-center">
            Hire Top Creative Talent for your Organization Faster
          </h1>
        </div>

        <div className="flex w-full justify-center">
          <div className="flex gap-6">
            <BlueButton children={"Build your Team"} />{" "}
            <WhiteButton children={"Sign up"} className="border border-black" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hiretoptalent;