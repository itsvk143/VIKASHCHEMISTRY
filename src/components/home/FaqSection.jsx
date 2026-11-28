"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const faqs = [
  {
    question: "How are doubts resolved? Will I get personal attention directly from CVK Sir?",
    answer:
      "Yes, 100%. Unlike massive corporate institutes where doubts wait in long ticketing queues, every student has direct WhatsApp and voice access to Vikash Sir. Doubts are solved step-by-step with annotated drawings, voice notes, or 1-on-1 video calls within hours.",
  },
  {
    question: "Are classes available in Online, Offline, or Hybrid modes?",
    answer:
      "We provide both in-person Offline classroom coaching (at our Bhubaneswar center) and Live Interactive Online batches for students across India. Online students get live two-way audio, full whiteboard notes, and recording archives of every session for exam revision.",
  },
  {
    question: "Can I attend a Free Demo / Trial session before enrolling?",
    answer:
      "Yes! We strongly encourage every prospective student and parent to attend a free trial demo class. You will see firsthand how Vikash Sir breaks down difficult Organic reaction mechanisms and 45-second Physical Chemistry numericals.",
  },
  {
    question: "What study materials, DPPs, and test series are provided?",
    answer:
      "Every student receives Kota-standard Daily Practice Problems (DPPs), chapter formula sheets, NCERT line-by-line decoding sheets for Inorganic Chemistry, past 20-year PYQ banks, and full access to our All-India Online Test Series simulator.",
  },
  {
    question: "Is this program suitable for Dropper / Repeater students?",
    answer:
      "Definitely. A significant percentage of our 99+ percentilers are dropper students who previously struggled with negative marking or speed. We run high-intensity fast-track drills designed specifically to convert a 40–50% score into a 98–99+ percentile.",
  },
  {
    question: "How do parents stay updated regarding student attendance and mock scores?",
    answer:
      "We conduct regular parent-mentor reviews and share digital performance scorecards tracking accuracy, time-spent per question, and topic-wise strengths after every major mock test.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-navy-950 border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-600/15 border border-royal-500/30 text-royal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-gold-400" /> Transparent Answers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Clear, honest answers to help students and parents make informed decisions about Chemistry preparation.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-navy-900 border border-white/10 hover:border-royal-500/40 rounded-2xl overflow-hidden transition-all shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-heading font-bold text-white hover:text-royal-300 transition-colors gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-royal-600 text-white"
                        : "bg-white/5 text-slate-400 border border-white/10"
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
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 max-w-xl mx-auto">
          <p className="text-sm text-slate-300 mb-3">
            Have a specific question about your child&apos;s current score or batch timings?
          </p>
          <a
            href="https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20have%20a%20question%20regarding%20Chemistry%20coaching."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Ask CVK Sir Directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
