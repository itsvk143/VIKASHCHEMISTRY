
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
  "ISMOREISM",
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
    { name: "NCERT Physical Chemistry", link: "https://drive.google.com/file/d/1/preview", downloadLink: "https://drive.google.com/uc?export=download&id=1" },
  ],
  Organic: [
    { name: "Organic Chemistry by Morrison Boyd", link: "https://drive.google.com/file/d/2/preview", downloadLink: "https://drive.google.com/uc?export=download&id=2" },
  ],
  Inorganic: [
    { name: "Concise Inorganic Chemistry by J.D. Lee", link: "https://drive.google.com/file/d/3/preview", downloadLink: "https://drive.google.com/uc?export=download&id=3" },
  ],
};

const pdfData = {
  "MOLE CONCEPT": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "STRUCTURE OF ATOM": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "PERIODIC TABLES": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "CHEMICAL BONDING AND MOLECULAR STRUCTURE": [
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
  "SOLUTION AND COLLIGATIVE PROPERTIES": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "ELECTROCHEMISTRY": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "CHEMICAL KINETICS": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
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
  "P BLOCK(GROUP 13 & 14)" : [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "P BLOCK(GROUP 15 & 16)": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "P BLOCK(GROUP 17 & 18)": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "D & F BLOCK": [
    { name: "Handwritten Notes", link: "https://drive.google.com/file/d/4/preview", downloadLink: "https://drive.google.com/uc?export=download&id=4" },
    { name: "Printed Notes", link: "https://drive.google.com/file/d/5/preview", downloadLink: "https://drive.google.com/uc?export=download&id=5" },
    { name: "Previous Year Questions", link: "https://drive.google.com/file/d/6/preview", downloadLink: "https://drive.google.com/uc?export=download&id=6" },
    { name: "Important & Topic-wise Questions", link: "https://drive.google.com/file/d/7/preview", downloadLink: "https://drive.google.com/uc?export=download&id=7" },
  ],
  "COORDINATION COMPOUND": [
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

const JEE_MAINS = () => {
  const [activeMainTab, setActiveMainTab] = useState(null);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [visiblePages, setVisiblePages] = useState(1);
  
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
      setVisiblePages(1);
    };
  
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4 } }} className="min-h-[80vh] flex items-center justify-center py-12">
        <div className="container mx-auto ">
          <Tabs className="flex flex-col xl:flex-row gap-[40px] ">
            {!activeMainTab && (
            <TabsList className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full ">
                {mainTabs.map((mainTab) => (
                  <TabsTrigger key={mainTab} value={mainTab} onClick={() => setActiveMainTab(mainTab)}>
                    {mainTab}
                  </TabsTrigger>
                ))}
              </TabsList>
            )}
  
            {activeMainTab === "IMPORTANT BOOK" && (
              <div className="w-full">
                <div className="bg-gray-900 p-4 rounded-lg ">
                  <Button onClick={() => setActiveMainTab(null)} className="mb-4 bg-accent hover:bg-accent">
                    ← Back to Chapters
                  </Button>
                  <h3 className="text-2xl font-bold mb-4">{activeMainTab}</h3>
                  <ScrollArea className="h-[400px]">
                    {Object.keys(importantBooks).map((category) => (
                      <div key={category} className="mb-4">
                        <h4 className="text-xl font-semibold mb-2">{category}</h4>
                        {importantBooks[category].map((book, id) => (
                          <li key={id} className="bg-gray-800 py-4 px-6 rounded-xl text-center cursor-pointer">
                            <div className="flex justify-between items-center">
                              <a href={book.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{book.name}</a>
                              <a href={book.downloadLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <Download size={20} />
                              </a>
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
                  <Button onClick={() => setActiveMainTab(null)} className="mb-4 bg-accent hover:bg-accent">
                    ← Back to Chapters
                  </Button>
                  <h3 className="text-2xl font-bold mb-4">{activeMainTab}</h3>
                  <ScrollArea className="h-[400px]">
                    {pdfData[activeMainTab].map((pdf, id) => (
                      <li key={id} className="bg-gray-800 py-2 px-3 rounded-xl text-center cursor-pointer" onClick={() => setSelectedPdf(pdf.link)}>
                        <div className="flex justify-between items-center">
                          <span className="text-accent hover:underline">{pdf.name}</span>
                          <a href={pdf.downloadLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <Download size={20} />
                          </a>
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

export default JEE_MAINS;



