// Contact Section Component
'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import {
    Box,
    Container,
    Title,
    Text,
    SimpleGrid,
    Stack,
    TextInput,
    Textarea,
    Button,
    Paper,
    Group,
    Flex,
    Alert
} from '@mantine/core';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const ContactSection = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = () => {
        const newErrors: FormErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            [field]: value
        });

        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors({
                ...errors,
                [field]: undefined
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('');

        // Validate form before submission
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/xldnnlay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    message: formData.message.trim(),
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setErrors({});
            } else {
                // Handle specific HTTP errors
                if (response.status === 422) {
                    setSubmitStatus('validation_error');
                } else if (response.status >= 500) {
                    setSubmitStatus('server_error');
                } else {
                    setSubmitStatus('error');
                }
            }
        } catch (error) {
            console.error('Network error:', error);
            if (error instanceof TypeError && error.message.includes('fetch')) {
                setSubmitStatus('network_error');
            } else {
                setSubmitStatus('error');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            component="section"
            id="contact"
            py={{ base: 60, sm: 80 }}
            style={{ backgroundColor: '#000000' }}
        >
            <Container size="xl" px={{ base: 'md', sm: 'lg' }}>
                {/* Header */}
                <Stack align="center" gap="sm" mb={{ base: 48, sm: 64 }}>
                    <Title
                        order={2}
                        fz={{ base: '1.875rem', sm: '2.25rem' }}
                        fw={700}
                        c="white"
                        ta="center"
                    >
                        Get In Touch
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
                        I&apos;m always interested in new opportunities and collaborations.
                        Let&apos;s discuss how we can work together to bring your ideas to life.
                    </Text>
                </Stack>

                <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="xl">
                    {/* Contact Form */}
                    <Paper
                        p="xl"
                        radius="lg"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        <Title order={3} fz="1.5rem" fw={600} c="white" mb="lg">
                            Send a Message
                        </Title>

                        {/* Success Message */}
                        {submitStatus === 'success' && (
                            <Alert
                                mb="lg"
                                p="md"
                                radius="md"
                                styles={{
                                    root: {
                                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                        border: '1px solid rgba(34, 197, 94, 0.2)'
                                    },
                                    message: {
                                        color: '#4ade80'
                                    }
                                }}
                            >
                                ✓ Thank you for your message! I&apos;ll get back to you soon.
                            </Alert>
                        )}

                        {/* Error Messages */}
                        {submitStatus === 'validation_error' && (
                            <Alert
                                mb="lg"
                                p="md"
                                radius="md"
                                styles={{
                                    root: {
                                        backgroundColor: 'rgba(234, 179, 8, 0.1)',
                                        border: '1px solid rgba(234, 179, 8, 0.2)'
                                    },
                                    message: {
                                        color: '#facc15'
                                    }
                                }}
                            >
                                ⚠ Please check your form data and try again.
                            </Alert>
                        )}

                        {submitStatus === 'server_error' && (
                            <Alert
                                mb="lg"
                                p="md"
                                radius="md"
                                styles={{
                                    root: {
                                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                        border: '1px solid rgba(239, 68, 68, 0.2)'
                                    },
                                    message: {
                                        color: '#f87171'
                                    }
                                }}
                            >
                                ⚠ Server is temporarily unavailable. Please try again later or contact me directly at atharvchinchkar@gmail.com
                            </Alert>
                        )}

                        {submitStatus === 'network_error' && (
                            <Alert
                                mb="lg"
                                p="md"
                                radius="md"
                                styles={{
                                    root: {
                                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                        border: '1px solid rgba(239, 68, 68, 0.2)'
                                    },
                                    message: {
                                        color: '#f87171'
                                    }
                                }}
                            >
                                ⚠ Network connection error. Please check your internet connection and try again.
                            </Alert>
                        )}

                        {submitStatus === 'error' && (
                            <Alert
                                mb="lg"
                                p="md"
                                radius="md"
                                styles={{
                                    root: {
                                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                        border: '1px solid rgba(239, 68, 68, 0.2)'
                                    },
                                    message: {
                                        color: '#f87171'
                                    }
                                }}
                            >
                                ⚠ Something went wrong. Please try again or contact me directly at atharvchinchkar@gmail.com
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit}>
                            <Stack gap="lg">
                                <TextInput
                                    label="Your Name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange('name')}
                                    disabled={isSubmitting}
                                    error={errors.name}
                                    styles={{
                                        label: {
                                            color: '#d1d5db',
                                            fontSize: '0.875rem',
                                            fontWeight: 500,
                                            marginBottom: '0.5rem'
                                        },
                                        input: {
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            border: errors.name
                                                ? '1px solid rgba(239, 68, 68, 0.5)'
                                                : '1px solid rgba(255, 255, 255, 0.2)',
                                            color: 'white',
                                            borderRadius: '8px',
                                            padding: '0.75rem 1rem',
                                            '&::placeholder': {
                                                color: '#6b7280'
                                            },
                                            '&:focus': {
                                                borderColor: errors.name
                                                    ? 'rgba(239, 68, 68, 0.7)'
                                                    : 'rgba(255, 255, 255, 0.3)',
                                                outline: 'none',
                                                boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2)'
                                            },
                                            '&:disabled': {
                                                opacity: 0.5
                                            }
                                        },
                                        error: {
                                            color: '#f87171',
                                            fontSize: '0.875rem',
                                            marginTop: '0.25rem'
                                        }
                                    }}
                                />

                                <TextInput
                                    type="email"
                                    label="Email Address"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange('email')}
                                    disabled={isSubmitting}
                                    error={errors.email}
                                    styles={{
                                        label: {
                                            color: '#d1d5db',
                                            fontSize: '0.875rem',
                                            fontWeight: 500,
                                            marginBottom: '0.5rem'
                                        },
                                        input: {
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            border: errors.email
                                                ? '1px solid rgba(239, 68, 68, 0.5)'
                                                : '1px solid rgba(255, 255, 255, 0.2)',
                                            color: 'white',
                                            borderRadius: '8px',
                                            padding: '0.75rem 1rem',
                                            '&::placeholder': {
                                                color: '#6b7280'
                                            },
                                            '&:focus': {
                                                borderColor: errors.email
                                                    ? 'rgba(239, 68, 68, 0.7)'
                                                    : 'rgba(255, 255, 255, 0.3)',
                                                outline: 'none',
                                                boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2)'
                                            },
                                            '&:disabled': {
                                                opacity: 0.5
                                            }
                                        },
                                        error: {
                                            color: '#f87171',
                                            fontSize: '0.875rem',
                                            marginTop: '0.25rem'
                                        }
                                    }}
                                />

                                <Textarea
                                    label="Message"
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={handleChange('message')}
                                    disabled={isSubmitting}
                                    error={errors.message}
                                    rows={5}
                                    styles={{
                                        label: {
                                            color: '#d1d5db',
                                            fontSize: '0.875rem',
                                            fontWeight: 500,
                                            marginBottom: '0.5rem'
                                        },
                                        input: {
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            border: errors.message
                                                ? '1px solid rgba(239, 68, 68, 0.5)'
                                                : '1px solid rgba(255, 255, 255, 0.2)',
                                            color: 'white',
                                            borderRadius: '8px',
                                            padding: '0.75rem 1rem',
                                            resize: 'none',
                                            '&::placeholder': {
                                                color: '#6b7280'
                                            },
                                            '&:focus': {
                                                borderColor: errors.message
                                                    ? 'rgba(239, 68, 68, 0.7)'
                                                    : 'rgba(255, 255, 255, 0.3)',
                                                outline: 'none',
                                                boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2)'
                                            },
                                            '&:disabled': {
                                                opacity: 0.5
                                            }
                                        },
                                        error: {
                                            color: '#f87171',
                                            fontSize: '0.875rem',
                                            marginTop: '0.25rem'
                                        }
                                    }}
                                />

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="md"
                                    radius="md"
                                    styles={{
                                        root: {
                                            backgroundColor: 'white',
                                            color: 'black',
                                            fontWeight: 500,
                                            padding: '0.75rem 1.5rem',
                                            '&:hover': {
                                                backgroundColor: '#f3f4f6'
                                            },
                                            '&:disabled': {
                                                opacity: 0.5,
                                                cursor: 'not-allowed',
                                                backgroundColor: 'white'
                                            }
                                        }
                                    }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </Stack>
                        </form>
                    </Paper>

                    {/* Contact Information */}
                    <Stack gap="xl">
                        <Box>
                            <Title order={3} fz="1.5rem" fw={600} c="white" mb="lg">
                                Let&apos;s Connect
                            </Title>
                            <Text c="gray.5" mb="lg">
                                I&apos;m currently available for freelance work and full-time opportunities.
                                Whether you have a project in mind or just want to chat about tech, I&apos;d love to hear from you.
                            </Text>
                        </Box>

                        <Stack gap="md">
                            {/* Email */}
                            <Group gap="md" wrap="nowrap">
                                <Flex
                                    w={48}
                                    h={48}
                                    align="center"
                                    justify="center"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <Mail color="white" size={20} />
                                </Flex>
                                <Box>
                                    <Text fw={500} c="white">Email</Text>
                                    <Text
                                        component="a"
                                        href="mailto:atharvchinchkar@gmail.com"
                                        c="gray.5"
                                        style={{
                                            textDecoration: 'none',
                                            transition: 'color 0.2s',
                                            '&:hover': {
                                                color: 'white'
                                            }
                                        }}
                                        styles={{
                                            root: {
                                                '&:hover': {
                                                    color: 'white'
                                                }
                                            }
                                        }}
                                    >
                                        atharvchinchkar@gmail.com
                                    </Text>
                                </Box>
                            </Group>

                            {/* GitHub */}
                            <Group gap="md" wrap="nowrap">
                                <Flex
                                    w={48}
                                    h={48}
                                    align="center"
                                    justify="center"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <Github color="white" size={20} />
                                </Flex>
                                <Box>
                                    <Text fw={500} c="white">GitHub</Text>
                                    <Text
                                        component="a"
                                        href="https://github.com/Atharv-0811"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        c="gray.5"
                                        style={{ textDecoration: 'none' }}
                                        styles={{
                                            root: {
                                                '&:hover': {
                                                    color: 'white'
                                                }
                                            }
                                        }}
                                    >
                                        github.com/Atharv-0811
                                    </Text>
                                </Box>
                            </Group>

                            {/* LinkedIn */}
                            <Group gap="md" wrap="nowrap">
                                <Flex
                                    w={48}
                                    h={48}
                                    align="center"
                                    justify="center"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <Linkedin color="white" size={20} />
                                </Flex>
                                <Box>
                                    <Text fw={500} c="white">LinkedIn</Text>
                                    <Text
                                        component="a"
                                        href="https://www.linkedin.com/in/atharv-chinchkar/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        c="gray.5"
                                        style={{ textDecoration: 'none' }}
                                        styles={{
                                            root: {
                                                '&:hover': {
                                                    color: 'white'
                                                }
                                            }
                                        }}
                                    >
                                        linkedin.com/in/atharv-chinchkar
                                    </Text>
                                </Box>
                            </Group>
                        </Stack>

                        <Box pt="md">
                            <Text fz="sm" c="gray.7">
                                Average response time: 1-2 hours
                            </Text>
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default ContactSection;
