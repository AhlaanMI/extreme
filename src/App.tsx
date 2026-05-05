import React, { useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { TrustStrip } from "./components/sections/TrustStrip";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Transformation } from "./components/sections/Transformation";
import { Trainers } from "./components/sections/Trainers";
import { Pricing } from "./components/sections/Pricing";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQSection } from "./components/sections/FAQ";
import { FinalCTA } from "./components/sections/FinalCTA";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="bg-dark-950 min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Transformation />
        <Trainers />
        <Pricing />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
