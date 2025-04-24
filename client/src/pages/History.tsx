import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Award, Users } from "lucide-react";

export default function History() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      
      <main>
        {/* Back Button */}
        <div className="sticky top-[66px] bg-white z-30 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="py-2">
              <Link href="/">
                <Button variant="outline" className="border border-primary/50 text-primary hover:bg-primary/10 text-sm px-4 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                  Quay Về Trang Chủ
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">LỊCH SỬ PHÁT TRIỂN</h1>
              <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 font-medium mb-8">
                HÀNH TRÌNH PHÁT TRIỂN VÀ TRƯỞNG THÀNH
              </p>
            </div>
          </div>
        </section>
        
        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 text-lg mb-8">
                  Carnival Limousine được thành lập vào năm 2010 với chỉ 5 chiếc xe Carnival đời đầu. Sau hơn một thập kỷ phát triển, chúng tôi đã trở thành một trong những đơn vị hàng đầu trong lĩnh vực cho thuê xe sang tại Việt Nam.
                </p>
                
                <p className="text-gray-700 text-lg mb-12">
                  Với đội xe hiện đại hơn 30 chiếc Carnival các loại (từ 4 chỗ VIP đến 7 chỗ thường) và đội ngũ nhân viên được đào tạo chuyên nghiệp, chúng tôi tự hào phục vụ hàng nghìn khách hàng mỗi năm.
                </p>
                
                {/* Timeline */}
                <div className="relative border-l-4 border-primary pl-10 ml-6 mb-12">
                  <div className="mb-12 relative">
                    <div className="absolute -left-[52px] w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">2010 - Thành lập công ty</h3>
                    <p className="text-gray-700 mb-4">
                      Bắt đầu với đội xe 5 chiếc Carnival và phục vụ chủ yếu khu vực miền Bắc Việt Nam. Thời điểm này, dịch vụ cho thuê xe có lái cao cấp vẫn còn khá mới mẻ tại thị trường Việt Nam.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                        <span className="font-medium">5</span> xe Carnival
                      </div>
                      <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                        <span className="font-medium">10</span> nhân viên
                      </div>
                      <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                        <span className="font-medium">1</span> văn phòng
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-12 relative">
                    <div className="absolute -left-[52px] w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">2015 - Mở rộng dịch vụ</h3>
                    <p className="text-gray-700 mb-4">
                      Mở rộng đội xe lên 15 chiếc và triển khai dịch vụ ra toàn quốc. Bắt đầu cung cấp dịch vụ xe limousine và các giải pháp vận chuyển cao cấp cho doanh nghiệp.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                        <span className="font-medium">15</span> xe Carnival & Limousine
                      </div>
                      <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                        <span className="font-medium">25</span> nhân viên
                      </div>
                      <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                        <span className="font-medium">3</span> văn phòng
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[52px] w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">2022 - Hiện đại hóa</h3>
                    <p className="text-gray-700 mb-4">
                      Đầu tư đội xe Carnival thế hệ mới nhất và áp dụng công nghệ đặt xe trực tuyến. Triển khai ứng dụng di động và hệ thống quản lý đội xe hiện đại giúp nâng cao chất lượng dịch vụ.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                        <span className="font-medium">30+</span> xe các loại
                      </div>
                      <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                        <span className="font-medium">50+</span> nhân viên
                      </div>
                      <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">
                        <span className="font-medium">5</span> chi nhánh
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Management Team */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-gray-200 pb-3">Đội Ngũ Quản Lý</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <div className="inline-flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center mb-4">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Nguyễn Công Thành</h4>
                      <p className="text-gray-600 font-medium">Giám đốc kinh doanh</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <div className="inline-flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center mb-4">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Nguyễn Thị Huyền</h4>
                      <p className="text-gray-600 font-medium">Quản lý nhân sự</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <div className="inline-flex w-16 h-16 rounded-full bg-primary/10 items-center justify-center mb-4">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Nguyễn Anh Tuấn</h4>
                      <p className="text-gray-600 font-medium">Kĩ sư phần mềm</p>
                    </div>
                  </div>
                </div>
                
                {/* Awards */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-gray-200 pb-3">Giải Thưởng & Thành Tựu</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Award className="h-10 w-10 text-primary" />
                      <div>
                        <h4 className="font-bold text-gray-900">Doanh Nghiệp Dịch Vụ Xuất Sắc 2020</h4>
                        <p className="text-gray-600">Hiệp hội Doanh nghiệp Vận tải Việt Nam</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Award className="h-10 w-10 text-primary" />
                      <div>
                        <h4 className="font-bold text-gray-900">Top 10 Thương Hiệu Uy Tín 2022</h4>
                        <p className="text-gray-600">Lĩnh vực cho thuê xe du lịch cao cấp</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/gioi-thieu">
                      <Button variant="outline" className="px-6 py-3 text-primary border-primary hover:bg-primary/10">
                        Giới Thiệu
                      </Button>
                    </Link>
                    <Link href="/su-menh">
                      <Button variant="outline" className="px-6 py-3 text-primary border-primary hover:bg-primary/10">
                        Sứ Mệnh
                      </Button>
                    </Link>
                    <Link href="/#booking">
                      <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3">
                        Đặt Xe Ngay
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}