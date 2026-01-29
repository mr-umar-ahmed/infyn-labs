import Hero from "@/src/components/home/Hero";
import DivisionSplit from "@/src/components/home/DivisionSplit";
import ServicePreview from "@/src/components/home/ServicePreview";
import AuthoritySection from "@/src/components/home/AuthoritySection";
import FinalCTA from "@/src/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hero Video Section */}
      <Hero />

      {/* 2. The Division Split (Cyber vs Software) */}
      <DivisionSplit />

      {/* 3. Cybersecurity Services Grid */}
      <ServicePreview 
        title="Defensive Architecture" 
        type="cyber" 
        link="/cybersecurity"
      />

      {/* 4. Software Services Grid */}
      <ServicePreview 
        title="Software Solutions" 
        type="software" 
        link="/software"
      />

      {/* 5. Authority & Metrics */}
      <AuthoritySection />

      {/* 6. Final Call to Action */}
      <FinalCTA />
    </main>
  );
}