"use client";

import { ShieldCheck, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DivisionSplit() {
  return (
    <section className="py-24 border-b border-white/10 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Text & Logic */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
              Two Core Divisions.<br />
              <span className="text-brand-accent">One Secure System.</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              At Infyn Labs, we do not separate development from defense. 
              Our architecture integrates robust software engineering with 
              military-grade cybersecurity protocols from day one.
            </p>
            
            {/* Division 1: Cyber */}
            <div className="mb-8">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-sm">
                  <ShieldCheck className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Cybersecurity Division</h3>
                  <p className="text-gray-500 mb-3">Audit, Pentesting, MSSP, Compliance.</p>
                  <Link href="/cybersecurity" className="text-sm font-medium text-white hover:text-brand-accent flex items-center gap-2">
                    Explore Division <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Division 2: Software */}
            <div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Software Solutions</h3>
                  <p className="text-gray-500 mb-3">ERP, Management Systems, Custom Dev.</p>
                  <Link href="/software" className="text-sm font-medium text-white hover:text-brand-accent flex items-center gap-2">
                    Explore Division <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Placeholder */}
          <div className="relative h-[400px] w-full bg-black border border-white/10 rounded-lg overflow-hidden flex items-center justify-center group">
            
            {/* Abstract Grid Background inside the box */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            {/* Central Node (The Visual) */}
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-black border-2 border-brand-accent rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.3)] mb-4">
                <span className="font-heading font-bold text-brand-accent">INFYN</span>
              </div>
              
              {/* Lines connecting nodes */}
              <div className="flex justify-center gap-12 text-xs font-mono text-gray-500">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-px bg-gray-700"></div>
                  <span>SECURE</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-px bg-gray-700"></div>
                  <span>SCALABLE</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}