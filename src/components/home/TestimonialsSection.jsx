"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Star, Quote, Award, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const testimonials = [
  {
    name: "Divyanshu S Sahu",
    exam: "JEE Mains 2024",
    score: "99.77 %ile (Chemistry Centum)",
    quote:
      "Chemistry was initially my most unpredictable subject. CVK Sir's mechanism-first approach completely transformed how I handled Organic Chemistry. Instead of memorizing 200 reactions, I learned to track electron flows. In JEE Mains, I scored 99.77 percentile with nearly 100% accuracy.",
    college: "Top NIT / IIIT Admission",
    videoDuration: "1:45 min",
    videoThumbnail: "/assets/gallery/photo1.jpg",
  },
  {
    name: "Jyotiraditya Parida",
    exam: "JEE Mains 2024",
    score: "99.22 %ile in Chemistry",
    quote:
      "The physical chemistry speed algorithms Vikash Sir taught in Kota drills saved me at least 15 minutes during the exam. I could solve equilibrium and electrochemistry numericals in 40–50 seconds without lengthy calculations. Sir's daily doubt support on WhatsApp is unmatched.",
    college: "Premier Engineering Aspirant",
    videoDuration: "2:10 min",
    videoThumbnail: "/assets/gallery/photo2.jpg",
  },
  {
    name: "Sayan Rath",
    exam: "JEE Mains 2024",
    score: "99.16 %ile in Chemistry",
    quote:
      "Most institutes dump giant study material bundles that students never finish. CVK Sir provided curated 15-question Daily Practice Problems (DPPs) directly aligned with modern NTA question patterns. His inorganic chemistry mnemonics kept all periodic exceptions crystal-clear.",
    college: "NIT Rourkela Core Candidate",
    videoDuration: "1:30 min",
    videoThumbnail: "/assets/gallery/photo3.jpg",
  },
  {
    name: "Pratik Choudhary",
    exam: "JEE Mains 2024",
    score: "98.97 %ile in Chemistry",
    quote:
      "I was a repeater aiming to improve my score. Vikash Sir analyzed my previous year's negative marking and redesigned my test-taking strategy. His 1-on-1 mentorship helped me jump from an 82 percentile to an 98.97 percentile in just one academic session.",
    college: "State Merit Ranker",
    videoDuration: "2:00 min",
    videoThumbnail: "/assets/gallery/photo4.jpg",
  },
];

const parentFeedback = [
  {
    parent: "Mr. Rajesh Sahu",
    student: "Father of Divyanshu Sahu (99.77 %ile)",
    comment:
      "What stood out to us was Vikash Sir's personal accountability. In large corporate coachings, parents can never speak to the actual teacher. Here, Sir was accessible, gave us direct progress updates, and kept Divyanshu motivated through exam stress.",
  },
  {
    parent: "Mrs. Minati Parida",
    student: "Mother of Jyotiraditya Parida (99.22 %ile)",
    comment:
      "The disciplined testing structure and mistake analysis book that Vikash Sir insists upon made all the difference. We saw our son's confidence in Chemistry soar within three months of joining Sir's batch.",
  },
];

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-navy-900 border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Quote className="w-3.5 h-3.5" /> Student Stories &amp; Video Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4">
            Real Proof from <span className="text-gradient-gold">Real Rankers</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Hear directly from students and parents about how Kota&apos;s conceptual teaching helped them master Chemistry and secure seats in premier national institutes.
          </p>
        </div>

        {/* Video Testimonials & Ranker Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-navy-850/80 border border-white/10 hover:border-royal-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:bg-navy-850 shadow-xl relative group"
            >
              <div>
                {/* Header: Score badge and stars */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full bg-royal-600/20 border border-royal-400/30 text-royal-300 text-xs font-bold uppercase tracking-wide">
                    {item.exam}
                  </span>
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400" />
                    ))}
                  </div>
                </div>

                {/* Score highlight banner */}
                <div className="mb-4 p-3 rounded-2xl bg-gradient-to-r from-royal-900/60 to-navy-950 border border-royal-500/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Verified Chemistry Result
                    </span>
                    <span className="text-base sm:text-lg font-black text-white">
                      {item.score}
                    </span>
                  </div>
                  <Award className="w-6 h-6 text-gold-400 flex-shrink-0" />
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Student Footer & Video Preview Trigger */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-royal-600/30 border border-royal-400/40 flex items-center justify-center font-heading font-extrabold text-white text-base">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm sm:text-base">
                      {item.name}
                    </h4>
                    <span className="text-xs text-slate-400">{item.college}</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20would%20like%20to%20connect%20with%20past%20successful%20students%20or%20watch%20class%20recordings."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-royal-600/20 border border-white/10 hover:border-royal-400/40 text-royal-300 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  title="Request student verification video"
                >
                  <Play className="w-3 h-3 text-gold-400 fill-gold-400" />
                  <span>Verified Story</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Parent Testimonial Spotlight */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-navy-950 via-royal-950/40 to-navy-950 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Parent Perspectives
            </span>
            <span className="text-xs text-slate-400">Feedback from guardians who trusted CVK Sir</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {parentFeedback.map((pf, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                <Quote className="w-6 h-6 text-gold-400/60" />
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{pf.comment}&rdquo;
                </p>
                <div className="pt-2">
                  <h5 className="font-bold text-white text-sm">{pf.parent}</h5>
                  <p className="text-xs text-royal-300 font-medium">{pf.student}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
