'use client';

import React, { useState, useMemo } from 'react';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';

/* ---------------------------------------------------------
  TOP ROW (ALWAYS VISIBLE)
--------------------------------------------------------- */
const topNodes = [
  { id: 'top10', label: 'Class 10', position: { x: 300, y: 40 },/* link: 'https://en.wikipedia.org/wiki/Secondary_education_in_India'*/ },
  { id: 'top12', label: 'Class 12', position: { x: 520, y: 40 }, /*link: 'https://en.wikipedia.org/wiki/Higher_secondary_education_in_India'*/ },
  { id: 'topGrad', label: 'Graduation', position: { x: 740, y: 40 }, /*link: 'https://en.wikipedia.org/wiki/Bachelor%27s_degree' */},
  { id: 'topPG', label: 'Post Graduation', position: { x: 960, y: 40 }, /*link: 'https://en.wikipedia.org/wiki/Postgraduate_education' */},
];
/* ---------------------------------------------------------
   CLASS 12 FLOWCHART (YOUR ORIGINAL DATA)
--------------------------------------------------------- */
const class12Nodes = [
  ...topNodes,

  { id: '0', label: 'Scholarship Exam', position: { x: 200, y: 150 }, link: 'https://en.wikipedia.org/wiki/Scholarship' },
  { id: '2', label: 'Further Studies\n(Choose a Stream)', position: { x: 600, y: 150 }, link: 'https://en.wikipedia.org/wiki/Education_in_India' },
  { id: '3', label: 'Competitive Exams\n(Direct Jobs)', position: { x: 1000, y: 150 }, link: 'https://en.wikipedia.org/wiki/Competitive_examination' },

  { id: '4', label: 'Science', position: { x: 400, y: 300 }, link: 'https://en.wikipedia.org/wiki/Science' },
  { id: '5', label: 'Commerce', position: { x: 600, y: 300 }, link: 'https://en.wikipedia.org/wiki/Commerce' },
  { id: '6', label: 'Arts / Humanities', position: { x: 800, y: 300 }, link: 'https://en.wikipedia.org/wiki/Humanities' },

  { id: '4a', label: 'Engineering', position: { x: 400, y: 375 }, link: 'https://en.wikipedia.org/wiki/Engineering' },
  { id: '4b', label: 'Medical & Healthcare', position: { x: 400, y: 425 }, link: 'https://en.wikipedia.org/wiki/Medicine' },
  { id: '4c', label: 'Architecture', position: { x: 400, y: 500 }, link: 'https://en.wikipedia.org/wiki/Architecture' },
  { id: '4d', label: 'Defence', position: { x: 400, y: 550 }, link: 'https://en.wikipedia.org/wiki/Military' },
  { id: '4e', label: 'Aviation', position: { x: 400, y: 600 }, link: 'https://en.wikipedia.org/wiki/Aviation' },

  { id: '5a', label: 'Chartered Accountancy', position: { x: 600, y: 375 }, link: 'https://en.wikipedia.org/wiki/Chartered_accountant' },
  { id: '5b', label: 'Business Management\n(IPMAT, NPAT, CUET)', position: { x: 600, y: 450 }, link: 'https://en.wikipedia.org/wiki/Business_management' },
  { id: '5c', label: 'Banking & Finance\n(IBPS PG / Clerk)', position: { x: 600, y: 525 }, link: 'https://en.wikipedia.org/wiki/Banking' },
  { id: '5d', label: 'Aviation\n(CPL Training, NDA)', position: { x: 600, y: 600 }, link: 'https://en.wikipedia.org/wiki/Commercial_pilot_license' },

  { id: '6a', label: 'Civil Services\n(UPSC)', position: { x: 800, y: 375 }, link: 'https://en.wikipedia.org/wiki/Civil_Services_Examination_(India)' },
  { id: '6b', label: 'Economics / Social Work / Law', position: { x: 800, y: 450 }, link: 'https://en.wikipedia.org/wiki/Social_work' },
  { id: '6c', label: 'Hotel Management', position: { x: 800, y: 525 }, link: 'https://en.wikipedia.org/wiki/Hospitality_management_studies' },

  { id: '7a', label: 'Defense\n(NDA, TES, SSB etc)', position: { x: 1000, y: 250 }, link: 'https://en.wikipedia.org/wiki/National_Defence_Academy_(India)' },
  { id: '7b', label: 'Govt Jobs\n(SSC CHSL, MTS, GD)', position: { x: 1000, y: 330 }, link: 'https://en.wikipedia.org/wiki/Staff_Selection_Commission' },
  { id: '7c', label: 'Banking\n(Junior Associate)', position: { x: 1000, y: 410 }, link: 'https://en.wikipedia.org/wiki/State_Bank_of_India' },
  { id: '7d', label: 'Police\n(Constable Exams)', position: { x: 1000, y: 490 }, link: 'https://en.wikipedia.org/wiki/Law_enforcement_in_India' },
  { id: '7e', label: 'Postal Services (GDS)', position: { x: 1000, y: 570 }, link: 'https://en.wikipedia.org/wiki/India_Post' },
  { id: '7f', label: 'Merchant Navy\n(IMU CET)', position: { x: 1000, y: 650 }, link: 'https://en.wikipedia.org/wiki/Merchant_navy' },
];

const class12Edges = [
  { id: 'e0-12', source: '0', target: 'top12', type: 'smoothstep' },
  { id: 'e12-2', source: 'top12', target: '2', type: 'smoothstep'},
  { id: 'e12-3', source: 'top12', target: '3', type: 'smoothstep' },

  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e2-6', source: '2', target: '6' },

  { id: 'e4-4a', source: '4', target: '4a' },
  { id: 'e4-4b', source: '4', target: '4b' },
  { id: 'e4-4c', source: '4', target: '4c' },
  { id: 'e4-4d', source: '4', target: '4d' },
  { id: 'e4-4e', source: '4', target: '4e' },

  { id: 'e5-5a', source: '5', target: '5a' },
  { id: 'e5-5b', source: '5', target: '5b' },
  { id: 'e5-5c', source: '5', target: '5c' },
  { id: 'e5-5d', source: '5', target: '5d' },

  { id: 'e6-6a', source: '6', target: '6a' },
  { id: 'e6-6b', source: '6', target: '6b' },
  { id: 'e6-6c', source: '6', target: '6c' },

  { id: 'e3-7a', source: '3', target: '7a' },
  { id: 'e3-7b', source: '3', target: '7b' },
  { id: 'e3-7c', source: '3', target: '7c' },
  { id: 'e3-7d', source: '3', target: '7d' },
  { id: 'e3-7e', source: '3', target: '7e' },
  { id: 'e3-7f', source: '3', target: '7f' },
];

/* ---------------------------------------------------------
  CLASS 10 — ULTRA-COMPLETE (Option C)
  Large tree with Streams → Substreams → Diplomas / Exams / Jobs
--------------------------------------------------------- */
const class10Nodes = [
  ...topNodes,

  // LEVEL 1 (direct under class 10)
  { id: '10-poly', label: 'Polytechnic Diploma', position: { x: 600, y: 160 }, link: 'https://en.wikipedia.org/wiki/Polytechnic_university' },
  { id: '10-stream', label: 'Choose Stream\nScience / Commerce / Arts', position: { x: 300, y: 260 }, link: 'https://en.wikipedia.org/wiki/Secondary_education_in_India' },
  { id: '10-iti', label: 'ITI Trades', position: { x: 1000, y: 160 }, link: 'https://en.wikipedia.org/wiki/Industrial_training_institute' },
  { id: '10-short', label: 'Short-term Certifications\n(Coding, Digital Marketing)', position: { x: 40, y: 160 }, link: 'https://en.wikipedia.org/wiki/Online_learning' },

  // LEVEL 2 — STREAMS
  { id: '10-sci', label: 'Science (PCM / PCB / PCMB)', position: { x: 300, y: 450 }, link: 'https://en.wikipedia.org/wiki/Science_education' },
  { id: '10-com', label: 'Commerce', position: { x: 920, y: 450 }, link: 'https://en.wikipedia.org/wiki/Commerce' },
  { id: '10-art', label: 'Arts / Humanities', position: { x: -350, y: 450 }, link: 'https://en.wikipedia.org/wiki/Humanities' },

  // LEVEL 3 — SCIENCE SUBOPTIONS
  { id: '10-sci-pcm', label: '(PCM)  \nEngineering \nDiplomas', position: { x: 300, y: 650 }, link: 'https://en.wikipedia.org/wiki/Mechanical_engineering' },
  { id: '10-sci-pcb', label: '(PCB) \nMedical \nParamedical \nDiplomas', position: { x: 550, y: 650 }, link: 'https://en.wikipedia.org/wiki/Paramedicine' },
  { id: '10-sci-pcmb', label: '(PCMB) \nFlexible Career Paths', position: { x: 50, y: 650 }, link: 'https://en.wikipedia.org/wiki/Education' },

  // LEVEL 3 — COMMERCE SUBOPTIONS
  { id: '10-com-acc', label: 'Accounts / Tally / Bookkeeping', position: { x: 720, y: 530 }, link: 'https://en.wikipedia.org/wiki/Accounting' },
  { id: '10-com-biz', label: 'Business / Entrepreneurship', position: { x: 920, y: 530 }, link: 'https://en.wikipedia.org/wiki/Entrepreneurship' },
  { id: '10-com-bank', label: 'Banking Assistant Courses', position: { x: 1120, y: 530 }, link: 'https://en.wikipedia.org/wiki/Bank' },

  // LEVEL 3 — ARTS SUBOPTIONS
  { id: '10-art-fine', label: 'Fine Arts & Design', position: { x: -150, y: 550 }, link: 'https://en.wikipedia.org/wiki/Fine_art' },
  { id: '10-art-tour', label: 'Tourism / Travel / Hospitality', position: { x: -350, y: 550 }, link: 'https://en.wikipedia.org/wiki/Tourism' },
  { id: '10-art-del', label: 'D.El.Ed (Teacher Training)', position: { x: -550, y: 550 }, link: 'https://en.wikipedia.org/wiki/Teacher_training' },

  // ITI Options
  { id: '10-iti-welder', label: 'ITI: Welder', position: { x: 1200, y: 240 }, link: 'https://en.wikipedia.org/wiki/Welding' },
  { id: '10-iti-fitter', label: 'ITI: Fitter', position: { x: 1000, y: 240 }, link: 'https://en.wikipedia.org/wiki/Fitting_(metalworking)' },
  { id: '10-iti-elec', label: 'ITI: Electrician', position: { x: 800, y: 240 }, link: 'https://en.wikipedia.org/wiki/Electrician' },

  // LEVEL 4 — CAREER PATHS
  { id: '10-app', label: 'Apprenticeship / Trade Jobs', position: { x: 300, y: 830 }, link: 'https://en.wikipedia.org/wiki/Apprenticeship' },
  { id: '10-govt', label: 'Govt Jobs (Clerks, Assistants)', position: { x: 920, y: 760 }, link: 'https://en.wikipedia.org/wiki/Civil_service' },
  { id: '10-def', label: 'NDA / Defence Pathways', position: { x: 800, y: 300 }, link: 'https://en.wikipedia.org/wiki/National_Defence_Academy_(India)' },

  // FINAL OPTION
  { id: '10-back12', label: 'Return to Class 12 (after ITI/Diploma)', position: { x: 300, y: 950 }, link: 'https://en.wikipedia.org/wiki/Higher_secondary_education_in_India' },
];

const class10Edges = [
  { id: 'e10a', source: 'top10', target: '10-poly', type: 'smoothstep' },
  { id: 'e10b', source: 'top10', target: '10-stream', type: 'smoothstep' },
  { id: 'e10c', source: 'top10', target: '10-iti', type: 'smoothstep' },
  { id: 'e10d', source: 'top10', target: '10-short', type: 'smoothstep' },

  { id: 'e10-stream-sci', source: '10-stream', target: '10-sci', type: 'smoothstep' },
  { id: 'e10-stream-com', source: '10-stream', target: '10-com', type: 'smoothstep' },
  { id: 'e10-stream-art', source: '10-stream', target: '10-art', type: 'smoothstep' },

  // SCIENCE
  { id: 'e10-sci-pcm', source: '10-sci', target: '10-sci-pcm', type: 'smoothstep' },
  { id: 'e10-sci-pcb', source: '10-sci', target: '10-sci-pcb', type: 'smoothstep' },
  { id: 'e10-sci-pcmb', source: '10-sci', target: '10-sci-pcmb', type: 'smoothstep' },

  // COMMERCE
  { id: 'e10-com-acc', source: '10-com', target: '10-com-acc', type: 'smoothstep' },
  { id: 'e10-com-biz', source: '10-com', target: '10-com-biz', type: 'smoothstep' },
  { id: 'e10-com-bank', source: '10-com', target: '10-com-bank', type: 'smoothstep' },

  // ARTS
  { id: 'e10-art-fine', source: '10-art', target: '10-art-fine', type: 'smoothstep' },
  { id: 'e10-art-tour', source: '10-art', target: '10-art-tour', type: 'smoothstep' },
  { id: 'e10-art-del', source: '10-art', target: '10-art-del', type: 'smoothstep' },

  // ITI
  { id: 'e10-iti-welder', source: '10-iti', target: '10-iti-welder', type: 'smoothstep' },
  { id: 'e10-iti-fitter', source: '10-iti', target: '10-iti-fitter', type: 'smoothstep' },
  { id: 'e10-iti-elec', source: '10-iti', target: '10-iti-elec', type: 'smoothstep' },

  // CAREER PATHS
  { id: 'e10-app', source: '10-sci-pcm', target: '10-app', type: 'smoothstep' },
  { id: 'e10-govt', source: '10-com-bank', target: '10-govt', type: 'smoothstep' },
  { id: 'e10-def', source: '10-iti-elec', target: '10-def', type: 'smoothstep' },

  // RETURN PATH
  { id: 'e10-back', source: '10-app', target: '10-back12', type: 'smoothstep' },
];

/* ---------------------------------------------------------
  GRADUATION — DETAILED (Option 2)
  B.Tech / B.Sc / B.Com / BA / BBA / BCA / MBBS / Professional etc.
--------------------------------------------------------- */
const gradNodes = [
  ...topNodes,

  // Top-level graduation options
  { id: 'g-btech', label: 'B.Tech / BE', position: { x: 240, y: 160 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Engineering' },
  { id: 'g-bsc', label: 'B.Sc (Science)', position: { x: 420, y: 160 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Science' },
  { id: 'g-bcom', label: 'B.Com (Commerce)', position: { x: 600, y: 160 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Commerce' },
  { id: 'g-ba', label: 'BA (Arts)', position: { x: 780, y: 160 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Arts' },
  { id: 'g-bba', label: 'BBA / Management', position: { x: 960, y: 160 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Business_Administration' },
  { id: 'g-mbbs', label: 'MBBS / Medical', position: { x: 1140, y: 160 }, link: 'https://en.wikipedia.org/wiki/Medical_school' },

  // B.Tech branches / pathways
  { id: 'g-btech-branches', label: 'Branches (CSE / ECE / Civil / Mech / Aero)', position: { x: 240, y: 240 }, link: 'https://en.wikipedia.org/wiki/Computer_science' },
  { id: 'g-btech-psu', label: 'PSU/GATE/Jobs', position: { x: 240, y: 320 }, link: 'https://en.wikipedia.org/wiki/GATE_(exam)' },

  // B.Sc branches
  { id: 'g-bsc-phy', label: 'B.Sc Physics / Chemistry / Maths', position: { x: 420, y: 240 }, link: 'https://en.wikipedia.org/wiki/Physics' },
  { id: 'g-bsc-bio', label: 'B.Sc Biology / Microbiology / Biotech', position: { x: 420, y: 320 }, link: 'https://en.wikipedia.org/wiki/Biology' },

  // B.Com & professional
  { id: 'g-bcom-ca', label: 'B.Com → CA / CMA / CS paths', position: { x: 600, y: 240 }, link: 'https://en.wikipedia.org/wiki/Chartered_accountant' },
  { id: 'g-bcom-mba', label: 'B.Com → MBA / Finance', position: { x: 600, y: 320 }, link: 'https://en.wikipedia.org/wiki/Master_of_Business_Administration' },

  // BA pathways
  { id: 'g-ba-psu', label: 'BA → Civil Services / Law / Social Work', position: { x: 780, y: 240 }, link: 'https://en.wikipedia.org/wiki/Civil_services' },

  // BBA / BCA
  { id: 'g-bba-career', label: 'BBA → MBA / Corporate Roles', position: { x: 960, y: 240 }, link: 'https://en.wikipedia.org/wiki/Business_administration' },

  // Medical professional path
  { id: 'g-mbbs-res', label: 'MBBS → MD / MS / Residency / Clinical Jobs', position: { x: 1140, y: 240 }, link: 'https://en.wikipedia.org/wiki/Residency_(medicine)' },

  // Common grad-level competitive exams
  { id: 'g-aptitude', label: 'Entrance Exams (CAT / GATE / NEET / CLAT / UGC-NET)', position: { x: 600, y: 420 }, link: 'https://en.wikipedia.org/wiki/Competitive_examination' },

  // Jobs and industry
  { id: 'g-job-it', label: 'IT / Product / R&D Jobs', position: { x: 420, y: 520 }, link: 'https://en.wikipedia.org/wiki/Information_technology' },
  { id: 'g-job-psu', label: 'PSU / Government Jobs', position: { x: 720, y: 520 }, link: 'https://en.wikipedia.org/wiki/Public_sector_undertaking' },
];

const gradEdges = [
  // top -> grads
  { id: 'e-topGrad-btech', source: 'topGrad', target: 'g-btech' },
  { id: 'e-topGrad-bsc', source: 'topGrad', target: 'g-bsc' },
  { id: 'e-topGrad-bcom', source: 'topGrad', target: 'g-bcom' },
  { id: 'e-topGrad-ba', source: 'topGrad', target: 'g-ba' },
  { id: 'e-topGrad-bba', source: 'topGrad', target: 'g-bba' },
  { id: 'e-topGrad-mbbs', source: 'topGrad', target: 'g-mbbs' },

  // flows
  { id: 'e-btech-branches', source: 'g-btech', target: 'g-btech-branches' },
  { id: 'e-btech-psu', source: 'g-btech-branches', target: 'g-btech-psu' },

  { id: 'e-bsc-phy', source: 'g-bsc', target: 'g-bsc-phy' },
  { id: 'e-bsc-bio', source: 'g-bsc', target: 'g-bsc-bio' },

  { id: 'e-bcom-ca', source: 'g-bcom', target: 'g-bcom-ca' },
  { id: 'e-bcom-mba', source: 'g-bcom', target: 'g-bcom-mba' },

  { id: 'e-ba-psu', source: 'g-ba', target: 'g-ba-psu' },

  { id: 'e-bba-career', source: 'g-bba', target: 'g-bba-career' },

  { id: 'e-mbbs-res', source: 'g-mbbs', target: 'g-mbbs-res' },

  // to common exams & jobs
  { id: 'e-to-aptitude', source: 'g-btech', target: 'g-aptitude' },
  { id: 'e-to-aptitude-2', source: 'g-bcom', target: 'g-aptitude' },
  { id: 'e-to-jobs-it', source: 'g-btech-psu', target: 'g-job-it' },
  { id: 'e-to-jobs-psu', source: 'g-btech-psu', target: 'g-job-psu' },
];

/* ---------------------------------------------------------
  POST-GRADUATION — DETAILED (Option Y)
  M.Tech / M.Sc / MBA / PhD / M.Phil / NET / SET / Research / Industry
--------------------------------------------------------- */
const pgNodes = [
  ...topNodes,

  // top PG options
  { id: 'pg-mtech', label: 'M.Tech / M.E', position: { x: 240, y: 160 }, link: 'https://en.wikipedia.org/wiki/Master_of_Engineering' },
  { id: 'pg-msc', label: 'M.Sc (Science)', position: { x: 420, y: 160 }, link: 'https://en.wikipedia.org/wiki/Master_of_Science' },
  { id: 'pg-mcom', label: 'M.Com', position: { x: 600, y: 160 }, link: 'https://en.wikipedia.org/wiki/Master_of_Commerce' },
  { id: 'pg-mba', label: 'MBA / PGDM', position: { x: 780, y: 160 }, link: 'https://en.wikipedia.org/wiki/Master_of_Business_Administration' },
  { id: 'pg-mphil', label: 'M.Phil', position: { x: 960, y: 160 }, link: 'https://en.wikipedia.org/wiki/MPhil' },
  { id: 'pg-phd', label: 'PhD / Doctoral Research', position: { x: 1140, y: 160 }, link: 'https://en.wikipedia.org/wiki/Doctor_of_Philosophy' },

  // PG specializations
  { id: 'pg-mtech-areas', label: 'M.Tech Areas (CSE/ECE/Mech/Civil)', position: { x: 240, y: 240 }, link: 'https://en.wikipedia.org/wiki/Computer_science' },
  { id: 'pg-msc-areas', label: 'M.Sc Areas (Physics/Chem/Bio/Maths)', position: { x: 420, y: 240 }, link: 'https://en.wikipedia.org/wiki/Physics' },
  { id: 'pg-mba-career', label: 'MBA → Management / Consulting / Ops', position: { x: 780, y: 240 }, link: 'https://en.wikipedia.org/wiki/Management_consulting' },

  // Academic career & NET/SET
  { id: 'pg-net', label: 'UGC-NET / SET → Assistant Professor', position: { x: 960, y: 240 }, link: 'https://en.wikipedia.org/wiki/UGC_NET' },
  { id: 'pg-phd-career', label: 'PhD → Research / Faculty / R&D', position: { x: 1140, y: 240 }, link: 'https://en.wikipedia.org/wiki/Academic_research' },

  // Industry & certifications
  { id: 'pg-industry', label: 'Industry Roles (Sr Engineer, Lead, Manager)', position: { x: 420, y: 360 }, link: 'https://en.wikipedia.org/wiki/Industry' },
  { id: 'pg-research-fellow', label: 'Research Fellowships / Postdoc', position: { x: 1140, y: 320 }, link: 'https://en.wikipedia.org/wiki/Postdoctoral_research' },
  { id: 'pg-prof-cert', label: 'Professional Certifications (PMP, Data, Cloud)', position: { x: 780, y: 360 }, link: 'https://en.wikipedia.org/wiki/Professional_certification' },

  // Government / Senior roles
  { id: 'pg-govt', label: 'Higher-level Govt Jobs / PSUs / Specialist roles', position: { x: 600, y: 480 }, link: 'https://en.wikipedia.org/wiki/Public_sector_undertaking' },
];

const pgEdges = [
  // top -> pg types
  { id: 'e-top-pg-mtech', source: 'topPG', target: 'pg-mtech' },
  { id: 'e-top-pg-msc', source: 'topPG', target: 'pg-msc' },
  { id: 'e-top-pg-mcom', source: 'topPG', target: 'pg-mcom' },
  { id: 'e-top-pg-mba', source: 'topPG', target: 'pg-mba' },
  { id: 'e-top-pg-mphil', source: 'topPG', target: 'pg-mphil' },
  { id: 'e-top-pg-phd', source: 'topPG', target: 'pg-phd' },

  // flows to career / research / NET
  { id: 'e-mtech-areas', source: 'pg-mtech', target: 'pg-mtech-areas' },
  { id: 'e-msc-areas', source: 'pg-msc', target: 'pg-msc-areas' },
  { id: 'e-mba-career', source: 'pg-mba', target: 'pg-mba-career' },

  { id: 'e-phd-career', source: 'pg-phd', target: 'pg-phd-career' },
  { id: 'e-net', source: 'pg-mphil', target: 'pg-net' },

  { id: 'e-industry', source: 'pg-mtech-areas', target: 'pg-industry' },
  { id: 'e-prof-cert', source: 'pg-mba', target: 'pg-prof-cert' },

  { id: 'e-research-fellow', source: 'pg-phd-career', target: 'pg-research-fellow' },

  { id: 'e-govt', source: 'pg-mcom', target: 'pg-govt' },
];

/* ---------------------------------------------------------
  UTILS: create styled node objects for ReactFlow
--------------------------------------------------------- */
function makeNode(node, setModeIfTop) {
  const isTop = node.id.startsWith('top');
  return {
    id: node.id,
    position: node.position,
    data: {
      label: (
        <div
          onClick={(e) => {
            // Allow links to open; also toggle when clicking top nodes area
            if (isTop) {
              // clicking anywhere inside triggers toggle (link still works since <a> is nested)
              setModeIfTop(node.id);
            }
            // stop event not necessary — <a> will open in new tab
          }}
        >
          {node.link ? (
            <a
              href={node.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#004080', fontWeight: 600 }}
            >
              {node.label}
            </a>
          ) : (
            <div style={{ color: '#004080', fontWeight: 600 }}>{node.label}</div>
          )}
        </div>
      ),
    },
    style: {
      background: '#f0f8ff',
      padding: 10,
      borderRadius: 6,
      border: '1px solid #007bff',
      textAlign: 'center',
      whiteSpace: 'pre-wrap',
      minWidth: 160,
    },
  };
}

/* ---------------------------------------------------------
  MAIN COMPONENT
--------------------------------------------------------- */
const Carrier = () => {
  const [mode, setMode] = useState('class12'); // default view

  // choose active dataset
  const activeNodes = useMemo(() => {
    if (mode === 'class10') return class10Nodes;
    if (mode === 'class12') return class12Nodes;
    if (mode === 'graduation') return gradNodes;
    if (mode === 'postgrad') return pgNodes;
    return class12Nodes;
  }, [mode]);

  const activeEdges = useMemo(() => {
    if (mode === 'class10') return class10Edges;
    if (mode === 'class12') return class12Edges;
    if (mode === 'graduation') return gradEdges;
    if (mode === 'postgrad') return pgEdges;
    return class12Edges;
  }, [mode]);

  // map nodes through maker
  const nodes = useMemo(
    () =>
      activeNodes.map((n) =>
        makeNode(n, (topId) => {
          // when clicking top node, toggle mode
          if (topId === 'top10') setMode('class10');
          if (topId === 'top12') setMode('class12');
          if (topId === 'topGrad') setMode('graduation');
          if (topId === 'topPG') setMode('postgrad');
        })
      ),
    [activeNodes]
  );

  return (
    <div style={{ height: '92vh', width: '100%', padding: '12px' }}>
      <h2
        style={{
          textAlign: 'center',
          fontFamily: 'monospace',
          color: '#FFFF00',
          fontSize: '22px',
          marginBottom: '12px',
        }}
      >
        {mode === 'class10'
          ? 'Career Flowchart After Class 10'
          : mode === 'class12'
          ? 'Career Flowchart After Class 12'
          : mode === 'graduation'
          ? 'Career Flowchart After Graduation'
          : 'Career Flowchart After Post Graduation'}
      </h2>

      <ReactFlow nodes={nodes} edges={activeEdges} fitView>
        <Background gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Carrier;
