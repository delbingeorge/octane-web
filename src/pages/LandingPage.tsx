// Assets import
import OctaneLogo from "../assets/image/logo/logo-svg.svg";
import CoreElements from "../assets/image/content/core-ele.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="relative">
            <nav className="flex items-center justify-between fade-down lg:px-16 lg:py-2">
                <div className="lg:w-1/4 flex items-start justify-start">
                    <img
                        className="w-[7rem] h-[3rem] lg:w-[8rem] lg:h-[3rem]"
                        width={1280}
                        height={720}
                        alt="Octane company logo"
                        src={OctaneLogo}
                    />
                </div>
                <div className="md:w-1/6 flex items-center justify-end">
                    <a
                        href="mailto:innovationsoctane@gmail.com"
                        className="text-white hover:text-white font-inter py-1 px-2 rounded-md hover:bg-white/10 lg:text-white/90 duration-300 cursor-pointer font text-sm lg:text-[0.9rem]"
                    >
                        Get in touch
                    </a>
                </div>
            </nav>

            <main className="flex items-center justify-center py-12 lg:py-24">
                <div className="flex items-center justify-center flex-col">
                    <h2 className={`text-white text-center text-lg lg:text-[2.5rem] font-medium font-inter fade-up`}>
                        Unleash the power of tech
                    </h2>
                    <h1 className="text-4xl text-center lg:text-[4rem] font-bold text-transparent lg:my-4 lg:pb-4 bg-clip-text bg-gradient-to-r from-[#008E6C] via-[#00BA6C] to-[#1B3CEB] font-inter fade-up-one">
                        to enhance your business!
                    </h1>
                    <p className="text-[0.9rem] lg:text-[1.1rem] md:w-3/5 text-center text-white/90 fade-up-two">
                        At Octane Innovations, our unique 8-phase process drives innovation at every stage, delivering
                        cutting-edge software solutions to propel your business to peak performance.
                    </p>
                    <div className="flex items-center justify-between space-x-5 fade-up-two mt-6">
                        <a
                            href="mailto:innovationsoctane@gmail.com"
                            className="px-5 py-2 bg-white duration-500 text-black hover:bg-white/40 font-inter font-medium border-white/70 rounded-[0.5rem] border-2 hover:text-white text-[1rem]"
                        >
                            Get in touch
                        </a>
                        <Link
                            to="/our-works"
                            className="px-5 py-2 hover:bg-white duration-500 hover:text-black bg-white/40 font-inter font-medium border-white/90 rounded-[0.5rem] border-2 text-white/90 text-[1rem]"
                        >
                            View Works
                        </Link>
                    </div>
                </div>
            </main>

            <div className="flex items-center justify-center space-x-5 fade-up-two pb-12 lg:py-0">
                <img alt="Core elements of Octane company" width={900} height={720} src={CoreElements} />
            </div>
        </div>
    );
};

export default LandingPage;
