import { Clock, Phone, DollarSign, Smile, TrendingDown } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "15+",
    label: "Hours saved weekly on calls",
  },
  {
    icon: Phone,
    value: "0",
    label: "Missed new-patient calls",
  },
  {
    icon: DollarSign,
    value: "$3k+",
    label: "Monthly value recovered",
  },
  {
    icon: Smile,
    value: "98%",
    label: "Patient satisfaction",
  },
  {
    icon: TrendingDown,
    value: "50%",
    label: "Reduction in staff burnout",
  },
];

const Results = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real impact from dental clinics using FlossLineAI
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-medium border-2 border-border hover:shadow-large hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">{stat.value}</div>
              <p className="text-sm font-medium text-muted-foreground leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-card rounded-3xl p-10 md:p-16 shadow-large border-2 border-primary/20 text-center">
            <p className="text-3xl md:text-4xl font-bold">
              "It's like adding a second front desk — <span className="text-gradient">without the overhead.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Results;
