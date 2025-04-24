import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RouteCard from "@/components/ui/route-card";
import { scrollToSection } from "@/lib/utils";

const routes = [
  {
    id: 1,
    title: "Hà Nội - Hạ Long",
    tag: "Phổ biến",
    distance: "160 km",
    duration: "2.5 - 3 giờ",
    prices: {
      carnival7: 2500000,
      carnivalVIP4: 3200000
    }
  },
  {
    id: 2,
    title: "Hà Nội - Ninh Bình",
    tag: "Yêu thích",
    distance: "100 km",
    duration: "2 giờ",
    prices: {
      carnival7: 1800000,
      carnivalVIP4: 2500000
    }
  },
  {
    id: 3,
    title: "Hà Nội - Sapa",
    tag: "Du lịch",
    distance: "320 km",
    duration: "5 - 6 giờ",
    prices: {
      carnival7: 4500000,
      carnivalVIP4: 5800000
    }
  }
];

export default function RoutesSection() {
  const handleBookNow = () => {
    scrollToSection("booking");
  };

  return (
    <section 
      id="routes" 
      className="py-16 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1553697388-94e804e2f0f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80&brightness=-10')"
      }}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white font-montserrat mb-2">Tuyến Đường Phổ Biến</h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Chúng tôi cung cấp dịch vụ xe Carnival trên nhiều tuyến đường phổ biến với mức giá cạnh tranh và chất lượng hàng đầu.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {routes.map(route => (
            <RouteCard 
              key={route.id} 
              route={route} 
              onBookNow={handleBookNow}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="bg-[#d4af37] hover:bg-amber-500 text-white rounded-full px-8 py-6 font-bold shadow-md"
          >
            Xem Tất Cả Tuyến Đường <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
