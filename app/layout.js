// app/layout.jsx
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import '@/app/globals.css';
import { Space_Grotesk, Roboto_Mono } from 'next/font/google'; // Import the font
import HirePopup from '@/components/HirePopUp';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk', // Define a CSS variable for Tailwind
});

const robotoMono = Roboto_Mono({ // Define Roboto_Mono
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono', // Define a CSS variable for Tailwind
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Portfolio Website',
  description: 'Portfolio Website for Atharv Chinchkar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${robotoMono.variable}`}>
      <body className="bg-gray-900 text-gray-50">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
        <HirePopup />
        {children}
      </body>
    </html>
  );
}
