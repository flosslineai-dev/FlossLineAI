import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "500 minutes included (covers 95% of clinics)",
  "All features included",
  "Unlimited patients",
  "Unlimited call summaries",
  "Dedicated setup",
  "Ongoing support & updates",
];

const Pricing = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">One plan. All features. No hidden fees.</p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-card rounded-3xl p-10 md:p-16 shadow-large border-2 border-primary/30">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-large">
                BEST VALUE
              </span>
            </div>
            
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-4">FlossLineAI Premium</h3>
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-7xl md:text-8xl font-bold text-gradient">$600</span>
                <span className="text-3xl text-muted-foreground">/month</span>
              </div>
              <p className="text-lg text-muted-foreground">Everything your practice needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="w-full text-xl py-8 rounded-full shadow-large hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://calendly.com/flosslineai/30min" target="_blank" rel="noopener noreferrer">
                Book Your Demo Now →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
