"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ExternalLink,
  GraduationCap,
  DollarSign,
  Briefcase,
  CheckCircle2,
  FileText,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { studyAbroadData } from "@/data/career/studyAbroadData";

export default function StudyAbroadCentre() {
  const [selectedCountryCode, setSelectedCountryCode] = useState("usa");

  const country =
    studyAbroadData.find((c) => c.code === selectedCountryCode) || studyAbroadData[0];

  return (
    <section id="study-abroad" className="py-20 bg-[#14141a] text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Globe className="w-4 h-4" /> Global Education Horizons
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Study Abroad <span className="text-accent">Discovery Centre</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Explore world-class undergraduate and master&apos;s degrees abroad. Compare admission rules, tuition fees, language exams, and post-study work visa rights.
          </p>
        </div>

        {/* Country Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {studyAbroadData.map((c) => {
            const isActive = selectedCountryCode === c.code;
            return (
              <button
                key={c.code}
                onClick={() => setSelectedCountryCode(c.code)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border font-bold text-xs sm:text-sm transition-all ${
                  isActive
                    ? "bg-accent text-primary border-accent shadow-lg shadow-accent/20 scale-105"
                    : "bg-white/[0.03] text-white/70 border-white/10 hover:border-accent/40 hover:text-white"
                }`}
              >
                <span className="text-base">{c.flag}</span>
                <span>{c.country}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Country Details Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={country.code}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1c1c24] border border-accent/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Header snippet */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{country.flag}</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {country.country}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-accent font-medium">
                  {country.summary}
                </p>
              </div>

              <a
                href={country.officialVisaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <Button
                  variant="outline"
                  className="border-accent/40 text-white hover:bg-accent/15 text-xs rounded-xl flex items-center gap-2"
                >
                  <span>Official Student Visa Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-accent" />
                </Button>
              </a>
            </div>

            {/* Core Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-sm">
              {/* Popular Degrees */}
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <h4 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  Popular Degree Domains
                </h4>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase font-bold text-white/40 block mb-1">
                      Undergraduate (Bachelor&apos;s)
                    </span>
                    <ul className="space-y-1 text-white/80 text-xs sm:text-sm">
                      {country.popularCoursesUG.map((ug, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{ug}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <span className="text-xs uppercase font-bold text-white/40 block mb-1">
                      Postgraduate (Master&apos;s / MBA)
                    </span>
                    <ul className="space-y-1 text-white/80 text-xs sm:text-sm">
                      {country.popularCoursesPG.map((pg, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{pg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Admissions & Language Requirements */}
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <h4 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  Admissions &amp; Language Criteria
                </h4>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold text-white/50 block">Academic Prerequisites</span>
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed mt-1">
                      {country.admissionRequirements}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <span className="text-xs font-bold text-white/50 block">Standardized Language Tests</span>
                    <p className="text-xs sm:text-sm text-accent font-semibold mt-1">
                      {country.languageTests}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Estimates & Post-Study Work Permit */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-xs sm:text-sm">
              <div className="bg-black/30 border border-white/10 rounded-2xl p-5">
                <span className="text-white/50 font-bold block mb-1">Estimated Annual Tuition</span>
                <span className="text-base sm:text-lg font-black text-white">{country.tuitionFeeRange}</span>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-5">
                <span className="text-white/50 font-bold block mb-1">Estimated Annual Living Cost</span>
                <span className="text-base sm:text-lg font-black text-white">{country.livingCostRange}</span>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-5">
                <span className="text-white/50 font-bold block mb-1">Post-Study Work Permit</span>
                <span className="text-base sm:text-lg font-black text-accent">{country.workPermitPostStudy}</span>
              </div>
            </div>

            {/* Top Universities & Strategic Advantage */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div>
                <span className="font-bold text-white/50 block mb-1">Premier Global Universities</span>
                <span className="text-white font-semibold">{country.topUniversities.join(" • ")}</span>
              </div>

              <div className="sm:text-right">
                <span className="font-bold text-accent block mb-1">Strategic Advantage</span>
                <span className="text-white/80">{country.keyAdvantage}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
