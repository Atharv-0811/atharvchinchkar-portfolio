import { Metadata } from 'next';
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: 'Home | Atharv Chinchkar',
  description: 'Welcome to the portfolio of Atharv Chinchkar. Discover my projects, skills, and journey in Full Stack Development and AI.',
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