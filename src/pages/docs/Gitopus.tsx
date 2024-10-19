const Gitopus = () => {
    return (
        <>
            <div className="lg:px-60 font-inter" id="home">
                <div className="lg:my-12">
                    <h1 className="font-inter text-black font-medium text-[3.4rem] mb-4 leading-[3.6rem]">
                        Gitopus: Streamlining Your Git Commits With The Power Of AI! 🐙{" "}
                    </h1>
                </div>

                <img
                    className="rounded-2xl"
                    src="https://octane-spaces.blr1.cdn.digitaloceanspaces.com/octane-web/images/gitopus.png"
                    alt=""
                />

                <div className="flex py-8">
                    <div className="">
                        <section id="overview" className="mb-6">
                            <h1 className="text-4xl font-semibold mb-2">Introduction</h1>
                            <p className="text-lg">
                                <strong>Gitopus</strong> is an open-source command-line tool that simplifies your Git commit
                                process by providing an interactive interface for selecting conventional commit prefixes.
                            </p>
                        </section>
                        <section id="features" className="mb-6">
                            <h2 className="text-3xl font-semibold mb-2">Features</h2>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Interactive menu for selecting commit prefixes.</li>
                                <li>Prompts for detailed commit messages.</li>
                                <li>Streamlined process for creating conventional commits.</li>
                                <li>Enhances code clarity and collaboration within teams.</li>
                            </ul>
                        </section>

                        <section id="installation" className="mb-6">
                            <h2 className="text-3xl font-semibold mb-2">Installation</h2>
                            <p className="text-lg mb-4">
                                To install <strong>Gitopus</strong>, you need to have Node.js and npm installed on your
                                machine.
                            </p>
                            <ol className="list-decimal pl-8 space-y-2">
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
                                    .
                                </li>
                                <li>
                                    <strong>Install gitopus globally</strong>: Run the following command in your terminal:
                                    <pre className="bg-gray-100 p-4 rounded mt-2">
                                        <code>npm install -g gitopus</code>
                                    </pre>
                                </li>
                            </ol>
                        </section>

                        <section id="usage" className="mb-6">
                            <h2 className="text-3xl font-semibold mb-2">Usage</h2>
                            <p className="text-lg mb-4">
                                Once <strong>gitopus</strong> is installed, follow these steps to create a Git commit message:
                            </p>
                            <ol className="list-decimal pl-8 space-y-2">
                                <li>
                                    Stage your changes in the Git repository:{" "}
                                    <pre className="bg-gray-100 p-4 rounded mt-2">
                                        <code>git add .</code>
                                    </pre>
                                </li>
                                <li>
                                    Run the <code>gitopus</code> command:
                                    <pre className="bg-gray-100 p-4 rounded mt-2">
                                        <code>gitopus</code>
                                    </pre>
                                    Or use the aliases:
                                    <pre className="bg-gray-100 p-4 rounded mt-2">
                                        <code>gitoct</code> or <code>gt</code>
                                    </pre>
                                </li>
                                <li>Follow the interactive menu to select a commit prefix and enter your commit message.</li>
                            </ol>
                        </section>

                        <section id="example" className="mb-6">
                            <h2 className="text-3xl font-semibold mb-2">Example</h2>
                            <p className="text-lg mb-4">
                                Here's how to use <strong>Gitopus</strong> in your project:
                            </p>
                            <pre className="bg-gray-100 p-4 rounded">
                                <code>
                                    {`cd /path/to/your/repo
git add .  # Stage your changes first
gt         # Run the gitopus command`}
                                </code>
                            </pre>
                            <p className="text-lg mb-4">
                                After running the command, you'll select a prefix from the interactive menu and provide a
                                commit message.
                            </p>
                            <pre className="bg-gray-100 p-4 rounded">
                                <code>
                                    Select the commit prefix:
                                    {"\n"}
                                    feat: A new feature or functionality {"\n"}
                                    fix: A bug fix {"\n"}
                                    docs: Documentation-only changes {"\n"}
                                    ...
                                </code>
                            </pre>
                        </section>

                        <section id="contributing" className="mb-6">
                            <h2 className="text-3xl font-semibold mb-2">Contributing</h2>
                            <p className="text-lg mb-4">
                                We welcome contributions to <strong>Gitopus</strong>! Follow these steps to contribute:
                            </p>
                            <ol className="list-decimal pl-8 space-y-2">
                                <li>
                                    <strong>Fork the repository:</strong> Visit the{" "}
                                    <a
                                        href="https://github.com/devoctane/gitopus"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Gitopus GitHub repository
                                    </a>{" "}
                                    and click the <strong>Fork</strong> button.
                                </li>
                                <li>
                                    Clone the repository:{" "}
                                    <pre className="bg-gray-100 p-4 rounded">
                                        <code>git clone https://github.com/devoctane/gitopus.git</code>
                                    </pre>
                                </li>
                                <li>
                                    Create a new branch for your feature or bug fix:{" "}
                                    <pre className="bg-gray-100 p-4 rounded">
                                        <code>git checkout -b feature-or-bug-fix-name</code>
                                    </pre>
                                </li>
                                <li>Make your changes and ensure everything works correctly.</li>
                                <li>
                                    Commit your changes using Gitopus:{" "}
                                    <pre className="bg-gray-100 p-4 rounded">
                                        <code>gt</code>
                                    </pre>
                                </li>
                                <li>
                                    Push your changes to your forked repository:{" "}
                                    <pre className="bg-gray-100 p-4 rounded">
                                        <code>git push origin feature-or-bug-fix-name</code>
                                    </pre>
                                </li>
                                <li>
                                    Submit a pull request on the original Gitopus repository with a description of your
                                    changes.
                                </li>
                            </ol>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gitopus;
