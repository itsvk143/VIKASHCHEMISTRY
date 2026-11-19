"use client";

import { motion } from "framer-motion";
import { Atom, Zap, BookMarked, MessageSquare, Quote } from "lucide-react";

const pillars = [
  {
    icon: <Atom className="w-7 h-7 text-accent" />,
    branch: "Organic Chemistry",
    tag: "Mechanism Visuals",
    title: "Zero Rote Memorization",
    description: "Instead of memorizing hundreds of reactions, understand electron movements, nucleophile-electrophile attractions, and reaction intermediates (carbocations, free radicals). Once you see the mechanism, predicting the major product becomes effortless.",
    bulletPoints: [
      "Electron arrow pushing techniques",
      "Stereochemistry & optical isomerism visual models",
      "Named reactions mind-mapped to common pathways",
    ],
  },
  {
    icon: <Zap className="w-7 h-7 text-accent" />,
    branch: "Physical Chemistry",
    tag: "Speed Algorithms",
    title: "45-Second Numerical Mastery",
    description: "Physical chemistry numericals don't have to be tedious. Learn Kota shortcut algorithms, approximation rules, dimensional consistency tricks, and formula matrices for Mole Concept, Thermodynamics, Equilibrium, and Electrochemistry.",
    bulletPoints: [
      "Dimensional analysis shortcuts",
      "Eliminating calculator dependence through smart approximations",
      "Graph analysis & trend decoding",
    ],
  },
  {
    icon: <BookMarked className="w-7 h-7 text-accent" />,
    branch: "Inorganic Chemistry",
    tag: "NCERT Line-by-Line",
    title: "Memory Mnemonics & NCERT Precision",
    description: "Every single inorganic question in JEE Mains & NEET comes straight from NCERT. We decode every table, exceptional trend, and chemical reaction with easy-to-remember mnemonics so you never confuse oxidation states or coordination geometries.",
    bulletPoints: [
      "Special memory mnemonics for periodic exceptions",
      "Coordination chemistry & crystal field theory simplified",
      "High-yield qualitative salt analysis flowcharts",
    ],
  },
  {
    icon: <MessageSquare className="w-7 h-7 text-accent" />,
    branch: "Personal Mentorship",
    tag: "Zero Backlog",
    title: "Direct Access to CVK Sir",
    description: "In large commercial coachings with 200 students per batch, individual doubts remain unanswered. Here, every student has direct WhatsApp and voice access to Vikash Sir to clear doubts, review mistakes, and maintain momentum.",
    bulletPoints: [
      "Direct WhatsApp doubt resolution within hours",
      "Weekly performance audits & mistake book reviews",
      "Personalized exam strategy & time management guidance",
    ],
  },
];

export default function MethodologySection() {
  return (
    <section className="py-20 bg-black/40 border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Atom className="w-4 h-4" /> Teaching Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            The Kota <span className="text-accent">3-Pillar Methodology</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            How CVK Sir transforms Chemistry from a dreaded subject into your highest-scoring weapon in JEE & NEET.
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/10 hover:border-accent/40 rounded-3xl p-6 sm:p-8 transition-all hover:bg-white/[0.04] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-accent border border-accent/20">
                    {pillar.tag}
                  </span>
                </div>

                <span className="text-xs uppercase tracking-wider text-white/50 font-semibold block mb-1">
                  {pillar.branch}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10">
                {pillar.bulletPoints.map((bullet, bIndex) => (
                  <div key={bIndex} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mentor Quote Card */}
        <div className="bg-gradient-to-r from-accent/10 via-white/[0.03] to-accent/10 border border-accent/30 rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto relative overflow-hidden text-center">
          <Quote className="w-12 h-12 text-accent/30 mx-auto mb-4" />
          <blockquote className="text-lg sm:text-xl font-medium text-white/90 italic leading-relaxed mb-4">
            &ldquo;Chemistry is not about cramming 500 reactions — it is about understanding electron behavior, energetic stability, and pattern recognition. When you learn to see the molecular logic, Chemistry becomes the fastest and easiest subject to score in.&rdquo;
          </blockquote>
          <p className="font-bold text-accent text-base">Vikash Kumar (CVK Sir)</p>
          <p className="text-xs text-white/60">B.Tech NIT Rourkela | Magadh Super 30 | 10+ Years Kota Faculty</p>
        </div>

      </div>
    </section>
  );
}
