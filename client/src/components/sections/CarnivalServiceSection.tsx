import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock, Award, Users, Plane } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Import hình ảnh
import img1808 from "@assets/IMG_1808.png";
import img1809 from "@assets/IMG_1809.png";
import img0723 from "@assets/IMG_0723.jpeg";
import img1806 from "@assets/IMG_1806.jpeg";
import img1807 from "@assets/IMG_1807.jpeg";
import img1810 from "@assets/IMG_1810.jpeg";
import img1811 from "@assets/IMG_1811.jpeg";
import img1812 from "@assets/IMG_1812.jpeg";

export default function CarnivalServiceSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const handleClick = () => {
    scrollToSection("booking");
  };
  
  // Danh sách các mục lọc dịch vụ
  const categories = [
    { id: "all", name: "Tất cả", icon: <Award className="mr-2 h-4 w-4" /> },
    { id: "business", name: "Doanh nghiệp", icon: <MapPin className="mr-2 h-4 w-4" /> },
    { id: "travel", name: "Du lịch", icon: <Users className="mr-2 h-4 w-4" /> },
    { id: "airport", name: "Sân bay", icon: <Plane className="mr-2 h-4 w-4" /> }
  ];

  const benefits = [
    "Ngoại thất hiện đại, mạnh mẽ, sang trọng",
    "Nội thất rộng rãi, đẳng cấp như xe hạng thương gia",
    "Ghế da, điều hòa 3 vùng, cửa lùa điện tiện lợi",
    "Hệ thống an toàn và giải trí đầy đủ, mang đến sự thoải mái trên mọi hành trình"
  ];

  const services = [
    "Tài xế lịch sự, đúng giờ, am hiểu đường sá",
    "Đưa đón tận nơi: sân bay, khách sạn, hội nghị, tour du lịch",
    "Phục vụ mọi nhu cầu: cưới hỏi, sự kiện, đi tỉnh, đưa đón chuyên gia…"
  ];

  const offers = [
    "Giá cạnh tranh theo giờ/ngày",
    "Giảm giá khi thuê dài hạn",
    "Hợp đồng nhanh chóng – linh hoạt theo nhu cầu"
  ];

  const commitments = [
    "Xe sạch sẽ, bảo dưỡng định kỳ",
    "Đón đúng giờ – phục vụ tận tâm – an toàn tuyệt đối"
  ];

  // Mảng hình ảnh gallery
  const galleryImages = [
    { src: img1808, alt: "Nội thất rộng rãi Kia Carnival" },
    { src: img1809, alt: "Bảng đồng hồ điện tử Kia Carnival" },
    { src: img0723, alt: "Kia Carnival ngoại thất" },
    { src: img1807, alt: "Kia Carnival dịch vụ cao cấp" },
    { src: img1810, alt: "Tính năng hiện đại Kia Carnival" },
    { src: img1811, alt: "Kia Carnival sang trọng" },
    { src: img1812, alt: "Kia Carnival cho thuê" },
    { src: img1806, alt: "Kia Carnival chất lượng" },
  ];

  const contactInfo = [
    { icon: <Phone className="h-5 w-5 text-primary" />, text: "0967.478.123", href: "tel:0967478123" },
    { icon: <Mail className="h-5 w-5 text-primary" />, text: "datxe@chothuecarnival.com", href: "mailto:datxe@chothuecarnival.com" },
    { icon: <MapPin className="h-5 w-5 text-primary" />, text: "Ngõ 158 Võ chí Công, Tây Hồ, Hà Nội", href: "#" },
    { icon: <Clock className="h-5 w-5 text-primary" />, text: "Hoạt động 24/7", href: "#" }
  ];

  // Dịch vụ cho từng danh mục
  const servicesByCategory = {
    all: [
      { 
        title: "Thuê xe đi họp/hội nghị",
        description: "Chuyên nghiệp, đúng giờ, tạo ấn tượng với đối tác",
        category: "business" 
      },
      { 
        title: "Đưa đón sân bay",
        description: "Theo dõi chuyến bay, đón đúng giờ, hỗ trợ hành lý",
        category: "airport" 
      },
      { 
        title: "Tour du lịch",
        description: "Thoải mái khám phá các địa điểm với lộ trình linh hoạt",
        category: "travel" 
      },
      { 
        title: "Đưa đón khách VIP",
        description: "Đẳng cấp, riêng tư, an toàn tuyệt đối",
        category: "business" 
      },
      { 
        title: "Thuê xe theo ngày",
        description: "Linh hoạt, tiết kiệm cho chuyến đi dài ngày",
        category: "travel" 
      },
      { 
        title: "Đón tiễn sân bay hàng ngày",
        description: "Dịch vụ 24/7, giá cạnh tranh, đúng giờ tuyệt đối",
        category: "airport" 
      }
    ]
  };

  // Lọc dịch vụ theo danh mục được chọn
  const filteredServices = selectedCategory === 'all' 
    ? servicesByCategory.all 
    : servicesByCategory.all.filter(service => service.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Tiêu đề chính */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          DỊCH VỤ CHO THUÊ XE <span className="text-primary">KIA CARNIVAL</span> CÓ LÁI
        </h1>
        <h2 className="text-xl md:text-2xl text-center font-medium mb-8 text-gray-600">
          SANG TRỌNG, ĐẲNG CẤP, PHỤC VỤ CHUYÊN NGHIỆP!
        </h2>
        
        {/* Phần lọc dịch vụ */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="text-primary">ĐA DẠNG DỊCH VỤ</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full flex items-center transition-all",
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Dịch vụ đã lọc */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-left border border-gray-100"
              >
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          {/* Ưu đãi đặc biệt */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary/10 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary"><path d="M6 12h12"/><path d="m12 18 6-6-6-6"/></svg>
              </span>
              <h4 className="text-xl font-bold text-amber-800">Ưu đãi đặc biệt</h4>
            </div>
            <p className="text-amber-800 font-medium">Giảm 20% cho các chuyến đi dài ngày (từ 3 ngày trở lên) khi đặt trước 7 ngày.</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden mb-12 shadow-xl">
          <img 
            src={img0723} 
            alt="Kia Carnival" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Khẳng định đẳng cấp</h3>
            <p className="text-white/90 mb-4 md:text-lg max-w-2xl">
              Trải nghiệm đẳng cấp và sang trọng cùng đội xe Carnival hiện đại
            </p>
            <Button 
              onClick={handleClick}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-5"
            >
              Đặt Xe Ngay <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Giới thiệu */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <p className="text-lg md:text-xl mb-6">
            Bạn đang tìm kiếm một chiếc xe 7 chỗ cao cấp, rộng rãi, vận hành êm ái để phục vụ công việc, đưa đón khách hàng, hay đi du lịch cùng gia đình?
          </p>
          <p className="text-xl md:text-2xl font-semibold">
            <span className="text-primary">KIA CARNIVAL</span> chính là sự lựa chọn hoàn hảo dành cho bạn!
          </p>
        </div>

        {/* Nội dung chính - Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Hình ảnh nội thất */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={img1808} 
              alt="Nội thất Kia Carnival" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Tại sao chọn Kia Carnival */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-primary mr-2">Tại sao nên chọn</span> Kia Carnival?
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dịch vụ cho thuê */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-primary mr-2">Dịch vụ cho thuê</span> kèm tài xế chuyên nghiệp
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hình ảnh bảng điều khiển */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={img1809} 
              alt="Bảng điều khiển Kia Carnival" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Ưu đãi và Cam kết */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 bg-gray-50 p-8 rounded-2xl shadow-inner">
          {/* Ưu đãi */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Ưu đãi hấp dẫn</h3>
            <ul className="space-y-4">
              {offers.map((offer, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">{offer}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cam kết */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Cam kết của chúng tôi</h3>
            <ul className="space-y-4">
              {commitments.map((commitment, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">{commitment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery hình ảnh */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-primary">Hình ảnh</span> xe Kia Carnival
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg h-64">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hình ảnh phụ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-xl overflow-hidden shadow-lg h-80">
            <img 
              src={img1811} 
              alt="Kia Carnival cho thuê" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-80">
            <img 
              src={img1812} 
              alt="Dịch vụ Kia Carnival" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Phần liên hệ */}
        <div className="bg-gray-100 p-8 md:p-12 rounded-2xl shadow-md">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Liên hệ ngay để đặt xe</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  className="flex items-center justify-center sm:justify-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {item.icon}
                  <span className="ml-3 text-gray-800">{item.text}</span>
                </a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                onClick={handleClick}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl"
              >
                Đặt Xe Ngay <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-6 text-lg font-bold"
              >
                <a href="https://www.facebook.com/share/1AD4TD6LZW/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Fanpage Facebook <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Slogan cuối */}
        <div className="text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-primary">KIA CARNIVAL</span> – KHẲNG ĐỊNH PHONG CÁCH, ĐỒNG HÀNH CÙNG ĐẲNG CẤP CỦA BẠN!
          </h2>
        </div>
      </div>
    </section>
  );
}