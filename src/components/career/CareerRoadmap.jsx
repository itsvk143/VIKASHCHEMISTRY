'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ZoomIn, ZoomOut, RotateCcw, ArrowRight, ExternalLink, Sparkles, BookOpen } from 'lucide-react';

const ROADMAP_DATA = {
  class10: {
    title: 'After Class 10: Foundational Forks',
    subtitle: 'Choose your launchpad towards higher secondary, vocational trades, or polytechnic engineering.',
    branches: [
      {
        title: 'Science (PCM / PCB / PCMB)',
        badge: 'High Rigour • Entrances',
        color: 'border-accent/40 bg-accent/5 text-accent',
        dotColor: 'bg-accent',
        subBranches: [
          { name: 'PCM (Physics, Chem, Math)', next: 'Engineering, Architecture, Defence, Aviation', careerId: 'cse' },
          { name: 'PCB (Physics, Chem, Bio)', next: 'MBBS, BDS, Ayush, Pharma, Nursing', careerId: 'mbbs' },
          { name: 'PCMB (Both Math & Bio)', next: 'Biotechnology, Bioinformatics, Biomedical', careerId: 'biotechnology' },
        ],
      },
      {
        title: 'Commerce (With / Without Maths)',
        badge: 'Business • Finance',
        color: 'border-blue-400/40 bg-blue-500/5 text-blue-400',
        dotColor: 'bg-blue-400',
        subBranches: [
          { name: 'Commerce with Maths', next: 'Chartered Accountancy (CA), Actuarial, CFA, Eco (Hons)', careerId: 'ca' },
          { name: 'Commerce without Maths', next: 'B.Com, BBA, Company Secretary (CS), Banking Exams', careerId: 'cs' },
        ],
      },
      {
        title: 'Arts & Humanities',
        badge: 'Civil Services • Creative',
        color: 'border-purple-400/40 bg-purple-500/5 text-purple-400',
        dotColor: 'bg-purple-400',
        subBranches: [
          { name: 'Humanities & Social Sciences', next: 'UPSC Civil Services, Psychology, Journalism, Law', careerId: 'law-clat' },
          { name: 'Design & Visual Arts', next: 'NID, NIFT, Fine Arts, Animation, UI/UX', careerId: 'design-nid' },
        ],
      },
      {
        title: 'Polytechnic & Vocational Trades',
        badge: 'Fast Track • Skills',
        color: 'border-yellow-400/40 bg-yellow-500/5 text-yellow-400',
        dotColor: 'bg-yellow-400',
        subBranches: [
          { name: '3-Year Polytechnic Diploma', next: 'Lateral Entry to 2nd Year B.Tech / Junior Engineer (JE)', careerId: 'polytechnic-diploma' },
          { name: 'ITI Trade Certifications', next: 'Railway ALP, PSU Technician, Electrician, Fitter', careerId: 'iti-trades' },
        ],
      },
    ],
  },
  class12: {
    title: 'After Class 12: Degree Specialisations & Entrances',
    subtitle: 'The primary launchpad for national entrance examinations and 3-to-5 year bachelor degree programs.',
    branches: [
      {
        title: 'Engineering & Technology (PCM)',
        badge: 'JEE Main / Advanced / BITSAT',
        color: 'border-accent/40 bg-accent/5 text-accent',
        dotColor: 'bg-accent',
        subBranches: [
          { name: 'Computer Science & AI/ML', next: 'IITs, NITs, BITS, IIITs (Highest Tech Placements)', careerId: 'cse' },
          { name: 'Core Branches (Mech, Civil, Elect, Chem)', next: 'PSU recruitment (GATE), Infrastructure, R&D', careerId: 'mechanical-eng' },
          { name: 'Architecture & Planning', next: 'B.Arch via JEE Paper 2 / NATA (5 Years)', careerId: 'architecture' },
          { name: 'Defence Forces (NDA)', next: 'Indian Army, Navy, Air Force Officers (Direct Commission)', careerId: 'nda-defence' },
        ],
      },
      {
        title: 'Medical & Healthcare (PCB)',
        badge: 'NEET UG Mandatory',
        color: 'border-rose-400/40 bg-rose-500/5 text-rose-400',
        dotColor: 'bg-rose-400',
        subBranches: [
          { name: 'MBBS (Allopathy Doctor)', next: 'AIIMS, JIPMER, State Govt Medical Colleges', careerId: 'mbbs' },
          { name: 'BDS & AYUSH (Dental & Indian Med)', next: 'Dentistry, Ayurveda (BAMS), Homeopathy (BHMS)', careerId: 'bds' },
          { name: 'Pharmacy & Nursing', next: 'B.Pharm, B.Sc Nursing, Clinical Research', careerId: 'pharmacy' },
          { name: 'Allied Health (Physiotherapy/Lab)', next: 'BPT, BMLT, Radiology, Optometry', careerId: 'physiotherapy' },
        ],
      },
      {
        title: 'Commerce & Management',
        badge: 'CUET / IPMAT / ICAI',
        color: 'border-blue-400/40 bg-blue-500/5 text-blue-400',
        dotColor: 'bg-blue-400',
        subBranches: [
          { name: 'Chartered Accountancy (CA)', next: 'Foundation -> Inter -> Articleship -> Final', careerId: 'ca' },
          { name: 'Integrated BBA+MBA (IPMAT)', next: 'IIM Indore, IIM Rohtak, IIM Ranchi, IIM Bodh Gaya', careerId: 'bba-mba' },
          { name: 'B.Com (Hons) & Economics', next: 'Top DU Colleges (SRCC, Hindu) via CUET UG', careerId: 'bcom-finance' },
        ],
      },
      {
        title: 'Law, Design & Humanities',
        badge: 'CLAT / NID / CUET',
        color: 'border-amber-400/40 bg-amber-500/5 text-amber-400',
        dotColor: 'bg-amber-400',
        subBranches: [
          { name: 'Integrated 5-Year Law (BA LLB / BBA LLB)', next: 'National Law Universities (NLUs) via CLAT / AILET', careerId: 'law-clat' },
          { name: 'Design (B.Des)', next: 'NID DAT, UCEED (IIT Bombay), NIFT Fashion Design', careerId: 'design-nid' },
          { name: 'Pure Science & Research (BS-MS)', next: 'IISc Bangalore, IISERs via IAT, NISER via NEST', careerId: 'iiser-research' },
        ],
      },
    ],
  },
  graduation: {
    title: 'After Graduation: Postgraduate & Career Trajectories',
    subtitle: 'Advance through specialized master degrees, corporate leadership, civil services, or global study.',
    branches: [
      {
        title: 'Postgraduate Technical & Professional',
        badge: 'GATE / CAT / JAM',
        color: 'border-accent/40 bg-accent/5 text-accent',
        dotColor: 'bg-accent',
        subBranches: [
          { name: 'M.Tech / MS via GATE', next: 'PSU direct recruitment (IOCL, ONGC, NTPC) & IIT M.Tech', careerId: 'cse' },
          { name: 'MBA via CAT / XAT / GMAT', next: 'IIM Ahmedabad, IIM Bangalore, Top Global B-Schools', careerId: 'bba-mba' },
          { name: 'M.Sc via IIT JAM', next: 'Pure Science specialization at IITs, IISc, TIFR', careerId: 'iiser-research' },
        ],
      },
      {
        title: 'Civil Services & Government Careers',
        badge: 'UPSC / State PSC / SSC CGL',
        color: 'border-emerald-400/40 bg-emerald-500/5 text-emerald-400',
        dotColor: 'bg-emerald-400',
        subBranches: [
          { name: 'UPSC Civil Services (IAS / IPS / IFS)', next: 'Prelims + Mains + Interview (India’s premier administration)', careerId: 'upsc-civil' },
          { name: 'SSC CGL & Central Ministries', next: 'Income Tax Inspector, Assistant Section Officer (ASO), CBI', careerId: 'ssc-cgl' },
          { name: 'Banking Exams (IBPS PO / SBI PO)', next: 'Probationary Officer, Scale-1 Specialist in PSBs', careerId: 'bank-po' },
        ],
      },
      {
        title: 'Study Abroad & Global Careers',
        badge: 'GRE / GMAT / IELTS',
        color: 'border-sky-400/40 bg-sky-500/5 text-sky-400',
        dotColor: 'bg-sky-400',
        subBranches: [
          { name: 'MS in USA / Germany / UK', next: 'STEM OPT 3-year extension (USA), Tuition-free public universities (Germany)', careerId: 'cse' },
          { name: 'Corporate Tech & FinTech Placements', next: 'Senior Engineering, Quantitative Analyst, Product Management', careerId: 'cse' },
        ],
      },
    ],
  },
};

export default function CareerRoadmap({ onSelectCareer }) {
  const [selectedStage, setSelectedStage] = useState('class12');
  const [scale, setScale] = useState(1);

  const currentStageData = ROADMAP_DATA[selectedStage];

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.1, 1.3));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.1, 0.8));
  const handleResetZoom = () => setScale(1);

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" /> Interactive Roadmap Visualiser
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Visual <span className="text-accent">Career Pathway</span> Architecture
            </h2>
            <p className="text-sm sm:text-base text-white/60 mt-2 max-w-2xl">
              Switch stages, zoom, and click any node to view full eligibility criteria, entrance exams, and college roadmaps.
            </p>
          </div>

          {/* Stage Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/[0.04] border border-white/10 rounded-2xl self-start md:self-auto">
            <button
              onClick={() => setSelectedStage('class10')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedStage === 'class10'
                  ? 'bg-accent text-primary shadow-lg shadow-accent/20'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Class 10 Stage
            </button>
            <button
              onClick={() => setSelectedStage('class12')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedStage === 'class12'
                  ? 'bg-accent text-primary shadow-lg shadow-accent/20'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Class 12 Stage
            </button>
            <button
              onClick={() => setSelectedStage('graduation')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedStage === 'graduation'
                  ? 'bg-accent text-primary shadow-lg shadow-accent/20'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Graduation &amp; Beyond
            </button>
          </div>
        </div>

        {/* Roadmap Canvas Container */}
        <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md overflow-hidden">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Canvas Floating Controls */}
          <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 bg-[#232329]/90 border border-white/15 p-1 rounded-xl backdrop-blur-md shadow-xl">
            <button
              onClick={handleZoomIn}
              title="Zoom In"
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-xs"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              title="Zoom Out"
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-xs"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              title="Reset Zoom"
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-xs"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <span className="px-2 text-xs font-mono text-accent">
              {Math.round(scale * 100)}%
            </span>
          </div>

          {/* Current Stage Headline */}
          <div className="mb-8 relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{currentStageData.title}</h3>
            <p className="text-xs sm:text-sm text-white/60">{currentStageData.subtitle}</p>
          </div>

          {/* Dynamic Nodes Canvas */}
          <motion.div
            style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 transition-transform"
          >
            {currentStageData.branches.map((branch, idx) => (
              <div
                key={branch.title}
                className="flex flex-col bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all shadow-lg"
              >
                {/* Branch Header */}
                <div className="mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                      Track 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-accent/90">{branch.badge}</span>
                  </div>
                  <h4 className="font-bold text-white text-base leading-snug">{branch.title}</h4>
                </div>

                {/* Sub Branch Nodes */}
                <div className="space-y-3 flex-1 flex flex-col justify-start">
                  {branch.subBranches.map((sub, sIdx) => (
                    <div
                      key={sub.name}
                      onClick={() => onSelectCareer && onSelectCareer(sub.careerId)}
                      className="group cursor-pointer p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:border-accent hover:bg-accent/[0.06] transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${branch.dotColor} flex-shrink-0`} />
                          <h5 className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent transition-colors">
                            {sub.name}
                          </h5>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
                      </div>
                      <p className="text-[11px] text-white/50 group-hover:text-white/80 transition-colors mt-1.5 pl-4 leading-relaxed">
                        {sub.next}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Card Footer prompt */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
                  <span>Click node for deep dive</span>
                  <Sparkles className="w-3 h-3 text-accent" />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quick Legend at bottom */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60 relative z-10">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-semibold text-white/80">Stream Color Codes:</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-accent" /> Science (PCM/Tech)</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-400" /> Medical (PCB)</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400" /> Commerce &amp; Management</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-400" /> Humanities &amp; Law</span>
            </div>
            <div className="text-accent text-xs font-semibold">
              Tip: Press any card to launch the comprehensive syllabus &amp; salary report
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
