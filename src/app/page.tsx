import { Hero } from "@/components/home/Hero";
import { Specialties } from "@/components/home/Specialties";
import { RecommendedTests } from "@/components/home/RecommendedTests";
import { WhySection } from "@/components/home/WhySection";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-[#5b465c] via-[#5b465c] to-slate-50">
      <main className="max-w-6xl mx-auto px-4 py-16">
        <Hero />
        <Specialties /> 
        <RecommendedTests />      
        <WhySection />
      </main>
    </div>
  );
}
