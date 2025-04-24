import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Menu, X, PhoneCall, ChevronRight, Search } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import SearchDropdown from "@/components/ui/search-dropdown";

const navLinks = [
  { name: "Trang Chủ", href: "#" },
  { name: "Giới Thiệu", href: "/gioi-thieu", isPage: true },
  { name: "Sứ Mệnh", href: "/su-menh", isPage: true },
  { name: "Lịch Sử", href: "/lich-su", isPage: true },
  { name: "Dịch Vụ", href: "#services" },
  { name: "Đặt Xe", href: "#booking" },
  { name: "Tin Tức", href: "/tin-tuc", isPage: true },
  { name: "Liên Hệ", href: "#contact" },
];

const servicePages = [
  { name: "Thuê Xe Carnival Có Lái", href: "/dich-vu/thue-xe-carnival-co-lai" },
  { name: "Thuê Xe Limousine Có Lái", href: "/dich-vu/thue-xe-limousine-co-lai" },
  { name: "Đưa Đón Sân Bay", href: "/dich-vu/dua-don-san-bay" },
  { name: "Tour Tham Quan", href: "/dich-vu/tour-tham-quan" },
  { name: "Xe Ghép", href: "/dich-vu/xe-ghep" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScroll(100);
  const [activeLink, setActiveLink] = useState("#");
  const [location] = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1)).filter(Boolean);
      const scrollPosition = window.scrollY + 300;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveLink(`#${section}`);
          return;
        }
      }

      setActiveLink("#");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleServicesMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  const handleNavClick = (href: string, isPage: boolean = false) => {
    if (isPage) {
      // Navigate to a page using window.location to ensure full page navigation
      window.location.href = href;
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const id = href.substring(1);
      scrollToSection(id);
    }
    
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  
  // Xử lý tìm kiếm
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchKeyword(value);
    setShowSearchDropdown(value.trim().length > 0);
  };
  
  const handleSearchItemClick = (url: string) => {
    // Phân biệt giữa phần trên trang và trang mới
    if (url.startsWith('/#')) {
      const id = url.substring(2);
      scrollToSection(id);
    } else if (url === '/') {
      window.location.href = url;
    } else {
      window.location.href = url;
    }
    
    // Reset search
    setSearchKeyword('');
    setShowSearchDropdown(false);
    if (searchInputRef.current) {
      searchInputRef.current.blur();
    }
  };

  return (
    <nav 
      className={cn(
        "bg-white/95 backdrop-blur-sm border-b border-gray-100 py-0 w-full z-40 transition-all duration-300",
        isScrolled && "fixed top-0 shadow-md"
      )}
      id="navigation"
    >
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex justify-center items-center mx-auto">
            {navLinks.map((link) => (
              link.name === "Dịch Vụ" ? (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className={cn(
                      "text-gray-700 font-semibold py-4 mx-3 lg:mx-5 border-b-2 transition-all duration-200 flex items-center",
                      activeLink === link.href 
                        ? "border-primary text-primary" 
                        : "border-transparent hover:text-primary hover:border-primary/30"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m6 9 6 6 6-6"/></svg>
                  </a>
                  
                  <div className="absolute left-0 mt-0 w-60 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top-left z-50">
                    {servicePages.map((servicePage) => (
                      <Link
                        key={servicePage.name}
                        href={servicePage.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary"
                      >
                        {servicePage.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-gray-700 font-semibold py-4 mx-3 lg:mx-5 border-b-2 transition-all duration-200",
                    activeLink === link.href 
                      ? "border-primary text-primary" 
                      : "border-transparent hover:text-primary hover:border-primary/30"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href, link.isPage);
                  }}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
          
          {/* Search component */}
          <div className="hidden lg:block relative ml-4">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchKeyword}
                onChange={handleSearchChange}
                placeholder="Tìm kiếm..."
                className="py-2 pl-10 pr-4 w-[220px] rounded-md bg-gray-100 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            {showSearchDropdown && (
              <SearchDropdown 
                keyword={searchKeyword}
                onItemClick={handleSearchItemClick}
                onClose={() => setShowSearchDropdown(false)}
              />
            )}
          </div>
        </div>
        
        <div className="md:hidden flex justify-between items-center py-3">
          <button 
            className="text-gray-700 focus:outline-none rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-amber-100 flex items-center px-3 py-1.5 transition-all duration-300 border border-transparent hover:border-primary/20"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-5 w-5 text-primary" />
            <span className="ml-1.5 text-base font-medium bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent">Menu</span>
            <span className="ml-1 relative w-1.5 h-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
          </button>
          
          <a href="tel:+84967478123" className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-primary/20 bg-gradient-to-r from-amber-50 to-transparent">
            <PhoneCall className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">0967.478.123</span>
          </a>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-900 z-[9999] md:hidden" style={{ backgroundColor: '#333' }}>
            <div className="px-4 py-3 border-b border-gray-800 flex justify-between items-center">
              <div className="text-white text-lg font-semibold">Menu</div>
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-full bg-gray-800 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Mobile search */}
            <div className="p-4 border-b border-gray-700 bg-gray-800">
              <div className="relative">
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={handleSearchChange}
                  placeholder="Tìm kiếm..."
                  className="py-2 pl-10 pr-4 w-full rounded-md bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-gray-100"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              
              {showSearchDropdown && (
                <SearchDropdown 
                  keyword={searchKeyword}
                  onItemClick={handleSearchItemClick}
                  onClose={() => setShowSearchDropdown(false)}
                />
              )}
            </div>
            
            <div className="py-1">
              <div className="flex flex-col">
                <Link href="/"
                   className="px-4 py-3.5 text-gray-100 flex justify-between items-center border-b border-gray-700 bg-gray-800"
                   onClick={() => setMobileMenuOpen(false)}>
                  <span>Trang chủ</span>
                </Link>
                
                <Link href="/gioi-thieu"
                   className="px-4 py-3.5 text-gray-100 flex justify-between items-center border-b border-gray-700 bg-gray-800"
                   onClick={() => setMobileMenuOpen(false)}>
                  <span>Giới thiệu</span>
                </Link>
                
                <Link href="/su-menh"
                   className="px-4 py-3.5 text-gray-100 flex justify-between items-center border-b border-gray-700 bg-gray-800"
                   onClick={() => setMobileMenuOpen(false)}>
                  <span>Sứ mệnh</span>
                </Link>
                
                <Link href="/lich-su"
                   className="px-4 py-3.5 text-gray-100 flex justify-between items-center border-b border-gray-700 bg-gray-800"
                   onClick={() => setMobileMenuOpen(false)}>
                  <span>Lịch sử</span>
                </Link>
                
                <div className="border-b border-gray-700">
                  <a href="#" onClick={toggleServicesMenu}
                     className="px-4 py-3.5 text-gray-100 flex justify-between items-center bg-gray-800">
                    <span>Thuê xe</span>
                    <ChevronRight className={cn("h-5 w-5 text-gray-400 transition-transform", servicesOpen && "rotate-90")} />
                  </a>
                  {servicesOpen && (
                    <div className="border-t border-gray-700">
                      {servicePages.map((servicePage) => (
                        <Link
                          key={servicePage.name}
                          href={servicePage.href}
                          className="block px-8 py-3 text-gray-300 border-b border-gray-700 bg-gray-700 hover:bg-gray-600"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            // Force navigation to the service page
                            window.location.href = servicePage.href;
                          }}
                        >
                          {servicePage.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <a href="#booking"
                   className="px-4 py-3.5 text-gray-100 flex justify-between items-center border-b border-gray-700 bg-gray-800"
                   onClick={() => {
                     setMobileMenuOpen(false);
                     setTimeout(() => {
                       scrollToSection('booking');
                     }, 100);
                   }}>
                  <span>Đặt xe</span>
                </a>
                
                <Link href="/tin-tuc"
                   className="px-4 py-3.5 text-gray-100 flex justify-between items-center border-b border-gray-700 bg-gray-800"
                   onClick={() => {
                     setMobileMenuOpen(false);
                     window.location.href = "/tin-tuc";
                   }}>
                  <span>Tin tức</span>
                </Link>
                
                <a href="#contact"
                   className="px-4 py-3.5 text-gray-100 flex justify-between items-center bg-gray-800"
                   onClick={() => {
                     setMobileMenuOpen(false);
                     // Thêm timeout để đảm bảo menu đã đóng trước khi cuộn
                     setTimeout(() => {
                       scrollToSection('contact');
                     }, 100);
                   }}>
                  <span>Liên hệ</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}