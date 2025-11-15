import { Clock, Calendar, FileText, Clipboard, MessageSquare, Settings, Phone, Headphones } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 AI Receptionist",
    description: "Never miss a call, day or night, weekends or holidays.",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Automatic booking synced with your practice management system.",
  },
  {
    icon: FileText,
    title: "Insurance Handling",
    description: "Collects and verifies insurance information automatically.",
  },
  {
    icon: Clipboard,
    title: "Patient Intake",
    description: "Gathers complete patient information before the visit.",
  },
  {
    icon: MessageSquare,
    title: "Call Summaries",
    description: "Detailed transcripts and summaries delivered instantly.",
  },
  {
    icon: Settings,
    title: "Custom Clinic Script",
    description: "Personalized responses matching your clinic's voice.",
  },
  {
    icon: Phone,
    title: "Dedicated Phone Number",
    description: "Professional line or integrate with existing number.",
  },
  {
    icon: Headphones,
    title: "Support + Optimization",
    description: "Weekly performance reviews and continuous improvement.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need, <span className="text-gradient">All Included</span>
          </h2>
          <p className="text-xl text-muted-foreground">Complete AI receptionist solution for your dental practice</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-medium border-2 border-border hover:shadow-large hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;