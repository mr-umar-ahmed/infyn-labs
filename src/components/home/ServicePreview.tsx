"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cyberServices } from "@/src/lib/serviceData";
import { softwareServices } from "@/src/lib/softwareData";
import ServiceModal from "@/src/components/ui/ServiceModal";

interface ServicePreviewProps {
  title: string;
  type: "cyber" | "software";
  link: string;
}

export default function ServicePreview({ title, type, link }: ServicePreviewProps) {
  // State to track modal
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Determine which dataset to use based on the 'type' prop
  const dataSource = type === "cyber" ? cyberServices : softwareServices;
  
  // Get the 6 items for the grid
  const services = Object.entries(dataSource).slice(0, 6);

  // Get data for the active modal
  const activeServiceData = selectedServiceId ? dataSource[selectedServiceId] : null;

  return (
    <section className="py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl font-bold mb-4 text-white">
              {title}
            </h2>
            <p className="text-gray-400 text-lg">
              {type === "cyber" 
                ? "We don't just patch holes; we redesign the fabric of your digital security. From passive monitoring to active defense."
                : "Building scalable, high-performance digital infrastructure. Engineered for security, designed for growth."
              }
            </p>
          </div>
          
          <Link 
            href={link} 
            className="group flex items-center gap-2 text-white font-medium hover:text-brand-accent transition-colors"
          >
            View All {type === "cyber" ? "Services" : "Solutions"} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(([key, service]) => (
            <div 
              key={key} 
              onClick={() => setSelectedServiceId(key)} // Open Modal
              className="group block p-8 bg-[#0A0A0A] border border-white/10 hover:border-brand-accent transition-colors duration-300 relative overflow-hidden cursor-pointer"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <service.icon className="w-10 h-10 text-brand-accent mb-6 relative z-10" />
              
              <h3 className="font-heading text-2xl font-bold mb-3 text-white group-hover:text-brand-accent transition-colors relative z-10">
                {service.title}
              </h3>
              
              {/* Description Handling */}
              <p className="text-gray-500 leading-relaxed mb-6 relative z-10 line-clamp-3">
                {/* @ts-expect-error - Handles legacy 'desc' property if present, otherwise uses 'whatIsIt' */}
                {service.desc || service.whatIsIt}
              </p>
              
              <div className="flex items-center text-sm font-semibold text-white group-hover:translate-x-2 transition-transform relative z-10">
                Quick View &rarr;
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* The Modal Component */}
      <ServiceModal 
        isOpen={!!selectedServiceId} 
        onClose={() => setSelectedServiceId(null)} 
        service={activeServiceData} 
      />

    </section>
  );
}