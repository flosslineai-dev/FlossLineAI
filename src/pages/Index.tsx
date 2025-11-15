import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";
import Security from "@/components/Security";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Comparison />
      <Security />
      <Results />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
