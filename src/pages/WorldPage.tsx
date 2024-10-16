// Assets import
import WorldMap from "../assets/image/content/world-map.svg";

const WorldPage = () => {
    return (
        <div className="lg:my-24">
            <div className="flex items-center justify-center flex-col">
                <h4 className="text-xl lg:text-[1.5rem] text-white font-inter text-center">
                    At{" "}
                    <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#00BA6C] to-[#3050ee]">
                        Octane
                    </span>
                    ,
                </h4>
                <h1 className="text-white text-2xl lg:text-[3.3rem] text-center font-semibold lg:mt-4 lg:pb-4 font-inter">We make difference.</h1>
                <p className="text-[0.8rem] lg:text-[1.1rem] font-normal tracking-wider text-white/80 lg:-mt-1 font-inter">
                    From India to the world!
                </p>

                <img
                    className="my-8 lg:my-2"
                    width={1080}
                    height={700}
                    src={WorldMap}
                    alt="World Map of places where octane provide services"
                />
            </div>
        </div>
    );
};

export default WorldPage;
