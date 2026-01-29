"use client";

import Link from "next/link";
import { ArrowRight, Shield, Search, Lock, FileCheck, Terminal, Users } from "lucide-react";

const services = [
  {
    title: "Security Audit & Assessment",
    icon: Search,
    desc: "Comprehensive analysis of your infrastructure to identify hidden vulnerabilities.",
    link: "/cybersecurity/audit"
  },
  {
    title: "Penetration Testing",
    icon: Shield,
    desc: "Ethical hacking simulations to stress-test your defenses before attackers do.",
    link: "/cybersecurity/pentesting"
  },
  {
    title: "Managed Security (MSSP)",
    icon: Lock,
    desc: "24/7 monitoring and incident response operations for enterprise environments.",
    link: "/cybersecurity/mssp"
  },
  {
    title: "Compliance & Consulting",
    icon: FileCheck,
    desc: "Aligning your operations with ISO 27001, GDPR, and industry standards.",
    link: "/cybersecurity/compliance"
  },
  {
    title: "Security for Developers",
    icon: Terminal,
    desc: "DevSecOps integration ensuring code is secure before deployment.",
    link: "/cybersecurity/dev-security"
  },
  {
    title: "Training & Awareness",
    icon: Users,
    desc: "Human-centric security training to mitigate social engineering risks.",
    link: "/cybersecurity/training"
  }
];

export default function ServicePreview() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl font-bold mb-4 text-white">
              Defensive <span className="text-brand-accent">Architecture</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We don&apost just patch holes; we redesign the fabric of your digital security. 
              From passive monitoring to active defense.
            </p>
          </div>
          
          <Link 
            href="/cybersecurity" 
            className="group flex items-center gap-2 text-white font-medium hover:text-brand-accent transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              href={service.link}
              className="group block p-8 bg-[#0A0A0A] border border-white/10 hover:border-brand-accent transition-colors duration-300 relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <service.icon className="w-10 h-10 text-brand-accent mb-6 relative z-10" />
              
              <h3 className="font-heading text-2xl font-bold mb-3 text-white group-hover:text-brand-accent transition-colors relative z-10">
                {service.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-6 relative z-10">
                {service.desc}
              </p>
              
              <div className="flex items-center text-sm font-semibold text-white group-hover:translate-x-2 transition-transform relative z-10">
                Learn more &rarr;
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}