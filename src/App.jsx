import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Analytics from "./components/Analytics";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Statistics from "./components/Statistics";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true
    });
  },[]);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <HowItWorks />
      <Analytics />
      <Statistics />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;