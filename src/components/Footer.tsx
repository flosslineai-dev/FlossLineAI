import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-muted/30 border-t border-border/50">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-2">FlossLineAI</h3>
            <p className="text-sm text-muted-foreground">24/7 AI Receptionist for Dental Clinics</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
            <a 
              href="mailto:flosslineai@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              flosslineai@gmail.com
            </a>
            <a 
              href="tel:+15043156707" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              (504) 315-6707
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © 2025 FlossLineAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
