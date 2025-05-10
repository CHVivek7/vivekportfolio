import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-10 px-4 md:px-0">
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-theme-orange/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-theme-orange/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
        <div className="space-y-6 md:space-y-8">
          <div className="flex flex-col gap-3 md:gap-4">
            <h2 className="text-sm sm:text-base md:text-lg tracking-wider font-medium text-theme-orange animate-fade-in">HI, I'M CHINTAKRINDI LAKSHMI Vivek</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              
              <span className="block">
                <span className="text-theme-orange">JAVA</span> FULL STACK
              </span>
              <span className="title-stroke">DEVELOPER</span>
            </h1>
          </div>
          
          
          
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{
          animationDelay: "0.6s"
        }}>
            <Button asChild size="lg" className="bg-theme-orange hover:bg-theme-orange/90 text-white">
              <Link to="/portfolio">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-theme-orange text-theme-orange hover:bg-theme-orange/10">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center items-center animate-slide-in-from-right">
          <div className="relative">
            {/* Profile image placeholder - replace with actual image when available */}
            <div className="w-[350px] h-[350px] rounded-full overflow-hidden border-4 border-theme-orange/30 shadow-lg shadow-theme-orange/20">
              {/* This gradient circle acts as a placeholder for the profile image */}
              <div className="w-full h-full bg-gradient-to-br from-theme-orange/80 via-theme-orange/50 to-theme-orange/10"></div>
            </div>
            
            {/* Decorative circle */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 border-2 border-dashed border-theme-orange/20 rounded-full animate-spin-slow"></div>
            
            {/* Experience badge */}
            <div className="absolute top-5 -right-10 bg-theme-darker px-4 py-2 rounded-full border border-theme-orange/20 shadow-lg">
              <span className="text-sm font-medium text-theme-orange">Java Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;