import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center text-white">
      <div className="text-center px-4">
        {/* Your Name */}
        <h2 className="text-xl sm:text-5xl text-white-400 font-semibold mb-2 tracking-wide mb-24">
          Atharv Chinchkar
        </h2>

        {/* Coming Soon */}
        <h1 className="text-7xl sm:text-8xl font-extrabold mb-4 tracking-tight">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl mb-6 text-gray-300">
          I&apos;m building something awesome. 🚀
        </p>

        {/* Explore Other Work */}
        <p className="text-md sm:text-lg mb-10 text-gray-400">
          In the meantime, check out some of my other work:
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="https://github.com/Atharv-0811"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/atharv-chinchkar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/atharvchinchkar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </main>
  );
}
