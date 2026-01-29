"use client";

import { CheckCircle2 } from "lucide-react";

export default function AuthoritySection() {
  const metrics = [
    { label: "Architecture", value: "Zero Trust" },
    { label: "Compliance", value: "ISO Ready" },
    { label: "Approach", value: "Defensive" },
    { label: "Uptime", value: "99.9%" },
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: The Philosophy */}
          <div>
            <h2 className="font-heading text-4xl font-bold mb-6 text-white">
              Built for <span className="text-gray-600">Production.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Infyn Labs is not a creative agency. We are an engineering firm. 
              We operate on the principle that modern software is useless if it is vulnerable.
              Our systems are designed to withstand real-world attack vectors from day one.
            </p>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <span>Security-first architecture in every line of code.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <span>Scalable infrastructure for SME and Enterprise.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <span>No vendor lock-in; we build on open standards.</span>
              </li>
            </ul>
          </div>

          {/* RIGHT: The Specs Grid */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div 
                key={i} 
                className="p-8 border border-white/10 bg-white/5 flex flex-col justify-center hover:bg-white/10 transition-colors"
              >
                <p className="text-gray-500 text-xs font-mono uppercase tracking-wider mb-2">
                  {m.label}
                </p>
                <p className="font-heading text-3xl font-bold text-white">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}