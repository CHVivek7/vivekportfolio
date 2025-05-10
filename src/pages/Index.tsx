
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: "smooth"
            });
          }, 100);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener("hashchange", handleHashNavigation);
    
    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-theme-dark text-theme-light">
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="portfolio">
        <PortfolioSection />
      </section>
      
      <section id="services">
        <ServicesSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
