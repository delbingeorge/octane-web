// Assets import
import OctaneLogo from "../assets/image/logo/logo-svg.svg";
import CoreElements from "../assets/image/content/core-ele.png";

const LandingPage = () => {
    return (
        <div className="relative">
            <nav className="flex items-center justify-between fade-down">
                <div className="md:w-1/4 flex items-start justify-start">
                    <img
                        className="md:w-[8rem] md:h-[3rem]"
                        width={1280}
                        height={720}
                        alt="Octane company logo"
                        src={OctaneLogo}
                    />
                </div>
                <div className="md:w-1/6 flex items-center justify-between">
                    <h1 className="hover:text-white font-inter text-white/80 duration-300 cursor-pointer font">
                        Take a tour
                    </h1>
                    <h1 className="hover:text-white font-inter text-white/80 duration-300 cursor-pointer font">
                        Get in touch
                    </h1>
                </div>
            </nav>

            <main className="flex items-center justify-center min-h-[55vh]">
                <div className="flex items-center justify-center flex-col">
                    <h2 className={`text-white text-[2.5rem] font-medium font-inter fade-up`}>Unleash the power of tech</h2>
                    <h1 className="text-[4rem] font-bold text-transparent lg:-mt-6 bg-clip-text bg-gradient-to-r from-[#008E6C] via-[#00BA6C] to-[#1B3CEB] font-inter fade-up-one">
                        to enhance your business!
                    </h1>
                    <p className="text-[1.1rem] md:w-3/5 text-center text-white/90 fade-up-two">
                        At Octane Company, our unique 8-phase process drives innovation at every stage, delivering
                        cutting-edge software solutions to propel your business to peak performance.
                    </p>
                    <div className="flex items-center justify-between space-x-5 fade-up-two mt-6">
                        <button className="px-4 py-2 bg-white duration-500 text-black hover:bg-white/40 font-inter font-medium border-white rounded-md border-2 hover:text-white text-sm">
                            <a href={"mailto:octanecompany@proton.me"}>Get in touch</a>
                        </button>
                    </div>
                </div>
            </main>

            <div className="flex items-center justify-center space-x-5 fade-up-two">
                <img alt="Core elements of Octane company" width={900} height={720} src={CoreElements} />
            </div>
        </div>
    );
};

export default LandingPage;
