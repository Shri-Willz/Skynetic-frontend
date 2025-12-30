import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VantaNetBackground from './VantaNetBackground';

const HeroSection = () => {
  const stats = [
    { value: '2,500+', label: 'Developers Placed' },
    { value: '72h', label: 'Average Match Time' },
    { value: '4.9/5', label: 'User Rating' },
  ];

  const benefits = [
    'First match in 72 hours',
    '85% interview success rate',
    'No credit card required',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-20 inter-hero">
      <VantaNetBackground />

      <div className="relative z-10 container mx-auto px-6 pt-8 pb-0">
        <motion.div
          className="max-w-4xl mx-auto text-center glass-card p-8 md:p-16 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Now accepting early access applications
            </span>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-sm md:text-base tracking-[0.2em] text-muted-foreground uppercase"
          >
            Land your next role with confidence
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Dream Dev
            <br />
            <span className="gradient-text">Jobs, Delivered</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            AI-powered matching that connects you with the right opportunities. No more endless applications. No more ghosting.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/join" className="cta-button">
              Join Skynetic
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#" className="outline-button">
              <Play className="w-4 h-4" />
              Watch Demo
            </a>
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8"
          >
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {benefit}
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="stat-card border-primary/20 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.4)] transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-foreground montserrat-stats">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground montserrat-stats">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-background z-20 pointer-events-none backdrop-blur-[2px]" />
    </section>
  );
};

export default HeroSection;
