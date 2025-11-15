import { Phone, Bot, ClipboardList, Calendar, Mail, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Caller dials your clinic",
    description: "You keep your normal phone number.",
  },
  {
    icon: Bot,
    title: "FlossLineAI answers instantly",
    description: "Friendly, natural, clinic-branded greeting.",
  },
  {
    icon: ClipboardList,
    title: "Collects details",
    description: "Name, reason, insurance, callback number.",
  },
  {
    icon: Calendar,
    title: "Books appointment",
    description: "Syncs with Google Calendar or OpenDental.",
  },
  {
    icon: Mail,
    title: "Sends confirmation",
    description: "Patient receives SMS/email with details.",
  },
  {
    icon: CheckCircle,
    title: "You get updates",
    description: "Summaries and transcripts to inbox.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            How <span className="text-gradient">FlossLineAI</span> Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple, seamless, and fully automated in 6 easy steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-medium border-2 border-border hover:shadow-large hover:border-primary/30 transition-all duration-300 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground flex items-center justify-center font-bold text-xl shadow-large">
                  {index + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                <p className="text-base text-muted-foreground text-center leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 md:p-16 text-center shadow-large">
            <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Zero missed calls. 100% coverage. Happier patients.
            </p>
            <p className="text-xl text-primary-foreground/90">
              Your perfect front desk assistant that never sleeps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;