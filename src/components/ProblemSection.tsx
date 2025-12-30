import { useEffect, useRef, useState } from 'react';

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const problems = [
    { value: 73, suffix: '%', description: 'of developers send 50+ applications with zero responses' },
    { value: 95, suffix: '%', description: 'of applications go into a black hole' },
    { value: 40, suffix: '+', description: 'hours wasted applying to mismatched roles' },
    { value: 60, suffix: '%', description: 'of technical resumes contain exaggerated skills' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative section-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge">The Problem</span>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold font-quicksand quicksand-heading">
            <span className="gradient-text">Why Hiring Is Broken</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4 montserrat-stats">
                {isVisible ? (
                  <CountUp end={problem.value} duration={2} />
                ) : (
                  0
                )}
                {problem.suffix}
              </div>
              <p className="text-muted-foreground montserrat-stats">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CountUpProps {
  end: number;
  duration: number;
}

const CountUp = ({ end, duration }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}</>;
};

export default ProblemSection;
