"use client";

import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import StatsSection from "@/components/home/StatsSection";
import CoursesSection from "@/components/home/CoursesSection";
import MethodologySection from "@/components/home/MethodologySection";
import ResultsSection from "@/components/home/ResultsSection";
import ClassroomGallerySection from "@/components/home/ClassroomGallerySection";
import InquirySection from "@/components/home/InquirySection";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/home/CtaBanner";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const whatsappUrl =
    "https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20am%20interested%20in%20Chemistry%20coaching%20for%20JEE/NEET.";

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-accent selection:text-primary">
      {/* 1. ORIGINAL BELOVED HERO SECTION */}
      <section className="container mx-auto flex-1 px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-10">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg xl:text-xl tracking-wider">KOTA&apos;S EXPERIENCED </span>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold mb-6">
              CHEMISTRY MENTOR <br />
              <span className="text-accent">VIKASH KUMAR</span>
            </h1>
            <span className="text-yellow-500 text-lg block mb-4">
              Passionate about making Chemistry easy and interesting.
            </span>

            <p className="max-w-[500px] mb-6 text-white/80 mx-auto xl:mx-0">
              SENIOR CHEMISTRY LECTURER WITH 10+ YRS OF EXPERIENCE
            </p>

            {/* Exam Buttons */}
            <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6">
              <a href="/jeeadvancechemistry">
                <Button variant="outline" size="lg" className="w-full">
                  JEE Advance
                </Button>
              </a>
              <a href="/jeemainschemistry">
                <Button variant="outline" size="lg" className="w-full">
                  JEE Mains
                </Button>
              </a>
              <a href="/neetchemistry">
                <Button variant="outline" size="lg" className="w-full">
                  NEET
                </Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg" className="w-full">
                  CBSE Board
                </Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg" className="w-full">
                  ICSE Board
                </Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg" className="w-full">
                  CUET
                </Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg" className="w-full">
                  OLYMPIAD
                </Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg" className="w-full">
                  KVPY Exam
                </Button>
              </a>
              <a href="/ComingSoon">
                <Button variant="outline" size="lg" className="w-full">
                  NTSE
                </Button>
              </a>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 pt-2">
              <a href="#inquiry" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-accent text-primary font-bold hover:bg-accent-hover px-6 py-5 rounded-xl flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Book Free Demo Class
                </Button>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-accent/60 text-white hover:bg-accent/10 px-6 py-5 rounded-xl flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Photo with Original Animated Orbiting Rings */}
          <div className="order-first xl:order-last mb-6 xl:mb-0">
            <Photo />
          </div>
        </div>
      </section>

      {/* 2. Key Stats Counter Bar */}
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

      {/* 10. Modern, Compliant Footer with Privacy Policy Link */}
      <Footer />
    </main>
  );
}
