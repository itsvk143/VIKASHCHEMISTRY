"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, GraduationCap, Building2, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, BookOpen } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const credentials = [
  {
    icon: <GraduationCap className="w-5 h-5 text-gold-400" />,
    title: "B.Tech in Chemical Engineering",
    institution: "National Institute of Technology (NIT) Rourkela",
    year: "2012 – 2016",
    highlight: "Deep chemical thermodynamics, reaction engineering & molecular kinetics foundation.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-gold-400" />,
    title: "Magadh Super 30 Alumnus",
    institution: "Super 30 Intensive IIT-JEE Training",
    year: "2010 – 2012",
    highlight: "Selected among the top 30 under-resourced meritorious scholars for rigorous problem-solving.",
  },
  {
    icon: <Award className="w-5 h-5 text-gold-400" />,
    title: "10+ Years of Kota Teaching Excellence",
    institution: "Resonance (Kota), Narayana, Aakash Institute",
    year: "2016 – Present",
    highlight: "Senior lecturer training batches of 500+ aspirants with 700+ JEE Mains and 500+ NEET selections.",
  },
];

const highlights = [
  "700+ JEE Mains & 100+ JEE Advanced Selections",
  "500+ Government Medical College (NEET MBBS/BDS) Ranks",
  "Top Chemistry Score of 99.77%ile produced in JEE Mains",
  "Kota's 3-Pillar Framework eliminating rote memorization",
  "Direct 1-on-1 Mentor WhatsApp access for every enrolled student",
  "Based in Bhubaneswar, Odisha with live interactive online reach across India",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-navy-950/70 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-royal-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl p-1 bg-gradient-to-b from-royal-500/30 via-white/10 to-gold-500/20 shadow-2xl"
            >
              <div className="relative rounded-[22px] overflow-hidden bg-navy-900 border border-white/10 p-6 sm:p-8">
                {/* Photo & Faculty Header */}
                <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-white/10 text-center sm:text-left">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-royal-400/50 shadow-xl flex-shrink-0 bg-navy-950">
                    <Image
                      src="/assets/photo.png"
                      alt="Vikash Kumar (CVK Sir) - Chemistry Faculty"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified Faculty
                    </span>
                    <h3 className="text-2xl font-heading font-extrabold text-white">
                      Vikash Kumar
                    </h3>
                    <p className="text-sm font-semibold text-royal-400">
                      Popularly known as CVK Sir
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Senior Chemistry Lecturer • NIT Rourkela Alum
                    </p>
                  </div>
                </div>

                {/* Key Career Numbers */}
                <div className="grid grid-cols-2 gap-4 py-6 border-b border-white/10 text-center">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-2xl font-heading font-black text-white">10+ Yrs</span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">Kota Teaching</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-2xl font-heading font-black text-royal-400">1200+</span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">JEE &amp; NEET Ranks</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-2xl font-heading font-black text-gold-400">99.77%ile</span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">Top Chem Score</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-2xl font-heading font-black text-emerald-400">1-on-1</span>
                    <span className="block text-[11px] text-slate-400 mt-0.5">Mentor Access</span>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/resume"
                    className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>View Complete Teaching History</span>
                    <ArrowRight className="w-3.5 h-3.5 text-royal-400" />
                  </Link>
                  <a
                    href="https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20would%20like%20to%20discuss%20my%20Chemistry%20preparation%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>WhatsApp Sir</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-600/15 border border-royal-500/30 text-royal-300 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4 text-gold-400" /> Academic Pedigree &amp; Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
              Transforming Chemistry from a <span className="text-gradient-gold">Dreaded Subject</span> into Your Highest Scoring Asset
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Every year, thousands of students lose their dream engineering or medical seat not because they lack dedication, but because traditional coaching pushes <strong className="text-white font-semibold">blind memorization</strong> over conceptual intuition.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Having been trained at <strong className="text-white font-semibold">Magadh Super 30</strong> and graduated with a B.Tech in Chemical Engineering from <strong className="text-white font-semibold">NIT Rourkela</strong>, I spent over a decade teaching at premier national institutes including <strong className="text-white font-semibold">Resonance (Kota)</strong>, <strong className="text-white font-semibold">Narayana</strong>, and <strong className="text-white font-semibold">Aakash Institute</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              My mission is straightforward: give every student the exact conceptual visualization, dimensional shortcuts, and personal attention required to crack 98–99+ percentile in JEE Chemistry and 160–180 in NEET.
            </p>

            {/* Credential Timeline Items */}
            <div className="space-y-4 pt-2">
              {credentials.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-royal-500/40 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-royal-600/15 border border-royal-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h4 className="text-base font-bold text-white">{item.title}</h4>
                      <span className="text-xs font-mono text-gold-400">{item.year}</span>
                    </div>
                    <p className="text-xs font-semibold text-royal-300 mb-1">{item.institution}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checklist of highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
