"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Atom,
  HeartPulse,
  TrendingUp,
  Palette,
  ArrowRight,
  Sparkles,
  Award,
  Clock,
  Briefcase,
  DollarSign,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { careersData } from "@/data/career/careersData";

const streamFilters = [
  { id: "all", label: "All Pathways" },
  { id: "Science - PCM", label: "Science (PCM)", icon: <Atom className="w-4 h-4" /> },
  { id: "Science - PCB", label: "Science (PCB)", icon: <HeartPulse className="w-4 h-4" /> },
  { id: "Commerce / Open to All", label: "Commerce & Finance", icon: <TrendingUp className="w-4 h-4" /> },
  { id: "Arts / Humanities", label: "Arts, Law & Design", icon: <Palette className="w-4 h-4" /> },
];

export default function Class12Explorer({ onSelectCareer }) {
  const [selectedStream, setSelectedStream] = useState("all");

  const filteredCareers = useMemo(() => {
    if (selectedStream === "all") return careersData;

    if (selectedStream === "Arts / Humanities") {
      return careersData.filter(
        (c) =>
          c.stream.includes("Arts") ||
          c.category.includes("Legal") ||
          c.category.includes("Design") ||
          c.category.includes("Humanities") ||
          c.category.includes("Government")
      );
    }

    if (selectedStream === "Commerce / Open to All") {
      return careersData.filter(
        (c) =>
          c.stream.includes("Commerce") ||
          c.category.includes("Finance") ||
          c.category.includes("Business")
      );
    }

    return careersData.filter((c) => c.stream.includes(selectedStream));
  }, [selectedStream]);

  return (
    <section id="after-12" className="py-20 bg-primary text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" /> The Crucial Milestone
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Career Discovery <span className="text-accent">After Class 12</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Select your Class 12 stream to explore undergraduate degrees, national entrance examinations, salary potential, and top institutions.
          </p>
        </div>

        {/* Stream Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {streamFilters.map((flt) => {
            const isActive = selectedStream === flt.id;
            return (
              <button
                key={flt.id}
                onClick={() => setSelectedStream(flt.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl border font-bold text-xs sm:text-sm transition-all ${
                  isActive
                    ? "bg-accent text-primary border-accent shadow-lg shadow-accent/20 scale-105"
                    : "bg-white/[0.03] text-white/70 border-white/10 hover:border-accent/40 hover:text-white"
                }`}
              >
                {flt.icon}
                <span>{flt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Results Count Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs sm:text-sm text-white/60">
          <span>
            Showing <strong>{filteredCareers.length}</strong> Premier Career Pathways
          </span>
          <span className="text-accent font-semibold">Click any card for full details</span>
        </div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCareers.map((career, idx) => (
            <motion.div
              key={career.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              onClick={() => onSelectCareer(career)}
              className="bg-[#1c1c24] border border-white/10 hover:border-accent/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:bg-white/[0.04] shadow-xl hover:-translate-y-1 cursor-pointer group"
            >
              <div>
                {/* Category & Stream Tags */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-accent/15 border border-accent/25 text-accent uppercase tracking-wider">
                    {career.category}
                  </span>
                  <span className="text-xs text-white/50">{career.duration}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {career.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/75 line-clamp-3 mb-5 leading-relaxed">
                  {career.description}
                </p>

                {/* Key Exams */}
                <div className="mb-5">
                  <span className="text-[11px] uppercase font-bold text-white/40 tracking-wider block mb-2">
                    Key Entrance Examinations
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {career.entranceExams.slice(0, 3).map((exam, eIdx) => (
                      <span
                        key={eIdx}
                        className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-accent text-xs font-semibold"
                      >
                        {exam}
                      </span>
                    ))}
                    {career.entranceExams.length > 3 && (
                      <span className="text-xs text-white/40 self-center">
                        +{career.entranceExams.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Top Colleges snippet */}
                <div className="mb-5 pt-3 border-t border-white/5 text-xs text-white/70">
                  <span className="font-semibold text-white/90">Top Institutes: </span>
                  <span>{career.topColleges.slice(0, 2).join(", ")}</span>
                </div>
              </div>

              {/* Card Footer: Salary + CTA */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-white/40 block">
                    Starting Package
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-white">
                    {career.salaryRange.split(" to ")[0]}
                  </span>
                </div>

                <Button
                  size="sm"
                  className="bg-accent/15 hover:bg-accent text-accent hover:text-primary font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
