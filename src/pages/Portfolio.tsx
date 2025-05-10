
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";

const Portfolio = () => {
  // Categories for filtering
  const categories = ["All", "Web App", "Java", "Frontend", "Backend", "Database"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "Slot Management System",
      description: "A comprehensive system for managing booking slots with dynamic pricing and Razorpay integration. Features include user authentication, admin dashboard, booking management, and payment processing.",
      image: "/placeholder.svg",
      technologies: ["Java", "JSP", "MySQL", "JavaScript", "Razorpay API"],
      link: "/portfolio/slot-management",
      category: ["Web App", "Java", "Backend", "Database"]
    },
    {
      title: "Weather Prediction Web App",
      description: "Real-time weather forecasting application with data visualization and location-based services. The app provides accurate weather information, hourly and daily forecasts, and interactive maps.",
      image: "/placeholder.svg",
      technologies: ["HTML", "CSS", "JavaScript", "Weather API", "Responsive Design"],
      link: "/portfolio/weather-app",
      category: ["Web App", "Frontend"]
    },
    {
      title: "E-commerce Platform",
      description: "Fully-featured online store with product management, cart functionality, and secure checkout. Includes user profiles, order tracking, and admin dashboard for inventory management.",
      image: "/placeholder.svg",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
      link: "/portfolio/ecommerce",
      category: ["Web App", "Java", "Frontend", "Backend", "Database"]
    },
    {
      title: "Task Management System",
      description: "Collaborative task manager allowing teams to organize, assign, and track project tasks. Features include real-time updates, task prioritization, and progress reporting.",
      image: "/placeholder.svg",
      technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
      link: "/portfolio/task-manager",
      category: ["Web App", "Java", "Frontend", "Backend", "Database"]
    },
    {
      title: "Personal Finance Tracker",
      description: "A web application for tracking personal expenses, income, and budgeting. Includes visualization of spending patterns and financial goal setting features.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      link: "/portfolio/finance-tracker",
      category: ["Web App", "Frontend", "Backend", "Database"]
    },
    {
      title: "Blog Content Management System",
      description: "A custom CMS for managing blog content with rich text editing, media management, and SEO optimization tools. Includes user roles and publishing workflow.",
      image: "/placeholder.svg",
      technologies: ["Java", "Spring MVC", "Thymeleaf", "MySQL"],
      link: "/portfolio/blog-cms",
      category: ["Web App", "Java", "Backend", "Database"]
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));

  return (
    <div className="min-h-screen bg-theme-dark text-theme-light">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-theme-orange/5 rounded-full blur-3xl z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-theme-orange">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore my projects and see how I bring ideas to life
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-theme-orange text-white"
                    : "bg-theme-darker text-muted-foreground hover:bg-theme-orange/10 hover:text-theme-orange"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-theme-darker mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can collaborate to bring your ideas to life with effective solutions.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-theme-orange hover:bg-theme-orange/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
