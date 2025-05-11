
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    path: "#hero"
  },
  {
    name: "About",
    path: "#about"
  },
  {
    name: "Projects",
    path: "#portfolio"
  },
  {
    name: "Services",
    path: "#services"
  },
  {
    name: "Contact",
    path: "#contact"
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["hero", "about", "portfolio", "services", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    const targetId = path.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      // Close mobile menu
      setIsMobileMenuOpen(false);
      // Scroll to element
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-theme-darker/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-theme-light">
            {/* Removed the V symbol */}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.path);
                }}
                className={`text-sm font-medium transition-colors hover:text-theme-orange ${
                  activeSection === link.path.substring(1) ? "text-theme-orange" : "text-theme-light"
                }`}
              >
                {link.name}
              </a>
            ))}

            <Button
              asChild
              variant="default"
              className="bg-theme-orange hover:bg-theme-orange/90 text-white"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
              >
                Hire Me
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-theme-light p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-theme-dark border-t border-theme-orange/20 py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.path);
                }}
                className={`text-base font-medium transition-colors hover:text-theme-orange ${
                  activeSection === link.path.substring(1) ? "text-theme-orange" : "text-theme-light"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              variant="default"
              className="bg-theme-orange hover:bg-theme-orange/90 text-white w-full"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
              >
                Hire Me
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
