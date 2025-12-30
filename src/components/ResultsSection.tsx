import { motion } from 'framer-motion';

const ResultsSection = () => {
  const results = [
    {
      title: 'Time to First Interview',
      before: '14 days',
      after: '3 days',
      improvement: '79%',
      progress: 79,
    },
    {
      title: 'Application Response Rate',
      before: '5%',
      after: '47%',
      improvement: '840%',
      progress: 84,
    },
    {
      title: 'Applications Needed',
      before: '50+',
      after: '8',
      improvement: '84%',
      progress: 84,
    },
  ];

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
            The Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-3xl md:text-5xl font-bold font-quicksand quicksand-heading"
          >
            <span className="gradient-text">Lightning fast results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Real metrics from real users. See the difference Skynetic makes.
          </motion.p>
        </div>

        {/* Results Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-lg font-semibold mb-6 montserrat-stats">{result.title}</h3>

              <div className="space-y-4">
                {/* Before/After */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground line-through montserrat-stats">{result.before}</span>
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="text-primary font-bold text-2xl montserrat-stats"
                  >
                    {result.after}
                  </motion.span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${result.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Improvement Badge */}
                <div className="flex items-center justify-end">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium montserrat-stats"
                  >
                    {result.improvement} improvement
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-8"
        >
          Based on data from 2,500+ successful placements
        </motion.p>
      </div>
    </section>
  );
};

export default ResultsSection;
