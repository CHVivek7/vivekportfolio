
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is a placeholder for the actual form submission
    // In a real application, you would send this data to a server
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll respond as soon as possible.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-theme-darker relative">
      {/* Background Elements */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-theme-orange/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-wider text-theme-orange mb-2">GET IN TOUCH</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Let's Work Together
          </h3>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold">Contact Information</h4>
            <p className="text-muted-foreground">
              Feel free to reach out to discuss your project requirements or any questions you might have.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-theme-orange/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-theme-orange" />
                </div>
                <div>
                  <h5 className="font-medium">Phone</h5>
                  <a href="tel:+917989200801" className="text-theme-orange hover:underline">
                    (+91) 7989200801
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-theme-orange/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-theme-orange" />
                </div>
                <div>
                  <h5 className="font-medium">Email</h5>
                  <a href="mailto:vivekch1225@gmail.com" className="text-theme-orange hover:underline">
                    vivekch1225@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-theme-orange/10 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-theme-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium">Social Profiles</h5>
                  <div className="flex space-x-3 mt-1">
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-theme-orange hover:underline">
                      LinkedIn
                    </a>
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-theme-orange hover:underline">
                      GitHub
                    </a>
                    <a href="https://leetcode.com/your-leetcode" target="_blank" rel="noopener noreferrer" className="text-theme-orange hover:underline">
                      LeetCode
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-2xl font-bold mb-4">Let's Connect</h4>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>
          </div>
          
          <div className="bg-theme-dark border border-theme-orange/10 rounded-lg p-6 md:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-theme-darker border-theme-orange/20 focus:border-theme-orange focus-visible:ring-theme-orange"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-theme-darker border-theme-orange/20 focus:border-theme-orange focus-visible:ring-theme-orange"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-theme-darker border-theme-orange/20 focus:border-theme-orange focus-visible:ring-theme-orange"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-theme-darker border-theme-orange/20 focus:border-theme-orange focus-visible:ring-theme-orange"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-theme-orange hover:bg-theme-orange/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
