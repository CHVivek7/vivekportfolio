
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const skills = [
    { category: "Programming Languages", items: ["Java", "JavaScript", "TypeScript", "Python"] },
    { category: "Frontend", items: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
    { category: "Backend", items: ["Spring Boot", "Node.js", "Express", "REST API", "GraphQL"] },
    { category: "Database", items: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"] },
    { category: "DevOps & Tools", items: ["Git", "Docker", "Jenkins", "AWS", "Jira"] }
  ];

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
              About <span className="text-theme-orange">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn more about my journey, skills, and approach to development
            </p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-theme-darker to-theme-dark rounded-lg border border-theme-orange/20 shadow-lg shadow-theme-orange/5 overflow-hidden">
                  {/* Replace with actual image when available */}
                  <div className="w-full h-full bg-gradient-to-br from-theme-orange/20 to-theme-orange/5 flex items-center justify-center">
                    <span className="text-theme-orange text-6xl font-bold">V</span>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 border border-theme-orange/10 rounded-lg"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-theme-orange/10 rounded-full blur-md"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold">Java Full Stack Developer</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm Chintakrindi Lakshmi Vivek, a passionate Java Full Stack Developer with expertise in building scalable applications and web solutions. With a strong foundation in Java and a comprehensive understanding of both front-end and back-end technologies, I create efficient, robust, and user-friendly applications.
                </p>
                <p>
                  My journey in software development began with a deep interest in creating solutions that make a real difference. Over the years, I've honed my skills in Java, Spring Boot, and various web technologies to deliver high-quality applications that meet client needs.
                </p>
                <p>
                  I approach each project with a focus on clean code, scalability, and user experience. Whether it's developing a complex enterprise application or a simple web tool, I'm committed to delivering solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-12 md:py-16 bg-theme-darker">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Education & Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold inline-block border-b-2 border-theme-orange pb-1">Education</h3>
              
              <div className="space-y-6">
                <div className="bg-theme-dark border border-theme-orange/10 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">BTech in Computer Science</h4>
                    <span className="text-theme-orange text-sm">2018 - 2022</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">University Name</p>
                  <p className="text-muted-foreground">
                    Completed bachelor's degree with focus on software development, algorithms, and database systems.
                  </p>
                </div>
                
                <div className="bg-theme-dark border border-theme-orange/10 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">Advanced Java Certification</h4>
                    <span className="text-theme-orange text-sm">2023</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Institute Name</p>
                  <p className="text-muted-foreground">
                    Specialized training in advanced Java concepts, Spring framework, and enterprise application development.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Experience */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold inline-block border-b-2 border-theme-orange pb-1">Experience</h3>
              
              <div className="space-y-6">
                <div className="bg-theme-dark border border-theme-orange/10 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">Java Full Stack Developer</h4>
                    <span className="text-theme-orange text-sm">2022 - Present</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Company Name</p>
                  <p className="text-muted-foreground">
                    Developing and maintaining web applications using Java, Spring Boot, and React. Collaborating with cross-functional teams to deliver high-quality software solutions.
                  </p>
                </div>
                
                <div className="bg-theme-dark border border-theme-orange/10 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">Web Developer Intern</h4>
                    <span className="text-theme-orange text-sm">2021 - 2022</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Company Name</p>
                  <p className="text-muted-foreground">
                    Assisted in developing and testing web applications, gaining hands-on experience with front-end technologies and database management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-theme-darker border border-theme-orange/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-theme-orange">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="bg-theme-orange/10 text-theme-light px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-theme-darker">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-theme-orange hover:bg-theme-orange/90 text-white">
                <Link to="/contact">Contact Me</Link>
              </Button>
              
              <Button asChild variant="outline" className="border-theme-orange text-theme-orange hover:bg-theme-orange/10">
                <Link to="/portfolio">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
