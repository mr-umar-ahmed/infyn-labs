import Hero from "@/src/components/home/Hero";
import DivisionSplit from "@/src/components/home/DivisionSplit";
import ServicePreview from "@/src/components/home/ServicePreview";
import AuthoritySection from "@/src/components/home/AuthoritySection";
import FinalCTA from "@/src/components/home/FinalCTA"; // <--- Import

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <DivisionSplit />
      <ServicePreview />
      <AuthoritySection />
      <FinalCTA /> {/* <--- Add here */}
    </main>
  );
}