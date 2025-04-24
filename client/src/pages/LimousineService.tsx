import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import LimousineServiceSection from "@/components/sections/LimousineServiceSection";
import BookingSection from "@/components/sections/BookingSection";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function LimousineService() {
  return (
    <div className="min-h-screen flex flex-col">
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
      
      <main className="flex-grow">
        <LimousineServiceSection />
        <BookingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}