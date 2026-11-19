"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Atom,
  TrendingUp,
  Palette,
  Wrench,
  Check,
  ArrowRight,
  BookOpen,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const streams10 = [
  {
    id: "science",
    label: "Science Stream",
    icon: <Atom className="w-5 h-5" />,
    badge: "Most Versatile",
    summary: "For students interested in how the natural world works, mathematical problem-solving, technology, and medical research.",
    options: [
      {
        title: "PCM (Physics, Chemistry, Mathematics)",
        subjects: "Physics, Chemistry, Mathematics, English + 5th Elective (Computer Science / Physical Ed)",
        suitableFor: "Students strong in logical problem-solving, calculus, algebra, and spatial mechanics.",
        availableCourses: "B.Tech / B.E., B.Arch, Commercial Pilot, B.Sc Physics/Math, Defence (NDA), Merchant Navy.",
        futureCareers: "Software Architect, AI Engineer, Robotics Specialist, Aerospace Scientist, Naval Officer, Financial Quant.",
      },
      {
        title: "PCB (Physics, Chemistry, Biology)",
        subjects: "Physics, Chemistry, Biology, English + 5th Elective (Psychology / Biotech / Physical Ed)",
        suitableFor: "Students passionate about living systems, human anatomy, medical treatments, and laboratory experiments.",
        availableCourses: "MBBS, BDS, BAMS, BHMS, B.Sc Nursing, BPT (Physiotherapy), B.Pharm, Biotechnology, Forensic Science.",
        futureCareers: "Specialist Doctor, Dental Surgeon, Clinical Pharmacist, Geneticist, Biomedical Scientist, Hospital Lead.",
      },
      {
        title: "PCMB (Bio-Maths / All-Rounder)",
        subjects: "Physics, Chemistry, Mathematics, Biology, English",
        suitableFor: "High-performing students who want to keep all national options open for both engineering and medical entrance tests.",
        availableCourses: "Biomedical Engineering, Bioinformatics, Biotechnology, Pharmacy, Medicine (NEET), Engineering (JEE).",
        futureCareers: "Computational Biologist, Medical Device Engineer, Genetic Engineering Lead, Pharmaceutical CEO.",
      },
    ],
  },
  {
    id: "commerce",
    label: "Commerce Stream",
    icon: <TrendingUp className="w-5 h-5" />,
    badge: "Finance & Enterprise",
    summary: "For students fascinated by money, corporate trade, stock markets, entrepreneurship, and financial regulations.",
    options: [
      {
        title: "Commerce with Mathematics",
        subjects: "Accountancy, Business Studies, Economics, Mathematics, English",
        suitableFor: "Students targeting competitive financial fields, quantitative economics, and top B-Schools.",
        availableCourses: "B.Com (Hons) at SRCC/DU, B.Sc Economics, BBA / BMS, Integrated BBA+MBA (IPMAT), CA, Actuarial Science.",
        futureCareers: "Investment Banker, Chartered Accountant (CA), Hedge Fund Manager, Data Analyst, Chief Financial Officer.",
      },
      {
        title: "Commerce without Mathematics",
        subjects: "Accountancy, Business Studies, Economics, Informatics Practices / Entrepreneurship, English",
        suitableFor: "Students who prefer business operations, accounting rules, and corporate law over higher calculus.",
        availableCourses: "B.Com, BBA, CA, CS (Company Secretary), CMA, BAF (Accounting & Finance), Digital Marketing, Law (CLAT).",
        futureCareers: "Corporate Secretary (CS), Tax Consultant, Bank Manager, Marketing Director, Brand Strategist.",
      },
    ],
  },
  {
    id: "arts",
    label: "Arts & Humanities",
    icon: <Palette className="w-5 h-5" />,
    badge: "Society, Policy & Creative",
    summary: "For thinkers, creative writers, future lawyers, policymakers, psychologists, and civil service aspirants.",
    options: [
      {
        title: "Humanities & Social Sciences",
        subjects: "History, Political Science, Sociology, Geography, Economics, English",
        suitableFor: "Students with strong reading comprehension, analytical essay writing, and public policy curiosity.",
        availableCourses: "B.A. (Hons) in Political Science / History / Economics, 5-Year Integrated Law (BA LLB via CLAT), Mass Comm.",
        futureCareers: "Civil Servant (IAS / IPS / IFS), Supreme Court Advocate, Foreign Diplomat, Policy Think-Tank Fellow, Journalist.",
      },
      {
        title: "Psychology & Behavioral Sciences",
        subjects: "Psychology, Sociology, English, Political Science, Biology / Economics",
        suitableFor: "Students interested in human emotion, cognitive behavior, mental wellness, and interpersonal counseling.",
        availableCourses: "B.A. / B.Sc. Psychology, Cognitive Science, Human Resource Management, Social Work (BSW).",
        futureCareers: "Licensed Clinical Psychologist, Corporate HR Director, Neuropsychologist, Child Counselor, UX Researcher.",
      },
      {
        title: "Fine Arts, Design & Media",
        subjects: "Fine Arts, Painting, Graphic Design, Mass Media, Literature",
        suitableFor: "Creative students with visual flair, storytelling imagination, and sketching skills.",
        availableCourses: "B.Des (NID / NIFT / UCEED), BFA (Bachelor of Fine Arts), BJMC (Journalism & Mass Comm), Animation & VFX.",
        futureCareers: "Product UI/UX Designer, Creative Director, Fashion Stylist, Investigative Journalist, Film Director.",
      },
    ],
  },
  {
    id: "diploma",
    label: "Diploma & Vocational",
    icon: <Wrench className="w-5 h-5" />,
    badge: "Direct Job Skills",
    summary: "For students who want hands-on practical skills without spending 2 years in high school board theory.",
    options: [
      {
        title: "Polytechnic Engineering Diploma (3 Years)",
        subjects: "Applied Physics, Chemistry, Math, Workshop Practice, Branch Engineering (Mech/Civil/EE/CS)",
        suitableFor: "Practical learners who want early engineering experience with direct lateral entry to 2nd year B.Tech.",
        availableCourses: "Diploma in Mechanical, Civil, Electrical, Automobile, or Computer Engineering.",
        futureCareers: "Junior Engineer (SSC JE / Railway JE), Plant Supervisor, Automation Tech, Direct Lateral B.Tech entry.",
      },
      {
        title: "Paramedical & Healthcare Diplomas",
        subjects: "Clinical Anatomy, Pathology, Medical Electronics, Diagnostic Lab Procedures",
        suitableFor: "Students who want to enter the healthcare and hospital diagnostic industry quickly.",
        availableCourses: "Diploma in Medical Lab Technology (DMLT), Radiography, Dialysis Tech, Ophthalmic Tech.",
        futureCareers: "Medical Lab Technician, Radiographer, Dialysis Operator, Hospital Diagnostic Manager.",
      },
      {
        title: "ITI Vocational Trades (1 to 2 Years)",
        subjects: "Electrician, Fitter, Welder, Machinist, Computer Operator (COPA)",
        suitableFor: "Immediate employment in public manufacturing units (Railways, BHEL, Defence ordnance factories).",
        availableCourses: "National Trade Certificate (NTC) across 100+ approved trades via Craftsmen Training Scheme.",
        futureCareers: "Railway Technician, PSU Maintenance Officer, Licensed Electrical Contractor, Overseas Technician.",
      },
    ],
  },
];

export default function Class10Explorer() {
  const [activeStream, setActiveStream] = useState("science");

  const stream = streams10.find((s) => s.id === activeStream) || streams10[0];

  return (
    <section id="after-10" className="py-20 bg-[#16161c] text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-4 h-4" /> Crossroads of Education
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Career Pathways <span className="text-accent">After Class 10</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Choose your Class 11–12 stream or professional diploma with total clarity. Compare subjects, aptitude fit, and long-term career outcomes.
          </p>
        </div>

        {/* Stream Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {streams10.map((s) => {
            const isActive = activeStream === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStream(s.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl border font-bold text-xs sm:text-sm transition-all ${
                  isActive
                    ? "bg-accent text-primary border-accent shadow-lg shadow-accent/20 scale-105"
                    : "bg-white/[0.03] text-white/75 border-white/10 hover:border-accent/40 hover:text-white"
                }`}
              >
                {s.icon}
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stream Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stream.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Stream Summary Banner */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 sm:p-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                  {stream.badge}
                </span>
                <p className="text-sm sm:text-base text-white/90 font-medium">
                  {stream.summary}
                </p>
              </div>

              <a href="#counselling">
                <Button className="bg-accent text-primary font-bold hover:bg-accent-hover text-xs rounded-xl flex-shrink-0">
                  Ask CVK Sir which stream fits you
                </Button>
              </a>
            </div>

            {/* Options Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {stream.options.map((opt, idx) => (
                <div
                  key={idx}
                  className="bg-[#1e1e28] border border-white/10 hover:border-accent/40 rounded-3xl p-6 flex flex-col justify-between transition-all hover:bg-white/[0.04] shadow-xl"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                      {opt.title}
                    </h3>

                    {/* Subjects */}
                    <div className="mb-4">
                      <span className="text-[11px] uppercase font-bold text-accent tracking-wider block mb-1">
                        Core Subjects
                      </span>
                      <p className="text-xs text-white/80 leading-relaxed bg-black/30 p-2.5 rounded-xl border border-white/5">
                        {opt.subjects}
                      </p>
                    </div>

                    {/* Suitable For */}
                    <div className="mb-4">
                      <span className="text-[11px] uppercase font-bold text-white/50 tracking-wider block mb-1">
                        Suitable For
                      </span>
                      <p className="text-xs text-white/75 leading-relaxed">
                        {opt.suitableFor}
                      </p>
                    </div>

                    {/* Available Courses */}
                    <div className="mb-4">
                      <span className="text-[11px] uppercase font-bold text-white/50 tracking-wider block mb-1">
                        Available Degree / Courses
                      </span>
                      <p className="text-xs text-white/85 font-medium leading-relaxed">
                        {opt.availableCourses}
                      </p>
                    </div>
                  </div>

                  {/* Future Careers & Clickable Action */}
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[11px] uppercase font-bold text-accent tracking-wider block mb-1">
                      Future Career Roles
                    </span>
                    <p className="text-xs text-white font-semibold mb-3">
                      {opt.futureCareers}
                    </p>
                    <a
                      href="#after-12"
                      className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-hover font-bold transition-all group-hover:translate-x-1"
                    >
                      <span>Explore Higher Degree &amp; Entrance Pathways</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
