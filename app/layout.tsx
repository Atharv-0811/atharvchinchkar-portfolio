import "./globals.css";
import Providers from "./providers";
import { Poppins, Work_Sans, Epilogue } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HirePopup from "@/components/HirePopup";

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
  metadataBase: new URL('https://atharvchinchkar.vercel.app'),
  title: {
    default: "Atharv Chinchkar | Full Stack Developer & AI Enthusiast",
    template: "%s | Atharv Chinchkar",
  },
  description: "Portfolio of Atharv Chinchkar, a Full Stack Developer specializing in React, Next.js, Node.js, and AI/ML solutions. Building exceptional digital experiences with modern technologies.",
  keywords: ["Atharv Chinchkar", "Full Stack Developer", "Web Developer", "React", "Next.js", "Node.js", "AI/ML", "Portfolio", "Frontend Developer", "Software Engineer"],
  authors: [{ name: "Atharv Chinchkar" }],
  creator: "Atharv Chinchkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atharvchinchkar.vercel.app",
    title: "Atharv Chinchkar | Full Stack Developer & AI Enthusiast",
    description: "Explore the portfolio of Atharv Chinchkar, featuring innovative web and AI projects.",
    siteName: "Atharv Chinchkar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atharv Chinchkar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharv Chinchkar | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${poppins.variable} ${workSans.variable}`}
      style={
        {
          ["--mantine-font-family" as any]: "var(--font-work-sans)",
          ["--mantine-font-family-headings" as any]: "var(--font-poppins)",
        } as React.CSSProperties
      }
    >
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <HirePopup />
        </Providers>
      </body>
    </html>
  );
}
