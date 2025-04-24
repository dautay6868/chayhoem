import BookingForm from "@/components/ui/booking-form";

export default function BookingSection() {
  return (
    <section id="booking" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary font-montserrat mb-2">Đặt Xe Carnival</h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Điền thông tin bên dưới để đặt dịch vụ xe Carnival. Chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút.
          </p>
        </div>
        
        <div className="bg-secondary rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
