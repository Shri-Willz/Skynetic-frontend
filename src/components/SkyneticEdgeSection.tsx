import { Cpu, Gauge, Handshake, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SkyneticEdgeSection = () => {
  const features = [
    {
      icon: Cpu,
      title: 'AI-First Architecture',
      description: 'Built from the ground up with proprietary AI models for skill verification and matching',
    },
    {
      icon: Gauge,
      title: 'Smart Pacing System',
      description: 'Unique cooldown mechanism prevents burnout and ensures quality applications',
    },
    {
      icon: Handshake,
      title: 'Two-Sided Value',
      description: 'Win-win model: developers get better opportunities, recruiters get better candidates',
    },
    {
      icon: BadgeCheck,
      title: 'Verified Talent Pool',
      description: 'Every developer pre-screened with technical assessments and portfolio reviews',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = [
    { hidden: { opacity: 0, x: -50, y: 20 }, visible: { opacity: 1, x: 0, y: 0 } },
    { hidden: { opacity: 0, x: 50, y: 20 }, visible: { opacity: 1, x: 0, y: 0 } },
    { hidden: { opacity: 0, x: -20, y: 50 }, visible: { opacity: 1, x: 0, y: 0 } },
    { hidden: { opacity: 0, x: 20, y: 50 }, visible: { opacity: 1, x: 0, y: 0 } },
  ];

  return (
    <section id="about" className="py-24 relative section-light overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            Skynetic Edge
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-3xl md:text-5xl font-bold font-quicksand quicksand-heading"
          >
            <span className="gradient-text">Autoscale Your Career</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Start building your future in seconds, autoscale resources with ease.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto perspective-1000"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants[index]}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <motion.div
                className="glass-card-hover p-8 group cursor-pointer border-transparent h-full relative overflow-hidden"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                  willChange: 'transform',
                  WebkitFontSmoothing: 'subpixel-antialiased'
                }}
                transition={{ duration: 0.2 }}
                whileHover={{
                  y: -15,
                  scale: 1.04,
                  backgroundColor: "hsl(var(--background))",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
                  <motion.div
                    className="feature-icon mb-6 transition-all duration-300 group-hover:bg-primary/20"
                    whileHover={{
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  >
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 montserrat-stats group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground montserrat-stats leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkyneticEdgeSection;
