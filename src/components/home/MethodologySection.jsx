"use client";

import { motion } from "framer-motion";
import { Atom, Zap, BookMarked, MessageSquare, CheckCircle2, Sparkles, Award } from "lucide-react";

const pillars = [
  {
    icon: <Atom className="w-6 h-6 text-royal-400" />,
    branch: "Organic Chemistry",
    tag: "Mechanism Visuals",
    title: "Zero Rote Memorization",
    description:
      "Instead of memorizing hundreds of reactions, understand electron movements, nucleophile-electrophile attractions, and reaction intermediates (carbocations, free radicals). Once you see the mechanism, predicting the major product becomes second nature.",
    bulletPoints: [
      "Electron arrow-pushing techniques made intuitive",
      "Stereochemistry & optical isomerism 3D models",
      "Named reactions mind-mapped to core common pathways",
    ],
  },
  {
    icon: <Zap className="w-6 h-6 text-gold-400" />,
    branch: "Physical Chemistry",
    tag: "Speed Algorithms",
    title: "45-Second Numerical Mastery",
    description:
      "Physical chemistry numericals don't have to be tedious. Learn Kota shortcut algorithms, approximation rules, dimensional consistency tricks, and formula matrices for Mole Concept, Thermodynamics, Equilibrium, and Electrochemistry.",
    bulletPoints: [
      "Dimensional analysis shortcuts for complex units",
      "Eliminating calculator dependence through smart approximations",
      "Graph analysis & trend decoding for instant elimination",
    ],
  },
  {
    icon: <BookMarked className="w-6 h-6 text-emerald-400" />,
    branch: "Inorganic Chemistry",
    tag: "NCERT Line-by-Line",
    title: "Memory Mnemonics & NCERT Precision",
    description:
      "Every single inorganic question in JEE Mains & NEET comes straight from NCERT. We decode every table, exceptional trend, and chemical reaction with easy-to-remember mnemonics so you never confuse oxidation states or coordination geometries.",
    bulletPoints: [
      "Special memory mnemonics for periodic table exceptions",
      "Coordination chemistry & crystal field theory simplified",
      "High-yield qualitative salt analysis flowcharts",
    ],
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-royal-400" />,
    branch: "Personal Mentorship",
    tag: "Zero Backlog",
    title: "Direct WhatsApp Access to CVK Sir",
    description:
      "In commercial institutes with 200 students per batch, individual doubts remain unanswered. Here, every enrolled student has direct WhatsApp and voice access to Vikash Sir to clear doubts, review mistakes, and maintain momentum.",
    bulletPoints: [
      "Direct WhatsApp doubt resolution within hours",
      "Weekly performance audits & mistake book reviews",
      "Personalized exam strategy & time management guidance",
    ],
  },
];

export default function MethodologySection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900 border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-600/15 border border-royal-500/30 text-royal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Atom className="w-3.5 h-3.5 text-gold-400" /> Teaching Philosophy &amp; Pedagogy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4">
            The Kota <span className="text-gradient-gold">3-Pillar Methodology</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            How CVK Sir transforms Chemistry from a dreaded subject into your highest-scoring weapon in JEE &amp; NEET.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="bg-navy-850/80 border border-white/10 hover:border-royal-500/50 rounded-3xl p-6 sm:p-8 transition-all hover:bg-navy-850 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-royal-600/15 text-royal-300 border border-royal-500/30">
                    {pillar.tag}
                  </span>
                </div>

                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  {pillar.branch}
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {pillar.bulletPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-royal-950 via-navy-950 to-navy-900 border border-royal-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-white text-base sm:text-lg">
              Want to see this methodology applied live on a complex problem?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Attend a live demo session and experience how reaction mechanisms become obvious.
            </p>
          </div>
          <a
            href="#inquiry"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-500 hover:to-royal-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            Experience Free Demo Class →
          </a>
        </div>

      </div>
    </section>
  );
}
