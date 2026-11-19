"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "918457876843";
  const defaultMessage = encodeURIComponent(
    "Hi CVK Sir, I am interested in Chemistry coaching for JEE/NEET. Please share batch details and demo class information."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Tooltip / Label */}
      <span className="hidden sm:inline-block bg-[#1c1c22]/95 border border-[#00ff99]/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md opacity-90 group-hover:opacity-100 transition-opacity">
        <span className="inline-block w-2 h-2 rounded-full bg-[#00ff99] mr-2 animate-pulse" />
        Ask CVK Sir on WhatsApp
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with CVK Sir"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />

        <FaWhatsapp className="w-8 h-8" />
      </a>
    </aside>
  );
}
