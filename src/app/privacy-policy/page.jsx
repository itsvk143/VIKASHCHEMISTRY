import Link from "next/link";
import { ShieldCheck, UserCheck, Eye, Cookie, Lock, Mail, MapPin, Globe, ArrowLeft, Phone, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | CVK Sir (Vikash Kumar)",
  description:
    "Official Privacy Policy for CVK Sir (Vikash Kumar) - Explaining student data protection, cookies, Google Ads transparency, and contact details for www.cvksir.in.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col justify-between">
      <main className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Back to Home Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-royal-400 hover:text-royal-300 text-sm font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="border-b border-white/10 pb-8 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4 border border-gold-400/20">
              <ShieldCheck className="w-4 h-4 text-gold-400" /> Legal Compliance &amp; Student Privacy
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white mb-3">
              Privacy Policy for <span className="text-royal-400">CVK Sir</span>
            </h1>
            <p className="text-sm text-slate-400">
              <span className="font-semibold text-slate-300">Last Updated:</span> November 19, 2026 • Effective Immediately
            </p>
          </div>

          {/* Preamble */}
          <div className="bg-navy-900 border border-white/10 rounded-2xl p-6 sm:p-8 mb-10 text-slate-200 leading-relaxed text-base sm:text-lg shadow-xl">
            <p>
              This Privacy Policy describes how <strong className="text-white">Vikash Kumar (&quot;CVK Sir&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)</strong> collects, uses, and protects your personal information when you visit <strong className="text-royal-400">www.cvksir.in</strong> or enroll in our educational courses, mentorship programs, and online test series.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section className="bg-navy-900 border border-white/10 rounded-2xl p-6 sm:p-8 transition-all hover:border-royal-500/40 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-royal-600/20 border border-royal-400/30 flex items-center justify-center text-royal-400 flex-shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    1. Information We Collect
                  </h2>
                </div>
              </div>
              <div className="text-slate-300 space-y-4 pl-0 sm:pl-14 text-sm sm:text-base leading-relaxed">
                <p>
                  We may collect personal information that you voluntarily provide to us when you submit an inquiry form, book a free demo session, register for classes/test series, or reach out to us via phone, WhatsApp, or email. This information may include:
                </p>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong className="text-white">Full Name</strong> (Student or Parent/Guardian)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong className="text-white">Email Address</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong className="text-white">Phone / WhatsApp Number</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong className="text-white">Academic Details</strong> (Class 11, Class 12, Repeater, Target Exam such as JEE Mains, JEE Advanced, or NEET UG)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong className="text-white">City &amp; State / Location</strong></span>
                  </li>
                </ul>
                <p className="pt-2 text-slate-400 text-sm">
                  We also automatically collect standard non-personal technical data such as IP address, browser type, operating system, and pages visited through cookies and analytics tools to ensure our website functions reliably.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-navy-900 border border-white/10 rounded-2xl p-6 sm:p-8 transition-all hover:border-royal-500/40 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-royal-600/20 border border-royal-400/30 flex items-center justify-center text-royal-400 flex-shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    2. How We Use Your Information
                  </h2>
                </div>
              </div>
              <div className="text-slate-300 space-y-3 pl-0 sm:pl-14 text-sm sm:text-base leading-relaxed">
                <p>We use the collected information strictly for academic and operational purposes:</p>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>To respond to your course inquiries, free demo requests, and counseling questions.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>To deliver academic coaching, study materials, formula sheets, and online test series access.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>To send important class schedules, batch timings, exam updates, and administrative notices.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>To measure website performance and verify the compliance of our educational advertisements.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-navy-900 border border-white/10 rounded-2xl p-6 sm:p-8 transition-all hover:border-royal-500/40 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-royal-600/20 border border-royal-400/30 flex items-center justify-center text-royal-400 flex-shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    3. Cookies and Third-Party Advertising (Google Ads)
                  </h2>
                </div>
              </div>
              <div className="text-slate-300 space-y-3 pl-0 sm:pl-14 text-sm sm:text-base leading-relaxed">
                <p>
                  Our website uses cookies and similar tracking technologies to improve visitor experience and evaluate traffic patterns. We use third-party advertising services, including <strong className="text-white">Google Ads</strong>, which may use cookies or web beacons to serve relevant educational advertisements to users based on prior visits to our website.
                </p>
                <p className="text-slate-400 text-sm">
                  You can manage or disable cookies at any time through your browser settings or visit the official <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-royal-400 hover:underline">Google Ads Settings</a> to customize or opt out of personalized advertising.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-navy-900 border border-white/10 rounded-2xl p-6 sm:p-8 transition-all hover:border-royal-500/40 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-royal-600/20 border border-royal-400/30 flex items-center justify-center text-royal-400 flex-shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    4. Data Sharing and Security
                  </h2>
                </div>
              </div>
              <div className="text-slate-300 space-y-3 pl-0 sm:pl-14 text-sm sm:text-base leading-relaxed">
                <p>
                  We do <strong className="text-gold-400">never</strong> sell, rent, trade, or distribute your personal details to any third-party marketing companies.
                </p>
                <p>
                  Your information is only processed by essential service providers (such as hosting infrastructure and communication channels like WhatsApp) strictly necessary to run our educational mentorship services, or if explicitly mandated by Indian legal authorities.
                </p>
                <p className="text-slate-400 text-sm">
                  We maintain industry-standard security safeguards to protect your personal details from unauthorized access, accidental alteration, or disclosure.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-navy-900 border border-gold-400/30 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    5. Your Rights and Direct Contact Information
                  </h2>
                </div>
              </div>
              <div className="text-slate-300 space-y-4 pl-0 sm:pl-14 text-sm sm:text-base leading-relaxed">
                <p>
                  You have the right to request access to, correction of, or permanent deletion of your contact data from our student records at any time by contacting us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-navy-950/80 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs uppercase text-slate-400 block font-semibold">Operator / Educator Name</span>
                      <span className="font-heading font-bold text-white">Vikash Kumar (CVK Sir)</span>
                      <span className="text-xs text-slate-400 block">B.Tech Chemical Engineering, NIT Rourkela</span>
                    </div>
                  </div>

                  <div className="bg-navy-950/80 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                    <Globe className="w-5 h-5 text-royal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs uppercase text-slate-400 block font-semibold">Official Website</span>
                      <a
                        href="https://www.cvksir.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-royal-400 hover:underline break-all"
                      >
                        https://www.cvksir.in
                      </a>
                    </div>
                  </div>

                  <div className="bg-navy-950/80 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                    <Mail className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs uppercase text-slate-400 block font-semibold">Official Email</span>
                      <a
                        href="mailto:itsvikash143@gmail.com"
                        className="font-semibold text-white hover:text-royal-300 transition-colors break-all"
                      >
                        itsvikash143@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="bg-navy-950/80 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                    <Phone className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs uppercase text-slate-400 block font-semibold">Phone / WhatsApp</span>
                      <a
                        href="tel:+918457876843"
                        className="font-semibold text-white hover:text-emerald-400 transition-colors"
                      >
                        +91 84578 76843
                      </a>
                    </div>
                  </div>

                  <div className="bg-navy-950/80 border border-white/10 rounded-xl p-4 flex items-start gap-3 md:col-span-2">
                    <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs uppercase text-slate-400 block font-semibold">Classroom &amp; Registered Address</span>
                      <span className="font-semibold text-white">Plot No. 173, Prachi Enclave, Chandrasekharpur, Bhubaneswar, Odisha, 751016, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
