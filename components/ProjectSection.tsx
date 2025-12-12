// Projects Section Component
'use client';

import { useRef } from 'react';
import { Code, Server, Globe, ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Title, Text, SimpleGrid, Paper, Stack, Group, Badge, Button, Flex, Anchor } from '@mantine/core';
import { motion, useInView } from 'motion/react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image: string;
}

// Subtle animated wrapper - same as AboutSection
const FadeIn = ({
  children,
  delay = 0,
  direction = 'up'
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const getOffset = () => {
    switch (direction) {
      case 'up': return { y: 20, x: 0 };
      case 'down': return { y: -20, x: 0 };
      case 'left': return { y: 0, x: 20 };
      case 'right': return { y: 0, x: -20 };
      case 'fade': return { y: 0, x: 0 };
      default: return { y: 20, x: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration: 0.5,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Dualnature Music Website",
      description: "A full-stack responsive solution with React, Node.js, and TailwindCSS. Features include dynamically chaning themes, realtime updating song gallery, and contact page integration with email.",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      github: "https://github.com/Atharv-0811/this-is-dualnature",
      live: "https://www.thisisdualnature.com/",
      image: "/projects/dualnature.png"
    },
    {
      title: "A4V1 Consultancy",
      description: "A modern consultancy website for an AI/ML and full-stack solutions provider. Features dynamic animations, multi-step contact forms, and showcases projects across industries like railways and pharma.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Node.js"],
      github: "#",
      live: "https://www.a4v1.com/",
      image: "/projects/a4v1.png"
    },
    {
      title: "Jal Mitra",
      description: "A full-stack IoT system for real-time water level monitoring in railway reservoirs. Built the backend, dashboard, and sensor integration for a live government project.",
      technologies: ["Node.js", "React", "MongoDB", "IoT Sensors"],
      github: "#",
      live: "https://jal-mitra.vercel.app/",
      image: "/projects/jalmitra.png"
    },
  ];

  return (
    <Box
      component="section"
      id="projects"
      py={{ base: 60, sm: 80 }}
      style={{ backgroundColor: '#0f0f18' }}
    >
      <Container size="xl" px={{ base: 'md', sm: 'lg' }}>
        {/* Header */}
        <FadeIn delay={0} direction="fade">
          <Stack align="center" gap="sm" mb={{ base: 40, sm: 64 }}>
            <Title
              order={2}
              fz={{ base: '2rem', sm: '2.5rem', md: '3rem' }}
              ta="center"
              fw={700}
              lh={1.1}
              c='mint.0'
            >
              Featured Projects
            </Title>
            <Text
              fz="lg"
              c="gray.5"
              ta="center"
              maw={672}
            >
              Here are some of the projects I&apos;ve worked on that showcase my skills and passion for creating exceptional digital experiences.
            </Text>
          </Stack>
        </FadeIn>

        {/* Projects Grid */}
        <SimpleGrid
          cols={{ base: 1, md: 2, lg: 3 }}
          spacing="lg"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{
                duration: 0.4,
                delay: 0.1 * index,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              style={{ height: '100%' }}
            >
              <Paper
                radius="lg"
                bg="rgba(255, 255, 255, 0.05)"
                h="100%"
                style={{
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                styles={{
                  root: {
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.18)'
                    }
                  }
                }}
              >
                {/* Project Image */}
                <Box
                  style={{
                    aspectRatio: '16/9',
                    background: 'linear-gradient(to bottom right, #1f2937, #111827)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                  ) : (
                    <Flex
                      pos="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      align="center"
                      justify="center"
                      style={{
                        background: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.1))'
                      }}
                    >
                      <Text fz="2rem" fw={700} c="rgba(255,255,255,0.2)">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </Text>
                    </Flex>
                  )}
                </Box>

                {/* Project Content */}
                <Stack p="sm" gap="sm" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Title
                    order={3}
                    fz="xl"
                    fw={600}
                    c="white"
                    style={{ transition: 'color 0.3s ease' }}
                  >
                    {project.title}
                  </Title>
                  <Text
                    fz="sm"
                    c="gray.5"
                    lh={1.6}
                    style={{ flex: 1 }}
                  >
                    {project.description}
                  </Text>

                  <Box mt="auto">
                    {/* Technologies */}
                    <Group gap="xs" mb="sm">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          size="sm"
                          radius="xl"
                          styles={{
                            root: {
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              borderColor: 'rgba(255, 255, 255, 0.1)',
                              color: '#d1d5db',
                              textTransform: 'none',
                              fontWeight: 400,
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                borderColor: 'rgba(255, 255, 255, 0.2)'
                              }
                            }
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </Group>

                    {/* Project Links */}
                    <Group gap="sm">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        style={{ width: '100%' }}
                      >
                        <Button
                          w='100%'
                          component="a"
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          bg="#fdfbf7ec"
                          c="#0C214A"
                          color="dark"
                          size="sm"
                          radius="md"
                          leftSection={<ExternalLink size={16} />}
                          styles={{
                            root: {
                              transition: 'box-shadow 0.2s ease',
                              '&:hover': {
                                boxShadow: '0 6px 16px rgba(255, 255, 255, 0.12)'
                              }
                            }
                          }}
                        >
                          View
                        </Button>
                      </motion.div>
                    </Group>
                  </Box>
                </Stack>
              </Paper>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>

      {/* Explore All Button */}
      <FadeIn delay={400} direction="up">
        <Flex justify="center" mt={{ base: 40, sm: 48 }}>
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            style={{ display: 'inline-block' }}
          >
            <Button
              component={Link}
              href="/projects"
              variant="outline"
              size="md"
              radius="md"
              fw={600}
              rightSection={<ArrowRight size={20} />}
              styles={{
                root: {
                  borderColor: 'rgba(107, 114, 128, 0.5)',
                  backgroundColor: 'rgba(17, 24, 39, 0.8)',
                  backdropFilter: 'blur(12px)',
                  color: '#f3f4f6',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(31, 41, 55, 0.8)',
                    boxShadow: '0 10px 25px rgba(107, 114, 128, 0.2)'
                  }
                }
              }}
            >
              Explore All Projects
            </Button>
          </motion.div>
        </Flex>
      </FadeIn>
    </Box>
  );
};

export default ProjectsSection;