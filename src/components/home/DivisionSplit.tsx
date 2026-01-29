"use client";

import { ShieldCheck, Code2, ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function DivisionSplit() {
  return (
    <section className="py-16 md:py-20 border-b border-white/10 bg-gradient-to-b from-[#0A0A0A] to-black/90 relative overflow-hidden">
      
      {/* Video Background - HIDDEN ON MOBILE */}
      <div className="absolute inset-0 opacity-15 hidden lg:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/infyn.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
          
          {/* LEFT: Compact Layout */}
          <div className="lg:max-w-lg">
            
            {/* Smaller, Single-Line Heading */}
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 text-white leading-tight lg:leading-none">
              Two Core Divisions.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400 block lg:inline">
                One Secure System.
              </span>
            </h2>
            
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 lg:mb-12 max-w-md">
              Development fused with defense. Military-grade cybersecurity 
              protocols integrated into every line of code from day zero.
            </p>
            
            {/* Cards Side-by-Side on Desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Cyber Card - Smaller */}
              <div className="group relative p-5 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg hover:bg-white/8 hover:border-brand-accent/50 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-brand-accent/20">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm" />
                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-brand-accent/20 to-brand-accent/10 border-2 border-brand-accent/30 rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Cyber Vault</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 leading-relaxed">Red Team • Pentesting • MSSP • Zero Trust</p>
                  <Link 
                    href="/cybersecurity" 
                    className="group/link inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-brand-accent hover:text-white transition-all duration-300"
                  >
                    Enter Cyber Vault
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Software Card - Smaller */}
              <div className="group relative p-5 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg hover:bg-white/8 hover:border-blue-400/50 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-blue-400/20">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm" />
                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-400/20 to-blue-400/10 border-2 border-blue-400/30 rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Software Forge</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 leading-relaxed">ERP • LMS • SaaS • Enterprise Automation</p>
                  <Link 
                    href="/software" 
                    className="group/link inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-blue-400 hover:text-white transition-all duration-300"
                  >
                    Enter Software Forge
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Optimized Video */}
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-[380px] rounded-xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-gray-900/60 to-black/80 shadow-xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-60 hover:brightness-90 transition-all duration-500"
            >
              <source src="/assets/videos/infyn.mp4" type="video/mp4" />
              <div className="w-full h-full flex items-center justify-center p-8">
                <Play className="w-12 h-12 sm:w-16 sm:h-16 text-white/80 shadow-lg" />
              </div>
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white/90 px-3">
              <p className="text-xs font-mono tracking-wider mb-1 opacity-80">DUAL ARCHITECTURE</p>
              <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-brand-accent to-blue-400 mx-auto rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
