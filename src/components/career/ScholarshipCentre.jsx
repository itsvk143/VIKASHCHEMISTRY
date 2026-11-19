"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  DollarSign,
  FileText,
  Calendar,
  Filter,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { scholarshipsData } from "@/data/career/scholarshipsData";

export default function ScholarshipCentre() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredScholarships = useMemo(() => {
    if (selectedCategory === "all") return scholarshipsData;
    return scholarshipsData.filter((s) => s.category.toLowerCase().includes(selectedCategory));
  }, [selectedCategory]);

  return (
    <section id="scholarships" className="py-20 bg-primary text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" /> Financial Empowerment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Scholarship <span className="text-accent">Discovery Centre</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Never let financial limitations stop your academic dreams. Explore verified government, corporate, and international scholarships offering up to 100% funding.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-5 py-2.5 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === "all"
                ? "bg-accent text-primary border-accent shadow-md shadow-accent/20"
                : "bg-white/[0.03] text-white/70 border-white/10 hover:border-accent/40"
            }`}
          >
            All Scholarships ({scholarshipsData.length})
          </button>
          <button
            onClick={() => setSelectedCategory("government")}
            className={`px-5 py-2.5 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === "government"
                ? "bg-accent text-primary border-accent shadow-md shadow-accent/20"
                : "bg-white/[0.03] text-white/70 border-white/10 hover:border-accent/40"
            }`}
          >
            Government Schemes (NSP / DST)
          </button>
          <button
            onClick={() => setSelectedCategory("private")}
            className={`px-5 py-2.5 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === "private"
                ? "bg-accent text-primary border-accent shadow-md shadow-accent/20"
                : "bg-white/[0.03] text-white/70 border-white/10 hover:border-accent/40"
            }`}
          >
            Private &amp; Corporate (Reliance / Tata / HDFC / Kotak)
          </button>
          <button
            onClick={() => setSelectedCategory("international")}
            className={`px-5 py-2.5 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === "international"
                ? "bg-accent text-primary border-accent shadow-md shadow-accent/20"
                : "bg-white/[0.03] text-white/70 border-white/10 hover:border-accent/40"
            }`}
          >
            International Fellowships (USA / UK / Germany)
          </button>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredScholarships.map((s) => (
            <div
              key={s.id}
              className="bg-[#1c1c24] border border-white/10 hover:border-accent/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:bg-white/[0.04] shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-accent/15 border border-accent/25 text-accent uppercase">
                    {s.category}
                  </span>
                  <span className="text-xs text-white/50">{s.eligibleLevel}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {s.name}
                </h3>
                <span className="text-xs text-white/60 block mb-4">
                  Provider: <strong>{s.provider}</strong>
                </span>

                {/* Benefits Pill */}
                <div className="bg-accent/10 border border-accent/25 rounded-2xl p-4 mb-4">
                  <span className="text-[11px] uppercase font-bold text-accent block mb-1">
                    Scholarship Grant / Benefits
                  </span>
                  <p className="text-sm font-extrabold text-white">
                    {s.benefits}
                  </p>
                </div>

                {/* Eligibility Details */}
                <div className="space-y-2 text-xs text-white/75 mb-4">
                  <div>
                    <span className="font-semibold text-white/90">Eligibility: </span>
                    <span>{s.eligibility}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white/90">Income Cap: </span>
                    <span>{s.incomeCriteria}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white/90">Application Window: </span>
                    <span className="text-accent">{s.deadline}</span>
                  </div>
                </div>

                {/* Required Documents Checklist */}
                <div className="pt-3 border-t border-white/5 mb-4">
                  <span className="text-[11px] uppercase font-bold text-white/40 block mb-2">
                    Key Documents
                  </span>
                  <ul className="space-y-1 text-xs text-white/70">
                    {s.requiredDocuments.slice(0, 3).map((doc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/40">Status: {s.status}</span>
                <a
                  href={s.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline font-bold"
                >
                  <span>Apply on Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
