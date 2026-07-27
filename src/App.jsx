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

import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const rememberedToken = localStorage.getItem("SMART_BILLING_ADMIN_TOKEN");
  const sessionToken = sessionStorage.getItem("SMART_BILLING_ADMIN_TOKEN");
  const [adminSession, setAdminSession] = useState(() => {
    const token = rememberedToken || sessionToken;
    const email = localStorage.getItem("SMART_BILLING_ADMIN_EMAIL")
      || sessionStorage.getItem("SMART_BILLING_ADMIN_EMAIL")
      || "";
    return token ? { token, email } : null;
  });
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const openPricing = () => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  const authenticateAdmin = (session, remember) => {
    const storage = remember ? localStorage : sessionStorage;
    localStorage.removeItem("SMART_BILLING_ADMIN_TOKEN");
    localStorage.removeItem("SMART_BILLING_ADMIN_EMAIL");
    sessionStorage.removeItem("SMART_BILLING_ADMIN_TOKEN");
    sessionStorage.removeItem("SMART_BILLING_ADMIN_EMAIL");
    storage.setItem("SMART_BILLING_ADMIN_TOKEN", session.token);
    storage.setItem("SMART_BILLING_ADMIN_EMAIL", session.admin.email);
    setAdminSession({ token: session.token, email: session.admin.email });
    setShowAdminLogin(false);
  };
  const logoutAdmin = () => {
    localStorage.removeItem("SMART_BILLING_ADMIN_TOKEN");
    localStorage.removeItem("SMART_BILLING_ADMIN_EMAIL");
    sessionStorage.removeItem("SMART_BILLING_ADMIN_TOKEN");
    sessionStorage.removeItem("SMART_BILLING_ADMIN_EMAIL");
    setAdminSession(null);
  };

  if (adminSession) {
    return <AdminDashboard token={adminSession.token} adminEmail={adminSession.email} onLogout={logoutAdmin} />;
  }

  return (
    <>
      <Navbar
        onAdmin={() => setShowAdminLogin(true)}
      />

      <Hero
        onLogin={openPricing}
      />

      <Features />
      <About />
      <Analytics />
      <Statistics />
      <Pricing onGetStarted={openPricing} />
      <Testimonials />
      <Contact />
      <Footer />

      {showAdminLogin && <AdminLogin onAuthenticated={authenticateAdmin} onClose={() => setShowAdminLogin(false)} />}
    </>
  );
}

export default App;
