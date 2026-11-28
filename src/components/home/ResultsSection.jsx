"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Star, ArrowRight, Award, CheckCircle2 } from "lucide-react";

const topRankers = [
  {
    name: "Divyanshu S Sahu",
    score: "99.77 %ile",
    exam: "JEE Mains 2024",
    highlight: "Chemistry Centum Target • 100% Accuracy in Organic",
    tier: "Top 0.23% in India",
  },
  {
    name: "Jyotiraditya Parida",
    score: "99.22 %ile",
    exam: "JEE Mains 2024",
    highlight: "Mastered Kota Physical Chemistry Speed Algorithms",
    tier: "Top 0.78% in India",
  },
  {
    name: "Sayan Rath",
    score: "99.16 %ile",
    exam: "JEE Mains 2024",
    highlight: "Kota DPP Mastery & Flawless Inorganic NCERT Recall",
    tier: "Top 0.84% in India",
  },
  {
    name: "Pratik Choudhary",
    score: "98.97 %ile",
    exam: "JEE Mains 2024",
    highlight: "Jumped from 82 to 98.97 percentile via 1-on-1 Mentorship",
    tier: "Top 1.03% in India",
  },
  {
    name: "Amol Katiyar",
    score: "98.43 %ile",
    exam: "JEE Mains 2024",
    highlight: "Zero Negative Marking in Physical Chemistry Section",
    tier: "Top 1.5% in India",
  },
  {
    name: "Aditya Dash",
    score: "97.99 %ile",
    exam: "JEE Mains 2024",
    highlight: "100% NCERT Line-by-Line Inorganic Recall Rate",
    tier: "Top 2% in India",
  },
  {
    name: "Aayam Panigarahi",
    score: "97.83 %ile",
    exam: "JEE Mains 2024",
    highlight: "Advanced Multi-Concept Problem Solving Specialist",
    tier: "Top 2.1% in India",
  },
  {
    name: "Aditya A Mohanta",
    score: "97.56 %ile",
    exam: "JEE Mains 2024",
    highlight: "Consistent High Performer in Kota Mock Test Series",
    tier: "Top 2.4% in India",
  },
  {
    name: "Suryans Dash",
    score: "97.16 %ile",
    exam: "JEE Mains 2024",
    highlight: "Eliminated Rote Memorization in Organic Chemistry",
    tier: "Top 2.8% in India",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 lg:py-28 bg-navy-900 border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5" /> Verified Student Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4">
            Proven Ranks, <span className="text-gradient-gold">Top Percentiles</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Genuine results from students trained under CVK Sir&apos;s Kota methodology. Consistently converting Chemistry into their highest-scoring competitive subject.
          </p>
        </div>

        {/* Results Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topRankers.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="bg-navy-850/80 border border-white/10 hover:border-royal-500/50 rounded-2xl p-6 transition-all hover:bg-navy-850 relative overflow-hidden group shadow-xl"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-royal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-royal-600/20 border border-royal-400/30 flex items-center justify-center text-royal-300 font-heading font-bold text-lg">
                  {student.name.charAt(0)}
                </div>

                <div className="text-right">
                  <span className="text-2xl font-heading font-black text-white group-hover:text-gold-300 transition-colors">
                    {student.score}
                  </span>
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase tracking-wider">
                    {student.exam}
                  </span>
                </div>
              </div>

              <div className="space-y-1 mb-4">
                <h3 className="font-heading font-bold text-white text-lg">
                  {student.name}
                </h3>
                <span className="inline-block text-xs text-royal-400 font-semibold">
                  {student.tier}
                </span>
              </div>

              <p className="text-xs text-slate-300 bg-white/[0.03] p-3 rounded-xl border border-white/5 leading-relaxed">
                {student.highlight}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Proof Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-navy-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-white text-base sm:text-lg flex items-center justify-center md:justify-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              100% Genuine, Verified Student Data
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Every score listed above represents an enrolled student personally guided by Vikash Sir. No exaggerated or fabricated claims.
            </p>
          </div>

          <Link
            href="/resume"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-white/5 hover:bg-royal-600/20 border border-white/10 hover:border-royal-400/40 text-royal-300 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
          >
            <span>View Full Ranker Wall &amp; Teaching History</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
