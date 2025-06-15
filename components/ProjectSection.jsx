// Projects Section Component
'use client';

import { useState } from 'react';
import { Code, Server, Globe, ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Dualnature Music Website",
      description: "A full-stack responsive solution with React, Node.js, and TailwindCSS. Features include dynamically chaning themes, realtime updating song gallery, and contact page integration with email.",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      github: "https://github.com/Atharv-0811/this-is-dualnature",
      live: "https://www.thisisdualnature.com/",
      image: "/projects/dualnature.png" // Add your image path here
    },
    {
      title: "SoftSell",
      description: `A responsive, single-page marketing website built for a fictional software resale startup. This project focuses on streamlined user experience and effective presentation of key information for selling software licenses.`,
      technologies: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
      github: "https://github.com/Atharv-0811/SoftSell",
      live: "https://softsell-sepia.vercel.app/",
      image: "/projects/softsell.png" // Add your image path here
    },
    {
      title: "Dummy Project",
      description: "An interactive dummy dashboard that provides real-time dummy data, dummy, and dummy visualizations using dummy.js.",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      github: "#",
      live: "#",
      image: "/window.svg" // Add your image path here
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex flex-col">
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/20">{project.title.split(' ').map(word => word[0]).join('')}</div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 border border-white/20 text-gray-300 rounded-lg hover:bg-white/5 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Link
          href="https://github.com/Atharv-0811"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2 rounded-md font-semibold 
               border border-gray-500/50 
               bg-gray-900/80 backdrop-blur-md 
               text-gray-100 
               shadow-md 
               hover:bg-gray-800/80 hover:shadow-lg hover:shadow-gray-500/20 
               transition-all duration-300 transform hover:translate-y-[-2px] 
               group">
          Explore All Projects
          <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

    </section>
  );
};

export default ProjectsSection;