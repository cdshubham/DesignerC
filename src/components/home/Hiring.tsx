import React from "react";
import BlueButton from "../ui/BlueButton";

function Hiring() {
    const content = [
        "Get Placed with Top Brands Like Google and Amazon",
        "Showcase Your Creative Talent to the World", 
        "Get Hired for Projects That Elevate Your Career."
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full px-4 py-8 md:py-[60px] md:px-[125px] bg-background-white-200 gap-8 md:gap-[60px]">
            {/* Tabs Section */}
            <div className="text-base font-normal text-[#B0B0B0] flex bg-[#F9F5EC] w-full max-w-[304px] rounded-b-lg">
                <span className="flex-1 text-center py-3 border-b-4 border-background-blue-100 rounded-b-lg text-background-blue-100">
                    For Candidates
                </span>
                <span className="flex-1 text-center py-3 border-b-2">
                    For Enterprises
                </span>
            </div>

            {/* Content Section */}
            <div className="flex flex-col-reverse md:flex-row justify-between w-full items-center gap-8 md:gap-12">
                {/* Text Content */}
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                    {/* Heading */}
                    <div className="flex flex-col gap-2 text-3xl md:text-heading/[69.99%] font-normal text-left md:text-justify">
                        <span>Scale your Teams</span>
                        <span>Faster by Hiring</span>
                        <div className="flex gap-1">
                            <span>the </span>
                            <span className="text-background-blue-100">Top 1%</span>
                            <span> Skilled</span>
                        </div>
                        <span>Creative Talent.</span>
                    </div>

                    {/* Description */}
                    <span className="text-base md:text-body/6 font-normal text-left md:text-justify">
                        Join an exclusive talent pool and connect with leading brands,
                        searching for top creative professionals. Showcase your expertise,
                        land your dream role, and redefine your career with endless
                        opportunities.
                    </span>

                    {/* List of Benefits */}
                    <ul className="list-disc text-base md:text-body/6 font-normal pl-5">
                        {content.map((item, index) => (
                            <li key={index} className="mb-2">{item}</li>
                        ))}
                    </ul>

                    {/* Call to Action Button */}
                    <div>
                        <BlueButton
                            children="Become Talent"
                            className="w-full md:w-[153px] py-2 text-white"
                        />
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 max-w-[500px]">
                    <img
                        src="/images/hiring.png"
                        alt="Hiring Illustration"
                        className="w-full h-auto object-cover rounded-cta-raduis"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hiring;