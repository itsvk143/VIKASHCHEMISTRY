"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Trophy, GraduationCap, Flame, Target, Star } from "lucide-react";

const stats = [
  {
    icon: <Trophy className="w-6 h-6 text-accent" />,
    num: 700,
    suffix: "+",
    label: "JEE Mains Selections",
    subtext: "NITs, IIITs & Top Colleges",
  },
  {
    icon: <Target className="w-6 h-6 text-accent" />,
    num: 100,
    suffix: "+",
    label: "JEE Advanced Ranks",
    subtext: "Into Premier IITs",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-accent" />,
    num: 500,
    suffix: "+",
    label: "NEET Selections",
    subtext: "Government Medical Colleges",
  },
  {
    icon: <Flame className="w-6 h-6 text-accent" />,
    num: 99.77,
    suffix: "%ile",
    decimals: 2,
    label: "Top Chemistry Score",
    subtext: "Consistent 99+ Percentilers",
  },
  {
    icon: <Star className="w-6 h-6 text-accent" />,
    num: 10,
    suffix: "+ Yrs",
    label: "Kota Mentorship",
    subtext: "Resonance, Narayana, Aakash",
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-black/60 border-y border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/10 hover:border-accent/40 rounded-2xl p-5 sm:p-6 transition-all hover:bg-white/[0.04] text-center flex flex-col items-center justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                {stat.icon}
              </div>

              <div className="flex items-baseline justify-center gap-0.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                <CountUp
                  end={stat.num}
                  duration={3}
                  decimals={stat.decimals || 0}
                  enableScrollSpy
                  scrollSpyOnce
                />
                <span className="text-accent">{stat.suffix}</span>
              </div>

              <p className="font-semibold text-white/90 text-sm sm:text-base mt-2">
                {stat.label}
              </p>
              <span className="text-xs text-white/50 mt-1">
                {stat.subtext}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
