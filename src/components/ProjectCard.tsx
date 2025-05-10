import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  className?: string;
}
export function ProjectCard({
  title,
  description,
  image,
  technologies,
  link,
  className
}: ProjectCardProps) {
  return <div className={cn("group overflow-hidden rounded-lg border border-theme-orange/10 bg-theme-darker transition-all hover:border-theme-orange/30 hover:shadow-md hover:shadow-theme-orange/5", className)}>
      <div className="relative aspect-video overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-theme-orange/20 to-theme-dark/80" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-theme-darker to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-theme-orange transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => <span key={index} className="bg-theme-orange/10 text-theme-orange px-2 py-0.5 rounded text-xs">
              {tech}
            </span>)}
        </div>
        
        <Button asChild variant="outline" className="w-full border-theme-orange text-theme-orange hover:bg-theme-orange/10">
          
        </Button>
      </div>
    </div>;
}
export default ProjectCard;