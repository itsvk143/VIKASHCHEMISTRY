// Comprehensive Career Database for CVK Sir Career Portal
export const careersData = [
  // ==========================================
  // SCIENCE - PCM (ENGINEERING & TECH)
  // ==========================================
  {
    id: "cse-aiml",
    title: "Computer Science & AI / Data Science",
    stream: "Science - PCM",
    category: "Engineering & Technology",
    academicLevel: "Class 12 / Graduation",
    tagline: "Drive software innovation, intelligent algorithms, and digital infrastructure.",
    description: "Computer Science Engineering with specializations in Artificial Intelligence, Machine Learning, and Data Science focuses on algorithms, software architecture, neural networks, and scalable computing systems.",
    whatProfessionalsDo: "Design machine learning models, build web/mobile enterprise applications, optimize cloud databases, ensure cyber security, and solve complex analytical problems using code.",
    requiredSubjects: "Physics, Mathematics, Chemistry (or Computer Science / IT)",
    eligibility: "Minimum 75% in Class 12 (for IITs/NITs) or 50–60% for state/private universities.",
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "MET", "WBJEE"],
    courses: ["B.Tech / B.E. in Computer Science", "B.Tech in AI & Data Science", "Integrated M.Tech", "B.Sc Computer Science / Data Analytics"],
    duration: "4 Years (B.Tech) / 3 Years (B.Sc)",
    topColleges: ["IIT Bombay", "IIT Delhi", "IIT Madras", "BITS Pilani", "NIT Trichy", "IIIT Hyderabad"],
    careerOptions: ["Software Development Engineer", "AI/ML Engineer", "Data Scientist", "Cloud Architect", "Full Stack Developer"],
    skills: ["Data Structures & Algorithms", "Python / C++ / Java", "Machine Learning Frameworks", "System Design"],
    salaryRange: "₹8 LPA – ₹35+ LPA (Starting) to ₹50+ LPA (Senior)",
    growthOutlook: "Extremely High (Expected 25%+ annual growth)",
    officialLinks: [
      { name: "JEE Main Portal", url: "https://jeemain.nta.ac.in" },
      { name: "JEE Advanced", url: "https://jeeadv.ac.in" },
    ],
    faqs: [
      {
        q: "Do I need coding background before joining B.Tech CSE?",
        a: "No prior coding experience is mandatory. Colleges start programming from fundamental concepts in semester 1."
      },
      {
        q: "What is the difference between Core CSE and CSE with AI/ML?",
        a: "Core CSE covers general computing systems and theory, while AI/ML replaces some general electives with neural networks, NLP, and deep learning."
      }
    ]
  },
  {
    id: "mechanical-robotics",
    title: "Mechanical & Robotics Engineering",
    stream: "Science - PCM",
    category: "Engineering & Technology",
    academicLevel: "Class 12 / Graduation",
    tagline: "Design electric vehicles, industrial robots, and aerospace mechanisms.",
    description: "Mechanical & Robotics Engineering combines thermodynamics, kinematics, materials science, and automated control systems to design modern machines, EV powertrains, and autonomous drones.",
    whatProfessionalsDo: "Simulate aerodynamic structures in CAD/CAM, program automated robotic arms, design high-efficiency EV battery packs, and maintain manufacturing plants.",
    requiredSubjects: "Physics, Chemistry, Mathematics",
    eligibility: "Minimum 60–75% in 10+2 with PCM.",
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "SRMJEEE", "MHT CET"],
    courses: ["B.Tech Mechanical Engineering", "B.Tech Robotics & Automation", "B.Tech Mechatronics"],
    duration: "4 Years",
    topColleges: ["IIT Madras", "IIT Kharagpur", "IIT Roorkee", "BITS Pilani", "NIT Surathkal"],
    careerOptions: ["Robotics Engineer", "EV Powertrain Engineer", "Thermal Design Engineer", "Automation Specialist", "Defence Scientist (DRDO)"],
    skills: ["CAD/SolidWorks", "MATLAB & Simulink", "PLC Programming", "Finite Element Analysis"],
    salaryRange: "₹6 LPA – ₹18 LPA (Starting) to ₹25+ LPA (Senior)",
    growthOutlook: "High with electric mobility and automation",
    officialLinks: [
      { name: "DRDO Careers", url: "https://drdo.gov.in" },
      { name: "AICTE Portal", url: "https://www.aicte-india.org" },
    ],
    faqs: [
      {
        q: "Is Mechanical Engineering still in high demand?",
        a: "Yes, especially with the EV revolution, aerospace expansion, and industrial robotics requiring mechanical engineers skilled in mechatronics."
      }
    ]
  },
  {
    id: "ece-semiconductor",
    title: "Electronics & Communication (ECE) / VLSI",
    stream: "Science - PCM",
    category: "Engineering & Technology",
    academicLevel: "Class 12 / Graduation",
    tagline: "Architect semiconductor chips, 5G/6G communication, and embedded systems.",
    description: "ECE bridges hardware and software. With India's semiconductor mission, VLSI chip design, embedded IoT devices, and wireless communications are among the fastest-growing engineering domains.",
    whatProfessionalsDo: "Design microchips, write embedded firmware, develop signal processing algorithms for radars/satellites, and optimize RF antenna systems.",
    requiredSubjects: "Physics, Chemistry, Mathematics",
    eligibility: "10+2 with PCM with 60–75% aggregate.",
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "MET", "OJEE"],
    courses: ["B.Tech ECE", "B.Tech VLSI Design & Technology", "B.Tech Embedded Systems"],
    duration: "4 Years",
    topColleges: ["IIT Delhi", "IIT Roorkee", "IIT Guwahati", "NIT Trichy", "IIIT Delhi"],
    careerOptions: ["VLSI Design Engineer", "Embedded Firmware Engineer", "RF & Microwave Engineer", "Telecom Specialist", "Hardware Architect"],
    skills: ["Verilog/VHDL", "Digital Electronics", "C/Embedded C", "Circuit Simulation (Cadence/Spice)"],
    salaryRange: "₹7 LPA – ₹24 LPA (Starting) to ₹40+ LPA (Senior)",
    growthOutlook: "Very High due to national semiconductor fab initiatives",
    officialLinks: [
      { name: "India Semiconductor Mission", url: "https://ism.gov.in" }
    ],
    faqs: [
      {
        q: "Can ECE graduates work in both IT software and core electronics?",
        a: "Yes. ECE graduates have maximum flexibility to work in top semiconductor firms (Intel, Qualcomm) as well as software giants."
      }
    ]
  },
  {
    id: "aerospace-aero",
    title: "Aerospace & Aeronautical Engineering",
    stream: "Science - PCM",
    category: "Engineering & Technology",
    academicLevel: "Class 12 / Graduation",
    tagline: "Pioneer space exploration, satellite launchers, and advanced aviation.",
    description: "Aerospace engineering deals with the design, testing, and production of aircraft, space launch vehicles, satellites, missiles, and unmanned aerial systems (UAVs).",
    whatProfessionalsDo: "Analyze rocket aerodynamics, design propulsion engines, model orbital trajectories for satellites, and conduct structural stress testing.",
    requiredSubjects: "Physics, Chemistry, Mathematics",
    eligibility: "Class 12 with PCM, 75% for IIT/IIST admissions.",
    entranceExams: ["JEE Advanced (for IIST & IITs)", "JEE Main", "BITSAT"],
    courses: ["B.Tech Aerospace Engineering", "B.Tech Avionics (IIST)", "Dual Degree Aerospace"],
    duration: "4 Years",
    topColleges: ["IIST Thiruvananthapuram (Direct ISRO pipeline)", "IIT Bombay", "IIT Madras", "IIT Kanpur"],
    careerOptions: ["ISRO Space Scientist", "Aerospace Design Engineer", "Propulsion Engineer", "Avionics Specialist"],
    skills: ["Aerodynamics & CFD", "Propulsion Systems", "Orbital Mechanics", "Flight Simulation"],
    salaryRange: "₹7 LPA – ₹16 LPA (Starting) to ₹30+ LPA",
    growthOutlook: "High with private space sector (Skyroot, Agnikul) and ISRO",
    officialLinks: [
      { name: "IIST Admissions", url: "https://www.iist.ac.in" },
      { name: "ISRO Careers", url: "https://www.isro.gov.in" },
    ],
    faqs: [
      {
        q: "How to get into ISRO directly after 12th?",
        a: "Joining IIST (Indian Institute of Space Science and Technology) via JEE Advanced is the most direct pathway to ISRO scientist positions."
      }
    ]
  },
  {
    id: "architecture-planning",
    title: "Architecture (B.Arch) & Urban Planning",
    stream: "Science - PCM",
    category: "Architecture & Design",
    academicLevel: "Class 12 / Graduation",
    tagline: "Blend artistic aesthetics with engineering to design sustainable cities.",
    description: "Architecture combines structural engineering, sustainable green design, urban aesthetics, and building physics to create residential, commercial, and civic spaces.",
    whatProfessionalsDo: "Draft architectural blueprints, 3D model smart city infrastructure, specify sustainable materials, and lead construction projects.",
    requiredSubjects: "Physics, Chemistry, Mathematics",
    eligibility: "50% aggregate in 10+2 with Physics, Chemistry & Math + NATA/JEE Paper 2 qualification.",
    entranceExams: ["NATA (National Aptitude Test in Architecture)", "JEE Main Paper 2", "AAT (Architecture Aptitude Test for IITs)"],
    courses: ["B.Arch (Bachelor of Architecture)", "B.Planning (Urban Planning)"],
    duration: "5 Years (B.Arch) / 4 Years (B.Planning)",
    topColleges: ["IIT Roorkee (Dept of Arch)", "IIT Kharagpur", "SPA New Delhi", "CEPT University Ahmedabad", "SPA Bhopal"],
    careerOptions: ["Licensed Architect", "Urban Planner", "Interior Architect", "Landscape Architect", "BIM Specialist"],
    skills: ["Architectural Drawing", "Revit & AutoCAD", "Sustainable Design", "Building By-laws"],
    salaryRange: "₹4.5 LPA – ₹12 LPA (Starting) to ₹25+ LPA / Independent Practice",
    growthOutlook: "High with smart cities and infrastructure expansion",
    officialLinks: [
      { name: "Council of Architecture (CoA)", url: "https://www.coa.gov.in" },
      { name: "NATA Official Portal", url: "https://www.nata.in" },
    ],
    faqs: [
      {
        q: "Is NATA drawing compulsory?",
        a: "Yes, NATA and JEE Main Paper 2 evaluate aesthetic sensitivity, architectural drawing, and spatial reasoning."
      }
    ]
  },
  {
    id: "defence-nda",
    title: "National Defence Academy (NDA) / Armed Forces",
    stream: "Science - PCM",
    category: "Defence & Armed Forces",
    academicLevel: "Class 12",
    tagline: "Serve the nation as a commissioned officer in the Army, Navy, or Air Force.",
    description: "The National Defence Academy (NDA) is the premier tri-service academy training officers for the Indian Army, Indian Navy, and Indian Air Force directly after Class 12.",
    whatProfessionalsDo: "Lead combat units, pilot supersonic fighter jets, navigate naval warships, manage tactical communication networks, and protect sovereign borders.",
    requiredSubjects: "PCM required for Air Force & Navy; any stream for Army.",
    eligibility: "Unmarried male & female candidates aged 16.5 to 19.5 years with Class 12 passing.",
    entranceExams: ["UPSC NDA & NA Exam (Conducted twice a year)", "SSB Interview (5-Day selection process)", "Medical Examination"],
    courses: ["NDA 3-Year Training (B.Sc/B.Tech degree awarded by JNU) + 1-Year IMA/AFA/INA"],
    duration: "3 Years NDA + 1 Year Service Academy",
    topColleges: ["National Defence Academy, Khadakwasla, Pune", "Indian Military Academy (IMA), Dehradun", "Air Force Academy (AFA), Dundigal", "Indian Naval Academy (INA), Ezhimala"],
    careerOptions: ["Lieutenant (Army)", "Sub-Lieutenant (Navy)", "Flying Officer (Air Force)"],
    skills: ["Leadership & Decisiveness", "Physical Fitness", "Tactical Thinking", "Team Dynamics"],
    salaryRange: "₹56,100/mo (Basic Pay at Commissioning + Military Service Pay + Allowances ≈ ₹1.2–1.5 Lakhs/mo)",
    growthOutlook: "Prestigious lifetime career with guaranteed progression up to General / Admiral / Air Chief Marshal",
    officialLinks: [
      { name: "UPSC Official Portal", url: "https://upsc.gov.in" },
      { name: "Join Indian Army", url: "https://joinindianarmy.nic.in" },
    ],
    faqs: [
      {
        q: "Can female candidates apply for NDA?",
        a: "Yes! Since 2021, female candidates are fully eligible and undergo equal training at NDA Pune."
      }
    ]
  },
  {
    id: "pure-science-research",
    title: "Pure Science & Research (IISER / NISER)",
    stream: "Science - PCM / PCB",
    category: "Pure Science & Scientific Research",
    academicLevel: "Class 12 / Graduation",
    tagline: "Discover fundamental laws of physics, chemical syntheses, and planetary science.",
    description: "Pure science research programmes at premier autonomous scientific institutes (IISERs, NISER, IISc) prepare students for breakthrough research, Nobel-tier science, and global scientific leadership.",
    whatProfessionalsDo: "Conduct lab experiments in quantum computing, synthesize novel pharmacological molecules, explore dark matter astrophysics, and publish research papers.",
    requiredSubjects: "Physics, Chemistry, Mathematics and/or Biology",
    eligibility: "10+2 with minimum 60% aggregate.",
    entranceExams: ["IAT (IISER Aptitude Test)", "NEST (for NISER Bhubaneswar & CEBS Mumbai)", "JEE Advanced (for IISc Bangalore)"],
    courses: ["5-Year BS-MS Dual Degree", "4-Year Bachelor of Science (Research) at IISc"],
    duration: "5 Years (BS-MS)",
    topColleges: ["IISc Bangalore", "IISER Pune", "IISER Kolkata", "NISER Bhubaneswar", "IISER Mohali", "IISER Bhopal"],
    careerOptions: ["Research Scientist (BARC, ISRO, TIFR)", "Professor / Academician", "Industrial R&D Lead", "Data Scientist", "Biotech Researcher"],
    skills: ["Scientific Rigour", "Advanced Calculus & Statistics", "Laboratory Instrumentation", "Critical Reasoning"],
    salaryRange: "Fellowships during Ph.D. ($25k–$40k abroad / ₹37k–₹42k/mo in India) → ₹10 LPA – ₹25+ LPA (Scientist Post)",
    growthOutlook: "Steady global demand across quantum, battery chemistry, and biotech industries",
    officialLinks: [
      { name: "IISER Admissions", url: "https://iiseradmission.in" },
      { name: "NEST Exam Portal", url: "https://www.nestexam.in" },
    ],
    faqs: [
      {
        q: "Do students get scholarships in BS-MS?",
        a: "Eligible students receive DST-INSPIRE or institute fellowships (₹5,000 to ₹7,000 monthly) subject to academic guidelines."
      }
    ]
  },
  {
    id: "aviation-pilot",
    title: "Commercial Pilot & Aviation",
    stream: "Science - PCM",
    category: "Aviation & Aerospace",
    academicLevel: "Class 12",
    tagline: "Fly commercial airliners across domestic and international skies.",
    description: "Commercial Pilot training equips candidates with flight aerodynamics, meteorology, air navigation, air regulations, and 200+ flying hours to obtain a Commercial Pilot License (CPL).",
    whatProfessionalsDo: "Pilot passenger and cargo aircraft, monitor avionics and flight control computers, navigate instrument flight rules (IFR), and ensure passenger safety.",
    requiredSubjects: "Physics and Mathematics in Class 12 (Mandatory DGCA requirement)",
    eligibility: "Minimum 50% in Class 12 PCM + DGCA Class 1 Medical Fitness certificate.",
    entranceExams: ["IGRUA Entrance Exam", "DGCA Theory Exams", "Cadet Pilot Program Assessments (IndiGo, Air India)"],
    courses: ["Commercial Pilot License (CPL) Training", "B.Sc Aviation"],
    duration: "18 to 24 Months",
    topColleges: ["IGRUA (Indira Gandhi Rashtriya Uran Akademi), Amethi", "National Flying Training Institute (NFTI), Gondia", "Approved Flying Training Organisations (FTOs) in India & Abroad"],
    careerOptions: ["First Officer (Co-Pilot)", "Captain (Commander)", "Flight Instructor", "Corporate Charter Pilot"],
    skills: ["Situational Awareness", "Quick Decision Making", "Instrument Flying", "Radio Telephony"],
    salaryRange: "₹1.5 Lakhs – ₹3.5 Lakhs/month (First Officer) to ₹6–10 Lakhs/month (Senior Captain)",
    growthOutlook: "Very High with Indian airlines ordering 1,200+ new aircraft",
    officialLinks: [
      { name: "DGCA India", url: "https://dgca.gov.in" },
      { name: "IGRUA Portal", url: "https://igrua.gov.in" },
    ],
    faqs: [
      {
        q: "What is the typical cost of CPL training in India?",
        a: "Flight training costs approximately ₹40–55 Lakhs for 200 flying hours + Type Rating (₹15–20 Lakhs). Airline Cadet programmes offer financing routes."
      }
    ]
  },

  // ==========================================
  // SCIENCE - PCB (MEDICAL & HEALTHCARE)
  // ==========================================
  {
    id: "mbbs-doctor",
    title: "MBBS – Allopathic Medicine & Surgery",
    stream: "Science - PCB",
    category: "Medical & Healthcare",
    academicLevel: "Class 12",
    tagline: "The gold standard in clinical healthcare, diagnosis, and surgical excellence.",
    description: "Bachelor of Medicine and Bachelor of Surgery (MBBS) is the premier medical degree in India, training doctors in anatomy, physiology, pharmacology, pathology, internal medicine, surgery, and clinical care.",
    whatProfessionalsDo: "Diagnose and treat medical conditions, conduct life-saving surgeries, manage intensive care units, prescribe pharmaceuticals, and lead public healthcare.",
    requiredSubjects: "Physics, Chemistry, Biology / Biotechnology, English",
    eligibility: "Minimum 50% in PCB in Class 12 (40% for reserved categories), minimum 17 years of age.",
    entranceExams: ["NEET UG (National Eligibility cum Entrance Test)"],
    courses: ["MBBS (5.5 Years including 1 Year Compulsory Rotatory Internship)"],
    duration: "5.5 Years",
    topColleges: ["AIIMS New Delhi", "CMC Vellore", "JIPMER Puducherry", "KGMU Lucknow", "SCB Medical College Cuttack"],
    careerOptions: ["Medical Officer", "Specialist Doctor (MD/MS)", "Super-Specialist (DM/MCh)", "Clinical Researcher", "Hospital Administrator"],
    skills: ["Clinical Diagnosis", "Patient Empathy", "Emergency Procedures", "Pharmacological Knowledge"],
    salaryRange: "₹65,000 – ₹1.2 Lakhs/month (Intern / Junior Resident) to ₹2–5+ Lakhs/month (Specialist / Consultant)",
    growthOutlook: "Perpetually high demand; immense societal respect",
    officialLinks: [
      { name: "NEET UG Official Portal", url: "https://neet.nta.nic.in" },
      { name: "National Medical Commission", url: "https://www.nmc.org.in" },
    ],
    faqs: [
      {
        q: "Is NEET mandatory for foreign medical admissions too?",
        a: "Yes! Qualified NEET UG scorecard is legally mandatory for Indian citizens intending to study medicine abroad (NMC guidelines)."
      }
    ]
  },
  {
    id: "bds-dental",
    title: "BDS – Dental Surgery",
    stream: "Science - PCB",
    category: "Medical & Healthcare",
    academicLevel: "Class 12",
    tagline: "Specialize in oral healthcare, orthodontic alignment, and maxillofacial surgery.",
    description: "Bachelor of Dental Surgery (BDS) prepares dental surgeons to diagnose, treat, and operate on oral diseases, teeth alignment, dental implants, and facial trauma.",
    whatProfessionalsDo: "Perform root canal treatments, align teeth with braces/aligners, execute oral cancer biopsies, insert titanium implants, and restore dental health.",
    requiredSubjects: "Physics, Chemistry, Biology",
    eligibility: "50% in PCB in 10+2 + NEET UG qualification.",
    entranceExams: ["NEET UG"],
    courses: ["BDS (4 Years Academic + 1 Year Paid Internship)"],
    duration: "5 Years",
    topColleges: ["Maulana Azad Institute of Dental Sciences, Delhi", "Manipal College of Dental Sciences", "King George's Medical University (Dental), Lucknow"],
    careerOptions: ["Dental Surgeon", "Endodontist", "Orthodontist (MDS)", "Maxillofacial Surgeon", "Private Clinic Owner"],
    skills: ["Fine Motor Dexterity", "Aesthetic Judgement", "Oral Radiology", "Surgical Precision"],
    salaryRange: "₹4 LPA – ₹10 LPA (Starting) to ₹20+ LPA (MDS / Clinic)",
    growthOutlook: "Strong growth in aesthetic dentistry and dental tourism",
    officialLinks: [
      { name: "Dental Council of India", url: "https://dciindia.gov.in" }
    ],
    faqs: [
      {
        q: "How does BDS compare to MBBS?",
        a: "BDS allows faster setup of private practice, regular work hours without midnight emergencies, and higher creative satisfaction in dental aesthetics."
      }
    ]
  },
  {
    id: "ayush-medicine",
    title: "AYUSH (BAMS / BHMS / BUMS) – Traditional Medicine",
    stream: "Science - PCB",
    category: "Medical & Healthcare",
    academicLevel: "Class 12",
    tagline: "Holistic healing through Ayurveda, Homeopathy, and integrated wellness.",
    description: "BAMS (Ayurvedic Medicine & Surgery) and BHMS (Homeopathic Medicine) focus on evidence-based traditional systems of healing, herbal pharmacology, and chronic disease management.",
    whatProfessionalsDo: "Prescribe classical herbal formulations, supervise Panchakarma detox therapies, treat chronic autoimmune disorders, and lead wellness centers.",
    requiredSubjects: "Physics, Chemistry, Biology",
    eligibility: "50% in PCB + NEET UG qualification.",
    entranceExams: ["NEET UG"],
    courses: ["BAMS (Ayurveda)", "BHMS (Homeopathy)", "BUMS (Unani)", "BSMS (Siddha)"],
    duration: "5.5 Years (including internship)",
    topColleges: ["National Institute of Ayurveda (NIA) Jaipur", "Banaras Hindu University (IMS-BHU)", "All India Institute of Ayurveda, New Delhi"],
    careerOptions: ["Ayurvedic Medical Officer", "Panchakarma Specialist", "Ayush Wellness Consultant", "Herbal Pharma Researcher"],
    skills: ["Pulse Diagnosis (Nadi Pariksha)", "Herbal Pharmacology", "Panchakarma Procedures", "Holistic Wellness"],
    salaryRange: "₹4.5 LPA – ₹10 LPA (Starting) to ₹18+ LPA",
    growthOutlook: "Booming with Ministry of AYUSH initiatives and global wellness interest",
    officialLinks: [
      { name: "Ministry of AYUSH", url: "https://ayush.gov.in" },
      { name: "NCISM India", url: "https://ncismindia.org" },
    ],
    faqs: [
      {
        q: "Are government doctor jobs available for BAMS graduates?",
        a: "Yes! Government posts for Ayurvedic Medical Officers (AMO) are regularly recruited through State PSCs and UPSC."
      }
    ]
  },
  {
    id: "bpt-physiotherapy",
    title: "Physiotherapy (BPT) & Sports Rehabilitation",
    stream: "Science - PCB",
    category: "Allied Medical & Healthcare",
    academicLevel: "Class 12",
    tagline: "Restore human mobility, sports rehabilitation, and neurological recovery.",
    description: "Bachelor of Physiotherapy (BPT) trains professionals in biomechanics, electrotherapy, neurological rehabilitation, and sports injury recovery without reliance on drugs.",
    whatProfessionalsDo: "Treat stroke paralysis patients, rehabilitate ligament tears in athletes, design ergonomic posture therapy, and operate robotic gait machines.",
    requiredSubjects: "Physics, Chemistry, Biology",
    eligibility: "50% in 10+2 PCB (NEET required in select states; many universities conduct own tests or merit admission).",
    entranceExams: ["State CETs", "University Entrance Tests (IPU CET, KCET)", "NEET UG in select states"],
    courses: ["BPT (4 Years + 6 Months Compulsory Internship)"],
    duration: "4.5 Years",
    topColleges: ["NIMS College of Physiotherapy, Jaipur", "Manipal College of Health Professions", "Jamia Hamdard, Delhi", "IPGMER Kolkata"],
    careerOptions: ["Sports Physiotherapist (BCCI, IPL, Olympic Teams)", "Clinical Physiotherapist", "Neuro-Rehab Specialist", "Ergonomics Consultant"],
    skills: ["Manual Therapy Techniques", "Exercise Physiology", "Kinesiology", "Patient Assessment"],
    salaryRange: "₹4 LPA – ₹9 LPA (Starting) to ₹18+ LPA",
    growthOutlook: "Rapidly growing with sports culture and corporate ergonomics awareness",
    officialLinks: [
      { name: "Indian Association of Physiotherapists", url: "https://physiotherapyindia.org" }
    ],
    faqs: [
      {
        q: "Can Physiotherapists use the title 'Dr.'?",
        a: "In India, clinical practice guidelines allow physiotherapists with BPT/MPT to practice independently as rehabilitation consultants."
      }
    ]
  },
  {
    id: "bpharm-pharma",
    title: "Pharmacy (B.Pharm) & Pharmaceutical Sciences",
    stream: "Science - PCB / PCM",
    category: "Pharmaceutical Sciences",
    academicLevel: "Class 12",
    tagline: "Formulate life-saving vaccines, drug discoveries, and clinical trials.",
    description: "B.Pharm covers medicinal chemistry, pharmaceutical biotechnology, pharmacokinetics, and drug delivery formulation, driving India's status as the 'Pharmacy of the World'.",
    whatProfessionalsDo: "Develop tablet formulations, conduct clinical trials, inspect drug manufacturing plants as Drug Inspectors, and manage pharma exports.",
    requiredSubjects: "Physics, Chemistry, Biology or Mathematics (Open to both PCM & PCB)",
    eligibility: "50% aggregate in 10+2 with PCM or PCB.",
    entranceExams: ["GPAT (for M.Pharm)", "State CETs (MHT CET, KCET, WBJEE)", "BITSAT (for B.Pharm at BITS Pilani)"],
    courses: ["B.Pharm (4 Years)", "Pharm.D (6-Year Clinical Doctorate)"],
    duration: "4 Years (B.Pharm) / 6 Years (Pharm.D)",
    topColleges: ["NIPER Mohali", "Jamia Hamdard, New Delhi", "BITS Pilani", "Manipal College of Pharmaceutical Sciences", "ICT Mumbai"],
    careerOptions: ["Formulation Scientist (R&D)", "Government Drug Inspector", "Clinical Research Associate", "Regulatory Affairs Specialist", "Pharmaceutical Entrepreneur"],
    skills: ["HPLC & Chromatography", "Organic Synthesis", "Regulatory Compliance (FDA guidelines)", "Clinical Trial Monitoring"],
    salaryRange: "₹4 LPA – ₹8 LPA (Starting) to ₹20+ LPA",
    growthOutlook: "Resilient, evergreen industry driven by global generic drug demand",
    officialLinks: [
      { name: "Pharmacy Council of India (PCI)", url: "https://pci.nic.in" }
    ],
    faqs: [
      {
        q: "Can a PCB student do B.Pharm?",
        a: "Yes! Both PCB and PCM students are completely eligible for B.Pharm across all universities in India."
      }
    ]
  },
  {
    id: "biotech-genetics",
    title: "Biotechnology, Microbiology & Genetics",
    stream: "Science - PCB / PCM",
    category: "Biological Sciences & Research",
    academicLevel: "Class 12 / Graduation",
    tagline: "Edit genomes with CRISPR, engineer synthetic biology, and fight diseases.",
    description: "Modern biological sciences fuse molecular biology, bioinformatics, gene sequencing, and immunology to solve viral pandemics, engineer drought-resistant crops, and create cancer immunotherapies.",
    whatProfessionalsDo: "Run PCR and DNA sequencing machines, culture monoclonal antibodies, analyze genomic big data using Python, and engineer microbial strains.",
    requiredSubjects: "Physics, Chemistry, Biology (or Mathematics)",
    eligibility: "10+2 with 50–60% in PCB.",
    entranceExams: ["GAT-B (Graduate Aptitude Test - Biotechnology)", "CUET UG", "IISER IAT", "University specific tests"],
    courses: ["B.Sc Biotechnology (Hons)", "B.Tech Biotechnology", "B.Sc Microbiology / Genetics"],
    duration: "3 or 4 Years",
    topColleges: ["IIT Delhi (Biotech)", "IISc Bangalore", "JNU New Delhi", "Delhi University (St. Stephen's, Hindu)", "Vellore Institute of Technology"],
    careerOptions: ["Bioinformatics Analyst", "Molecular Biologist", "Genomic Researcher", "Bioprocess Engineer", "Quality Control Lead"],
    skills: ["CRISPR Gene Editing Concepts", "Next-Gen Sequencing (NGS)", "Bio-Python & R", "Aseptic Cell Culture"],
    salaryRange: "₹4.5 LPA – ₹10 LPA (Starting) to ₹22+ LPA",
    growthOutlook: "Booming globally with mRNA vaccines and precision oncology",
    officialLinks: [
      { name: "Department of Biotechnology (DBT)", url: "https://dbtindia.gov.in" }
    ],
    faqs: [
      {
        q: "What is the difference between B.Sc Biotech and B.Tech Biotech?",
        a: "B.Sc focuses more on pure biological theory and laboratory protocols; B.Tech incorporates engineering, reactor design, and bioprocess thermodynamics."
      }
    ]
  },

  // ==========================================
  // COMMERCE (FINANCE, BUSINESS, MANAGEMENT)
  // ==========================================
  {
    id: "chartered-accountant",
    title: "Chartered Accountancy (CA)",
    stream: "Commerce / Open to All",
    category: "Professional Finance & Accounting",
    academicLevel: "Class 12 / Graduation",
    tagline: "The highest statutory authority in auditing, taxation, and corporate finance.",
    description: "Chartered Accountancy is the gold-standard professional finance credential governed by ICAI. CAs audit balance sheets, structure multi-crore mergers, and plan national corporate tax strategy.",
    whatProfessionalsDo: "Statutory auditing of listed companies, direct/indirect tax advisory (GST & Income Tax), corporate restructuring, forensic auditing, and CFO leadership.",
    requiredSubjects: "Any stream in Class 12 (Commerce with Math preferred)",
    eligibility: "Pass Class 12 examination in any stream (Science, Commerce, Arts).",
    entranceExams: ["CA Foundation Exam (Conducted by ICAI thrice a year in Jan, May, Sept)"],
    courses: ["3-Tier Programme: CA Foundation → CA Intermediate → 2-Year Articleship → CA Final"],
    duration: "4.5 to 5 Years",
    topColleges: ["Institute of Chartered Accountants of India (ICAI) - Autonomous Statutory Body"],
    careerOptions: ["Chief Financial Officer (CFO)", "Statutory Auditor", "Tax Consultant", "Investment Banker", "Forensic Auditor"],
    skills: ["Financial Reporting (Ind AS / IFRS)", "Corporate Law", "Advanced Taxation", "Audit Risk Assessment"],
    salaryRange: "₹9 LPA – ₹25 LPA (Starting Campus Average) to ₹50+ LPA",
    growthOutlook: "Every corporate business legally requires CA certification; zero recession risk",
    officialLinks: [
      { name: "ICAI Official Portal", url: "https://www.icai.org" }
    ],
    faqs: [
      {
        q: "Can a Science student pursue CA after 12th?",
        a: "Yes! Thousands of Science students clear CA exams every year due to strong analytical and logical reasoning skills."
      }
    ]
  },
  {
    id: "bba-mba-management",
    title: "Management (IPMAT / Integrated BBA+MBA)",
    stream: "Commerce / Science / Arts",
    category: "Business & Management",
    academicLevel: "Class 12",
    tagline: "Step straight from Class 12 into premier Indian Institutes of Management (IIMs).",
    description: "The 5-Year Integrated Programme in Management (IPM) allows students after Class 12 to study at IIM Indore, IIM Rohtak, and other top institutes, graduating with dual BBA + MBA degrees.",
    whatProfessionalsDo: "Lead corporate strategy, manage multi-million dollar marketing campaigns, consult Fortune 500 CEOs, and launch venture-backed startups.",
    requiredSubjects: "Any stream in Class 12 (Math preferred for quantitative exams)",
    eligibility: "Minimum 60% in Class 10 and 12.",
    entranceExams: ["IPMAT Indore", "IPMAT Rohtak", "JIPMAT (IIM Jammu & Bodh Gaya)", "NPAT (NMIMS)", "SET (Symbiosis)"],
    courses: ["Integrated BBA + MBA (5 Years)", "BBA Honours (3/4 Years)"],
    duration: "5 Years (Integrated) / 3–4 Years (BBA)",
    topColleges: ["IIM Indore", "IIM Rohtak", "IIM Ranchi", "NMIMS Mumbai", "Shaheed Sukhdev College of Business Studies (SSCBS), Delhi"],
    careerOptions: ["Management Consultant (McKinsey, BCG)", "Investment Banker", "Product Manager", "Brand Manager", "Chief Marketing Officer"],
    skills: ["Strategic Analysis", "Business Communication", "Financial Modeling", "People Leadership"],
    salaryRange: "₹18 LPA – ₹32 LPA (IIM IPM Average) to ₹40+ LPA",
    growthOutlook: "Top tier across global enterprise leadership",
    officialLinks: [
      { name: "IIM Indore IPM Portal", url: "https://www.iimidr.ac.in" }
    ],
    faqs: [
      {
        q: "What is tested in the IPMAT exam?",
        a: "IPMAT tests Quantitative Ability (Higher Math + Arithmetic), Verbal Ability (Reading Comprehension & Grammar), followed by a Personal Interview."
      }
    ]
  },
  {
    id: "cfa-investment-banking",
    title: "CFA & Investment Banking / Financial Markets",
    stream: "Commerce / Science / Arts",
    category: "Finance & Wealth Management",
    academicLevel: "Graduation / Final Year",
    tagline: "Master Wall Street equity research, algorithmic trading, and portfolio management.",
    description: "Chartered Financial Analyst (CFA) is the most respected global credential for investment analysis, portfolio management, hedge funds, and equity research.",
    whatProfessionalsDo: "Value multi-billion dollar companies for M&A, build DCF financial models, manage mutual fund portfolios, and trade derivatives.",
    requiredSubjects: "Bachelor's degree in any discipline (Commerce/Math/Economics/Engineering preferred).",
    eligibility: "Eligible to sit for CFA Level 1 in the final year of graduation.",
    entranceExams: ["CFA Level 1, Level 2, Level 3 (Global exams conducted by CFA Institute, USA)"],
    courses: ["B.Com (Hons) / B.Sc Economics / B.Tech + CFA Programme"],
    duration: "2.5 to 3 Years for all 3 levels",
    topColleges: ["Global Certification (CFA Institute, Charlottesville, USA)"],
    careerOptions: ["Equity Research Analyst", "Portfolio Manager", "Investment Banking Associate", "Risk Manager", "Private Equity Associate"],
    skills: ["Financial Valuation & DCF", "Fixed Income & Derivatives", "Macroeconomics", "Financial Statement Analysis"],
    salaryRange: "₹12 LPA – ₹30 LPA (Starting) to ₹60+ LPA",
    growthOutlook: "Extremely high in global financial hubs (Mumbai, London, New York, Singapore)",
    officialLinks: [
      { name: "CFA Institute Global", url: "https://www.cfainstitute.org" }
    ],
    faqs: [
      {
        q: "Can I combine B.Com with CFA preparation?",
        a: "Yes! Most top finance aspirants prepare for CFA Level 1 during the 2nd and 3rd years of B.Com or BBA."
      }
    ]
  },

  // ==========================================
  // ARTS, HUMANITIES & LAW
  // ==========================================
  {
    id: "law-clat",
    title: "Integrated Corporate & Constitutional Law (BA LLB / BBA LLB)",
    stream: "Arts / Commerce / Science",
    category: "Legal Studies & Judiciary",
    academicLevel: "Class 12",
    tagline: "Argue in the Supreme Court, lead corporate M&A deals, or enter the Judiciary.",
    description: "The 5-Year Integrated Law programme at National Law Universities (NLUs) trains students in constitutional law, corporate jurisprudence, international arbitration, and criminal litigation.",
    whatProfessionalsDo: "Draft contracts for corporate cross-border mergers, argue petitions in High Courts and the Supreme Court, and advise startups on IP patents.",
    requiredSubjects: "Any stream in Class 12",
    eligibility: "Minimum 45% in 10+2 (40% for SC/ST).",
    entranceExams: ["CLAT (Common Law Admission Test)", "AILET (for NLU Delhi)", "SLAT (Symbiosis Law)", "LSAT India"],
    courses: ["BA LLB (Honours)", "BBA LLB (Honours)", "B.Sc LLB"],
    duration: "5 Years",
    topColleges: ["NLSIU Bengaluru (Rank 1 NLU)", "NALSAR Hyderabad", "NLU Delhi", "WBNUJS Kolkata", "NLU Jodhpur"],
    careerOptions: ["Corporate M&A Lawyer", "Litigation Advocate (High Court / Supreme Court)", "Judicial Magistrate (Civil Judge)", "Legal In-House Counsel", "Public Prosecutor"],
    skills: ["Legal Drafting & Research", "Oral Advocacy", "Logical Deconstruction", "Statutory Interpretation"],
    salaryRange: "₹12 LPA – ₹22 LPA (Top Tier Corporate Law Firms) to ₹50+ LPA / Partner",
    growthOutlook: "Very High driven by corporate expansion and regulatory compliance",
    officialLinks: [
      { name: "Consortium of NLUs (CLAT)", url: "https://consortiumofnlus.ac.in" },
      { name: "NLU Delhi (AILET)", url: "https://nationallawuniversitydelhi.in" },
    ],
    faqs: [
      {
        q: "Is math compulsory for CLAT?",
        a: "Basic 10th-grade arithmetic (elementary mathematics) comprises only 10–12% of the CLAT paper; higher math is not required."
      }
    ]
  },
  {
    id: "civil-services-upsc",
    title: "Civil Services (UPSC IAS / IPS / IFS)",
    stream: "Open to All Streams",
    category: "Government Leadership & Administration",
    academicLevel: "Graduation",
    tagline: "Lead district administration, national policymaking, and global diplomacy.",
    description: "The Civil Services Examination (CSE) conducted by UPSC is India's most prestigious competitive exam, recruiting leaders for the Indian Administrative Service (IAS), Police (IPS), Foreign Service (IFS), and 20+ central services.",
    whatProfessionalsDo: "Manage district development budgets, maintain public law and order, negotiate international diplomatic treaties, and draft national education/health policies.",
    requiredSubjects: "Graduation in any discipline (B.A., B.Sc., B.Tech., MBBS, B.Com).",
    eligibility: "Graduate degree from a recognized university, age 21 to 32 years (with relaxation for reserved categories).",
    entranceExams: ["UPSC Civil Services Exam (Prelims → Mains 9 Papers → Personality Test Interview)"],
    courses: ["Any Bachelor's Degree + 1–2 Years Dedicated UPSC Preparation"],
    duration: "1 Year Examination Cycle",
    topColleges: ["Graduates from any UGC-recognized University, IIT, AIIMS, or State College"],
    careerOptions: ["District Magistrate (IAS)", "Superintendent of Police (IPS)", "Ambassador / Diplomat (IFS)", "Joint Secretary to Govt of India"],
    skills: ["Comprehensive General Knowledge", "Analytical Essay Writing", "Ethical Decision Making", "Administrative Leadership"],
    salaryRange: "₹56,100 (Starting Basic Pay) + HRA + DA + Official Residence, Vehicle, and Cabinet-level protocol",
    growthOutlook: "Ultimate prestige, policy influence, and public service impact in India",
    officialLinks: [
      { name: "UPSC Official Portal", url: "https://upsc.gov.in" }
    ],
    faqs: [
      {
        q: "Which graduation degree is best for UPSC preparation?",
        a: "Degrees in Humanities (History, Political Science, Economics, Geography) overlap strongly with the General Studies syllabus, but engineers and doctors also succeed in high numbers."
      }
    ]
  },
  {
    id: "design-fashion-nift-nid",
    title: "Design, UI/UX & Fashion (NID / NIFT / UCEED)",
    stream: "Open to All Streams",
    category: "Design, Fashion & Creative Arts",
    academicLevel: "Class 12",
    tagline: "Create digital products, haute couture fashion, and futuristic industrial design.",
    description: "Design education at NID, NIFT, and IITs transforms creative talent into high-paying design careers in digital app UI/UX, automotive styling, fashion design, and animation.",
    whatProfessionalsDo: "Design intuitive interfaces for smartphone apps, sketch electric car interiors, create apparel collections, and produce CGI animation.",
    requiredSubjects: "Any stream in Class 12 (Science required for B.Des at IIT Bombay via UCEED).",
    eligibility: "Class 12 pass in any stream with minimum 50%.",
    entranceExams: ["NID DAT (Design Aptitude Test)", "NIFT Entrance Exam", "UCEED (IIT Bombay, IIT Delhi)", "CEED (for M.Des)"],
    courses: ["B.Des (Bachelor of Design)", "B.F.Tech (Fashion Technology)"],
    duration: "4 Years",
    topColleges: ["National Institute of Design (NID) Ahmedabad", "NIFT New Delhi", "IDC School of Design (IIT Bombay)", "NIFT Mumbai"],
    careerOptions: ["Lead UI/UX Product Designer", "Automotive Exterior Designer", "Fashion Designer", "Design Director", "Animation Art Director"],
    skills: ["Design Thinking & User Research", "Figma / Adobe Creative Suite", "3D Modeling / Rhino", "Color Theory & Ergonomics"],
    salaryRange: "₹8 LPA – ₹20 LPA (Starting UI/UX / Product Design) to ₹45+ LPA",
    growthOutlook: "Very High as every tech startup and global enterprise prioritizes digital user experience",
    officialLinks: [
      { name: "NID Official Admissions", url: "https://admissions.nid.edu" },
      { name: "NIFT Official Portal", url: "https://nift.ac.in" },
      { name: "UCEED IIT Bombay", url: "https://uceed.iitb.ac.in" },
    ],
    faqs: [
      {
        q: "What is UI/UX design and why is it paying like software engineering?",
        a: "UI/UX designers decide how apps (like Uber, Swiggy, Apple iOS) look and feel. Companies pay high salaries because good design directly determines customer retention."
      }
    ]
  },
  {
    id: "psychology-counselling",
    title: "Clinical Psychology & Cognitive Neurosciences",
    stream: "Arts / Science / PCB",
    category: "Humanities & Mental Healthcare",
    academicLevel: "Class 12 / Graduation",
    tagline: "Understand human cognition, mental health therapeutics, and behavioral analytics.",
    description: "Psychology explores mental processes, neurobiology, and emotional wellness. Clinical psychologists diagnose psychological conditions and provide evidence-based psychotherapy.",
    whatProfessionalsDo: "Conduct cognitive assessments, deliver cognitive behavioral therapy (CBT), counsel students/families, and conduct neuropsychological research.",
    requiredSubjects: "Any stream in Class 12 (Psychology / Biology advantageous).",
    eligibility: "50–55% in 10+2.",
    entranceExams: ["CUET UG", "NIMHANS Entrance Exam (for M.Phil / Psy.D)"],
    courses: ["B.A. / B.Sc. (Hons) Psychology", "M.A. / M.Sc. Clinical Psychology", "M.Phil in Clinical Psychology (RCI licensed)"],
    duration: "3 or 4 Years (UG) + 2 Years (PG)",
    topColleges: ["NIMHANS Bengaluru", "Delhi University (LSR, Jesus & Mary)", "TISS Mumbai", "Christ University Bengaluru"],
    careerOptions: ["Licensed Clinical Psychologist (RCI)", "Neuropsychologist", "Corporate Wellness Consultant", "Sports Psychologist", "Child Development Specialist"],
    skills: ["Active Listening", "Psychological Diagnostic Tools", "CBT & Therapeutic Modalities", "Statistical Analysis (SPSS)"],
    salaryRange: "₹4 LPA – ₹10 LPA (Starting) to ₹20+ LPA / Independent Practice",
    growthOutlook: "Skyrocketing with widespread destigmatization of mental healthcare",
    officialLinks: [
      { name: "Rehabilitation Council of India (RCI)", url: "https://rehabcouncil.nic.in" },
      { name: "NIMHANS Portal", url: "https://nimhans.ac.in" },
    ],
    faqs: [
      {
        q: "What is the difference between a Psychiatrist and a Psychologist?",
        a: "A Psychiatrist has an MBBS + MD degree and can prescribe psychiatric medications. A Clinical Psychologist has a B.Sc + M.Sc + M.Phil/Psy.D and focuses on psychotherapy and behavioral testing."
      }
    ]
  },

  // ==========================================
  // DIPLOMA & VOCATIONAL (AFTER CLASS 10)
  // ==========================================
  {
    id: "polytechnic-engineering-diploma",
    title: "Polytechnic Diploma in Engineering",
    stream: "Class 10 Technical",
    category: "Technical Diploma & Vocational",
    academicLevel: "Class 10",
    tagline: "Fast-track technical skills with direct lateral entry into B.Tech 2nd year.",
    description: "Polytechnic diplomas provide hands-on practical technical education in Mechanical, Civil, Electrical, Automobile, and Computer engineering right after Class 10.",
    whatProfessionalsDo: "Supervise plant machinery, execute construction site blueprints, test electrical sub-stations, and program microcontrollers.",
    requiredSubjects: "Class 10 with Science and Mathematics.",
    eligibility: "Passed Class 10 with minimum 35–45% marks.",
    entranceExams: ["State Polytechnic Entrance Tests (JEECUP, POLYCET, DET Odisha)"],
    courses: ["Diploma in Mechanical Engineering", "Diploma in Civil Engineering", "Diploma in Electrical", "Diploma in Computer Engineering"],
    duration: "3 Years",
    topColleges: ["Government Polytechnic Mumbai", "Pusa Institute of Technology Delhi", "Government Polytechnic Bhubaneswar", "PSG Polytechnic Coimbatore"],
    careerOptions: ["Junior Engineer (SSC JE / RRB JE)", "Plant Supervisor", "B.Tech Lateral Entry (Direct 2nd Year admission)", "Technical Officer"],
    skills: ["Technical Drawing", "Workshop Machine Tooling", "Circuit Soldering & Testing", "Site Measurement"],
    salaryRange: "₹3 LPA – ₹6 LPA (Starting) → ₹10+ LPA after B.Tech Lateral Entry",
    growthOutlook: "Solid pathway for practical learners who want to work early or enter B.Tech without Class 12 board pressure",
    officialLinks: [
      { name: "AICTE Diploma Portal", url: "https://www.aicte-india.org" }
    ],
    faqs: [
      {
        q: "Can I do B.Tech after a Polytechnic Diploma?",
        a: "Yes! Diploma holders get direct admission into the 2nd year of B.Tech (Lateral Entry) in all engineering colleges without doing Class 11 and 12."
      }
    ]
  }
];

// Quick Lookup Map
export const careersMap = careersData.reduce((acc, c) => {
  acc[c.id] = c;
  return acc;
}, {});
