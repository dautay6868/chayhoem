import { Phone, Mail, Clock, MapPin, Facebook, Instagram } from "lucide-react";
import LanguageSelector from "@/components/ui/language-selector";
import { Button } from "@/components/ui/button";

export default function Header() {

  return (
    <header className="bg-white" id="header">
      {/* Top bar with contact info */}
      <div className="bg-gray-50 border-b border-gray-100 hidden md:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm text-gray-700">0967.478.123</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm text-gray-700">datxe@chothuecarnival.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm text-gray-700">Ngõ 158 Võ chí Công, Tây Hồ, Hà Nội</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm text-gray-700">24/7 - Phục vụ mọi lúc</span>
              </div>
              <div className="flex items-center space-x-2">
                <a href="#" className="text-gray-500 hover:text-primary transition">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition">
                  <Instagram className="h-4 w-4" />
                </a>
                <div className="border-l border-gray-300 h-4 mx-2"></div>
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header with logo */}
      <div className="shadow-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="flex justify-center md:justify-between items-center">
            <div className="flex items-center">
              <a href="#" className="text-2xl md:text-4xl font-bold font-montserrat relative group tracking-tight">
                <span className="whitespace-nowrap relative z-10 flex flex-col md:flex-row items-center md:items-baseline">
                  <span className="bg-gradient-to-r from-amber-500 via-primary to-amber-500 bg-clip-text text-transparent uppercase relative">
                    CHO THUÊ XE
                    <span className="absolute -right-1.5 -top-1.5 h-2 w-2 bg-amber-300 rounded-full animate-pulse hidden md:block"></span>
                  </span>
                  <span className="uppercase mt-1 md:mt-0 ml-0 md:ml-2 text-gray-800 flex items-baseline justify-center relative">
                    <span className="bg-gradient-to-br from-primary/90 to-amber-500 p-0.5 rounded-sm text-white mx-1.5">CARNIVAL</span>
                    <span className="text-primary font-black transform -rotate-12 scale-125 inline-block animate-pulse mx-1.5">&</span> 
                    <span className="bg-gradient-to-br from-amber-500 to-primary p-0.5 rounded-sm text-white mx-1.5">LIMOUSINE</span>
                    <span className="absolute -right-5 top-0 text-xs text-amber-500 font-light animate-bounce">VIP</span>
                  </span>
                </span>
                <div className="absolute -bottom-1.5 left-0 w-0 h-1.5 bg-gradient-to-r from-primary to-amber-400 group-hover:w-full transition-all duration-500"></div>
                <div className="absolute -bottom-4 left-0 w-full overflow-hidden h-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-3 h-3 bg-amber-300 rounded-full animate-ping absolute"></div>
                  <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute left-1/2"></div>
                  <div className="w-3 h-3 bg-amber-300 rounded-full animate-ping absolute right-0"></div>
                </div>
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-3">
              <a href="tel:+84967478123" className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-primary/20 bg-gradient-to-r from-amber-50 to-transparent">
                <Phone className="h-4 w-4 text-primary animate-pulse" />
                <span className="font-medium text-primary">0967.478.123</span>
              </a>
              <Button 
                onClick={() => window.location.href="#booking"} 
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
              >
                Đặt Xe Ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile contact info can be shown in the footer or the mobile menu */}
    </header>
  );
}
