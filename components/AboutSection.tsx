// About Section Component
'use client';

import { Container, Title, Text, Stack, Paper, SimpleGrid, Box, Flex, Badge, Group } from '@mantine/core';
import { Code, Server, Database, Globe, Layout, Palette, Terminal, Heart, Sparkles, Coffee, Handshake } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Skill {
    name: string;
    icon: LucideIcon;
    category: string;
    color: string;
}

const AboutSection = () => {
    const skills: Skill[] = [
        { name: 'React & Next.js', icon: Code, category: 'Frontend', color: '#61DAFB' },
        { name: 'UI/UX Design', icon: Layout, category: 'Frontend', color: '#FF4B4B' },
        { name: 'CSS & Tailwind', icon: Palette, category: 'Frontend', color: '#38B2AC' },
        { name: 'Node.js', icon: Server, category: 'Backend', color: '#339933' },
        { name: 'Python', icon: Terminal, category: 'Backend', color: '#3776AB' },
        { name: 'PostgreSQL', icon: Database, category: 'Database', color: '#336791' },
        { name: 'MongoDB', icon: Database, category: 'Database', color: '#47A248' },
        { name: 'REST APIs', icon: Globe, category: 'API', color: '#FF6C37' },
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
            pb={{ base: 60, sm: 80, md: 100 }}
            pt={{ base: 20, sm: 40, md: 60 }}
            style={{
                background: 'linear-gradient(to bottom, #000000 0%, #0a0a0f 50%, #0f0f18 100%)'
            }}
        >
            <Container size="lg" px={{ base: 'md', sm: 'lg' }}>
                {/* Header with gradient text like Hero */}
                <Stack align="center" gap="sm" mb={{ base: 28, md: 'lg' }}>
                    <Badge
                        variant="outline"
                        color="gray"
                        size="lg"
                        radius="xl"
                        px="lg"
                        styles={{
                            root: {
                                borderColor: 'rgba(255,255,255,0.15)',
                                backgroundColor: 'rgba(255,255,255,0.03)'
                            },
                            label: {
                                color: '#9CA3AF',
                                fontWeight: 500,
                                letterSpacing: '0.05em'
                            }
                        }}
                    >
                        Get to Know Me
                    </Badge>
                    <Title
                        order={2}
                        fz={{ base: '2rem', sm: '2.5rem', md: '3rem' }}
                        ta="center"
                        fw={700}
                        lh={1.1}
                        c='mint.0'
                    // style={{
                    //     fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    //     background: 'linear-gradient(135deg, #ffffff 0%, #d1d5db 50%, #9ca3af 100%)',
                    //     WebkitBackgroundClip: 'text',
                    //     WebkitTextFillColor: 'transparent',
                    //     backgroundClip: 'text',
                    // }}
                    >
                        About Me
                    </Title>
                </Stack>

                {/* Main Content - Two Column Layout */}
                <SimpleGrid
                    cols={{ base: 1, md: 2 }}
                    spacing={{ base: 40, md: 60 }}
                    mb={{ base: 60, sm: 80 }}
                >
                    {/* Left Column - Welcome Message */}
                    <Stack gap="lg" align='center' justify='center' pt={'xs'}>
                        {/* <Flex align="center" gap="sm">
                            <Coffee size={24} className="text-amber-400" style={{ color: '#FBBF24' }} />
                            <Text
                                size="lg"
                                fw={600}
                                style={{
                                    color: '#E5E7EB',
                                    letterSpacing: '0.025em'
                                }}
                            >
                                Welcome!
                            </Text>
                        </Flex> */}

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

                        {/* Stats/Highlights */}
                        {/* <Flex
                            gap={{ base: 'md', sm: 'xl' }}
                            mt="md"
                            wrap="wrap"
                        >
                            {[
                                { value: '10+', label: 'Projects' },
                                { value: '100%', label: 'Commitment' },
                                { value: '24/7', label: 'Support' },
                            ].map((stat, idx) => (
                                <Box key={idx}>
                                    <Text
                                        size="xl"
                                        fw={700}
                                        style={{
                                            color: '#FFFFFF',
                                            fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                                        }}
                                    >
                                        {stat.value}
                                    </Text>
                                    <Text size="sm" style={{ color: '#6B7280' }}>
                                        {stat.label}
                                    </Text>
                                </Box>
                            ))}
                        </Flex> */}
                    </Stack>

                    {/* Right Column - Values */}
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
                                <Paper
                                    key={idx}
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
                            );
                        })}
                    </Stack>
                </SimpleGrid>

                {/* Skills Section */}
                <Stack gap="md">
                    <Flex direction="column" align="center" gap="sm">
                        <Title
                            order={4}
                            ta="center"
                            fw={600}
                            c="mint.0"
                            style={{
                                // color: '#6B7280',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase'
                            }}
                        >
                            Technologies I Work With
                        </Title>
                        {/* <Title
                            order={3}
                            ta="center"
                            fw={600}
                            style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                color: '#E5E7EB'
                            }}
                        >
                            Tech Stack
                        </Title> */}
                    </Flex>

                    <SimpleGrid
                        cols={{ base: 2, xs: 3, sm: 4 }}
                        spacing={{ base: 'xs', sm: 'sm', md: 'sm' }}
                    >
                        {skills.map((skill, index) => {
                            const IconComponent = skill.icon;
                            return (
                                <Paper
                                    key={index}
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
                            );
                        })}
                    </SimpleGrid>
                </Stack>
            </Container>
        </Box>
    );
};

export default AboutSection;
