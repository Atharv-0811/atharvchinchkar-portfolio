/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-space-grotesk)', 'sans-serif'], // This will apply Space Grotesk
          mono: ['var(--font-roboto-mono)', 'monospace'],     // This will apply Roboto Mono
        },
      },
    },
    plugins: [],
  }
  