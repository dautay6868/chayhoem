import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

// Import hình ảnh
import img1813 from "@assets/IMG_1813.jpeg";
import img1814 from "@assets/IMG_1814.jpeg";
import img1815 from "@assets/IMG_1815.jpeg";
import img1816 from "@assets/IMG_1816.jpeg";
import img1817 from "@assets/IMG_1817.jpeg";

export default function LimousineServiceSection() {
  const handleClick = () => {
    scrollToSection("booking");
  };

  const features = [
    "Thiết kế nội thất cao cấp: ghế da massage, màn hình giải trí, đèn trần LED, hệ thống âm thanh sống động",
    "Rộng rãi, tiện nghi, tạo cảm giác như khoang hạng thương gia di động",
    "Kết nối WiFi, sạc điện thoại, bàn làm việc mini – phù hợp cho cả công tác lẫn nghỉ ngơi",
    "Hệ thống cách âm và giảm xóc tối ưu – di chuyển êm ái trên mọi cung đường"
  ];

  const services = [
    "Lái xe lịch sự, thông thạo đường, phục vụ chu đáo",
    "Đưa đón đúng giờ – linh hoạt theo yêu cầu khách hàng"
  ];

  const useCases = [
    "Đưa đón sân bay – khách sạn – hội nghị",
    "Tour du lịch cao cấp",
    "Đám cưới – sự kiện – sinh nhật",
    "Hợp đồng dài hạn cho doanh nghiệp, chuyên gia"
  ];

  const offers = [
    "Giá tốt nhất thị trường cho dịch vụ cao cấp",
    "Xe đời mới, bảo dưỡng định kỳ, luôn sạch sẽ – sẵn sàng phục vụ",
    "Hợp đồng rõ ràng – thủ tục nhanh chóng"
  ];

  // Mảng hình ảnh gallery
  const galleryImages = [
    { src: img1813, alt: "Nội thất Limousine sang trọng" },
    { src: img1814, alt: "Dịch vụ Limousine chuyên nghiệp" },
    { src: img1815, alt: "Limousine cao cấp" },
    { src: img1816, alt: "Thiết kế Limousine đẳng cấp" },
    { src: img1817, alt: "Limousine đưa đón VIP" }
  ];

  const contactInfo = [
    { icon: <Phone className="h-5 w-5 text-primary" />, text: "0822.212.121", href: "tel:0822212121" },
    { icon: <Mail className="h-5 w-5 text-primary" />, text: "datxe@chothuecarnival.com", href: "mailto:datxe@chothuecarnival.com" },
    { icon: <MapPin className="h-5 w-5 text-primary" />, text: "Ngõ 158 Võ chí Công, Tây Hồ, Hà Nội", href: "#" },
    { icon: <Clock className="h-5 w-5 text-primary" />, text: "Hoạt động 24/7", href: "#" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Tiêu đề chính */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          CHO THUÊ XE <span className="text-primary">LIMOUSINE</span> CÓ LÁI
        </h1>
        <h2 className="text-xl md:text-2xl text-center font-medium mb-12 text-gray-600">
          ĐẲNG CẤP DOANH NHÂN, TRẢI NGHIỆM 5 SAO TRÊN MỌI HÀNH TRÌNH!
        </h2>

        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden mb-12 shadow-xl">
          <img 
            src={img1817} 
            alt="Limousine cao cấp" 
            className="w-full h-[40vh] md:h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Đẳng cấp và Sự thoải mái</h3>
            <p className="text-white/90 mb-4 md:text-lg max-w-2xl">
              Trải nghiệm cảm giác sang trọng và đẳng cấp cùng dịch vụ Limousine cao cấp
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
            Bạn cần một phương tiện sang trọng để đưa đón đối tác, khách VIP, chuyên gia nước ngoài, hay đơn giản là muốn tận hưởng chuyến đi thật thoải mái, riêng tư và tiện nghi?
          </p>
          <p className="text-xl md:text-2xl font-semibold">
            Dịch vụ cho thuê xe <span className="text-primary">Limousine</span> có lái chính là lựa chọn lý tưởng dành cho bạn!
          </p>
        </div>

        {/* Nội dung chính - Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Hình ảnh nội thất */}
          <div className="rounded-xl overflow-hidden shadow-lg h-full">
            <img 
              src={img1813} 
              alt="Nội thất Limousine" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Điểm nổi bật */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-primary mr-2">Điểm nổi bật</span> của dòng xe Limousine
            </h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dịch vụ chuyên nghiệp */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-primary mr-2">Dịch vụ chuyên nghiệp</span> - Tài xế tận tâm
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
            
            <h4 className="text-xl font-semibold mt-8 mb-4">Phù hợp với đa dạng nhu cầu:</h4>
            <ul className="space-y-4">
              {useCases.map((useCase, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hình ảnh dịch vụ */}
          <div className="rounded-xl overflow-hidden shadow-lg h-full">
            <img 
              src={img1814} 
              alt="Dịch vụ Limousine" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Ưu đãi đặc biệt */}
        <div className="mb-16 bg-gray-50 p-8 rounded-2xl shadow-inner">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Ưu đãi đặc biệt</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <CheckCircle className="h-8 w-8 text-primary shrink-0 mr-3" />
                </div>
                <p className="text-gray-700">{offer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery hình ảnh */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-primary">Hình ảnh</span> xe Limousine
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

        {/* Hình ảnh lớn */}
        <div className="rounded-xl overflow-hidden shadow-xl mb-16 h-[50vh]">
          <img 
            src={img1816} 
            alt="Limousine đẳng cấp" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Phần liên hệ */}
        <div className="bg-gray-100 p-8 md:p-12 rounded-2xl shadow-md mb-16">
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
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-primary">XE LIMOUSINE</span> – KHÔNG CHỈ LÀ PHƯƠNG TIỆN, MÀ LÀ TRẢI NGHIỆM!
          </h2>
        </div>
      </div>
    </section>
  );
}