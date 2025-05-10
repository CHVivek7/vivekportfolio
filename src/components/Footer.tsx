
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-darker py-12 border-t border-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-theme-light flex items-center gap-2">
              <span className="text-theme-orange">V</span>ivek
            </Link>
            <p className="text-muted-foreground">
              Building scalable applications with Java & Full Stack expertise.
            </p>
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
                <Link to="/" className="text-muted-foreground hover:text-theme-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-theme-orange transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-theme-orange transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-theme-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-theme-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <span className="text-theme-orange">Email:</span>{" "}
                <a href="mailto:vivekch1225@gmail.com" className="hover:text-theme-orange transition-colors">
                  vivekch1225@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="text-theme-orange">LinkedIn:</span>{" "}
                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-theme-orange transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="text-theme-orange">GitHub:</span>{" "}
                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-theme-orange transition-colors"
                >
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
