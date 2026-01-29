"use client";

import Link from "next/link";
import { ArrowRight, Code2, ShieldCheck, Cpu } from "lucide-react";
import ScrollReveal from "@/src/components/ui/ScrollReveal";
import { GridScan } from "@/src/components/ui/GridScan";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center py-12 px-4 sm:px-6">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <GridScan
          linesColor="#2a2a2a"
          scanColor="#00f0ff"
          scanOpacity={0.5}
          lineThickness={1}
          gridScale={0.06}
          enablePost={true}
          bloomIntensity={1.8}
          bloomThreshold={0.1}
          noiseIntensity={0.08}
          scanDirection="pingpong"
          scanDuration={4}
          enableWebcam={false}
          enableGyro={true}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl text-center flex flex-col items-center justify-center flex-1">
        
        <ScrollReveal>
          <p className="text-xs sm:text-sm md:text-base font-mono tracking-[0.35em] text-brand-accent mb-4 sm:mb-6">
            INFYN LABS
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="
            font-heading font-bold text-white tracking-tight
            text-[clamp(2.8rem,8vw,6.5rem)]
            leading-[1.05]
            mb-6 px-4
          ">
            BUILD. SECURE.{" "}
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-blue-600">
              DOMINATE.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="
            text-gray-400 font-light mx-auto
            text-sm sm:text-base md:text-xl
            max-w-xl md:max-w-3xl
            mb-8 sm:mb-10
            leading-relaxed px-4
          ">
            We are a full-stack technology powerhouse. From
            <span className="text-white font-medium"> offensive cybersecurity</span> operations 
            to building <span className="text-white font-medium">enterprise-grade software</span> ecosystems.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="hidden md:flex items-center justify-center gap-8 mb-10 opacity-60">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-brand-accent/50" />
            <div className="flex gap-6 text-xs font-mono text-brand-accent tracking-widest">
               <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> CYBER</span>
               <span className="flex items-center gap-2"><Code2 className="w-4 h-4" /> DEV</span>
               <span className="flex items-center gap-2"><Cpu className="w-4 h-4" /> LMS</span>
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-brand-accent/50" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
            
            {/* Software Button */}
            <Link
              href="/software"
              className="
                group relative w-full sm:w-64 h-14 sm:h-16
                bg-gradient-to-r from-white/10 via-white/5 to-brand-accent/10
                backdrop-blur-xl border border-white/20 border-brand-accent/30
                text-white font-bold text-base md:text-lg
                rounded-xl overflow-hidden shadow-2xl shadow-black/30
                transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-accent/25
                hover:from-brand-accent/20 hover:to-blue-500/20
                hover:border-brand-accent/50
                flex items-center justify-center gap-3 px-6
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-brand-accent/0 before:to-brand-accent/20
                before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Software Forge
              </span>
            </Link>

            {/* Cyber Button */}
            <Link
              href="/cybersecurity"
              className="
                group relative w-full sm:w-64 h-14 sm:h-16
                bg-gradient-to-r from-white/10 via-white/5 to-brand-accent/10
                backdrop-blur-xl border border-white/20 border-brand-accent/30
                text-white font-bold text-base md:text-lg
                rounded-xl overflow-hidden shadow-2xl shadow-black/30
                transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-accent/25
                hover:from-brand-accent/20 hover:to-blue-500/20
                hover:border-brand-accent/50
                flex items-center justify-center gap-3 px-6
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-brand-accent/0 before:to-brand-accent/20
                before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Cyber Vault
              </span>
            </Link>
            
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
