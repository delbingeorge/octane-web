import WorldPage from "./pages/WorldPage";
import TeamPage from "./pages/TeamPage";
import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";

const index = () => {
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

export default index;
