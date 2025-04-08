"use client";

import { useState, useRef, useCallback } from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const mainTabs = [
  "IMPORTANT BOOK",
  "NOMENCLATURE",
  "TEST PAPERS",

  "MOLE CONCEPT",
  "ISOMERISM",
  "PERIODIC TABLES",

  "STRUCTURE OF ATOM",
  "GOC 1 & 2",
  "CHEMICAL BONDING",

  "THERMODYNAMICS",
  "HYDROCARBON",
  "P BLOCK(GROUP 13 & 14)",

  "CHEMICAL EQUILIBRIUM",
  "REACTION MECHANISM",
  "P BLOCK(GROUP 15 & 16)",

  "IONIC EQUILIBRIUM",
  "HALOALKANES & HALOARENES",
  "P BLOCK(GROUP 17 & 18)",

  "REDOX REACTION",
  "ALCOHAL PHENOL & ETHER",
  "D & F BLOCK",

  "SOLUTION & COLLIGATIVE PROPERTIES",
  "ALDEHYDE & KETONES",
  "COORDINATION COMPOUND",

  "ELECTROCHEMISTRY",
  "CARBOXYLIC ACID & ITS DERIVATIVE",
  "QUALITATIVE ANALYSIS(CATION)",

  "CHEMICAL KINETICS",
  "NITROGEN CONTAINING COMPOUND",
  "QUALITATIVE ANALYSIS(ANION)",

  "PRACTICE QUESTION",
  "BIOMOLECULES",
  "mnemonic",

  "",
  "POC",
  "",

];

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
  Complete_Chemistry: [
    { name: "Advance Problem in Physical by N Avasthi ", link: "https://drive.google.com/file/d/1ZLB5A542Ow8SqWAkUSJDpcmUpM8eL6mj/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/1ZLB5A542Ow8SqWAkUSJDpcmUpM8eL6mj/view?usp=drive_link" },
    { name: "Cengage Book Part 1", link: "https://drive.google.com/drive/folders/1Ra_4YLp2JAriZbNI2tH5Cjpvk3hxEDBE?usp=drive_link", downloadLink: "https://drive.google.com/drive/folders/1Ra_4YLp2JAriZbNI2tH5Cjpvk3hxEDBE?usp=drive_link" },
    { name: "Cengage Book Part 2", link: "https://drive.google.com/drive/folders/1wgHvFylGTRjx7xn6JjK2ieUKCvYSi4Fw?usp=drive_link", downloadLink: "https://drive.google.com/drive/folders/1wgHvFylGTRjx7xn6JjK2ieUKCvYSi4Fw?usp=drive_link" },
    { name: "GRB O P Tondon ", link: "https://drive.google.com/file/d/19wN71LUnzeIcl-F2EGAo9mN-MAY-ZFU2/view?usp=drive_link", downloadLink: "https://drive.google.com/file/d/19wN71LUnzeIcl-F2EGAo9mN-MAY-ZFU2/view?usp=drive_link" },
  ],
};

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
  "  NITROGEN CONTAINING COMPOUND": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "BIOMOLECULES"
  : [
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
  "  CHEMISTRY IN EVERYDAY LIFE": [
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
  "SURFACE CHEMISTRY": [
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
  "CHEMISTRY IN EVERYDAY LIFE": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
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
  
  
};

const NEET = () => {
 const [activeMainTab, setActiveMainTab] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [visiblePages, setVisiblePages] = useState(1);
  const [isDownloading, setIsDownloading] = useState(false); // Track if downloading is happening

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setVisiblePages(1);
  };

  const handleDownload = (downloadLink) => {
    setIsDownloading(true); // Trigger download state

    // Use setTimeout to go back after a slight delay
    setTimeout(() => {
      setIsDownloading(false); // Reset download state
      setActiveMainTab(null); // Go back to the previous page/tab
    }, 2000); // Delay for 2 seconds before going back
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4 },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs className="flex flex-col xl:flex-row gap-[40px]">
          {!activeMainTab && (
            <TabsList className="grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {mainTabs.map((mainTab) => (
                <TabsTrigger
                  key={mainTab}
                  value={mainTab}
                  onClick={() => setActiveMainTab(mainTab)}
                >
                  {mainTab}
                </TabsTrigger>
              ))}
            </TabsList>
          )}

          {activeMainTab === "IMPORTANT BOOK" && (
            <div className="w-full">
              <div className="bg-gray-900 p-4 rounded-lg ">
                <Button
                  onClick={() => setActiveMainTab(null)}
                  className="mb-4 bg-accent hover:bg-accent"
                >
                  ← Back to Chapters
                </Button>
                <h3 className="text-2xl font-bold mb-4">{activeMainTab}</h3>
                <ScrollArea className="h-[400px]">
                  {Object.keys(importantBooks).map((category) => (
                    <div key={category} className="mb-4">
                      <h4 className="text-xl font-semibold mb-2">{category}</h4>
                      {importantBooks[category].map((book, id) => (
                        <li
                          key={id}
                          className="bg-gray-800 py-2 px-3 rounded-xl text-center cursor-pointer mb-4" // Reduced py-4 to py-2 to reduce padding
                        >
                          <div className="flex justify-between items-center">
                            <a
                              href={book.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:underline"
                            >
                              {book.name}
                            </a>
                          <Button variant="outline" size="lg" asChild>
                          <a href={book.downloadLink} target="_blank" rel="noopener noreferrer">
                          <span className="hidden sm:inline">Click here to Download Book</span>
                          <span className="inline sm:hidden">Download</span>
                          </a>
                          </Button>
                          </div>
                        </li>
                      ))}
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </div>
          )}

          {activeMainTab && pdfData[activeMainTab] && !selectedPdf && (
            <div className="w-full">
              <div className="bg-gray-900 p-4 rounded-lg">
                <Button
                  onClick={() => setActiveMainTab(null)}
                  className="mb-4 bg-accent hover:bg-accent"
                >
                  ← Back to Chapters
                </Button>
                <h3 className="text-2xl font-bold mb-4">{activeMainTab}</h3>
                <ScrollArea className="h-[400px]">
                  {pdfData[activeMainTab].map((pdf, id) => (
                    <li
                      key={id}
                      className="bg-gray-800 py-2 px-3 rounded-xl text-center cursor-pointer mb-4" // Reduced py-4 to py-2 to reduce padding
                      onClick={() => setSelectedPdf(pdf.link)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-accent hover:underline">
                          {pdf.name}
                        </span>
                        <Button variant="outline" size="lg" asChild>
                          <a href={pdf.downloadLink} target="_blank" rel="noopener noreferrer">
                          <span className="hidden sm:inline">Click here to Download Book</span>
                          <span className="inline sm:hidden">Download</span>
                          </a>
                          </Button>
                      </div>
                    </li>
                  ))}
                </ScrollArea>
              </div>
            </div>
          )}
        </Tabs>
      </div>
    </motion.div>
  );
};

export default NEET;