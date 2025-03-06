function LaunchProcess() {
  const processList: { heading: string; content: string }[] = [
    {
      heading: "Research-Driven Brand Strategy",
      content:
        "Reach global audiences with our top-tier subtitling services which are expertly crafted.",
    },
    {
      heading: "Emotion-centric translation approach",
      content:
        "Reach global audiences with our top-tier subtitling services which are expertly crafted.",
    },
    {
      heading: "Context-aware content adaptation",
      content:
        "Reach global audiences with our top-tier subtitling services which are expertly crafted.",
    },
  ];

  return (
    <div className="w-full font-sans bg-[#F9F5EC]">
      <div className=" w-full py-12 flex justify-center px-4 ">
        <div className="lg:w-[55%] px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 lg:text-[60px]">
            Process
          </h2>
          <p className="text-lg text-gray-700 leading-6">
            Reach global audiences with our top-tier subtitling services which
            are expertly crafted to preserve the emotion, tone, and context of
            your content. Whether it's a film, corporate presentation, or
            educational video, we make sure your message is understood
            universally.
          </p>
        </div>
      </div>

      {/* Process Cards Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processList.map((process, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg p-2 "
            >
              {/* Purple Box */}
              <div className="w-[301.989990234375px] h-[231.99000549316406px] bg-[#D1CCFF] flex items-center justify-center rounded-md"></div>

              {/* Text Content From List*/}
              <div className=" lg:w-[70%] flex-grow  text-center leading-6 lg:text-start lg:leading-6">
                <h3 className="font-bold text-[28px] mb-3 leading-8 ">
                  {process.heading}
                </h3>
                <p className=" text-[16px]">{process.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LaunchProcess;
