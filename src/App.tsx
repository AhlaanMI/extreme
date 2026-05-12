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

  return (
    <div className="relative min-h-screen noise-overlay">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute top-0 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary opacity-10 blur-[160px]" />
        <div className="absolute bottom-0 right-[8%] h-[24rem] w-[24rem] rounded-full bg-accent opacity-10 blur-[140px]" />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_60%)]" />
      <Navbar />
      <main className="pt-20 pb-24 md:pb-0">
        <Hero />
        <TrustStrip />
        <div className="section-divider">
          <About />
        </div>
        <div className="section-divider">
          <Services />
        </div>
        <div className="section-divider">
          <Trainers />
        </div>
        <div className="section-divider">
          <Pricing />
        </div>
        <div className="section-divider">
          <Testimonials />
        </div>
        <div className="section-divider">
          <UrgencyBanner />
        </div>
        <div className="section-divider">
          <FAQSection />
        </div>
        <FinalCTA />
      </main>
      <Footer />
      <a
        href={CONTACT.phoneLink}
        className="fixed bottom-4 left-4 right-4 z-40 md:hidden btn btn-primary text-sm justify-center"
      >
        <PhoneCall size={16} />
        Start Your Membership
      </a>
    </div>
  );
}

export default App;
