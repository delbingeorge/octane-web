import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgImage from "../assets/image/logo/logo-svg.svg";
import { faInstagram, faLinkedinIn, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-pri-dark bg-footer min-h-[50vh] lg:min-h-[60vh] px-4 lg:px-12 pb-8 flex items-end">
            <div className="min-w-full">
                <div className="flex items-center justify-between flex-col lg:flex-row">
                    <img
                        className="w-[7rem] lg:w-[8rem] lg:h-[3rem] mb-2"
                        src={bgImage}
                        alt="Footer image"
                        width={1728}
                        height={70}
                    />
                    <div className="w-2/4 lg:w-1/12 flex justify-between">
                        <a href="https://www.linkedin.com/company/teamoctane/">
                            <FontAwesomeIcon icon={faLinkedinIn} color="white" />
                        </a>
                        {/* <a href="https://github.com/devoctane">
                            <FontAwesomeIcon icon={faGithub} color="white" />
                        </a> */}
                        <a href="https://www.youtube.com/@devoctane">
                            <FontAwesomeIcon icon={faYoutube} color="white" />
                        </a>
                        <a href="https://x.com/devoctane">
                            <FontAwesomeIcon icon={faXTwitter} color="white" />
                        </a>
                        <a href="https://instagram.com/dev.octane">
                            <FontAwesomeIcon icon={faInstagram} color="white" />
                        </a>
                    </div>
                </div>
                <hr className="my-3" />
                <div className="flex items-center justify-between flex-col lg:flex-row">
                    <h1 className="text-white/70 text-[12px] lg:text-sm font-inter">Copyright &copy; 2024 </h1>
                    {/* <div className="space-x-2 lg:space-x-12">
                        <a
                            className="text-[13px] text-white/80 font-inter hover:text-white duration-500 font-normal lg:text-md"
                            href={"#"}
                        >
                            Privacy & policy
                        </a>
                        <a
                            className="text-[13px] text-white/80 font-inter hover:text-white duration-500 font-normal lg:text-md"
                            href={"#"}
                        >
                            Terms & conditions
                        </a>
                        <a
                            className="text-[13px] text-white/80 font-inter hover:text-white duration-500 font-normal lg:text-md"
                            href={"#"}
                        >
                            Help centre
                        </a>
                        <a
                            className="text-[13px] text-white/80 font-inter hover:text-white duration-500 font-normal lg:text-md"
                            href={"#"}
                        >
                            Raise an issue
                        </a>
                    </div> */}

                    <p className="text-white/70 text-sm lg:text-md font-inter">
                        Because we see the change you deserve!
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
