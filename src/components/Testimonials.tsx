import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "We used to miss 5–10 calls a day. FlossLineAI books them all — it paid for itself in the first week.",
    author: "Dr. Amy Tran",
    clinic: "Pearl Dental Studio",
  },
  {
    text: "Patients love how polite and fast it is. It sounds human and professional.",
    author: "Dr. Malik Rahman",
    clinic: "Smiles of Richmond",
  },
  {
    text: "Best decision this year. My front desk finally has time to breathe.",
    author: "Dr. Nguyen",
    clinic: "GentleCare Dentistry",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Loved by <span className="text-gradient">Dental Practices</span>
          </h2>
          <p className="text-xl text-muted-foreground">See what dentists are saying about FlossLineAI</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-medium border-2 border-border hover:shadow-large hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                <Quote className="w-12 h-12 text-primary mb-4" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl text-primary">★</span>
                  ))}
                </div>
              </div>
              <p className="text-lg mb-6 leading-relaxed font-medium">{testimonial.text}</p>
              <div className="pt-6 border-t border-border">
                <p className="font-bold text-lg">{testimonial.author}</p>
                <p className="text-sm text-primary font-medium">{testimonial.clinic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;