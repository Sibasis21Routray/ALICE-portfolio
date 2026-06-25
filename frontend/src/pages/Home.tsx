import HeroSection from "../components/home/hero";
import AboutPreview from "../components/home/AboutPreview";
import ExperiencePreview from "../components/home/ExperiencePreview";
import TestimonialsPreview from "../components/home/TestimonialsPreview";
import FinalCTA from "../components/home/Finalcta";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden font-sans">
      <HeroSection />
      <AboutPreview />
      <ExperiencePreview />
      <TestimonialsPreview />
      <FinalCTA />
    </div>
  );
}