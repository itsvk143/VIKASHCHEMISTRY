// Side-by-Side Career Comparisons Database
export const comparisonsData = [
  {
    id: "mbbs-vs-bds",
    title: "MBBS vs. BDS",
    category: "Medical & Dental",
    description: "Comparing India's two most sought-after medical degrees after Class 12 PCB.",
    optionA: {
      name: "MBBS (Medicine & Surgery)",
      duration: "5.5 Years (4.5 Yrs + 1 Yr Internship)",
      eligibility: "NEET UG with high cutoff (600+ in general for Govt Medical Colleges)",
      curriculumFocus: "Complete human anatomy, clinical medicine, general surgery, pharmacology, pathology",
      workLifeBalance: "High emergency duty, rigorous night shifts during residency, intense clinical demands",
      setupCost: "High initial hospital infrastructure or requires PG specialization for top private clinic",
      averageStartingSalary: "₹60,000 – ₹1.2 Lakhs/month (Junior Resident)",
      seniorEarningPotential: "₹2.5 Lakhs to ₹10+ Lakhs/month with MD/MS or super-speciality",
      verdict: "Ideal if you have high stamina for 8–10 years of deep medical training and passion for critical patient care."
    },
    optionB: {
      name: "BDS (Dental Surgery)",
      duration: "5 Years (4 Yrs + 1 Yr Paid Internship)",
      eligibility: "NEET UG with comparatively accessible cutoff (480–550 for top Govt Dental Colleges)",
      curriculumFocus: "Oral and maxillofacial pathology, orthodontics, aesthetic dentistry, prosthodontics",
      workLifeBalance: "Predictable clinic hours, rarely night emergency calls, high lifestyle flexibility",
      setupCost: "Moderate to establish private dental clinic with dental chair and digital X-ray",
      averageStartingSalary: "₹35,000 – ₹65,000/month (Associate Dentist)",
      seniorEarningPotential: "₹1.5 Lakhs to ₹5+ Lakhs/month with private practice and cosmetic dentistry",
      verdict: "Ideal if you want clinical autonomy, love fine hand craftsmanship, and prioritize family-friendly work hours."
    }
  },
  {
    id: "btech-vs-bsc",
    title: "B.Tech (CSE) vs. B.Sc (Computer Science / Data Science)",
    category: "Tech & Computing",
    description: "Understanding the difference between an engineering degree and a science degree in computing.",
    optionA: {
      name: "B.Tech in Computer Science",
      duration: "4 Years (Professional Engineering Degree)",
      eligibility: "Class 12 PCM via JEE Main / State CETs / Private entrance tests",
      curriculumFocus: "Hardware architecture, compiler design, algorithms, operating systems, software engineering",
      workLifeBalance: "Dynamic tech corporate environment, hybrid work options, rapid sprint cycles",
      setupCost: "College tuition varies (₹5 Lakhs to ₹20 Lakhs across 4 years)",
      averageStartingSalary: "₹8 LPA – ₹25+ LPA (Product companies) / ₹4.5 LPA (Service firms)",
      seniorEarningPotential: "₹40 LPA to ₹1+ Crore/annum as Staff Engineer / Engineering Director",
      verdict: "The most widely recognized industry gateway for high-paying software product companies (Google, Microsoft, Amazon)."
    },
    optionB: {
      name: "B.Sc in Computer Science / Data Analytics",
      duration: "3 or 4 Years (As per NEP 2020)",
      eligibility: "Class 12 with Math / CS through CUET UG or college merit",
      curriculumFocus: "Theoretical computer science, mathematics, statistics, data analytics, programming languages",
      workLifeBalance: "Excellent balance; strong foundation for academic research or IT analyst roles",
      setupCost: "Very affordable (₹30,000 to ₹3 Lakhs total degree cost at central/state universities)",
      averageStartingSalary: "₹3.5 LPA – ₹7 LPA (Starting IT Analyst / Junior Developer)",
      seniorEarningPotential: "₹25 LPA to ₹50+ LPA (Especially after MCA or MS abroad)",
      verdict: "Cost-effective, excellent for students aiming for MCA/MS abroad, or entering data science without JEE pressure."
    }
  },
  {
    id: "ca-vs-cma",
    title: "Chartered Accountancy (CA) vs. Cost & Management Accountancy (CMA)",
    category: "Commerce & Finance",
    description: "Deciding between statutory auditing/taxation vs. industrial cost control and management advisory.",
    optionA: {
      name: "Chartered Accountancy (CA)",
      duration: "4.5 to 5 Years (ICAI)",
      eligibility: "Class 12 pass in any stream via CA Foundation",
      curriculumFocus: "Statutory auditing, taxation laws, corporate financial reporting, forensic audits",
      workLifeBalance: "High pressure during audit and tax filing seasons (July to October)",
      setupCost: "Low exam registration fees (Under ₹1 Lakh total for all levels)",
      averageStartingSalary: "₹9 LPA – ₹22 LPA (Campus Average via ICAI)",
      seniorEarningPotential: "₹40 LPA to ₹80+ LPA / Partner in Audit Firm / CFO",
      verdict: "Best for entering auditing, corporate taxation, equity advisory, and launching independent public accounting practice."
    },
    optionB: {
      name: "Cost & Management Accountancy (CMA)",
      duration: "3 to 4 Years (ICMAI)",
      eligibility: "Class 12 pass in any stream via CMA Foundation",
      curriculumFocus: "Cost audits, manufacturing cost reduction, pricing strategy, operational efficiency",
      workLifeBalance: "Stable corporate work-life balance inside manufacturing, oil, auto, and PSU enterprises",
      setupCost: "Very low exam fees (Under ₹75,000 for entire course)",
      averageStartingSalary: "₹7.5 LPA – ₹16 LPA (PSU and corporate campus recruitments)",
      seniorEarningPotential: "₹30 LPA to ₹60+ LPA as General Manager / Head of Cost Control",
      verdict: "Best for students targeting manufacturing giants (Tata, Reliance), PSUs (ONGC, BHEL), and operational cost leadership."
    }
  },
  {
    id: "iit-vs-iiser",
    title: "Engineering (IIT) vs. Pure Science Research (IISER / NISER)",
    category: "Science Careers",
    description: "Building technology and products vs. discovering new scientific knowledge and fundamental laws.",
    optionA: {
      name: "B.Tech at IIT",
      duration: "4 Years",
      eligibility: "JEE Advanced top ranks (< 15,000)",
      curriculumFocus: "Applied engineering, technology design, coding, prototyping, commercial products",
      workLifeBalance: "Fast-paced corporate and startup culture",
      setupCost: "₹10–12 Lakhs total (with substantial fee waivers for low-income brackets)",
      averageStartingSalary: "₹15 LPA – ₹40+ LPA",
      seniorEarningPotential: "Uncapped corporate, startup equity, and executive compensation",
      verdict: "Best for students who want to build tech, lead startups, code products, or enter high-paying corporate roles."
    },
    optionB: {
      name: "BS-MS at IISER / NISER",
      duration: "5 Years Integrated Dual Degree",
      eligibility: "IAT (IISER Aptitude Test) or NEST (NISER)",
      curriculumFocus: "Fundamental physics, chemistry, biology, mathematics, quantum mechanics, laboratory synthesis",
      workLifeBalance: "Academic and lab research schedule; intellectually enriching",
      setupCost: "Very low; most students receive monthly scholarships (INSPIRE / Institute grant)",
      averageStartingSalary: "Ph.D. Fellowships ($30k–$45k/yr in US/Europe) → ₹12–25 LPA as R&D Scientist",
      seniorEarningPotential: "Tenured Professor, Chief Scientist at NASA/ISRO/BARC, or Biotech Director",
      verdict: "Best for curious scientific minds who want to conduct Nobel-tier discoveries, publish papers, and research at top global labs."
    }
  }
];
