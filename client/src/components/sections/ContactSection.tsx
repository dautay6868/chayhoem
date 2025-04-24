import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageSquare, Car, ArrowRight, CheckCircle } from "lucide-react";
import { AiFillTikTok } from "react-icons/ai";
import ContactForm from "@/components/ui/contact-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export default function ContactSection() {
  const handleBookNow = () => {
    scrollToSection("booking");
  };
  
  return (
    <section id="contact" className="pt-24 pb-20 bg-gray-50 relative">
      {/* Shape divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-white" aria-hidden="true">
        <svg
          className="absolute -bottom-px left-0 right-0 w-full text-gray-50"
          width="1440"
          height="48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 48h1440V0c-709 116.8-731-116.8-1440 0v48z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-primary/90 text-white mb-3">Liên hệ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Liên Hệ Với Chúng Tôi</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Có câu hỏi hoặc yêu cầu đặc biệt? Liên hệ với chúng tôi để được hỗ trợ nhanh chóng.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact info card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="relative h-48 bg-primary">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-white p-6 text-center">
                  <Car className="h-12 w-12 mb-3 text-white/90" />
                  <h3 className="text-2xl font-bold mb-2">Carnival Limousine</h3>
                  <p className="text-white/80">Dịch vụ cho thuê xe sang trọng hàng đầu</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-3 mr-4 flex-shrink-0">
                      <MapPin className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Văn Phòng Chính</h4>
                      <p className="text-gray-600">Ngõ 158 Võ Chí Công, Quận Tây Hồ, Hà Nội</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-3 mr-4 flex-shrink-0">
                      <Phone className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Điện Thoại</h4>
                      <p className="text-gray-600 hover:text-primary transition-colors">
                        <a href="tel:+84967478123">0967.478.123</a> <span className="text-gray-500">(Carnival)</span>
                      </p>
                      <p className="text-gray-600 hover:text-primary transition-colors">
                        <a href="tel:+84568212121">0568.21.21.21</a> <span className="text-gray-500">(Xe Ghép)</span>
                      </p>
                      <p className="text-gray-600 hover:text-primary transition-colors">
                        <a href="tel:+84822212121">0822.21.21.21</a> <span className="text-gray-500">(Limousine)</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-3 mr-4 flex-shrink-0">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600 hover:text-primary transition-colors">
                        <a href="mailto:datxe@chothuecarnival.com">datxe@chothuecarnival.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-3 mr-4 flex-shrink-0">
                      <Clock className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Giờ Làm Việc</h4>
                      <p className="text-gray-600">24/7 - Phục vụ mọi lúc mọi nơi</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">Kết Nối Với Chúng Tôi</h4>
                  <div className="flex space-x-3">
                    <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white text-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white text-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white text-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                      <Youtube className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-primary hover:text-white text-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                      <AiFillTikTok className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    onClick={handleBookNow}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Đặt Xe Ngay <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Badge className="bg-primary/10 text-primary mr-3">Gửi tin nhắn</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">Liên Hệ Ngay</h3>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-600">
                    Điền thông tin vào mẫu bên dưới, chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-4">
                    {["Tư vấn dịch vụ", "Báo giá", "Đặt xe", "Phản hồi", "Khác"].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">Vị Trí Của Chúng Tôi</h3>
              <p className="text-gray-600 mt-1">Tìm đường đến Carnival Limousine</p>
            </div>
            <div className="w-full h-[500px] rounded-b-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4738614426577!2d105.8042863!3d21.0667531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab32dd484c53%3A0x8742edf889895b71!2zMTU4IFbDtSBDaMOtIEPDtG5nLCBYdcOibiBMYSwgVMOieSBI4buTLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711603893336!5m2!1svi!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
