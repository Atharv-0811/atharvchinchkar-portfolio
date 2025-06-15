import { Metadata } from 'next';

export const metadata = {
  title: 'Atharv Chinchkar Portfolio', // Specific title for the home page
  description: 'Portfolio Website for Atharv Chinchkar',
  // Add any other home-page specific metadata here (e.g., Open Graph tags)
};

export default function HomePage() {
  // If your layout.js is calling all necessary components,
  // this page.jsx might be empty or contain very minimal, unique content.
  // For example, if you have a unique hero section only on the homepage:
  return (
    <></>
  );
}