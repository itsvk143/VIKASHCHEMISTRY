'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  GraduationCap,
  Briefcase,
  Search,
  Sparkles,
  Award,
  Globe,
  Calendar,
  Users,
  MessageSquare,
  HelpCircle,
  BookOpen,
  ArrowUp,
  Bookmark,
  Share2,
} from 'lucide-react';

// Career Components
import CareerHero from '@/components/career/CareerHero';
import EducationTimeline from '@/components/career/EducationTimeline';
import Class10Explorer from '@/components/career/Class10Explorer';
import Class12Explorer from '@/components/career/Class12Explorer';
import CareerRoadmap from '@/components/career/CareerRoadmap';
import GovernmentJobsExplorer from '@/components/career/GovernmentJobsExplorer';
import ScholarshipCentre from '@/components/career/ScholarshipCentre';
import StudyAbroadCentre from '@/components/career/StudyAbroadCentre';
import InteractiveCareerFinder from '@/components/career/InteractiveCareerFinder';
import CareerComparison from '@/components/career/CareerComparison';
import ExamCalendar from '@/components/career/ExamCalendar';
import ParentGuide from '@/components/career/ParentGuide';
import CounsellingEnquiry from '@/components/career/CounsellingEnquiry';
import CareerDetailModal from '@/components/career/CareerDetailModal';

// Data
import { CAREERS_DATABASE } from '@/data/career/careersData';

const SUB_NAV_LINKS = [
  { id: 'timeline', label: 'Timeline' },
  { id: 'after-10', label: 'After 10th' },
  { id: 'after-12', label: 'After 12th' },
  { id: 'roadmap', label: 'Collapsible Flowchart' },
  { id: 'govt-jobs', label: 'Govt Exams' },
  { id: 'scholarships', label: 'Scholarships' },
  { id: 'study-abroad', label: 'Study Abroad' },
  { id: 'career-finder', label: 'Career Finder' },
  { id: 'comparisons', label: 'Compare' },
  { id: 'exam-calendar', label: '2025 Calendar' },
  { id: 'parent-guide', label: 'Parents' },
  { id: 'counselling', label: '1-on-1 Counselling' },
];

export default function CareerPage() {
  const [selectedCareerId, setSelectedCareerId] = useState(null);
  const [activeNav, setActiveNav] = useState('timeline');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Monitor scroll for sticky nav highlight and scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectCareer = (careerId) => {
    setSelectedCareerId(careerId);
  };

  const handleCloseModal = () => {
    setSelectedCareerId(null);
  };

  const handleSharePortal = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'CVK Sir - Interactive Career Guidance Portal',
          text: 'Explore 100+ career options, entrance exams, and scholarships after Class 10, 12, and Graduation.',
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-accent selection:text-primary">
      {/* 1. Hero Section */}
      <CareerHero onSelectCareer={handleSelectCareer} />

      {/* 2. Sticky Sub-Navigation Bar */}
      <div className="sticky top-0 z-30 bg-[#1c1c22]/95 backdrop-blur-md border-y border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 overflow-x-auto py-3 no-scrollbar">
          <div className="flex items-center gap-1 sm:gap-2 flex-nowrap">
            {SUB_NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveNav(link.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeNav === link.id
                    ? 'bg-accent text-primary shadow-sm'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleSharePortal}
              title="Share Portal Link"
              className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-all"
            >
              <Share2 className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline">{isCopied ? 'Link Copied!' : 'Share'}</span>
            </button>
            <a
              href="#counselling"
              className="px-3.5 py-1.5 rounded-full bg-accent hover:bg-accent-hover text-primary font-bold text-xs uppercase tracking-wide transition-all shadow-md shadow-accent/20"
            >
              Book Guidance
            </a>
          </div>
        </div>
      </div>

      {/* 3. Education Journey Timeline */}
      <EducationTimeline onSelectCareer={handleSelectCareer} />

      {/* 4. Career Exploration After Class 10 */}
      <Class10Explorer onSelectCareer={handleSelectCareer} />

      {/* 5. Career Exploration After Class 12 */}
      <Class12Explorer onSelectCareer={handleSelectCareer} />

      {/* 6. Interactive Visual Career Roadmap */}
      <CareerRoadmap onSelectCareer={handleSelectCareer} />

      {/* 7. Government Jobs & Competitive Examinations Portal */}
      <div id="govt-jobs">
        <GovernmentJobsExplorer />
      </div>

      {/* 8. Scholarship Discovery Centre */}
      <div id="scholarships">
        <ScholarshipCentre />
      </div>

      {/* 9. Study Abroad Centre */}
      <div id="study-abroad">
        <StudyAbroadCentre />
      </div>

      {/* 10. Interactive 6-Step Career Finder Assessment */}
      <InteractiveCareerFinder onSelectCareer={handleSelectCareer} />

      {/* 11. Side-by-Side Career Comparison Tool */}
      <CareerComparison onSelectCareer={handleSelectCareer} />

      {/* 12. National Entrance Examination Calendar 2025-26 */}
      <ExamCalendar />

      {/* 13. Parent Guidance Dashboard */}
      <ParentGuide />

      {/* 14. 1-on-1 Career Counselling Booking Form */}
      <CounsellingEnquiry />

      {/* 15. Career Deep-Dive Modal Drawer */}
      <AnimatePresence>
        {selectedCareerId && (
          <CareerDetailModal
            careerId={selectedCareerId}
            onClose={handleCloseModal}
            onSelectCareer={handleSelectCareer}
          />
        )}
      </AnimatePresence>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-30 p-3 rounded-full bg-accent hover:bg-accent-hover text-primary font-bold shadow-xl transition-all hover:scale-105"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
