import React, { useState } from 'react';
import { newsItems } from '@/data/news';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import NewsCard from '@/components/ui/news-card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function News() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'airport-service', label: 'Đưa đón sân bay' },
    { id: 'travel-guide', label: 'Cẩm nang du lịch' },
    { id: 'tips', label: 'Mẹo hay' },
  ];
  
  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(news => news.category === activeCategory);
  
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
      
      <section className="pt-8 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary font-montserrat mb-2">Tin Tức & Cẩm Nang</h1>
            <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cập nhật những thông tin mới nhất về dịch vụ xe và kinh nghiệm du lịch hữu ích
            </p>
          </div>
          
          <div className="mb-8 flex justify-center">
            <Tabs defaultValue="all" className="w-full max-w-3xl" onValueChange={setActiveCategory}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map(category => (
                <TabsContent key={category.id} value={category.id} className="mt-8">
                  {category.id === activeCategory && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredNews.length > 0 ? (
                        filteredNews.map(news => (
                          <NewsCard key={news.id} news={news} />
                        ))
                      ) : (
                        <div className="col-span-full text-center py-16">
                          <h3 className="text-xl font-semibold text-gray-600">Không có tin tức nào trong mục này</h3>
                          <p className="text-gray-500 mt-2">Vui lòng quay lại sau.</p>
                        </div>
                      )}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}