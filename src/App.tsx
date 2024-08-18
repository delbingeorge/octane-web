import "./App.css";

import LandingPage from "./pages/LandingPage";
import TeamPage from "./pages/TeamPage";
import WorldPage from "./pages/WorldPage";

import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="bg-pri-dark min-h-[150vh] py-2 px-4 relative">
                <div className="hero-section"></div>
                <LandingPage />
                <WorldPage />
                <TeamPage />
                <FAQ />
            </div>

            <Footer />
        </>
    );
}

export default App;
