import bgImage from "../assets/image/logo/logo-svg.svg";

const Footer = () => {
    return (
        <footer className="bg-pri-dark bg-footer min-h-[80vh] px-12 pb-8 flex items-end">
            <div className="min-w-full">
                <div className="flex items-center justify-between">
                    <img className="md:w-[8rem] md:h-[3rem]" src={bgImage} alt="Footer image" width={1728} height={70} />
                    <p className="text-white text-md font-inter">Because we see the change you deserve!</p>
                </div>
                <hr className="lg:my-4" />
                <div className="flex items-center justify-between">
                    <h1 className="text-white/70 text-sm font-inter">Copyright &copy; 2024 </h1>
                    <div className="space-x-12">
                        <a className="text-white/80 font-inter hover:text-white duration-500 font-normal text-md" href={"#"}>
                            Privacy & policy
                        </a>
                        <a className="text-white/80 font-inter hover:text-white duration-500 font-normal text-md" href={"#"}>
                            Terms & conditions
                        </a>
                        <a className="text-white/80 font-inter hover:text-white duration-500 font-normal text-md" href={"#"}>
                            Help centre
                        </a>
                        <a className="text-white/80 font-inter hover:text-white duration-500 font-normal text-md" href={"#"}>
                            Raise an issue
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
