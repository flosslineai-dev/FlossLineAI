import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">24/7 AI Receptionist for Dental Clinics</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Never Miss a <span className="text-gradient">Patient Call</span> Again
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            FlossLineAI answers every call, books appointments, collects insurance, 
            and handles patient intake — 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full shadow-large hover:shadow-primary/20 transition-all duration-300"
              asChild
            >
              <a href="https://calendly.com/flosslineai/30min" target="_blank" rel="noopener noreferrer">
                Book a Demo →
              </a>
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full border-2"
                asChild
              >
                <a href="tel:+14172804540">
                  <Phone className="mr-2 h-5 w-5" />
                  Test Demo Agent
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full border-2"
                asChild
              >
                <a href="mailto:flosslineai@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
          
          <div className="pt-12">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-large border border-border/50">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-muted-foreground">
                    AI-Powered Phone Assistant Illustration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;

