import Hero from "@/src/components/home/Hero";
import TechStack from "@/src/components/home/TechStack";
import DivisionSplit from "@/src/components/home/DivisionSplit";
import ServicePreview from "@/src/components/home/ServicePreview";
import AuthoritySection from "@/src/components/home/AuthoritySection";
import FinalCTA from "@/src/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hero Video Section */}
      <Hero />

      {/* 2. Tech Stack */}
      <TechStack />

      {/* 3. The Division Split (Cyber vs Software) */}
      <DivisionSplit />

      {/* 4. Cybersecurity Services Grid */}
      <ServicePreview
        title="Defensive Architecture"
        type="cyber"
        link="/cybersecurity"
      />

      {/* 5. Software Services Grid */}
      <ServicePreview
        title="Software Solutions"
        type="software"
        link="/software"
      />

      {/* 6. Authority & Metrics */}
      <AuthoritySection />

      {/* 7. Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
