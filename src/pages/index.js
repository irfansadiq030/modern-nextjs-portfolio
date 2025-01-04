import Head from "next/head";
import CTASection from "@/components/Home/CTASection";
import HeroSection from "@/components/Home/HeroSection";
import Portfolio from "@/components/Home/Portfolio";
import Services from "@/components/Home/Services";
import StatsSection from "@/components/Home/StatsSection";
import AboutSection from "@/components/Home/AboutSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Irfan Sadiq - Full Stack Developer</title>
        <meta
          name="description"
          content="Irfan Sadiq, Full Stack Developer with 5+ years' experience in WordPress, React, PHP, Laravel & more. Offering expert services on Fiverr & Upwork."
        />
        <meta name="keywords" content="portfolio, services, stats, home" />
      </Head>
      <HeroSection />
      <StatsSection />
      <Services />
      <AboutSection />
      <Portfolio />
      <CTASection />
    </>
  );
}
