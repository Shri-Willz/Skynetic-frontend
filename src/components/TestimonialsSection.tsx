import { Star, Clock, Users, Percent } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I was skeptical at first, but Skynetic matched me with my dream role at a top tech company in just 4 days. The AI interview prep was a game-changer.",
      name: 'Sarah Chen',
      role: 'Senior Software Engineer at Google',
      initials: 'SC',
    },
    {
      quote: "After months of applying with no responses, Skynetic got me 5 interviews in my first week. The matching algorithm really understands what companies are looking for.",
      name: 'Marcus Johnson',
      role: 'Full Stack Developer at Stripe',
      initials: 'MJ',
    },
    {
      quote: "As a hiring manager, Skynetic saves us hours of screening. Every candidate we receive is pre-vetted and actually matches our requirements.",
      name: 'Emily Rodriguez',
      role: 'Engineering Manager at Spotify',
      initials: 'ER',
    },
    {
      quote: "The AI coaching helped me negotiate a 30% higher salary than my initial offer. Best investment I've made in my career.",
      name: 'David Park',
      role: 'Backend Engineer at TechFlow',
      initials: 'DP',
    },
    {
      quote: "From applying to accepting an offer took just 2 weeks. The smart matching meant every application I submitted was relevant.",
      name: 'Aisha Patel',
      role: 'DevOps Engineer at Nextera',
      initials: 'AP',
    },
    {
      quote: "I transitioned from bootcamp to employed in 45 days. Skynetic's interview prep gave me the confidence I needed.",
      name: 'James Wilson',
      role: 'Frontend Developer at CodeVerse',
      initials: 'JW',
    },
  ];

  const stats = [
    { icon: Star, value: '4.9/5', label: 'Average Rating' },
    { icon: Users, value: '2,500+', label: 'Placements' },
    { icon: Percent, value: '85%', label: 'Interview Rate' },
    { icon: Clock, value: '72h', label: 'Avg Match Time' },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Success Stories</span>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold font-quicksand quicksand-heading">
            <span className="gradient-text">Real results from</span>
            <br />
            <span className="gradient-text">real developers</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Join thousands of developers who transformed their job search with Skynetic
          </p>
        </div>

        {/* Testimonials Grid */}
        {/* Testimonials Marquee */}
        <div className="relative overflow-hidden mb-16 mask-linear-gradient">
          <div className="flex gap-6 animate-marquee w-max">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={`original-${index}`} className="testimonial-card w-[350px] shrink-0">
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for infinite scroll */}
            {testimonials.map((testimonial, index) => (
              <div key={`duplicate-${index}`} className="testimonial-card w-[350px] shrink-0">
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Masks for edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>

        {/* Stats Bar */}
        <div className="glass-card p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold montserrat-stats">{stat.value}</div>
                <div className="text-sm text-muted-foreground montserrat-stats">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
