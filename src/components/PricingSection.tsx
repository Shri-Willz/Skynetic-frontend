import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for exploring the platform',
      price: 'Free',
      period: '',
      features: [
        '3 AI interview practice sessions',
        'Basic job matching',
        'Email support',
        'Profile visibility',
      ],
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Pro',
      description: 'For serious job seekers',
      price: '$29',
      period: '/month',
      features: [
        'Unlimited AI interviews',
        'Priority job matching',
        'Referral network access',
        'Salary intelligence',
      ],
      cta: 'Start Free Trial',
      featured: true,
    },
    {
      name: 'Enterprise',
      description: 'For career professionals',
      price: '$49',
      period: '/month',
      features: [
        'Everything in Pro',
        '1-on-1 career coaching',
        'Executive placement',
        'Personal success manager',
      ],
      cta: 'Contact Sales',
      featured: false,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="pricing" className="py-24 relative">
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
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-3xl md:text-5xl font-bold font-quicksand"
          >
            <span className="gradient-text">Simple, transparent</span>
            <br />
            <span className="gradient-text">pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`pricing-card flex flex-col h-full relative ${plan.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-0 w-full flex justify-center">
                  <span className="px-4 py-1 rounded-full bg-cyan-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>

              <div className="mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="check-icon mt-0.5 shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-lg font-semibold transition-all ${plan.featured
                  ? 'cta-button'
                  : 'outline-button'
                  }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-8"
        >
          💰 30-day money-back guarantee • No credit card required for free plan
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
