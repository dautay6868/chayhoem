import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { NewsItem } from '@/data/news';
import { Link } from 'wouter';

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${getCategoryColor(news.category)} px-3 py-1`}>
            {getCategoryLabel(news.category)}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-2">
        <h3 className="text-xl font-semibold line-clamp-2 text-gray-800 hover:text-primary transition-colors duration-300">
          {news.title}
        </h3>
      </CardHeader>
      
      <CardContent className="p-4 pt-0 flex-1">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{news.date}</span>
          <span className="mx-2">•</span>
          <span>{news.author}</span>
        </div>
        <p className="text-gray-600 line-clamp-3">
          {news.summary}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link href={`/tin-tuc/${news.slug}`} className="text-primary font-medium hover:underline flex items-center">
          Đọc thêm
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
}