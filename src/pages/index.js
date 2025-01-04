import CTASection from "@/components/Home/CTASection";
import HeroSection from "@/components/Home/HeroSection";
import Portfolio from "@/components/Home/Portfolio";
import Services from "@/components/Home/Services";
import StatsSection from "@/components/Home/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <Services />
      <Portfolio />
      <CTASection />
    </>
  );
}
