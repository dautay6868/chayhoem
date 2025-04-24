import airportServiceImg from '@/assets/images/news/airport-service.jpeg';
import limousineServiceImg from '@/assets/images/news/limousine-service.jpeg';
import travelTipsImg from '@/assets/images/news/travel-tips.jpeg';

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  author: string;
  summary: string;
  content?: string; // Nội dung đầy đủ của bài viết (nếu có)
  image: string;
  slug: string;
  category: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Dịch vụ đưa đón sân bay Nội Bài - Giải pháp di chuyển cao cấp cho doanh nhân",
    date: "25/03/2025",
    author: "Admin",
    summary: "Với dịch vụ đưa đón sân bay Nội Bài bằng xe Carnival VIP, chúng tôi cam kết mang đến trải nghiệm di chuyển cao cấp, tiện nghi cho doanh nhân và khách hàng thượng lưu.",
    content: `
      <h2>Dịch vụ đưa đón sân bay Nội Bài - Trải nghiệm di chuyển đẳng cấp</h2>
      
      <p>Trong thời đại kinh doanh toàn cầu, việc di chuyển đến sân bay là một phần không thể thiếu trong lịch trình của các doanh nhân. Thấu hiểu nhu cầu này, chúng tôi cung cấp dịch vụ đưa đón sân bay Nội Bài với xe Carnival VIP, mang đến giải pháp di chuyển hoàn hảo.</p>
      
      <h3>Vì sao nên chọn dịch vụ đưa đón sân bay của chúng tôi?</h3>
      <ul>
        <li>Đội xe sang trọng, mới 100%</li>
        <li>Tài xế chuyên nghiệp, nhiều kinh nghiệm</li>
        <li>Dịch vụ đúng giờ, chính xác</li>
        <li>Giá cả cạnh tranh, minh bạch</li>
      </ul>
      
      <p>Không chỉ đơn thuần là dịch vụ vận chuyển, chúng tôi mang đến trải nghiệm di chuyển đẳng cấp với những tiện nghi cao cấp trên xe như ghế massage, hệ thống giải trí đa phương tiện, không gian rộng rãi để bạn có thể làm việc hoặc thư giãn trên đường.</p>
      
      <h3>Quy trình đặt xe đơn giản</h3>
      <p>Chỉ với vài thao tác đơn giản trên website hoặc một cuộc gọi, bạn đã có thể đặt xe đưa đón sân bay với chúng tôi. Chúng tôi sẽ xác nhận thông tin và chuẩn bị phương tiện phù hợp với nhu cầu của bạn.</p>
      
      <h3>Kết luận</h3>
      <p>Dịch vụ đưa đón sân bay Nội Bài của chúng tôi là giải pháp hoàn hảo cho những ai đề cao sự chuyên nghiệp và đẳng cấp trong mỗi hành trình. Hãy liên hệ ngay để trải nghiệm dịch vụ!</p>
    `,
    image: airportServiceImg,
    slug: "dich-vu-dua-don-san-bay-noi-bai",
    category: "airport-service"
  },
  {
    id: 2,
    title: "Top 5 điểm du lịch phù hợp cho thuê xe du lịch 7 chỗ tại miền Bắc",
    date: "18/03/2025",
    author: "Admin",
    summary: "Khám phá những điểm đến du lịch tuyệt vời tại miền Bắc Việt Nam với dịch vụ thuê xe Carnival 7 chỗ sang trọng, phù hợp cho chuyến đi gia đình và nhóm bạn.",
    content: `
      <h2>Top 5 điểm du lịch miền Bắc phù hợp cho thuê xe 7 chỗ</h2>
      
      <p>Miền Bắc Việt Nam nổi tiếng với nhiều cảnh đẹp thiên nhiên và di sản văn hóa phong phú. Với một nhóm gia đình hoặc bạn bè, việc thuê xe 7 chỗ là lựa chọn lý tưởng để khám phá những điểm đến này. Dưới đây là top 5 điểm du lịch tuyệt vời bạn nên ghé thăm:</p>
      
      <h3>1. Vịnh Hạ Long - Di sản thiên nhiên thế giới</h3>
      <p>Vịnh Hạ Long nổi tiếng với hàng nghìn hòn đảo đá vôi và hang động kỳ thú. Từ Hà Nội, bạn có thể thuê xe Carnival 7 chỗ để di chuyển thoải mái đến Hạ Long, tận hưởng không gian rộng rãi và tiện nghi trên xe.</p>
      
      <h3>2. Sa Pa - Thiên đường trong sương</h3>
      <p>Sa Pa thu hút du khách bởi khung cảnh ruộng bậc thang tuyệt đẹp và văn hóa đặc sắc của đồng bào dân tộc thiểu số. Chuyến đi từ Hà Nội đến Sa Pa kéo dài khoảng 6 giờ, vì vậy một chiếc xe 7 chỗ rộng rãi sẽ giúp bạn có chuyến đi thoải mái.</p>
      
      <h3>3. Ninh Bình - "Hạ Long trên cạn"</h3>
      <p>Ninh Bình quyến rũ với Tràng An, Tam Cốc - Bích Động và các di tích lịch sử như cố đô Hoa Lư. Đây là điểm đến lý tưởng cho chuyến đi ngắn ngày từ Hà Nội.</p>
      
      <h3>4. Mai Châu - Bình yên giữa núi rừng</h3>
      <p>Mai Châu là điểm đến hoàn hảo cho những ai yêu thích không gian yên bình và văn hóa dân tộc Thái. Với cung đường đèo dốc, việc di chuyển bằng xe 7 chỗ là lựa chọn an toàn và thoải mái.</p>
      
      <h3>5. Mộc Châu - Cao nguyên xanh mát</h3>
      <p>Mộc Châu nổi tiếng với những đồi chè xanh mướt, vườn hoa, và không khí trong lành. Đặc biệt vào mùa hoa cải và hoa mận nở, Mộc Châu trở thành thiên đường cho những người yêu nhiếp ảnh.</p>
      
      <h3>Kết luận</h3>
      <p>Với dịch vụ thuê xe Carnival 7 chỗ của chúng tôi, bạn có thể thoải mái khám phá những điểm đến tuyệt vời này cùng gia đình và bạn bè. Hãy liên hệ ngay để nhận tư vấn và báo giá chi tiết!</p>
    `,
    image: limousineServiceImg,
    slug: "top-5-diem-du-lich-mien-bac",
    category: "travel-guide"
  },
  {
    id: 3,
    title: "Hướng dẫn đặt xe VIP đưa đón sân bay tiết kiệm chi phí",
    date: "10/03/2025",
    author: "Admin",
    summary: "Bài viết chia sẻ những kinh nghiệm đặt xe VIP đưa đón sân bay với mức giá tốt nhất, giúp bạn vừa tiết kiệm chi phí vừa có được dịch vụ chất lượng cao.",
    content: `
      <h2>Kinh nghiệm đặt xe VIP đưa đón sân bay tiết kiệm chi phí</h2>
      
      <p>Dịch vụ đưa đón sân bay bằng xe VIP ngày càng được nhiều người lựa chọn nhờ sự tiện lợi và đẳng cấp. Tuy nhiên, làm thế nào để vừa tận hưởng dịch vụ chất lượng vừa tiết kiệm chi phí? Dưới đây là những kinh nghiệm quý báu mà chúng tôi muốn chia sẻ:</p>
      
      <h3>1. Đặt xe sớm</h3>
      <p>Việc đặt xe trước ít nhất 24-48 giờ không chỉ đảm bảo bạn có xe đúng giờ mà còn giúp tiết kiệm chi phí so với đặt xe gấp. Nhiều công ty, bao gồm cả chúng tôi, thường có ưu đãi cho khách hàng đặt xe sớm.</p>
      
      <h3>2. Tìm hiểu về các gói dịch vụ</h3>
      <p>Các công ty vận chuyển thường có nhiều gói dịch vụ khác nhau. Hãy tìm hiểu kỹ để chọn gói phù hợp với nhu cầu của bạn, tránh trả tiền cho những dịch vụ không cần thiết.</p>
      
      <h3>3. Đi nhóm để chia sẻ chi phí</h3>
      <p>Nếu bạn đi cùng đồng nghiệp hoặc bạn bè, việc thuê một chiếc xe lớn hơn và chia sẻ chi phí có thể tiết kiệm hơn nhiều so với mỗi người thuê một xe riêng.</p>
      
      <h3>4. Đăng ký thành viên hoặc khách hàng thường xuyên</h3>
      <p>Nhiều công ty vận chuyển có chương trình khách hàng thân thiết với nhiều ưu đãi. Nếu bạn thường xuyên di chuyển, hãy đăng ký làm thành viên để được hưởng các đặc quyền này.</p>
      
      <h3>5. So sánh giá từ nhiều nhà cung cấp</h3>
      <p>Đừng vội vàng chọn dịch vụ đầu tiên bạn tìm thấy. Hãy dành thời gian so sánh giá và dịch vụ từ ít nhất 2-3 nhà cung cấp để có lựa chọn tốt nhất.</p>
      
      <h3>6. Đặt xe hai chiều</h3>
      <p>Nếu bạn cần dịch vụ đưa đón, việc đặt xe cả hai chiều (đi và về) thường sẽ có giá ưu đãi hơn so với đặt riêng lẻ.</p>
      
      <h3>Kết luận</h3>
      <p>Với những kinh nghiệm trên, bạn hoàn toàn có thể tận hưởng dịch vụ xe VIP đưa đón sân bay chất lượng cao mà không phải chi trả quá nhiều. Tại công ty chúng tôi, chúng tôi cam kết mang đến dịch vụ tốt nhất với mức giá hợp lý nhất.</p>
    `,
    image: travelTipsImg,
    slug: "huong-dan-dat-xe-vip-tiet-kiem",
    category: "tips"
  }
];

// Hàm lấy tin tức theo ID
export function getNewsById(id: number): NewsItem | undefined {
  return newsItems.find(item => item.id === id);
}

// Hàm lấy tin tức theo slug
export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find(item => item.slug === slug);
}

// Hàm lấy tin tức theo danh mục
export function getNewsByCategory(category: string): NewsItem[] {
  return newsItems.filter(item => item.category === category);
}