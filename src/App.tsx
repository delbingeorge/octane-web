import "./App.css";

import LandingPage from "./pages/LandingPage";
import TeamPage from "./pages/TeamPage";
import WorldPage from "./pages/WorldPage";

import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import Gitopus from "./pages/docs/Gitopus";

const Main = () => {
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
};

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/our-works" element={<Projects />} />
                    <Route path="*" element={<Projects />} />
                    <Route path="/gitopus" element={<Gitopus />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
