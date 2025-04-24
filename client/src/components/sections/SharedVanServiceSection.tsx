import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock, ExternalLink, UserIcon, UsersIcon } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

// Import hình ảnh
import sharedVanImg1 from "@assets/IMG_1831.jpeg";
import sharedVanImg2 from "@assets/IMG_1832.jpeg";
import sharedVanImg3 from "@assets/IMG_1833.jpeg";
import sharedVanImg4 from "@assets/IMG_1834.jpeg";

export default function SharedVanServiceSection() {
  const handleClick = () => {
    scrollToSection("booking");
  };

  // Lợi ích
  const benefits = [
    "Tiết kiệm chi phí hơn so với thuê xe riêng",
    "Đúng giờ, lịch trình rõ ràng",
    "Xe Carnival 7 chỗ rộng rãi, thoải mái",
    "Tài xế kinh nghiệm, lái xe an toàn",
    "Điểm đón linh hoạt theo yêu cầu",
    "Phù hợp cho khách du lịch, người đi công tác"
  ];

  // Thông tin liên hệ
  const contactInfo = [
    { icon: <Phone className="h-5 w-5 text-primary" />, text: "0967.478.123", href: "tel:0967478123" },
    { icon: <Mail className="h-5 w-5 text-primary" />, text: "datxe@chothuecarnival.com", href: "mailto:datxe@chothuecarnival.com" },
    { icon: <MapPin className="h-5 w-5 text-primary" />, text: "Ngõ 158 Võ Chí Công, Quận Tây Hồ, Hà Nội", href: "#" },
    { icon: <Clock className="h-5 w-5 text-primary" />, text: "Hoạt động 24/7", href: "#" }
  ];

  // Lịch trình xe ghép
  const schedules = [
    {
      route: "Hà Nội - Hạ Long",
      departureTime: "07:00, 09:00, 13:00, 16:00",
      returnTime: "08:00, 12:00, 15:00, 18:00"
    },
    {
      route: "Hà Nội - Ninh Bình",
      departureTime: "07:30, 13:30",
      returnTime: "12:00, 18:00"
    },
    {
      route: "Hà Nội - Sapa",
      departureTime: "06:30, 19:00 (xe đêm)",
      returnTime: "15:00, 19:00"
    },
    {
      route: "Hà Nội - Hải Phòng",
      departureTime: "07:00, 09:00, 14:00, 17:00",
      returnTime: "08:30, 12:30, 16:30, 19:00"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Tiêu đề chính */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          DỊCH VỤ <span className="text-primary">XE GHÉP</span> CARNIVAL CAO CẤP
        </h1>
        <h2 className="text-xl md:text-2xl text-center font-medium mb-12 text-gray-600">
          XE GHÉP HÀ NỘI – YÊN BÁI – MẬU A HẰNG NGÀY – TIỆN LỢI, TIẾT KIỆM, AN TOÀN, CÓ ĐÓN TẬN NƠI!
        </h2>

        {/* Hero Image */}
        <div className="relative rounded-xl overflow-hidden mb-12 shadow-xl">
          <img 
            src={sharedVanImg1} 
            alt="Dịch vụ xe ghép Carnival" 
            className="w-full h-[40vh] md:h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Xe ghép liên tỉnh chất lượng cao</h3>
            <p className="text-white/90 mb-4 md:text-lg max-w-2xl">
              Tiết kiệm chi phí nhưng vẫn thoải mái với dịch vụ xe ghép Carnival 7 chỗ
            </p>
            <Button 
              onClick={handleClick}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-5"
            >
              Đặt Chỗ Ngay <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Giới thiệu */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <p className="text-lg md:text-xl mb-6">
            Bạn đang cần về Yên Bái hay Mậu A mà không muốn chen chúc xe khách, mệt mỏi vì chờ đợi?
          </p>
          <p className="text-lg md:text-xl mb-6">
            Dịch vụ xe ghép chất lượng cao tuyến Hà Nội – Yên Bái – Mậu A là lựa chọn hoàn hảo cho bạn!
          </p>
        </div>



        {/* Nội dung chính - Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Hình ảnh dịch vụ */}
          <div className="rounded-xl overflow-hidden shadow-lg h-full">
            <img 
              src={sharedVanImg2} 
              alt="Xe ghép Carnival" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lợi ích */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-primary mr-2">Tại sao</span> khách hàng luôn tin tưởng chọn xe ghép của chúng tôi?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Xe 7 chỗ – Limousine đời mới, sạch sẽ, điều hòa mát lạnh, ghế ngả thoải mái</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Đón tận nơi tại Hà Nội – trả tận nhà ở Yên Bái, Mậu A</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Không bắt khách dọc đường, không chen chúc – chỉ từ 3–4 khách/chuyến</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Tài xế thân thiện, cẩn thận, lái xe an toàn, đúng giờ</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Chạy cả chiều đi và chiều về hằng ngày, linh hoạt khung giờ</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Có nhận ship hàng, chuyển phát nhanh theo xe</span>
              </li>
            </ul>
          </div>

          {/* Lịch trình */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-primary mr-2">Lịch chạy</span> linh hoạt – hỗ trợ ghép nhanh
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Sáng – Chiều – Tối: có xe liên tục theo khung giờ linh hoạt</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Đón/trả tận nơi các quận nội thành Hà Nội và khu vực Yên Bái, Mậu A</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Đảm bảo đúng giờ – đúng tuyến – giá không đổi</span>
              </li>
            </ul>
            
            <h3 className="text-2xl font-bold my-6 flex items-center">
              <span className="text-primary mr-2">Chi phí</span> hợp lý – chất lượng vượt mong đợi:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Chỉ từ 200.000 – 300.000đ/người tùy điểm đón</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Không phụ phí – không lo tăng giá ngày lễ</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-700">Có xe riêng nếu đi theo nhóm/gia đình (giá ưu đãi)</span>
              </li>
            </ul>
            
            <div className="bg-blue-50 p-5 rounded-lg mt-6">
              <p className="text-blue-800 font-medium">Lưu ý: Đặt chỗ trước ít nhất 24h để đảm bảo có chỗ. Lịch trình có thể thay đổi theo mùa.</p>
            </div>
          </div>

          {/* Hình ảnh dịch vụ */}
          <div className="rounded-xl overflow-hidden shadow-lg h-full">
            <img 
              src={sharedVanImg3} 
              alt="Khách hàng sử dụng dịch vụ xe ghép" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Quy trình đặt xe */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-primary">Quy trình</span> đặt xe ghép đơn giản
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Liên hệ đặt chỗ</h4>
              <p className="text-gray-600 text-sm">Gọi điện hoặc đặt qua form trên website</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Xác nhận lịch trình</h4>
              <p className="text-gray-600 text-sm">Chúng tôi xác nhận chỗ và thông báo lịch trình</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Thanh toán</h4>
              <p className="text-gray-600 text-sm">Đặt cọc 50% hoặc thanh toán đầy đủ</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Sử dụng dịch vụ</h4>
              <p className="text-gray-600 text-sm">Xe đón tại điểm hẹn và bắt đầu hành trình</p>
            </div>
          </div>
        </div>

        {/* Gallery hình ảnh */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-primary">Hình ảnh</span> dịch vụ xe ghép
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <img 
                src={sharedVanImg1} 
                alt="Xe ghép Carnival 1" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <img 
                src={sharedVanImg2} 
                alt="Xe ghép Carnival 2" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <img 
                src={sharedVanImg3} 
                alt="Xe ghép Carnival 3" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <img 
                src={sharedVanImg4} 
                alt="Xe ghép Carnival 4" 
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
            <h3 className="text-2xl font-bold mb-6">Liên hệ đặt xe – giữ chỗ trước để có vị trí đẹp:</h3>
            
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
                Đặt Chỗ Ngay <ArrowRight className="ml-2 h-5 w-5" />
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
            XE GHÉP HÀ NỘI – YÊN BÁI – MẬU A – NHANH CHÓNG, TIỆN NGHI, NHƯ XE NHÀ ĐƯA ĐÓN!
          </h2>
        </div>
      </div>
    </section>
  );
}