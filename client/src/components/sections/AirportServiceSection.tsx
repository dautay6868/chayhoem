import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

// Import hình ảnh
import airportImg1 from "@assets/IMG_1806.jpeg";
import airportImg2 from "@assets/IMG_1827.jpeg";
import airportImg3 from "@assets/IMG_1828.jpeg";
import airportImg4 from "@assets/IMG_1829.jpeg";
import airportImg5 from "@assets/IMG_1826.webp";

export default function AirportServiceSection() {
  const handleClick = () => {
    scrollToSection("booking");
  };

  const reasons = [
    "Xe đời mới, nội thất sang trọng, sạch sẽ, điều hòa mát lạnh",
    "Tài xế lịch sự, đúng giờ, hỗ trợ hành lý, biết tiếng Anh cơ bản",
    "Có đón bảng tên tại ga quốc tế theo yêu cầu",
    "Theo dõi chuyến bay, cập nhật giờ hạ cánh – linh hoạt điều chỉnh giờ đón",
    "Dịch vụ riêng tư, an toàn tuyệt đối, không ghép khách, không lo trễ giờ"
  ];

  const suitableFor = [
    "Đưa đón cá nhân, gia đình",
    "Đưa đón khách hàng VIP, đối tác, chuyên gia",
    "Đưa đón nhân sự công ty, đoàn du lịch"
  ];

  const pricing = [
    "Báo giá nhanh – đặt xe dễ dàng qua Zalo/Hotline",
    "Có hóa đơn VAT, hợp đồng cho công ty nếu cần",
    "Đặt trước để được giá ưu đãi và phục vụ đúng giờ!"
  ];

  // Mảng hình ảnh gallery
  const galleryImages = [
    { src: airportImg1, alt: "Đưa đón sân bay chuyên nghiệp" },
    { src: airportImg2, alt: "Dịch vụ đưa đón sân bay" },
    { src: airportImg3, alt: "Xe đưa đón sân bay" },
    { src: airportImg4, alt: "Dịch vụ sân bay cao cấp" },
    { src: airportImg5, alt: "Xe đưa đón sân bay" }
  ];

  const contactInfo = [
    { icon: <Phone className="h-5 w-5 text-primary" />, text: "0967.478.123", href: "tel:0967478123" },
    { icon: <Mail className="h-5 w-5 text-primary" />, text: "datxe@chothuecarnival.com", href: "mailto:datxe@chothuecarnival.com" },
    { icon: <MapPin className="h-5 w-5 text-primary" />, text: "Ngõ 158 Võ Chí Công, Quận Tây Hồ, Hà Nội", href: "#" },
    { icon: <Clock className="h-5 w-5 text-primary" />, text: "Hoạt động 24/7", href: "#" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Tiêu đề chính */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          DỊCH VỤ <span className="text-primary">ĐƯA ĐÓN SÂN BAY</span> CÓ LÁI
        </h1>
        <h2 className="text-xl md:text-2xl text-center font-medium mb-12 text-gray-600">
          ĐÚNG GIỜ, LỊCH SỰ, XE ĐỜI MỚI – TRẢI NGHIỆM KHÁC BIỆT NGAY TỪ CHUYẾN ĐI ĐẦU TIÊN!
        </h2>

        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden mb-12 shadow-xl">
          <img 
            src={airportImg1} 
            alt="Đưa đón sân bay chuyên nghiệp" 
            className="w-full h-[40vh] md:h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Đưa đón sân bay chuyên nghiệp</h3>
            <p className="text-white/90 mb-4 md:text-lg max-w-2xl">
              Luôn đúng giờ, phục vụ tận tâm và chuyên nghiệp
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
            Bạn cần một chuyến xe đón tiễn sân bay an toàn, đúng giờ, phục vụ tận tâm và chuyên nghiệp?
          </p>
          <p className="text-lg md:text-xl mb-6">
            Dù là khách công tác, du lịch, chuyên gia nước ngoài hay người thân trong gia đình, dịch vụ đưa đón sân bay bằng xe riêng có lái luôn sẵn sàng phục vụ bạn 24/7!
          </p>
        </div>

        {/* Nội dung chính - Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Hình ảnh dịch vụ */}
          <div className="rounded-xl overflow-hidden shadow-lg h-full">
            <img 
              src={airportImg3} 
              alt="Xe đưa đón sân bay" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lý do nên chọn */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-primary mr-2">Lý do nên chọn</span> dịch vụ đưa đón sân bay của chúng tôi
            </h3>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phù hợp cho */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-primary mr-2">Phù hợp cho</span>
            </h3>
            <ul className="space-y-4 mb-8">
              {suitableFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-primary mr-2">Giá cả hợp lý</span> – công khai – không phát sinh!
            </h3>
            <ul className="space-y-4">
              {pricing.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hình ảnh dịch vụ */}
          <div className="rounded-xl overflow-hidden shadow-lg h-full">
            <img 
              src={airportImg2} 
              alt="Dịch vụ đưa đón sân bay" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Gallery hình ảnh */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-primary">Hình ảnh</span> dịch vụ đưa đón sân bay
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

        {/* Separator */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-0.5 bg-gray-200 w-full"></div>
          <span className="px-6 text-gray-400">⸻</span>
          <div className="h-0.5 bg-gray-200 w-full"></div>
        </div>

        {/* Phần liên hệ */}
        <div className="bg-gray-100 p-8 md:p-12 rounded-2xl shadow-md mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Liên hệ đặt xe ngay hôm nay</h3>
            
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
                  Fanpage Facebook <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Slogan cuối */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            CHUYẾN BAY QUAN TRỌNG CẦN MỘT CHIẾC XE TIN CẬY – ĐẶT NGAY ĐỂ TRẢI NGHIỆM SỰ KHÁC BIỆT!
          </h2>
        </div>
      </div>
    </section>
  );
}