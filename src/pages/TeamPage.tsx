// import testImage from "../assets/image/bg-images/test-img.png";
import teamOctane from "../data/data";

const TeamPage = () => {
    return (
        <div className="lg:my-24 flex items-center justify-center flex-col bg-profile-x-bg-cover">
            <div className="flex items-center justify-center flex-col mb-8 lg:my-12">
                <h4 className="text-xl lg:text-[1.5rem] text-white font-inter text-center">
                    Meet team{" "}
                    <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#00BA6C] to-[#3050ee]">
                        Octane
                    </span>
                    ,
                </h4>
                <h1 className="text-white text-center text-2xl lg:text-[3.3rem] font-semibold lg:my-1 font-inter">
                    We build this together!
                </h1>
            </div>
            <div className="grid md:grid-cols-2 gap-2 lg:gap-8 w-full lg:w-5/6">
                {teamOctane.map((value, key) => {
                    return (
                        <div
                            key={key}
                            className="flex flex-col lg:flex-row items-center lg:items-start justify-start group lg:space-x-8 p-4 duration-500 hover:cursor-pointer hover:bg-white/5 rounded-xl"
                        >
                            <img
                                className="rounded-lg group-hover:scale-[1.02] duration-500"
                                width={150}
                                height={150}
                                src={value.image}
                                alt="World Map of places where octane provide services"
                            />
                            <div className="flex items-center justify-center flex-col mt-3">
                                <h1 className="font-mono text-white text-xl lg:text-[1.7rem] font-extrabold">
                                    {value.firstName + " " + value.lastName}
                                </h1>
                                <h2 className="text-white/60 font-mono">{value.role}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/*   <div className="flex items-center justify-center flex-col lg:my-12">
                <h1 className="text-white text-4xl font-semibold lg:my-1 font-inter">Why choose us?</h1>
            </div>

           <div className="flex items-center justify-evenly space-x-12">
                <div className="lg:w-[38vh] relative hover:scale-[1.01] duration-500 cursor-pointer">
                    <img src={testImage} className="" alt="Random" width={1000} height={1000} />
                    <h1 className="text-white font-medium text-2xl absolute px-6 pb-6 bottom-0 left-0 font-inter">
                        Unleashing the power of latest tech
                    </h1>
                </div>
                <div className="lg:w-[38vh] relative hover:scale-[1.01] duration-500 cursor-pointer">
                    <img src={testImage} className="" alt="Random" width={1000} height={1000} />
                    <h1 className="text-white font-medium text-2xl absolute px-6 pb-6 bottom-0 left-0 font-inter">
                        Unleashing the power of latest tech
                    </h1>
                </div>
                <div className="lg:w-[38vh] relative hover:scale-[1.01] duration-500 cursor-pointer">
                    <img src={testImage} className="" alt="Random" width={1000} height={1000} />
                    <h1 className="text-white font-medium text-2xl absolute px-6 pb-6 bottom-0 left-0 font-inter">
                        Great client support & assistance
                    </h1>
                </div>
            </div> */}
        </div>
    );
};

export default TeamPage;
