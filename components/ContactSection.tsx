// Contact Section Component
'use client';

import { useState, useRef } from 'react';
import { Code, Server, Globe, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Title } from '@mantine/core';
import { motion, useInView } from 'motion/react';

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

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [errors, setErrors] = useState<any>({});

    const validateForm = () => {
        const newErrors: any = {};

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

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleSubmit = async (e: any) => {
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
        } catch (error: any) {
            console.error('Network error:', error);
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                setSubmitStatus('network_error');
            } else {
                setSubmitStatus('error');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: 'atharvchinchkar@gmail.com',
            href: 'mailto:atharvchinchkar@gmail.com'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'github.com/Atharv-0811',
            href: 'https://github.com/Atharv-0811'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/atharv-chinchkar',
            href: 'https://www.linkedin.com/in/atharv-chinchkar/'
        }
    ];

    return (
        <section id="contact" className="pb-20 pt-10 bg-[#0f0f18]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeIn delay={0} direction="fade">
                    <div className="text-center mb-16">
                        <Title
                            order={2}
                            fz={{ base: '2rem', sm: '2.5rem', md: '3rem' }}
                            ta="center"
                            fw={700}
                            lh={1.1}
                            c='mint.0'
                            mb={'sm'}
                        >
                            Get In Touch
                        </Title>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            I'm always interested in new opportunities and collaborations.
                            Let's discuss how we can work together to bring your ideas to life.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <FadeIn delay={100} direction="up">
                        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15">
                            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                                >
                                    <p className="text-green-400">✓ Thank you for your message! I'll get back to you soon.</p>
                                </motion.div>
                            )}

                            {/* Error Messages */}
                            {submitStatus === 'validation_error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg"
                                >
                                    <p className="text-yellow-400">⚠ Please check your form data and try again.</p>
                                </motion.div>
                            )}

                            {submitStatus === 'server_error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                                >
                                    <p className="text-red-400">⚠ Server is temporarily unavailable. Please try again later or contact me directly at atharvchinchkar@gmail.com</p>
                                </motion.div>
                            )}

                            {submitStatus === 'network_error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                                >
                                    <p className="text-red-400">⚠ Network connection error. Please check your internet connection and try again.</p>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                                >
                                    <p className="text-red-400">⚠ Something went wrong. Please try again or contact me directly at atharvchinchkar@gmail.com</p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 transition-all duration-200 disabled:opacity-50 ${errors.name
                                            ? 'border-red-500/50 focus:border-red-500/70'
                                            : 'border-white/20 focus:border-white/30'
                                            }`}
                                        placeholder="Enter your name"
                                    />
                                    {errors.name && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-sm text-red-400"
                                        >
                                            {errors.name}
                                        </motion.p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 transition-all duration-200 disabled:opacity-50 ${errors.email
                                            ? 'border-red-500/50 focus:border-red-500/70'
                                            : 'border-white/20 focus:border-white/30'
                                            }`}
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-sm text-red-400"
                                        >
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        rows={5}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 transition-all duration-200 resize-none disabled:opacity-50 ${errors.message
                                            ? 'border-red-500/50 focus:border-red-500/70'
                                            : 'border-white/20 focus:border-white/30'
                                            }`}
                                        placeholder="Your message..."
                                    ></textarea>
                                    {errors.message && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-1 text-sm text-red-400"
                                        >
                                            {errors.message}
                                        </motion.p>
                                    )}
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                >
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </motion.div>
                            </form>
                        </div>
                    </FadeIn>

                    {/* Contact Information */}
                    <FadeIn delay={200} direction="up">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                                <p className="text-gray-400 mb-6">
                                    I'm currently available for freelance work and full-time opportunities.
                                    Whether you have a project in mind or just want to chat about tech, I'd love to hear from you.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {contactMethods.map((method, idx) => {
                                    const IconComponent = method.icon;
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
                                            <a
                                                href={method.href}
                                                target={method.label !== 'Email' ? '_blank' : undefined}
                                                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                                                className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:translate-x-1"
                                            >
                                                <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center shrink-0">
                                                    <IconComponent className="text-white" size={20} />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-white">{method.label}</div>
                                                    <div className="text-gray-400 text-sm hover:text-white transition-colors">
                                                        {method.value}
                                                    </div>
                                                </div>
                                            </a>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="pt-6">
                                <p className="text-sm text-gray-500">
                                    Average response time: 1-2 hours
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
