// Projects Section Component
'use client';

import { useState } from 'react';
import { Code, Server, Globe, ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container, Title, Text, SimpleGrid, Paper, Stack, Group, Badge, Button, Flex, Anchor } from '@mantine/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image: string;
}

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

    // {
    //   title: "SoftSell",
    //   description: `A responsive, single-page marketing website built for a fictional software resale startup. This project focuses on streamlined user experience and effective presentation of key information for selling software licenses.`,
    //   technologies: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
    //   github: "https://github.com/Atharv-0811/SoftSell",
    //   live: "https://softsell-sepia.vercel.app/",
    //   image: "/projects/softsell.png"
    // },
    // {
    //   title: "Dummy Project",
    //   description: "An interactive dummy dashboard that provides real-time dummy data, dummy, and dummy visualizations using dummy.js.",
    //   technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    //   github: "#",
    //   live: "#",
    //   image: "/window.svg"
    // }
  ];

  return (
    <Box
      component="section"
      id="projects"
      py={{ base: 60, sm: 80 }}
      style={{ backgroundColor: '#030712' }}
    >
      <Container size="xl" px={{ base: 'md', sm: 'lg' }}>
        <Stack align="center" gap="sm" mb={{ base: 40, sm: 64 }}>
          <Title
            order={2}
            fz={{ base: '1.875rem', sm: '2.25rem' }}
            fw={700}
            c="white"
            ta="center"
          >
            Featured Projects
          </Title>
          <Box
            w={96}
            h={4}
            mb="sm"
            style={{
              background: 'linear-gradient(to right, white, #6b7280)',
              borderRadius: '2px'
            }}
          />
          <Text
            fz="lg"
            c="gray.5"
            ta="center"
            maw={672}
          >
            Here are some of the projects I&apos;ve worked on that showcase my skills and passion for creating exceptional digital experiences.
          </Text>
        </Stack>

        <SimpleGrid
          cols={{ base: 1, md: 2, lg: 3 }}
          spacing="lg"
        >
          {projects.map((project, index) => (
            <Paper
              key={index}
              radius="lg"
              bg="rgba(255, 255, 255, 0.05)"
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
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-8px)'
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
                      transition: 'transform 0.3s ease'
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
                            fontWeight: 400
                          }
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </Group>

                  {/* Project Links */}
                  <Group gap="sm">
                    <Button
                      w='full'
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
                    >
                      View
                    </Button>
                  </Group>
                </Box>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>

      <Flex justify="center" mt={{ base: 40, sm: 48 }}>
        <Button
          component={Link}
          href="https://github.com/Atharv-0811"
          target="_blank"
          rel="noopener noreferrer"
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
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 25px rgba(107, 114, 128, 0.2)'
              }
            },
            section: {
              transition: 'transform 0.3s ease',
              '[data-mantine-button]:hover &': {
                transform: 'translateX(4px)'
              }
            }
          }}
        >
          Explore All Projects
        </Button>
      </Flex>
    </Box>
  );
};

export default ProjectsSection;