'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  ChevronDown,
  ChevronRight,
  Search,
  Maximize2,
  Minimize2,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Sparkles,
  BookOpen,
  Calendar,
  Briefcase,
  Award,
  Layers,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';

// Comprehensive Collapsible Flowchart Data
const FLOWCHART_DATA = [
  // ==========================================
  // 1. SCIENCE STREAM - PCM
  // ==========================================
  {
    id: 'stream-pcm',
    streamKey: 'pcm',
    title: 'Science (PCM) – Physics, Chemistry & Mathematics',
    badge: 'Engineering, Tech, Defence & Architecture',
    colorTheme: {
      border: 'border-accent/40 hover:border-accent',
      bgHeader: 'bg-accent/10 text-accent border-accent/30',
      pill: 'bg-accent/15 text-accent border-accent/25',
      glow: 'shadow-accent/10',
      accentText: 'text-accent',
    },
    summary: 'The primary gateway to engineering, computational sciences, defence officer training, aviation, and pure scientific research.',
    branches: [
      {
        id: 'pcm-cse',
        careerId: 'cse-aiml',
        title: 'Computer Science, AI/ML & Data Science',
        degree: 'B.Tech / B.E. (4 Years) or B.Sc Computing (3 Years)',
        entranceExams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'State CETs'],
        outcomes: 'Software Engineer (SDE), AI/ML Specialist, Cloud Architect, Data Scientist',
        salaryRange: '₹8 LPA – ₹45+ LPA',
        nextStep: 'M.Tech via GATE / MS Abroad (USA/Germany) / Tech Unicorn Placements',
        tags: ['High Demand', 'Tech Placements', 'Global Scope'],
      },
      {
        id: 'pcm-core',
        careerId: 'mechanical-eng',
        title: 'Core Engineering (Mechanical, Civil, Electrical, Electronics)',
        degree: 'B.Tech / B.E. in Core Engineering Disciplines (4 Years)',
        entranceExams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'State CETs'],
        outcomes: 'Robotics Engineer, VLSI Chip Designer, Infrastructure Consultant, PSU Executive',
        salaryRange: '₹6 LPA – ₹24 LPA',
        nextStep: 'Direct PSU Recruitment via GATE (ONGC, IOCL, NTPC, BHEL) or IIT M.Tech',
        tags: ['PSU Recruitment', 'GATE', 'Hardware & Infra'],
      },
      {
        id: 'pcm-arch',
        careerId: 'architecture',
        title: 'Architecture & Regional Planning',
        degree: 'B.Arch (5 Years) / B.Planning (4 Years)',
        entranceExams: ['NATA (Council of Architecture)', 'JEE Main Paper 2'],
        outcomes: 'Licensed Architect, Sustainable Urban Planner, Landscape & Interior Director',
        salaryRange: '₹5 LPA – ₹20 LPA',
        nextStep: 'Council of Architecture Registration, M.Arch, Architectural Studio Founder',
        tags: ['Design & Build', 'Creative STEM', 'CoA Licensure'],
      },
      {
        id: 'pcm-defence',
        careerId: 'nda-defence',
        title: 'Armed Forces Officer Training (NDA / Navy / Air Force)',
        degree: 'B.Tech / B.Sc Degree from JNU during 3-Yr Tri-Service NDA Training',
        entranceExams: ['NDA & NA Exam (UPSC)', '5-Day SSB Interview', 'Air Force CPSS'],
        outcomes: 'Commissioned Officer: Lieutenant (Army) / Sub-Lieut (Navy) / Flying Officer (IAF)',
        salaryRange: '₹12 LPA – ₹25+ LPA (7th CPC Pay Level 10 + Military Perks)',
        nextStep: 'In-Service Specialization, Defence Services Staff College (DSSC), Command Wings',
        tags: ['National Honor', 'Direct Commission', 'Lifelong Prestige'],
      },
      {
        id: 'pcm-research',
        careerId: 'iiser-research',
        title: 'Pure Sciences & Fundamental Scientific Research',
        degree: 'BS-MS Dual Degree (5 Years) at IISc Bangalore, 7 IISERs, NISER',
        entranceExams: ['IAT (IISER Aptitude Test)', 'NEST (NISER/CEBS)'],
        outcomes: 'Research Scientist (ISRO, BARC, DRDO), Laboratory Director, Theoretical Physicist',
        salaryRange: '₹8 LPA – ₹26 LPA',
        nextStep: 'Ph.D. with PMRF / CSIR NET JRF Fellowship, Post-Doc Research in Europe/USA',
        tags: ['Research Fellowship', 'IISc / IISER', 'Scientific Innovation'],
      },
      {
        id: 'pcm-aviation',
        careerId: 'commercial-pilot',
        title: 'Aviation & Commercial Pilot',
        degree: 'Commercial Pilot License (CPL) + B.Sc in Aviation (2 – 3 Years)',
        entranceExams: ['DGCA Ground Theory Exams', 'Class 1 Medical', 'IGRUA Entrance'],
        outcomes: 'First Officer ➔ Captain (Airlines: Indigo, Air India, Emirates, Singapore Airlines)',
        salaryRange: '₹18 LPA – ₹50+ LPA',
        nextStep: 'Type Rating (Airbus A320 / Boeing B777), Senior Airline Captain, Check Pilot',
        tags: ['Global Aviation', 'High Starting Salary', 'DGCA License'],
      },
      {
        id: 'pcm-merchant-navy',
        careerId: 'merchant-navy',
        title: 'Merchant Navy & Marine Technology',
        degree: 'B.Tech Marine Engineering (4 Yrs) / B.Sc Nautical Science (3 Yrs)',
        entranceExams: ['IMU-CET (Indian Maritime University)'],
        outcomes: 'Chief Marine Engineer, Navigation Deck Officer, Merchant Ship Captain',
        salaryRange: 'Tax-Free USD ($3,500 – $12,000/month: ~₹30 LPA – ₹1 Crore+)',
        nextStep: 'Chief Mate / Master Mariner Certification, International Shipping Fleet Management',
        tags: ['Tax-Free Global Income', 'World Travel', 'IMU Licensure'],
      },
    ],
  },

  // ==========================================
  // 2. SCIENCE STREAM - PCB
  // ==========================================
  {
    id: 'stream-pcb',
    streamKey: 'pcb',
    title: 'Science (PCB) – Physics, Chemistry & Biology',
    badge: 'Medicine, Dentistry, Allied Health, Biotech & Pharma',
    colorTheme: {
      border: 'border-rose-400/40 hover:border-rose-400',
      bgHeader: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      pill: 'bg-rose-500/15 text-rose-400 border-rose-500/25',
      glow: 'shadow-rose-500/10',
      accentText: 'text-rose-400',
    },
    summary: 'The dedicated biological pathway for allopathic doctors, dental surgeons, alternative medicine practitioners, pharmacists, and biotechnology pioneers.',
    branches: [
      {
        id: 'pcb-mbbs',
        careerId: 'mbbs',
        title: 'Allopathic Clinical Medicine & Surgery (MBBS)',
        degree: 'MBBS (4.5 Years Academic + 1 Year Mandatory Rotatory Internship)',
        entranceExams: ['NEET UG (National Eligibility cum Entrance Test - 720 Marks)'],
        outcomes: 'Medical Officer, General Physician, Emergency Medicine Specialist',
        salaryRange: '₹10 LPA – ₹30 LPA (Post-MBBS) to ₹50+ LPA (Post-MD/MS)',
        nextStep: 'NEET PG / INI-CET for 3-Year MD/MS Residency ➔ DM/MCh Super-Speciality',
        tags: ['Highest Respect', 'NEET UG Mandatory', 'Clinical Practice'],
      },
      {
        id: 'pcb-bds',
        careerId: 'bds',
        title: 'Dental Surgery & Oral Medicine (BDS)',
        degree: 'BDS (4 Years Academic + 1 Year Clinical Internship)',
        entranceExams: ['NEET UG'],
        outcomes: 'Dental Surgeon, Cosmetic Dentist, Maxillofacial Specialist, Dental Clinic Owner',
        salaryRange: '₹5 LPA – ₹20 LPA',
        nextStep: 'NEET MDS (Master of Dental Surgery in Orthodontics / Prosthodontics)',
        tags: ['Private Practice', 'Surgical Dexterity', 'Aesthetic Dentistry'],
      },
      {
        id: 'pcb-ayush',
        careerId: 'ayush-medicine',
        title: 'AYUSH & Integrative Healthcare (BAMS / BHMS / BUMS)',
        degree: 'BAMS (Ayurveda), BHMS (Homeopathy), BUMS (Unani) - 5.5 Years',
        entranceExams: ['NEET UG'],
        outcomes: 'Ayurvedic Physician, Integrative Wellness Lead, Clinical Trial Specialist',
        salaryRange: '₹5 LPA – ₹16 LPA',
        nextStep: 'MD/MS in Ayurveda via AIAPGET, Global Holistic Healthcare Clinics',
        tags: ['Ayurvedic Boom', 'Government AYUSH Hospitals', 'Natural Therapeutics'],
      },
      {
        id: 'pcb-pharma',
        careerId: 'pharmacy',
        title: 'Pharmacy, Pharmacology & Drug Regulatory Affairs',
        degree: 'B.Pharm (4 Years) / Pharm.D (6-Year Clinical Doctorate)',
        entranceExams: ['State CETs', 'NEET UG', 'BITSAT (for BITS Pilani Pharmacy)'],
        outcomes: 'Clinical Pharmacist, Drug Regulatory Inspector, Formulation Scientist',
        salaryRange: '₹4.5 LPA – ₹16 LPA',
        nextStep: 'GPAT for M.Pharm / NIPER, Master of Public Health (MPH), Pharmaceutical R&D',
        tags: ['Drug Discovery', 'Vaccine Trials', 'Industrial Pharma'],
      },
      {
        id: 'pcb-allied-nursing',
        careerId: 'physiotherapy',
        title: 'Physiotherapy (BPT), Nursing & Paramedical Diagnostics',
        degree: 'BPT (4.5 Yrs) / B.Sc Nursing (4 Yrs) / BMLT / Radiography (3 Yrs)',
        entranceExams: ['AIIMS Nursing Entrance', 'State Paramedical & Physiotherapy CETs'],
        outcomes: 'Sports Physiotherapist, Critical Care Nursing Lead, MRI/Radiology Technologist',
        salaryRange: '₹4 LPA – ₹15 LPA (High global overseas demand in UK/USA/Canada)',
        nextStep: 'MPT (Master of Physiotherapy) / NCLEX-RN Examination for US/UK Healthcare',
        tags: ['Global Migration Rights', 'Rehabilitation', 'Critical Care'],
      },
      {
        id: 'pcb-biotech',
        careerId: 'biotechnology',
        title: 'Biotechnology, Genetics & Computational Life Sciences',
        degree: 'B.Tech / B.Sc in Biotechnology, Microbiology, Genetics (3 – 4 Years)',
        entranceExams: ['CUET UG', 'State Engineering/Tech Entrances'],
        outcomes: 'Bioinformatician, Geneticist, Vaccine Development Analyst, Fermentation Engineer',
        salaryRange: '₹5 LPA – ₹20 LPA',
        nextStep: 'M.Sc / M.Tech via IIT JAM / GAT-B, Ph.D. in Germany/USA in Gene Therapy',
        tags: ['CRISPR & Gene Editing', 'Pharma Tech', 'Bioinformatics'],
      },
    ],
  },

  // ==========================================
  // 3. COMMERCE & MANAGEMENT STREAM
  // ==========================================
  {
    id: 'stream-commerce',
    streamKey: 'commerce',
    title: 'Commerce, Finance & Enterprise Leadership',
    badge: 'Chartered Accountancy, IIM IPM, Investment Banking & Economics',
    colorTheme: {
      border: 'border-blue-400/40 hover:border-blue-400',
      bgHeader: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      pill: 'bg-blue-500/15 text-blue-400 border-blue-500/25',
      glow: 'shadow-blue-500/10',
      accentText: 'text-blue-400',
    },
    summary: 'Direct routes to corporate financial governance, statutory auditing, management consulting, and premier Indian Institutes of Management (IIMs).',
    branches: [
      {
        id: 'com-ca',
        careerId: 'ca',
        title: 'Chartered Accountancy (CA – ICAI)',
        degree: 'Statutory Licensure: Foundation ➔ Intermediate ➔ 2-Yr Articleship ➔ Final',
        entranceExams: ['CA Foundation Exam (Conducted by ICAI thrice annually)'],
        outcomes: 'Audit Partner, Chief Financial Officer (CFO), International Tax Consultant',
        salaryRange: '₹10 LPA – ₹36+ LPA (Fast-track progression in Big 4 and MNCs)',
        nextStep: 'Independent CA Firm, Global Corporate Advisory, CFA Level 3 Certification',
        tags: ['Statutory Monopoly', 'Big 4 Fast Track', 'ICAI Credential'],
      },
      {
        id: 'com-ipm',
        careerId: 'bba-mba',
        title: 'Premier Management via Integrated IIM Programs (IPMAT)',
        degree: '5-Year Integrated BBA + MBA Degree from IIMs',
        entranceExams: ['IPMAT (IIM Indore, IIM Rohtak, IIM Ranchi, IIM Bodh Gaya, IIM Jammu)'],
        outcomes: 'Management Consultant (McKinsey, BCG), Product Manager, Equity Analyst',
        salaryRange: '₹18 LPA – ₹38+ LPA',
        nextStep: 'Executive Corporate Leadership, Global Private Equity & Venture Capital',
        tags: ['IIM Tagline', 'Direct After 12th', 'High ROI'],
      },
      {
        id: 'com-cuet-finance',
        careerId: 'bcom-finance',
        title: 'Commerce (Hons), B.A. Economics & Finance at Top Central Varsities',
        degree: 'B.Com (Hons) / B.A. Economics (Hons) / BMS (3 – 4 Years)',
        entranceExams: ['CUET UG (SRCC, Hindu College, St. Stephen’s, Delhi University)'],
        outcomes: 'Investment Banking Analyst, Risk Strategist, Quantitative Economic Researcher',
        salaryRange: '₹7 LPA – ₹22 LPA',
        nextStep: 'CAT Exam for 2-Year Post-Grad MBA at IIM Ahmedabad / Bangalore / Calcutta',
        tags: ['Top Tier DU Colleges', 'SRCC Culture', 'Economics & Trading'],
      },
      {
        id: 'com-cs-cma',
        careerId: 'cs',
        title: 'Company Secretary (CS) & Cost & Management Accountant (CMA)',
        degree: 'Statutory Professional Certifications (ICSI & ICMAI)',
        entranceExams: ['CSEET (for CS) / CMA Foundation & Intermediate'],
        outcomes: 'Corporate Legal Secretary, Board Compliance Lead, Industrial Cost Auditor',
        salaryRange: '₹7 LPA – ₹22 LPA',
        nextStep: 'SEBI Compliance Director, Legal Advisory Partner, Corporate Governance Lead',
        tags: ['Boardroom Authority', 'Corporate Compliance', 'Cost Control'],
      },
      {
        id: 'com-actuarial',
        careerId: 'actuarial-science',
        title: 'Actuarial Science & Quantitative Financial Risk',
        degree: 'B.Sc in Actuarial Science / Statistics + IAI Series Examinations',
        entranceExams: ['ACET (Actuarial Common Entrance Test - Institute of Actuaries of India)'],
        outcomes: 'Appointed Actuary, Insurance Pricing Modeler, Catastrophe Risk Analyst',
        salaryRange: '₹12 LPA – ₹40+ LPA',
        nextStep: 'Fellowship of Institute of Actuaries (FIA / FIAI), Pension Fund Valuation',
        tags: ['Highest Mathematical Pay', 'Mathematical Modelling', 'Rare Elite Skill'],
      },
    ],
  },

  // ==========================================
  // 4. ARTS, HUMANITIES, LAW & DESIGN STREAM
  // ==========================================
  {
    id: 'stream-arts',
    streamKey: 'arts',
    title: 'Arts, Humanities, Law, Design & Civil Services',
    badge: 'National Law Universities (CLAT), UPSC, Design & Psychology',
    colorTheme: {
      border: 'border-amber-400/40 hover:border-amber-400',
      bgHeader: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      pill: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
      glow: 'shadow-amber-500/10',
      accentText: 'text-amber-400',
    },
    summary: 'The strategic launchpad for corporate lawyers, supreme court advocates, civil administration leaders (IAS/IPS), visual product designers, and psychological counselors.',
    branches: [
      {
        id: 'arts-law',
        careerId: 'law-clat',
        title: 'Integrated Corporate Law (BA LLB / BBA LLB)',
        degree: '5-Year Integrated Double Degree at 26 National Law Universities (NLUs)',
        entranceExams: ['CLAT (Consortium of NLUs)', 'AILET (NLU Delhi)'],
        outcomes: 'Corporate Law Associate (Cyril Amarchand, Shardul, AZB), Litigator, Judge',
        salaryRange: '₹12 LPA – ₹28+ LPA',
        nextStep: 'LLM at Oxford/Harvard, State Judicial Services Exam, Supreme Court Advocate',
        tags: ['NLU Bangalore', 'Corporate Law', 'High Starting Tier'],
      },
      {
        id: 'arts-upsc',
        careerId: 'upsc-civil',
        title: 'Civil Services & Public Administration (IAS / IPS / IFS)',
        degree: 'Any Recognized Graduation Degree (B.A., B.Sc, B.Com, B.Tech)',
        entranceExams: ['UPSC Civil Services Examination (Prelims + Mains + Interview)'],
        outcomes: 'District Magistrate (IAS), Superintendent of Police (IPS), Diplomat (IFS)',
        salaryRange: '₹12 LPA – ₹26 LPA (Pay Level 10 + Government Bungalow & Security)',
        nextStep: 'Joint Secretary to Union Ministries, Ambassador, Chief Secretary of State',
        tags: ['Highest Policy Power', 'Pan-India Governance', 'Public Leadership'],
      },
      {
        id: 'arts-design',
        careerId: 'design-nid',
        title: 'Design, Creative Tech & Visual Architecture (B.Des)',
        degree: 'B.Des in Product Design, UI/UX Interaction, Fashion (4 Years)',
        entranceExams: ['NID DAT (National Institute of Design)', 'UCEED (IIT Bombay)', 'NIFT'],
        outcomes: 'Lead UI/UX Designer, Industrial Product Designer, Creative Brand Director',
        salaryRange: '₹8 LPA – ₹30+ LPA',
        nextStep: 'M.Des at IIT Bombay / Royal College of Art, Principal Designer at Tech Giants',
        tags: ['UI/UX Tech Pay', 'IIT Bombay Design', 'Creative Freedom'],
      },
      {
        id: 'arts-psychology',
        careerId: 'psychology',
        title: 'Psychology, Cognitive Behavior & Organizational Counseling',
        degree: 'B.A. / B.Sc Psychology (3-4 Years) ➔ M.A. / M.Sc Clinical Psychology',
        entranceExams: ['CUET UG (Delhi University, BHU, Christ University)'],
        outcomes: 'Licensed Clinical Psychologist, Corporate Behavioral Consultant, Counselor',
        salaryRange: '₹5 LPA – ₹18 LPA',
        nextStep: 'M.Phil / Psy.D Clinical Psychology (RCI Licensed Practitioner), Private Clinic',
        tags: ['Mental Health Boom', 'Corporate HR Consulting', 'RCI Licensure'],
      },
      {
        id: 'arts-journalism',
        careerId: 'journalism',
        title: 'Journalism, Media Direction & Digital Storytelling',
        degree: 'B.A. in Journalism & Mass Communication (3 – 4 Years)',
        entranceExams: ['CUET UG', 'IIMC Entrance Exam', 'Symbiosis SET'],
        outcomes: 'Senior Investigative Reporter, Digital Media Strategist, Broadcast Anchor',
        salaryRange: '₹5 LPA – ₹18 LPA',
        nextStep: 'Master’s in International Media (Columbia / London), Media Production Founder',
        tags: ['Digital News', 'Brand Communications', 'Public Broadcasting'],
      },
    ],
  },

  // ==========================================
  // 5. POLYTECHNIC & VOCATIONAL TRADES STREAM
  // ==========================================
  {
    id: 'stream-polytechnic',
    streamKey: 'polytechnic',
    title: 'Polytechnic Engineering Diplomas & Technical ITI Trades',
    badge: 'Direct Lateral Entry to 2nd Year B.Tech, Junior Engineer & PSU Jobs',
    colorTheme: {
      border: 'border-purple-400/40 hover:border-purple-400',
      bgHeader: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      pill: 'bg-purple-500/15 text-purple-400 border-purple-500/25',
      glow: 'shadow-purple-500/10',
      accentText: 'text-purple-400',
    },
    summary: 'Practical skill-first engineering qualifications straight after Class 10 with guaranteed lateral degree pathways and immediate government technical job eligibility.',
    branches: [
      {
        id: 'poly-engineering',
        careerId: 'polytechnic-diploma',
        title: '3-Year Polytechnic Diploma in Engineering (Mech, Civil, Elect, CS)',
        degree: 'Polytechnic Diploma in Engineering (3 Years after Class 10)',
        entranceExams: ['State Polytechnic Entrance Exams (JEECUP, POLYCET, OJEE Diploma)'],
        outcomes: 'Junior Engineer (JE in Railways / PWD), Industrial Plant Supervisor',
        salaryRange: '₹4 LPA – ₹10 LPA',
        nextStep: 'Lateral Entry (LEET) Directly into 2nd Year B.Tech (Skip 11th & 12th Board)',
        tags: ['Direct B.Tech 2nd Year', 'Junior Engineer', 'Practical Labs'],
      },
      {
        id: 'poly-iti',
        careerId: 'iti-trades',
        title: 'Industrial Training Institute (ITI) Technical Trades',
        degree: 'National Trade Certificate (NTC) in Electrician, Fitter, Welder (1 – 2 Years)',
        entranceExams: ['State Directorate of Technical Education Merit / Admission Test'],
        outcomes: 'Railway Assistant Loco Pilot (ALP), PSU Technician (BHEL, IOCL, ONGC, SAIL)',
        salaryRange: '₹3.5 LPA – ₹8 LPA',
        nextStep: 'Apprenticeship at Indian Railways / BHEL, Lateral Entry to 2nd Year Diploma',
        tags: ['Railway ALP Jobs', 'PSU Technician', 'Fastest Earning'],
      },
    ],
  },
];

export default function CareerRoadmap({ onSelectCareer }) {
  // States for expandable streams and branches
  const [expandedStreams, setExpandedStreams] = useState({
    'stream-pcm': true, // default first stream open
    'stream-pcb': false,
    'stream-commerce': false,
    'stream-arts': false,
    'stream-polytechnic': false,
  });

  const [filterStream, setFilterStream] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [zoomScale, setZoomScale] = useState(1);

  // Toggle single stream
  const toggleStream = (streamId) => {
    setExpandedStreams((prev) => ({
      ...prev,
      [streamId]: !prev[streamId],
    }));
  };

  // Expand all
  const handleExpandAll = () => {
    const allExpanded = {};
    FLOWCHART_DATA.forEach((s) => {
      allExpanded[s.id] = true;
    });
    setExpandedStreams(allExpanded);
  };

  // Collapse all
  const handleCollapseAll = () => {
    const allCollapsed = {};
    FLOWCHART_DATA.forEach((s) => {
      allCollapsed[s.id] = false;
    });
    setExpandedStreams(allCollapsed);
  };

  // Filtered & searched data
  const filteredData = useMemo(() => {
    return FLOWCHART_DATA.filter((stream) => {
      // Stream filter
      if (filterStream !== 'all' && stream.streamKey !== filterStream) {
        return false;
      }

      // Search query filter
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchStream =
        stream.title.toLowerCase().includes(q) || stream.summary.toLowerCase().includes(q);

      const matchBranch = stream.branches.some(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.degree.toLowerCase().includes(q) ||
          b.outcomes.toLowerCase().includes(q) ||
          b.entranceExams.some((e) => e.toLowerCase().includes(q)) ||
          b.tags.some((t) => t.toLowerCase().includes(q))
      );

      return matchStream || matchBranch;
    });
  }, [filterStream, searchQuery]);

  // When search query is entered, auto-expand all matching streams!
  React.useEffect(() => {
    if (searchQuery.trim().length > 1) {
      handleExpandAll();
    }
  }, [searchQuery]);

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" /> Comprehensive Career Pathway Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Connected <span className="text-accent">Collapsible Flowchart</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Trace every connected step: from <strong>Class 10</strong> foundational decisions to <strong>Class 12 Streams</strong>, entrance examinations, professional degrees, starting salaries, and long-term career outcomes. Expand or collapse branches to explore.
          </p>
        </div>

        {/* Global Control Bar: Search + Filter Tabs + Expand/Collapse + Zoom */}
        <div className="bg-[#1c1c24] border border-white/10 rounded-2xl p-4 sm:p-6 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Live Search in Flowchart */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search career, degree or exam (e.g. Doctor, AI, Pilot, CA, UPSC)..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Stream Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              {[
                { id: 'all', label: 'All Streams' },
                { id: 'pcm', label: 'PCM (Engineering)' },
                { id: 'pcb', label: 'PCB (Medical)' },
                { id: 'commerce', label: 'Commerce' },
                { id: 'arts', label: 'Arts & Law' },
                { id: 'polytechnic', label: 'Polytechnic' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterStream(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    filterStream === tab.id
                      ? 'bg-accent text-primary shadow-md shadow-accent/20'
                      : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Expand / Collapse All Toggles & Zoom Controls */}
            <div className="flex items-center gap-2 self-end lg:self-auto flex-shrink-0">
              <button
                onClick={handleExpandAll}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-accent/15 hover:text-accent border border-white/10 text-white/80 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                title="Expand All Streams & Pathways"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Expand All</span>
              </button>
              <button
                onClick={handleCollapseAll}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                title="Collapse All Streams"
              >
                <Minimize2 className="w-3.5 h-3.5" />
                <span>Collapse All</span>
              </button>
              <div className="hidden sm:flex items-center gap-1 pl-2 border-l border-white/10 text-xs font-mono text-accent">
                <button
                  onClick={() => setZoomScale((s) => Math.max(0.85, s - 0.05))}
                  className="px-2 py-1 bg-white/5 rounded-lg hover:bg-white/10 text-white/70"
                  title="Zoom Out"
                >
                  -
                </button>
                <span className="px-1">{Math.round(zoomScale * 100)}%</span>
                <button
                  onClick={() => setZoomScale((s) => Math.min(1.15, s + 0.05))}
                  className="px-2 py-1 bg-white/5 rounded-lg hover:bg-white/10 text-white/70"
                  title="Zoom In"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FLOWCHART CANVAS */}
        <div
          style={{ transform: `scale(${zoomScale})`, transformOrigin: 'top center' }}
          className="transition-transform duration-200"
        >
          {/* 1. ROOT ORIGIN NODE (Class 10 Pivot) */}
          <div className="relative mb-12">
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#1c1c24] via-[#23232f] to-[#1c1c24] border-2 border-accent/50 rounded-3xl p-6 sm:p-7 shadow-2xl text-center relative z-10 backdrop-blur-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-black uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Origin • Level 00
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Class 10 Completion <span className="text-accent">&amp;</span> Secondary Board
              </h3>
              <p className="text-xs sm:text-sm text-white/75 mt-2 max-w-lg mx-auto leading-relaxed">
                The primary divergence point where students branch into <strong>Senior Secondary Streams (11th &amp; 12th)</strong> or technical <strong>Polytechnic Diplomas</strong>.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-white/70">
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">5 Core Arteries</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">26 Tracked Specializations</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">100% Connected Pathways</span>
              </div>
            </div>

            {/* Vertical Flow Connector Trunk */}
            <div className="w-0.5 h-12 bg-gradient-to-b from-accent to-accent/20 mx-auto" />
            <div className="w-3 h-3 rounded-full bg-accent mx-auto -mt-1.5 shadow-lg shadow-accent" />
          </div>

          {/* 2. MAIN STREAM ARTERIES (Collapsible Tree Nodes) */}
          <div className="space-y-6">
            {filteredData.map((stream, sIdx) => {
              const isExpanded = !!expandedStreams[stream.id];

              return (
                <div
                  key={stream.id}
                  className={`bg-[#181820] border ${
                    isExpanded ? stream.colorTheme.border : 'border-white/10'
                  } rounded-3xl transition-all duration-300 shadow-xl overflow-hidden`}
                >
                  {/* Stream Header (Clickable Accordion Trigger) */}
                  <div
                    onClick={() => toggleStream(stream.id)}
                    className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.03] transition-colors group select-none"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      {/* Expand / Collapse Icon Pill */}
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm border transition-all ${
                          isExpanded
                            ? stream.colorTheme.bgHeader
                            : 'bg-white/5 border-white/15 text-white/70 group-hover:border-white/30'
                        }`}
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5 transition-transform" />
                        ) : (
                          <ChevronRight className="w-5 h-5 transition-transform" />
                        )}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${stream.colorTheme.pill}`}
                          >
                            Stream Track 0{sIdx + 1}
                          </span>
                          <span className="text-xs text-white/50">{stream.badge}</span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-accent transition-colors">
                          {stream.title}
                        </h4>
                        <p className="text-xs text-white/60 mt-1 max-w-3xl line-clamp-2 sm:line-clamp-none">
                          {stream.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end md:self-auto flex-shrink-0">
                      <span className="text-xs font-bold text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                        {stream.branches.length} Pathways
                      </span>
                      <button
                        className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all ${
                          isExpanded
                            ? 'bg-accent/15 text-accent border border-accent/30'
                            : 'bg-white/5 text-white/80 border border-white/15 hover:bg-white/10'
                        }`}
                      >
                        {isExpanded ? 'Collapse Flow' : 'Expand Flow'}
                      </button>
                    </div>
                  </div>

                  {/* Stream Sub-Branches (Animated Flowchart Grid) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/10 p-5 sm:p-8 bg-[#15151c]/70"
                      >
                        {/* Sub-Branch Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                          {stream.branches.map((branch, bIdx) => (
                            <div
                              key={branch.id}
                              className="bg-[#1e1e28] border border-white/10 hover:border-accent/50 rounded-2xl p-5 flex flex-col justify-between transition-all hover:bg-white/[0.04] shadow-lg group hover:-translate-y-1 relative"
                            >
                              {/* Top Node Header */}
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20">
                                    Pathway {sIdx + 1}.{bIdx + 1}
                                  </span>
                                  <span className="text-xs font-semibold text-white/90 bg-white/5 px-2 py-0.5 rounded-md">
                                    {branch.salaryRange}
                                  </span>
                                </div>

                                <h5 className="font-bold text-white text-base sm:text-lg mb-2 group-hover:text-accent transition-colors leading-snug">
                                  {branch.title}
                                </h5>

                                {/* Level 2: Degree Node */}
                                <div className="mb-3 p-2.5 rounded-xl bg-black/30 border border-white/5">
                                  <span className="text-[10px] uppercase font-bold text-white/50 block mb-0.5">
                                    Target Degree / Qualification
                                  </span>
                                  <span className="text-xs font-semibold text-white/90">
                                    {branch.degree}
                                  </span>
                                </div>

                                {/* Level 3: Entrance Exams */}
                                <div className="mb-3">
                                  <span className="text-[10px] uppercase font-bold text-white/40 block mb-1.5">
                                    Mandatory Entrance Exams
                                  </span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {branch.entranceExams.map((exam, eIdx) => (
                                      <a
                                        key={eIdx}
                                        href="#exam-calendar"
                                        title={`View ${exam} Schedule in Exam Calendar`}
                                        className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-accent/10 hover:bg-accent hover:text-primary text-accent border border-accent/25 transition-all cursor-pointer inline-flex items-center gap-1"
                                      >
                                        <span>{exam}</span>
                                        <ArrowRight className="w-2.5 h-2.5" />
                                      </a>
                                    ))}
                                  </div>
                                </div>

                                {/* Level 4: Immediate Career Roles */}
                                <div className="mb-3">
                                  <span className="text-[10px] uppercase font-bold text-white/40 block mb-1">
                                    Key Career Roles
                                  </span>
                                  <p className="text-xs text-white/80 leading-relaxed font-medium">
                                    {branch.outcomes}
                                  </p>
                                </div>

                                {/* Level 5: Next Stage / Master's / PG Trajectory */}
                                <div className="mb-4 pt-2.5 border-t border-white/5">
                                  <span className="text-[10px] uppercase font-bold text-accent/80 block mb-1">
                                    Higher Studies &amp; Next Stage
                                  </span>
                                  <p className="text-xs text-white/60 leading-relaxed">
                                    {branch.nextStep}
                                  </p>
                                </div>
                              </div>

                              {/* Card Action Controls */}
                              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                                <button
                                  onClick={() => onSelectCareer && onSelectCareer(branch.careerId)}
                                  className="w-full py-2 px-3 rounded-xl bg-accent hover:bg-accent-hover text-primary font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-accent/15 cursor-pointer"
                                >
                                  <span>View Detailed Syllabus &amp; Roadmap</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Quick Flowchart Summary Banner at Bottom */}
          <div className="mt-10 p-6 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span>
                All pathways map to officially recognized Indian universities (UGC, AICTE, NMC, CoA, BCI, ICAI) and global equivalency programs.
              </span>
            </div>
            <a
              href="#counselling"
              className="flex-shrink-0 px-4 py-2 rounded-xl bg-white/10 hover:bg-accent hover:text-primary text-white font-bold transition-all text-xs"
            >
              Discuss Your Target Flow with CVK Sir →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
