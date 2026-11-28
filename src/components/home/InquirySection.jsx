"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Send, CheckCircle2, Phone, Mail, MapPin, MessageSquare, Shield, Clock, AlertCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function InquirySection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    targetExam: "JEE Mains & Advanced",
    studentClass: "Class 12",
    city: "",
    message: "",
    honeypot: "", // anti-spam field
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam bot check
    if (formData.honeypot) {
      setSubmitted(true);
      return;
    }

    // Phone validation
    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (cleanedPhone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile / WhatsApp number.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const payload = {
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        service: formData.targetExam,
        class: formData.studentClass,
        city: formData.city,
        message: formData.message,
        source: "Homepage Inquiry Form",
        timestamp: new Date().toISOString(),
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycbxBVBoD8EVrN7Lw0XYxcuqg03HkwdHlyqUYWPl2K4_jEG9cM3tbGTZHLjsdXdi4RbHaAg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          mode: "no-cors",
        }
      );

      setSubmitted(true);
    } catch (error) {
      console.error("Inquiry submission error:", error);
      // Because Google Apps Script with no-cors doesn't throw on success, catch handles network failures
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const directWhatsapp = `https://wa.me/918457876843?text=${encodeURIComponent(
    `Hello CVK Sir! I would like to book a Free Demo Class.\nName: ${formData.fullName || "Student"}\nTarget: ${formData.targetExam}\nClass: ${formData.studentClass}`
  )}`;

  return (
    <section id="inquiry" className="py-20 lg:py-28 bg-navy-950 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-royal-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context, Trust Points & Direct Contact */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Direct Faculty Connection
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
              Book Your <span className="text-gradient-gold">Free Demo Class</span> &amp; Academic Audit
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Have doubts regarding batch timings, Chemistry syllabus pacing, or target score roadmap? Submit your details or message Vikash Sir directly. We respond within hours.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 max-w-md mx-auto lg:mx-0 text-left pt-2">
              <a
                href="https://wa.me/918457876843"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-navy-900 border border-white/10 hover:border-emerald-500/50 transition-all hover:bg-navy-850 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-bold uppercase tracking-wider">
                    Instant WhatsApp Inquiry
                  </span>
                  <span className="font-bold text-white group-hover:text-emerald-300 transition-colors text-sm sm:text-base">
                    +91 84578 76843
                  </span>
                </div>
              </a>

              <a
                href="tel:+918457876843"
                className="flex items-center gap-4 p-4 rounded-2xl bg-navy-900 border border-white/10 hover:border-royal-500/50 transition-all hover:bg-navy-850 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-royal-600/15 border border-royal-500/30 flex items-center justify-center text-royal-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-bold uppercase tracking-wider">
                    Direct Phone Support
                  </span>
                  <span className="font-bold text-white group-hover:text-royal-300 transition-colors text-sm sm:text-base">
                    +91 84578 76843
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-navy-900 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] text-slate-400 block font-bold uppercase tracking-wider">
                    Offline Coaching Center
                  </span>
                  <span className="text-xs text-slate-300 leading-snug block">
                    Plot No. 125, Chandrasekharpur, Bhubaneswar, Odisha, 751016
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400 pt-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>100% Privacy Protected. Your number is never shared with telecallers.</span>
            </div>
          </div>

          {/* Right Column: Premium Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-navy-900 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Vikash Sir or his core academic team will review your requirements and connect with you via WhatsApp/call within hours.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={directWhatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        <span>Continue to WhatsApp Immediately</span>
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: "",
                            phone: "",
                            email: "",
                            targetExam: "JEE Mains & Advanced",
                            studentClass: "Class 12",
                            city: "",
                            message: "",
                            honeypot: "",
                          });
                        }}
                        className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs"
                      >
                        Submit Another Query
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Header */}
                    <div className="border-b border-white/10 pb-4 mb-4">
                      <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                        Book Your Free Demo &amp; Counseling
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Takes less than 30 seconds. All details are kept strictly confidential.
                      </p>
                    </div>

                    {/* Anti-spam honeypot */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {errorMsg && (
                      <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Full Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Student / Parent Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-navy-950 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-royal-500 focus:ring-1 focus:ring-royal-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          WhatsApp / Mobile No. *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          className="w-full bg-navy-950 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-royal-500 focus:ring-1 focus:ring-royal-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email & City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com (optional)"
                          className="w-full bg-navy-950 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-royal-500 focus:ring-1 focus:ring-royal-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          City / State
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Bhubaneswar, Odisha"
                          className="w-full bg-navy-950 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-royal-500 focus:ring-1 focus:ring-royal-500 transition-all"
                        />
                      </div>
                    </div>

                    {/* Target Exam & Current Class */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Target Examination *
                        </label>
                        <select
                          name="targetExam"
                          value={formData.targetExam}
                          onChange={handleChange}
                          className="w-full bg-navy-950 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-royal-500 focus:ring-1 focus:ring-royal-500 transition-all"
                        >
                          <option value="JEE Mains & Advanced">IIT-JEE (Mains &amp; Advanced)</option>
                          <option value="NEET UG Chemistry">NEET UG Chemistry (180/180 Target)</option>
                          <option value="1-on-1 Personal Mentorship">1-on-1 Elite Personal Mentorship</option>
                          <option value="Class 11 Board + Foundation">Class 11 Board + Foundation</option>
                          <option value="Class 12 Board + Entrance">Class 12 Board + Entrance</option>
                          <option value="Dropper / Repeater Batch">Dropper / Repeater Batch</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Current Academic Level *
                        </label>
                        <select
                          name="studentClass"
                          value={formData.studentClass}
                          onChange={handleChange}
                          className="w-full bg-navy-950 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-royal-500 focus:ring-1 focus:ring-royal-500 transition-all"
                        >
                          <option value="Class 11">Class 11 Aspirant</option>
                          <option value="Class 12">Class 12 Board + Entrance</option>
                          <option value="Dropper">Dropper / Repeater Student</option>
                          <option value="Class 9-10">Class 9–10 Early Foundation</option>
                        </select>
                      </div>
                    </div>

                    {/* Message / Query */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Specific Doubt or Weak Topics (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="e.g. Struggling with Organic reaction mechanisms or negative marking in Physical Chemistry numericals..."
                        className="w-full bg-navy-950 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-royal-500 focus:ring-1 focus:ring-royal-500 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 bg-gradient-to-r from-royal-600 via-royal-700 to-royal-800 hover:from-royal-500 hover:to-royal-700 text-white font-heading font-bold rounded-xl text-sm sm:text-base tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-royal-600/30 cursor-pointer disabled:opacity-50 active:scale-[0.99]"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-gold-300" />
                          <span>Book Free Demo &amp; Get Personalized Guidance</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
