interface SearchItem {
  id: string; // Định danh duy nhất
  title: string; // Tiêu đề hiển thị
  keywords: string[]; // Từ khóa để tìm kiếm
  url: string; // URL dẫn đến trang hoặc phần
  type: 'page' | 'section'; // Loại: trang hoặc phần trên trang
  description?: string; // Mô tả ngắn (tuỳ chọn)
}

// Dữ liệu tìm kiếm bao gồm tất cả các trang và phần quan trọng
export const searchData: SearchItem[] = [
  // Trang chủ và các phần
  {
    id: 'home',
    title: 'Trang chủ',
    keywords: ['trang chủ', 'home', 'chính'],
    url: '/',
    type: 'page',
    description: 'Trang chủ cho dịch vụ cho thuê xe Carnival & Limousine'
  },
  {
    id: 'booking',
    title: 'Đặt xe',
    keywords: ['đặt xe', 'booking', 'thuê xe', 'book', 'đặt', 'giá'],
    url: '/#booking',
    type: 'section',
    description: 'Đặt xe trực tuyến nhanh chóng và tiện lợi'
  },
  {
    id: 'fleet',
    title: 'Đội xe',
    keywords: ['đội xe', 'fleet', 'các loại xe', 'xe', 'mẫu xe'],
    url: '/#fleet',
    type: 'section',
    description: 'Thông tin về các loại xe cho thuê'
  },
  {
    id: 'contact',
    title: 'Liên hệ',
    keywords: ['liên hệ', 'contact', 'gọi', 'điện thoại', 'email', 'địa chỉ'],
    url: '/#contact',
    type: 'section',
    description: 'Thông tin liên hệ và form gửi tin nhắn'
  },
  {
    id: 'services',
    title: 'Dịch vụ',
    keywords: ['dịch vụ', 'services', 'thuê xe', 'cho thuê'],
    url: '/#services',
    type: 'section',
    description: 'Các dịch vụ cho thuê xe'
  },
  
  // Các trang dịch vụ
  {
    id: 'carnival',
    title: 'Thuê Xe Carnival Có Lái',
    keywords: ['carnival', 'kia carnival', 'thuê carnival', 'xe 7 chỗ', '7 chỗ'],
    url: '/dich-vu/thue-xe-carnival-co-lai',
    type: 'page',
    description: 'Dịch vụ thuê xe Carnival cao cấp có lái'
  },
  {
    id: 'limousine',
    title: 'Thuê Xe Limousine Có Lái',
    keywords: ['limousine', 'thuê limousine', 'xe vip', 'xe sang'],
    url: '/dich-vu/thue-xe-limousine-co-lai',
    type: 'page',
    description: 'Dịch vụ thuê xe Limousine sang trọng có lái'
  },
  {
    id: 'airport',
    title: 'Đưa Đón Sân Bay',
    keywords: ['đưa đón sân bay', 'sân bay', 'nội bài', 'đưa đón', 'taxi sân bay'],
    url: '/dich-vu/dua-don-san-bay',
    type: 'page',
    description: 'Dịch vụ đưa đón sân bay chuyên nghiệp'
  },
  {
    id: 'tour',
    title: 'Tour Tham Quan',
    keywords: ['tour', 'tham quan', 'du lịch', 'city tour', 'đi chơi'],
    url: '/dich-vu/tour-tham-quan',
    type: 'page',
    description: 'Dịch vụ tour tham quan bằng xe sang'
  },
  {
    id: 'shared',
    title: 'Xe Ghép',
    keywords: ['xe ghép', 'ghép xe', 'share', 'đi chung', 'giá rẻ'],
    url: '/dich-vu/xe-ghep',
    type: 'page',
    description: 'Dịch vụ xe ghép tiết kiệm chi phí'
  },
  
  // Các trang khác
  {
    id: 'about',
    title: 'Giới Thiệu',
    keywords: ['giới thiệu', 'about', 'về chúng tôi', 'công ty'],
    url: '/gioi-thieu',
    type: 'page',
    description: 'Thông tin về dịch vụ thuê xe của chúng tôi'
  },
  {
    id: 'news',
    title: 'Tin Tức',
    keywords: ['tin tức', 'news', 'bài viết', 'blog', 'cẩm nang'],
    url: '/tin-tuc',
    type: 'page',
    description: 'Tin tức và cẩm nang du lịch'
  }
];

// Hàm tìm kiếm dựa trên từ khóa
export function searchByKeyword(keyword: string): SearchItem[] {
  if (!keyword || keyword.trim() === '') {
    return [];
  }
  
  // Chuẩn hóa từ khóa tìm kiếm (loại bỏ dấu, chuyển thành chữ thường)
  const normalizedKeyword = keyword.toLowerCase().trim();
  
  return searchData.filter(item => {
    // Tìm trong tiêu đề
    if (item.title.toLowerCase().includes(normalizedKeyword)) {
      return true;
    }
    
    // Tìm trong từ khóa
    return item.keywords.some(k => k.toLowerCase().includes(normalizedKeyword));
  });
}