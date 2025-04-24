import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Mission() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">SỨ MỆNH CỦA CHÚNG TÔI</h1>
              <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 font-medium mb-8">
                MANG ĐẾN TRẢI NGHIỆM ĐẲNG CẤP TRÊN MỌI HÀNH TRÌNH
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 text-lg mb-8">
                  Sứ mệnh của Carnival Limousine là mang đến dịch vụ vận chuyển hành khách chất lượng cao, an toàn và đáng tin cậy, đồng thời tạo ra giá trị bền vững cho khách hàng và cộng đồng.
                </p>
                
                <p className="text-gray-700 text-lg mb-8">
                  Chúng tôi cam kết không ngừng cải tiến chất lượng dịch vụ, ứng dụng công nghệ hiện đại và đào tạo đội ngũ chuyên nghiệp để đáp ứng mọi nhu cầu di chuyển của khách hàng.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Cam Kết Chất Lượng</h3>
                    </div>
                    <p className="text-gray-700">
                      Đội xe sang trọng, hiện đại, được bảo dưỡng thường xuyên và tài xế chuyên nghiệp, lịch sự, thông thạo đường sá, đảm bảo an toàn tối đa
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Tạo Giá Trị Bền Vững</h3>
                    </div>
                    <p className="text-gray-700">
                      Không chỉ là người cung cấp dịch vụ, chúng tôi là đối tác tin cậy đồng hành cùng sự phát triển của các cá nhân, tổ chức và doanh nghiệp
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Dịch Vụ Chuyên Nghiệp</h3>
                    </div>
                    <p className="text-gray-700">
                      Từng chi tiết trong quy trình phục vụ được tiêu chuẩn hóa, đảm bảo trải nghiệm khách hàng luôn xuất sắc và nhất quán
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="text-primary h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Thân Thiện Môi Trường</h3>
                    </div>
                    <p className="text-gray-700">
                      Áp dụng các biện pháp giảm phát thải, sử dụng xe tiết kiệm nhiên liệu và thân thiện với môi trường
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/gioi-thieu">
                      <Button variant="outline" className="px-6 py-3 text-primary border-primary hover:bg-primary/10">
                        Giới Thiệu
                      </Button>
                    </Link>
                    <Link href="/lich-su">
                      <Button variant="outline" className="px-6 py-3 text-primary border-primary hover:bg-primary/10">
                        Lịch Sử
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