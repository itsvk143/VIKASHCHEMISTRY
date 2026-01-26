"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Download, 
  BookOpen, 
  FileText, 
  ChevronLeft, 
  Search, 
  Atom, 
  Layers,
  Dna,
  Calculator,
  Library,
  FlaskConical
} from "lucide-react";

// --- 1. CHAPTER CATEGORIZATION ---
const groupedChapters = {
  Physical: [
    "MOLE CONCEPT",
    "STRUCTURE OF ATOM",
    "STATES OF MATTER",
    "THERMODYNAMICS",
    "CHEMICAL EQUILIBRIUM",
    "IONIC EQULIBRIUM",
    "REDOX REACTION",
    "SOLID STATE",
    "SOLUTION AND COLLIGATIVE PROPERTIES",
    "ELECTROCHEMISTRY",
    "CHEMICAL KINETICS"
  ],
  Organic: [
    "NOMENCLATURE",
    "ISOMERISM",
    "GOC 1 & 2",
    "HYDROCARBON",
    "REACTION MECHANISM",
    "HALOARENE & HALOALKANES",
    "ALCOHAL PHENOL & ETHER",
    "ALDEHYDE & KETONES",
    "CARBOXYLIC ACID & ITS DERIVATIVE",
    "NITROGEN CONTAINING COMPOUND",
    "BIOMOLECULES",
    "POC",
    "POLYMERS",
    "CHEMISTRY IN EVERYDAY LIFE"
  ],
  Inorganic: [
    "PERIODIC TABLES",
    "CHEMICAL BONDING",
    "HYDROGEN",
    "S BLOCK",
    "P BLOCK(GROUP 13 & 14)",
    "P BLOCK(GROUP 15 & 16)",
    "P BLOCK(GROUP 17 & 18)",
    "D & F BLOCK",
    "COORDINATION COMPOUND",
    "METALLURGY",
    "QUALITATIVE ANALYSIS"
  ],
  Other: [
    "IMPORTANT BOOK",
    "TEST PAPERS",
    "PRACTICE QUESTION",
    "mnemonic"
  ]
};

// --- 2. BOOK DATA ---
const importantBooks = {
  Physical: [
    { name: "Advance Problem in Physical by N Avasthi ", link: "https://drive.google.com/file/d/1ZLB5A542Ow8SqWAkUSJDpcmUpM8eL6mj/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1ZLB5A542Ow8SqWAkUSJDpcmUpM8eL6mj/view?usp=drive_link" },
    { name: "Cengage Book Part 1", link: "https://drive.google.com/drive/folders/1Ra_4YLp2JAriZbNI2tH5Cjpvk3hxEDBE?usp=drive_link", downloadLink: "https://drive.google.com/drive/folders/1Ra_4YLp2JAriZbNI2tH5Cjpvk3hxEDBE?usp=drive_link" },
    { name: "Cengage Book Part 2", link: "https://drive.google.com/drive/folders/1wgHvFylGTRjx7xn6JjK2ieUKCvYSi4Fw?usp=drive_link", downloadLink: "https://drive.google.com/drive/folders/1wgHvFylGTRjx7xn6JjK2ieUKCvYSi4Fw?usp=drive_link" },
    { name: "GRB O P Tondon ", link: "https://drive.google.com/file/d/19wN71LUnzeIcl-F2EGAo9mN-MAY-ZFU2/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/19wN71LUnzeIcl-F2EGAo9mN-MAY-ZFU2/view?usp=drive_link" },
  ],
  Organic: [
    { name: "Organic Chemistry by J. Clayden ", link: "https://drive.google.com/file/d/1koGvwreMkH76G1Xgoh5Owx4vAMiav7bg/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1koGvwreMkH76G1Xgoh5Owx4vAMiav7bg/view?usp=drive_link" },
    { name: "Advance Problem in Organic Chemistry by M S Chouhan  ", link: "https://drive.google.com/file/d/1uxkiOxQy--1IMZWUfS0AJTaZPgwO8SAP/view?usp=drive_link", downloadLink: "https://od.lk/d/MzJfNDAzNzEyMjNf/Advanced%20Problems%20in%20Organic%20Chemistry%20-%20M%20S%20Chauhan.pdf" },
    { name: "Advance Problem in Organic Chemistry by Himanshu pandey ", link: "https://drive.google.com/file/d/1zTW2QF6P5KqbxyYHeOV_Zj0WrN2-G_3W/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1zTW2QF6P5KqbxyYHeOV_Zj0WrN2-G_3W/view?usp=drive_link" },
    { name: "Advance Problem in Organic Chemistry by Akshay Chaudhary", link: "https://drive.google.com/file/d/1RIBaJK8IVNufyPDAAIlAW60m4xi7tz_L/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1RIBaJK8IVNufyPDAAIlAW60m4xi7tz_L/view?usp=drive_link" },
    { name: "Cengage Book Part 1", link: "https://drive.google.com/drive/folders/1I2c8kDN8XYSp0P_rVCk3JnuZxwgx1SYb?usp=drive_link", downloadLink: "https://drive.google.com/drive/folders/1I2c8kDN8XYSp0P_rVCk3JnuZxwgx1SYb?usp=drive_link" },
    { name: "Cengage Book Part 2", link: "https://drive.google.com/drive/folders/1pNqLQiH-9YLTL-n9twRYCWOhnfvQQAFY?usp=drive_link", downloadLink: "https://drive.google.com/drive/folders/1pNqLQiH-9YLTL-n9twRYCWOhnfvQQAFY?usp=drive_link" },
    { name: "Peter Sykes", link: "https://drive.google.com/file/d/1VEdNuiUpyAGEiRhKoKQQnvthnUTAYrQH/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1VEdNuiUpyAGEiRhKoKQQnvthnUTAYrQH/view?usp=drive_link" },
  ],
  Inorganic: [
    { name: "Concise Inorganic Chemistry by J.D. Lee", link: "https://drive.google.com/file/d/132k2vCUNwDrqr3W71W0w9kX--S0uavnZ/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/132k2vCUNwDrqr3W71W0w9kX--S0uavnZ/view?usp=drive_link" },
    { name: "Cengage Book Part 1", link: "https://drive.google.com/drive/folders/18Qf5IPw2eOeyCyZ1r4G05woEjsDkjtNy?usp=drive_link", downloadLink: "https://drive.google.com/drive/folders/18Qf5IPw2eOeyCyZ1r4G05woEjsDkjtNy?usp=drive_link" },
    { name: "Cengage Book Part 2", link: "https://drive.google.com/drive/folders/1QHwf72cbOwCsEF1AG_ZwlS_DBIpkp_zs?usp=drive_link", downloadLink: "https://drive.google.com/drive/folders/1QHwf72cbOwCsEF1AG_ZwlS_DBIpkp_zs?usp=drive_link" },
    { name: "V Joshi Part 1", link: " https://drive.google.com/file/d/1z5NQlVTNXyFHaY3XPUXGITSx4x50oUeg/view?usp=drive_link", downloadLink: " https://drive.google.com/file/d/1z5NQlVTNXyFHaY3XPUXGITSx4x50oUeg/view?usp=drive_link" },
    { name: "V Joshi Part 2", link: " https://drive.google.com/file/d/1QyQ5wsqYX87nXGtnptkuTSsKly5yd8BG/view?usp=drive_link", downloadLink: " https://drive.google.com/file/d/1QyQ5wsqYX87nXGtnptkuTSsKly5yd8BG/view?usp=drive_link" },
    { name: "V K Jaishwal Part 1", link: "https://drive.google.com/file/d/1cPTwUSMuya8aYKm0ILGbDs2msalZB6dU/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1cPTwUSMuya8aYKm0ILGbDs2msalZB6dU/view?usp=drive_link" },
    { name: "V K Jaishwal Part 2", link: " https://drive.google.com/file/d/1XGUcsbDu7nWgaRhzkTQOCn0U7eQVcPgG/view?usp=drive_link", downloadLink: " https://drive.google.com/file/d/1XGUcsbDu7nWgaRhzkTQOCn0U7eQVcPgG/view?usp=drive_link" },
  ],
  Other: [
     { name: "Complete Chemistry Collection", link: "#", downloadLink: "#" }, // Placeholder if needed
  ]
};

// --- 3. FULL PDF DATA ---
const pdfData = {
  "MOLE CONCEPT": [
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "DPP1", link: "https://drive.google.com/file/d/1AYkla6sZ50i4HM5S7qXytAzMrHxX8eSX/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1AYkla6sZ50i4HM5S7qXytAzMrHxX8eSX/view?usp=drive_link" },
    { name: "DPP2", link: "https://drive.google.com/file/d/1hn0ynj4pB8b_V_Ac3MBs5RPW7iXJZ18s/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1hn0ynj4pB8b_V_Ac3MBs5RPW7iXJZ18s/view?usp=drive_link" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
  ],
  "STRUCTURE OF ATOM": [
    { name: "Printed Notes", link: "https://drive.google.com/file/d/1nxNlR1W3GWkaEhj8-ATmqL1k1s90UBZr/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1nxNlR1W3GWkaEhj8-ATmqL1k1s90UBZr/view?usp=drive_link" },
    { name: "DPP1", link: "https://drive.google.com/file/d/1YSZkSN2t--LoTdTudV8WISh513iGwMhX/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1YSZkSN2t--LoTdTudV8WISh513iGwMhX/view?usp=drive_link" },
    { name: "DPP2", link: "https://drive.google.com/file/d/1RxZWsgMkmtnAns1wZP8rHBZRmRWKKn-U/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1RxZWsgMkmtnAns1wZP8rHBZRmRWKKn-U/view?usp=drive_link" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/1uFr-alXpxXgzxXrzVnyDtxG0qkoCavBh/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1uFr-alXpxXgzxXrzVnyDtxG0qkoCavBh/view?usp=drive_link" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
  ],
  "PERIODIC TABLES": [
    { name: "Printed Notes", link: "https://drive.google.com/file/d/16RfjhNmRXmgqMiEiN8BA0dYam9nU6sQH/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/16RfjhNmRXmgqMiEiN8BA0dYam9nU6sQH/view?usp=drive_link" },
    { name: "DPP1", link: "https://drive.google.com/file/d/1LKW6AGz2KQf86W0k1RBsQeoBkxn9Mt_n/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1LKW6AGz2KQf86W0k1RBsQeoBkxn9Mt_n/view?usp=drive_link" },
    { name: "DPP2", link: "https://drive.google.com/file/d/1FfyO_YthDU_XHSrWatcgMKlwOnPlHct9/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1FfyO_YthDU_XHSrWatcgMKlwOnPlHct9/view?usp=drive_link" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/16hjw39bILCBPnwMeSt8fHz1pbp3V0wxF/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/16hjw39bILCBPnwMeSt8fHz1pbp3V0wxF/view?usp=drive_link" },
  ],
  "CHEMICAL BONDING": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/1MS24k4rs7MibnRQDGzKNWnhMKbUwfepF/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1MS24k4rs7MibnRQDGzKNWnhMKbUwfepF/view?usp=drive_link" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/1xGLdJ9j-9RbhoFZcMM_96nfKWEf_TU5F/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1xGLdJ9j-9RbhoFZcMM_96nfKWEf_TU5F/view?usp=drive_link" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/1w2iRvt8VJZ6t_AyFOVpU0OO4tp5IogW2/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1w2iRvt8VJZ6t_AyFOVpU0OO4tp5IogW2/view?usp=drive_link" },
    { name: "DPP1", link: "https://drive.google.com/file/d/1zd2OyKTbB6vfoYH69h_FcsECjdfXwNfl/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1zd2OyKTbB6vfoYH69h_FcsECjdfXwNfl/view?usp=drive_link" },
    { name: "DPP2", link: "https://drive.google.com/file/d/1FnpR8SGOGvsnCdnzfmyTJVoPpvehMWj4/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1FnpR8SGOGvsnCdnzfmyTJVoPpvehMWj4/view?usp=drive_link" },
    { name: "DPP3", link: "https://drive.google.com/file/d/1SjL829VVzHO_-O8N2GqrJqWqm3_OpLa0/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1SjL829VVzHO_-O8N2GqrJqWqm3_OpLa0/view?usp=drive_link" },
    { name: "DPP4", link: "https://drive.google.com/file/d/1d4htny-dn1gp1l44rv-Vyi3izTq9Ozg1/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1d4htny-dn1gp1l44rv-Vyi3izTq9Ozg1/view?usp=drive_link" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
  ],
  "STATES OF MATTER": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "THERMODYNAMICS": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "CHEMICAL EQUILIBRIUM": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "IONIC EQULIBRIUM": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "REDOX REACTION": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "SOLID STATE": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "SOLUTION AND COLLIGATIVE PROPERTIES": [
    { name: "DPP1", link: "https://drive.google.com/file/d/13UAWDVP0LjrWhkmWd01305AN5ioiWukh/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/13UAWDVP0LjrWhkmWd01305AN5ioiWukh/view?usp=drive_link" },
    { name: "DPP2", link: "https://drive.google.com/file/d/1WgGfHZpRSX92tVS-zTPW4uWp1Z3fi9Kr/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1WgGfHZpRSX92tVS-zTPW4uWp1Z3fi9Kr/view?usp=drive_link" },
  ],
  "ELECTROCHEMISTRY": [
    { name: "Printed Notes", link: "https://drive.google.com/file/d/1rq7Cq18xJ7DA3ettkv71pTviBjz39OX-/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1rq7Cq18xJ7DA3ettkv71pTviBjz39OX-/view?usp=drive_link" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/1a9-Wdxt0im8R12jgP85-DTwd8j6XWGrl/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1a9-Wdxt0im8R12jgP85-DTwd8j6XWGrl/view?usp=drive_link" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
  ],
  "CHEMICAL KINETICS": [
    { name: "DPP", link: "https://drive.google.com/file/d/19M1sO2RKynfYFBc_-Gh2BKGxXasn0bJ9/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/19M1sO2RKynfYFBc_-Gh2BKGxXasn0bJ9/view?usp=drive_link" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/1JGLC7WaN15nAb4c2mdi7sb5nHDzgBew9/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1JGLC7WaN15nAb4c2mdi7sb5nHDzgBew9/view?usp=drive_link" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/1awoX61K6YDwGRXozTrFrA4mHKwJNWYoc/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1awoX61K6YDwGRXozTrFrA4mHKwJNWYoc/view?usp=drive_link" },
  ],
  "NOMENCLATURE": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "ISOMERISM": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "GOC 1 & 2": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "HYDROCARBON": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "REACTION MECHANISM": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "HALOARENE & HALOALKANES": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "ALCOHAL PHENOL & ETHER": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "ALDEHYDE & KETONES": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "CARBOXYLIC ACID & ITS DERIVATIVE": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "NITROGEN CONTAINING COMPOUND": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "BIOMOLECULES": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "POC": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "CHEMISTRY IN EVERYDAY LIFE": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "HYDROGEN": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "S BLOCK": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/1pHmCkcYINw4tidMRCvhancq-H5r3c4bZ/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1pHmCkcYINw4tidMRCvhancq-H5r3c4bZ/view?usp=drive_link" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/1VPZz36ih3gCqfdQNKOoGxHa7JXKhC1aO/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1VPZz36ih3gCqfdQNKOoGxHa7JXKhC1aO/view?usp=drive_link" },
  ],
  "P BLOCK(GROUP 13 & 14)" : [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/1ZyxoD2lGLKnbg8v96B2zHd40QFUe3Ykb/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1ZyxoD2lGLKnbg8v96B2zHd40QFUe3Ykb/view?usp=drive_link" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/1NcAvVTI-P5Hs-WiY4zv-alBqjzZ7NZKM/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1NcAvVTI-P5Hs-WiY4zv-alBqjzZ7NZKM/view?usp=drive_link" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
  ],
  "P BLOCK(GROUP 15 & 16)": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/1chwTfsLDaLlgdXETeOjV6to850Jp14na/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1chwTfsLDaLlgdXETeOjV6to850Jp14na/view?usp=drive_link" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/1GZyiVTZOrSlap67CE_DCcBZ6vUUiJr15/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1GZyiVTZOrSlap67CE_DCcBZ6vUUiJr15/view?usp=drive_link" },
  ],
  "P BLOCK(GROUP 17 & 18)": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/1YVdq0g47nx3-5pEMpLoWkI9wQhXjaa6o/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1YVdq0g47nx3-5pEMpLoWkI9wQhXjaa6o/view?usp=drive_link" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/1pGhzv8VT698ab4fU3ZVPECVzTyBOCHXr/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1pGhzv8VT698ab4fU3ZVPECVzTyBOCHXr/view?usp=drive_link" },
  ],
  "D & F BLOCK": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/1zEGPy42KLJJq7Svq7-3ea4Lkyd7qdyZB/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1zEGPy42KLJJq7Svq7-3ea4Lkyd7qdyZB/view?usp=drive_link" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/18IieUmat2fsavyYx0Mz2DJU75v3LmNPS/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/18IieUmat2fsavyYx0Mz2DJU75v3LmNPS/view?usp=drive_link" },
  ],
  "COORDINATION COMPOUND": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/18wii4ml6Qi9KeqCihT4MIWkx992JjRO_/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/18wii4ml6Qi9KeqCihT4MIWkx992JjRO_/view?usp=drive_link" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/1QGYtc6VizSPNpyJUMmeufypKLBbzucFG/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1QGYtc6VizSPNpyJUMmeufypKLBbzucFG/view?usp=drive_link" },
  ],
   "TEST PAPERS": [
     { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
     { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
     { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
     { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
   ],
   "QUALITATIVE ANALYSIS": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "METALLURGY": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "POLYMERS": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
};

// --- 4. HELPER FUNCTIONS ---
const getCategoryStyle = (category) => {
  switch(category) {
    case 'Physical': return { 
      icon: <Calculator className="w-5 h-5" />, 
      color: 'text-blue-400', 
      border: 'border-blue-500/30',
      bg: 'bg-blue-500/10'
    };
    case 'Organic': return { 
      icon: <Dna className="w-5 h-5" />, 
      color: 'text-emerald-400', 
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/10'
    };
    case 'Inorganic': return { 
      icon: <Atom className="w-5 h-5" />, 
      color: 'text-purple-400', 
      border: 'border-purple-500/30',
      bg: 'bg-purple-500/10'
    };
    default: return { 
      icon: <Library className="w-5 h-5" />, 
      color: 'text-amber-400', 
      border: 'border-amber-500/30',
      bg: 'bg-amber-500/10'
    };
  }
};

const ResourceList = ({ items, compact = false }) => {
  if (!items || items.length === 0) return null;
  
  return (
    <div className={`grid gap-3 ${compact ? 'content-start' : ''}`}>
      {items.map((item, idx) => (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          key={idx}
          className={`group flex flex-col ${compact ? 'items-stretch' : 'sm:flex-row sm:items-center'} justify-between p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 rounded-lg transition-all duration-300`}
        >
          <div className="flex items-center gap-3 mb-2 sm:mb-0">
            {!compact && (
               <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                 <FileText className="w-4 h-4" />
               </div>
            )}
            <span className={`font-medium text-slate-200 group-hover:text-white transition-colors ${compact ? 'text-sm' : ''}`}>
              {item.name}
            </span>
          </div>

          <div className={`flex items-center gap-2 ${compact ? 'mt-2' : 'w-full sm:w-auto'}`}>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex-1 hover:bg-slate-700 text-slate-300 h-8 text-xs"
              asChild
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">View</a>
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 h-8 text-xs"
              asChild
            >
              <a href={item.downloadLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Download className="w-3 h-3" />
                <span>Download</span>
              </a>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// --- 5. MAIN COMPONENT ---
const JEE_MAINS = () => {
  const [activeMainTab, setActiveMainTab] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-[95rem] mx-auto">
        
        <AnimatePresence mode="wait">
          {!activeMainTab ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
              key="dashboard"
            >
              {/* Header & Search */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    Chemistry Dashboard
                  </h1>
                  <p className="text-slate-400 mt-1">Select a chapter from the categories below</p>
                </div>
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                  <Input 
                    placeholder="Search chapters..." 
                    className="pl-10 bg-slate-900 border-slate-800 focus:border-blue-500 transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* 4-COLUMN CATEGORY GRID */}
              <ScrollArea className="h-[75vh] pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pb-12">
                  
                  {Object.entries(groupedChapters).map(([category, chapters], catIdx) => {
                    const style = getCategoryStyle(category);
                    
                    // Filter chapters within this category
                    const filteredChapters = chapters.filter(c => 
                      c.toLowerCase().includes(searchTerm.toLowerCase())
                    );

                    // If searching and no matches in this category, hide it
                    if (searchTerm && filteredChapters.length === 0) return null;

                    return (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: catIdx * 0.1 }}
                        className="flex flex-col h-full bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden"
                      >
                        {/* Category Header */}
                        <div className={`p-4 border-b border-slate-800 flex items-center gap-3 ${style.bg}`}>
                          <div className={`p-2 rounded-lg bg-slate-950 ${style.color}`}>
                            {style.icon}
                          </div>
                          <h3 className={`font-bold text-lg ${style.color}`}>{category}</h3>
                        </div>

                        {/* Chapter List */}
                        <div className="p-3 grid gap-2">
                          {filteredChapters.map((chapter) => (
                            <div
                              key={chapter}
                              onClick={() => setActiveMainTab(chapter)}
                              className="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 border border-transparent hover:border-slate-700 cursor-pointer transition-all"
                            >
                              <span className="text-sm font-medium text-slate-300 group-hover:text-white truncate">
                                {chapter}
                              </span>
                              <ChevronLeft className="w-4 h-4 text-slate-600 group-hover:text-blue-400 rotate-180 opacity-0 group-hover:opacity-100 transition-all" />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}

                </div>
              </ScrollArea>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 20 }}
              key="details"
              className="space-y-6"
            >
              {/* Detail Header */}
              <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
                <Button 
                  onClick={() => setActiveMainTab(null)}
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-slate-900 border-slate-700 hover:bg-slate-800 hover:text-blue-400"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <div>
                  <h2 className="text-2xl font-bold text-slate-100">{activeMainTab}</h2>
                  <p className="text-slate-400 text-sm">Access available resources below</p>
                </div>
              </div>

              {/* Resource Content */}
              <ScrollArea className="h-[70vh]">
                <div className="pb-12 max-w-[95rem] mx-auto">
                  {activeMainTab === "IMPORTANT BOOK" ? (
                    <div className="space-y-8">
                        {/* 4 Column Layout for Important Books */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                          {["Physical", "Organic", "Inorganic", "Other"].map((category) => (
                            <div key={category} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 flex flex-col h-full hover:border-slate-700 transition-colors">
                              <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 pb-2 border-b border-slate-800 ${
                                category === 'Physical' ? 'text-blue-400' : 
                                category === 'Organic' ? 'text-emerald-400' : 
                                category === 'Inorganic' ? 'text-purple-400' : 'text-amber-400'
                              }`}>
                                <Layers className="w-5 h-5" />
                                {category} Books
                              </h3>
                              <ResourceList items={importantBooks[category]} compact={true} />
                            </div>
                          ))}
                        </div>
                    </div>
                  ) : pdfData[activeMainTab] ? (
                    <div className="max-w-4xl mx-auto">
                        <ResourceList items={pdfData[activeMainTab]} />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                      <FileText className="w-16 h-16 mb-4 opacity-20" />
                      <p>No specific resources uploaded for this section yet.</p>
                      <Button variant="link" onClick={() => setActiveMainTab(null)}>
                        Go back to dashboard
                      </Button>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JEE_MAINS;