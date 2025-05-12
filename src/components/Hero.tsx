
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: "smooth"
      });
    }
  }; 

  return <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-10 px-4 md:px-0">
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-theme-orange/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-theme-orange/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto">
        <div className="space-y-6 md:space-y-8 max-w-3xl">
          <div className="flex flex-col gap-3 md:gap-4">
            <h2 className="text-sm sm:text-base md:text-lg tracking-wider font-medium text-theme-orange animate-fade-in">HI, I'M CHINTAKRINDI LAKSHMI VIVEK</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              
              <span className="block">
                <span className="text-theme-orange"> Aspiring <br></br>JAVA FULL</span>
              </span>
              <span className="block">STACK</span>
              <span className="title-stroke">DEVELOPER</span>
            </h1>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{
          animationDelay: "0.6s"
        }}>
            <Button
              size="lg"
              className="bg-theme-orange hover:bg-theme-orange/90 text-white"
              onClick={() => {
                const downloadLink = 'https://drive.google.com/uc?export=download&id=1r_qnIOHeDOwAVn7L_8OQnG1tVMeniZDO';
                const link = document.createElement('a');
                link.href = downloadLink;
                link.download = 'Your_Name_CV.pdf'; // optional filename
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download CV
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-theme-orange text-theme-orange hover:bg-theme-orange/10"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
