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
  ExternalLink,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stages = [
  {
    id: "stage-10",
    number: "01",
    name: "Class 10",
    tagline: "The Crossroads: Foundational Streams & Technical Diplomas",
    description:
      "The primary academic pivot where students choose between continuing general secondary education (Science, Commerce, Arts) or entering hands-on technical diplomas.",
    ctaText: "Explore Class 10 Pathways",
    ctaLink: "#after-10",
    keyChoices: [
      {
        path: "Science Stream (11th & 12th)",
        details:
          "Physics, Chemistry with Mathematics (PCM) or Biology (PCB) or both (PCMB). Opens engineering, medicine, pure research, and aviation.",
        link: "#after-10",
        careerId: "cse-aiml",
        badge: "Explore PCM & PCB",
      },
      {
        path: "Commerce Stream (11th & 12th)",
        details:
          "Accountancy, Business Studies, Economics (with or without Applied Mathematics). Gateway to CA, CS, Finance, and IIM IPM.",
        link: "#after-10",
        careerId: "ca",
        badge: "Explore Commerce",
      },
      {
        path: "Arts & Humanities (11th & 12th)",
        details:
          "History, Political Science, Psychology, Sociology, Fine Arts, English. Strongest base for Law, Civil Services, Journalism, and Design.",
        link: "#after-10",
        careerId: "law-clat",
        badge: "Explore Humanities",
      },
      {
        path: "Polytechnic Diploma & ITI Trades",
        details:
          "3-Year technical diploma allowing direct lateral entry into B.Tech 2nd year without Class 11/12 board exams.",
        link: "#after-10",
        careerId: "mechanical-eng",
        badge: "Explore Polytechnic",
      },
    ],
    examsToTarget: [
      "NTSE (State/National Talent)",
      "Class 10 Board Exams",
      "Polytechnic Entrance Tests (JEECUP, POLYCET)",
    ],
    duration: "1 Year",
  },
  {
    id: "stage-11-12",
    number: "02",
    name: "Class 11–12",
    tagline: "High-Intensity Specialization & National Entrance Preparation",
    description:
      "The most crucial two years where deep subject mastery directly maps to national competitive examinations for IITs, AIIMS, NLUs, and Central Universities.",
    ctaText: "Explore Class 12 Courses & Syllabi",
    ctaLink: "#after-12",
    keyChoices: [
      {
        path: "Engineering & Architecture (PCM)",
        details:
          "Preparing for JEE Main, JEE Advanced, BITSAT, NATA for entry into premier engineering and architecture institutes.",
        link: "#after-12",
        careerId: "cse-aiml",
        badge: "Explore PCM Careers & JEE",
      },
      {
        path: "Medicine & Allied Sciences (PCB)",
        details:
          "Dedicated preparation for NEET UG (720 Marks) targeting MBBS, BDS, BAMS, and veterinary colleges.",
        link: "#after-12",
        careerId: "mbbs",
        badge: "Explore Medical & NEET UG",
      },
      {
        path: "Professional Commerce & Law",
        details:
          "Simultaneous preparation for CA Foundation, CLAT (for NLUs), and IPMAT (for IIM 5-Year Integrated Management).",
        link: "#after-12",
        careerId: "ca",
        badge: "Explore Commerce, CA & CLAT",
      },
      {
        path: "Liberal Arts, CUET & Design",
        details:
          "Targeting Central Universities via CUET UG, and design schools via NIFT, NID, and UCEED.",
        link: "#after-12",
        careerId: "law-clat",
        badge: "Explore CUET, Design & Arts",
      },
    ],
    examsToTarget: [
      "JEE Main / Advanced",
      "NEET UG",
      "BITSAT",
      "CUET UG",
      "CLAT",
      "NDA",
      "IPMAT",
      "NATA",
      "NIFT",
    ],
    duration: "2 Years",
  },
  {
    id: "stage-diploma",
    number: "03",
    name: "Diploma / Vocational",
    tagline: "Job-Ready Technical Skills & Lateral Pathways",
    description:
      "Hands-on polytechnic diplomas and specialized vocational certificates designed for rapid workforce integration or lateral university entry.",
    ctaText: "Explore Polytechnic & Trades",
    ctaLink: "#after-10",
    keyChoices: [
      {
        path: "Polytechnic in Core Engineering",
        details:
          "Mechanical, Civil, Electrical, Automobile, Computer Engineering with practical workshop experience.",
        link: "#after-10",
        careerId: "mechanical-eng",
        badge: "Explore Engineering Diplomas",
      },
      {
        path: "Paramedical & Allied Health Diplomas",
        details:
          "Diploma in Medical Lab Technology (DMLT), Radiography, Dialysis, and Pharmacy (D.Pharm).",
        link: "#after-12",
        careerId: "mbbs",
        badge: "Explore Allied Health",
      },
      {
        path: "Design & Hotel Operations",
        details:
          "Hospitality operations, digital graphics, interior styling, and commercial animation.",
        link: "#after-10",
        careerId: "law-clat",
        badge: "Explore Vocational Trades",
      },
    ],
    examsToTarget: [
      "State Lateral Entry Entrance Tests (LEET / OJEE Lateral) for direct B.Tech 2nd year",
    ],
    duration: "2 to 3 Years",
  },
  {
    id: "stage-graduation",
    number: "04",
    name: "Graduation (UG)",
    tagline: "Core Professional Degree & Academic Specialization",
    description:
      "Earning your primary undergraduate degree (B.Tech, MBBS, B.Com, BA, BBA, B.Des, B.Pharm) with internships, campus placements, and research projects.",
    ctaText: "Explore Visual Career Roadmap",
    ctaLink: "#roadmap",
    keyChoices: [
      {
        path: "Technical Degrees (B.Tech / B.E.)",
        details:
          "4-Year engineering curriculum with campus recruitment in tech, core industries, and consulting.",
        link: "#roadmap",
        careerId: "cse-aiml",
        badge: "View B.Tech Roadmap",
      },
      {
        path: "Clinical Healthcare (MBBS / BDS / BAMS / BPT)",
        details:
          "Rigorous clinical hospital rotations followed by 1-year mandatory rotatory internship.",
        link: "#comparisons",
        careerId: "mbbs",
        badge: "Compare MBBS vs BDS",
      },
      {
        path: "Commerce, Business & Law (B.Com / BBA / BA LLB)",
        details:
          "Corporate internships in auditing, investment banks, law firms, and consulting enterprises.",
        link: "#comparisons",
        careerId: "ca",
        badge: "Compare CA vs CMA",
      },
      {
        path: "Pure Sciences & Humanities (B.Sc / BA)",
        details:
          "Foundation for Master's, civil services preparation, academic research, and policy analysis.",
        link: "#govt-jobs",
        careerId: "cse-aiml",
        badge: "Explore Civil Services",
      },
    ],
    examsToTarget: [
      "Campus Placement Drives",
      "CAT / XAT (for MBA)",
      "GATE (for M.Tech / PSUs)",
      "UPSC CSE Prelims in final year",
    ],
    duration: "3 to 5.5 Years",
  },
  {
    id: "stage-postgrad",
    number: "05",
    name: "Post-Graduation (PG)",
    tagline: "Advanced Mastery, Management Leadership & Master's Abroad",
    description:
      "Deepening domain expertise through MBA, M.Tech, MD/MS, LLM, or Master's degrees abroad to unlock executive and specialist positions.",
    ctaText: "Explore Government Exams & PG Jobs",
    ctaLink: "#govt-jobs",
    keyChoices: [
      {
        path: "Management Education (MBA / PGDM)",
        details:
          "IIMs and top global B-Schools targeting product management, strategy consulting, and private equity.",
        link: "#roadmap",
        careerId: "ca",
        badge: "View MBA & IIM Pathways",
      },
      {
        path: "Medical Specialization (MD / MS / DNB)",
        details:
          "3-Year residency in Cardiology, Neurology, Orthopedics, Pediatrics, or General Surgery via NEET PG.",
        link: "#roadmap",
        careerId: "mbbs",
        badge: "Explore Clinical Specialization",
      },
      {
        path: "Engineering & Applied Sciences (M.Tech / MS)",
        details:
          "Specializing in VLSI, AI/ML, Aerospace, Robotics, or Data Science via GATE or GRE for international universities.",
        link: "#study-abroad",
        careerId: "cse-aiml",
        badge: "Explore Study Abroad & GATE",
      },
    ],
    examsToTarget: [
      "CAT",
      "GATE",
      "NEET PG / INI-CET",
      "UGC NET",
      "GMAT / GRE for Study Abroad",
    ],
    duration: "2 to 3 Years",
  },
  {
    id: "stage-prof",
    number: "06",
    name: "Professional Specialisation",
    tagline: "Super-Speciality, Global Credentials & Licensing",
    description:
      "Attaining the highest tier of professional practice certifications such as Medical Super-Speciality (DM/MCh), CFA Level 3, or Ph.D. dissertations.",
    ctaText: "Explore Scholarships & Fellowships",
    ctaLink: "#scholarships",
    keyChoices: [
      {
        path: "Medical Super-Speciality (DM / MCh / DrNB)",
        details:
          "Cardiovascular thoracic surgery, neurosurgery, medical oncology, surgical gastroenterology.",
        link: "#roadmap",
        careerId: "mbbs",
        badge: "View Super-Speciality",
      },
      {
        path: "Doctoral Research (Ph.D.)",
        details:
          "Original laboratory research, patent filings, and peer-reviewed international scientific publications.",
        link: "#scholarships",
        careerId: "cse-aiml",
        badge: "Explore Research Grants",
      },
      {
        path: "Global Financial & Legal Accreditations",
        details:
          "CFA Charterholder, FRM (Financial Risk Manager), International Bar admissions.",
        link: "#study-abroad",
        careerId: "ca",
        badge: "Explore Global Credentials",
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
    description:
      "The peak destination where your educational journey translates into leadership roles, enterprise creation, public governance, or scientific breakthroughs.",
    ctaText: "Book 1-on-1 Guidance with CVK Sir",
    ctaLink: "#counselling",
    keyChoices: [
      {
        path: "Corporate & Technology Leadership",
        details:
          "Engineering Director, Chief Technology Officer (CTO), Chief Financial Officer (CFO), Partner in Consulting.",
        link: "#roadmap",
        careerId: "cse-aiml",
        badge: "View Leadership Trajectory",
      },
      {
        path: "Public Governance & Civil Services",
        details:
          "District Administration, Ministry Policy Direction, Diplomatic missions, Police leadership.",
        link: "#govt-jobs",
        careerId: "ca",
        badge: "Explore IAS / IPS Pathways",
      },
      {
        path: "Entrepreneurship & Innovation",
        details:
          "Founding venture-backed technology startups, private hospitals, clinical diagnostics, or industrial firms.",
        link: "#counselling",
        careerId: "cse-aiml",
        badge: "Connect with Mentors",
      },
    ],
    examsToTarget: [
      "Executive Leadership Programs",
      "Civil Services In-Service Promotions",
    ],
    duration: "Lifelong Progression",
  },
];

export default function EducationTimeline({ onSelectCareer }) {
  const [activeStage, setActiveStage] = useState(1); // default to Class 11-12 as shown in user screenshot

  const stage = stages[activeStage];

  const handleCardClick = (choice) => {
    if (choice.careerId && onSelectCareer) {
      onSelectCareer(choice.careerId);
    }
  };

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
            Click on any academic milestone or pathway card to navigate directly to the relevant course details, entrance exams, and career roadmaps.
          </p>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {stages.map((st, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStage(idx)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-2xl border transition-all text-xs sm:text-sm font-bold cursor-pointer ${
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

            {/* Pathways Grid for This Stage (CLICKABLE) */}
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/50">
                Strategic Educational Pathways at this Stage
              </h4>
              <span className="text-xs text-accent font-semibold hidden sm:inline">
                Click any card to explore course details →
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {stage.keyChoices.map((choice, cIdx) => (
                <a
                  key={cIdx}
                  href={choice.link}
                  onClick={() => handleCardClick(choice)}
                  className="group block bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-accent rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h5 className="font-bold text-white group-hover:text-accent text-base transition-colors flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0 group-hover:scale-125 transition-transform" />
                      {choice.path}
                    </h5>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                    {choice.details}
                  </p>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-accent/90 group-hover:text-accent">
                    <span>{choice.badge || "Explore Pathway & Courses"}</span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-accent/10 group-hover:bg-accent group-hover:text-primary transition-colors border border-accent/25 flex items-center gap-1">
                      Explore <ArrowRight className="w-3 h-3 inline" />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Transition Exams to Target (CLICKABLE) */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-xs uppercase font-bold text-white/50 block">
                    Key Entrance &amp; Milestone Examinations
                  </span>
                  <span className="text-[11px] text-accent/80 font-medium">
                    (Click to view 2025 Calendar &amp; Portals)
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stage.examsToTarget.map((exam, eIdx) => (
                    <a
                      key={eIdx}
                      href="#exam-calendar"
                      title={`View ${exam} Schedule, Syllabus & Application Portal in 2025 Calendar`}
                      className="group/exam px-3.5 py-1.5 rounded-xl bg-accent/10 hover:bg-accent border border-accent/25 hover:border-accent text-accent hover:text-primary text-xs font-bold transition-all duration-200 hover:scale-105 inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Calendar className="w-3 h-3 text-accent group-hover/exam:text-primary transition-colors" />
                      <span>{exam}</span>
                      <ArrowRight className="w-3 h-3 text-accent group-hover/exam:text-primary group-hover/exam:translate-x-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Main Stage Primary CTA Button */}
              <a href={stage.ctaLink} className="flex-shrink-0 self-start sm:self-center">
                <Button className="bg-accent text-primary font-bold hover:bg-accent-hover rounded-xl text-xs sm:text-sm flex items-center gap-2 px-5 py-3 shadow-lg shadow-accent/20 hover:scale-105 transition-all cursor-pointer">
                  <span>{stage.ctaText}</span>
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
