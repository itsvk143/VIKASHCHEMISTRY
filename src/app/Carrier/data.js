/* ---------------------------------------------------------
   GLOBAL TOP NAVIGATION NODES
--------------------------------------------------------- */
export const topNodes = [
    { id: 'top10', label: 'Class 10', position: { x: 300, y: 40 } },
    { id: 'top12', label: 'Class 12', position: { x: 520, y: 40 } },
    { id: 'topGrad', label: 'Graduation', position: { x: 740, y: 40 } },
    { id: 'topPG', label: 'Post Graduation', position: { x: 960, y: 40 } },
];

/* ---------------------------------------------------------
   CLASS 10 — ULTRA-COMPLETE
--------------------------------------------------------- */
export const class10Nodes = [
    ...topNodes,
    // LEVEL 1: Major Forks - wider spacing
    { id: '10-poly', label: 'Polytechnic Diploma\n(Engineering)', position: { x: 650, y: 160 }, link: 'https://en.wikipedia.org/wiki/Polytechnic_university' },
    { id: '10-stream', label: 'Choose Stream\n(11th & 12th)', position: { x: 300, y: 280 }, link: 'https://en.wikipedia.org/wiki/Secondary_education_in_India' },
    { id: '10-iti', label: 'ITI Trades\n(Vocational)', position: { x: 1100, y: 160 }, link: 'https://en.wikipedia.org/wiki/Industrial_training_institute' },
    { id: '10-short', label: 'Short-term Certifications\n(Coding / Marketing)', position: { x: -50, y: 160 }, link: 'https://en.wikipedia.org/wiki/Online_learning' },

    // LEVEL 2: Streams - increased vertical spacing
    { id: '10-sci', label: 'Science\n(PCM / PCB)', position: { x: 300, y: 480 }, link: 'https://en.wikipedia.org/wiki/Science_education' },
    { id: '10-com', label: 'Commerce\n(With/Without Maths)', position: { x: 1000, y: 480 }, link: 'https://en.wikipedia.org/wiki/Commerce' },
    { id: '10-art', label: 'Arts / Humanities', position: { x: -400, y: 480 }, link: 'https://en.wikipedia.org/wiki/Humanities' },

    // LEVEL 3: Stream Details (Science) - better spacing
    { id: '10-sci-pcm', label: '(PCM) Engineering\nArchitecture / Defense', position: { x: 100, y: 680 }, link: 'https://en.wikipedia.org/wiki/Mechanical_engineering' },
    { id: '10-sci-pcb', label: '(PCB) Medical\nNursing / Pharma', position: { x: 350, y: 680 }, link: 'https://en.wikipedia.org/wiki/Paramedicine' },
    { id: '10-sci-pcmb', label: '(PCMB) Bio-Maths\nFlexible Options', position: { x: 600, y: 680 }, link: 'https://en.wikipedia.org/wiki/Education' },

    // LEVEL 3: Stream Details (Commerce) - increased spacing
    { id: '10-com-acc', label: 'CA / CS / CMA\nFinance', position: { x: 800, y: 600 }, link: 'https://en.wikipedia.org/wiki/Accounting' },
    { id: '10-com-biz', label: 'BBA / BMS\nManagement', position: { x: 1000, y: 600 }, link: 'https://en.wikipedia.org/wiki/Entrepreneurship' },
    { id: '10-com-bank', label: 'Banking & Economics', position: { x: 1200, y: 600 }, link: 'https://en.wikipedia.org/wiki/Bank' },

    // LEVEL 3: Stream Details (Arts) - better spacing
    { id: '10-art-fine', label: 'Fine Arts / Design\nMedia', position: { x: -200, y: 600 }, link: 'https://en.wikipedia.org/wiki/Fine_art' },
    { id: '10-art-tour', label: 'Law / Psychology\nCivil Services', position: { x: -400, y: 600 }, link: 'https://en.wikipedia.org/wiki/Tourism' },
    { id: '10-art-del', label: 'Teaching (D.El.Ed)', position: { x: -600, y: 600 }, link: 'https://en.wikipedia.org/wiki/Teacher_training' },

    // LEVEL 3: ITI Options - wider spacing
    { id: '10-iti-welder', label: 'ITI: Welder', position: { x: 1300, y: 280 }, link: 'https://en.wikipedia.org/wiki/Welding' },
    { id: '10-iti-fitter', label: 'ITI: Fitter', position: { x: 1100, y: 280 }, link: 'https://en.wikipedia.org/wiki/Fitting_(metalworking)' },
    { id: '10-iti-elec', label: 'ITI: Electrician', position: { x: 900, y: 280 }, link: 'https://en.wikipedia.org/wiki/Electrician' },

    // LEVEL 4: Career Outcomes - repositioned
    { id: '10-app', label: 'Apprenticeship / Jobs', position: { x: 350, y: 860 }, link: 'https://en.wikipedia.org/wiki/Apprenticeship' },
    { id: '10-govt', label: 'Govt Jobs (SSC MTS)', position: { x: 1000, y: 800 }, link: 'https://en.wikipedia.org/wiki/Civil_service' },
    { id: '10-def', label: 'Defense (Soldier/Tech)', position: { x: 900, y: 400 }, link: 'https://en.wikipedia.org/wiki/Indian_Armed_Forces' },

    // Return to Main Path
    { id: '10-back12', label: 'Lateral Entry to Degree\n(After Diploma)', position: { x: 650, y: 1000 }, link: 'https://en.wikipedia.org/wiki/Higher_secondary_education_in_India' },
];

export const class10Edges = [
    { id: 'e10a', source: 'top10', target: '10-poly', type: 'smoothstep' },
    { id: 'e10b', source: 'top10', target: '10-stream', type: 'smoothstep' },
    { id: 'e10c', source: 'top10', target: '10-iti', type: 'smoothstep' },
    { id: 'e10d', source: 'top10', target: '10-short', type: 'smoothstep' },
    { id: 'e10-stream-sci', source: '10-stream', target: '10-sci', type: 'smoothstep' },
    { id: 'e10-stream-com', source: '10-stream', target: '10-com', type: 'smoothstep' },
    { id: 'e10-stream-art', source: '10-stream', target: '10-art', type: 'smoothstep' },
    { id: 'e10-sci-pcm', source: '10-sci', target: '10-sci-pcm', type: 'smoothstep' },
    { id: 'e10-sci-pcb', source: '10-sci', target: '10-sci-pcb', type: 'smoothstep' },
    { id: 'e10-sci-pcmb', source: '10-sci', target: '10-sci-pcmb', type: 'smoothstep' },
    { id: 'e10-com-acc', source: '10-com', target: '10-com-acc', type: 'smoothstep' },
    { id: 'e10-com-biz', source: '10-com', target: '10-com-biz', type: 'smoothstep' },
    { id: 'e10-com-bank', source: '10-com', target: '10-com-bank', type: 'smoothstep' },
    { id: 'e10-art-fine', source: '10-art', target: '10-art-fine', type: 'smoothstep' },
    { id: 'e10-art-tour', source: '10-art', target: '10-art-tour', type: 'smoothstep' },
    { id: 'e10-art-del', source: '10-art', target: '10-art-del', type: 'smoothstep' },
    { id: 'e10-iti-welder', source: '10-iti', target: '10-iti-welder', type: 'smoothstep' },
    { id: 'e10-iti-fitter', source: '10-iti', target: '10-iti-fitter', type: 'smoothstep' },
    { id: 'e10-iti-elec', source: '10-iti', target: '10-iti-elec', type: 'smoothstep' },
    { id: 'e10-app', source: '10-sci-pcm', target: '10-app', type: 'smoothstep' },
    { id: 'e10-govt', source: '10-com-bank', target: '10-govt', type: 'smoothstep' },
    { id: 'e10-def', source: '10-iti-elec', target: '10-def', type: 'smoothstep' },
    { id: 'e10-back', source: '10-poly', target: '10-back12', type: 'smoothstep' },
];

/* ---------------------------------------------------------
   CLASS 12 FLOWCHART (SPACED OUT)
--------------------------------------------------------- */
export const class12Nodes = [
    ...topNodes,
    // Top Row - wider spacing
    { id: '0', label: 'Scholarships', position: { x: -600, y: 150 }, link: 'https://scholarships.gov.in/' },
    { id: '2', label: 'Degree Paths\n(Choose Stream)', position: { x: 500, y: 150 }, link: 'https://en.wikipedia.org/wiki/Education_in_India' },
    { id: '3', label: 'Direct Jobs / Exams', position: { x: 1200, y: 150 }, link: 'https://en.wikipedia.org/wiki/Competitive_examination' },
    { id: 'abroad', label: 'Study Abroad\n(SAT/ACT)', position: { x: 1500, y: 150 }, link: 'https://en.wikipedia.org/wiki/Study_abroad' },

    // ---------------------------------------------------------
    // LEVEL 1: SCHOLARSHIP CATEGORIES
    // ---------------------------------------------------------
    { id: 'cat-govt', label: 'Govt Scholarships\n(Central & State)', position: { x: -1100, y: 300 }, link: 'https://scholarships.gov.in/' },
    { id: 'cat-pvt', label: 'Private & Corporate\nScholarships', position: { x: -600, y: 300 }, link: 'https://www.buddy4study.com/' },
    { id: 'cat-tal', label: 'Talent Search\n& Exams', position: { x: -150, y: 300 }, link: 'https://ncert.nic.in/national-talent-examination.php' },

    // ---------------------------------------------------------
    // LEVEL 2: GOVT SCHOLARSHIPS (Details)
    // ---------------------------------------------------------
    { id: 'gov-pm', label: 'PM YASASVI (PMYET)', position: { x: -1250, y: 450 }, link: 'https://yet.nta.ac.in/' },
    { id: 'gov-csss', label: 'Central Sector (CSSS)', position: { x: -1050, y: 450 }, link: 'https://scholarships.gov.in/' },
    { id: 'gov-ins', label: 'INSPIRE (SHE)', position: { x: -1250, y: 550 }, link: 'https://online-inspire.gov.in/' },
    { id: 'gov-aicte', label: 'AICTE Pragati (Girls)', position: { x: -1050, y: 550 }, link: 'https://www.aicte-india.org/schemes/students-development-schemes' },
    { id: 'gov-state', label: 'Post Matric (State)\nMahaDBT / SSP / Odisha', position: { x: -1250, y: 650 }, link: 'https://scholarships.gov.in/' },
    { id: 'gov-pmss', label: 'PMSS (Ex-Servicemen)', position: { x: -1050, y: 650 }, link: 'https://ksb.gov.in/' },
    { id: 'gov-kvpy', label: 'KVPY (Now INSPIRE)', position: { x: -1150, y: 750 }, link: 'http://www.kvpy.iisc.ernet.in/' },

    // ---------------------------------------------------------
    // LEVEL 2: PRIVATE SCHOLARSHIPS (Details - Split Columns)
    // ---------------------------------------------------------
    // Col 1
    { id: 'pvt-rel', label: 'Reliance Foundation', position: { x: -750, y: 450 }, link: 'https://www.reliancefoundation.org/' },
    { id: 'pvt-hdfc', label: 'HDFC Badhte Kadam', position: { x: -750, y: 540 }, link: 'https://www.hdfcbank.com/' },
    { id: 'pvt-vid', label: 'Vidyadhan', position: { x: -750, y: 630 }, link: 'https://www.vidyadhan.org/' },
    { id: 'pvt-lic', label: 'LIC Golden Jubilee', position: { x: -750, y: 720 }, link: 'https://licindia.in/' },
    { id: 'pvt-tata', label: 'Tata Trust Medical', position: { x: -750, y: 810 }, link: 'https://www.tatatrusts.org/' },
    { id: 'pvt-kotak', label: 'Kotak Kanya', position: { x: -750, y: 900 }, link: 'https://kotakeducation.org/' },

    // Col 2
    { id: 'pvt-jindal', label: 'Sitaram Jindal', position: { x: -450, y: 450 }, link: 'https://www.sitaramjindalfoundation.org/' },
    { id: 'pvt-col', label: 'Colgate Keep India', position: { x: -450, y: 540 }, link: 'https://www.colgate.com/' },
    { id: 'pvt-birla', label: 'Aditya Birla Capital', position: { x: -450, y: 630 }, link: 'https://www.adityabirlacapital.com/' },
    { id: 'pvt-nsdl', label: 'NSDL Shiksha Sahyog', position: { x: -450, y: 720 }, link: 'https://www.vidyasaarathi.co.in/' },
    { id: 'pvt-north', label: 'OakNorth STEM', position: { x: -450, y: 810 }, link: 'https://onion.oaknorth.co.uk/' },
    { id: 'pvt-fed', label: 'Federal Bank Hormis', position: { x: -450, y: 900 }, link: 'https://www.federalbank.co.in/' },
    { id: 'pvt-san', label: 'Santoor Women', position: { x: -600, y: 990 }, link: 'https://www.santoorscholarship.com/' },

    // ---------------------------------------------------------
    // LEVEL 2: TALENT / EXAMS (Details)
    // ---------------------------------------------------------
    { id: 'tal-ntse', label: 'NTSE (National Talent)', position: { x: -150, y: 450 }, link: 'https://ncert.nic.in/national-talent-examination.php' },
    { id: 'tal-cst', label: 'CST (Coaching Tests)', position: { x: -150, y: 550 }, link: 'https://google.com/search?q=CST+Scholarship' },
    { id: 'tal-sch', label: 'Schindler Igniting Minds', position: { x: -150, y: 650 }, link: 'https://www.schindler.com/' },


    // Stream Heads (Spacing 300px)
    { id: 'creative', label: 'Design / Media\n(New Age)', position: { x: 50, y: 320 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Design' },
    { id: '4', label: 'Science', position: { x: 380, y: 320 }, link: 'https://en.wikipedia.org/wiki/Science' },
    { id: '5', label: 'Commerce', position: { x: 680, y: 320 }, link: 'https://en.wikipedia.org/wiki/Commerce' },
    { id: '6', label: 'Arts / Humanities', position: { x: 980, y: 320 }, link: 'https://en.wikipedia.org/wiki/Humanities' },

    // Science Branches - increased vertical spacing
    { id: '4a', label: 'Engineering (JEE)', position: { x: 380, y: 420 }, link: '/engineering-class-12' },
    { id: '4b', label: 'Medical (NEET)', position: { x: 380, y: 510 }, link: '/medical-class-12' },
    { id: '4c', label: 'Architecture (NATA)', position: { x: 380, y: 600 }, link: 'https://en.wikipedia.org/wiki/National_Aptitude_Test_in_Architecture' },
    { id: '4d', label: 'Allied Medical\n(Pharmacy/Nursing)', position: { x: 380, y: 690 }, link: 'https://en.wikipedia.org/wiki/Allied_health_professions' },
    { id: '4e', label: 'Pilot / Aviation', position: { x: 380, y: 780 }, link: 'https://en.wikipedia.org/wiki/Aviation' },

    // Commerce Branches
    { id: '5a', label: 'CA / CS / CMA', position: { x: 680, y: 420 }, link: 'https://en.wikipedia.org/wiki/Chartered_accountant' },
    { id: '5b', label: 'BBA / BMS / IPM', position: { x: 680, y: 510 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Business_Administration' },
    { id: '5c', label: 'B.Com (Hons/Prog)', position: { x: 680, y: 600 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Commerce' },
    { id: '5d', label: 'Integrated Law (CLAT)', position: { x: 680, y: 690 }, link: 'https://en.wikipedia.org/wiki/Common_Law_Admission_Test' },

    // Arts Branches
    { id: '6a', label: 'Civil Services (UPSC)', position: { x: 980, y: 420 }, link: 'https://en.wikipedia.org/wiki/Civil_Services_Examination_(India)' },
    { id: '6b', label: 'Law (BA LLB)', position: { x: 980, y: 510 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Laws' },
    { id: '6c', label: 'Psychology / Sociology', position: { x: 980, y: 600 }, link: 'https://en.wikipedia.org/wiki/Psychology' },
    { id: '6d', label: 'Hotel Management (NCHM)', position: { x: 980, y: 690 }, link: 'https://en.wikipedia.org/wiki/Hospitality_management_studies' },

    // Creative Branches - moved left to avoid overlap
    { id: 'cr-1', label: 'Fashion/Product Design\n(NIFT / NID)', position: { x: 50, y: 440 }, link: 'https://en.wikipedia.org/wiki/National_Institute_of_Fashion_Technology' },
    { id: 'cr-2', label: 'Journalism / Mass Comm', position: { x: 50, y: 540 }, link: 'https://en.wikipedia.org/wiki/Mass_communication' },
    { id: 'cr-3', label: 'Animation / VFX', position: { x: 50, y: 640 }, link: 'https://en.wikipedia.org/wiki/Animation' },

    // Govt Jobs (Direct) - moved right
    { id: '7a', label: 'Defense (NDA)', position: { x: 1200, y: 320 }, link: 'https://en.wikipedia.org/wiki/National_Defence_Academy_(India)' },
    { id: '7b', label: 'SSC CHSL / GD', position: { x: 1200, y: 420 }, link: 'https://en.wikipedia.org/wiki/Staff_Selection_Commission' },
    { id: '7c', label: 'Bank Clerical', position: { x: 1200, y: 520 }, link: 'https://en.wikipedia.org/wiki/Institute_of_Banking_Personnel_Selection' },
    { id: '7d', label: 'Merchant Navy', position: { x: 1200, y: 620 }, link: 'https://en.wikipedia.org/wiki/Merchant_navy' },
];

export const class12Edges = [
    { id: 'e0-12', source: '0', target: 'top12', type: 'smoothstep' },
    { id: 'e12-2', source: 'top12', target: '2', type: 'smoothstep' },
    { id: 'e12-3', source: 'top12', target: '3', type: 'smoothstep' },
    { id: 'e12-ab', source: 'top12', target: 'abroad', type: 'smoothstep' },

    // Scholarship Categories
    { id: 'e0-govt', source: '0', target: 'cat-govt', type: 'smoothstep' },
    { id: 'e0-pvt', source: '0', target: 'cat-pvt', type: 'smoothstep' },
    { id: 'e0-tal', source: '0', target: 'cat-tal', type: 'smoothstep' },

    // Gov Edges
    { id: 'e-cat-gov-pm', source: 'cat-govt', target: 'gov-pm', type: 'smoothstep' },
    { id: 'e-cat-gov-csss', source: 'cat-govt', target: 'gov-csss', type: 'smoothstep' },
    { id: 'e-cat-gov-ins', source: 'cat-govt', target: 'gov-ins', type: 'smoothstep' },
    { id: 'e-cat-gov-aicte', source: 'cat-govt', target: 'gov-aicte', type: 'smoothstep' },
    { id: 'e-cat-gov-state', source: 'cat-govt', target: 'gov-state', type: 'smoothstep' },
    { id: 'e-cat-gov-pmss', source: 'cat-govt', target: 'gov-pmss', type: 'smoothstep' },
    { id: 'e-cat-gov-kvpy', source: 'cat-govt', target: 'gov-kvpy', type: 'smoothstep' },

    // Pvt Edges
    { id: 'e-cat-pvt-rel', source: 'cat-pvt', target: 'pvt-rel', type: 'smoothstep' },
    { id: 'e-cat-pvt-hdfc', source: 'cat-pvt', target: 'pvt-hdfc', type: 'smoothstep' },
    { id: 'e-cat-pvt-vid', source: 'cat-pvt', target: 'pvt-vid', type: 'smoothstep' },
    { id: 'e-cat-pvt-lic', source: 'cat-pvt', target: 'pvt-lic', type: 'smoothstep' },
    { id: 'e-cat-pvt-tata', source: 'cat-pvt', target: 'pvt-tata', type: 'smoothstep' },
    { id: 'e-cat-pvt-kotak', source: 'cat-pvt', target: 'pvt-kotak', type: 'smoothstep' },
    { id: 'e-cat-pvt-jindal', source: 'cat-pvt', target: 'pvt-jindal', type: 'smoothstep' },
    { id: 'e-cat-pvt-col', source: 'cat-pvt', target: 'pvt-col', type: 'smoothstep' },
    { id: 'e-cat-pvt-birla', source: 'cat-pvt', target: 'pvt-birla', type: 'smoothstep' },
    { id: 'e-cat-pvt-nsdl', source: 'cat-pvt', target: 'pvt-nsdl', type: 'smoothstep' },
    { id: 'e-cat-pvt-north', source: 'cat-pvt', target: 'pvt-north', type: 'smoothstep' },
    { id: 'e-cat-pvt-fed', source: 'cat-pvt', target: 'pvt-fed', type: 'smoothstep' },
    { id: 'e-cat-pvt-san', source: 'cat-pvt', target: 'pvt-san', type: 'smoothstep' },

    // Talent Edges
    { id: 'e-cat-tal-ntse', source: 'cat-tal', target: 'tal-ntse', type: 'smoothstep' },
    { id: 'e-cat-tal-cst', source: 'cat-tal', target: 'tal-cst', type: 'smoothstep' },
    { id: 'e-cat-tal-sch', source: 'cat-tal', target: 'tal-sch', type: 'smoothstep' },

    { id: 'e2-cr', source: '2', target: 'creative' },
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
    { id: 'e6-6d', source: '6', target: '6d' },

    { id: 'ecr-1', source: 'creative', target: 'cr-1' },
    { id: 'ecr-2', source: 'creative', target: 'cr-2' },
    { id: 'ecr-3', source: 'creative', target: 'cr-3' },

    { id: 'e3-7a', source: '3', target: '7a' },
    { id: 'e3-7b', source: '3', target: '7b' },
    { id: 'e3-7c', source: '3', target: '7c' },
    { id: 'e3-7d', source: '3', target: '7d' },
];

/* ---------------------------------------------------------
   GRADUATION — DETAILED & COMPLETE (SPACED OUT)
--------------------------------------------------------- */
export const gradNodes = [
    ...topNodes,
    // Engineering / Tech
    { id: 'g-btech', label: 'B.Tech / B.E', position: { x: 0, y: 160 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Engineering' },
    { id: 'g-bca', label: 'BCA / B.Sc IT', position: { x: 250, y: 160 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Computer_Applications' },

    // Science / Medical
    { id: 'g-mbbs', label: 'MBBS / BDS', position: { x: 500, y: 160 }, link: 'https://en.wikipedia.org/wiki/Medical_school' },
    { id: 'g-allied', label: 'B.Pharma / Nursing', position: { x: 500, y: 260 }, link: 'https://en.wikipedia.org/wiki/Pharmacy' },
    { id: 'g-bsc', label: 'B.Sc (Pure Sciences)', position: { x: 750, y: 160 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Science' },

    // Commerce / Arts / Design
    { id: 'g-bcom', label: 'B.Com / BBA', position: { x: 1000, y: 160 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Commerce' },
    { id: 'g-ba', label: 'BA / Humanities', position: { x: 1250, y: 160 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Arts' },
    { id: 'g-law', label: 'LLB (Integrated)', position: { x: 1500, y: 160 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Laws' },
    { id: 'g-des', label: 'B.Des / Media', position: { x: 1750, y: 160 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Design' },

    // Level 2: Specific Paths
    { id: 'g-tech-job', label: 'Software / Core Jobs', position: { x: 0, y: 300 }, link: 'https://en.wikipedia.org/wiki/Information_technology' },
    { id: 'g-med-md', label: 'MD / MS (Residency)', position: { x: 500, y: 350 }, link: 'https://en.wikipedia.org/wiki/Residency_(medicine)' },
    { id: 'g-mba-cat', label: 'MBA (CAT/XAT)', position: { x: 1000, y: 300 }, link: 'https://en.wikipedia.org/wiki/Common_Admission_Test' },
    { id: 'g-govt', label: 'UPSC / SSC CGL / Bank PO', position: { x: 1250, y: 380 }, link: 'https://en.wikipedia.org/wiki/Civil_Services_Examination_(India)' },
    { id: 'g-teach', label: 'B.Ed (Teaching)', position: { x: 750, y: 380 }, link: 'https://en.wikipedia.org/wiki/Bachelor_of_Education' },

    // Common Entrances
    { id: 'g-gate', label: 'GATE / PSU Exams', position: { x: 0, y: 400 }, link: 'https://en.wikipedia.org/wiki/Graduate_Aptitude_Test_in_Engineering' },
    { id: 'g-law-job', label: 'Litigation / Corporate Law', position: { x: 1500, y: 260 }, link: 'https://en.wikipedia.org/wiki/Practice_of_law' },
];

export const gradEdges = [
    { id: 'e-g-btech', source: 'topGrad', target: 'g-btech' },
    { id: 'e-g-bca', source: 'topGrad', target: 'g-bca' },
    { id: 'e-g-mbbs', source: 'topGrad', target: 'g-mbbs' },
    { id: 'e-g-bsc', source: 'topGrad', target: 'g-bsc' },
    { id: 'e-g-bcom', source: 'topGrad', target: 'g-bcom' },
    { id: 'e-g-ba', source: 'topGrad', target: 'g-ba' },
    { id: 'e-g-law', source: 'topGrad', target: 'g-law' },
    { id: 'e-g-des', source: 'topGrad', target: 'g-des' },

    { id: 'e-mbbs-allied', source: 'g-mbbs', target: 'g-allied' },

    { id: 'e-tech-job', source: 'g-btech', target: 'g-tech-job' },
    { id: 'e-bca-job', source: 'g-bca', target: 'g-tech-job' },
    { id: 'e-tech-gate', source: 'g-btech', target: 'g-gate' },

    { id: 'e-mbbs-md', source: 'g-mbbs', target: 'g-med-md' },

    { id: 'e-bcom-mba', source: 'g-bcom', target: 'g-mba-cat' },
    { id: 'e-ba-govt', source: 'g-ba', target: 'g-govt' },

    // B.Ed is versatile
    { id: 'e-bsc-bed', source: 'g-bsc', target: 'g-teach' },
    { id: 'e-ba-bed', source: 'g-ba', target: 'g-teach' },

    { id: 'e-law-job', source: 'g-law', target: 'g-law-job' },
];

/* ---------------------------------------------------------
   POST-GRADUATION — DETAILED
--------------------------------------------------------- */
export const pgNodes = [
    ...topNodes,
    // Masters Degrees
    { id: 'pg-mtech', label: 'M.Tech / ME', position: { x: 200, y: 160 }, link: 'https://en.wikipedia.org/wiki/Master_of_Engineering' },
    { id: 'pg-msc', label: 'M.Sc', position: { x: 450, y: 160 }, link: 'https://en.wikipedia.org/wiki/Master_of_Science' },
    { id: 'pg-mba', label: 'MBA', position: { x: 700, y: 160 }, link: 'https://en.wikipedia.org/wiki/Master_of_Business_Administration' },
    { id: 'pg-phd', label: 'PhD / Research', position: { x: 1050, y: 160 }, link: 'https://en.wikipedia.org/wiki/Doctor_of_Philosophy' },

    // Career Outcomes
    { id: 'pg-corp', label: 'Corporate Leadership', position: { x: 700, y: 260 }, link: 'https://en.wikipedia.org/wiki/Management' },
    { id: 'pg-prof', label: 'Professor / Academia', position: { x: 1050, y: 260 }, link: 'https://en.wikipedia.org/wiki/Professor' },
    { id: 'pg-rnd', label: 'R&D Scientist', position: { x: 200, y: 260 }, link: 'https://en.wikipedia.org/wiki/Research_and_development' },
    { id: 'pg-net', label: 'UGC NET (Lectureship)', position: { x: 450, y: 260 }, link: 'https://en.wikipedia.org/wiki/UGC_NET' },
];

export const pgEdges = [
    { id: 'e-pg-mtech', source: 'topPG', target: 'pg-mtech' },
    { id: 'e-pg-msc', source: 'topPG', target: 'pg-msc' },
    { id: 'e-pg-mba', source: 'topPG', target: 'pg-mba' },
    { id: 'e-pg-phd', source: 'topPG', target: 'pg-phd' },

    { id: 'e-mtech-rnd', source: 'pg-mtech', target: 'pg-rnd' },
    { id: 'e-msc-net', source: 'pg-msc', target: 'pg-net' },
    { id: 'e-mba-corp', source: 'pg-mba', target: 'pg-corp' },
    { id: 'e-phd-prof', source: 'pg-phd', target: 'pg-prof' },
];
