
import ServiceCard from "./ServiceCard";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-theme-darker relative">
      {/* Background Elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-theme-orange/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-wider text-theme-orange mb-2">MY SERVICES</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Expert Solutions for Your Digital Needs
          </h3>
          <p className="mt-4 text-muted-foreground">
            I offer comprehensive development services tailored to meet your specific requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <ServiceCard 
            title="Web Application Development" 
            description="Custom web applications built with Java, Spring Boot, and React. Focused on scalability, security, and performance." 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>} 
          />
          
          <ServiceCard 
            title="Full Stack Development" 
            description="End-to-end development services covering both front-end and back-end technologies. Creating cohesive and integrated solutions." 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>} 
          />
          
          <ServiceCard 
            title="Database Design & Optimization" 
            description="Expert database design, implementation, and optimization services. Ensuring efficient data management and retrieval." 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>} 
          />
          
          <ServiceCard 
            title="API Development & Integration" 
            description="Building robust APIs and integrating third-party services. Creating seamless connections between different systems." 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>} 
          />
          
          <ServiceCard 
            title="E-commerce Solutions" 
            description="Custom e-commerce platforms with payment integrations. Building secure and user-friendly online shopping experiences." 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>} 
          />
          
          <ServiceCard 
            title="Maintenance & Support" 
            description="Ongoing maintenance and support for existing applications. Ensuring continued functionality and implementing updates as needed." 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>} 
          />
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
            Get A Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
