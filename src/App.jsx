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

function App() {
  return (
    <>
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