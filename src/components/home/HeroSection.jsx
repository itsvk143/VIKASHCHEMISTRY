"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, CheckCircle2, Award, Users, BookOpen } from "lucide-react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function HeroSection() {
  const whatsappUrl =
    "https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20would%20like%20to%20book%20a%20Free%20Demo%20Class%20and%20counseling%20session%20for%20Chemistry.";

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-20 text-white">
      {/* Background ambient lighting gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Top Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Admissions Open 2025–26 • Limited Batch for 1-on-1 Focus</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.15] mb-6">
              Crack <span className="text-accent">JEE & NEET</span> Chemistry with Kota&apos;s Elite Mentor
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              Stop memorizing reactions blindly. Learn Chemistry intuitively from{" "}
              <strong className="text-white font-semibold">Vikash Kumar (CVK Sir)</strong> — B.Tech from{" "}
              <span className="text-accent font-medium">NIT Rourkela</span>,{" "}
              <span className="text-accent font-medium">Magadh Super 30</span> alumnus, with 10+ years of Kota coaching excellence.
            </p>

            {/* Value Proposition Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-sm text-white/90 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Visual Reaction Mechanisms (Organic)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Kota Speed Shortcuts (Physical)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span>100% NCERT Line-by-Line (Inorganic)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/90 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Direct WhatsApp Doubt Resolution</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#inquiry" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent text-primary font-bold hover:bg-accent-hover px-8 py-6 text-base rounded-xl shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2"
                >
                  Book Free Demo Class
                  <ArrowRight className="w-5 h-5" />
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
                  size="lg"
                  className="w-full sm:w-auto border-accent/40 text-white hover:bg-accent/10 px-6 py-6 text-base rounded-xl flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </a>

              <a href="tel:+918457876843" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/20 text-white/80 hover:bg-white/5 px-5 py-6 text-base rounded-xl flex items-center justify-center gap-2"
                >
                  <FaPhoneAlt className="w-4 h-4 text-accent" />
                  <span>Call Now</span>
                </Button>
              </a>
            </div>

            {/* Quick Trust Stat */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <span><strong>NIT Rourkela</strong> Graduate</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span><strong>1,300+</strong> Top Selections</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent" />
                <span><strong>Super 30</strong> Alumnus</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Interactive Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Outer Aura Ring */}
            <div className="relative w-[320px] sm:w-[420px] h-[360px] sm:h-[460px] flex justify-center items-center">
              
              {/* Radial gradient backing */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-primary to-transparent rounded-full blur-2xl -z-10" />

              {/* Glowing Outline Box */}
              <div className="relative w-full h-full rounded-3xl border border-accent/30 bg-gradient-to-b from-white/[0.04] to-transparent p-4 flex flex-col justify-end items-center overflow-hidden shadow-2xl">
                
                {/* Photo */}
                <div className="relative w-[280px] sm:w-[350px] h-[320px] sm:h-[400px]">
                  <Image
                    src="/assets/photo.png"
                    alt="Vikash Kumar (CVK Sir) - Chemistry Mentor"
                    priority
                    fill
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Floating Badge Top-Left: Credentials */}
                <div className="absolute top-6 left-4 bg-primary/90 border border-accent/40 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase font-semibold">Credentials</p>
                    <p className="text-sm font-bold text-white">NIT Rourkela | Super 30</p>
                  </div>
                </div>

                {/* Floating Badge Bottom-Right: Peak Result */}
                <div className="absolute bottom-6 right-4 bg-primary/90 border border-accent/40 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-sm">
                    99.8
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase font-semibold">Highest Chemistry</p>
                    <p className="text-sm font-bold text-accent">99.77%ile (JEE Mains)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
