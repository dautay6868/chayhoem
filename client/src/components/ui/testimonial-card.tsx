import { Star, StarHalf } from "lucide-react";

interface Author {
  name: string;
  position: string;
  avatar: string;
}

interface Testimonial {
  id: number;
  content: string;
  author: Author;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="text-[#d4af37] h-4 w-4 fill-[#d4af37]" />);
    }
    
    // Half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="text-[#d4af37] h-4 w-4 fill-[#d4af37]" />);
    }
    
    return stars;
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-4">
        <div className="text-[#d4af37] flex">
          {renderStars(testimonial.rating)}
        </div>
      </div>
      <p className="text-gray-600 italic mb-6">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <img 
          src={testimonial.author.avatar} 
          alt={testimonial.author.name} 
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold text-primary">{testimonial.author.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.author.position}</p>
        </div>
      </div>
    </div>
  );
}
