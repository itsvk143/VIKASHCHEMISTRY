"use client";

import Link from "next/link";
import Social from "./Social";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Award, GraduationCap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 text-white pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-royal-600 flex items-center justify-center font-heading font-black text-white text-lg shadow-md">
                CVK
              </div>
              <div>
                <h3 className="text-xl font-heading font-extrabold tracking-tight text-white">
                  CVK <span className="text-royal-400">Sir</span>
                </h3>
                <span className="text-xs text-gold-400 font-semibold">
                  NIT Rourkela • Magadh Super 30 Alum
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Empowering IIT-JEE &amp; NEET aspirants with Kota&apos;s proven Chemistry methodology: visual reaction mechanisms, 45-second numerical algorithms, and dedicated 1-on-1 personal mentorship.
            </p>

            <div className="pt-2">
              <p className="text-xs uppercase font-bold text-slate-400 mb-3 tracking-wider">
                Follow On Social Media
              </p>
              <Social
                containerStyles="flex gap-3"
                iconStyles="w-9 h-9 border border-white/10 rounded-xl flex justify-center items-center text-slate-300 hover:text-white hover:border-royal-400 hover:bg-royal-600/20 transition-all"
              />
            </div>
          </div>

          {/* Column 2: Programs & Notes (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold text-royal-400 tracking-wider mb-4">
              Academic Programs
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/jeemainschemistry" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-royal-400" />
                  JEE Mains Chemistry
                </Link>
              </li>
              <li>
                <Link href="/jeeadvancechemistry" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-royal-400" />
                  JEE Advanced Chemistry
                </Link>
              </li>
              <li>
                <Link href="/neetchemistry" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-royal-400" />
                  NEET Chemistry 180 Target
                </Link>
              </li>
              <li>
                <Link href="/engineering-class-12" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-royal-400" />
                  Class 12 Boards &amp; Foundation
                </Link>
              </li>
              <li>
                <a
                  href="https://testseries-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-royal-400" />
                  All-India Online Test Series
                </a>
              </li>
              <li>
                <Link href="/Carrier" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-royal-400" />
                  Interactive Career Portal
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-royal-400" />
                  Teaching History &amp; Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-bold text-royal-400 tracking-wider mb-4">
              Direct Contact &amp; Center
            </h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href="https://wa.me/918457876843"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/40 hover:text-white transition-all group"
              >
                <FaWhatsapp className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">WhatsApp &amp; Phone</span>
                  <span className="font-semibold text-white group-hover:text-emerald-300">+91 84578 76843</span>
                </div>
              </a>

              <a
                href="mailto:itsvikash143@gmail.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-royal-500/40 hover:text-white transition-all group"
              >
                <Mail className="w-5 h-5 text-royal-400 flex-shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Email Inquiries</span>
                  <span className="font-semibold text-white group-hover:text-royal-300 break-all">itsvikash143@gmail.com</span>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Center Location</span>
                  Plot No. 125, Chandrasekharpur, Bhubaneswar, Odisha, 751016
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Vikash Kumar (CVK Sir). All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors underline">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/resume" className="hover:text-white transition-colors">
              Faculty Profile
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
