"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Star, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const topRankers = [
  {
    name: "Divyanshu S Sahu",
    score: "99.77 %ile",
    exam: "JEE Mains 2024",
    highlight: "Chemistry Centum Target",
  },
  {
    name: "Jyotiraditya Parida",
    score: "99.22 %ile",
    exam: "JEE Mains 2024",
    highlight: "Top Ranker in Physical & Organic",
  },
  {
    name: "Sayan Rath",
    score: "99.16 %ile",
    exam: "JEE Mains 2024",
    highlight: "Kota DPP Mastery",
  },
  {
    name: "Pratik Choudhary",
    score: "98.97 %ile",
    exam: "JEE Mains 2024",
    highlight: "Consistent Mock Top Scorer",
  },
  {
    name: "Amol Katiyar",
    score: "98.43 %ile",
    exam: "JEE Mains 2024",
    highlight: "Fast Numerical Solving",
  },
  {
    name: "Aditya Dash",
    score: "97.99 %ile",
    exam: "JEE Mains 2024",
    highlight: "100% NCERT Inorganic Accuracy",
  },
  {
    name: "Aayam Panigarahi",
    score: "97.83 %ile",
    exam: "JEE Mains 2024",
    highlight: "Advanced Problem Solver",
  },
  {
    name: "Aditya A Mohanta",
    score: "97.56 %ile",
    exam: "JEE Mains 2024",
    highlight: "Mechanism Specialist",
  },
  {
    name: "Suryans Dash",
    score: "97.16 %ile",
    exam: "JEE Mains 2024",
    highlight: "Zero Negative Marking Drill",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-primary relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-4 h-4" /> Hall of Fame
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Real Students, <span className="text-accent">Top Percentiles</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Our students consistently convert their Chemistry preparation into 98–99+ percentiles in JEE Mains, JEE Advanced, and NEET.
          </p>
        </div>

        {/* Results Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topRankers.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/[0.02] border border-white/10 hover:border-accent/40 rounded-2xl p-6 transition-all hover:bg-white/[0.05] relative overflow-hidden group shadow-lg"
            >
              {/* Decorative top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-lg">
                  {student.name.charAt(0)}
                </div>
                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-black text-accent block tracking-tight">
                    {student.score}
                  </span>
                  <span className="text-xs font-medium text-white/50">
                    {student.exam}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">
                {student.name}
              </h3>

              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/5 text-xs text-white/70">
                <Star className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span>{student.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All & CTA */}
        <div className="text-center">
          <Link href="/resume">
            <Button
              variant="outline"
              size="lg"
              className="border-accent/40 text-white hover:bg-accent/10 rounded-xl px-8"
            >
              View Full Mentorship Journey &amp; History
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
