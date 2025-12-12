'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Database, ArrowRight, Server, BrainCircuit } from 'lucide-react';
import { Flex, SimpleGrid, Text, Button } from '@mantine/core';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

// Animated wrapper component using Motion
const AnimatedSection = ({
  children,
  delay = 0,
  direction = 'up'
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 40, x: 0 };
      case 'down': return { y: -40, x: 0 };
      case 'left': return { y: 0, x: 40 };
      case 'right': return { y: 0, x: -40 };
      case 'fade': return { y: 0, x: 0 };
      default: return { y: 40, x: 0 };
    }
  };

  const initial = getInitialPosition();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initial }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...initial }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.25, 0.4, 0.25, 1] // Custom cubic-bezier for smooth feel
      }}
    >
      {children}
    </motion.div>
  );
};

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

      <div className="text-green-400 min-h-[60px] font-mono text-left tracking-widest font-medium">
        {currentCommand > 0 &&
          staticCommands.slice(0, currentCommand).map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}

        <div>
          {displayText}
          <span className={`${showCursor ? '' : 'opacity-0'} transition-opacity`}>
            |
          </span>
        </div>
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  const skills = [
    { icon: Code, text: 'Web Development' },
    { icon: Server, text: 'Backend Systems' },
    { icon: Database, text: 'Database Management' },
    { icon: BrainCircuit, text: 'AI/ML Integration' }
  ];

  // Button hover animation variants - only transform effects on wrapper
  const primaryButtonVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.03, y: -3 },
    tap: { scale: 0.98 }
  };

  const secondaryButtonVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -2 },
    tap: { scale: 0.98 }
  };

  const skillBadgeVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.01,
      backgroundColor: 'rgba(255, 255, 255, 0.07)',
      borderColor: 'rgba(255, 255, 255, 0.18)'
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-6 pb-12 md:py-16 text-center">
        {/* Name */}
        <AnimatedSection delay={0} direction="up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-2">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Atharv Chinchkar
            </span>
          </h1>
        </AnimatedSection>

        {/* Role */}
        <AnimatedSection delay={100} direction="up">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-8 font-light tracking-widest">
            Full Stack Developer
          </h2>
        </AnimatedSection>

        {/* Skills - Desktop */}
        <AnimatedSection delay={200} direction="up">
          <div className="hidden md:flex flex-wrap justify-center gap-3 mb-8 pt-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={skillBadgeVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur border border-white/10 rounded-full cursor-default"
              >
                <skill.icon size={16} className="text-gray-300" />
                <span className="text-md text-gray-300">{skill.text}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills - Mobile */}
        <AnimatedSection delay={200} direction="up">
          <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs" hiddenFrom="md" mb={'md'}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur border border-white/10 rounded-full"
              >
                <skill.icon size={16} className="text-gray-300" />
                <span className="text-sm text-gray-300">{skill.text}</span>
              </motion.div>
            ))}
          </SimpleGrid>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection delay={300} direction="fade">
          <Flex w={'full'} justify="center" my={{ base: '0', md: 'sm' }} pt={{ base: '0', md: 'sm' }}>
            <Flex w={{ base: 'full', md: '50%' }} justify="center" align="center">
              <Text visibleFrom="md" c="gray.2" fz={{ base: 'md', md: 'xl' }} mb={{ base: 'sm3', md: 'md' }}>
                I develop custom websites, mobile apps, and e-commerce platforms. I handle the entire process from setup to launch, delivering clean code and reliable software solutions.
              </Text>
              <Text hiddenFrom="md" c="gray.2" fz={{ base: 'md', md: 'lg' }} mb={{ base: 'sm3', md: 'md' }}>
                Building custom websites, apps, and e-commerce. I handle the entire process from code to launch.
              </Text>
            </Flex>
          </Flex>
        </AnimatedSection>

        {/* CTA Buttons with Motion hover effects */}
        <AnimatedSection delay={400} direction="up">
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            gap="sm"
            justify="center"
            px={{ base: 'md', md: '0' }}
          >
            {/* Primary Button - View My Work */}
            <motion.div
              variants={primaryButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{ display: 'inline-block' }}
            >
              <Button
                component="a"
                href="#projects"
                variant="white"
                color="black"
                fz={{ base: 'md', md: 'lg' }}
                fw={500}
                size='lg'
                radius="xl"
                rightSection={<ArrowRight size={20} />}
                styles={{
                  root: {
                    transition: 'box-shadow 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 15px 35px rgba(255, 255, 255, 0.15)'
                    }
                  }
                }}
              >
                View My Work
              </Button>
            </motion.div>

            {/* Secondary Button - Get In Touch */}
            <motion.div
              variants={secondaryButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{ display: 'inline-block' }}
            >
              <Button
                component="a"
                href="#contact"
                variant="outline"
                color="white"
                fz={{ base: 'md', md: 'lg' }}
                fw={500}
                size='lg'
                radius="xl"
                styles={{
                  root: {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    transition: 'background-color 0.3s ease, border-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.4)'
                    }
                  }
                }}
              >
                Get In Touch
              </Button>
            </motion.div>
          </Flex>
        </AnimatedSection>

        {/* Scroll Indicator with subtle animation */}
        <motion.div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <ChevronDown size={24} className="text-gray-600" />
        </motion.div>
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