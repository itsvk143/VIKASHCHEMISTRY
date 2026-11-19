"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Send, CheckCircle2, Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function InquirySection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "JEE Mains & Advanced",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxBVBoD8EVrN7Lw0XYxcuqg03HkwdHlyqUYWPl2K4_jEG9cM3tbGTZHLjsdXdi4RbHaAg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        service: "JEE Mains & Advanced",
        message: "",
      });
    } catch (error) {
      console.error("Inquiry submission error:", error);
      alert("Submission encountered an issue. Please connect directly via WhatsApp!");
    } finally {
      setLoading(false);
    }
  };

  const whatsappDirectUrl =
    "https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20would%20like%20to%20inquire%20about%20joining%20Chemistry%20classes.";

  return (
    <section id="inquiry" className="py-20 bg-primary relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Direct Contact Options */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" /> Fast Track Connection
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Book Your <span className="text-accent">Free Demo Class</span> &amp; Counseling
            </h2>

            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
              Have doubts about course structure, syllabus pacing, or target exam strategy? Fill out the quick form or message Vikash Sir directly. We respond within hours.
            </p>

            {/* Direct Connect Quick Cards */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0 text-left">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#25D366]/50 transition-all hover:bg-white/[0.06] group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-white/50 block font-medium">Fastest Response</span>
                  <span className="font-bold text-white group-hover:text-[#25D366] transition-colors">
                    Chat on WhatsApp (+91 84578 76843)
                  </span>
                </div>
              </a>

              <a
                href="tel:+918457876843"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/50 transition-all hover:bg-white/[0.06] group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-white/50 block font-medium">Direct Call</span>
                  <span className="font-bold text-white group-hover:text-accent transition-colors">
                    +91 84578 76843
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-white/50 block font-medium">Location</span>
                  <span className="font-bold text-white">
                    Plot No. 125, Chandrasekharpur, Bhubaneswar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Lead Capture Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#212128] border border-accent/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Request a Callback / Demo
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 mt-1">
                    Takes only 30 seconds. No spam guaranteed.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                  <Clock className="w-3.5 h-3.5" /> Fast Response
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center my-6"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-white/80 max-w-md mx-auto mb-6">
                    Thank you! Vikash Sir or our academic team will contact you shortly via WhatsApp or call to schedule your free demo class.
                  </p>
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-[#20bd5a] transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    Open WhatsApp for Instant Answer
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-semibold text-white/70 block mb-1.5">
                        First Name *
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul"
                        required
                        className="bg-black/40 border-white/10 focus:border-accent text-white rounded-xl h-12"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-semibold text-white/70 block mb-1.5">
                        Last Name
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="e.g. Sharma"
                        className="bg-black/40 border-white/10 focus:border-accent text-white rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-semibold text-white/70 block mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="bg-black/40 border-white/10 focus:border-accent text-white rounded-xl h-12"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-semibold text-white/70 block mb-1.5">
                        Target Exam / Program *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-12 rounded-xl bg-black/40 border border-white/10 text-white px-3 focus:outline-none focus:border-accent text-sm"
                      >
                        <option value="JEE Mains & Advanced">IIT-JEE (Mains & Advanced)</option>
                        <option value="NEET Chemistry Mastery">NEET Chemistry Mastery</option>
                        <option value="Class 11 Foundation">Class 11th Chemistry</option>
                        <option value="Class 12 Board + Entrance">Class 12th Board + Entrance</option>
                        <option value="1-on-1 Personal Mentorship">1-on-1 Personal Mentorship</option>
                        <option value="Online Test Series">All-India Test Series</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase font-semibold text-white/70 block mb-1.5">
                      Your Query or Message (Optional)
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention your current class, key difficulty topics, or preferred timing for demo class..."
                      rows={3}
                      className="bg-black/40 border-white/10 focus:border-accent text-white rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent text-primary font-bold hover:bg-accent-hover h-14 rounded-xl text-base shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    {loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Demo &amp; Counseling Request</span>
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-white/50 pt-2">
                    🔒 Your details are strictly confidential and used solely for course counseling.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
