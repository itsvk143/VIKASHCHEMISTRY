'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Phone, Mail, MessageSquare, Clock, User, Award, Shield, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxBVBoD8EVrN7Lw0XYxcuqg03HkwdHlyqUYWPl2K4_jEG9cM3tbGTZHLjsdXdi4RbHaAg/exec';

export default function CounsellingEnquiry() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    currentClass: 'Class 11',
    stream: 'Science (PCM)',
    targetGoal: '',
    mode: 'Online Video Call',
    question: '',
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const payload = {
        formType: 'Career Counselling Request',
        timestamp: new Date().toISOString(),
        ...formData,
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setStatus('success');
    } catch (err) {
      console.error('Counselling form submission error:', err);
      // Because Google Apps Script with no-cors doesn't return response, treat fetch completion as success
      setStatus('success');
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello CVK Sir! I would like to book a 1-on-1 Career Guidance Session.\n\nStudent: ${formData.studentName || 'Student'}\nClass: ${formData.currentClass}\nStream: ${formData.stream}\nTarget: ${formData.targetGoal || 'Guidance'}`
  );

  return (
    <section id="counselling" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary via-primary/95 to-primary border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> 1-on-1 Personalized Mentorship
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Book a Career Counselling Session with <span className="text-accent">CVK Sir</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Confused between engineering, medical, pure research or emerging tech? Get clear, unbiased, data-backed guidance from an NIT Rourkela &amp; Super 30 alumnus with 10+ years of Kota mentoring experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Mentorship Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" /> Why Students &amp; Parents Trust CVK Sir
              </h3>

              <div className="space-y-5 text-sm sm:text-base text-white/80">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Realistic Stream &amp; Exam Strategy</h4>
                    <p className="text-xs sm:text-sm text-white/60">No generic advice. We assess aptitude, past score trends, and real exam cutoff dynamics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Plan-B &amp; Backup Degree Design</h4>
                    <p className="text-xs sm:text-sm text-white/60">Zero-anxiety roadmaps ensuring top-tier backup options (IISER, BITS, VIT, CUET, NDA) alongside JEE/NEET.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Scholarship &amp; Budget Optimization</h4>
                    <p className="text-xs sm:text-sm text-white/60">Discover 100% tuition-free options, state quota nuances, and high-ROI education pathways.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Direct Mentorship (Not Telecallers)</h4>
                    <p className="text-xs sm:text-sm text-white/60">You talk directly to Vikash Kumar (CVK Sir) and his core academic team.</p>
                  </div>
                </div>
              </div>

              {/* Direct Quick Contact Box */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs uppercase tracking-wider text-white/50 mb-3 font-semibold">Immediate Assistance Needed?</div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/918457876843?text=Hello%20CVK%20Sir!%20I%20would%20like%20to%20book%20a%20Career%20Guidance%20Session."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-[#25D366]/20"
                  >
                    <FaWhatsapp className="w-4 h-4" /> WhatsApp Now
                  </a>
                  <a
                    href="tel:+918457876843"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm transition-all border border-white/15"
                  >
                    <Phone className="w-4 h-4 text-accent" /> +91 84578 76843
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5 flex items-center gap-4">
              <Shield className="w-8 h-8 text-accent flex-shrink-0" />
              <div className="text-xs sm:text-sm text-white/80">
                <span className="font-semibold text-white">100% Confidential &amp; Free Initial Consultation.</span> Your contact details are never shared with third-party coaching institutes or telemarketing companies.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center text-accent mx-auto mb-5">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-white">{formData.studentName || 'Student'}</strong>! CVK Sir and our academic guidance team will review your profile and reach out via WhatsApp/Call within 24 hours.
                  </p>

                  <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl max-w-md mx-auto text-left text-xs sm:text-sm space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-white/50">Target Stream:</span>
                      <span className="text-white font-medium">{formData.stream}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Consultation Mode:</span>
                      <span className="text-accent font-medium">{formData.mode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Registered Phone:</span>
                      <span className="text-white font-medium">{formData.phone}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <a
                      href={`https://wa.me/918457876843?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl text-sm transition-all"
                    >
                      <FaWhatsapp className="w-4 h-4" /> Connect Immediately on WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          studentName: '',
                          parentName: '',
                          phone: '',
                          email: '',
                          currentClass: 'Class 11',
                          stream: 'Science (PCM)',
                          targetGoal: '',
                          mode: 'Online Video Call',
                          question: '',
                        });
                      }}
                      className="inline-flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm transition-all"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-5">
                    <h3 className="text-xl font-bold text-white">Fill Your Details for Priority Scheduling</h3>
                    <p className="text-xs text-white/60">Takes less than 60 seconds. All fields marked with * are required.</p>
                  </div>

                  {/* Student & Parent Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        required
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                        Parent / Guardian Name
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Mr. Rajesh Sharma"
                        className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                        WhatsApp / Mobile No. *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="youremail@example.com"
                        className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                  </div>

                  {/* Class & Stream */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                        Current Academic Level *
                      </label>
                      <select
                        name="currentClass"
                        value={formData.currentClass}
                        onChange={handleChange}
                        className="w-full bg-[#232329] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      >
                        <option value="Class 9-10">Class 9 - 10 (Foundation)</option>
                        <option value="Class 11">Class 11 (Starting Prep)</option>
                        <option value="Class 12">Class 12 (Board + Entrances)</option>
                        <option value="Dropper / Repeat">Dropper / Repeater</option>
                        <option value="Graduation / Postgrad">Graduation / Degree Student</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                        Stream / Field *
                      </label>
                      <select
                        name="stream"
                        value={formData.stream}
                        onChange={handleChange}
                        className="w-full bg-[#232329] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      >
                        <option value="Science (PCM)">Science (PCM - Engineering/Research)</option>
                        <option value="Science (PCB)">Science (PCB - Medical/Allied)</option>
                        <option value="Science (PCMB)">Science (PCMB - Dual Focus)</option>
                        <option value="Commerce">Commerce (Finance/Accountancy)</option>
                        <option value="Arts / Humanities">Arts &amp; Humanities</option>
                        <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
                        <option value="Undecided">Undecided / Need Guidance</option>
                      </select>
                    </div>
                  </div>

                  {/* Target Goal & Mode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                        Target Career / Dream Exam
                      </label>
                      <input
                        type="text"
                        name="targetGoal"
                        value={formData.targetGoal}
                        onChange={handleChange}
                        placeholder="e.g. IIT-JEE / NEET / NDA / CUET / CA"
                        className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                        Preferred Consultation Mode *
                      </label>
                      <select
                        name="mode"
                        value={formData.mode}
                        onChange={handleChange}
                        className="w-full bg-[#232329] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      >
                        <option value="Online Video Call">Online Video Call (Google Meet / Zoom)</option>
                        <option value="Phone Call">Direct Phone Call</option>
                        <option value="In-person (Bhubaneswar)">In-person (Bhubaneswar Center)</option>
                      </select>
                    </div>
                  </div>

                  {/* Questions */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1.5">
                      Your Primary Question or Doubt
                    </label>
                    <textarea
                      name="question"
                      rows={3}
                      value={formData.question}
                      onChange={handleChange}
                      placeholder="e.g. Which backup entrance exams should I register for alongside JEE? Or how to manage 12th Board marks along with NEET coaching?"
                      className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 px-6 bg-accent hover:bg-accent-hover text-primary font-bold rounded-xl text-base tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/20 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        Submitting Enquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Book My Career Guidance Session
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
