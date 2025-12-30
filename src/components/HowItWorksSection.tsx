import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: "Tell us about your skills, experience, and what you're looking for in your next role.",
    },
    {
      number: '02',
      title: 'Get Matched',
      description: 'Our AI analyzes thousands of opportunities to find the perfect matches for you.',
    },
    {
      number: '03',
      title: 'Connect Directly',
      description: 'Skip the resume black hole. Connect directly with hiring managers.',
    },
    {
      number: '04',
      title: 'Land Your Dream Job',
      description: 'Prepare with our resources and nail your interviews with confidence.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            SIMPLE PROCESS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-3xl md:text-5xl font-bold font-quicksand quicksand-heading"
          >
            <span className="gradient-text">How It Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-muted-foreground text-lg"
          >
            From signup to offer letter in four simple steps
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            {/* Circles and Connecting Lines */}
            <div className="relative flex justify-between items-center mb-12">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 z-0 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-cyan-500/30 via-cyan-500/50 to-cyan-500/30"
                />
              </div>

              {/* Step Circles */}
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.2), type: "spring", stiffness: 260, damping: 20 }}
                  viewport={{ once: true }}
                  className="relative z-10 flex-1 flex justify-center"
                >
                  <div
                    className="w-24 h-24 rounded-full border-2 border-cyan-500/50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center group hover:border-cyan-400 hover:bg-slate-800/90 transition-all duration-300 hover:scale-110"
                    style={{
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(6, 182, 212, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.4), 0 0 90px rgba(6, 182, 212, 0.2), inset 0 0 30px rgba(6, 182, 212, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(6, 182, 212, 0.1)';
                    }}
                  >
                    <span className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {step.number}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Step Content */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold mb-3 text-white montserrat-stats">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed montserrat-stats">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                {/* Circle and Line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-20 h-20 rounded-full border-2 border-cyan-500/50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center flex-shrink-0"
                    style={{
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(6, 182, 212, 0.1)'
                    }}
                  >
                    <span className="text-xl font-bold text-cyan-400">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: 64 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                      viewport={{ once: true }}
                      className="w-[2px] bg-gradient-to-b from-cyan-500/50 to-cyan-500/30 mt-4"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold mb-2 text-white font-montserrat">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-montserrat">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
