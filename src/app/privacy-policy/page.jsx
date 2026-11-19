import Link from "next/link";
import { ShieldCheck, UserCheck, Eye, Cookie, Lock, Mail, MapPin, Globe, ArrowLeft, Phone } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | CVK Sir (Vikash Kumar)",
  description:
    "Privacy Policy for CVK Sir (Vikash Kumar) - Information collection, usage, cookies, Google Ads, and data security for www.cvksir.in.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-accent/20">
            <ShieldCheck className="w-4 h-4" /> Legal & Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Privacy Policy for <span className="text-accent">CVK Sir</span>
          </h1>
          <p className="text-sm text-white/60">
            <span className="font-semibold text-white/80">Last Updated:</span> November 19, 2026
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 mb-10 text-white/90 leading-relaxed text-base sm:text-lg">
          <p>
            This Privacy Policy describes how <strong className="text-white">Vikash Kumar (&quot;CVK Sir&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)</strong> collects, uses, and protects your personal information when you visit <strong className="text-accent">www.cvksir.in</strong> or enroll in our educational courses, mentorship programs, and test series.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 transition-all hover:border-accent/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  1. Information We Collect
                </h2>
              </div>
            </div>
            <div className="text-white/80 space-y-4 pl-0 sm:pl-14 text-sm sm:text-base leading-relaxed">
              <p>
                We may collect personal information that you voluntarily provide to us when you fill out an inquiry form, register for classes/test series, or contact us via phone, WhatsApp, or email. This information may include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/90">
                <li><strong className="text-white">Full Name</strong> (Student / Parent)</li>
                <li><strong className="text-white">Email Address</strong></li>
                <li><strong className="text-white">Phone / WhatsApp Number</strong></li>
                <li><strong className="text-white">Academic Details</strong> (Class, Target Exam such as JEE/NEET/Boards)</li>
                <li><strong className="text-white">City / Location</strong></li>
              </ul>
              <p className="pt-2 text-white/75">
                We also automatically collect standard non-personal technical data such as IP address, browser type, device information, and pages visited through cookies and analytics tools.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 transition-all hover:border-accent/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  2. How We Use Your Information
                </h2>
              </div>
            </div>
            <div className="text-white/80 space-y-3 pl-0 sm:pl-14 text-sm sm:text-base leading-relaxed">
              <p>We use the collected information strictly to:</p>
              <ul className="list-disc pl-5 space-y-2 text-white/90">
                <li>Respond to your course or mentorship inquiries.</li>
                <li>Provide academic coaching, study materials, and online test series access.</li>
                <li>Send important class schedules, exam updates, and administrative notifications.</li>
                <li>Improve our website experience and measure the effectiveness of our advertisements.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 transition-all hover:border-accent/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  3. Cookies and Third-Party Advertising (Google Ads)
                </h2>
              </div>
            </div>
            <div className="text-white/80 space-y-3 pl-0 sm:pl-14 text-sm sm:text-base leading-relaxed">
              <p>
                Our website uses cookies and similar tracking technologies to enhance user experience and analyze website traffic. We use third-party advertising services, including <strong className="text-white">Google Ads</strong>, which may use cookies to serve ads based on a user&apos;s prior visits to our website.
              </p>
              <p className="text-white/75">
                You can manage or disable cookies through your browser settings or visit Google&apos;s Ads Settings to opt out of personalized advertising.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 transition-all hover:border-accent/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  4. Data Sharing and Security
                </h2>
              </div>
            </div>
            <div className="text-white/80 space-y-3 pl-0 sm:pl-14 text-sm sm:text-base leading-relaxed">
              <p>
                We do <strong className="text-accent">not</strong> sell, rent, or trade your personal information to third parties. Your data is only shared with trusted service providers (such as website hosting or communication tools) strictly necessary to operate our educational services, or when required by Indian law.
              </p>
              <p className="text-white/75">
                We implement reasonable security measures to protect your personal details from unauthorized access.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white/[0.02] border border-accent/30 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  5. Your Rights and Contact Information
                </h2>
              </div>
            </div>
            <div className="text-white/80 space-y-4 pl-0 sm:pl-14 text-sm sm:text-base leading-relaxed">
              <p>
                You may request access to, correction of, or deletion of your personal information at any time by contacting us directly:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs uppercase text-white/50 block font-medium">Operator Name</span>
                    <span className="font-semibold text-white">Vikash Kumar (CVK Sir)</span>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex items-start gap-3">
                  <Globe className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs uppercase text-white/50 block font-medium">Website</span>
                    <a
                      href="https://www.cvksir.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-accent hover:underline break-all"
                    >
                      https://www.cvksir.in
                    </a>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs uppercase text-white/50 block font-medium">Email</span>
                    <a
                      href="mailto:itsvikash143@gmail.com"
                      className="font-semibold text-white hover:text-accent transition-colors break-all"
                    >
                      itsvikash143@gmail.com
                    </a>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs uppercase text-white/50 block font-medium">Phone / WhatsApp</span>
                    <a
                      href="tel:+918457876843"
                      className="font-semibold text-white hover:text-accent transition-colors"
                    >
                      +91 8457876843
                    </a>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 flex items-start gap-3 md:col-span-2">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs uppercase text-white/50 block font-medium">Location</span>
                    <span className="font-semibold text-white">Bhubaneswar, Odisha, India</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer info within privacy page */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} CVK Sir (Vikash Kumar). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-accent underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
