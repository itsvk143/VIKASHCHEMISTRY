"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flame, Check, ArrowRight, Sparkles, BookOpen, Clock, Laptop, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const courses = [
  {
    title: "IIT-JEE (Mains & Advanced)",
    subtitle: "Complete Chemistry Mastery",
    badge: "Most Popular",
    badgeColor: "bg-accent/15 text-accent border-accent/30",
    description: "Designed for Class 11, 12 & Dropper aspirants targeting top percentiles in JEE Mains and high ranks in JEE Advanced.",
    features: [
      "Full Physical, Organic & Inorganic in-depth syllabus",
      "Kota Daily Practice Problems (DPPs) & PYQ Banks (2004–2024)",
      "Multi-concept advanced problem-solving sessions",
      "Bi-weekly mock tests with real-time percentile analysis",
    ],
    primaryLink: "/jeemainschemistry",
    primaryText: "View JEE Notes & Syllabus",
    secondaryLink: "#inquiry",
    secondaryText: "Enroll in Batch",
  },
  {
    title: "NEET Chemistry Mastery",
    subtitle: "Target 180 / 180 Score",
    badge: "High Yield",
    badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    description: "Laser-focused on NEET's latest NTA trends with rapid numerical solving and 100% NCERT line-by-line coverage.",
    features: [
      "Strict NCERT line-by-line coverage for Inorganic & Organic",
      "Fast numerical shortcuts for Physical Chemistry",
      "Assertion-Reasoning & Statement-based question drills",
      "Full syllabus NEET mock tests with negative marking analysis",
    ],
    primaryLink: "/neetchemistry",
    primaryText: "View NEET Notes & Syllabus",
    secondaryLink: "#inquiry",
    secondaryText: "Enroll in Batch",
  },
  {
    title: "1-on-1 Personal Mentorship",
    subtitle: "Customized Direct Coaching",
    badge: "Exclusive",
    badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    description: "Direct individual mentorship with Vikash Sir for students who need personalized attention, pace, and doubt clearing.",
    features: [
      "Direct 1-on-1 doubt solving via WhatsApp and personal calls",
      "Personalized daily/weekly study timetable according to strengths",
      "Regular progress & score reviews with parents",
      "Targeted weak-topic remediation drills",
    ],
    primaryLink: "https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20am%20interested%20in%201-on-1%20Personal%20Chemistry%20Mentorship.",
    primaryText: "Chat with Sir on WhatsApp",
    isExternal: true,
    secondaryLink: "#inquiry",
    secondaryText: "Request Counseling",
  },
  {
    title: "Class 11 & 12 Board + Foundation",
    subtitle: "CBSE / ICSE Board Excellence",
    badge: "Foundation",
    badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
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
    badge: "Practice",
    badgeColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
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
    <section id="courses" className="py-20 bg-primary relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4" /> Comprehensive Programs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Curated Courses to <span className="text-accent">Dominate Chemistry</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Choose the program tailored to your goals. Every course includes live sessions, Kota study material, and personal doubt support.
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.02] border border-white/10 hover:border-accent/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:bg-white/[0.04] shadow-xl group"
            >
              <div>
                {/* Card Top Pill & Title */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                  <span className="text-xs text-white/50">{course.subtitle}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {course.title}
                </h3>

                <p className="text-sm text-white/75 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                  {course.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                {course.isExternal ? (
                  <a
                    href={course.primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      className="w-full bg-accent text-primary font-bold hover:bg-accent-hover rounded-xl flex items-center justify-center gap-2"
                    >
                      {course.primaryText}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                ) : (
                  <Link href={course.primaryLink} className="block w-full">
                    <Button
                      className="w-full bg-accent text-primary font-bold hover:bg-accent-hover rounded-xl flex items-center justify-center gap-2"
                    >
                      {course.primaryText}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                )}

                <a href={course.secondaryLink} className="block w-full">
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/5 rounded-xl text-xs"
                  >
                    {course.secondaryText}
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
