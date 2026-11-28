import Link from "next/link";
import { ArrowLeft, Home, Compass, BookOpen, Phone, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "@/components/Footer";

export const metadata = {
  title: "404 - Page Not Found | CVK Sir Chemistry",
  description: "The page you are looking for could not be found. Explore CVK Sir's Chemistry courses, career portal, or contact Vikash Sir directly.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col justify-between">
      <main className="py-20 px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-600/15 border border-royal-400/30 text-royal-300 text-xs font-bold uppercase tracking-wider">
            <span>Error 404 • Page Not Found</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl font-heading font-black text-white tracking-tight">
              Lost in <span className="text-royal-400">Orbit?</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto leading-relaxed">
              The page you were looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track with your Chemistry preparation.
            </p>
          </div>

          {/* Quick Route Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4 max-w-lg mx-auto">
            <Link
              href="/"
              className="p-4 rounded-2xl bg-navy-900 border border-white/10 hover:border-royal-400/50 flex items-center gap-3 transition-all hover:bg-navy-850 group"
            >
              <div className="w-10 h-10 rounded-xl bg-royal-600/20 text-royal-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-bold text-white block text-sm">Return Home</span>
                <span className="text-xs text-slate-400">Main educator portal</span>
              </div>
            </Link>

            <Link
              href="/Carrier"
              className="p-4 rounded-2xl bg-navy-900 border border-white/10 hover:border-gold-400/50 flex items-center gap-3 transition-all hover:bg-navy-850 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-400/15 text-gold-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-bold text-white block text-sm">Career Portal</span>
                <span className="text-xs text-slate-400">Class 10, 12 &amp; Beyond</span>
              </div>
            </Link>

            <Link
              href="/privacy-policy"
              className="p-4 rounded-2xl bg-navy-900 border border-white/10 hover:border-royal-400/50 flex items-center gap-3 transition-all hover:bg-navy-850 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-bold text-white block text-sm">Privacy Policy</span>
                <span className="text-xs text-slate-400">Legal &amp; Data Transparency</span>
              </div>
            </Link>

            <a
              href="https://wa.me/918457876843"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-navy-900 border border-white/10 hover:border-emerald-500/50 flex items-center gap-3 transition-all hover:bg-navy-850 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-bold text-white block text-sm">WhatsApp CVK Sir</span>
                <span className="text-xs text-slate-400">+91 84578 76843</span>
              </div>
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
