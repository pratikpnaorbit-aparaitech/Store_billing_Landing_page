import { useEffect, useState } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Analytics from "./components/Analytics";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import Trusted from "./components/Trusted";

function App() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="progress-bar"
        style={{ width: `${scroll}%` }}
      ></div>

      <Navbar />
      <Hero />
      <Features />
      <About />
      <Analytics />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;