import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { TrustStrip } from "./components/sections/TrustStrip";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Booking } from "./components/sections/Booking";
import { Transformation } from "./components/sections/Transformation";
import { Trainers } from "./components/sections/Trainers";
import { Pricing } from "./components/sections/Pricing";
import { Testimonials } from "./components/sections/Testimonials";
import { FinalCTA } from "./components/sections/FinalCTA";
function App() {
    useEffect(() => {
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = "smooth";
    }, []);
    return (_jsxs("div", { className: "relative min-h-screen", children: [_jsxs("div", { className: "pointer-events-none fixed inset-0 -z-10 opacity-60", children: [_jsx("div", { className: "absolute top-0 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary opacity-10 blur-[160px]" }), _jsx("div", { className: "absolute bottom-0 right-[8%] h-[24rem] w-[24rem] rounded-full bg-accent opacity-10 blur-[140px]" })] }), _jsx(Navbar, {}), _jsxs("main", { className: "pt-20", children: [_jsx(Hero, {}), _jsx(TrustStrip, {}), _jsx(About, {}), _jsx(Services, {}), _jsx(Transformation, {}), _jsx(Trainers, {}), _jsx(Pricing, {}), _jsx(Testimonials, {}), _jsx(FinalCTA, {}), _jsx(Booking, {})] }), _jsx(Footer, {})] }));
}
export default App;
