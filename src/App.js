import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { PhoneCall } from "lucide-react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { TrustStrip } from "./components/sections/TrustStrip";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Trainers } from "./components/sections/Trainers";
import { Pricing } from "./components/sections/Pricing";
import { Testimonials } from "./components/sections/Testimonials";
import { UrgencyBanner } from "./components/sections/UrgencyBanner";
import { FAQSection } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";
import { CONTACT } from "./utils/constants";
function App() {
    useEffect(() => {
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = "smooth";
    }, []);
    return (_jsxs("div", { className: "relative min-h-screen noise-overlay", children: [_jsxs("div", { className: "pointer-events-none fixed inset-0 -z-10 opacity-60", children: [_jsx("div", { className: "absolute top-0 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-primary opacity-10 blur-[120px] sm:h-[32rem] sm:w-[32rem] lg:h-[38rem] lg:w-[38rem] lg:blur-[160px]" }), _jsx("div", { className: "absolute bottom-0 right-[8%] h-[16rem] w-[16rem] rounded-full bg-accent opacity-10 blur-[100px] sm:h-[20rem] sm:w-[20rem] sm:blur-[120px] lg:h-[24rem] lg:w-[24rem] lg:blur-[140px]" })] }), _jsx("div", { className: "pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_60%)]" }), _jsx(Navbar, {}), _jsxs("main", { className: "pt-16 pb-24 sm:pt-20 md:pb-0", children: [_jsx(Hero, {}), _jsx(TrustStrip, {}), _jsx("div", { className: "section-divider", children: _jsx(About, {}) }), _jsx("div", { className: "section-divider", children: _jsx(Services, {}) }), _jsx("div", { className: "section-divider", children: _jsx(Trainers, {}) }), _jsx("div", { className: "section-divider", children: _jsx(Pricing, {}) }), _jsx("div", { className: "section-divider", children: _jsx(Testimonials, {}) }), _jsx("div", { className: "section-divider", children: _jsx(UrgencyBanner, {}) }), _jsx("div", { className: "section-divider", children: _jsx(FAQSection, {}) }), _jsx(FinalCTA, {})] }), _jsx(Footer, {}), _jsxs("a", { href: CONTACT.phoneLink, className: "fixed bottom-3 left-3 right-3 z-40 md:hidden btn btn-primary text-sm justify-center", children: [_jsx(PhoneCall, { size: 16 }), "Start Your Membership"] })] }));
}
export default App;
