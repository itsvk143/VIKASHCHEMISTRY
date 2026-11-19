"use client";

import Link from "next/link";
import Social from "./Social";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121216] border-t border-white/10 text-white pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <div className="border-2 border-accent rounded-full px-6 py-2 inline-flex items-center hover:bg-accent/10 transition-colors">
                <span className="text-xl font-bold tracking-wide uppercase text-white">
                  CVK <span className="text-accent">Sir</span>
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 max-w-md leading-relaxed">
              Empowering IIT-JEE &amp; NEET aspirants with Kota&apos;s proven Chemistry methodology, conceptual visual mechanisms, and personalized 1-on-1 mentorship.
            </p>

            <div className="pt-2">
              <p className="text-xs uppercase font-semibold text-white/50 mb-3 tracking-wider">
                Connect on Social Channels
              </p>
              <Social
                containerStyles="flex gap-4"
                iconStyles="w-10 h-10 border border-accent/40 rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
              />
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm uppercase font-bold text-accent tracking-wider mb-4">
              Programs &amp; Notes
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <Link href="/jeemainschemistry" className="hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-accent" />
                  JEE Mains Chemistry
                </Link>
              </li>
              <li>
                <Link href="/jeeadvancechemistry" className="hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-accent" />
                  JEE Advanced Chemistry
                </Link>
              </li>
              <li>
                <Link href="/neetchemistry" className="hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-accent" />
                  NEET Chemistry 180/180
                </Link>
              </li>
              <li>
                <a
                  href="https://testseries-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3 text-accent" />
                  All-India Online Test Series
                </a>
              </li>
              <li>
                <Link href="/Carrier" className="hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-accent" />
                  Career Guidance Roadmap
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-accent" />
                  Teaching History &amp; Results
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm uppercase font-bold text-accent tracking-wider mb-4">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/918457876843"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                  <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                </div>
                <span>+91 84578 76843 (WhatsApp &amp; Calls)</span>
              </a>

              <a
                href="mailto:itsvikash143@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span>itsvikash143@gmail.com</span>
              </a>

              <div className="flex items-start gap-3 text-white/80">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Plot No. 125, Chandrasekharpur, Bhubaneswar, Odisha, 751016</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} CVK Sir (Vikash Kumar). All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/privacy-policy" className="text-accent hover:underline font-semibold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
