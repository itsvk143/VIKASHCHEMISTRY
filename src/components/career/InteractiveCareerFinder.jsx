"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Printer,
  Sparkles,
  BookOpen,
  Award,
  DollarSign,
  Briefcase,
  GraduationCap,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { careersData } from "@/data/career/careersData";

export default function InteractiveCareerFinder({ onSelectCareer }) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const [answers, setAnswers] = useState({
    academicLevel: "Class 12",
    stream: "PCM",
    favouriteSubjects: ["Physics", "Mathematics"],
    interests: ["Engineering", "Technology"],
    priority: "High academic achievement & tech innovation",
    budget: "Moderate (Government / Aided Colleges)",
  });

  const [isGenerated, setIsGenerated] = useState(false);

  // Toggle multi-select items
  const toggleSubject = (sub) => {
    setAnswers((prev) => {
      const exists = prev.favouriteSubjects.includes(sub);
      const updated = exists
        ? prev.favouriteSubjects.filter((s) => s !== sub)
        : [...prev.favouriteSubjects, sub];
      return { ...prev, favouriteSubjects: updated.length ? updated : [sub] };
    });
  };

  const toggleInterest = (interest) => {
    setAnswers((prev) => {
      const exists = prev.interests.includes(interest);
      const updated = exists
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: updated.length ? updated : [interest] };
    });
  };

  // Recommendation Logic
  const recommendations = useMemoRecommendations(answers);

  function useMemoRecommendations(ans) {
    let matched = [];

    if (ans.stream === "PCB") {
      matched = careersData.filter(
        (c) => c.stream.includes("PCB") || c.category.includes("Medical")
      );
    } else if (ans.stream === "PCM") {
      matched = careersData.filter(
        (c) =>
          c.stream.includes("PCM") ||
          c.category.includes("Engineering") ||
          c.category.includes("Defence")
      );
    } else if (ans.stream === "Commerce") {
      matched = careersData.filter(
        (c) => c.stream.includes("Commerce") || c.category.includes("Finance")
      );
    } else if (ans.stream === "Arts/Humanities") {
      matched = careersData.filter(
        (c) =>
          c.stream.includes("Arts") ||
          c.category.includes("Legal") ||
          c.category.includes("Design")
      );
    } else {
      matched = careersData.slice(0, 4);
    }

    if (matched.length < 3) {
      matched = careersData.slice(0, 3);
    }

    return matched.slice(0, 3);
  }

  const handlePrint = () => {
    window.print();
  };

  const resetFinder = () => {
    setCurrentStep(1);
    setIsGenerated(false);
  };

  return (
    <section id="career-finder" className="py-20 bg-primary text-white border-b border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-4 h-4" /> AI-Powered Career Assessment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Interactive <span className="text-accent">Career Finder</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Complete this 6-step guided assessment based on your academic stage, favorite subjects, and ambitions to generate a customized Career Exploration Report.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="max-w-4xl mx-auto bg-[#1c1c24] border border-accent/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {!isGenerated ? (
            <div>
              {/* Progress Bar & Step Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white/50 mb-2">
                  <span>Step {currentStep} of {totalSteps}</span>
                  <span className="text-accent">
                    {Math.round((currentStep / totalSteps) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-300 rounded-full"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step 1: Academic Level */}
              {currentStep === 1 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    What is your current academic stage?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 mb-6">
                    Select the level you are currently enrolled in or have recently passed.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["Class 10", "Class 11", "Class 12", "Passed Class 12", "Graduation", "Post-Graduation"].map(
                      (lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setAnswers({ ...answers, academicLevel: lvl })}
                          className={`p-4 rounded-2xl border text-sm font-bold text-left transition-all ${
                            answers.academicLevel === lvl
                              ? "bg-accent text-primary border-accent shadow-md"
                              : "bg-white/[0.03] text-white/80 border-white/10 hover:border-accent/40"
                          }`}
                        >
                          {lvl}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Preferred Stream */}
              {currentStep === 2 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    What is your current or preferred stream?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 mb-6">
                    Choose the subject stream that aligns with your educational background.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { id: "PCM", title: "Science (PCM)", sub: "Maths, Physics, Chem" },
                      { id: "PCB", title: "Science (PCB)", sub: "Biology, Physics, Chem" },
                      { id: "PCMB", title: "Science (PCMB)", sub: "Maths + Biology" },
                      { id: "Commerce", title: "Commerce", sub: "Accounts, Economics, Business" },
                      { id: "Arts/Humanities", title: "Arts / Humanities", sub: "Pol Sci, History, Psychology" },
                      { id: "Other", title: "Open / Undecided", sub: "Exploring multiple streams" },
                    ].map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => setAnswers({ ...answers, stream: st.id })}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          answers.stream === st.id
                            ? "bg-accent text-primary border-accent shadow-md"
                            : "bg-white/[0.03] text-white/80 border-white/10 hover:border-accent/40"
                        }`}
                      >
                        <span className="font-bold text-sm block">{st.title}</span>
                        <span className={`text-xs block mt-1 ${answers.stream === st.id ? "text-primary/70" : "text-white/50"}`}>
                          {st.sub}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Favourite Subjects */}
              {currentStep === 3 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Which subjects do you enjoy the most? (Select multiple)
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 mb-6">
                    Tap the subjects where you feel strong intuition and intellectual curiosity.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      "Physics",
                      "Chemistry",
                      "Mathematics",
                      "Biology",
                      "Computer Science",
                      "Economics",
                      "Accountancy",
                      "Psychology",
                      "History / Pol Science",
                    ].map((sub) => {
                      const selected = answers.favouriteSubjects.includes(sub);
                      return (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => toggleSubject(sub)}
                          className={`p-3.5 rounded-2xl border text-sm font-bold flex items-center justify-between transition-all ${
                            selected
                              ? "bg-accent text-primary border-accent shadow-md"
                              : "bg-white/[0.03] text-white/80 border-white/10 hover:border-accent/40"
                          }`}
                        >
                          <span>{sub}</span>
                          {selected && <CheckCircle2 className="w-4 h-4" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Career Interests */}
              {currentStep === 4 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Which career domains appeal to you? (Select multiple)
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 mb-6">
                    Select the professional worlds where you envision yourself working.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      "Medicine & Healthcare",
                      "Engineering & Tech",
                      "Scientific Research",
                      "Business & Management",
                      "Government Services",
                      "Defence & Armed Forces",
                      "Corporate Law & Judiciary",
                      "Design & Creative Arts",
                      "Finance & Investment Banking",
                    ].map((domain) => {
                      const selected = answers.interests.includes(domain);
                      return (
                        <button
                          key={domain}
                          type="button"
                          onClick={() => toggleInterest(domain)}
                          className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-bold flex items-center justify-between transition-all ${
                            selected
                              ? "bg-accent text-primary border-accent shadow-md"
                              : "bg-white/[0.03] text-white/80 border-white/10 hover:border-accent/40"
                          }`}
                        >
                          <span className="line-clamp-1">{domain}</span>
                          {selected && <CheckCircle2 className="w-4 h-4 flex-shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 5: Career Priorities */}
              {currentStep === 5 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    What is your number one career priority?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 mb-6">
                    Different paths offer different rewards. What matters most to you?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: "High Financial Independence & Fast Growth", desc: "Software, Investment Banking, Corporate Law" },
                      { label: "Research, Innovation & Intellectual Discovery", desc: "Scientific R&D, Pure Sciences, Ph.D., Deep Tech" },
                      { label: "Social Impact & Life-Saving Service", desc: "Clinical Medicine, Surgery, Public Health, Nursing" },
                      { label: "Job Stability, Authority & National Pride", desc: "Civil Services, Armed Forces, PSUs, Banking" },
                      { label: "Entrepreneurship & Creating Enterprises", desc: "Startups, Management, Product Creation" },
                    ].map((p, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setAnswers({ ...answers, priority: p.label })}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          answers.priority === p.label
                            ? "bg-accent text-primary border-accent shadow-md"
                            : "bg-white/[0.03] text-white/80 border-white/10 hover:border-accent/40"
                        }`}
                      >
                        <span className="font-bold text-sm block">{p.label}</span>
                        <span className={`text-xs block mt-1 ${answers.priority === p.label ? "text-primary/70" : "text-white/50"}`}>
                          {p.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 6: Study Budget */}
              {currentStep === 6 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    What is your preferred educational budget range?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 mb-6">
                    This helps recommend government subsidized institutes or corporate scholarship programs.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: "Budget-Friendly (Govt Subsidized / IITs / AIIMS / Central Universities)", sub: "Under ₹1.5 Lakhs/year with high scholarship eligibility" },
                      { label: "Moderate (Reputed State & Semi-Government Colleges)", sub: "₹2 to ₹4 Lakhs/year" },
                      { label: "Premium (Top Private Universities like BITS, Manipal, Ashoka)", sub: "₹5 to ₹8 Lakhs/year" },
                      { label: "Scholarship-Dependent (Need 70–100% financial grant)", sub: "Requires matching with DST-INSPIRE, Reliance, Tata, or NSP schemes" },
                    ].map((b, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setAnswers({ ...answers, budget: b.label })}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          answers.budget === b.label
                            ? "bg-accent text-primary border-accent shadow-md"
                            : "bg-white/[0.03] text-white/80 border-white/10 hover:border-accent/40"
                        }`}
                      >
                        <span className="font-bold text-sm block">{b.label}</span>
                        <span className={`text-xs block mt-1 ${answers.budget === b.label ? "text-primary/70" : "text-white/50"}`}>
                          {b.sub}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Nav Controls */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                {currentStep > 1 ? (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="border-white/20 text-white hover:bg-white/5 text-xs rounded-xl flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <Button
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    className="bg-accent text-primary font-bold hover:bg-accent-hover text-xs rounded-xl flex items-center gap-1.5 px-6"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => setIsGenerated(true)}
                    className="bg-accent text-primary font-bold hover:bg-accent-hover text-sm rounded-xl flex items-center gap-2 px-8 py-6 shadow-lg shadow-accent/20"
                  >
                    <Sparkles className="w-4 h-4" />
                    Generate My Career Report
                  </Button>
                )}
              </div>
            </div>
          ) : (
            /* Generated Career Report */
            <div id="printable-career-report" className="space-y-8">
              {/* Report Header */}
              <div className="pb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                    Personalized Exploration Summary
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Your Tailored Career Blueprint
                  </h3>
                  <p className="text-xs text-white/60 mt-1">
                    Profile: {answers.academicLevel} • Stream: {answers.stream} • Target Budget: {answers.budget.split(" ")[0]}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    onClick={handlePrint}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 text-xs rounded-xl flex items-center gap-2"
                  >
                    <Printer className="w-4 h-4" />
                    Download / Print PDF
                  </Button>

                  <Button
                    onClick={resetFinder}
                    variant="outline"
                    className="border-accent/40 text-accent hover:bg-accent/10 text-xs rounded-xl flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Retake
                  </Button>
                </div>
              </div>

              {/* Top 3 Recommended Pathways */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                  Top 3 Recommended Career Pathways for Your Profile
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendations.map((rec) => (
                    <div
                      key={rec.id}
                      onClick={() => onSelectCareer(rec)}
                      className="bg-white/[0.02] border border-white/10 hover:border-accent/40 rounded-2xl p-5 cursor-pointer transition-all hover:bg-white/[0.04] flex flex-col justify-between group"
                    >
                      <div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent/15 text-accent uppercase block w-fit mb-2">
                          {rec.category}
                        </span>
                        <h5 className="font-bold text-white text-lg mb-2 group-hover:text-accent transition-colors">
                          {rec.title}
                        </h5>
                        <p className="text-xs text-white/70 line-clamp-3 mb-4">
                          {rec.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                        <span className="text-white/50">Exams: {rec.entranceExams.slice(0, 2).join(", ")}</span>
                        <span className="text-accent font-bold flex items-center gap-1">
                          View <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actionable Next Steps */}
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <h4 className="font-bold text-white text-base mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Suggested Next Strategic Steps
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Align 11th–12th Chemistry Focus:</strong> Chemistry accounts for 25–33% of total marks in both JEE Main/Advanced and NEET UG with the highest scoring speed.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Bookmark Relevant Scholarships:</strong> Check DST-INSPIRE (for Basic Sciences) or Corporate Scholarships (Reliance/Tata/Kotak) to apply before registration deadlines.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Schedule a 1-on-1 Academic Review:</strong> Get your current marks and aptitude reviewed by Vikash Sir to tailor a daily problem-solving timetable.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Direct Booking with Sir */}
              <div className="bg-gradient-to-r from-accent/10 to-transparent border border-accent/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-base mb-1">
                    Discuss this Career Report with CVK Sir
                  </h4>
                  <p className="text-xs text-white/70">
                    Get expert mentorship on entrance exams, coaching batches, and study material.
                  </p>
                </div>

                <a
                  href={`https://wa.me/918457876843?text=${encodeURIComponent(
                    `Hi CVK Sir, I completed the Career Finder assessment (Stage: ${answers.academicLevel}, Stream: ${answers.stream}). I would like to discuss my career report.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0"
                >
                  <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl text-xs py-5">
                    Share Report on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
