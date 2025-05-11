
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleNavClick = (path: string) => {
    const targetId = path.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <footer className="bg-theme-darker py-12 border-t border-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div className="space-y-4">
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} Chintakrindi Lakshmi Vivek. All rights reserved.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#hero" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#hero");
                  }}
                  className="text-muted-foreground hover:text-theme-orange transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#about");
                  }}
                  className="text-muted-foreground hover:text-theme-orange transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#portfolio");
                  }}
                  className="text-muted-foreground hover:text-theme-orange transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#services");
                  }}
                  className="text-muted-foreground hover:text-theme-orange transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="text-muted-foreground hover:text-theme-orange transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <span className="text-theme-orange">Phone:</span>{" "}
                <a href="tel:+917989200801" className="hover:text-theme-orange transition-colors">
                  (+91) 7989200801
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="text-theme-orange">Email:</span>{" "}
                <a href="mailto:vivekch1225@gmail.com" className="hover:text-theme-orange transition-colors">
                  vivekch1225@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="text-theme-orange">LinkedIn:</span>{" "}
                <a href="https://www.linkedin.com/in/chintakrindi-lakshmi-vivek" target="_blank" rel="noopener noreferrer" className="hover:text-theme-orange transition-colors">
                  LinkedIn Profile
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="text-theme-orange">GitHub:</span>{" "}
                <a href="https://github.com/CHVivek7" target="_blank" rel="noopener noreferrer" className="hover:text-theme-orange transition-colors">
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
