"use client";

import { motion } from "framer-motion";
import { Users, Heart, DollarSign, Shield, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const parentPillars = [
  {
    icon: <Users className="w-6 h-6 text-accent" />,
    title: "1. Avoiding Stream Pressure",
    desc: "A student forced into PCM or PCB against their natural aptitude experiences severe anxiety. Align stream selection with their analytical strengths, not relative opinions.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-accent" />,
    title: "2. Realistic Financial Planning",
    desc: "Govt institutes (IITs, NITs, AIIMS) cost ₹1–2 Lakhs/year with extensive fee waivers for low/middle-income brackets, whereas private medical degrees can exceed ₹60–90 Lakhs.",
  },
  {
    icon: <Shield className="w-6 h-6 text-accent" />,
    title: "3. Robust Plan-B Strategy",
    desc: "Always maintain high-quality parallel options (e.g. BITSAT/State CETs alongside JEE; B.Pharm/Biotech/BPT alongside NEET) so students feel secure and perform without panic.",
  },
  {
    icon: <Heart className="w-6 h-6 text-accent" />,
    title: "4. Managing Mental Well-being",
    desc: "Mock test scores fluctuate. Celebrate effort, maintain regular sleep schedules, and avoid comparing your child’s percentile with neighbors or relatives.",
  },
];

export default function ParentGuide() {
  return (
    <section id="parent-guide" className="py-20 bg-[#16161e] text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-4 h-4" /> Parent Support Portal
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            A Parent&apos;s Guide to <span className="text-accent">Career Decision-Making</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Essential guidance for parents on realistic education budgeting, reducing competitive exam stress, and backing your child&apos;s true potential.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {parentPillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#1e1e28] border border-white/10 hover:border-accent/40 rounded-3xl p-6 transition-all hover:bg-white/[0.04]"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Parent Consultation Card */}
        <div className="bg-gradient-to-r from-accent/10 via-[#1e1e28] to-accent/10 border border-accent/30 rounded-3xl p-8 max-w-3xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Would you like a direct consultation regarding your child&apos;s career?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 mb-6 max-w-xl mx-auto">
            Vikash Sir regularly counsels parents on realistic target setting, batch selection, and balancing board exams with JEE/NEET preparation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#counselling">
              <Button className="bg-accent text-primary font-bold hover:bg-accent-hover rounded-xl text-xs px-6 py-5">
                Request Parent-Mentor Session
              </Button>
            </a>

            <a
              href="https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20am%20a%20parent%20seeking%20guidance%20for%20my%20child's%20career%20and%20exam%20planning."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-accent/40 text-white hover:bg-accent/10 rounded-xl text-xs px-6 py-5"
              >
                Message on WhatsApp
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
