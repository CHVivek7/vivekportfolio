
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Github, Linkedin, AlertCircle, Check } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const { toast } = useToast();

  // Initialize EmailJS
  const initEmailJs = () => {
    emailjs.init("v5-coqAAeci9IUKUE");
  };

  // Call init function
  initEmailJs();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");
    
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        "service_3m95idl", // Service ID
        "template_zppcrfl", // Template ID
        templateParams
      );
      
      console.log("Email sent successfully:", response);
      
      // Show success toast
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
    } catch (error) {
      console.error("Failed to send email:", error);
      setFormError("Failed to send message. Please try again later.");
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
          {/* Contact info section */}
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
                    <a href="https://www.linkedin.com/in/chintakrindi-lakshmi-vivek" target="_blank" rel="noopener noreferrer" className="text-theme-orange hover:underline">
                      LinkedIn
                    </a>
                    <a href="https://github.com/CHVivek7" target="_blank" rel="noopener noreferrer" className="text-theme-orange hover:underline">
                      GitHub
                    </a>
                    <a href="https://leetcode.com/u/Vivek_1225/" target="_blank" rel="noopener noreferrer" className="text-theme-orange hover:underline">
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
          
          {/* Contact form section */}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              {formError && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{formError}</span>
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-theme-orange hover:bg-theme-orange/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
