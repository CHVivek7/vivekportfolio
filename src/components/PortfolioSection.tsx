
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

const PortfolioSection = () => {
  const featuredProjects = [
    {
      title: "Slot Management System",
      description: "A comprehensive system for managing booking slots with dynamic pricing and Razorpay integration.",
      image: "/placeholder.svg",
      technologies: ["Java", "JSP", "MySQL", "JavaScript", "Razorpay API"],
      link: "#portfolio/slot-management"
    },
    {
      title: "Weather Prediction Web App",
      description: "Real-time weather forecasting application with data visualization and location-based services.",
      image: "/placeholder.svg",
      technologies: ["HTML", "CSS", "JavaScript", "Weather API", "Responsive Design"],
      link: "#portfolio/weather-app"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-theme-orange/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-wider text-theme-orange mb-2">MY PROJECTS</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Featured Projects
          </h3>
          <p className="mt-4 text-muted-foreground">
            Explore my recent work and see how I bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title} 
              description={project.description} 
              image={project.image} 
              technologies={project.technologies} 
              link={project.link} 
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-theme-orange hover:bg-theme-orange/90 text-white"
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
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
