import { ArrowRight, MapPin, Car, Calendar, Plane, Camera, Star, SparkleIcon, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/service-card";
import { scrollToSection } from "@/lib/utils";
import { useState } from "react";
import { cn } from "@/lib/utils";
import carnivalImage1 from "@assets/IMG_1820.jpeg";
import carnivalImage2 from "@assets/IMG_1821.jpeg";
import newCarnivalImage from "@assets/IMG_1821.jpeg";
import limousineImage from "@assets/IMG_1813.jpeg";
import airportImage from "@assets/IMG_1806.jpeg";
import tourImage from "@assets/IMG_1899.jpeg";
import sharedVanImage from "@assets/IMG_1805.png";
import image4Seat from "@assets/IMG_1910.jpeg";
import image7Seat from "@assets/IMG_1911.jpeg";
import image11Seat from "@assets/IMG_1979.jpeg";
import image16Seat from "@assets/IMG_1980.jpeg";
import image29Seat from "@assets/IMG_1981.jpeg";
import image45Seat from "@assets/IMG_1982.jpeg";
import sedonaImage from "@assets/IMG_1909.jpeg";
import { useLocation } from "wouter";

const services = [
  {
    id: 1,
    title: "Thuê xe Carnival có lái",
    description: "Dịch vụ thuê xe Carnival sang trọng kèm tài xế chuyên nghiệp, đáp ứng mọi nhu cầu di chuyển.",
    image: newCarnivalImage,
    tag: "Cao Cấp",
    icon: <Car className="w-10 h-10" />,
    features: [
      "Tài xế kinh nghiệm",
      "Xe 7 chỗ hoặc 4 chỗ VIP",
      "Wifi, nước miễn phí"
    ],
    detailContent: `
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Thuê xe Carnival có lái - Sang trọng và tiện nghi</h2>
      <p class="text-gray-600 mb-6">Dịch vụ thuê xe Carnival có lái của chúng tôi cung cấp trải nghiệm di chuyển sang trọng và tiện nghi nhất. Với đội ngũ tài xế chuyên nghiệp, kinh nghiệm và am hiểu đường sá, chúng tôi đảm bảo chuyến đi của bạn luôn an toàn và thoải mái.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <img src="${carnivalImage1}" alt="Carnival nội thất" class="rounded-lg shadow-md"/>
        <img src="${carnivalImage2}" alt="Carnival ngoại thất" class="rounded-lg shadow-md"/>
      </div>
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Dịch vụ bao gồm:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600">
        <li>Xe Carnival mới, sạch sẽ và bảo dưỡng định kỳ</li>
        <li>Tài xế chuyên nghiệp, lịch sự và thông thạo đường</li>
        <li>Wifi miễn phí trên xe</li>
        <li>Nước uống, khăn lạnh</li>
        <li>Bảo hiểm hành khách toàn diện</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Bảng giá dịch vụ:</h3>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 p-3 text-left">Loại xe</th>
              <th class="border border-gray-300 p-3 text-left">Giá theo giờ</th>
              <th class="border border-gray-300 p-3 text-left">Giá theo ngày</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 p-3">Carnival 7 chỗ</td>
              <td class="border border-gray-300 p-3 font-medium">150.000đ/giờ</td>
              <td class="border border-gray-300 p-3 font-medium">1.200.000đ/ngày</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 p-3">Carnival VIP 4 chỗ</td>
              <td class="border border-gray-300 p-3 font-medium">200.000đ/giờ</td>
              <td class="border border-gray-300 p-3 font-medium">1.800.000đ/ngày</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bg-blue-50 p-4 rounded-lg">
        <p class="text-blue-800 font-medium">Lưu ý: Giá trên chưa bao gồm phí cầu đường, phí đỗ xe và các chi phí phát sinh khác.</p>
      </div>
    `
  },
  {
    id: 2,
    title: "Đưa đón sân bay",
    description: "Dịch vụ đưa đón sân bay chuyên nghiệp, đúng giờ với xe Carnival sang trọng và thoải mái.",
    image: airportImage,
    tag: "Phổ Biến",
    icon: <Plane className="w-10 h-10" />,
    features: [
      "Theo dõi chuyến bay",
      "Hỗ trợ hành lý",
      "Đón có biển tên"
    ],
    detailContent: `
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Dịch vụ đưa đón sân bay chuyên nghiệp</h2>
      <p class="text-gray-600 mb-6">Dịch vụ đưa đón sân bay của chúng tôi giúp bạn tránh khỏi những lo lắng về thời gian và phương tiện di chuyển. Chúng tôi theo dõi lịch bay chính xác, đảm bảo đón bạn đúng giờ và di chuyển nhanh chóng, thoải mái đến điểm đến.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <img src="${airportImage}" alt="Đón khách sân bay" class="rounded-lg shadow-md"/>
        <img src="${airportImage}" alt="Xe đón sân bay" class="rounded-lg shadow-md"/>
      </div>
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Ưu điểm dịch vụ:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600">
        <li>Theo dõi lịch trình chuyến bay để đón đúng giờ</li>
        <li>Biển tên đón khách chuyên nghiệp</li>
        <li>Hỗ trợ khách hàng 24/7</li>
        <li>Tài xế thông thạo địa điểm sân bay và lối đi</li>
        <li>Hỗ trợ mang hành lý nặng</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Bảng giá dịch vụ:</h3>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 p-3 text-left">Sân bay</th>
              <th class="border border-gray-300 p-3 text-left">Giá (Carnival 7 chỗ)</th>
              <th class="border border-gray-300 p-3 text-left">Giá (Carnival VIP 4 chỗ)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 p-3">Nội Bài</td>
              <td class="border border-gray-300 p-3 font-medium">700.000đ</td>
              <td class="border border-gray-300 p-3 font-medium">900.000đ</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 p-3">Đà Nẵng</td>
              <td class="border border-gray-300 p-3 font-medium">500.000đ</td>
              <td class="border border-gray-300 p-3 font-medium">700.000đ</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-3">Tân Sơn Nhất</td>
              <td class="border border-gray-300 p-3 font-medium">800.000đ</td>
              <td class="border border-gray-300 p-3 font-medium">1.000.000đ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bg-green-50 p-4 rounded-lg">
        <p class="text-green-800 font-medium">Đặc biệt: Giảm 10% cho khách hàng đặt cả chiều đi và chiều về.</p>
      </div>
    `
  },
  {
    id: 3,
    title: "Tour tham quan",
    description: "Khám phá các điểm đến hấp dẫn với dịch vụ xe Carnival cao cấp cùng tài xế am hiểu địa phương.",
    image: tourImage,
    tag: "Đặc Biệt",
    icon: <Camera className="w-10 h-10" />,
    features: [
      "Lộ trình tùy chỉnh",
      "Hướng dẫn viên chuyên nghiệp",
      "Đồ uống miễn phí"
    ],
    detailContent: `
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Tour tham quan với xe Carnival sang trọng</h2>
      <p class="text-gray-600 mb-6">Khám phá vẻ đẹp của Việt Nam với dịch vụ tour tham quan bằng xe Carnival cao cấp. Chúng tôi cung cấp các tour tham quan đặc biệt với lộ trình hấp dẫn, phù hợp với nhu cầu và sở thích của từng khách hàng.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <img src="${tourImage}" alt="Cảnh đẹp du lịch" class="rounded-lg shadow-md"/>
        <img src="${tourImage}" alt="Du lịch sang trọng" class="rounded-lg shadow-md"/>
      </div>
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Các tour nổi bật:</h3>
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900">Tour Hà Nội City</h4>
          <p class="text-gray-600">Khám phá thủ đô ngàn năm văn hiến</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900">Tour Hạ Long</h4>
          <p class="text-gray-600">Vịnh kỳ quan thiên nhiên thế giới</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900">Tour Ninh Bình</h4>
          <p class="text-gray-600">Khám phá Tràng An, Bái Đính</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900">Tour Sapa</h4>
          <p class="text-gray-600">Thác Bạc, Cát Cát, khám phá thiên nhiên</p>
        </div>
      </div>
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Dịch vụ bao gồm:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600">
        <li>Xe Carnival sang trọng, máy lạnh</li>
        <li>Tài xế kinh nghiệm, am hiểu địa phương</li>
        <li>Hướng dẫn viên tiếng Việt hoặc tiếng Anh (tùy chọn)</li>
        <li>Nước uống, khăn lạnh miễn phí</li>
        <li>Bảo hiểm du lịch</li>
        <li>Ăn trưa tại nhà hàng địa phương (tùy tour)</li>
      </ul>
      <div class="bg-yellow-50 p-4 rounded-lg">
        <p class="text-yellow-800 font-medium">Đặc biệt: Tất cả các tour đều có thể tùy chỉnh theo yêu cầu riêng của khách hàng.</p>
      </div>
    `
  },
  {
    id: 4,
    title: "Thuê xe Limousine có lái",
    description: "Dịch vụ xe Limousine hạng sang với trang bị nội thất VIP, mang đến trải nghiệm đẳng cấp và sang trọng.",
    image: limousineImage,
    tag: "Hạng Sang",
    icon: <SparkleIcon className="w-10 h-10" />,
    features: [
      "Nội thất siêu sang",
      "Tài xế chuyên nghiệp",
      "Dịch vụ VIP đi kèm"
    ],
    detailContent: `
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Thuê xe Limousine Carnival cao cấp</h2>
      <p class="text-gray-600 mb-6">Dịch vụ thuê xe Limousine Carnival là lựa chọn hoàn hảo cho những sự kiện quan trọng, buổi tiệc hay những chuyến đi đặc biệt đòi hỏi sự đẳng cấp và sang trọng. Chúng tôi cung cấp dòng xe Carnival phiên bản VIP Limousine 4 chỗ với nội thất sang trọng bậc nhất.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <img src="${limousineImage}" alt="Nội thất Limousine" class="rounded-lg shadow-md"/>
        <img src="${limousineImage}" alt="Limousine sang trọng" class="rounded-lg shadow-md"/>
      </div>
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Tính năng nổi bật:</h3>
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="flex items-start p-3">
          <div class="bg-primary/10 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">Ghế VIP chỉnh điện, massage</h4>
          </div>
        </div>
        <div class="flex items-start p-3">
          <div class="bg-primary/10 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">Hệ thống giải trí cao cấp</h4>
          </div>
        </div>
        <div class="flex items-start p-3">
          <div class="bg-primary/10 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">Minibar với đồ uống cao cấp</h4>
          </div>
        </div>
        <div class="flex items-start p-3">
          <div class="bg-primary/10 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">Hệ thống cách âm tiên tiến</h4>
          </div>
        </div>
        <div class="flex items-start p-3">
          <div class="bg-primary/10 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">Wifi tốc độ cao</h4>
          </div>
        </div>
        <div class="flex items-start p-3">
          <div class="bg-primary/10 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900">Rèm che nắng tự động</h4>
          </div>
        </div>
      </div>
      <div class="bg-purple-50 p-4 rounded-lg mb-4">
        <p class="text-purple-800 font-medium">Hoàn hảo cho các dịp đặc biệt: đám cưới, sự kiện doanh nghiệp, đón tiếp khách VIP.</p>
      </div>
    `
  },
  {
    id: 5,
    title: "Xe Ghép",
    description: "Dịch vụ xe ghép tiết kiệm Hà Nội - Yên Bái - Mậu A với xe Limousine 7 chỗ, đón tận nơi, chỉ 3-4 khách/chuyến, an toàn, thoải mái.",
    image: sharedVanImage,
    tag: "Tiết Kiệm",
    icon: <Users className="w-10 h-10" />,
    features: [
      "Đón tận nơi, trả tận nhà",
      "Chỉ từ 3-4 khách/chuyến",
      "Có nhận ship hàng theo xe"
    ],
    detailContent: `
      <h2 class="text-2xl font-bold text-gray-900 mb-4">XE GHÉP HÀ NỘI – YÊN BÁI – MẬU A HẰNG NGÀY</h2>
      <p class="text-gray-600 mb-6">Bạn đang cần về Yên Bái hay Mậu A mà không muốn chen chúc xe khách, mệt mỏi vì chờ đợi? Dịch vụ xe ghép chất lượng cao tuyến Hà Nội – Yên Bái – Mậu A là lựa chọn hoàn hảo cho bạn!</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <img src="${sharedVanImage}" alt="Xe ghép Carnival" class="rounded-lg shadow-md"/>
        <img src="${sharedVanImage}" alt="Dịch vụ xe ghép" class="rounded-lg shadow-md"/>
      </div>
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Tại sao khách hàng luôn tin tưởng chọn xe ghép của chúng tôi?</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-600">
        <li>Xe 7 chỗ – Limousine đời mới, sạch sẽ, điều hòa mát lạnh, ghế ngả thoải mái</li>
        <li>Đón tận nơi tại Hà Nội – trả tận nhà ở Yên Bái, Mậu A</li>
        <li>Không bắt khách dọc đường, không chen chúc – chỉ từ 3–4 khách/chuyến</li>
        <li>Tài xế thân thiện, cẩn thận, lái xe an toàn, đúng giờ</li>
        <li>Chạy cả chiều đi và chiều về hằng ngày, linh hoạt khung giờ</li>
        <li>Có nhận ship hàng, chuyển phát nhanh theo xe</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Chi phí hợp lý – chất lượng vượt mong đợi:</h3>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse border border-gray-300 mb-6">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 p-3 text-left">Tuyến đường</th>
              <th class="border border-gray-300 p-3 text-left">Giá vé</th>
              <th class="border border-gray-300 p-3 text-left">Thời gian</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 p-3">Hà Nội – Yên Bái</td>
              <td class="border border-gray-300 p-3 font-medium">250.000đ/khách</td>
              <td class="border border-gray-300 p-3">4 tiếng</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 p-3">Hà Nội – Mậu A</td>
              <td class="border border-gray-300 p-3 font-medium">300.000đ/khách</td>
              <td class="border border-gray-300 p-3">5 tiếng</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="bg-blue-50 p-4 rounded-lg">
        <p class="text-blue-800 font-medium">Đặt xe ngay qua hotline: 096 7478 123 để được phục vụ tốt nhất!</p>
      </div>
    `
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [, navigate] = useLocation();

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => {
        if (activeTab === 'carnival' && service.id === 1) return true;
        if (activeTab === 'airport' && service.id === 2) return true;
        if (activeTab === 'tour' && service.id === 3) return true;
        if (activeTab === 'limousine' && service.id === 4) return true;
        if (activeTab === 'shared-van' && service.id === 5) return true;
        return false;
      });

  const handleClick = (type: string) => {
    if (type === "booking") {
      scrollToSection("booking");
    } else {
      // Navigate to the appropriate detail page based on the service clicked
      const serviceMap: Record<number, string> = {
        1: "/dich-vu/thue-xe-carnival-co-lai",
        2: "/dich-vu/dua-don-san-bay",
        3: "/dich-vu/tour-tham-quan",
        4: "/dich-vu/thue-xe-limousine-co-lai",
        5: "/dich-vu/xe-ghep"
      };
      
      const serviceId = parseInt(type);
      if (serviceMap[serviceId]) {
        navigate(serviceMap[serviceId]);
      }
    }
  };
  
  const handleVehicleClick = (vehicleType: string) => {
    // Map mỗi loại xe đến trang dịch vụ tương ứng
    const vehicleServiceMap: Record<string, string> = {
      "carnival": "/dich-vu/thue-xe-carnival-co-lai",
      "sedona": "/dich-vu/thue-xe-carnival-co-lai", // Coi như Sedona cũng thuộc dòng Carnival
      "4-seat": "/dich-vu/thue-xe-carnival-co-lai", // Xe 4 chỗ thuộc dịch vụ Carnival
      "7-seat": "/dich-vu/thue-xe-carnival-co-lai", // Xe 7 chỗ thuộc dịch vụ Carnival
      "11-seat": "/dich-vu/thue-xe-limousine-co-lai", // Xe 11 chỗ thuộc dịch vụ Limousine
      "16-seat": "/dich-vu/thue-xe-limousine-co-lai", // Xe 16 chỗ thuộc dịch vụ Limousine  
      "29-seat": "/dich-vu/thue-xe-limousine-co-lai", // Xe 29 chỗ thuộc dịch vụ Limousine
      "45-seat": "/dich-vu/thue-xe-limousine-co-lai"  // Xe 45 chỗ thuộc dịch vụ Limousine
    };
    
    if (vehicleServiceMap[vehicleType]) {
      navigate(vehicleServiceMap[vehicleType]);
    }
  };
  
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dịch Vụ Xe Cao Cấp
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp đa dạng các dịch vụ xe cao cấp, từ thuê xe sang trọng có tài xế đến dịch vụ đưa đón sân bay, tour du lịch và xe ghép chất lượng cao.
          </p>
        </div>
        
        {/* Service tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeTab === 'all' 
                ? "bg-primary text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            Tất cả dịch vụ
          </button>
          <button
            onClick={() => setActiveTab('carnival')}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeTab === 'carnival' 
                ? "bg-primary text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            Carnival
          </button>
          <button
            onClick={() => setActiveTab('limousine')}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeTab === 'limousine' 
                ? "bg-primary text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            Limousine
          </button>
          <button
            onClick={() => setActiveTab('airport')}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeTab === 'airport' 
                ? "bg-primary text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            Đưa đón sân bay
          </button>
          <button
            onClick={() => setActiveTab('tour')}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeTab === 'tour' 
                ? "bg-primary text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            Tour
          </button>
          <button
            onClick={() => setActiveTab('shared-van')}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeTab === 'shared-van' 
                ? "bg-primary text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            Xe ghép
          </button>
        </div>
      
        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              tag={service.tag}
              icon={service.icon}
              features={service.features}
              onClick={() => handleClick(service.id.toString())}
            />
          ))}
        </div>
        
        {/* Đa dạng loại xe */}
        <div className="mt-16 bg-gray-50 py-12 rounded-2xl">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Đa Dạng Loại Xe</h3>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Chúng tôi cung cấp đa dạng dòng xe với nhiều sức chứa khác nhau, đáp ứng mọi nhu cầu di chuyển của khách hàng từ cá nhân đến đoàn đông người.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Xe 1 - Carnival */}
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => handleVehicleClick("carnival")}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={newCarnivalImage}
                    alt="Xe Carnival" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded">Sang trọng</span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-gray-900">Thuê xe Carnival</h4>
                  <p className="text-gray-600 text-sm">7 chỗ có lái</p>
                </div>
              </div>
              
              {/* Xe 2 - Sedona */}
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => handleVehicleClick("sedona")}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={sedonaImage}
                    alt="Xe Sedona" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded">Cao cấp</span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-gray-900">Thuê xe Sedona</h4>
                  <p className="text-gray-600 text-sm">7 chỗ có lái</p>
                </div>
              </div>
              
              {/* Xe 3 - 4 chỗ */}
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => handleVehicleClick("4-seat")}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={image4Seat}
                    alt="Xe 4 chỗ" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded">Limousine</span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-gray-900">Thuê xe 4 chỗ</h4>
                  <p className="text-gray-600 text-sm">Camry, Vinfast</p>
                </div>
              </div>
              
              {/* Xe 4 - 7 chỗ */}
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => handleVehicleClick("7-seat")}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={image7Seat}
                    alt="Xe 7 chỗ" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded">Đa năng</span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-gray-900">Thuê xe 7 chỗ</h4>
                  <p className="text-gray-600 text-sm">Innova, Fortuner</p>
                </div>
              </div>
              
              {/* Xe 5 - 11 chỗ */}
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => handleVehicleClick("11-seat")}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={image11Seat}
                    alt="Xe 11 chỗ" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded">Tiện nghi</span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-gray-900">Thuê xe 11 chỗ</h4>
                  <p className="text-gray-600 text-sm">Transit, Hyundai</p>
                </div>
              </div>
              
              {/* Xe 6 - 16 chỗ */}
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => handleVehicleClick("16-seat")}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={image16Seat}
                    alt="Xe 16 chỗ" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded">Nhóm nhỏ</span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-gray-900">Thuê xe 16 chỗ</h4>
                  <p className="text-gray-600 text-sm">Ford Transit</p>
                </div>
              </div>
              
              {/* Xe 7 - 29 chỗ */}
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => handleVehicleClick("29-seat")}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={image29Seat}
                    alt="Xe 29 chỗ" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded">Đoàn vừa</span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-gray-900">Thuê xe 29 chỗ</h4>
                  <p className="text-gray-600 text-sm">County, Samco</p>
                </div>
              </div>
              
              {/* Xe 8 - 45 chỗ */}
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group cursor-pointer"
                onClick={() => handleVehicleClick("45-seat")}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={image45Seat}
                    alt="Xe 45 chỗ" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded">Đoàn lớn</span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-gray-900">Thuê xe 45 chỗ</h4>
                  <p className="text-gray-600 text-sm">Universe, Thaco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <Button 
            onClick={() => handleClick("booking")}
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-bold shadow-md"
          >
            Đặt Xe Ngay <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}