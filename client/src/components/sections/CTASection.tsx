import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export default function CTASection() {
  const handleButtonClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            {/* Car Illustration would go here */}
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
              Sẵn Sàng Trải Nghiệm Dịch Vụ Xe Carnival Cao Cấp?
            </h2>
            <p className="text-white text-lg mb-8">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn và nhận báo giá chi tiết cho nhu cầu di chuyển của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => handleButtonClick("booking")}
                className="bg-[#d4af37] hover:bg-amber-500 text-white rounded-full px-8 py-6 font-bold shadow-md"
              >
                Đặt Xe Ngay
              </Button>
              <Button 
                onClick={() => handleButtonClick("contact")}
                variant="outline" 
                className="border-2 border-white hover:border-[#d4af37] text-white hover:text-[#d4af37] bg-transparent rounded-full px-8 py-6 font-bold"
              >
                Liên Hệ Tư Vấn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
