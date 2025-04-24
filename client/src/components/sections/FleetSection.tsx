import { useState } from "react";
import { Users, Briefcase, Snowflake, Wifi, Wine, ShieldCheck, Sparkles, Sofa, Headset, CheckCircle, Award, Car, Zap, ArrowRight, Battery, Tv, Music, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import carnivalImage1 from "@assets/IMG_0724.jpeg";
import carnivalImage2 from "@assets/IMG_1808.png";
import carnivalImage3 from "@assets/IMG_1809.png";
import limousineImage1 from "@assets/IMG_1813.jpeg";
import limousineImage2 from "@assets/IMG_1814.jpeg";
import limousineImage3 from "@assets/IMG_1815.jpeg";

interface CarFeature {
  icon: React.ReactNode;
  name: string;
}

interface FleetCar {
  id: number;
  name: string;
  type: string;
  pricePerDay: number;
  pricePerHour: number;
  images: string[];
  capacity: number;
  luggage: number;
  description: string;
  features: CarFeature[];
  advantages: string[];
  isVIP?: boolean;
}

export default function FleetSection() {
  const handleBookNow = () => {
    scrollToSection("booking");
  };
  
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fleet: FleetCar[] = [
    {
      id: 1,
      name: "KIA Carnival Signature",
      type: "Limousine 7 chỗ",
      pricePerDay: 1200000,
      pricePerHour: 150000,
      images: [
        carnivalImage1,
        carnivalImage2,
        carnivalImage3
      ],
      capacity: 7,
      luggage: 4,
      description: "Không gian rộng rãi với ghế da cao cấp, cửa sổ trời panorama, màn hình giải trí, cổng sạc USB và nhiều tiện nghi hiện đại khác.",
      features: [
        { icon: <Users className="h-5 w-5" />, name: "7 chỗ ngồi" },
        { icon: <Briefcase className="h-5 w-5" />, name: "4 vali lớn" },
        { icon: <Snowflake className="h-5 w-5" />, name: "Điều hòa 2 vùng" },
        { icon: <Wifi className="h-5 w-5" />, name: "Wifi miễn phí" },
        { icon: <Battery className="h-5 w-5" />, name: "Cổng sạc USB" },
        { icon: <Tv className="h-5 w-5" />, name: "Màn hình giải trí" },
        { icon: <Music className="h-5 w-5" />, name: "Hệ thống âm thanh" },
        { icon: <Zap className="h-5 w-5" />, name: "Động cơ mạnh mẽ" }
      ],
      advantages: [
        "Không gian rộng rãi cho gia đình",
        "Tiện nghi đầy đủ cho chuyến đi dài",
        "Phù hợp cho du lịch gia đình, cơ quan"
      ]
    },
    {
      id: 2,
      name: "KIA Carnival Limousine",
      type: "VIP 4 chỗ",
      pricePerDay: 1800000,
      pricePerHour: 200000,
      images: [
        limousineImage1,
        limousineImage2,
        limousineImage3
      ],
      capacity: 4,
      luggage: 3,
      description: "Phiên bản VIP với 4 ghế thương gia, hệ thống massage, ngả hoàn toàn, minibar, màn hình giải trí 12 inch, cách âm cao cấp.",
      features: [
        { icon: <Users className="h-5 w-5" />, name: "4 ghế VIP" },
        { icon: <Briefcase className="h-5 w-5" />, name: "3 vali lớn" },
        { icon: <Snowflake className="h-5 w-5" />, name: "Điều hòa 3 vùng" },
        { icon: <Wine className="h-5 w-5" />, name: "Minibar cao cấp" },
        { icon: <Sofa className="h-5 w-5" />, name: "Ghế massage" },
        { icon: <Tv className="h-5 w-5" />, name: "Màn hình 12 inch" },
        { icon: <Music className="h-5 w-5" />, name: "Âm thanh vòm" },
        { icon: <Zap className="h-5 w-5" />, name: "Cửa điện tự động" }
      ],
      advantages: [
        "Trải nghiệm đẳng cấp thương gia",
        "Không gian riêng tư tuyệt đối",
        "Phù hợp cho doanh nhân, đối tác VIP"
      ],
      isVIP: true
    }
  ];

  const activeCar = fleet[activeCarIndex];
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === activeCar.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? activeCar.images.length - 1 : prevIndex - 1
    );
  };
  
  const goToCar = (index: number) => {
    setActiveCarIndex(index);
    setCurrentImageIndex(0);
  };
  
  return (
    <section id="fleet" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Đẳng cấp & sang trọng</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Đội Xe Carnival Limousine</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Sở hữu đội xe Carnival mới nhất, sang trọng với đầy đủ tiện nghi hiện đại đảm bảo trải nghiệm thoải mái cho khách hàng.
          </p>
        </div>
        
        {/* Car selector tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            {fleet.map((car, index) => (
              <button
                key={car.id}
                onClick={() => goToCar(index)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm md:text-base font-medium transition-all",
                  activeCarIndex === index 
                    ? "bg-primary text-white shadow-sm" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                )}
              >
                {car.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - car images */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative">
              {/* VIP badge if applicable */}
              {activeCar.isVIP && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-primary text-white px-3 py-1 text-sm font-semibold shadow-lg">
                    <Award className="h-4 w-4 mr-1" /> VIP
                  </Badge>
                </div>
              )}
              
              {/* Image slider */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                {activeCar.images.map((image, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      currentImageIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                  >
                    <img
                      src={image}
                      alt={`${activeCar.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Image navigation */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button 
                    onClick={prevImage}
                    className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {activeCar.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        currentImageIndex === index 
                          ? "bg-white w-8" 
                          : "bg-white/50 hover:bg-white/80"
                      )}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 divide-x bg-gray-50">
                <div className="p-4 text-center">
                  <Car className="h-5 w-5 text-primary mx-auto mb-1" />
                  <div className="text-gray-900 font-medium">{activeCar.type}</div>
                </div>
                <div className="p-4 text-center">
                  <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                  <div className="text-gray-900 font-medium">{activeCar.capacity} Chỗ</div>
                </div>
                <div className="p-4 text-center">
                  <Briefcase className="h-5 w-5 text-primary mx-auto mb-1" />
                  <div className="text-gray-900 font-medium">{activeCar.luggage} Vali</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - car details */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeCar.name}</h3>
              <div className="text-lg text-gray-500 mb-6">{activeCar.type}</div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {activeCar.description}
              </p>
              
              {/* Price section */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex-grow">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary">{formatCurrency(activeCar.pricePerDay)}</span>
                    <span className="text-gray-600">/ngày</span>
                  </div>
                  <div className="text-gray-500 text-sm">
                    Hoặc {formatCurrency(activeCar.pricePerHour)}/giờ
                  </div>
                </div>
                <Button 
                  onClick={handleBookNow}
                  className="bg-primary hover:bg-primary/90 text-white py-2.5 px-6"
                >
                  Đặt Xe Ngay <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Tính năng xe</h4>
                <div className="grid grid-cols-2 gap-3">
                  {activeCar.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <div className="text-primary">{feature.icon}</div>
                      </div>
                      <span>{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Advantages */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Ưu điểm</h4>
                <ul className="space-y-2">
                  {activeCar.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-3 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span className="text-gray-600">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features section */}
        <div className="mt-20 bg-white rounded-xl p-10 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Tại Sao Chọn Dịch Vụ Xe Carnival Của Chúng Tôi?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="text-primary h-8 w-8" />,
                title: "An Toàn Tối Đa",
                description: "Xe được bảo dưỡng định kỳ, đảm bảo an toàn tuyệt đối cho mọi chuyến đi"
              },
              {
                icon: <Sparkles className="text-primary h-8 w-8" />,
                title: "Sạch Sẽ Sáng Bóng",
                description: "Tất cả các xe đều được vệ sinh kỹ lưỡng trước mỗi chuyến đi của khách hàng"
              },
              {
                icon: <Sofa className="text-primary h-8 w-8" />,
                title: "Thoải Mái Tuyệt Đối",
                description: "Ghế da cao cấp với không gian rộng rãi, đem đến cảm giác thoải mái tuyệt đối"
              },
              {
                icon: <Headset className="text-primary h-8 w-8" />,
                title: "Hỗ Trợ 24/7",
                description: "Đội ngũ tư vấn và hỗ trợ khách hàng luôn sẵn sàng phục vụ mọi lúc mọi nơi"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform hover:scale-110">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
