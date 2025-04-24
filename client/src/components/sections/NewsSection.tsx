import { Button } from "@/components/ui/button";
import NewsCard from "@/components/ui/news-card";
import { newsItems } from "@/data/news";
import { Link } from "wouter";

export default function NewsSection() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary font-montserrat mb-2">Tin Tức & Cẩm Nang</h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cập nhật những thông tin mới nhất về dịch vụ xe và kinh nghiệm du lịch hữu ích
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/tin-tuc">
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2">
              Xem thêm tin tức
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}