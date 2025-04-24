import { ReactNode, useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  tag: string;
  icon?: ReactNode;
  features: string[];
  onClick: () => void;
}

export default function ServiceCard({ 
  title, 
  description, 
  image, 
  tag, 
  icon, 
  features, 
  onClick 
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image with overlay */}
      <div className="relative overflow-hidden">
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent transition-opacity duration-300",
            isHovered ? "opacity-70" : "opacity-50"
          )}
        ></div>
        <img 
          src={image} 
          alt={title} 
          className={cn(
            "w-full h-56 object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-white font-medium hover:bg-primary/90">
            {tag}
          </Badge>
        </div>
        
        {/* Icon overlay */}
        {icon && (
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md">
            <div className="text-primary">
              {icon}
            </div>
          </div>
        )}
      </div>
      
      {/* Card content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-5 line-clamp-2">{description}</p>
        
        {/* Features section */}
        <div className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-600">
              <div className="flex-shrink-0 mr-2 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="text-primary h-3 w-3" />
              </div>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Card actions */}
        <div className="flex flex-col space-y-2">
          <Button 
            onClick={onClick}
            className="w-full bg-primary hover:bg-primary/90 text-white justify-between"
          >
            <span>Xem Chi Tiết</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}