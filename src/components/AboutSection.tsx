import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 -right-40 w-80 h-80 bg-theme-orange/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-wider text-theme-orange mb-2">ABOUT ME</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Java Full Stack Developer with a Passion for Building Scalable Applications
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-theme-darker to-theme-dark rounded-lg border border-theme-orange/20 shadow-lg shadow-theme-orange/5 overflow-hidden">
              {/* Replace with actual image when available */}
              <div className="w-full h-full bg-gradient-to-br from-theme-orange/20 to-theme-orange/5 flex items-center justify-center">
                <span className="text-theme-orange text-4xl font-bold">V</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 border border-theme-orange/10 rounded-lg"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-theme-orange/10 rounded-full blur-md"></div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Hello, I'm Vivek</h4>
              <p className="text-muted-foreground">
                I'm a passionate Java Full Stack Developer with expertise in building scalable applications and web solutions. With a strong foundation in Java and a comprehensive understanding of both front-end and back-end technologies, I create efficient, robust, and user-friendly applications.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical excellence with user-centered design, ensuring that the applications I build not only function flawlessly but also provide an exceptional user experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="text-lg font-semibold mb-2">Education</h5>
                <ul className="space-y-2 text-muted-foreground">
                  <li>BTech in Information Technology, 2022-2026</li>
                  <li>Intermediate, 2020-2022</li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold mb-2">Technical Skills</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">Java</span>
                  
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">MySQL</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">JavaScript</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">HTML/CSS</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button asChild className="bg-theme-orange hover:bg-theme-orange/90 text-white">
                
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;