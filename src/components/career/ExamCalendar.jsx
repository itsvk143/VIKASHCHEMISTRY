"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ExternalLink,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Sparkles,
} from "lucide-react";
import { entranceExamsData } from "@/data/career/examsData";

export default function ExamCalendar() {
  const [filterStream, setFilterStream] = useState("all");

  const filteredExams = entranceExamsData.filter((exam) => {
    if (filterStream === "all") return true;
    if (filterStream === "pcm") return exam.stream.includes("PCM");
    if (filterStream === "pcb") return exam.stream.includes("PCB");
    if (filterStream === "other") return exam.stream.includes("All Streams") || exam.stream.includes("Commerce");
    return true;
  });

  return (
    <section id="exam-calendar" className="py-20 bg-primary text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-4 h-4" /> Academic Schedule
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            National Entrance <span className="text-accent">Exam Calendar 2025–26</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Stay ahead of registration deadlines, exam slots, and result dates for India&apos;s premier competitive entrance examinations.
          </p>
        </div>

        {/* Stream Filter */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {[
            { id: "all", label: "All Examinations" },
            { id: "pcm", label: "Engineering (JEE / BITSAT)" },
            { id: "pcb", label: "Medical (NEET / AYUSH)" },
            { id: "other", label: "Law, CUET & Management" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilterStream(item.id)}
              className={`px-4 py-2 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
                filterStream === item.id
                  ? "bg-accent text-primary border-accent shadow-md shadow-accent/20"
                  : "bg-white/[0.03] text-white/70 border-white/10 hover:border-accent/40 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Calendar Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="bg-[#1c1c24] border border-white/10 hover:border-accent/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/25 text-accent uppercase">
                    {exam.stream}
                  </span>
                  <span className="text-xs text-white/50">{exam.frequency}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{exam.name}</h3>
                <span className="text-xs text-white/60 block mb-4">
                  Conducting Body: <strong>{exam.conductingBody}</strong>
                </span>

                {/* Timeline Grid */}
                <div className="grid grid-cols-3 gap-2 bg-black/40 p-3.5 rounded-2xl border border-white/5 mb-4 text-center">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/40 block">
                      Application
                    </span>
                    <span className="text-xs font-bold text-white mt-0.5 block">
                      {exam.timeline.applicationWindow}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-accent block">
                      Exam Date
                    </span>
                    <span className="text-xs font-black text-accent mt-0.5 block">
                      {exam.timeline.examDate}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-white/40 block">
                      Results
                    </span>
                    <span className="text-xs font-bold text-white mt-0.5 block">
                      {exam.timeline.results}
                    </span>
                  </div>
                </div>

                {/* Pattern & Tips */}
                <p className="text-xs text-white/75 mb-3 leading-relaxed">
                  <strong>Exam Format:</strong> {exam.pattern}
                </p>

                <p className="text-xs text-accent/90 italic mb-4">
                  💡 <strong>Mentor Tip:</strong> {exam.prepTip}
                </p>
              </div>

              {/* Action Portal */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/40">Mode: {exam.examMode}</span>
                <a
                  href={exam.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline font-bold"
                >
                  <span>Official Website</span>
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
