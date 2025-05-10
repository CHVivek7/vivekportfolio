
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-theme-orange/10 bg-theme-darker p-6 transition-all hover:border-theme-orange/30 hover:shadow-md hover:shadow-theme-orange/5",
        className
      )}
    >
      <div className="mb-4 text-theme-orange">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-theme-light group-hover:text-theme-orange transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
      
      {/* Background Gradient */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-theme-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}

export default ServiceCard;
