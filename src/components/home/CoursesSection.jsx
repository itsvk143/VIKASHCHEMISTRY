"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Check, ArrowRight, Sparkles, Clock, Laptop, MessageCircle, Award, Target, Flame } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const courses = [
  {
    title: "IIT-JEE (Mains & Advanced)",
    subtitle: "Complete Chemistry Mastery",
    badge: "Most Enrolled",
    badgeColor: "bg-royal-600/20 text-royal-300 border-royal-500/40",
    description: "Designed for Class 11, 12 & Dropper aspirants targeting top percentiles in JEE Mains and top ranks in JEE Advanced.",
    features: [
      "Complete Physical, Organic & Inorganic in-depth syllabus coverage",
      "Kota Daily Practice Problems (DPPs) & PYQ Banks (2004–2024)",
      "Multi-concept advanced problem-solving sessions",
      "Bi-weekly mock tests with real-time percentile analysis",
      "Direct 1-on-1 doubt solving with CVK Sir",
    ],
    primaryLink: "/jeemainschemistry",
    primaryText: "Explore JEE Notes & Syllabus",
    secondaryLink: "#inquiry",
    secondaryText: "Enroll in Batch",
  },
  {
    title: "NEET Chemistry Mastery",
    subtitle: "Target 180 / 180 Score",
    badge: "High Yield",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    description: "Laser-focused on NEET's latest NTA trends with rapid numerical solving and 100% NCERT line-by-line decoding.",
    features: [
      "Strict NCERT line-by-line coverage for Inorganic & Organic",
      "Fast numerical shortcuts for Physical Chemistry",
      "Assertion-Reasoning & Statement-based question drills",
      "Full syllabus NEET mock tests with negative marking elimination",
      "Personalized test analysis to achieve 160–180 in Chemistry",
    ],
    primaryLink: "/neetchemistry",
    primaryText: "Explore NEET Notes & Syllabus",
    secondaryLink: "#inquiry",
    secondaryText: "Enroll in Batch",
  },
  {
    title: "1-on-1 Elite Personal Mentorship",
    subtitle: "Customized Direct Coaching",
    badge: "Strictly Limited Seats",
    badgeColor: "bg-gold-500/15 text-gold-300 border-gold-500/30",
    description: "Direct individual mentorship with Vikash Sir for students who need customized pace, deep doubt resolution, and accountability.",
    features: [
      "Direct 1-on-1 live doubt clearing via WhatsApp and personal calls",
      "Personalized daily/weekly study timetable aligned with strengths",
      "Regular progress & mock score reviews directly with parents",
      "Targeted weak-topic remediation drills before major tests",
      "Complete mentorship for psychological confidence and exam strategy",
    ],
    primaryLink: "https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20am%20interested%20in%201-on-1%20Personal%20Chemistry%20Mentorship.",
    primaryText: "Chat with Sir on WhatsApp",
    isExternal: true,
    secondaryLink: "#inquiry",
    secondaryText: "Request Mentorship Call",
  },
  {
    title: "Class 11 & 12 Board + Foundation",
    subtitle: "CBSE & State Board Excellence",
    badge: "Foundation",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    description: "Master school and board syllabus with 95%+ marks while laying rock-solid conceptual foundations for JEE & NEET.",
    features: [
      "Crystal-clear conceptual derivations and definitions",
      "Board question paper presentation & answer-writing technique",
      "Lab practicals, organic conversions, and reasoning questions",
      "Smooth bridge connecting board concepts to entrance difficulty",
    ],
    primaryLink: "/engineering-class-12",
    primaryText: "Explore Class 12 Syllabus",
    secondaryLink: "#inquiry",
    secondaryText: "Join Foundation",
  },
  {
    title: "All-India Online Test Series",
    subtitle: "Real NTA Exam Simulator",
    badge: "Practice Portal",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    description: "Experience the real computer-based test interface with detailed time-spent analytics, accuracy reports, and video solutions.",
    features: [
      "Chapter-wise, Part-syllabus, and Full-syllabus mock tests",
      "Detailed step-by-step solution keys for every problem",
      "Performance comparison with top aspirants across India",
      "Instant scorecards with negative marks breakdown",
    ],
    primaryLink: "https://testseries-nine.vercel.app/",
    primaryText: "Launch Online Test Series",
    isExternal: true,
    secondaryLink: "#inquiry",
    secondaryText: "Get Access Pass",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 lg:py-28 bg-navy-950 border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-600/15 border border-royal-500/30 text-royal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-gold-400" /> Academic Programmes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4">
            Targeted Courses to <span className="text-gradient-gold">Master Chemistry</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every programme integrates Kota study material, daily practice problem sheets (DPPs), test series analytics, and direct mentor support.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-navy-900 border border-white/10 hover:border-royal-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:bg-navy-850 shadow-xl relative group"
            >
              <div>
                {/* Header: Badge & Title */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${course.badgeColor}`}
                  >
                    {course.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Online &amp; Offline</span>
                </div>

                <h3 className="text-2xl font-heading font-extrabold text-white mb-1 group-hover:text-royal-300 transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs font-semibold text-gold-400 mb-4 tracking-wide">
                  {course.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-white/5">
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-2">
                    Key Course Deliverables:
                  </span>
                  {course.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-6 border-t border-white/10">
                {course.isExternal ? (
                  <a
                    href={course.primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-500 hover:to-royal-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-royal-600/20 transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                    <span>{course.primaryText}</span>
                  </a>
                ) : (
                  <Link
                    href={course.primaryLink}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-500 hover:to-royal-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-royal-600/20 transition-all"
                  >
                    <span>{course.primaryText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}

                <a
                  href={course.secondaryLink}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 transition-all border border-white/10"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>{course.secondaryText}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
