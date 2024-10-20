import { useState, useEffect } from "react";
import { Key, Shield, Menu, X } from "lucide-react";

const Gitopus = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { id: "home", label: "Home" },
        { id: "overview", label: "Overview" },
        { id: "features", label: "Features" },
        { id: "installation", label: "Installation" },
        { id: "api-setup", label: "API Setup" },
        { id: "usage", label: "Usage" },
        { id: "contributing", label: "Contributing" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll("section[id], #home").forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = id === "home" ? 0 : 80; // Less offset for home section
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen overflow-x-hidden relative">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <span className="text-xl font-inter font-bold">Octane Docs</span>
                        </div>

                        {/* Mobile menu button */}
                        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-md  font-inter hover:text-blue-600 transition-colors ${
                                        activeSection === item.id ? "text-blue-600 font-medium" : "text-gray-600"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t">
                        <div className="container mx-auto px-4 py-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left px-4 py-2 text-sm ${
                                        activeSection === item.id
                                            ? "text-blue-600 bg-blue-50 font-medium"
                                            : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
            <div className="pt-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-inter">
                    {/* Hero Section */}
                    <div className="py-0 mt-4 lg:pt-12 lg:pb-8" id="home">
                        <div className="flex items-center space-x-3 pb-3">
                            <p className="font-inter text-semibold font-medium border-2 py-1 px-4 border-black/40 text-black/80 w-fit rounded-full">
                                Git utility tool
                            </p>
                            <p className="font-inter text-semibold font-medium border-2 py-1 px-4 border-black/40 text-black/80 w-fit rounded-full">
                                v2.0.0
                            </p>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-[3.4rem] font-medium mb-3 leading-tight lg:leading-[3.6rem]">
                            Gitopus: Streamlining Your Git Commits With The Power Of AI! 🐙
                        </h1>
                        <div className="">
                            <div className="flex items-center space-x-3 ">
                                {/* <img
                                    className="w-6 h-6 rounded-full object-cover"
                                    src="https://www.delb.in/assets/DelbinGeorge-22bfff80.webp"
                                    alt=""
                                /> */}
                                <p className="font-inter text-semibold font-medium text-black/40">
                                    Last Updated: <span className="text-black/80">15th October, 2024</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <section id="overview" className="mb-6 scroll-mt-20">
                        <h1 className="text-4xl font-semibold mb-2">Introduction</h1>
                        <p className="text-lg">
                            Gitopus is an innovative open-source command-line tool that transforms your Git workflow by
                            combining the power of Google's Gemini AI with an intuitive interactive interface. By analyzing
                            your code changes in real-time, Gitopus helps developers create meaningful, conventional commit
                            messages that enhance project clarity and team collaboration.
                        </p>
                    </section>

                    <img
                        className="w-full rounded-2xl mb-8"
                        src="https://octane-spaces.blr1.cdn.digitaloceanspaces.com/octane-web/images/gitopus.png"
                        alt="Gitopus Interface Preview"
                    />

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1">
                            <section id="features" className="mb-6 scroll-mt-20">
                                <h2 className="text-3xl font-semibold mb-2">Features</h2>
                                <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                                        <span className="text-2xl">🤖</span>
                                        <span>AI-powered commit message generation using Google's Gemini</span>
                                    </li>
                                    <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                                        <span className="text-2xl">🎯</span>
                                        <span>Interactive menu for AI-generated or manual commit messages</span>
                                    </li>
                                    <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                                        <span className="text-2xl">📝</span>
                                        <span>Conventional commit format support with predefined prefixes</span>
                                    </li>
                                    <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                                        <span className="text-2xl">⚡</span>
                                        <span>Post-commit actions (push, status, log) for streamlined workflow</span>
                                    </li>
                                    <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                                        <span className="text-2xl">✨</span>
                                        <span>Smart validation for commit message length and format</span>
                                    </li>
                                    <li className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                                        <span className="text-2xl">🔄</span>
                                        <span>Option to edit AI-generated messages before committing</span>
                                    </li>
                                </ul>
                            </section>

                            {/* Installation Section */}
                            <section id="installation" className="mb-6 scroll-mt-20">
                                <h2 className="text-3xl font-semibold mb-2">Installation</h2>
                                <p className="text-lg mb-4">
                                    To install <strong>Gitopus</strong>, you need to have Node.js and npm installed on your
                                    machine.
                                </p>
                                <ol className="list-decimal pl-8 space-y-4">
                                    <li>
                                        <strong>Install Node.js</strong>: Download and install Node.js from{" "}
                                        <a
                                            href="https://nodejs.org/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            nodejs.org
                                        </a>
                                    </li>
                                    <li>
                                        <strong>Install gitopus globally</strong>:
                                        <pre className="bg-gray-100 p-4 rounded mt-2">
                                            <code>npm install -g gitopus</code>
                                        </pre>
                                    </li>
                                </ol>
                            </section>

                            {/* API Key Setup Section */}
                            <section id="api-setup" className="mb-6 scroll-mt-20">
                                <h2 className="text-3xl font-semibold mb-2">Setting Up Your API Key</h2>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                                    <div className="flex items-center mb-2">
                                        <Key className="w-5 h-5 mr-2 text-blue-600" />
                                        <span className="font-semibold">First Time Setup</span>
                                    </div>
                                    <ol className="list-decimal pl-8 space-y-4">
                                        <li>
                                            Visit{" "}
                                            <a
                                                href="https://makersuite.google.com/app/apikey"
                                                className="text-blue-600 hover:underline"
                                            >
                                                Google AI Studio
                                            </a>
                                        </li>
                                        <li>Sign in and create your API key</li>
                                        <li>
                                            Run Gitopus: <code className="bg-gray-100 px-2 py-1 rounded">gt</code>
                                        </li>
                                        <li>Enter your API key when prompted</li>
                                    </ol>
                                </div>
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                    <div className="flex items-center mb-2">
                                        <Shield className="w-5 h-5 mr-2 text-yellow-600" />
                                        <span className="font-semibold">Security Note</span>
                                    </div>
                                    <p>
                                        Your API key will be securely stored in{" "}
                                        <code className="bg-gray-100 px-2 py-1 rounded">~/.gitopus/config.json</code>
                                    </p>
                                </div>
                            </section>

                            {/* Usage Section */}
                            <section id="usage" className="mb-6 scroll-mt-20">
                                <h2 className="text-3xl font-semibold mb-2">Usage</h2>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-lg mb-2">1. Stage your changes:</p>
                                        <pre className="bg-gray-100 p-4 rounded">
                                            <code>git add .</code>
                                        </pre>
                                    </div>
                                    <div>
                                        <p className="text-lg mb-2">2. Run Gitopus:</p>
                                        <pre className="bg-gray-100 p-4 rounded">
                                            <code>gt</code>
                                        </pre>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="font-semibold mb-2">Choose your commit method:</h3>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Generate commit message with AI</li>
                                            <li>Create manual commit with conventional prefixes</li>
                                            <li>Exit the process</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Contributing Section */}
                            <section id="contributing" className="mb-6 scroll-mt-20">
                                <h2 className="text-3xl font-semibold mb-2">Contributing</h2>
                                <p className="text-lg mb-4">
                                    We welcome contributions to <strong>Gitopus</strong>! Here's how you can help:
                                </p>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <ol className="list-decimal pl-8 space-y-4">
                                        <li>
                                            <strong>Fork and clone:</strong>
                                            <pre className="bg-gray-100 p-4 rounded mt-2">
                                                <code>git clone https://github.com/devoctane/gitopus.git</code>
                                            </pre>
                                        </li>
                                        <li>
                                            <strong>Install dependencies:</strong>
                                            <pre className="bg-gray-100 p-4 rounded mt-2">
                                                <code>npm install</code>
                                            </pre>
                                        </li>
                                        <li>
                                            <strong>Create your feature branch:</strong>
                                            <pre className="bg-gray-100 p-4 rounded mt-2">
                                                <code>git checkout -b feature-name</code>
                                            </pre>
                                        </li>
                                        <li>Make your changes and test thoroughly</li>
                                        <li>Submit a Pull Request with a clear description</li>
                                    </ol>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="text-center py-8 mt-12 border-t">
                        <p className="text-gray-600">Built with ❤️ by Team Octane</p>
                        <a
                            href="https://github.com/devoctane/gitopus"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline mt-2 inline-block"
                        >
                            View on GitHub
                        </a>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Gitopus;
