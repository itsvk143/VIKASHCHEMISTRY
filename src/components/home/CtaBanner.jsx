"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CtaBanner() {
  const whatsappUrl =
    "https://wa.me/918457876843?text=Hi%20CVK%20Sir,%20I%20am%20ready%20to%20join%20Chemistry%20classes.%20Please%20share%20the%20demo%20class%20schedule.";

  return (
    <section className="py-16 bg-gradient-to-b from-primary via-[#16161d] to-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 sm:p-14 border border-accent/40 bg-gradient-to-r from-accent/15 via-[#1c1c24] to-accent/15 shadow-2xl overflow-hidden text-center max-w-5xl mx-auto"
        >
          {/* Subtle decorative glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" /> Start Your Journey Today
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to Turn Chemistry into Your <span className="text-accent">Highest-Scoring Weapon?</span>
            </h2>

            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
              Don&apos;t let Chemistry hold back your overall rank. Join our upcoming batch or schedule a 1-on-1 counseling call with Vikash Sir today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#inquiry" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent text-primary font-bold hover:bg-accent-hover px-8 py-6 text-base rounded-xl shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2"
                >
                  Book Free Demo Class
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-[#25D366] text-white hover:bg-[#25D366]/10 px-8 py-6 text-base rounded-xl flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                  <span>WhatsApp CVK Sir</span>
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
