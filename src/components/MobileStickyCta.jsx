"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function MobileStickyCta() {
  const whatsappUrl =
    "https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20would%20like%20to%20book%20a%20Free%20Chemistry%20Demo%20Class.";

  return (
    <aside
      aria-label="Quick enrollment actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-md border-t border-white/10 p-2.5 px-4 shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="#inquiry"
          className="flex-1 bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-500 hover:to-royal-600 text-white font-semibold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>Book Free Demo</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
        >
          <FaWhatsapp className="w-4 h-4" />
          <span>WhatsApp Sir</span>
        </a>
      </div>
    </aside>
  );
}
