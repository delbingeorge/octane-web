import FAQ from "./FAQ";
import TeamPage from "./TeamPage";
import WorldPage from "./WorldPage";
import LandingPage from "./LandingPage";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <>
            <div className="bg-pri-dark min-h-[150vh] py-4 px-20 relative">
                <div className="hero-section"></div>
                <LandingPage />
                <WorldPage />
                <TeamPage />
                <FAQ />
            </div>

            <Footer />
        </>
    );
};

export default Index;
