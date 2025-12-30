import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How does the AI matching work?',
      answer: 'Our AI analyzes your skills, experience, and preferences to find roles that are the best fit. It learns from successful placements to continuously improve matching accuracy.',
    },
    {
      question: 'How long does it take to get my first match?',
      answer: 'Most users receive their first match within 72 hours of completing their profile. The more complete your profile, the faster and more accurate your matches will be.',
    },
    {
      question: "What's included in the AI interview prep?",
      answer: 'Our AI interview prep includes mock interviews for both technical and behavioral questions, real-time feedback on your responses, and personalized tips to improve your performance.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption to protect your data. Your information is never shared with third parties without your explicit consent.',
    },
    {
      question: 'Can I use Skynetic while employed?',
      answer: "Yes! We have a confidential mode that keeps your job search private. Your current employer will never see your profile or know you're using our platform.",
    },
    {
      question: "What happens if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with our service, simply contact support for a full refund.",
    },
    {
      question: 'Do you work with remote roles?',
      answer: 'Yes! We have a wide variety of remote, hybrid, and on-site roles. You can filter your preferences in your profile settings.',
    },
    {
      question: 'How is this different from LinkedIn or Indeed?',
      answer: 'Unlike job boards where you compete with thousands of applicants, Skynetic uses AI to match you with roles where you have the highest chance of success. We also provide interview prep and salary negotiation tools.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 relative section-light">
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
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-3xl md:text-5xl font-bold font-quicksand quicksand-heading"
          >
            <span className="gradient-text">Questions?</span>
            <br />
            <span className="gradient-text">We've got answers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Everything you need to know about Skynetic
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <h3 className="font-medium text-xl pr-4 font-bebas-neue tracking-wider">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
