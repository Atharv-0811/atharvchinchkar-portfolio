"use client";

import { Container, Title, Text, Button, Paper, Group, Stack, Badge } from '@mantine/core';

export default function MinimalAbout() {
    return (
        <Paper p="xl" bg="sand.0">
            <Container size="md">
                <Stack gap="xl">
                    <Badge color="coralAccent" size="lg" variant="light">About Me</Badge>

                    <Title order={2} c="tealBrand.9" style={{ fontFamily: 'var(--font-epilogue)' }}>
                        Design-Driven Developer
                    </Title>

                    <Text c="slate.7" size="lg" style={{ lineHeight: 1.6 }}>
                        I specialize in building high-quality web applications with a focus on exceptional user experiences.
                        My approach combines technical depth with design sensibility to create products that feel
                        <Text span c="coralAccent.5" fw={600} inherit> polished</Text> and
                        <Text span c="tealBrand.6" fw={600} inherit> professional</Text>.
                    </Text>

                    <Group>
                        <Button color="tealBrand" size="md">View My Work</Button>
                        <Button variant="outline" color="coralAccent" size="md">Contact Me</Button>
                    </Group>

                    <Paper p="md" bg="white" withBorder style={{ borderColor: 'var(--mantine-color-slate-2)' }}>
                        <Text size="sm" c="slate.5">
                            Current Stack: React, Next.js, Mantine, TypeScript
                        </Text>
                    </Paper>
                </Stack>
            </Container>
        </Paper>
    );
}
