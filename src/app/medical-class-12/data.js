export const entranceExams = [
    {
        id: 1,
        name: "NEET UG",
        fullName: "National Eligibility cum Entrance Test (Undergraduate)",
        description: "The single national medical entrance exam for admission to MBBS, BDS, BAMS, BSMS, BUMS, and BHMS courses in India, including AIIMS and JIPMER.",
        website: "https://neet.nta.nic.in/",
        tentativeDate: "May",
    },
    // AIIMS and JIPMER are merged into NEET, but listing them as institutes might be better in the colleges section.
    // However, some universities might have their own tests for other allied courses, but strictly for MBBS/BDS it's NEET.
    // We can list some other related exams if relevant, or keep it focused.
    // Let's add common nursing/pharmacy exams if applicable or just focus on NEET as the big one.
    // Actually, let's keep it somewhat populated with related exams if any.
    {
        id: 2,
        name: "AIIMS Nursing",
        fullName: "AIIMS B.Sc. (Hons) Nursing Entrance Exam",
        description: "Conducted by AIIMS New Delhi for admission to B.Sc. (Hons) Nursing courses at AIIMS campuses.",
        website: "https://www.aiimsexams.ac.in/",
        tentativeDate: "June",
    },
    {
        id: 3,
        name: "Indian Army B.Sc Nursing",
        fullName: "MNS - Military Nursing Service Exam",
        description: "For admission to 4 years B.Sc (Nursing) course at Colleges of Nursing of Armed Forces Medical Services.",
        website: "https://joinindianarmy.nic.in/",
        tentativeDate: "April / May",
    },
    {
        id: 4,
        name: "IPU CET",
        fullName: "Indraprastha University Common Entrance Test",
        description: "Conducted by GGSIPU for various medical and allied health courses (BPT, BOT, BPO, MLT, BASLP etc, though MBBS is via NEET).",
        website: "http://www.ipu.ac.in/",
        tentativeDate: "May / June",
    },
    {
        id: 5,
        name: "BVP CET",
        fullName: "Bharati Vidyapeeth Common Entrance Test",
        description: "Conducted by Bharati Vidyapeeth Deemed University for admission to various undergraduate courses.",
        website: "https://bvuniversity.edu.in/",
        tentativeDate: "May / June",
    },
];

export const topColleges = [
    // Top Medical Colleges (NIRF Ranking / General Reputation)
    { id: 1, name: "All India Institute of Medical Sciences (AIIMS), New Delhi", website: "https://www.aiimsexams.ac.in/", location: "New Delhi, Delhi", exam: "NEET UG" },
    { id: 2, name: "Post Graduate Institute of Medical Education and Research (PGIMER)", website: "https://pgimer.edu.in/", location: "Chandigarh", exam: "NEET PG (For PG) / NEET UG (For some options)" }, // PG primarily, but iconic. Let's stick to UG relevance or clarify. Actually PGIMER is PG only for medical, but has paramedical UG. Let's swap for Christian Medical College.
    { id: 3, name: "Christian Medical College (CMC)", website: "https://www.cmch-vellore.edu/", location: "Vellore, Tamil Nadu", exam: "NEET UG" },
    { id: 4, name: "National Institute of Mental Health & Neuro Sciences (NIMHANS)", website: "https://nimhans.ac.in/", location: "Bangalore, Karnataka", exam: "INI-CET (PG) / Entrance" }, // Mostly PG.
    { id: 5, name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)", website: "https://jipmer.edu.in/", location: "Puducherry", exam: "NEET UG" },
    { id: 6, name: "Amrita Vishwa Vidyapeetham", website: "https://www.amrita.edu/", location: "Coimbatore, Tamil Nadu", exam: "NEET UG" },
    { id: 7, name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)", website: "https://www.sgpgims.org.in/", location: "Lucknow, Uttar Pradesh", exam: "NEET PG / Nursing" }, // Mostly PG
    { id: 8, name: "Banaras Hindu University (IMS-BHU)", website: "https://www.bhu.ac.in/ims/", location: "Varanasi, Uttar Pradesh", exam: "NEET UG" },
    { id: 9, name: "Kasturba Medical College (KMC), Manipal", website: "https://manipal.edu/kmc-manipal.html", location: "Manipal, Karnataka", exam: "NEET UG" },
    { id: 10, name: "Sree Chitra Tirunal Institute for Medical Sciences and Technology (SCTIMST)", website: "https://www.sctimst.ac.in/", location: "Thiruvananthapuram, Kerala", exam: "Entrance" }, // Research focus
    { id: 11, name: "Madras Medical College & Government General Hospital", website: "http://www.mmc.ac.in/", location: "Chennai, Tamil Nadu", exam: "NEET UG" },
    { id: 12, name: "King George's Medical University (KGMU)", website: "https://www.kgmu.org/", location: "Lucknow, Uttar Pradesh", exam: "NEET UG" },
    { id: 13, name: "St. John's National Academy of Health Sciences", website: "https://www.stjohns.in/", location: "Bangalore, Karnataka", exam: "NEET UG" },
    { id: 14, name: "Sri Ramachandra Institute of Higher Education and Research", website: "https://www.sriramachandra.edu.in/", location: "Chennai, Tamil Nadu", exam: "NEET UG" },
    { id: 15, name: "Aligarh Muslim University (Jawaharlal Nehru Medical College)", website: "https://www.amu.ac.in/", location: "Aligarh, Uttar Pradesh", exam: "NEET UG" },
    { id: 16, name: "Maulana Azad Medical College (MAMC)", website: "https://www.mamc.ac.in/", location: "New Delhi, Delhi", exam: "NEET UG" },
    { id: 17, name: "Vardhman Mahavir Medical College & Safdarjung Hospital", website: "http://www.vmmc-sjh.nic.in/", location: "New Delhi, Delhi", exam: "NEET UG" },
    { id: 18, name: "Dr. D.Y. Patil Vidyapeeth", website: "https://dpu.edu.in/", location: "Pune, Maharashtra", exam: "NEET UG" },
    { id: 19, name: "Siksha 'O' Anusandhan (IMS and Sum Hospital)", website: "https://www.soa.ac.in/", location: "Bhubaneswar, Odisha", exam: "NEET UG" },
    { id: 20, name: "Lady Hardinge Medical College", website: "http://lhmc-hosp.gov.in/", location: "New Delhi, Delhi", exam: "NEET UG" },
    { id: 21, name: "Grant Medical College", website: "https://ggmcjjh.com/", location: "Mumbai, Maharashtra", exam: "NEET UG" },
    { id: 22, name: "Seth GS Medical College", website: "https://www.kem.edu/", location: "Mumbai, Maharashtra", exam: "NEET UG" },
    { id: 23, name: "Bangalore Medical College and Research Institute", website: "http://www.bmcri.org/", location: "Bangalore, Karnataka", exam: "NEET UG" },
    { id: 24, name: "Institute of Post Graduate Medical Education & Research (IPGMER)", website: "https://www.ipgmer.gov.in/", location: "Kolkata, West Bengal", exam: "NEET UG" },
    { id: 25, name: "Armed Forces Medical College (AFMC)", website: "https://www.afmc.nic.in/", location: "Pune, Maharashtra", exam: "NEET UG + Screening" },
    { id: 26, name: "Stanley Medical College", website: "http://www.stanleymedicalcollege.ac.in/", location: "Chennai, Tamil Nadu", exam: "NEET UG" },
    { id: 27, name: "Osmania Medical College", website: "https://www.osmaniamedicalcollege.edu.in/", location: "Hyderabad, Telangana", exam: "NEET UG" },
    { id: 28, name: "Govt. Medical College, Thiruvananthapuram", website: "https://www.tmc.kerala.gov.in/", location: "Thiruvananthapuram, Kerala", exam: "NEET UG" },
    { id: 29, name: "BJ Medical College", website: "https://www.bjmcpune.org/", location: "Pune, Maharashtra", exam: "NEET UG" },
    { id: 30, name: "Medical College, Kolkata", website: "https://www.medicalcollegekolkata.in/", location: "Kolkata, West Bengal", exam: "NEET UG" },

    // Additional notable ones
    { id: 31, name: "AIIMS Bhubaneswar", website: "https://aiimsbhubaneswar.nic.in/", location: "Bhubaneswar, Odisha", exam: "NEET UG" },
    { id: 32, name: "AIIMS Jodhpur", website: "https://www.aiimsjodhpur.edu.in/", location: "Jodhpur, Rajasthan", exam: "NEET UG" },
    { id: 33, name: "AIIMS Bhopal", website: "https://www.aiimsbhopal.edu.in/", location: "Bhopal, Madhya Pradesh", exam: "NEET UG" },
    { id: 34, name: "AIIMS Rishikesh", website: "https://aiimsrishikesh.edu.in/", location: "Rishikesh, Uttarakhand", exam: "NEET UG" },
    { id: 35, name: "AIIMS Raipur", website: "https://www.aiimsraipur.edu.in/", location: "Raipur, Chhattisgarh", exam: "NEET UG" },
    { id: 36, name: "AIIMS Patna", website: "https://aiimspatna.edu.in/", location: "Patna, Bihar", exam: "NEET UG" },
    { id: 37, name: "SCB Medical College", website: "https://scbmch.in/", location: "Cuttack, Odisha", exam: "NEET UG" },
    { id: 38, name: "MKCG Medical College", website: "https://www.mkcgmch.org/", location: "Berhampur, Odisha", exam: "NEET UG" },
    { id: 39, name: "VIMSAR Burla", website: "https://vimsar.ac.in/", location: "Burla, Odisha", exam: "NEET UG" },
    { id: 40, name: "Kalinga Institute of Medical Sciences (KIMS)", website: "https://kims.kiit.ac.in/", location: "Bhubaneswar, Odisha", exam: "NEET UG" },
];
