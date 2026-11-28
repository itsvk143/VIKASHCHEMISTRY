"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Download, ArrowRight, Sparkles, BookOpen, CheckCircle, ExternalLink, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const resources = [
  {
    title: "Kota Organic Reaction Mechanism Map",
    category: "Organic Chemistry",
    badge: "Most Downloaded",
    description: "Visual roadmap of all 35+ named reactions, nucleophilic additions, electrophilic aromatic substitutions, and carbocation rearrangement rules.",
    format: "PDF Document (High-Res)",
    pages: "14 Pages Summary",
    fileTarget: "/jeemainschemistry",
    actionText: "Read Online Summary",
  },
  {
    title: "Physical Chemistry 45-Sec Formula & Unit Sheet",
    category: "Physical Chemistry",
    badge: "Speed Booster",
    description: "Every formula from Mole Concept, Chemical Equilibrium, Thermodynamics, Kinetics, and Electrochemistry with dimensional shortcut approximations.",
    format: "Formula Sheet PDF",
    pages: "10 Pages Reference",
    fileTarget: "/jeemainschemistry",
    actionText: "View Formula Guide",
  },
  {
    title: "Inorganic NCERT Line-by-Line Exception Decoder",
    category: "Inorganic Chemistry",
    badge: "100% NCERT",
    description: "Periodic table trends, ionization enthalpy anomalies, coordination isomerism charts, and qualitative salt analysis flowcharts.",
    format: "Revision Flashcards",
    pages: "12 Pages Sheet",
    fileTarget: "/neetchemistry",
    actionText: "Explore Inorganic Sheet",
  },
  {
    title: "Top 100 High-Yield JEE/NEET Question Bank with Solutions",
    category: "Mock Practice",
    badge: "Exam PYQ Bank",
    description: "Past 10 years' most frequently repeated concepts in Physical, Organic, and Inorganic with step-by-step analytical solutions by CVK Sir.",
    format: "Full Solution Set",
    pages: "25 Pages Master DPP",
    fileTarget: "/Carrier",
    actionText: "View Sample DPP Set",
  },
];

export default function FreeResourcesSection() {
  const whatsappResourceUrl = (title) =>
    `https://wa.me/918457876843?text=${encodeURIComponent(
      `Hello CVK Sir! I would like to download the free study resource: "${title}". Please share the PDF.`
    )}`;

  return (
    <section id="resources" className="py-20 lg:py-28 bg-navy-950/80 border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-600/15 border border-royal-500/30 text-royal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5 text-gold-400" /> Free Academic Study Library
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4">
            High-Yield Chemistry <span className="text-gradient-gold">Revision Material</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Download and study Kota-curated formula sheets, reaction mechanism charts, and NCERT line-by-line revision guides designed to save you hundreds of study hours.
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {resources.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-navy-900 border border-white/10 hover:border-royal-500/40 transition-all flex flex-col justify-between shadow-xl group hover:bg-navy-850"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-royal-400">
                    {item.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/25 text-gold-300 text-[11px] font-bold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3 group-hover:text-royal-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Details pill */}
                <div className="flex items-center gap-4 text-xs text-slate-400 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-1.5 font-medium text-slate-300">
                    <FileText className="w-4 h-4 text-royal-400" />
                    {item.format}
                  </span>
                  <span>•</span>
                  <span>{item.pages}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={item.fileTarget}
                  className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl bg-royal-600 hover:bg-royal-500 text-white font-semibold text-xs text-center flex items-center justify-center gap-2 transition-all shadow-md shadow-royal-600/20"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{item.actionText}</span>
                </Link>

                <a
                  href={whatsappResourceUrl(item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-white/5 hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-500/40 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                  title="Request PDF on WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                  <span>Get PDF on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-royal-950 via-navy-900 to-royal-950 border border-royal-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-lg text-white flex items-center justify-center md:justify-start gap-2">
              <Zap className="w-5 h-5 text-gold-400" /> Need Custom Chapter DPPs or Previous Year Question Banks?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Message Vikash Sir directly with your current class and target exam to receive tailored chapter sheets.
            </p>
          </div>
          <a
            href="https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20could%20you%20please%20share%20the%20complete%20Kota%20DPP%20and%20Formula%20bank%20for%20my%20preparation?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Request Full DPP Set (WhatsApp)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
