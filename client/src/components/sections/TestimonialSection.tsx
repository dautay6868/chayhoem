import TestimonialCard from "@/components/ui/testimonial-card";

const testimonials = [
  {
    id: 1,
    content: "Dịch vụ xe Carnival tuyệt vời. Xe mới, sạch sẽ và sang trọng. Tài xế chuyên nghiệp, lịch sự và đúng giờ. Chắc chắn sẽ sử dụng dịch vụ này một lần nữa.",
    author: {
      name: "Nguyễn Công Thành",
      position: "Giám đốc kinh doanh",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    rating: 5
  },
  {
    id: 2,
    content: "Chúng tôi đã sử dụng dịch vụ Carnival Limousine VIP cho chuyến công tác. Đội xe chuyên nghiệp, dịch vụ chu đáo. Sẽ tiếp tục hợp tác lâu dài.",
    author: {
      name: "Nguyễn Thị Huyền",
      position: "Quản lý nhân sự",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    rating: 5
  },
  {
    id: 3,
    content: "Đã thuê xe Carnival cho gia đình đi du lịch Hạ Long. Trải nghiệm tuyệt vời với không gian rộng rãi, thoải mái. Giá cả hợp lý cho dịch vụ cao cấp.",
    author: {
      name: "Nguyễn Anh Tuấn",
      position: "Kỹ sư phần mềm",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    rating: 4.5
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary font-montserrat mb-2">Khách Hàng Nói Gì Về Chúng Tôi</h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sự hài lòng của khách hàng là niềm tự hào và động lực để chúng tôi không ngừng cải thiện dịch vụ.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
