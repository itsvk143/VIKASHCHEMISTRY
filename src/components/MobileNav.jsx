"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Sparkles, Phone, ArrowRight, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const links = [
  { name: "Home", path: "/" },
  { name: "JEE Mains Chemistry", path: "/jeemainschemistry" },
  { name: "JEE Advanced Chemistry", path: "/jeeadvancechemistry" },
  { name: "NEET UG Chemistry", path: "/neetchemistry" },
  { name: "Class 12 Boards & Foundation", path: "/engineering-class-12" },
  { name: "All-India Online Test Series", path: "https://testseries-nine.vercel.app/" },
  { name: "Interactive Career Guidance Portal", path: "/Carrier" },
  { name: "Faculty Resume & History", path: "/resume" },
  { name: "Contact & Center Location", path: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open mobile navigation menu"
        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 hover:text-white hover:border-royal-400 transition-all"
      >
        <CiMenuFries className="text-xl text-royal-400" />
      </SheetTrigger>
      <SheetContent className="bg-navy-950 border-l border-white/10 text-white flex flex-col justify-between p-6 overflow-y-auto">
        <div>
          {/* Logo */}
          <div className="mb-8 pt-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-royal-600 flex items-center justify-center font-bold text-white text-base">
                CVK
              </div>
              <div>
                <h2 className="font-heading font-extrabold text-lg text-white">
                  CVK <span className="text-royal-400">Sir</span>
                </h2>
                <p className="text-[10px] text-slate-400">NIT Rourkela • Super 30 Alumnus</p>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2.5">
            {links.map((link, index) => {
              const isExternal = link.path.startsWith("http");
              const isActive = pathname === link.path;

              if (isExternal) {
                return (
                  <a
                    key={index}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-royal-400" />
                  </a>
                );
              }

              return (
                <Link
                  key={index}
                  href={link.path}
                  className={`p-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-royal-600/20 text-royal-300 border border-royal-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Quick Contact Buttons at Bottom of Drawer */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <a
            href="https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20would%20like%20to%20inquire%20about%20Chemistry%20coaching."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:+918457876843"
            className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-white/10 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-royal-400" />
            <span>Call +91 84578 76843</span>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
