import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock, ExternalLink, Camera } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

// Import hình ảnh
import tourImg1 from "@assets/IMG_1899.jpeg";
import tourImg2 from "@assets/IMG_1827.jpeg";
import tourImg3 from "@assets/IMG_1828.jpeg";
import tourImg4 from "@assets/IMG_1829.jpeg";

export default function TourServiceSection() {
  const handleClick = () => {
    scrollToSection("booking");
  };

  // Thông tin liên hệ
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
          DỊCH VỤ <span className="text-primary">TOUR THAM QUAN</span> BẰNG XE CARNIVAL
        </h1>
        <h2 className="text-xl md:text-2xl text-center font-medium mb-12 text-gray-600">
          KHÁM PHÁ VIỆT NAM TUYỆT ĐẸP VỚI DỊCH VỤ TỔ CHỨC TOUR CHUYÊN NGHIỆP!
        </h2>

        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden mb-12 shadow-xl">
          <img 
            src={tourImg1} 
            alt="Tour tham quan với xe Carnival" 
            className="w-full h-[40vh] md:h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Tour tham quan đẳng cấp</h3>
            <p className="text-white/90 mb-4 md:text-lg max-w-2xl">
              Khám phá Việt Nam theo cách riêng của bạn với xe Carnival sang trọng
            </p>
            <Button 
              onClick={handleClick}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-5"
            >
              Đặt Tour Ngay <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Giới thiệu */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <p className="text-lg md:text-xl mb-6">
            Dịch vụ Tour Tham Quan bằng xe Carnival mang đến trải nghiệm du lịch thoải mái và tiện nghi nhất. Khám phá vẻ đẹp của Việt Nam theo cách riêng của bạn với những chiếc xe sang trọng, rộng rãi và tài xế kinh nghiệm!
          </p>
          <p className="text-lg md:text-xl mb-6">
            Hãy để chúng tôi đồng hành cùng bạn trong những hành trình khám phá thú vị!
          </p>
        </div>

        {/* Dịch vụ cho thuê xe du lịch có lái */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-primary">CHO THUÊ XE DU LỊCH CÓ LÁI</span> – ĐI TOUR KHẮP NƠI!
          </h3>
          <div className="mb-8 text-center">
            <p className="text-lg mb-4">
              Bạn đang lên kế hoạch du lịch theo nhóm, gia đình, bạn bè hay công ty?<br/>
              Bạn cần một chiếc xe đời mới, rộng rãi, tài xế chuyên nghiệp, am hiểu đường tour?
            </p>
            <p className="text-lg font-semibold text-primary mb-6">
              Chúng tôi cung cấp dịch vụ cho thuê xe du lịch có lái – phục vụ tất cả các hành trình trong và ngoài tỉnh!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h4 className="text-xl font-bold mb-4 text-primary">Dịch vụ dành cho:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">Tour du lịch gia đình, nhóm bạn, cơ quan, hội nhóm</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">Tour lễ chùa, tour khám phá, nghỉ dưỡng, teambuilding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">Phục vụ từ 1 ngày, 2 ngày cho đến hành trình dài ngày Bắc – Trung – Nam</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">Hỗ trợ lên lịch trình – tư vấn điểm đến nếu khách cần</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h4 className="text-xl font-bold mb-4 text-primary">Dòng xe phục vụ:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">7 chỗ: Kia Carnival, Fortuner, Innova</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">9–16 chỗ: Limousine Solati, Ford Transit đời mới</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700">29–45 chỗ: Xe ghế ngả, điều hòa, màn hình giải trí đầy đủ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nội dung chính - Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Hình ảnh dịch vụ */}
          <div className="rounded-xl overflow-hidden shadow-lg h-full">
            <img 
              src={tourImg2} 
              alt="Tour du lịch bằng xe Carnival" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lợi ích */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-primary mr-2">Ưu điểm nổi bật</span> của dịch vụ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Xe sạch sẽ – đời mới – bảo dưỡng định kỳ</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Tài xế lịch sự – đúng giờ – thông thạo tuyến du lịch</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Hỗ trợ khách chụp ảnh, mua vé, tư vấn ăn uống, nghỉ ngơi</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Không phát sinh chi phí – báo giá trọn gói rõ ràng</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Có xe đón tận nơi tại Hà Nội – phục vụ tour khắp miền Bắc và toàn quốc</span>
              </li>
            </ul>
          </div>

          {/* Thông tin dịch vụ */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-primary mr-2">Dịch vụ bao gồm</span>
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Xe Carnival sang trọng, máy lạnh</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Tài xế kinh nghiệm, am hiểu địa phương</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Hướng dẫn viên tiếng Việt hoặc tiếng Anh (tùy chọn)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Nước uống, khăn lạnh miễn phí</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Bảo hiểm du lịch</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Ăn trưa tại nhà hàng địa phương (tùy tour)</span>
              </li>
            </ul>
            
            <div className="bg-yellow-50 p-5 rounded-lg">
              <p className="text-yellow-800 font-medium">Đặc biệt: Tất cả các tour đều có thể tùy chỉnh theo yêu cầu riêng của khách hàng.</p>
            </div>
          </div>

          {/* Hình ảnh dịch vụ */}
          <div className="rounded-xl overflow-hidden shadow-lg h-full">
            <img 
              src={tourImg3} 
              alt="Điểm đến du lịch" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Gallery hình ảnh */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-primary">Hình ảnh</span> tour tham quan
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <img 
                src={tourImg1} 
                alt="Tour tham quan 1" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <img 
                src={tourImg2} 
                alt="Tour tham quan 2" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <img 
                src={tourImg3} 
                alt="Tour tham quan 3" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <img 
                src={tourImg4} 
                alt="Tour tham quan 4" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
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
            <h3 className="text-2xl font-bold mb-6">Liên hệ đặt tour ngay hôm nay</h3>
            
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
                Đặt Tour Ngay <ArrowRight className="ml-2 h-5 w-5" />
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
            CẦN XE ĐI TOUR – CÓ NGAY XE XỊN, LÁI XE NHIỆT TÌNH, PHỤC VỤ CHU ĐÁO!
          </h2>
          <p className="text-xl text-primary font-bold mt-4">Chất lượng – An toàn – Giá hợp lý!</p>
        </div>
      </div>
    </section>
  );
}