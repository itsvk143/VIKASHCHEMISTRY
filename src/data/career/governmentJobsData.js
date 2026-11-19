// Government Jobs & Public Sector Competitive Examinations Database
export const governmentJobsData = [
  // ==========================================
  // AFTER CLASS 10 & CLASS 12
  // ==========================================
  {
    id: "ssc-chsl",
    name: "SSC CHSL (Combined Higher Secondary Level)",
    conductingBody: "Staff Selection Commission (SSC)",
    level: "After Class 12",
    eligibleQualification: "Class 12th Standard from a recognized Board",
    ageLimit: "18 to 27 Years (Relaxation: OBC 3 yrs, SC/ST 5 yrs)",
    posts: ["Lower Division Clerk (LDC)", "Junior Secretariat Assistant (JSA)", "Data Entry Operator (DEO)"],
    selectionProcess: "Tier-1 (Computer Based Exam) → Tier-2 (Objective + Skill / Typing Test)",
    examPattern: "Tier-1: 100 Questions (200 Marks) in 60 mins covering English, Reasoning, Quantitative Aptitude, General Awareness.",
    salaryScale: "Pay Level 2 to Level 4 (₹19,900 to ₹81,100; in-hand ~₹32,000 to ₹45,000/mo + DA + HRA)",
    officialWebsite: "https://ssc.gov.in",
    officialPortal: "https://ssc.gov.in",
    preparationTips: "Master standard arithmetic, grammar rules, and 6 months of current affairs with daily speed mock tests."
  },
  {
    id: "ssc-mts",
    name: "SSC MTS & Havaldar",
    conductingBody: "Staff Selection Commission (SSC)",
    level: "After Class 10",
    eligibleQualification: "Matriculation (10th Class Pass)",
    ageLimit: "18 to 25 / 27 Years",
    posts: ["Multi-Tasking Staff in Central Ministries", "Havaldar in CBIC & CBN"],
    selectionProcess: "Computer Based Examination (Session 1: Numerical & Reasoning [No negative marking]; Session 2: English & GA) + Physical Test for Havaldar.",
    examPattern: "Session 1: 40 Questions (120 Marks); Session 2: 50 Questions (150 Marks - Final Merit based on Session 2).",
    salaryScale: "Pay Level 1 (₹18,000 to ₹56,900; in-hand ~₹28,000 to ₹35,000/mo)",
    officialWebsite: "https://ssc.gov.in",
    officialPortal: "https://ssc.gov.in",
    preparationTips: "Session 2 determines selection: prioritize English comprehension and static general knowledge."
  },
  {
    id: "agniveer-defence",
    name: "Agnipath Scheme (Agniveer Army / Navy / Air Force)",
    conductingBody: "Indian Armed Forces (Army, Navy, Air Force)",
    level: "After Class 10 / 12",
    eligibleQualification: "10th pass for General Duty; 10+2 with PCM & English (min 50%) for Technical / Air Force Science Group.",
    ageLimit: "17.5 to 21 Years",
    posts: ["Agniveer General Duty", "Agniveer Technical", "Agniveer Clerk / Storekeeper", "Agniveer Vayu"],
    selectionProcess: "Online Common Entrance Exam (CEE) → Physical Fitness Test (1.6 km run, pull-ups) → Medical Examination.",
    examPattern: "General Awareness, Reasoning, Math, Science & English as per specific military branch.",
    salaryScale: "₹30,000/mo (Year 1) to ₹40,000/mo (Year 4) + ₹11.71 Lakh Seva Nidhi package + 25% absorbed into permanent service.",
    officialWebsite: "https://joinindianarmy.nic.in",
    officialPortal: "https://agnipathvayu.cdac.in",
    preparationTips: "Maintain rigorous daily running and physical endurance alongside basic math/science revision."
  },

  // ==========================================
  // AFTER GRADUATION
  // ==========================================
  {
    id: "upsc-cse",
    name: "UPSC Civil Services Examination (IAS / IPS / IFS / IRS)",
    conductingBody: "Union Public Service Commission (UPSC)",
    level: "After Graduation",
    eligibleQualification: "Any Bachelor's Degree from a recognized university",
    ageLimit: "21 to 32 Years (General: 6 attempts; OBC: 9 attempts up to 35 yrs; SC/ST: Unlimited up to 37 yrs)",
    posts: ["Indian Administrative Service (IAS)", "Indian Police Service (IPS)", "Indian Foreign Service (IFS)", "Indian Revenue Service (IRS)"],
    selectionProcess: "Stage 1: Prelims (GS Paper 1 + CSAT qualifying) → Stage 2: Mains (9 Descriptive Papers) → Stage 3: Personality Interview.",
    examPattern: "Mains Total: 1750 Marks + Interview 275 Marks = 2025 Marks determining final national rank.",
    salaryScale: "Pay Level 10 (Starting Basic ₹56,100 to Cabinet Secretary ₹2,50,000 + official bungalow, car, personal security)",
    officialWebsite: "https://upsc.gov.in",
    officialPortal: "https://upsconline.nic.in",
    preparationTips: "Deep conceptual foundation in NCERTs, analytical answer writing, and choosing an optional subject aligned with personal strengths."
  },
  {
    id: "ssc-cgl",
    name: "SSC CGL (Combined Graduate Level)",
    conductingBody: "Staff Selection Commission (SSC)",
    level: "After Graduation",
    eligibleQualification: "Bachelor's Degree in any discipline",
    ageLimit: "18 to 30 / 32 Years",
    posts: ["Assistant Section Officer (CSS / MEA)", "Income Tax Inspector (CBDT)", "Central Excise Inspector (CBIC)", "Enforcement Officer (ED)", "Sub-Inspector (CBI)"],
    selectionProcess: "Tier-1 (Qualifying CBT) → Tier-2 (Mathematical Abilities, Reasoning, English, General Awareness, Computer Knowledge & Data Entry).",
    examPattern: "Tier-2: 390 Marks core paper determining final merit + qualifying Computer & Typing tests.",
    salaryScale: "Pay Level 4 to Level 8 (₹25,500 to ₹1,51,100; in-hand ₹45,000 to ₹90,000/mo)",
    officialWebsite: "https://ssc.gov.in",
    officialPortal: "https://ssc.gov.in",
    preparationTips: "Quantitative aptitude speed tricks, advanced English vocabulary, and high accuracy in logical puzzles."
  },
  {
    id: "banking-ibps-sbi-po",
    name: "Bank Probationary Officer (SBI PO / IBPS PO)",
    conductingBody: "State Bank of India (SBI) & Institute of Banking Personnel Selection (IBPS)",
    level: "After Graduation",
    eligibleQualification: "Graduation in any discipline with any percentage",
    ageLimit: "20 to 30 Years",
    posts: ["Probationary Officer (Assistant Manager in Public Sector Banks)"],
    selectionProcess: "Phase-1: Prelims (English, Quant, Reasoning in 60 mins) → Phase-2: Mains (Objective + Descriptive Letter/Essay) → Phase-3: Group Discussion & Interview.",
    examPattern: "Mains: High-level Data Analysis, Reasoning Puzzles, Banking Awareness, plus 30-min descriptive test.",
    salaryScale: "Starting Basic Pay ₹48,480 (Total CTC ~₹13 to ₹18 Lakhs/annum including leased housing allowances in SBI)",
    officialWebsite: "https://ibps.in",
    officialPortal: "https://sbi.co.in/careers",
    preparationTips: "Speed arithmetic, high-level seating arrangement puzzles, and daily financial/banking awareness."
  },
  {
    id: "defence-cds",
    name: "Combined Defence Services (CDS Exam)",
    conductingBody: "Union Public Service Commission (UPSC)",
    level: "After Graduation",
    eligibleQualification: "Graduation for IMA/OTA; Engineering degree for Naval & Air Force Academy",
    ageLimit: "19 to 24 Years (IMA/INA/AFA); 19 to 25 Years (OTA)",
    posts: ["Lieutenant (Indian Army)", "Sub-Lieutenant (Indian Navy)", "Flying Officer (Indian Air Force)"],
    selectionProcess: "Written Exam (English, General Knowledge, Elementary Mathematics) → 5-Day SSB Interview → Medicals.",
    examPattern: "3 Papers (300 Marks) for IMA/INA/AFA; 2 Papers (200 Marks) for OTA (Maths omitted for OTA).",
    salaryScale: "Level 10 (₹56,100 to ₹1,77,500 + Military Service Pay ₹15,500/mo)",
    officialWebsite: "https://upsc.gov.in",
    officialPortal: "https://upsconline.nic.in",
    preparationTips: "Strong grasp of current international geopolitical affairs, English comprehension, and mental agility."
  }
];
