import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Projects() {
    const articleList = [
        {
            img: "https://octane-spaces.blr1.cdn.digitaloceanspaces.com/octane-web/images/gitopus.png",
            alt: "",
            title: "Gitopus: Streamlining Your Git Commits! 🐙",
            link: "gitopus",
        },
        {
            img: "https://octane-spaces.blr1.cdn.digitaloceanspaces.com/octane-web/images/octane-auth.png",
            alt: "",
            title: "Octane Auth: The Easiest Way to Add Authentication!",
            link: "octane-auth",
        },
    ];

    return (
        <>
            <div className="hero-section"></div>
            <div className="bg-[#090b0f] min-h-screen">
                <div className="mx-8 lg:mx-20 lg:mb-32 absolute z-20">
                    <div className="">
                        <h1 className="text-[2rem] font-inter leading-[2.5rem] font-semibold tracking-normal py-8 text-left text-white">
                            Our contributions{" "}
                            <span className="bg-gradient-to-r from-[#3221FA] to-[#FF41E1] bg-clip-text text-transparent"></span>
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articleList.map((items, key) => (
                            <Link
                                to={`/${items.link}`}
                                className="hover:bg-white/5 duration-300 cursor-pointer p-3 rounded-xl"
                                key={key}
                            >
                                <img
                                    className="rounded-xl hover:scale-[1.01] cursor-pointer duration-300"
                                    width={1080}
                                    height={1080}
                                    src={items.img}
                                    alt={items.img}
                                />
                                <div className="rounded-xl">
                                    <h1 className="font-inter text-white font-semibold text-[1.5rem] mt-3 leading-[1.8rem]">
                                        {items.title}
                                    </h1>
                                    <h2 className="group text-white font-semibold text-[1rem] cursor-pointer mt-2 flex w-28 items-center justify-between">
                                        <span>Read more</span>
                                        <FontAwesomeIcon
                                            className="w-3 duration-300 group-hover:translate-x-2"
                                            icon={faArrowRightLong}
                                        />
                                    </h2>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
