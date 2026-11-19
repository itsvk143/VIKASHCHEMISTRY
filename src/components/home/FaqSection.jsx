"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How are doubts resolved? Will I get personal attention from CVK Sir?",
    answer:
      "Yes, absolutely. Unlike massive commercial batches where doubts get buried in queues, every student has direct access to Vikash Sir via a dedicated WhatsApp group and one-on-one sessions. Doubts are solved step-by-step with voice notes or live discussions within hours.",
  },
  {
    question: "Are classes available in Online, Offline, or Hybrid modes?",
    answer:
      "We offer both Offline classroom batches (in Bhubaneswar, Odisha) as well as Live Online interactive batches for students nationwide. All live sessions are recorded so students can re-watch complex reaction mechanisms anytime before exams.",
  },
  {
    question: "Can I attend a Free Demo / Trial session before enrolling?",
    answer:
      "Yes! We encourage every student and parent to experience a free demo class. You will see firsthand how Vikash Sir breaks down difficult Organic reactions and Physical Chemistry numericals using intuitive Kota techniques.",
  },
  {
    question: "What study materials, DPPs, and test series are included?",
    answer:
      "Students receive Kota-standard Daily Practice Problems (DPPs), chapter-wise formula flashcards, NCERT line-by-line decoding sheets for Inorganic Chemistry, 20-year PYQ banks, and full access to our All-India Online Test Series simulator.",
  },
  {
    question: "Is this program suitable for Dropper / Repeater students?",
    answer:
      "Definitely. A large portion of our 99+ percentilers are dropper students who previously struggled with speed or negative marking in Chemistry. We run high-intensity fast-track problem-solving drills specifically designed to convert a 40–50% score into a 99+ percentile.",
  },
  {
    question: "How do parents stay updated regarding student attendance and mock scores?",
    answer:
      "We conduct monthly parent-mentor review calls and share detailed digital scorecards tracking accuracy, negative marks, and topic-wise mastery after every major test series exam.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-black/40 border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" /> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
            Everything you need to know about our courses, doubt solving, and teaching methodology.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/10 hover:border-accent/40 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-semibold text-white hover:text-accent transition-colors gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-accent text-primary font-bold" : "text-white/60"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-white/75 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
