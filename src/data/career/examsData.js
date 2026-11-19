// National Entrance Examinations & Competitive Tests Calendar Database
export const entranceExamsData = [
  {
    id: "jee-main",
    name: "JEE Main (Joint Entrance Examination)",
    conductingBody: "National Testing Agency (NTA)",
    stream: "Science - PCM",
    level: "National (Undergraduate)",
    eligibleCourses: "B.Tech, B.E., B.Arch, B.Planning (NITs, IIITs, GFTIs & screening for JEE Advanced)",
    eligibility: "Class 12 with Physics, Mathematics & one of Chemistry/Biology/Technical Vocational with 75% aggregate.",
    examMode: "Computer Based Test (CBT)",
    frequency: "Twice a Year (Session 1: Jan/Feb, Session 2: April)",
    timeline: {
      applicationWindow: "Nov – Dec (Session 1) / Feb – March (Session 2)",
      examDate: "Late January & Early April",
      results: "February & Late April"
    },
    pattern: "75 Questions (300 Marks) across Physics, Chemistry, Mathematics with +4/-1 marking.",
    officialWebsite: "https://jeemain.nta.ac.in",
    applicationPortal: "https://jeemain.nta.ac.in",
    status: "Upcoming / Active",
    lastVerifiedAt: "November 2026",
    prepTip: "Focus intensely on NCERT for Chemistry and high-weightage topics in Physics/Math with Kota DPPs."
  },
  {
    id: "jee-advanced",
    name: "JEE Advanced",
    conductingBody: "IIT Organizing Institute (Rotational)",
    stream: "Science - PCM",
    level: "National (IIT Admission)",
    eligibleCourses: "B.Tech, B.S., Dual Degree, Integrated M.Tech across all 23 IITs",
    eligibility: "Top 2,50,000 qualified candidates in JEE Main (Paper 1), maximum 2 attempts in consecutive years.",
    examMode: "Computer Based Test (CBT) - Paper 1 & Paper 2 (Both Compulsory)",
    frequency: "Once a Year (May)",
    timeline: {
      applicationWindow: "Late April to Early May",
      examDate: "Mid-to-Late May",
      results: "June (followed by JoSAA Counselling)"
    },
    pattern: "Two papers of 3 hours each; multiple choice with multiple correct options, integer types, matrix match.",
    officialWebsite: "https://jeeadv.ac.in",
    applicationPortal: "https://jeeadv.ac.in",
    status: "Upcoming",
    lastVerifiedAt: "November 2026",
    prepTip: "Deep multi-concept problem solving; analytical derivation mastery in Physical and Organic Chemistry."
  },
  {
    id: "neet-ug",
    name: "NEET UG (National Eligibility cum Entrance Test)",
    conductingBody: "National Testing Agency (NTA)",
    stream: "Science - PCB",
    level: "National (Medical & Allied)",
    eligibleCourses: "MBBS, BDS, BAMS, BHMS, BUMS, BVSc & AH, B.Sc Nursing across India",
    eligibility: "Class 12 with Physics, Chemistry, Biology/Biotechnology, min 50% (40% SC/ST/OBC), min 17 years age.",
    examMode: "Pen & Paper (OMR Sheet based)",
    frequency: "Once a Year (First Sunday of May)",
    timeline: {
      applicationWindow: "February to March",
      examDate: "First Sunday of May",
      results: "June (followed by MCC All-India & State Counselling)"
    },
    pattern: "180 Questions out of 200 (720 Marks): Physics (45), Chemistry (45), Biology (90). +4/-1 marking.",
    officialWebsite: "https://neet.nta.nic.in",
    applicationPortal: "https://neet.nta.nic.in",
    status: "Upcoming",
    lastVerifiedAt: "November 2026",
    prepTip: "Target 180/180 in Chemistry with 100% NCERT line-by-line decoding and rapid calculation shortcuts."
  },
  {
    id: "bitsat",
    name: "BITSAT (Birla Institute of Technology and Science Aptitude Test)",
    conductingBody: "BITS Pilani",
    stream: "Science - PCM / PCB (for B.Pharm)",
    level: "Institutional Premier",
    eligibleCourses: "B.E. (Hons) and B.Pharm at BITS Pilani, Goa, and Hyderabad campuses",
    eligibility: "Min 75% aggregate in PCM/PCB with min 60% in each subject in Class 12.",
    examMode: "Computer Based Test (CBT)",
    frequency: "Twice a Year (Session 1: May, Session 2: June)",
    timeline: {
      applicationWindow: "January to April",
      examDate: "May & June",
      results: "Immediate score card display + Iteration lists in July"
    },
    pattern: "130 Questions (390 Marks) + 12 Bonus Questions: Physics, Chemistry, Math/Bio, English & Logical Reasoning.",
    officialWebsite: "https://www.bitsadmission.com",
    applicationPortal: "https://www.bitsadmission.com",
    status: "Upcoming",
    lastVerifiedAt: "November 2026",
    prepTip: "Speed and accuracy are paramount; English proficiency and logical reasoning fetch 90 crucial marks."
  },
  {
    id: "cuet-ug",
    name: "CUET UG (Common University Entrance Test)",
    conductingBody: "National Testing Agency (NTA)",
    stream: "All Streams (Science, Commerce, Arts)",
    level: "National (Central & State Universities)",
    eligibleCourses: "BA, B.Sc, B.Com, BBA, BVoc, Integrated PG across Delhi University, BHU, JNU, etc.",
    eligibility: "Passed Class 12 in relevant stream.",
    examMode: "Hybrid / CBT",
    frequency: "Once a Year (May – June)",
    timeline: {
      applicationWindow: "February to March",
      examDate: "Mid-to-Late May",
      results: "Late June or July"
    },
    pattern: "Section 1A/1B (Languages), Section 2 (Domain Subjects according to chosen course), Section 3 (General Test).",
    officialWebsite: "https://cuet.nta.nic.in",
    applicationPortal: "https://cuet.nta.nic.in",
    status: "Upcoming",
    lastVerifiedAt: "November 2026",
    prepTip: "Strictly master the Class 12 NCERT textbook syllabus; domain questions are drawn directly from NCERT."
  },
  {
    id: "clat-law",
    name: "CLAT (Common Law Admission Test)",
    conductingBody: "Consortium of National Law Universities",
    stream: "All Streams",
    level: "National (NLU Admission)",
    eligibleCourses: "5-Year Integrated BA LLB / BBA LLB across 24 National Law Universities",
    eligibility: "Class 12 with min 45% marks (40% SC/ST). No upper age limit.",
    examMode: "Offline (Pen and Paper)",
    frequency: "Once a Year (First Sunday of December)",
    timeline: {
      applicationWindow: "July to November",
      examDate: "First Sunday of December",
      results: "Late December"
    },
    pattern: "120 Comprehension-based Questions: English, Current Affairs & GK, Legal Reasoning, Logical Reasoning, Quant.",
    officialWebsite: "https://consortiumofnlus.ac.in",
    applicationPortal: "https://consortiumofnlus.ac.in",
    status: "Active / Upcoming",
    lastVerifiedAt: "November 2026",
    prepTip: "Daily editorial reading (The Hindu/Indian Express) and legal reasoning practice under strict timed conditions."
  },
  {
    id: "nda-exam",
    name: "NDA & NA Exam",
    conductingBody: "Union Public Service Commission (UPSC)",
    stream: "All Streams (Army) / PCM (Navy & Air Force)",
    level: "National (Armed Forces Commission)",
    eligibleCourses: "3-Year Tri-Service Officer Training at NDA Khadakwasla Pune",
    eligibility: "Class 12 pass or appearing, unmarried male/female, age 16.5 to 19.5 years.",
    examMode: "Offline (Pen & Paper OMR)",
    frequency: "Twice a Year (NDA-I: April, NDA-II: September)",
    timeline: {
      applicationWindow: "Dec – Jan (NDA-I) / May – June (NDA-II)",
      examDate: "April & September",
      results: "Written result followed by 5-Day SSB Interview"
    },
    pattern: "Mathematics Paper (300 Marks) + General Ability Test (GAT 600 Marks). Total 900 Marks.",
    officialWebsite: "https://upsc.gov.in",
    applicationPortal: "https://upsconline.nic.in",
    status: "Active / Upcoming",
    lastVerifiedAt: "November 2026",
    prepTip: "Strengthen 11th/12th Math fundamentals and maintain physical fitness for the 5-day SSB stage."
  },
  {
    id: "ipmat-indore",
    name: "IPMAT (Integrated Programme in Management Aptitude Test)",
    conductingBody: "IIM Indore",
    stream: "All Streams (Commerce, Science, Arts)",
    level: "National (Premier Management)",
    eligibleCourses: "5-Year Integrated BBA + MBA at IIM Indore",
    eligibility: "Class 12 with min 60% aggregate (55% for SC/ST/PwD).",
    examMode: "Computer Based Test (CBT)",
    frequency: "Once a Year (May)",
    timeline: {
      applicationWindow: "February to April",
      examDate: "Late May",
      results: "June (followed by Personal Interview)"
    },
    pattern: "Quantitative Ability (Short Answer), Quantitative Ability (MCQ), and Verbal Ability (MCQ). Total 100 Qs.",
    officialWebsite: "https://www.iimidr.ac.in",
    applicationPortal: "https://www.iimidr.ac.in",
    status: "Upcoming",
    lastVerifiedAt: "November 2026",
    prepTip: "High proficiency in higher algebra, number systems, vocabulary roots, and reading speed."
  },
  {
    id: "iat-iiser",
    name: "IAT (IISER Aptitude Test)",
    conductingBody: "IISER Joint Admissions Committee",
    stream: "Science - PCM / PCB / PCMB",
    level: "National (Pure Science & Research)",
    eligibleCourses: "5-Year BS-MS Dual Degree at 7 IISERs, IISc Bangalore, and IIT Madras (Medical Sciences)",
    eligibility: "Class 12 in Science stream with min 60% (55% reserved).",
    examMode: "Computer Based Test (CBT)",
    frequency: "Once a Year (June)",
    timeline: {
      applicationWindow: "April to May",
      examDate: "Early June",
      results: "Late June"
    },
    pattern: "60 Questions (240 Marks): 15 Questions each from Biology, Chemistry, Mathematics, Physics.",
    officialWebsite: "https://iiseradmission.in",
    applicationPortal: "https://iiseradmission.in",
    status: "Upcoming",
    lastVerifiedAt: "November 2026",
    prepTip: "Even PCM students should cover high-yield 11th/12th Biology chapters (Genetics, Cell Bio) to gain 30+ bonus marks."
  },
  {
    id: "nata-architecture",
    name: "NATA (National Aptitude Test in Architecture)",
    conductingBody: "Council of Architecture (CoA)",
    stream: "Science - PCM",
    level: "National (Architecture)",
    eligibleCourses: "5-Year B.Arch across all CoA-recognized colleges in India",
    eligibility: "Passed 10+2 with Physics, Chemistry & Mathematics, min 50% aggregate.",
    examMode: "Part CBT (Cognitive Aptitude) + Part Drawing Test",
    frequency: "Conducted multiple weekends from April to July (Best of scores taken)",
    timeline: {
      applicationWindow: "March to June",
      examDate: "Weekly phases (April – July)",
      results: "Within 7 days of exam date"
    },
    pattern: "200 Marks testing visual perception, architectural awareness, 2D/3D drawing, and spatial reasoning.",
    officialWebsite: "https://www.nata.in",
    applicationPortal: "https://www.nata.in",
    status: "Upcoming",
    lastVerifiedAt: "November 2026",
    prepTip: "Practice perspective sketching, shading, memory drawing, and architectural landmark identification."
  }
];
