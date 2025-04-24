import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Car, CheckCircle, Globe, Share2, ChevronRight, Star } from "lucide-react";
import { AiFillTikTok } from "react-icons/ai";
import { scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const id = href.substring(1);
        scrollToSection(id);
      }
    }
  };

  const handleButtonClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <footer className="pt-0">
      {/* Newsletter section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-xl rounded-2xl p-12 max-w-6xl mx-auto relative overflow-hidden">
            <div className="absolute w-80 h-80 -right-20 -top-20 bg-primary/10 rounded-full"></div>
            <div className="absolute w-40 h-40 left-10 -bottom-10 bg-primary/5 rounded-full"></div>
            
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <Badge className="bg-primary/90 text-white mb-3">Đăng ký thông tin</Badge>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Nhận thông tin khuyến mãi và ưu đãi đặc biệt</h3>
                <p className="text-gray-600 mb-6">
                  Đăng ký để nhận thông tin về các ưu đãi, khuyến mãi đặc biệt và tin tức mới nhất từ Carnival Limousine
                </p>
                <div className="flex items-center mt-6 space-x-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-gray-600">Ưu đãi đặc biệt</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-gray-600">Tin tức mới</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg border p-2">
                  <div className="flex flex-col md:flex-row items-center">
                    <input 
                      type="email" 
                      placeholder="Nhập email của bạn" 
                      className="w-full px-4 py-3 focus:outline-none text-gray-700 rounded-lg"
                    />
                    <Button className="md:ml-2 mt-2 md:mt-0 w-full md:w-auto px-6 whitespace-nowrap bg-primary hover:bg-primary/90">
                      Đăng ký ngay
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center md:text-left">
                  Bằng cách đăng ký, bạn đồng ý với <a href="#" className="underline">Chính sách bảo mật</a> của chúng tôi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer */}
      <div className="bg-gray-900 text-white pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Top footer with logo and social links */}
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-12">
            <div className="mb-6 md:mb-0 flex items-center">
              <span className="text-4xl font-bold">
                <span className="text-primary">Carnival</span> <span className="text-white">Limousine</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center text-white">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary transition-colors w-10 h-10 rounded-full flex items-center justify-center text-white">
                <AiFillTikTok className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Main footer columns */}
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-primary" />
                Về Chúng Tôi
              </h4>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Carnival Limousine chuyên cung cấp dịch vụ cho thuê xe Carnival cao cấp với đội ngũ lái xe chuyên nghiệp, xe mới, sang trọng, đáp ứng mọi nhu cầu di chuyển và trải nghiệm đẳng cấp cho khách hàng.
              </p>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center">
                  <div className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Trên 10,000+</p>
                    <p className="text-gray-400 text-sm">Khách hàng tin tưởng</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Car className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Đội xe 30+</p>
                    <p className="text-gray-400 text-sm">Carnival và Limousine</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <Share2 className="h-5 w-5 mr-2 text-primary" />
                Liên Kết
              </h4>
              <ul className="space-y-4">
                {[
                  { label: "Trang Chủ", href: "#" },
                  { label: "Giới Thiệu", href: "#about" },
                  { label: "Dịch Vụ", href: "#services" },
                  { label: "Đội Xe", href: "#fleet" },
                  { label: "Đặt Xe", href: "#booking" },
                  { label: "Khách Hàng", href: "#testimonials" },
                  { label: "Liên Hệ", href: "#contact" }
                ].map(link => (
                  <li key={link.href} className="group">
                    <a 
                      href={link.href} 
                      className="flex items-center text-gray-400 hover:text-primary transition-colors group-hover:translate-x-1"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      <ChevronRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <Car className="h-5 w-5 mr-2 text-primary" />
                Dịch Vụ
              </h4>
              <ul className="space-y-4">
                {[
                  "Thuê xe Carnival có lái",
                  "Đưa đón sân bay",
                  "Tour tham quan",
                  "Thuê xe Limousine có lái",
                  "Đưa đón theo điểm",
                  "Đưa đón sự kiện",
                  "Thuê xe theo tháng",
                  "Đưa đón doanh nghiệp"
                ].map((service, index) => (
                  <li key={index} className="group">
                    <a 
                      href="#services" 
                      className="flex items-center text-gray-400 hover:text-primary transition-colors"
                      onClick={(e) => handleLinkClick(e, "#services")}
                    >
                      <ChevronRight className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                Liên Hệ
              </h4>
              <ul className="space-y-5">
                <li className="flex">
                  <MapPin className="h-5 w-5 mt-1 mr-3 text-primary flex-shrink-0" />
                  <span className="text-gray-400">Ngõ 158 Võ Chí Công, Quận Tây Hồ, Hà Nội</span>
                </li>
                <li className="flex">
                  <Phone className="h-5 w-5 mt-1 mr-3 text-primary flex-shrink-0" />
                  <div className="text-gray-400">
                    <div className="mb-1 hover:text-primary transition-colors">
                      <a href="tel:+84967478123">0967.478.123</a> <span className="text-gray-500">(Carnival)</span>
                    </div>
                  </div>
                </li>
                <li className="flex">
                  <Mail className="h-5 w-5 mt-1 mr-3 text-primary flex-shrink-0" />
                  <a href="mailto:datxe@chothuecarnival.com" className="text-gray-400 hover:text-primary transition-colors">
                    datxe@chothuecarnival.com
                  </a>
                </li>
                <li className="flex">
                  <Clock className="h-5 w-5 mt-1 mr-3 text-primary flex-shrink-0" />
                  <div className="text-gray-400">
                    <div>24/7 - Phục vụ mọi lúc mọi nơi</div>
                  </div>
                </li>
              </ul>
              
              <Button 
                onClick={() => handleButtonClick("booking")}
                className="mt-6 w-full bg-primary hover:bg-primary/90 text-white"
              >
                Đặt Xe Ngay
              </Button>
            </div>
          </div>
          
          {/* Bottom footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Carnival Limousine. Tất cả quyền được bảo lưu.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Điều Khoản Sử Dụng</a>
                <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Chính Sách Bảo Mật</a>
                <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">FAQ</a>
                <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
