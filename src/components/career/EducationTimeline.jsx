"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Layers,
  Award,
  ArrowRight,
  Clock,
  BookOpen,
  Briefcase,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stages = [
  {
    id: "stage-10",
    number: "01",
    name: "Class 10",
    tagline: "The Crossroads: Foundational Streams & Technical Diplomas",
    description: "The primary academic pivot where students choose between continuing general secondary education (Science, Commerce, Arts) or entering hands-on technical diplomas.",
    keyChoices: [
      {
        path: "Science Stream (11th & 12th)",
        details: "Physics, Chemistry with Mathematics (PCM) or Biology (PCB) or both (PCMB). Opens engineering, medicine, pure research, and aviation.",
      },
      {
        path: "Commerce Stream (11th & 12th)",
        details: "Accountancy, Business Studies, Economics (with or without Applied Mathematics). Gateway to CA, CS, Finance, and IIM IPM.",
      },
      {
        path: "Arts & Humanities (11th & 12th)",
        details: "History, Political Science, Psychology, Sociology, Fine Arts, English. Strongest base for Law, Civil Services, Journalism, and Design.",
      },
      {
        path: "Polytechnic Diploma & ITI Trades",
        details: "3-Year technical diploma allowing direct lateral entry into B.Tech 2nd year without Class 11/12 board exams.",
      },
    ],
    examsToTarget: ["NTSE (State/National Talent)", "Class 10 Board Exams", "Polytechnic Entrance Tests (JEECUP, POLYCET)"],
    duration: "1 Year",
  },
  {
    id: "stage-11-12",
    number: "02",
    name: "Class 11–12",
    tagline: "High-Intensity Specialization & National Entrance Preparation",
    description: "The most crucial two years where deep subject mastery directly maps to national competitive examinations for IITs, AIIMS, NLUs, and Central Universities.",
    keyChoices: [
      {
        path: "Engineering & Architecture (PCM)",
        details: "Preparing for JEE Main, JEE Advanced, BITSAT, NATA for entry into premier engineering and architecture institutes.",
      },
      {
        path: "Medicine & Allied Sciences (PCB)",
        details: "Dedicated preparation for NEET UG (720 Marks) targeting MBBS, BDS, BAMS, and veterinary colleges.",
      },
      {
        path: "Professional Commerce & Law",
        details: "Simultaneous preparation for CA Foundation, CLAT (for NLUs), and IPMAT (for IIM 5-Year Integrated Management).",
      },
      {
        path: "Liberal Arts, CUET & Design",
        details: "Targeting Central Universities via CUET UG, and design schools via NIFT, NID, and UCEED.",
      },
    ],
    examsToTarget: ["JEE Main / Advanced", "NEET UG", "BITSAT", "CUET UG", "CLAT", "NDA", "IPMAT", "NATA", "NIFT"],
    duration: "2 Years",
  },
  {
    id: "stage-diploma",
    number: "03",
    name: "Diploma / Vocational",
    tagline: "Job-Ready Technical Skills & Lateral Pathways",
    description: "Hands-on polytechnic diplomas and specialized vocational certificates designed for rapid workforce integration or lateral university entry.",
    keyChoices: [
      {
        path: "Polytechnic in Core Engineering",
        details: "Mechanical, Civil, Electrical, Automobile, Computer Engineering with practical workshop experience.",
      },
      {
        path: "Paramedical & Allied Health Diplomas",
        details: "Diploma in Medical Lab Technology (DMLT), Radiography, Dialysis, and Pharmacy (D.Pharm).",
      },
      {
        path: "Design & Hotel Operations",
        details: "Hospitality operations, digital graphics, interior styling, and commercial animation.",
      },
    ],
    examsToTarget: ["State Lateral Entry Entrance Tests (LEET / OJEE Lateral) for direct B.Tech 2nd year"],
    duration: "2 to 3 Years",
  },
  {
    id: "stage-graduation",
    number: "04",
    name: "Graduation (UG)",
    tagline: "Core Professional Degree & Academic Specialization",
    description: "Earning your primary undergraduate degree (B.Tech, MBBS, B.Com, BA, BBA, B.Des, B.Pharm) with internships, campus placements, and research projects.",
    keyChoices: [
      {
        path: "Technical Degrees (B.Tech / B.E.)",
        details: "4-Year engineering curriculum with campus recruitment in tech, core industries, and consulting.",
      },
      {
        path: "Clinical Healthcare (MBBS / BDS / BAMS / BPT)",
        details: "Rigorous clinical hospital rotations followed by 1-year mandatory rotatory internship.",
      },
      {
        path: "Commerce, Business & Law (B.Com / BBA / BA LLB)",
        details: "Corporate internships in auditing, investment banks, law firms, and consulting enterprises.",
      },
      {
        path: "Pure Sciences & Humanities (B.Sc / BA)",
        details: "Foundation for Master's, civil services preparation, academic research, and policy analysis.",
      },
    ],
    examsToTarget: ["Campus Placement Drives", "CAT / XAT (for MBA)", "GATE (for M.Tech / PSUs)", "UPSC CSE Prelims in final year"],
    duration: "3 to 5.5 Years",
  },
  {
    id: "stage-postgrad",
    number: "05",
    name: "Post-Graduation (PG)",
    tagline: "Advanced Mastery, Management Leadership & Master's Abroad",
    description: "Deepening domain expertise through MBA, M.Tech, MD/MS, LLM, or Master's degrees abroad to unlock executive and specialist positions.",
    keyChoices: [
      {
        path: "Management Education (MBA / PGDM)",
        details: "IIMs and top global B-Schools targeting product management, strategy consulting, and private equity.",
      },
      {
        path: "Medical Specialization (MD / MS / DNB)",
        details: "3-Year residency in Cardiology, Neurology, Orthopedics, Pediatrics, or General Surgery via NEET PG.",
      },
      {
        path: "Engineering & Applied Sciences (M.Tech / MS)",
        details: "Specializing in VLSI, AI/ML, Aerospace, Robotics, or Data Science via GATE or GRE for international universities.",
      },
    ],
    examsToTarget: ["CAT", "GATE", "NEET PG / INI-CET", "UGC NET", "GMAT / GRE for Study Abroad"],
    duration: "2 to 3 Years",
  },
  {
    id: "stage-prof",
    number: "06",
    name: "Professional Specialisation",
    tagline: "Super-Speciality, Global Credentials & Licensing",
    description: "Attaining the highest tier of professional practice certifications such as Medical Super-Speciality (DM/MCh), CFA Level 3, or Ph.D. dissertations.",
    keyChoices: [
      {
        path: "Medical Super-Speciality (DM / MCh / DrNB)",
        details: "Cardiovascular thoracic surgery, neurosurgery, medical oncology, surgical gastroenterology.",
      },
      {
        path: "Doctoral Research (Ph.D.)",
        details: "Original laboratory research, patent filings, and peer-reviewed international scientific publications.",
      },
      {
        path: "Global Financial & Legal Accreditations",
        details: "CFA Charterholder, FRM (Financial Risk Manager), International Bar admissions.",
      },
    ],
    examsToTarget: ["NEET SS (Super Speciality)", "CSIR NET JRF", "CFA Level 3"],
    duration: "3 Years",
  },
  {
    id: "stage-career",
    number: "07",
    name: "Career & Leadership",
    tagline: "Industry Leadership, Public Governance & Entrepreneurship",
    description: "The peak destination where your educational journey translates into leadership roles, enterprise creation, public governance, or scientific breakthroughs.",
    keyChoices: [
      {
        path: "Corporate & Technology Leadership",
        details: "Engineering Director, Chief Technology Officer (CTO), Chief Financial Officer (CFO), Partner in Consulting.",
      },
      {
        path: "Public Governance & Civil Services",
        details: "District Administration, Ministry Policy Direction, Diplomatic missions, Police leadership.",
      },
      {
        path: "Entrepreneurship & Innovation",
        details: "Founding venture-backed technology startups, private hospitals, clinical diagnostics, or industrial firms.",
      },
    ],
    examsToTarget: ["Executive Leadership Programs", "Civil Services In-Service Promotions"],
    duration: "Lifelong Progression",
  },
];

export default function EducationTimeline() {
  const [activeStage, setActiveStage] = useState(0);

  const stage = stages[activeStage];

  return (
    <section id="timeline" className="py-20 bg-primary relative text-white border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4" /> Academic Pathway
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Interactive <span className="text-accent">Education Timeline</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Click on any academic milestone to explore key choices, transition exams, duration, and future career horizons.
          </p>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="flex items-center justify-between overflow-x-auto pb-4 mb-10 gap-3 scrollbar-none">
          {stages.map((st, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStage(idx)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-2xl border transition-all text-xs sm:text-sm font-bold ${
                  isActive
                    ? "bg-accent text-primary border-accent shadow-lg shadow-accent/20 scale-105"
                    : "bg-white/[0.03] text-white/70 border-white/10 hover:border-accent/40 hover:text-white"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    isActive ? "bg-primary text-accent font-black" : "bg-white/10 text-white"
                  }`}
                >
                  {st.number}
                </span>
                <span>{st.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1c1c24] border border-accent/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div>
                <span className="text-xs uppercase font-bold text-accent tracking-wider block mb-1">
                  Stage {stage.number} • Milestone Overview
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {stage.name}
                </h3>
                <p className="text-sm sm:text-base text-accent font-medium mt-1">
                  {stage.tagline}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Duration: <strong>{stage.duration}</strong></span>
                </div>
              </div>
            </div>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
              {stage.description}
            </p>

            {/* Pathways Grid for This Stage */}
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Strategic Educational Pathways at this Stage
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {stage.keyChoices.map((choice, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 hover:border-accent/40 transition-colors"
                >
                  <h5 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {choice.path}
                  </h5>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {choice.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Transition Exams to Target */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-white/50 block mb-2">
                  Key Entrance &amp; Milestone Examinations
                </span>
                <div className="flex flex-wrap gap-2">
                  {stage.examsToTarget.map((exam, eIdx) => (
                    <span
                      key={eIdx}
                      className="px-3 py-1 rounded-xl bg-accent/10 border border-accent/20 text-accent text-xs font-semibold"
                    >
                      {exam}
                    </span>
                  ))}
                </div>
              </div>

              <a href="#after-12" className="flex-shrink-0">
                <Button className="bg-accent text-primary font-bold hover:bg-accent-hover rounded-xl text-xs flex items-center gap-2">
                  <span>Explore Detailed Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
