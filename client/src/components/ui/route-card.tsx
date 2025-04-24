import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

interface RoutePrice {
  carnival7: number;
  carnivalVIP4: number;
}

interface Route {
  id: number;
  title: string;
  tag: string;
  distance: string;
  duration: string;
  prices: RoutePrice;
}

interface RouteCardProps {
  route: Route;
  onBookNow: () => void;
}

export default function RouteCard({ route, onBookNow }: RouteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-primary font-montserrat">{route.title}</h3>
          <span className="bg-[#d4af37] text-white text-sm py-1 px-3 rounded-full">{route.tag}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="text-[#d4af37] mr-2 h-4 w-4" />
          <span>Khoảng cách: {route.distance}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Clock className="text-[#d4af37] mr-2 h-4 w-4" />
          <span>Thời gian: {route.duration}</span>
        </div>
        <div className="border-t border-gray-200 my-4 pt-4">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Carnival 7 chỗ:</span>
            <span className="text-[#d4af37] font-bold">{formatCurrency(route.prices.carnival7)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Carnival VIP 4 chỗ:</span>
            <span className="text-[#d4af37] font-bold">{formatCurrency(route.prices.carnivalVIP4)}</span>
          </div>
        </div>
        <Button 
          onClick={onBookNow}
          className="w-full bg-primary hover:bg-blue-800 text-white"
        >
          Đặt Xe Ngay
        </Button>
      </div>
    </div>
  );
}
