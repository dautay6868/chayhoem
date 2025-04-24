import { Check, ArrowRight, Award, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { useState } from "react";
import { Link } from "wouter";
import carnivalImage from "@assets/IMG_0724.jpeg";

export default function AboutSection() {
  const handleClick = (id: string) => {
    scrollToSection(id);
  };
  
  const [activeTab, setActiveTab] = useState("about");
  
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // Manually create and trigger scroll behavior to sections
    setTimeout(() => {
      const element = document.getElementById(tab);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };
  
  const stats = [
    { value: "12+", label: "Năm Kinh Nghiệm" },
    { value: "30+", label: "Xe Carnival" },
    { value: "50+", label: "Tài Xế Chuyên Nghiệp" },
    { value: "10k+", label: "Khách Hàng Hài Lòng" },
  ];
  
  const features = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Dịch Vụ Chất Lượng Cao",
      description: "Cam kết mang đến trải nghiệm di chuyển sang trọng, tiện nghi và an toàn nhất cho khách hàng."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Đội Ngũ Chuyên Nghiệp",
      description: "Tài xế kinh nghiệm, thông thạo nhiều tuyến đường và được đào tạo kỹ lưỡng về kỹ năng phục vụ."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Luôn Đúng Giờ",
      description: "Đưa đón đúng giờ, đảm bảo lịch trình của khách hàng không bị trì hoãn hay gián đoạn."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "An Toàn Tuyệt Đối",
      description: "Xe được bảo dưỡng thường xuyên và tài xế tuân thủ nghiêm ngặt quy định an toàn giao thông."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Carnival Limousine</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Về Dịch Vụ Cho Thuê Xe Của Chúng Tôi</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Chúng tôi tự hào cung cấp dịch vụ cho thuê xe Carnival cao cấp với trải nghiệm thoải mái và đẳng cấp nhất tại Việt Nam.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <button 
            className={`px-6 py-3 font-medium rounded-full transition-all ${activeTab === 'about' ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            onClick={() => handleTabClick('about')}
          >
            Giới Thiệu
          </button>
          <Link href="/su-menh">
            <Button 
              className="bg-white text-gray-600 hover:bg-gray-100 px-6 py-3 font-medium rounded-full ml-2 transition-all"
            >
              Sứ Mệnh
            </Button>
          </Link>
          <Link href="/lich-su">
            <Button 
              className="bg-white text-gray-600 hover:bg-gray-100 px-6 py-3 font-medium rounded-full ml-2 transition-all"
            >
              Lịch Sử
            </Button>
          </Link>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center transform transition hover:shadow-md hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="bg-white p-3 shadow-lg rounded-lg overflow-hidden">
              <img 
                src={carnivalImage} 
                alt="Kia Carnival Premium" 
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-xl z-10 hidden md:block">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Loại xe Carnival</div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg z-10 hidden md:flex">
              <div className="text-center">
                <div className="text-primary font-bold text-lg">100%</div>
                <div className="text-xs text-gray-600">Hài lòng</div>
              </div>
            </div>
          </div>
          
          {/* Content side */}
          <div>
            {activeTab === 'about' && (
              <div id="about-content" className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dịch vụ thuê xe Carnival - Limousine hàng đầu</h3>
                <p className="text-gray-600">
                  Với đội xe Carnival hoàn toàn mới, hiện đại và sang trọng, chúng tôi tự hào mang đến cho khách hàng những trải nghiệm di chuyển thoải mái và an toàn nhất.
                </p>
                <p className="text-gray-600">
                  Carnival Limousine đã và đang phục vụ hàng nghìn khách hàng với các dịch vụ đa dạng từ đưa đón sân bay, du lịch, đám cưới đến các sự kiện doanh nghiệp.
                </p>
                
                <div className="pt-4 space-y-4">
                  {features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 p-1">
                        <Check className="text-primary h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <Button 
                    onClick={() => handleClick("services")}
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-3 font-medium"
                  >
                    Khám Phá Dịch Vụ <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
            
            {activeTab === 'mission' && (
              <div id="mission" className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sứ mệnh của chúng tôi</h3>
                <p className="text-gray-600">
                  Sứ mệnh của Carnival Limousine là mang đến dịch vụ vận chuyển hành khách chất lượng cao, an toàn và đáng tin cậy, đồng thời tạo ra giá trị bền vững cho khách hàng và cộng đồng.
                </p>
                <p className="text-gray-600">
                  Chúng tôi cam kết không ngừng cải tiến chất lượng dịch vụ, ứng dụng công nghệ hiện đại và đào tạo đội ngũ chuyên nghiệp để đáp ứng mọi nhu cầu di chuyển của khách hàng.
                </p>
                
                <div className="pt-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="text-primary h-5 w-5" />
                    </div>
                    <span className="text-gray-800 font-medium">Chuyên nghiệp trong từng chuyến đi</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="text-primary h-5 w-5" />
                    </div>
                    <span className="text-gray-800 font-medium">Đồng hành cùng sự phát triển của khách hàng</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="text-primary h-5 w-5" />
                    </div>
                    <span className="text-gray-800 font-medium">Thân thiện với môi trường</span>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'history' && (
              <div id="history" className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lịch sử phát triển</h3>
                <p className="text-gray-600">
                  Carnival Limousine được thành lập vào năm 2010 với chỉ 5 chiếc xe Carnival đời đầu. Sau hơn một thập kỷ phát triển, chúng tôi đã trở thành một trong những đơn vị hàng đầu trong lĩnh vực cho thuê xe sang tại Việt Nam.
                </p>
                <p className="text-gray-600">
                  Với đội xe hiện đại hơn 30 chiếc Carnival các loại (từ 4 chỗ VIP đến 7 chỗ thường) và đội ngũ nhân viên được đào tạo chuyên nghiệp, chúng tôi tự hào phục vụ hàng nghìn khách hàng mỗi năm.
                </p>
                
                <div className="pt-4">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">1</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">2010 - Thành lập công ty</h4>
                      <p className="text-gray-600 text-sm">Bắt đầu với đội xe 5 chiếc và phục vụ chủ yếu khu vực miền Bắc</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">2</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">2015 - Mở rộng dịch vụ</h4>
                      <p className="text-gray-600 text-sm">Mở rộng đội xe lên 15 chiếc và triển khai dịch vụ ra toàn quốc</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">3</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">2022 - Hiện đại hóa</h4>
                      <p className="text-gray-600 text-sm">Đầu tư đội xe Carnival thế hệ mới nhất và áp dụng công nghệ đặt xe trực tuyến</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Đội ngũ quản lý</h4>
                    <div className="space-y-2">
                      <p className="text-gray-600 text-sm"><span className="font-medium">Giám đốc kinh doanh:</span> Nguyễn Công Thành</p>
                      <p className="text-gray-600 text-sm"><span className="font-medium">Quản lý nhân sự:</span> Nguyễn Thị Huyền</p>
                      <p className="text-gray-600 text-sm"><span className="font-medium">Kĩ sư phần mềm:</span> Nguyễn Anh Tuấn</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Features */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm transform transition hover:shadow-md hover:-translate-y-1">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
