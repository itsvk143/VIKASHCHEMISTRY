"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Phone, Compass, BookOpen, GraduationCap, Award, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import MobileNav from "./MobileNav";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "JEE Mains", path: "/jeemainschemistry" },
  { name: "NEET UG", path: "/neetchemistry" },
  { name: "Courses", path: "/#courses" },
  { name: "Results", path: "/#results" },
  { name: "About", path: "/#about" },
  { name: "Career Portal", path: "/Carrier" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-navy-950/90 backdrop-blur-md border-b border-white/10 text-white transition-all">
      {/* Top micro-bar for credibility */}
      <div className="hidden lg:block bg-gradient-to-r from-navy-950 via-royal-900/60 to-navy-950 border-b border-white/5 py-1.5 px-4 text-xs text-slate-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold-400 font-semibold">
              <Award className="w-3.5 h-3.5" /> NIT Rourkela (B.Tech) • Magadh Super 30 Alumnus
            </span>
            <span className="text-white/30">•</span>
            <span className="text-slate-300">10+ Years of Kota Coaching Pedigree</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300">Bhubaneswar Centre &amp; Online Nationwide</span>
            <a
              href="https://wa.me/918457876843"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-medium transition-colors"
            >
              <FaWhatsapp className="w-3.5 h-3.5" /> +91 84578 76843
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-600 via-royal-700 to-navy-900 border border-royal-400/40 flex items-center justify-center font-heading font-black text-white text-lg shadow-md shadow-royal-600/20 group-hover:border-gold-400/60 transition-all">
            CVK
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight">
                CVK <span className="text-royal-400 group-hover:text-gold-400 transition-colors">Sir</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300">
                Mentor
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium hidden sm:block">
              Premier Chemistry Faculty • IIT-JEE &amp; NEET
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-royal-400 font-semibold border-b-2 border-royal-400"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20would%20like%20to%20inquire%20about%20Chemistry%20coaching."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>

          <a
            href="#inquiry"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-500 hover:to-royal-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-royal-600/30 transition-all active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            <span>Book Free Demo</span>
          </a>
        </div>

        {/* Mobile Nav Drawer Toggle */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
