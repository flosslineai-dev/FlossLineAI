import { Shield, Lock, Key, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    text: "Encrypted in transit and at rest",
  },
  {
    icon: Shield,
    text: "Stored on HIPAA-compliant servers",
  },
  {
    icon: Key,
    text: "Access-controlled with MFA",
  },
  {
    icon: FileCheck,
    text: "Logged with audit trails",
  },
];

const Security = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-16 shadow-large border-2 border-primary/20">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proven <span className="text-gradient">HIPAA Security</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              FlossLineAI meets all HIPAA standards. All patient information, calls, 
              and scheduling data are protected:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-card rounded-2xl shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-base font-semibold">{feature.text}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-medium border border-primary/30">
            <p className="text-center text-xl font-semibold">
              A <span className="text-primary text-2xl">BAA (Business Associate Agreement)</span> is included with every client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
