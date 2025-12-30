import { Brain, Target, Shield, Clock, Users, DollarSign } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Interview Prep',
      description: 'Personalized practice sessions with real-time feedback. Prepare for technical and behavioral interviews with confidence.',
    },
    {
      icon: Target,
      title: 'Smart Job Matching',
      description: 'Our AI understands your skills and preferences to surface only the most relevant opportunities.',
    },
    {
      icon: Shield,
      title: 'Pre-Verified Opportunities',
      description: 'Every role is vetted for legitimacy. No scams, no ghost jobs, no wasted time.',
    },
    {
      icon: Clock,
      title: 'Intelligent Pacing',
      description: "Smart cooldown periods prevent burnout and ensure you're always presenting your best self.",
    },
    {
      icon: Users,
      title: 'Referral Network',
      description: 'Connect with employees at target companies who can advocate for your application.',
    },
    {
      icon: DollarSign,
      title: 'Salary Intelligence',
      description: 'Know your worth with real-time market data and negotiation coaching.',
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Features</span>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold font-quicksand quicksand-heading">
            <span className="gradient-text">Everything you need</span>
            <br />
            <span className="gradient-text">to land the job</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete toolkit designed to supercharge every step of your job search
          </p>
        </div>

        {/* Features Grid */}
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pair 1 */}
          <div className="group h-[320px] perspective-1000">
            <div className="relative w-full h-full duration-500 preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 glass-card p-8 backface-hidden border-primary/20 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300">
                <div className="feature-icon mb-6">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">AI Interview Prep</h3>
                <p className="text-muted-foreground font-montserrat">Personalized practice sessions with real-time feedback. Prepare for technical and behavioral interviews with confidence.</p>
              </div>
              {/* Back */}
              <div className="absolute inset-0 glass-card p-8 backface-hidden rotate-y-180 bg-primary/5 border-primary/20 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300">
                <div className="feature-icon mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">Intelligent Pacing</h3>
                <p className="text-muted-foreground font-montserrat">Smart cooldown periods prevent burnout and ensure you're always presenting your best self.</p>
              </div>
            </div>
          </div>

          {/* Pair 2 */}
          <div className="group h-[320px] perspective-1000">
            <div className="relative w-full h-full duration-500 preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 glass-card p-8 backface-hidden border-primary/20 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300">
                <div className="feature-icon mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">Smart Job Matching</h3>
                <p className="text-muted-foreground font-montserrat">Our AI understands your skills and preferences to surface only the most relevant opportunities.</p>
              </div>
              {/* Back */}
              <div className="absolute inset-0 glass-card p-8 backface-hidden rotate-y-180 bg-primary/5 border-primary/20 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300">
                <div className="feature-icon mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">Referral Network</h3>
                <p className="text-muted-foreground font-montserrat">Connect with employees at target companies who can advocate for your application.</p>
              </div>
            </div>
          </div>

          {/* Pair 3 */}
          <div className="group h-[320px] perspective-1000">
            <div className="relative w-full h-full duration-500 preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 glass-card p-8 backface-hidden border-primary/20 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300">
                <div className="feature-icon mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">Pre-Verified Opportunities</h3>
                <p className="text-muted-foreground font-montserrat">Every role is vetted for legitimacy. No scams, no ghost jobs, no wasted time.</p>
              </div>
              {/* Back */}
              <div className="absolute inset-0 glass-card p-8 backface-hidden rotate-y-180 bg-primary/5 border-primary/20 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300">
                <div className="feature-icon mb-6">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">Salary Intelligence</h3>
                <p className="text-muted-foreground font-montserrat">Know your worth with real-time market data and negotiation coaching.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
