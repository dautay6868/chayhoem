import { scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Star } from "lucide-react";
import { useState, useEffect } from "react";
import carnivalHeroImage from "@/assets/images/carnival-hero.png";
import limousineHeroImage from "@/assets/images/limousine-hero.png";
import pickupHeroImage from "@/assets/images/pickup-hero.png";

export default function HeroSection() {
  const handleClick = (id: string) => {
    scrollToSection(id);
  };
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: carnivalHeroImage,
      title: "Cho Thuê Xe",
      highlight: "Carnival",
      subtitle: "& Limousine",
      description: "Trải nghiệm đẳng cấp và sang trọng cùng đội xe Carnival hiện đại"
    },
    {
      image: limousineHeroImage,
      title: "Dịch Vụ",
      highlight: "Limousine",
      subtitle: "Cao Cấp",
      description: "Đón tiễn sân bay chuyên nghiệp, đúng giờ với đội xe sang trọng"
    },
    {
      image: pickupHeroImage,
      title: "Dịch Vụ Xe",
      highlight: "Xe Ghép",
      subtitle: "Tour Du Lịch",
      description: "Lựa chọn hoàn hảo cho những chuyến du lịch gia đình và công ty"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            zIndex: currentSlide === index ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src={slide.image} 
            alt={`${slide.title} ${slide.highlight}`}
            className="absolute inset-0 w-full h-full transform motion-safe:animate-slow-zoom" 
            style={{
              objectFit: 'scale-down',
              objectPosition: 'center'
            }}
          />
        </div>
      ))}
      
      {/* Content container */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ${currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{display: currentSlide === index ? 'block' : 'none'}}
              >
                {currentSlide === 0 ? (
                  <h1 className="text-[22px] sm:text-3xl md:text-5xl font-bold text-white font-montserrat mb-4 relative">
                    <div className="w-full text-center flex flex-col">
                      <span className="relative z-10 mb-1">Cho Thuê Xe</span>
                      <span className="text-primary bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent block whitespace-nowrap">Carnival &amp; Limousine</span>
                    </div>
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
                  </h1>
                ) : (
                  <>
                    <h2 className="text-white text-xl md:text-2xl font-light mb-2 tracking-wider relative inline-block">
                      <span className="relative z-10">{slide.title}</span>
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary/30"></span>
                    </h2>
                    <h1 className="text-2xl md:text-7xl font-bold text-white font-montserrat mb-4 relative">
                      <div className="w-full text-center px-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        <span className="text-primary bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent inline">{slide.highlight}</span>
                        <span className="inline"> {slide.subtitle}</span>
                      </div>
                      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
                    </h1>
                  </>
                )}
                <div className="flex items-center justify-center mb-8">
                  <div className="h-0.5 w-16 bg-white/40"></div>
                  <div className="flex px-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-primary animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                  <div className="h-0.5 w-16 bg-white/40"></div>
                </div>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
              </div>
            ))}
            
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8 relative z-20">
              <Button 
                onClick={() => handleClick("booking")}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Đặt Xe Ngay <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
              <Button 
                onClick={() => handleClick("services")}
                variant="outline" 
                className="border-2 border-white hover:border-primary text-white hover:text-primary bg-transparent rounded-full px-8 py-6 text-lg font-bold group"
              >
                <span className="group-hover:scale-105 transition-transform inline-block">Khám Phá Dịch Vụ</span>
              </Button>
            </div>
            
            {/* Slider dots */}
            <div className="flex justify-center mt-12 space-x-4">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`group flex flex-col items-center transition-all duration-500 ${
                    currentSlide === index ? 'scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full mb-1.5 transition-all duration-300 ${
                    currentSlide === index ? 'bg-primary' : 'bg-white/60 group-hover:bg-white'
                  }`}></span>
                  <span className={`text-xs font-light tracking-wider transition-all duration-300 ${
                    currentSlide === index ? 'text-primary' : 'text-white/60 group-hover:text-white'
                  }`}>
                    {index === 0 ? 'Carnival' : index === 1 ? 'Limousine' : 'Tour'}
                  </span>
                  <span className={`h-0.5 w-0 group-hover:w-full mt-1 transition-all duration-300 ${
                    currentSlide === index ? 'bg-primary w-full' : 'bg-white/0'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 group"
        onClick={() => handleClick("about")}
      >
        <div className="flex flex-col items-center relative">
          <span className="text-white text-sm mb-2 group-hover:text-primary transition-colors duration-300">Cuộn xuống</span>
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex items-start justify-center p-1 group-hover:border-primary transition-colors duration-300">
            <div className="w-1.5 h-3 bg-white/80 rounded-full animate-float group-hover:bg-primary transition-colors duration-300"></div>
          </div>
          <div className="absolute -bottom-6 opacity-70">
            <ChevronDown className="h-5 w-5 text-white animate-bounce group-hover:text-primary transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
