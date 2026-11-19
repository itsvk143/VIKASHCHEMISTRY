"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Award,
  ExternalLink,
  DollarSign,
  UserCheck,
  CheckCircle2,
  Calendar,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { governmentJobsData } from "@/data/career/governmentJobsData";

export default function GovernmentJobsExplorer() {
  const [levelFilter, setLevelFilter] = useState("all");

  const filteredJobs = governmentJobsData.filter((job) => {
    if (levelFilter === "all") return true;
    if (levelFilter === "10-12") return job.level.includes("10") || job.level.includes("12");
    if (levelFilter === "grad") return job.level.includes("Graduation");
    return true;
  });

  return (
    <section id="after-grad" className="py-20 bg-[#16161e] text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Building className="w-4 h-4" /> Public Governance &amp; Defence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Government Jobs &amp; <span className="text-accent">Competitive Examinations</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Explore secure public sector careers across Civil Services, Banking, Defence, Staff Selection, and Railways with authentic eligibility and official notifications.
          </p>
        </div>

        {/* Level Filters */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setLevelFilter("all")}
            className={`px-5 py-2.5 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
              levelFilter === "all"
                ? "bg-accent text-primary border-accent shadow-md shadow-accent/20"
                : "bg-white/[0.03] text-white/70 border-white/10 hover:border-accent/40"
            }`}
          >
            All Government Exams
          </button>
          <button
            onClick={() => setLevelFilter("10-12")}
            className={`px-5 py-2.5 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
              levelFilter === "10-12"
                ? "bg-accent text-primary border-accent shadow-md shadow-accent/20"
                : "bg-white/[0.03] text-white/70 border-white/10 hover:border-accent/40"
            }`}
          >
            After Class 10 &amp; 12
          </button>
          <button
            onClick={() => setLevelFilter("grad")}
            className={`px-5 py-2.5 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
              levelFilter === "grad"
                ? "bg-accent text-primary border-accent shadow-md shadow-accent/20"
                : "bg-white/[0.03] text-white/70 border-white/10 hover:border-accent/40"
            }`}
          >
            After Graduation
          </button>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#1e1e28] border border-white/10 hover:border-accent/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/15 border border-accent/25 text-accent uppercase">
                    {job.level}
                  </span>
                  <span className="text-xs text-white/50">{job.conductingBody}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {job.name}
                </h3>

                {/* Posts */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {job.posts.map((post, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-white/90 text-xs font-medium"
                    >
                      {post}
                    </span>
                  ))}
                </div>

                {/* Key Criteria Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-5 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                  <div>
                    <span className="text-white/50 block font-semibold">Min Qualification:</span>
                    <span className="font-bold text-white">{job.eligibleQualification}</span>
                  </div>
                  <div>
                    <span className="text-white/50 block font-semibold">Age Criteria:</span>
                    <span className="font-bold text-white">{job.ageLimit}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-white/50 block font-semibold">Selection Process:</span>
                    <span className="text-white/80">{job.selectionProcess}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-white/50 block font-semibold">Pay Scale &amp; In-Hand:</span>
                    <span className="font-bold text-accent">{job.salaryScale}</span>
                  </div>
                </div>

                {/* Preparation Tip */}
                <p className="text-xs text-white/70 italic mb-4">
                  💡 <strong>Preparation Strategy:</strong> {job.preparationTips}
                </p>
              </div>

              {/* Official Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/50">Verified Recruitment</span>
                <a
                  href={job.officialPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline font-bold"
                >
                  <span>Official Portal ({new URL(job.officialPortal).hostname})</span>
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
