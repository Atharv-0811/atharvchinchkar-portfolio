// About Section Component
'use client';

import { useState } from 'react';
import { Code, Server, Database, Globe, Braces, Layers, FileJson, Cpu, Layout, Palette, Terminal, Workflow } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'React & Next.js', icon: Code, category: 'Frontend', color: '#61DAFB' },
    // { name: 'TypeScript', icon: Braces, category: 'Frontend', color: '#3178C6' },
    { name: 'UI/UX Design', icon: Layout, category: 'Frontend', color: '#FF4B4B' },
    { name: 'CSS & Tailwind', icon: Palette, category: 'Frontend', color: '#38B2AC' },
    { name: 'Node.js', icon: Server, category: 'Backend', color: '#339933' },
    { name: 'Python', icon: Terminal, category: 'Backend', color: '#3776AB' },
    { name: 'PostgreSQL', icon: Database, category: 'Database', color: '#336791' },
    { name: 'MongoDB', icon: Database, category: 'Database', color: '#47A248' },
    { name: 'REST APIs', icon: Globe, category: 'API', color: '#FF6C37' },
    // { name: 'GraphQL', icon: Workflow, category: 'API', color: '#E535AB' },
    // { name: 'System Design', icon: Layers, category: 'Architecture', color: '#FF6B6B' },
    // { name: 'Data Structures', icon: Cpu, category: 'Core', color: '#FFD700' }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 space-y-6 text-center">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with a fresh perspective on modern web technologies. 
                As a recent computer science graduate, I bring enthusiasm, creativity, and a strong foundation 
                in both frontend and backend development.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a love for creating 
                digital experiences that solve real problems. I've worked on various freelance projects, 
                gaining hands-on experience with the latest technologies and best practices.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white text-center">Skills & Technologies</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group bg-white/5 backdrop-blur border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <skill.icon className="w-6 h-6 transition-colors duration-300" style={{ color: skill.color }} />
                      <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;