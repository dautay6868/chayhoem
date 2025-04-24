import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Car, Shield, Clock, Award, Users, MapPin } from "lucide-react";

// Import images
import KiaCarnivalImg from "@assets/EE4F9B4D-C0E6-4C71-9F24-5EA759A9E992.png";
import LimousineImg from "@assets/IMG_1862.webp";

export default function About() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">DỊCH VỤ CHO THUÊ XE CÓ LÁI – KIA CARNIVAL & LIMOUSINE</h1>
              <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-8"></div>
              <p className="text-2xl text-primary font-bold mb-8">
                ĐẲNG CẤP TRÊN MỌI HÀNH TRÌNH!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={KiaCarnivalImg}
                  alt="Carnival Limousine"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
              
              <div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-gray-700 mb-4">
                    Bạn cần một chiếc xe sang trọng, tiện nghi cho công việc, đón khách, du lịch hay sự kiện?
                  </p>
                  <p className="text-gray-700 mb-4">
                    Bạn muốn trải nghiệm cảm giác thoải mái – an toàn – riêng tư trên từng cung đường?
                  </p>
                  <p className="text-gray-700 mb-4 font-medium">
                    Hãy để chúng tôi đồng hành cùng bạn với dịch vụ cho thuê xe có lái – Kia Carnival & Limousine cao cấp.
                  </p>
                </div>
                
                <div className="mt-8">
                  <img 
                    src={LimousineImg}
                    alt="Limousine cao cấp"
                    className="rounded-lg shadow-xl w-full h-auto object-cover mb-8"
                  />
                  
                  <Link href="/#booking">
                    <Button className="bg-primary hover:bg-primary/90 text-white w-full py-3 text-lg">
                      Đặt Xe Ngay
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Car Models Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-primary text-center mb-2">1. Dòng Xe Phục Vụ</h2>
              <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">Kia Carnival 7 chỗ:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Thiết kế hiện đại, ngoại hình sang trọng</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Nội thất rộng rãi, ghế da cao cấp, cửa lùa điện</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Tiện nghi như khoang thương gia, phù hợp cho gia đình, khách VIP, công tác, sự kiện</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-primary mb-4">Limousine 9 chỗ - 11 chỗ - 16 chỗ:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Khoang xe thiết kế đẳng cấp, ghế massage, đèn LED trần, cổng sạc, wifi</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Không gian riêng tư, yên tĩnh, phù hợp đưa đón khách hàng, chuyên gia, nhóm bạn, gia đình</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <img 
                  src={KiaCarnivalImg} 
                  alt="Kia Carnival sang trọng"
                  className="rounded-lg shadow-xl w-full h-auto object-cover mb-6"
                />
                <img 
                  src={LimousineImg} 
                  alt="Limousine sang trọng"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-2">2. Lợi Ích Khi Thuê Xe Có Lái Tại Chúng Tôi</h2>
              <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="text-primary" size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Tài Xế Chuyên Nghiệp</h3>
                <p className="text-gray-600">
                  Tài xế lịch sự, chuyên nghiệp, thông thạo đường sá, đúng giờ tuyệt đối
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Car className="text-primary" size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Xe Đẳng Cấp</h3>
                <p className="text-gray-600">
                  Xe luôn sạch sẽ, bảo dưỡng định kỳ, trang bị đầy đủ tiện nghi
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-primary" size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Đưa Đón Tận Nơi</h3>
                <p className="text-gray-600">
                  Đưa đón tận nơi theo yêu cầu: sân bay, khách sạn, hội nghị, tour du lịch, cưới hỏi
                </p>
              </div>
            </div>
            
            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"></path><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M15 8h-5"></path><path d="M15 12h-5"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Phục Vụ Đa Dạng</h3>
                <p className="text-gray-600">
                  Phục vụ nội thành & liên tỉnh – đi tỉnh, đi tour, hợp đồng dài hạn
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Giá Cả Minh Bạch</h3>
                <p className="text-gray-600">
                  Giá cả hợp lý, báo giá minh bạch – không phát sinh chi phí
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/#contact">
                <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-3">
                  Liên Hệ Tư Vấn
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-2">3. Dịch Vụ Phù Hợp Cho</h2>
              <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                  <div className="bg-primary text-white p-4">
                    <h3 className="text-xl font-bold">Dịch Vụ Phù Hợp Cho:</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <span className="text-gray-700">Công tác, hội nghị, đón đối tác, chuyên gia</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <span className="text-gray-700">Đưa đón sân bay, tour du lịch, tham quan, dã ngoại</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <span className="text-gray-700">Cưới hỏi, sự kiện, đưa đón gia đình</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <span className="text-gray-700">Hợp đồng dài hạn cho cá nhân, doanh nghiệp</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-primary text-white p-4">
                    <h3 className="text-xl font-bold">Liên Hệ Ngay:</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span className="text-gray-700 font-medium">Hotline/Zalo: 0967 478 123</span>
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        <span className="text-gray-700">Fanpage: <a href="https://www.facebook.com/share/1AD4TD6LZW/?mibextid=wwXIfr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a></span>
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        <span className="text-gray-700">Website: <a href="https://chothuexecarnival.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">chothuexecarnival.com</a></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="relative mb-8">
                  <div className="w-20 h-1 bg-primary absolute top-0 left-0"></div>
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <p className="text-gray-800 text-lg italic">KIA CARNIVAL & LIMOUSINE – KHÔNG CHỈ LÀ CHUYẾN ĐI, MÀ LÀ TRẢI NGHIỆM ĐẲNG CẤP!</p>
                  </div>
                </div>
              
                <Link href="/#booking">
                  <Button className="bg-primary hover:bg-primary/90 text-white text-lg w-full py-3 mb-6">
                    Đặt Xe Ngay
                  </Button>
                </Link>
                
                <img 
                  src={LimousineImg} 
                  alt="Limousine dịch vụ"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Divider */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-4xl flex items-center">
                <div className="h-0.5 bg-gray-300 flex-grow"></div>
                <span className="px-4 text-gray-400">⋯</span>
                <div className="h-0.5 bg-gray-300 flex-grow"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">KIA CARNIVAL & LIMOUSINE</h2>
            <p className="text-2xl mb-8 max-w-2xl mx-auto font-medium">
              KHÔNG CHỈ LÀ CHUYẾN ĐI, MÀ LÀ TRẢI NGHIỆM ĐẲNG CẤP!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#contact">
                <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
                  Liên Hệ Ngay
                </Button>
              </Link>
              <Link href="/#booking">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                  Đặt Xe Ngay
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}