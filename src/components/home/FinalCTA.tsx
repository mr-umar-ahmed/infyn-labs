"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0A0A0A]" />
      
      {/* Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Secure Your System?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Whether you need an enterprise audit or a custom software platform, 
          our engineers are ready to deploy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/cybersecurity"
            className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-brand-accent transition-colors flex items-center justify-center gap-2"
          >
            Start with Cybersecurity
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/software"
            className="px-8 py-4 border border-white/20 text-white font-medium text-lg hover:border-brand-accent/50 hover:bg-white/5 transition-all"
          >
            Start with Software
          </Link>
        </div>
      </div>
    </section>
  );
}