import Image from 'next/image';
import Accordian from '../ui/Accordian';

const Threesteps = () => {
  
  const step1 = 
    {
      name:"Learning",
      color:"#4DE694",
      icon:"/icons/lightning.png",
      description:"Learn from Industry experts to create a robust design strategy with verified badge.",
      image:"/images/learninghome.png",
      gradientcolors:["#070425","#4DE593","#BCF5D7","#070425"]
    }


 const networkingaccordian = [{ques:"Meet ups",ans:"Join the community of like-minded people and share your thoughts and ideas."},{ques:"Schedule Master Class",ans:"Schedulte it today"},{ques:"Networking",ans:"Avail the chance to stay connected with Experienced Mentors and peer members"},{ques:"Join community",ans:"Join the community of like-minded people and share your thoughts and ideas."}]
    const step2 = {
      name: "Networking",
      color: "#00C7E6",
      icon: "/icons/lightning.png",
      description:
        "Avail the chance to stay connected with Experienced Mentors and peer members",
      gradientcolors: ["#070425", "#00C5E5", "#00C5E5", "#070425"],
    };
  
    const gradientStyle=(gradientColors:string[])=> {
      return {background: `linear-gradient(to bottom, ${gradientColors?.join(", ")})`}
    };


  return (
    <div className="w-full flex justify-center items-center py-[60px]">
      <div className="min-w-[1170px] max-w-min flex flex-col items-center justify-center">
        <div className="w-full flex flex-col  ">
          <div className="flex flex-col w-full mb-8 gap-[60px] ">
            <div className="max-w-full grid grid-cols-[1fr_10fr] items-center gap-x-16 gap-y-[30px]">
              <div className="max-w-full flex justify-center items-center">
                <div
                  className="min-h-[33px] min-w-[33px] max-h-min max-w-min flex justify-center items-center border rounded-[6px]"
                  style={{ borderColor: step1.color }}
                >
                  <Image src={step1.icon} width={18} height={15} alt="icon" />
                </div>
              </div>
              <h1
                style={{ color: step1.color }}
                className="text-subheading font-semibold"
              >
                {step1.name}
              </h1>
              <div className="h-full min-w-full flex justify-center py-6">
                <div
                  className="w-[4px]  h-full "
                  style={gradientStyle(step1.gradientcolors)}
                ></div>
              </div>
              <div className="flex flex-col gap-[30px]">
                <div className="min-w-[770px] max-w-min text-heading/[69px]">
                  {step1.description}
                </div>
                {/** Learning card */}
                <div className="min-w-[1060px] min-h-[560px] max-w-min max-h-min rounded-[16px] bg-gradient-to-b from-[#1c155e] to-[#251F60] flex flex-col gap-[20px]">
                  {/** Navigation header */}
                  <div className="w-full flex justify-around">
                    {[
                      { name: "Learn", icon: "/icons/share.png" },
                      { name: "Workshops", icon: "/icons/brush.png" },
                      { name: "Live Classes", icon: "/icons/refresh.png" },
                      { name: "Certificate", icon: "/icons/statusup.png" },
                    ].map((navitem, index) => (
                      <div
                        className="flex gap-2 h-[100px] justify-center items-end border-b-4 pb-4"
                        style={{ borderColor: step1.color }}
                        key={index}
                      >
                        <Image
                          src={navitem.icon}
                          width={21}
                          height={21}
                          alt="icon"
                        />
                        <h3 className="text-[20px]/[21px] font-semibold">
                          {navitem.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                  <div className="flex-grow grid grid-cols-2  pt-[40px]">
                    <div className="flex flex-col  w-full px-[40px] gap-[30px]">
                      <div className="text-avg/[37px] ">
                        Top Courses Created by Industry Expert
                      </div>
                      <ul className="space-y-6">
                        {[
                          "Learn from Industry Experts ",
                          "Get Pre-recorded and Live Sessions.",
                          "Learn & Practise by Assessment Tests.",
                        ].map((item, index) => (
                          <li className="flex justify-start gap-2">
                            <div className="flex h-full justify-center items-center"></div>
                            <Image
                              src="/icons/listcheck.png"
                              width={27}
                              height={27}
                              alt="check list"
                            />
                            <p className="text-body">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full h-full bg-[#170e6b] rounded-br-[16px]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/**NETWORKING PAGE */}
            <div className="max-w-full grid grid-cols-[1fr_10fr] items-center gap-x-16 gap-y-[30px]">
              <div className="max-w-full flex justify-center items-center">
                <div
                  className="min-h-[33px] min-w-[33px] max-h-min max-w-min flex justify-center items-center border rounded-[6px]"
                  style={{ borderColor: step2.color }}
                >
                  <Image src={step2.icon} width={18} height={15} alt="icon" />
                </div>
              </div>
              <h1
                style={{ color: step2.color }}
                className="text-subheading font-semibold"
              >
                {step2.name}
              </h1>
              <div className="h-full min-w-full flex justify-center py-6">
                <div
                  className="w-[4px]  h-full "
                  style={gradientStyle(step2.gradientcolors)}
                ></div>
              </div>
              <div className="flex flex-col gap-[30px]">
                <div className="min-w-[770px] max-w-min text-heading/[69px]">
                  {step2.description}
                </div>
                {/** Networking card */}
                <div className="min-w-[1060px] min-h-[560px] max-w-min max-h-min rounded-[16px] bg-gradient-to-b from-[#1c155e] to-[#251F60] grid grid-cols-2  gap-[30px]">
                  {/** Navigation header */}
                  <div className="w-full h-full flex justify-center items-center px-[30px]">
                    <div className="flex flex-col gap-[30px]">
                      {networkingaccordian.map((item, index) => (
                        <Accordian
                          question={item.ques}
                          answer={item.ans}
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-full bg-[#170e6b] rounded-tr-[16px] rounded-br-[16px]"></div>
                </div>
              </div>
            </div>
            {/**Here it will end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Threesteps;