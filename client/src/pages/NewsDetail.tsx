import React from 'react';
import { useParams, useLocation, Link } from 'wouter';
import { getNewsBySlug } from '@/data/news';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { scrollToSection } from '@/lib/utils';

export default function NewsDetail() {
  const [, setLocation] = useLocation();
  const { slug } = useParams<{ slug: string }>();
  
  const news = getNewsBySlug(slug);
  
  if (!news) {
    return (
      <>
        <Header />
        <Navigation />
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h1>
          <p className="text-gray-600 mb-6">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Button 
            onClick={() => setLocation('/')}
            className="bg-primary text-white"
          >
            Quay về trang chủ
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'airport-service':
        return 'Đưa đón sân bay';
      case 'travel-guide':
        return 'Cẩm nang du lịch';
      case 'tips':
        return 'Mẹo hay';
      default:
        return 'Tin tức';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'airport-service':
        return 'bg-blue-100 text-blue-800';
      case 'travel-guide':
        return 'bg-green-100 text-green-800';
      case 'tips':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      
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

      <div className="container mx-auto px-4 py-12">
        
        <div className="max-w-4xl mx-auto">
          <Badge className={`${getCategoryColor(news.category)} px-3 py-1 mb-4`}>
            {getCategoryLabel(news.category)}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{news.title}</h1>
          
          <div className="flex items-center text-gray-500 mb-8">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{news.date}</span>
            <span className="mx-2">•</span>
            <User className="h-4 w-4 mr-1" />
            <span>{news.author}</span>
          </div>
          
          <div className="mb-8">
            <img 
              src={news.image} 
              alt={news.title} 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: news.content || '' }}></div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
            <Button 
              onClick={() => scrollToSection('booking')}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Đặt xe ngay
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => setLocation('/')}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Xem thêm tin tức
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}