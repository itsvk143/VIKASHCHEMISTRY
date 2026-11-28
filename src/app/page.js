"use client";

import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ResultsSection from "@/components/home/ResultsSection";
import AboutSection from "@/components/home/AboutSection";
import CoursesSection from "@/components/home/CoursesSection";
import MethodologySection from "@/components/home/MethodologySection";
import ClassroomGallerySection from "@/components/home/ClassroomGallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FreeResourcesSection from "@/components/home/FreeResourcesSection";
import FaqSection from "@/components/home/FaqSection";
import InquirySection from "@/components/home/InquirySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 text-slate-100 selection:bg-royal-600 selection:text-white flex flex-col justify-between">
      {/* 1. Premium Navigation & Hero */}
      <HeroSection />

      {/* 2. Verified Trust Statistics */}
      <StatsSection />

      {/* 3. Student Achievements and Results */}
      <ResultsSection />

      {/* 4. About Vikash Kumar (NIT Rourkela & Super 30 Pedigree) */}
      <AboutSection />

      {/* 5. Courses and Examination Programmes */}
      <CoursesSection />

      {/* 6. Teaching Methodology (Kota 3-Pillar Framework) */}
      <MethodologySection />

      {/* Authentic Classroom Moments Gallery */}
      <ClassroomGallerySection />

      {/* 7. Video Testimonials & Student Reviews */}
      <TestimonialsSection />

      {/* 8. Free Learning Resources & High-Yield Revision PDFs */}
      <FreeResourcesSection />

      {/* 9. Frequently Asked Questions */}
      <FaqSection />

      {/* 10. Contact & Conversion-Focused Inquiry Form */}
      <InquirySection />

      {/* Conversion-Focused Footer */}
      <Footer />
    </main>
  );
}
