"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. The Background (CSS Gradient substitute for Video) */}
      <div className="absolute inset-0 z-0">
        {/* A deep radial gradient to give it depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-[#050505] to-[#000000]" />
        
        {/* A subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>
      </div>

      {/* 2. The Content Overlay */}
      <div className="container relative z-10 px-6 text-center">
        
        {/* Title Animation */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-white"
        >
          INFYN LABS
        </motion.h1>
        
        {/* Subtitle Animation */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
        >
          Cybersecurity-first technology company building secure digital systems.
          <br />
          <span className="text-white font-medium mt-2 block">
            Security is not an add-on. It is the foundation.
          </span>
        </motion.p>

        {/* Buttons Animation */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Primary Button */}
          <Link 
            href="/cybersecurity"
            className="group px-8 py-3 bg-white text-black font-bold rounded-sm hover:bg-brand-accent transition-colors flex items-center justify-center gap-2"
          >
            Explore Cybersecurity
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary Button */}
          <Link 
            href="/software"
            className="px-8 py-3 border border-white/20 text-white font-medium rounded-sm hover:border-brand-accent/50 hover:bg-white/5 transition-all"
          >
            View Software Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}