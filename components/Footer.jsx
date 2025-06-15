// Footer Component
'use client';

import React from 'react'
import { Code, Server, Globe, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
    return (
      <footer className="bg-gray-950 border-t border-white/10 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Atharv Chinchkar
              </h3>
              <p className="text-gray-400 mb-4">
                Full Stack Developer passionate about creating exceptional digital experiences.
              </p>
              <p className="text-sm text-gray-500">
                © 2025 Atharv Chinchkar. All rights reserved.
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="flex gap-4">
                <a
                  href="https://github.com/Atharv-0811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/atharv-chinchkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:atharvchinchkar@gmail.com"
                  className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;