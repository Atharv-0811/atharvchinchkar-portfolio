// About Section Component
'use client';

import { useRef } from 'react';
import { Container, Title, Text, Stack, Paper, SimpleGrid, Box, Flex, Badge, Group } from '@mantine/core';
import { Code, Server, Database, Globe, Layout, Palette, Terminal, Heart, Sparkles, Coffee, Handshake } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { motion, useInView } from 'motion/react';

interface Skill {
    name: string;
    icon: LucideIcon;
    category: string;
    color: string;
}

// Subtle animated wrapper - more gentle than HeroSection
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

const AboutSection = () => {
    const skills: Skill[] = [
        { name: 'React & Next.js', icon: Code, category: 'Frontend', color: '#61DAFB' },
        { name: 'UI/UX Design', icon: Layout, category: 'Frontend', color: '#FF4B4B' },
        { name: 'CSS & Tailwind', icon: Palette, category: 'Frontend', color: '#38B2AC' },
        { name: 'Node.js', icon: Server, category: 'Backend', color: '#339933' },
        { name: 'Python', icon: Terminal, category: 'Backend', color: '#3776AB' },
        { name: 'PostgreSQL', icon: Database, category: 'Database', color: '#336791' },
        { name: 'MongoDB', icon: Database, category: 'Database', color: '#47A248' },
        { name: 'Sanity CMS', icon: Globe, category: 'CMS', color: '#FF6C37' },
    ];

    // Consistent accent color from theme (mint.4)
    const accentColor = '#358CA4';

    const values = [
        {
            icon: Handshake,
            title: 'Reliable Partner',
            desc: 'I deliver on my promises. When I commit to a deadline, you can count on it.',
        },
        {
            icon: Sparkles,
            title: 'Quality First',
            desc: 'Clean code, thoughtful design, and attention to every detail.',
        },
        {
            icon: Heart,
            title: 'Passionate Creator',
            desc: 'I genuinely love what I do, and it shows in my work.',
        },
    ];

    return (
        <Box
            component="section"
            id="about"
            py={{ base: 20, sm: 40, md: 60 }}
            style={{
                background: '#0f0f18',
            }}
        >
            <Container size="lg" px={{ base: 'md', sm: 'lg' }}>
                {/* Header */}
                <FadeIn delay={0} direction="fade">
                    <Stack align="center" gap="sm" mb={{ base: 28, md: 'lg' }}>
                        <Title
                            order={2}
                            fz={{ base: '2rem', sm: '2.5rem', md: '3rem' }}
                            ta="center"
                            fw={700}
                            lh={1.1}
                            c='mint.0'
                        >
                            About Me
                        </Title>
                    </Stack>
                </FadeIn>

                {/* Main Content - Two Column Layout */}
                <SimpleGrid
                    cols={{ base: 1, md: 2 }}
                    spacing={{ base: 40, md: 60 }}
                    mb={{ base: 60, sm: 80 }}
                >
                    {/* Left Column - Welcome Message */}
                    <FadeIn delay={100} direction="up">
                        <Stack gap="lg" align='center' justify='center' pt={'xs'}>
                            <Text
                                fz={{ base: 'md', sm: 'lg' }}
                                lh={1.4}
                                style={{ color: '#9CA3AF' }}
                            >
                                Hey there! I&apos;m <span style={{ color: accentColor, fontWeight: 600 }}>Atharv</span>,
                                a Full Stack Developer who&apos;s genuinely excited about building things that matter.
                                Fresh out of computer science, I bring a blend of <span style={{ color: accentColor }}>modern technical skills</span> and
                                a fresh perspective to every project.
                            </Text>

                            <Text
                                fz={{ base: 'md', sm: 'lg' }}
                                lh={1.8}
                                style={{ color: '#9CA3AF' }}
                            >
                                What sets me apart? I don&apos;t just write code—I <span style={{ color: accentColor }}>solve problems</span>.
                                Whether it&apos;s crafting a seamless user experience or architecting a robust backend,
                                I approach every challenge with curiosity and dedication. Through freelance work,
                                I&apos;ve learned that great software is built on <span style={{ color: accentColor }}>clear communication</span> and
                                genuine care for the end result.
                            </Text>
                        </Stack>
                    </FadeIn>

                    {/* Right Column - Values */}
                    <FadeIn delay={200} direction="up">
                        <Stack gap="sm">
                            <Text
                                size="sm"
                                fw={600}
                                style={{
                                    color: '#6B7280',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase'
                                }}
                                mb="xs"
                            >
                                Why Work With Me
                            </Text>

                            {values.map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: '-50px' }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.1 * idx,
                                            ease: [0.25, 0.1, 0.25, 1]
                                        }}
                                    >
                                        <Paper
                                            px={{ base: 'xs', sm: 'xs' }}
                                            py={{ base: 'xs', sm: 'xs2' }}
                                            radius="lg"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.02)',
                                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            }}
                                            styles={{
                                                root: {
                                                    '&:hover': {
                                                        background: 'rgba(255, 255, 255, 0.04)',
                                                        borderColor: 'rgba(255, 255, 255, 0.12)',
                                                        transform: 'translateX(4px)'
                                                    }
                                                }
                                            }}
                                        >
                                            <Group gap="sm" wrap="nowrap" align='start'>
                                                <Box
                                                    p="sm"
                                                    style={{
                                                        background: `${accentColor}15`,
                                                        borderRadius: '12px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <IconComponent
                                                        size={22}
                                                        style={{ color: accentColor }}
                                                    />
                                                </Box>
                                                <Stack gap={4}>
                                                    <Text
                                                        size="md"
                                                        fw={600}
                                                        style={{ color: '#E5E7EB' }}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                    <Text
                                                        size="sm"
                                                        style={{ color: '#6B7280' }}
                                                        lh={1.5}
                                                    >
                                                        {item.desc}
                                                    </Text>
                                                </Stack>
                                            </Group>
                                        </Paper>
                                    </motion.div>
                                );
                            })}
                        </Stack>
                    </FadeIn>
                </SimpleGrid>

                {/* Skills Section */}
                <FadeIn delay={300} direction="fade">
                    <Stack gap="md">
                        <Flex direction="column" align="center" gap="sm">
                            <Title
                                order={4}
                                ta="center"
                                fw={600}
                                c="mint.0"
                                style={{
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase'
                                }}
                            >
                                Technologies I Work With
                            </Title>
                        </Flex>

                        <SimpleGrid
                            cols={{ base: 2, xs: 3, sm: 4 }}
                            spacing={{ base: 'xs', sm: 'sm', md: 'sm' }}
                        >
                            {skills.map((skill, index) => {
                                const IconComponent = skill.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-30px' }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.03 * index,
                                            ease: 'easeOut'
                                        }}
                                    >
                                        <Paper
                                            p={{ base: 'xs', sm: 'sm' }}
                                            radius="md"
                                            bg="transparent"
                                            style={{
                                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                                cursor: 'default'
                                            }}
                                            styles={{
                                                root: {
                                                    '&:hover': {
                                                        borderColor: 'rgba(255, 255, 255, 0.15)',
                                                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                                        transform: 'translateY(-2px)'
                                                    }
                                                }
                                            }}
                                        >
                                            <Stack align="center" gap='sm'>
                                                <IconComponent
                                                    size={20}
                                                    color={skill.color}
                                                    strokeWidth={2}
                                                />
                                                <Text
                                                    fz={{ base: 'xs', sm: 'sm' }}
                                                    fw={500}
                                                    ta="center"
                                                    lh={1.3}
                                                    style={{
                                                        color: '#9CA3AF',
                                                        transition: 'color 0.25s ease'
                                                    }}
                                                    styles={{
                                                        root: {
                                                            '&:hover': {
                                                                color: 'white'
                                                            }
                                                        }
                                                    }}
                                                >
                                                    {skill.name}
                                                </Text>
                                            </Stack>
                                        </Paper>
                                    </motion.div>
                                );
                            })}
                        </SimpleGrid>
                    </Stack>
                </FadeIn>
            </Container>
        </Box>
    );
};

export default AboutSection;
