"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

const galleryImages = [
  {
    src: "/assets/gallery/photo1.jpg",
    title: "Interactive Classroom Sessions",
    caption: "Deep dive into chemical bonding & organic mechanisms",
  },
  {
    src: "/assets/gallery/photo2.jpg",
    title: "High-Energy Problem Solving",
    caption: "Solving advanced multi-step JEE problems live with students",
  },
  {
    src: "/assets/gallery/photo3.jpg",
    title: "Focused Aspirants in Action",
    caption: "Full batch concentration during Kota numerical shortcut drills",
  },
  {
    src: "/assets/gallery/photo4.jpg",
    title: "1-on-1 Doubt Clarification",
    caption: "Clearing individual questions after the core lecture",
  },
  {
    src: "/assets/gallery/photo5.jpg",
    title: "Concept-First Board Teaching",
    caption: "Visualizing reaction pathways step-by-step on the board",
  },
  {
    src: "/assets/gallery/photo6.jpg",
    title: "Inspiring Future IITians & Doctors",
    caption: "Mentoring the next generation of engineers and medical leaders",
  },
];

export default function ClassroomGallerySection() {
  return (
    <section className="py-20 lg:py-24 bg-navy-950 border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-600/15 border border-royal-500/30 text-royal-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-gold-400" /> Authentic Teaching In Action
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4">
            Live Classroom <span className="text-gradient-gold">Moments</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Real classrooms, real equations, real students. See how Vikash Sir brings Chemistry concepts alive in every lecture.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-royal-400/50 bg-navy-900 transition-all shadow-xl aspect-[4/3]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5">
                <span className="text-xs uppercase tracking-wider text-gold-400 font-bold mb-1">
                  Classroom Moment #{index + 1}
                </span>
                <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
