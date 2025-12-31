import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, User, Mail, Phone, Briefcase, Code, Linkedin, Github, MessageSquare, Check, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Join = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        skills: '',
        linkedin: '',
        portfolio: '',
        about: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Simulate network request
        setTimeout(async () => {
            const res = await fetch("https://app.skynetic.tech/api/register", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email
                })
            });
            const data = await res.json();
            console.log(data);
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1000);
    };

    const suggestedSkills = [
        'React', 'Node.js', 'TypeScript', 'JavaScript', 'Python',
        'Java', 'C++', 'Go', 'Rust', 'AWS',
        'Docker', 'Kubernetes', 'SQL', 'MongoDB', 'GraphQL'
    ];

    const handleSkillClick = (skill: string) => {
        setFormData(prev => {
            if (prev.skills.includes(skill)) return prev;
            const newSkills = prev.skills
                ? `${prev.skills}, ${skill}`
                : skill;
            return { ...prev, skills: newSkills };
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const successVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.8,
                bounce: 0.4
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#F8F8F1] font-inter overflow-hidden relative">
            <Navbar />

            {/* Blue Glow Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 -right-24 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
            </div>

            <main className="relative z-10 pt-32 pb-20 container mx-auto px-6">
                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.div
                            key="form-view"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={containerVariants}
                        >
                            <motion.div
                                className="max-w-4xl mx-auto text-center mb-12"
                                variants={containerVariants}
                            >
                                <motion.div variants={itemVariants}>
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        Join 2,500+ developers
                                    </span>
                                </motion.div>

                                <motion.h1
                                    variants={itemVariants}
                                    className="text-4xl md:text-6xl font-bold text-[#0F1729] mb-6"
                                >
                                    Join Skynetic
                                </motion.h1>

                                <motion.p
                                    variants={itemVariants}
                                    className="text-lg text-slate-600 max-w-2xl mx-auto"
                                >
                                    Take the first step towards your dream career. Tell us about yourself and we'll connect you with top-tier opportunities.
                                </motion.p>
                            </motion.div>

                            <motion.div
                                className="max-w-3xl mx-auto"
                                variants={itemVariants}
                            >
                                <form
                                    onSubmit={handleSubmit}
                                    className="bg-white/50 backdrop-blur-[30px] border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-primary/5"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                        {/* Full Name */}
                                        <div className="space-y-2">
                                            <label htmlFor="fullName" className="text-sm font-semibold text-[#0F1729] flex items-center gap-2">
                                                <User className="w-4 h-4 text-primary" />
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                                                required
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-semibold text-[#0F1729] flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-primary" />
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                                                required
                                            />
                                        </div>



                                        {/* Years of Experience */}

                                    </div>

                                    {/* Primary Skills */}
                                    <div className="space-y-2 mb-8">
                                        <label htmlFor="skills" className="text-sm font-semibold text-[#0F1729] flex items-center gap-2">
                                            <Code className="w-4 h-4 text-primary" />
                                            Primary Skills
                                        </label>
                                        <input
                                            type="text"
                                            id="skills"
                                            name="skills"
                                            value={formData.skills}
                                            onChange={handleChange}
                                            placeholder="React, Node.js, TypeScript, etc."
                                            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                                        />
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {suggestedSkills.map((skill) => (
                                                <button
                                                    key={skill}
                                                    type="button"
                                                    onClick={() => handleSkillClick(skill)}
                                                    className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 hover:bg-primary/10 hover:text-primary border border-slate-200 hover:border-primary/20 transition-all"
                                                >
                                                    {skill}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                        {/* LinkedIn */}
                                        <div className="space-y-2">
                                            <label htmlFor="linkedin" className="text-sm font-semibold text-[#0F1729] flex items-center gap-2">
                                                <Linkedin className="w-4 h-4 text-primary" />
                                                LinkedIn Profile
                                            </label>
                                            <input
                                                type="url"
                                                id="linkedin"
                                                name="linkedin"
                                                value={formData.linkedin}
                                                onChange={handleChange}
                                                placeholder="https://linkedin.com/in/username"
                                                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                                            />
                                        </div>

                                        {/* Portfolio/GitHub */}
                                        <div className="space-y-2">
                                            <label htmlFor="portfolio" className="text-sm font-semibold text-[#0F1729] flex items-center gap-2">
                                                <Github className="w-4 h-4 text-primary" />
                                                Portfolio / GitHub
                                            </label>
                                            <input
                                                type="url"
                                                id="portfolio"
                                                name="portfolio"
                                                value={formData.portfolio}
                                                onChange={handleChange}
                                                placeholder="https://github.com/username"
                                                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                                            />
                                        </div>
                                    </div>

                                    {/* Tell us about yourself */}
                                    <div className="space-y-2 mb-10">
                                        <label htmlFor="about" className="text-sm font-semibold text-[#0F1729] flex items-center gap-2">
                                            <MessageSquare className="w-4 h-4 text-primary" />
                                            Tell us about yourself
                                        </label>
                                        <textarea
                                            id="about"
                                            name="about"
                                            value={formData.about}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="What drives you? What are you looking for in your next role?"
                                            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 placeholder:text-slate-400 resize-none"
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full py-4 rounded-xl bg-[#0F1729] text-white font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all"
                                    >
                                        Submit Application
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </form>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success-view"
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="flex flex-col items-center justify-center min-h-[60vh] text-center"
                        >
                            <motion.div variants={successVariants} className="mb-8 relative">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                                <div className="relative w-32 h-32 bg-gradient-to-tr from-primary to-[#0F1729] rounded-full flex items-center justify-center shadow-2xl">
                                    <Check className="w-16 h-16 text-white" />
                                </div>
                            </motion.div>

                            <motion.h2
                                variants={itemVariants}
                                className="text-4xl md:text-5xl font-bold text-[#0F1729] mb-6"
                            >
                                Application Submitted!
                            </motion.h2>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl text-slate-600 max-w-lg mb-12"
                            >
                                Thank you for expressing interest in joining Skynetic. We've received your details and will get back to you shortly.
                            </motion.p>

                            <motion.div variants={itemVariants}>
                                <Link to="/">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 rounded-xl bg-[#0F1729] text-white font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all"
                                    >
                                        <Home className="w-5 h-5" />
                                        Back to Home
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
};

export default Join;
