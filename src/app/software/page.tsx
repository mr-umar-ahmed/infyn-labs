"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { softwareServices } from "@/src/lib/softwareData";
import ServiceModal from "@/src/components/ui/ServiceModal";
import ContactModal from "@/src/components/ui/ContactModal"; // <--- IMPORT

export default function SoftwarePage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false); // <--- NEW STATE

  const activeServiceData = selectedService ? softwareServices[selectedService] : null;

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background">
      
      {/* Header */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 text-white">
            Engineering <span className="text-brand-accent">Secure Systems</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Most software agencies prioritize speed over safety. We prioritize both. 
            Infyn Labs builds robust, scalable platforms.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(softwareServices).map(([key, service]) => (
            <div 
              key={key}
              onClick={() => setSelectedService(key)}
              className="group flex flex-col p-8 bg-[#0A0A0A] border border-white/10 hover:border-brand-accent/50 transition-all duration-300 rounded-sm cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-white/5 rounded-sm">
                  <service.icon className="w-8 h-8 text-white group-hover:text-brand-accent transition-colors" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-700 group-hover:text-brand-accent transition-colors" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {service.whatIsIt}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                  View Details
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 1. Service Modal */}
      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={activeServiceData}
        onRequestScope={() => {
          setSelectedService(null);
          setIsContactOpen(true);
        }}
      />

      {/* 2. Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultInterest={activeServiceData?.title || "Software Solution"}
      />
      
    </main>
  );
}