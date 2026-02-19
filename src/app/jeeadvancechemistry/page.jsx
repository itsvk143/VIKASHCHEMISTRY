"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import {
  Download,
  BookOpen,
  FileText,
  ChevronLeft,

  Atom,
  Layers,
  Dna,
  Calculator,
  Library,
  FlaskConical
} from "lucide-react";

import {
  chemistryChapters,
  chemistryResources,
  importantBooks
} from "./data";

// --- HELPER FUNCTIONS ---
const getCategoryStyle = (category) => {
  switch (category) {
    case 'Physical':
      return {
        icon: <Calculator className="w-5 h-5" />,
        color: 'text-blue-400',
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10'
      };
    case 'Organic':
      return {
        icon: <Dna className="w-5 h-5" />,
        color: 'text-emerald-400',
        border: 'border-emerald-500/30',
        bg: 'bg-emerald-500/10'
      };
    case 'Inorganic':
      return {
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

// --- MAIN COMPONENT ---
const JEE_ADVANCE = () => {
  const [activeMainTab, setActiveMainTab] = useState(null);
  const activeSubject = "Chemistry";

  const currentChapters = chemistryChapters;
  const currentResources = chemistryResources;

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
              {/* Header & Subject Selection */}
              <div className="flex flex-col xl:flex-row items-center justify-between gap-6 mb-8 relative">
                {/* Header (Left) */}
                <div className="xl:w-1/3 flex flex-col items-center xl:items-start text-center xl:text-left order-2 xl:order-1">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    {activeSubject} Dashboard
                  </h1>
                </div>

                {/* Subject Tabs (Center) */}
                <div className="order-3 xl:order-2">
                  <div className="flex gap-2 bg-slate-900 p-1 rounded-lg border border-slate-800">
                    <button className="px-4 py-2 rounded-md text-sm font-medium transition-all bg-slate-800 text-white shadow-sm">
                      Chemistry
                    </button>
                    <Link href="/jeeadvancephysics">
                      <button className="px-4 py-2 rounded-md text-sm font-medium transition-all text-slate-400 hover:text-slate-200 hover:bg-slate-800/50">
                        Physics
                      </button>
                    </Link>
                    <Link href="/jeeadvancemaths">
                      <button className="px-4 py-2 rounded-md text-sm font-medium transition-all text-slate-400 hover:text-slate-200 hover:bg-slate-800/50">
                        Maths
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Exam Switcher (Right) */}
                <div className="xl:w-1/3 flex justify-center xl:justify-end order-1 xl:order-3">
                  <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 inline-flex">
                    <Link href="/jeemainschemistry">
                      <button className="px-6 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all">
                        JEE Mains
                      </button>
                    </Link>
                    <button className="px-6 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white shadow-lg shadow-blue-500/20">
                      JEE Advance
                    </button>
                  </div>
                </div>
              </div>

              {/* CONTENT AREA */}
              <ScrollArea className="h-[75vh] pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pb-12">
                  {Object.entries(currentChapters).map(([category, chapters], catIdx) => {
                    const style = getCategoryStyle(category);

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
                          {chapters.map((chapter) => (
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
                      {/* Dynamic Column Layout for Important Books */}
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {(() => {
                          const bookCategories = ["Physical", "Organic", "Inorganic", "Other"];

                          return bookCategories.map((category) => {
                            const style = getCategoryStyle(category);
                            return (
                              <div key={category} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 flex flex-col h-full hover:border-slate-700 transition-colors">
                                <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 pb-2 border-b border-slate-800 ${style.color}`}>
                                  {style.icon}
                                  {category} Books
                                </h3>
                                <ResourceList items={importantBooks[activeSubject]?.[category] || []} compact={true} />
                              </div>
                            );
                          });
                        })()}
                      </div>
                    </div>
                  ) : currentResources[activeMainTab] ? (
                    <div className="max-w-4xl mx-auto">
                      <ResourceList items={currentResources[activeMainTab]} />
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

export default JEE_ADVANCE;