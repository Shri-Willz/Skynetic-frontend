import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ProblemSection from '@/components/ProblemSection';
import FeaturesSection from '@/components/FeaturesSection';
import ResultsSection from '@/components/ResultsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SkyneticEdgeSection from '@/components/SkyneticEdgeSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <HeroSection />
      {/* WaveDivider removed for blur blend effect */}
      <HowItWorksSection />
      <WaveDivider variant="toLight" />
      <ProblemSection />
      <WaveDivider variant="toDark" />
      <FeaturesSection />
      <WaveDivider variant="toLight" />
      <ResultsSection />
      <WaveDivider variant="toDark" />
      <TestimonialsSection />
      <WaveDivider variant="toLight" />
      <SkyneticEdgeSection />
      <WaveDivider variant="toDark" />
      <PricingSection />
      <WaveDivider variant="toLight" />
      <FAQSection />
      <WaveDivider variant="toDark" />
      <Footer />

      {/* Footer Glow Effect */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
    </div>
  );
};

export default Index;
