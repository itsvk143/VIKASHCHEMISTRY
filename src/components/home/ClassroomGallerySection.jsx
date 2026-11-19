"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Users } from "lucide-react";

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
    <section className="py-20 bg-black/50 border-t border-white/5 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-4 h-4" /> Classroom In Action
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Experience the <span className="text-accent">Live Learning Energy</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg">
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-accent/40 bg-white/[0.02] transition-all shadow-xl aspect-[4/3]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-5">
                <span className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                  Classroom Moment #{index + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-white/75 line-clamp-2">
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
