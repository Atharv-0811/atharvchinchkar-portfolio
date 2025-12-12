import { Metadata } from 'next';
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: 'Atharv Chinchkar Portfolio',
  description: 'Portfolio Website for Atharv Chinchkar',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}