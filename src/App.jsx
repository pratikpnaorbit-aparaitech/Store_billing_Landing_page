import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Analytics from "./components/Analytics";
import Statistics from "./components/Statistics";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [authMode, setAuthMode] = useState(null);

  return (
    <>
      <Navbar
  onLogin={() => setAuthMode("login")}
/>

      <Hero
        onLogin={() => setAuthMode("login")}
      />

      <Features />
      <About />
      <Analytics />
      <Statistics />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />

      {authMode && (
        <div
          className="login-overlay"
          onClick={() => setAuthMode(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
          >
            {authMode === "login" ? (
              <Login
                onSignup={() => setAuthMode("signup")}
              />
            ) : (
              <Signup
                onLogin={() => setAuthMode("login")}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;