import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import CoursesSection from "@/components/home/CoursesSection";
import MethodologySection from "@/components/home/MethodologySection";
import ResultsSection from "@/components/home/ResultsSection";
import ClassroomGallerySection from "@/components/home/ClassroomGallerySection";
import InquirySection from "@/components/home/InquirySection";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/home/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white flex flex-col selection:bg-accent selection:text-primary">
      {/* 1. Hero Section with dynamic badges and dual CTAs */}
      <HeroSection />

      {/* 2. Key Impact Stats & Numbers */}
      <StatsSection />

      {/* 3. Comprehensive Target Programs & Courses */}
      <CoursesSection />

      {/* 4. The Kota 3-Pillar Methodology */}
      <MethodologySection />

      {/* 5. Wall of Fame: Top Percentilers & Rankers */}
      <ResultsSection />

      {/* 6. Live Classroom Moments Gallery */}
      <ClassroomGallerySection />

      {/* 7. Fast 30-Second Inquiry & Free Demo Booking */}
      <InquirySection />

      {/* 8. Student & Parent FAQ Accordion */}
      <FaqSection />

      {/* 9. Final High-Energy Conversion Banner */}
      <CtaBanner />

      {/* 10. Modern, Compliant Footer */}
      <Footer />
    </main>
  );
}
