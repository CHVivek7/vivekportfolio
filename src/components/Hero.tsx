
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      window.scrollTo({
        top: portfolioSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-theme-orange/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-theme-orange/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
              Hi, I'm <span className="text-theme-orange">Vivek</span>
              <span className="block mt-2">Java Full Stack Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building scalable and robust web applications with Java, JSP, and modern front-end technologies
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-theme-orange hover:bg-theme-orange/90 text-white"
                onClick={handleScrollToPortfolio}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="border-theme-orange text-theme-orange hover:bg-theme-orange/10"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                Contact Me
              </Button>
            </div>
            <div className="pt-4 flex justify-center lg:justify-start">
              <button 
                className="text-muted-foreground hover:text-theme-orange transition-colors flex items-center gap-2 text-sm"
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    window.scrollTo({
                      top: aboutSection.offsetTop - 80,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                Scroll down to learn more <ArrowDown size={16} />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full bg-gradient-to-br from-theme-orange to-theme-orange/20 p-1">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src="https://i.postimg.cc/hvDgFSWJ/New-Profile-photo-removebg-preview.png" 
                  alt="Vivek" 
                  className="object-cover"
                />
                <AvatarFallback className="text-5xl bg-theme-orange/20">V</AvatarFallback>
              </Avatar>
            </div>
            
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-full border border-theme-orange/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
