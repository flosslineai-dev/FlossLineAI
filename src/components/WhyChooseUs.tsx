import { Clock, Shield, Stethoscope, Brain, DollarSign, Quote } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Instant Response",
    description: "Answers every call within a second — day, night, weekend.",
  },
  {
    icon: Shield,
    title: "Proven Reliability",
    description: "99.9% uptime from enterprise AI infrastructure.",
  },
  {
    icon: Stethoscope,
    title: "Built for Dentists",
    description: "Understands insurance, follow-ups, re-care workflows.",
  },
  {
    icon: Brain,
    title: "Human-Level Understanding",
    description: "Patients feel heard, not 'talking to a bot.'",
  },
  {
    icon: DollarSign,
    title: "Guaranteed ROI",
    description: "Most clinics save $1,000–$2,000/mo from recovered calls.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose <span className="text-gradient">FlossLineAI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            FlossLineAI gives dental clinics 24/7 peace of mind — no missed calls, 
            no lost patients, no overworked staff.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-10 shadow-medium border-2 border-border hover:shadow-large hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-card rounded-3xl p-10 md:p-16 shadow-large border-2 border-primary/20">
            <blockquote className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                "It's like having a perfect front-desk assistant that never sleeps."
              </p>
              <footer className="text-lg text-muted-foreground font-medium">— Dental Practice Owner</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;