"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Check, Clock, DollarSign, Award, ArrowRight } from "lucide-react";
import { comparisonsData } from "@/data/career/comparisonData";

export default function CareerComparison() {
  const [activeComparisonId, setActiveComparisonId] = useState("mbbs-vs-bds");

  const comp =
    comparisonsData.find((c) => c.id === activeComparisonId) || comparisonsData[0];

  return (
    <section id="comparisons" className="py-20 bg-[#16161e] text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Scale className="w-4 h-4" /> Career Battle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Side-by-Side <span className="text-accent">Career Comparison</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Can&apos;t decide between two paths? Compare duration, entrance cutoffs, salary potential, and daily work-life reality side by side.
          </p>
        </div>

        {/* Comparison Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {comparisonsData.map((item) => {
            const isActive = activeComparisonId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveComparisonId(item.id)}
                className={`px-5 py-2.5 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-accent text-primary border-accent shadow-md shadow-accent/20 scale-105"
                    : "bg-white/[0.03] text-white/70 border-white/10 hover:border-accent/40 hover:text-white"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Side-by-Side Comparison Box */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-bold text-accent tracking-wider">
              {comp.category}
            </span>
            <p className="text-sm text-white/70 mt-1">{comp.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Option A */}
            <div className="bg-[#1e1e28] border border-accent/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
                  Option 1
                </span>
                <h3 className="text-2xl font-black text-white mb-6">
                  {comp.optionA.name}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-white/50 block font-semibold">Course Duration:</span>
                    <span className="font-bold text-white">{comp.optionA.duration}</span>
                  </div>

                  <div>
                    <span className="text-white/50 block font-semibold">Eligibility &amp; Exam:</span>
                    <span className="text-white/80">{comp.optionA.eligibility}</span>
                  </div>

                  <div>
                    <span className="text-white/50 block font-semibold">Curriculum Focus:</span>
                    <span className="text-white/80">{comp.optionA.curriculumFocus}</span>
                  </div>

                  <div>
                    <span className="text-white/50 block font-semibold">Work-Life Balance:</span>
                    <span className="text-white/80">{comp.optionA.workLifeBalance}</span>
                  </div>

                  <div>
                    <span className="text-white/50 block font-semibold">Average Starting Remuneration:</span>
                    <span className="font-extrabold text-accent text-sm sm:text-base">
                      {comp.optionA.averageStartingSalary}
                    </span>
                  </div>

                  <div>
                    <span className="text-white/50 block font-semibold">Senior Career Potential:</span>
                    <span className="font-bold text-white">{comp.optionA.seniorEarningPotential}</span>
                  </div>
                </div>
              </div>

              {/* Verdict */}
              <div className="mt-6 pt-4 border-t border-white/10 bg-black/30 p-4 rounded-2xl">
                <span className="text-[11px] uppercase font-bold text-accent block mb-1">
                  Ideal Candidate Fit
                </span>
                <p className="text-xs text-white/85 leading-relaxed">
                  {comp.optionA.verdict}
                </p>
              </div>
            </div>

            {/* Option B */}
            <div className="bg-[#1e1e28] border border-white/10 hover:border-accent/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">
                  Option 2
                </span>
                <h3 className="text-2xl font-black text-white mb-6">
                  {comp.optionB.name}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-white/50 block font-semibold">Course Duration:</span>
                    <span className="font-bold text-white">{comp.optionB.duration}</span>
                  </div>

                  <div>
                    <span className="text-white/50 block font-semibold">Eligibility &amp; Exam:</span>
                    <span className="text-white/80">{comp.optionB.eligibility}</span>
                  </div>

                  <div>
                    <span className="text-white/50 block font-semibold">Curriculum Focus:</span>
                    <span className="text-white/80">{comp.optionB.curriculumFocus}</span>
                  </div>

                  <div>
                    <span className="text-white/50 block font-semibold">Work-Life Balance:</span>
                    <span className="text-white/80">{comp.optionB.workLifeBalance}</span>
                  </div>

                  <div>
                    <span className="text-white/50 block font-semibold">Average Starting Remuneration:</span>
                    <span className="font-extrabold text-accent text-sm sm:text-base">
                      {comp.optionB.averageStartingSalary}
                    </span>
                  </div>

                  <div>
                    <span className="text-white/50 block font-semibold">Senior Career Potential:</span>
                    <span className="font-bold text-white">{comp.optionB.seniorEarningPotential}</span>
                  </div>
                </div>
              </div>

              {/* Verdict */}
              <div className="mt-6 pt-4 border-t border-white/10 bg-black/30 p-4 rounded-2xl">
                <span className="text-[11px] uppercase font-bold text-white/50 block mb-1">
                  Ideal Candidate Fit
                </span>
                <p className="text-xs text-white/85 leading-relaxed">
                  {comp.optionB.verdict}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
