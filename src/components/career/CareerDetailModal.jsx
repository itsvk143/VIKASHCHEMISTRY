"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Share2,
  Bookmark,
  Check,
  ExternalLink,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Clock,
  BookOpen,
  DollarSign,
  Award,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
  Building2,
  Calendar,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function CareerDetailModal({ career, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (career?.id) {
      const saved = localStorage.getItem(`cvk_career_bm_${career.id}`);
      setBookmarked(!!saved);
    }
  }, [career]);

  const toggleBookmark = () => {
    if (!career?.id) return;
    if (bookmarked) {
      localStorage.removeItem(`cvk_career_bm_${career.id}`);
      setBookmarked(false);
    } else {
      localStorage.setItem(`cvk_career_bm_${career.id}`, "true");
      setBookmarked(true);
    }
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${career?.title} - Career Guidance by CVK Sir`,
          text: `Explore career pathway, exams and top colleges for ${career?.title}.`,
          url,
        });
      } catch (err) {
        console.log("Share dismissed");
      }
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen || !career) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1a1a22] border border-[#00ff99]/30 rounded-3xl shadow-2xl text-white p-6 sm:p-10"
        >
          {/* Top Bar: Breadcrumb + Action Controls */}
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-white/50 flex-wrap">
              <span>Home</span>
              <ChevronRight className="w-3 h-3 text-accent" />
              <span>Career Guidance</span>
              <ChevronRight className="w-3 h-3 text-accent" />
              <span className="text-accent font-medium">{career.stream}</span>
              <ChevronRight className="w-3 h-3 text-accent" />
              <span className="text-white font-semibold truncate max-w-[180px]">{career.title}</span>
            </div>

            {/* Close & Share Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleBookmark}
                title="Save career to favorites"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                  bookmarked
                    ? "bg-accent text-primary border-accent"
                    : "border-white/10 text-white/70 hover:border-accent hover:text-accent"
                }`}
              >
                <Bookmark className="w-4 h-4" />
              </button>

              <button
                onClick={handleShare}
                title="Share this career"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:border-accent hover:text-accent transition-colors relative"
              >
                {copied ? <Check className="w-4 h-4 text-accent" /> : <Share2 className="w-4 h-4" />}
              </button>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Header */}
          <div className="py-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent uppercase tracking-wider">
                {career.category}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70">
                {career.academicLevel}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70">
                Duration: {career.duration}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              {career.title}
            </h2>

            <p className="text-base sm:text-lg text-accent font-medium leading-relaxed">
              &ldquo;{career.tagline}&rdquo;
            </p>
          </div>

          {/* Career Body Details */}
          <div className="space-y-8 text-sm sm:text-base leading-relaxed">
            {/* Overview */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent" />
                Career Overview
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">
                {career.description}
              </p>
              <div className="pt-3 border-t border-white/5">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white/50 mb-2">
                  What Professionals Do in this Field
                </h4>
                <p className="text-white/90">
                  {career.whatProfessionalsDo}
                </p>
              </div>
            </div>

            {/* Eligibility & Entrance Examinations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  Eligibility &amp; Subjects
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-xs text-white/50 block font-medium">Required Subjects</span>
                    <span className="font-semibold text-white">{career.requiredSubjects}</span>
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block font-medium">Academic Criteria</span>
                    <span className="text-white/80">{career.eligibility}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Target Entrance Exams
                </h3>
                <div className="flex flex-wrap gap-2">
                  {career.entranceExams?.map((exam, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-accent/10 border border-accent/20 text-accent text-xs font-bold"
                    >
                      {exam}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses & Top Colleges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  Available Degrees &amp; Courses
                </h3>
                <ul className="space-y-2 text-sm text-white/85">
                  {career.courses?.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-accent" />
                  Premier Institutions in India
                </h3>
                <ul className="space-y-2 text-sm text-white/85">
                  {career.topColleges?.map((col, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <span>{col}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Job Roles & Remuneration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-accent" />
                  Popular Job Roles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {career.careerOptions?.map((job, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white/5 text-white/90 text-xs font-medium border border-white/5"
                    >
                      {job}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-accent" />
                  Remuneration &amp; Growth Outlook
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-xs text-white/50 block font-medium">Indicative Salary Scale</span>
                    <span className="font-bold text-white text-base">{career.salaryRange}</span>
                  </div>
                  <div>
                    <span className="text-xs text-white/50 block font-medium">Market Demand</span>
                    <span className="text-accent font-semibold">{career.growthOutlook}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Portals & External References */}
            {career.officialLinks?.length > 0 && (
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <h3 className="text-xs uppercase font-semibold text-white/50 mb-3 tracking-wider">
                  Verified Official Portals &amp; Regulators
                </h3>
                <div className="flex flex-wrap gap-4">
                  {career.officialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline font-semibold"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Career Specific FAQs */}
            {career.faqs?.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-accent" />
                  Student Frequently Asked Questions
                </h3>
                {career.faqs.map((f, idx) => (
                  <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                    <p className="font-semibold text-white text-sm mb-1">{f.q}</p>
                    <p className="text-xs text-white/75 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Bottom CTA Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs text-white/50 block">Need guidance on cracking this career?</span>
              <span className="font-bold text-white text-sm">Consult directly with Vikash Kumar (CVK Sir)</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/918457876843?text=${encodeURIComponent(
                  `Hi CVK Sir, I would like guidance regarding ${career.title} career options, exams, and coaching.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl flex items-center justify-center gap-2 text-xs py-5">
                  <FaWhatsapp className="w-4 h-4" />
                  Ask Sir on WhatsApp
                </Button>
              </a>

              <a href="#counselling" onClick={onClose} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-accent text-primary font-bold hover:bg-accent-hover rounded-xl text-xs py-5">
                  Book Counselling
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
