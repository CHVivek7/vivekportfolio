import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, School, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
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
            <div className="w-full aspect-square max-w-md mx-auto rounded-lg border border-theme-orange/20 shadow-lg shadow-theme-orange/5 overflow-hidden">
              <img 
                src="https://i.postimg.cc/Kj8XqJBB/New-Profile-photo.png" 
                alt="Vivek's Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 border border-theme-orange/10 rounded-lg"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-theme-orange/10 rounded-full blur-md"></div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Hello, I'm Chintakrindi Lakshmi Vivek</h4>
              <p className="text-muted-foreground">
                I'm a passionate Java Full Stack Developer with expertise in building scalable applications and web solutions. With a strong foundation in Java and a comprehensive understanding of both front-end and back-end technologies, I create efficient, robust, and user-friendly applications.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical excellence with user-centered design, ensuring that the applications I build not only function flawlessly but also provide an exceptional user experience.
              </p>
            </div>
            
            <Tabs defaultValue="skills" className="w-full mt-6">
              <TabsList className="flex w-full">
                <TabsTrigger value="skills" className="flex-1 flex items-center gap-2 justify-center">
                  <Code className="h-4 w-4" />
                  <span>Technical Skills</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="flex-1 flex items-center gap-2 justify-center">
                  <School className="h-4 w-4" />
                  <span>Education</span>
                </TabsTrigger>
                <TabsTrigger value="Certifications" className="flex-1 flex items-center gap-2 justify-center">
                  <School className="h-4 w-4" />
                  <span>Certifications</span>
                </TabsTrigger>
                <TabsTrigger value="internships" className="flex-1 flex items-center gap-2 justify-center">
                  <Briefcase className="h-4 w-4" />
                  <span>Internships</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="skills" className="space-y-4 pt-4">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">Java</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">C</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">Python</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">SQL</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">HTML</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">CSS</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">JavaScript</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">J2EE</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">JSP</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">Servlets</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">Java Beans</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">REST API</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">MySQL</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">Linux</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">Windows</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">Git</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">Spring</span>
                  <span className="bg-theme-orange/10 text-theme-orange px-2 py-1 rounded text-sm">Junit</span>
                </div>
              </TabsContent>
              
              <TabsContent value="education" className="space-y-4 pt-4">
                <div className="space-y-3">
                  <div className="bg-theme-orange/5 p-3 rounded-lg">
                    <h5 className="font-semibold">B.Tech in Information Technology</h5>
                    <p className="text-sm text-muted-foreground">Vasireddy Venkatadri Institute of Technology</p>
                    <p className="text-sm text-theme-orange">CGPA: 8.1 (Till date)</p>
                  </div>
                  
                  <div className="bg-theme-orange/5 p-3 rounded-lg">
                    <h5 className="font-semibold">Intermediate</h5>
                    <p className="text-sm text-muted-foreground">Narayana Junior College</p>
                    <p className="text-sm text-theme-orange">Percentage: 89%</p>
                  </div>
                  
                  <div className="bg-theme-orange/5 p-3 rounded-lg">
                    <h5 className="font-semibold">SSC</h5>
                    <p className="text-sm text-muted-foreground">Sri Chaintanya Techno School</p>
                    <p className="text-sm text-theme-orange">Percentage: 97.5%</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="Certifications" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div className="bg-theme-orange/5 p-4 rounded-lg">
                    <h5 className="font-semibold text-theme-orange">Associate Google Cloud Engineer</h5>
                    <p className="text-sm font-medium mb-2">Google Cloud – Issued Jul 2024</p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Demonstrated hands-on ability to deploy, manage, and monitor cloud applications on the Google Cloud Platform.</li>
                      <li>Proficient in configuring cloud solutions, managing storage and network resources, and ensuring security best practices.</li>
                      <li>Validated expertise with real-world scenarios and industry-standard cloud practices.</li>
                    </ul>
                    <a
                      href="https://www.credly.com/badges/645bb82c-f339-41b7-a542-4fb9937855a3/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-3 px-4 py-2 rounded bg-theme-orange text-white font-semibold hover:bg-theme-orange/80 transition-colors">
                        View Certificate
                      </button>
                    </a>
                  </div>
              
                  <div className="bg-theme-orange/5 p-4 rounded-lg">
                    <h5 className="font-semibold text-theme-orange">Programming in Java</h5>
                    <p className="text-sm font-medium mb-2">NPTEL – Issued Mar 2024</p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Completed a comprehensive course covering Java fundamentals, OOP concepts, and advanced programming techniques.</li>
                      <li>Applied core Java skills in practical assignments, mini-projects, and online assessments.</li>
                      <li>Certified by India’s premier online learning platform for technical education (NPTEL).</li>
                    </ul>
                    <a
                      href="https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs43/Course/NPTEL24CS43S106990319830344987.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-3 px-4 py-2 rounded bg-theme-orange text-white font-semibold hover:bg-theme-orange/80 transition-colors">
                        View Certificate
                      </button>
                    </a>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="internships" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div className="bg-theme-orange/5 p-4 rounded-lg">
                    <h5 className="font-semibold text-theme-orange">Java Full Stack Developer Intern</h5>
                    <p className="text-sm font-medium mb-2">Eduskills Academy – Sep 2024 to Nov 2024</p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Developed enterprise-level web applications using Java, JSP, and MySQL as part of a 10-week intensive program.</li>
                      <li>Implemented responsive front-end interfaces with modern JavaScript practices and optimized database queries.</li>
                      <li>Collaborated with senior developers to troubleshoot complex issues across the full stack.</li>
                      <li>Received recognition for outstanding performance and innovative solutions.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-theme-orange/5 p-4 rounded-lg">
                    <h5 className="font-semibold text-theme-orange">Android Development Intern</h5>
                    <p className="text-sm font-medium mb-2">Google for Developers – Jan 2024 to Mar 2024</p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>Participated in a prestigious Google for Developers-supported Android Virtual Internship program.</li>
                      <li>Created and optimized UI components using Android Studio and Material Design principles.</li>
                      <li>Implemented RESTful API integrations and local data persistence solutions.</li>
                      <li>Achieved the highest performance rating for technical skills and project delivery.</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
