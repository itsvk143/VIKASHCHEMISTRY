"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Trophy, GraduationCap, Flame, Target, Award } from "lucide-react";

const stats = [
  {
    icon: <Trophy className="w-5 h-5 text-gold-400" />,
    num: 700,
    suffix: "+",
    label: "JEE Mains Selections",
    subtext: "NITs, IIITs & Premier Tech Colleges",
  },
  {
    icon: <Target className="w-5 h-5 text-royal-400" />,
    num: 100,
    suffix: "+",
    label: "Top IIT Advanced Ranks",
    subtext: "Into India's 23 Premier IITs",
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
    num: 500,
    suffix: "+",
    label: "NEET MBBS Selections",
    subtext: "Govt Medical Colleges (AIIMS, JIPMER, SCB)",
  },
  {
    icon: <Flame className="w-5 h-5 text-gold-400" />,
    num: 99.77,
    suffix: "%ile",
    decimals: 2,
    label: "Highest Chemistry Score",
    subtext: "Consistent 99+ Percentilers",
  },
  {
    icon: <Award className="w-5 h-5 text-royal-400" />,
    num: 10,
    suffix: "+ Yrs",
    label: "Kota Coaching Pedigree",
    subtext: "Resonance Kota, Narayana, Aakash",
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-navy-950 border-y border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-navy-900 border border-white/10 hover:border-royal-500/40 rounded-2xl p-4 sm:p-6 transition-all hover:bg-navy-850 text-center flex flex-col items-center justify-between shadow-lg group"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>

              <div className="flex items-baseline justify-center gap-0.5 text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white">
                <CountUp
                  end={stat.num}
                  duration={2.5}
                  decimals={stat.decimals || 0}
                  enableScrollSpy
                  scrollSpyOnce
                />
                <span className="text-gold-400">{stat.suffix}</span>
              </div>

              <p className="font-heading font-bold text-slate-100 text-xs sm:text-sm mt-2">
                {stat.label}
              </p>
              <span className="text-[11px] text-slate-400 mt-1 leading-snug">
                {stat.subtext}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
