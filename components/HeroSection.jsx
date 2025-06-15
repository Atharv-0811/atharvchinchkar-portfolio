'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Globe, ArrowRight, Menu, X, Server, BrainCog, BrainCircuit } from 'lucide-react';

// Interactive Terminal Component
const InteractiveTerminal = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [currentDynamicIndex, setCurrentDynamicIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);


  const staticCommands = [
    '$ initializing project ... ',
    '> Analyzing details...',
    '> whoami',
    'atharv-chinchkar',
    '> cat skills.txt',
  ];

  // These will cycle after the static ones
  const dynamicCommands = [
    'Full Stack Development ✓',
    'Modern Web Technologies ✓',
    'Database Architectural Design ✓',
    'AI/ML Integration ✓',
    '> npm run build-future',
    'Building amazing projects...',
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      if (currentCommand < staticCommands.length) {
        // Typing static commands first
        const command = staticCommands[currentCommand];
        if (displayText.length < command.length) {
          setDisplayText((prev) => prev + command[displayText.length]);
        } else {
          setTimeout(() => {
            setCurrentCommand((prev) => prev + 1);
            setDisplayText('');
          }, 1500);
        }
      } else {
        // Loop through dynamic commands
        const command = dynamicCommands[currentDynamicIndex];
        if (displayText.length < command.length) {
          setDisplayText((prev) => prev + command[displayText.length]);
        } else {
          setTimeout(() => {
            setCurrentDynamicIndex((prev) =>
              prev + 1 < dynamicCommands.length ? prev + 1 : 0
            );
            setDisplayText('');
          }, 1500);
        }
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [currentCommand, currentDynamicIndex, displayText]);


  return (
    <div className="bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-lg p-4 font-mono text-sm w-full max-w-md">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 ml-2">terminal</span>
      </div>

      {/* Display static first, then dynamic */}
      <div className="text-green-400 min-h-[60px] font-mono text-left tracking-widest font-medium">
        {currentCommand > 0 &&
          staticCommands.slice(0, currentCommand).map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}

        {/* Currently typing */}
        <div>
          {currentCommand < staticCommands.length ? (
            <>
              {displayText}
              <span className={`${showCursor ? '' : 'opacity-0'} transition-opacity`}>
                |
              </span>
            </>
          ) : (
            <>
              {displayText}
              <span className={`${showCursor ? '' : 'opacity-0'} transition-opacity`}>
                |
              </span>
            </>
          )}

        </div>
      </div>
    </div>
  );

};

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-16 md:pt-20">      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Greeting */}
          <div className="mb-6 text-center">
            <span className="inline-block px-4 py-2 bg-gray-900/90 backdrop-blur border border-gray-700 rounded-md font-mono text-green-500">
              <code>Hello World, I'm</code>
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Atharv Chinchkar
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-6 font-light tracking-widest">
            Full Stack Developer
          </h2>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { icon: Code, text: 'Web Development' },
              { icon: Server, text: 'Backend Systems' },
              { icon: Database, text: 'Database Management' },
              { icon: BrainCircuit, text: 'AI/ML Integration' }
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur border border-white/10 rounded-full">
                <skill.icon size={16} className="text-gray-300" />
                <span className="text-sm text-gray-300">{skill.text}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            I craft modern web experiences with clean code and intuitive design.
            Passionate about creating solutions that make a difference.
          </p>

          {/* Terminal - positioned between description and CTA buttons */}
          <div className="flex justify-center mb-10">
            <InteractiveTerminal />
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-105"
            >
              View My Work
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-xl font-medium hover:bg-white/5 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-600" />
        </div>
      </div>
    </section>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
    </div>
  );
};

export default Portfolio;