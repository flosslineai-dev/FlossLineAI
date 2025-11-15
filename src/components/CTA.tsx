import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Automate Your Front Desk?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8">
          Book your free 30-minute demo and see FlossLineAI in action.
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          className="text-lg px-8 py-6 rounded-full shadow-large hover:scale-105 transition-all duration-300"
          asChild
        >
          <a href="https://calendly.com/flosslineai/30min" target="_blank" rel="noopener noreferrer">
            Schedule Demo →
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
