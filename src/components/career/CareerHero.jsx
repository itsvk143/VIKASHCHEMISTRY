"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, ArrowRight, Compass, GraduationCap, X, ChevronRight, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { careersData } from "@/data/career/careersData";
import { entranceExamsData } from "@/data/career/examsData";
import { scholarshipsData } from "@/data/career/scholarshipsData";

export default function CareerHero({ onSelectCareer }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Live Multi-Domain Search
  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];

    const q = searchQuery.toLowerCase();

    const matchedCareers = careersData
      .filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.stream.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.careerOptions.some((job) => job.toLowerCase().includes(q))
      )
      .slice(0, 5)
      .map((item) => ({ ...item, type: "career" }));

    const matchedExams = entranceExamsData
      .filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.stream.toLowerCase().includes(q) ||
          e.eligibleCourses.toLowerCase().includes(q)
      )
      .slice(0, 3)
      .map((item) => ({ ...item, type: "exam" }));

    const matchedScholarships = scholarshipsData
      .filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.provider.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
      )
      .slice(0, 3)
      .map((item) => ({ ...item, type: "scholarship" }));

    return [...matchedCareers, ...matchedExams, ...matchedScholarships];
  }, [searchQuery]);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-primary via-[#16161e] to-primary text-white border-b border-white/10">
      {/* Background ambient decorative glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Brand Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <Compass className="w-4 h-4 animate-spin" />
            <span>CVK Sir • Interactive Career Guidance Portal</span>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-4">
            YOUR FUTURE STARTS WITH THE <span className="text-accent">RIGHT DECISION</span>
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-white/90 mb-4 tracking-wide">
            EXPLORE YOUR CAREER POSSIBILITIES
          </p>

          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover the right career. Plan your future. Achieve your goals. Explore 100+ career opportunities, entrance examinations, scholarships, and professional courses tailored to your academic passions.
          </p>

          {/* Prominent Live Search Box */}
          <div className="relative max-w-2xl mx-auto mb-8 text-left">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-accent absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                placeholder="Search careers, courses, entrance exams or scholarships..."
                className="w-full h-14 pl-12 pr-10 rounded-2xl bg-white/[0.06] border border-white/20 focus:border-accent text-white placeholder:text-white/40 text-sm sm:text-base outline-none shadow-2xl backdrop-blur-md transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-white/40 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Live Autocomplete Results Dropdown */}
            {searchResults.length > 0 && isFocused && (
              <div className="absolute top-16 left-0 right-0 z-40 bg-[#1c1c24] border border-accent/40 rounded-2xl p-3 shadow-2xl max-h-96 overflow-y-auto space-y-2 backdrop-blur-xl">
                <div className="px-3 py-1.5 text-xs font-semibold text-white/40 uppercase tracking-wider">
                  Matching Results ({searchResults.length})
                </div>

                {searchResults.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      if (item.type === "career") {
                        onSelectCareer(item);
                      }
                      setSearchQuery("");
                      setIsFocused(false);
                    }}
                    className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] transition-colors cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                            item.type === "career"
                              ? "bg-accent/20 text-accent border border-accent/30"
                              : item.type === "exam"
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                              : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                          }`}
                        >
                          {item.type}
                        </span>
                        <span className="text-xs text-white/50">
                          {item.stream || item.category || item.provider}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-accent transition-colors">
                        {item.title || item.name}
                      </h4>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-accent transition-colors" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Interactive Jump Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
            <a href="#after-10">
              <Button
                variant="outline"
                size="lg"
                className="border-accent/40 text-white hover:bg-accent/15 rounded-xl font-bold text-xs sm:text-sm px-5 py-6 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-accent" />
                Explore After Class 10
              </Button>
            </a>

            <a href="#after-12">
              <Button
                size="lg"
                className="bg-accent text-primary font-bold hover:bg-accent-hover rounded-xl text-xs sm:text-sm px-6 py-6 shadow-lg shadow-accent/20 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Explore After Class 12
              </Button>
            </a>

            <a href="#roadmap">
              <Button
                variant="outline"
                size="lg"
                className="border-accent/60 bg-accent/10 text-accent hover:bg-accent hover:text-primary rounded-xl font-bold text-xs sm:text-sm px-5 py-6 flex items-center gap-2 shadow-md shadow-accent/10 transition-all"
              >
                <Compass className="w-4 h-4" />
                Connected Flowchart
              </Button>
            </a>

            <a href="#after-grad">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 rounded-xl font-bold text-xs sm:text-sm px-5 py-6 flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-accent" />
                Explore After Graduation
              </Button>
            </a>
          </div>

          {/* Value Metric Tickers */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-white/60">
            <div>
              <span className="font-extrabold text-white text-sm sm:text-base">100+</span> Career Profiles
            </div>
            <div>
              <span className="font-extrabold text-white text-sm sm:text-base">25+</span> National Entrance Exams
            </div>
            <div>
              <span className="font-extrabold text-white text-sm sm:text-base">₹50 Cr+</span> Scholarships Indexed
            </div>
            <div>
              <span className="font-extrabold text-white text-sm sm:text-base">10</span> Global Study Destinations
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
