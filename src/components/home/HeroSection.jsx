"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import { Sparkles, ArrowRight, CheckCircle2, Award, Phone, ShieldCheck, GraduationCap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const examTags = [
  { name: "JEE Mains", href: "/jeemainschemistry" },
  { name: "JEE Advanced", href: "/jeeadvancechemistry" },
  { name: "NEET UG", href: "/neetchemistry" },
  { name: "CBSE & State Boards", href: "/engineering-class-12" },
  { name: "All-India Test Series", href: "https://testseries-nine.vercel.app/" },
  { name: "Career Portal", href: "/Carrier" },
];

export default function HeroSection() {
  const whatsappUrl =
    "https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20would%20like%20to%20book%20a%20Free%20Chemistry%20Demo%20Class%20and%20counseling%20session.";

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-royal-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Credential Badges & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Top Credential Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs sm:text-sm font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Admissions Open 2027–28 • Limited Batch for 1-on-1, 1 to 10 Focus</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-bold block">
                Kota&apos;s Veteran Chemistry Educator
              </span>
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-heading font-black tracking-tight leading-[1.15] text-white">
                Master <span className="text-royal-400">JEE &amp; NEET</span> Chemistry with <br />
                <span className="text-gradient-gold inline-block">Vikash Kumar (CVK Sir)</span>
              </h1>
            </div>

            {/* Credential summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Stop memorizing reactions blindly. Learn Chemistry conceptually from{" "}
              <strong className="text-white font-semibold">B.Tech NIT Rourkela</strong> and{" "}
              <strong className="text-white font-semibold">Super 30</strong> alumnus Vikash Kumar, bringing{" "}
              <strong className="text-gold-300 font-bold px-1.5 py-0.5 rounded bg-gold-400/15 border border-gold-400/30 whitespace-nowrap">
                10+ years
              </strong>{" "}
              of Kota coaching excellence (Resonance, Narayana, Aakash) straight to your preparation.
            </p>

            {/* 4 Core Pillars of Teaching */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto lg:mx-0 text-left pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Visual Reaction Mechanisms (Organic)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-royal-400 flex-shrink-0" />
                <span>45-Sec Numerical Shortcuts (Physical)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>100% NCERT Line-by-Line (Inorganic)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct 1-on-1 WhatsApp Doubt Support</span>
              </div>
            </div>

            {/* High-Conversion Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a href="#inquiry" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-500 hover:to-royal-600 text-white font-bold px-8 py-6 text-sm sm:text-base rounded-xl shadow-lg shadow-royal-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-gold-300" />
                  <span>Book Free Demo Class</span>
                  <ArrowRight className="w-4 h-4" />
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
                  className="w-full sm:w-auto border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 px-6 py-6 text-sm sm:text-base rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <FaWhatsapp className="w-5 h-5 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </a>

              <a href="tel:+918457876843" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/10 hover:bg-white/5 text-slate-300 px-5 py-6 text-sm rounded-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-royal-400" />
                  <span>Call Sir</span>
                </Button>
              </a>
            </div>

            {/* Quick Examination Filter Pills */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-2.5 text-center lg:text-left">
                Explore Preparation Notes &amp; Syllabi
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {examTags.map((tag, idx) => (
                  <Link
                    key={idx}
                    href={tag.href}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-navy-850 hover:bg-royal-600/20 border border-white/10 hover:border-royal-400 text-slate-300 hover:text-white transition-all"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Genuine Photo with Orbital Rings and Credential Cards (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <Photo />

            {/* Floating Credential Card 1 - Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-3 sm:top-4 -left-2 sm:left-0 z-20 p-3 sm:p-3.5 rounded-2xl bg-navy-950/90 backdrop-blur-md border border-royal-400/40 shadow-xl flex items-center gap-3 text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-royal-600/20 border border-royal-400/30 flex items-center justify-center text-royal-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Verified Pedigree
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  NIT Rourkela • Super 30
                </span>
              </div>
            </motion.div>

            {/* Floating Credential Card 2 - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 sm:bottom-6 -right-2 sm:right-2 z-20 p-3 sm:p-3.5 rounded-2xl bg-navy-950/90 backdrop-blur-md border border-gold-400/40 shadow-xl flex items-center gap-3 text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-gold-500/20 border border-gold-400/30 flex items-center justify-center text-gold-400 font-black text-sm">
                99.8
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Top Chemistry Score
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  99.77 %ile (JEE Mains)
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
