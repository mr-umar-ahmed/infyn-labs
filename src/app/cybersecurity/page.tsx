"use client"; // Required for interactivity

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cyberServices } from "@/src/lib/serviceData"; // Ensure this path matches yours
import ServiceModal from "@/src/components/ui/ServiceModal";

export default function CybersecurityPage() {
  // State to track which modal is open
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Helper to get the full data object based on the key
  const activeServiceData = selectedService ? cyberServices[selectedService] : null;

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      
      {/* Header (Unchanged) */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 text-white">
            Defensive <span className="text-brand-accent">Architecture</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Modern security is not about buying a firewall. It is about building a system that is 
            resilient by design. Infyn Labs provides end-to-end protection.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(cyberServices).map(([key, service]) => (
            <div 
              key={key}
              onClick={() => setSelectedService(key)} // Open Modal on Click
              className="group flex flex-col p-8 bg-[#0A0A0A] border border-white/10 hover:border-brand-accent/50 transition-all duration-300 rounded-sm cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-brand-accent/5 rounded-sm">
                  <service.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed line-clamp-2">
                {service.heroText}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                  View Deliverables
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Modal Component */}
      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={activeServiceData} 
      />

    </main>
  );
}