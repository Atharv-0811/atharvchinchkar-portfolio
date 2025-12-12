import "./globals.css";
import Providers from "./providers";
import { Poppins, Work_Sans, Epilogue } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HirePopup from "@/components/HirePopup";
import MinimalAbout from "@/components/MinimalAbout";
import AboutSection from "@/components/AboutSection";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-epilogue",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parent Org",
  description: "Parent organisation website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${poppins.variable} ${workSans.variable}`}
      style={
        {
          ["--mantine-font-family" as any]: "var(--font-work-sans)",
          ["--mantine-font-family-headings" as any]: "var(--font-epilogue)",
        } as React.CSSProperties
      }
    >
      <body>
        <Providers>
          <Navbar />
          {/* <MinimalAbout /> */}
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
          <Footer />
          <HirePopup />{children}</Providers>
      </body>
    </html>
  );
}
