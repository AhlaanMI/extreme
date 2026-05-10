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

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute top-0 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary opacity-10 blur-[160px]" />
        <div className="absolute bottom-0 right-[8%] h-[24rem] w-[24rem] rounded-full bg-accent opacity-10 blur-[140px]" />
      </div>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Booking />
        <Transformation />
        <Trainers />
        <Pricing />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
