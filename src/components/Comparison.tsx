import { Check, X, AlertTriangle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ComparisonIcon = ({ type }: { type: "check" | "x" | "warning" }) => {
  if (type === "check") return <Check className="w-5 h-5 text-green-600 inline-block mr-2" />;
  if (type === "x") return <X className="w-5 h-5 text-red-600 inline-block mr-2" />;
  return <AlertTriangle className="w-5 h-5 text-amber-600 inline-block mr-2" />;
};

const Comparison = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            See the <span className="text-gradient">Difference</span>
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <div className="min-w-[800px] bg-card rounded-2xl shadow-large border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                  <TableHead className="text-primary-foreground font-bold text-base w-1/4">Feature</TableHead>
                  <TableHead className="text-primary-foreground font-bold text-base bg-primary-dark/20 w-1/4">
                    <div className="flex items-center gap-2">
                      FlossLineAI
                      <span className="text-xs bg-accent px-2 py-0.5 rounded-full">Best Value</span>
                    </div>
                  </TableHead>
                  <TableHead className="text-primary-foreground font-bold text-base w-1/4">Traditional Receptionist</TableHead>
                  <TableHead className="text-primary-foreground font-bold text-base w-1/4">Call Center</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold text-base">Availability</TableCell>
                  <TableCell className="bg-primary/5 font-semibold text-primary">24/7 Instant</TableCell>
                  <TableCell className="text-muted-foreground">8 hrs/day</TableCell>
                  <TableCell className="text-muted-foreground">Limited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-base">Missed Calls</TableCell>
                  <TableCell className="bg-primary/5 font-semibold">
                    <ComparisonIcon type="x" />
                    <span className="text-green-600">None</span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <ComparisonIcon type="check" />
                    Common
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <ComparisonIcon type="warning" />
                    Frequent
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-base">Cost</TableCell>
                  <TableCell className="bg-primary/5">
                    <span className="font-bold text-xl text-primary">$600/mo</span>
                  </TableCell>
                  <TableCell className="text-muted-foreground font-medium">$3,000–$4,000</TableCell>
                  <TableCell className="text-muted-foreground font-medium">$1,000+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-base">Insurance Handling</TableCell>
                  <TableCell className="bg-primary/5 font-semibold">
                    <ComparisonIcon type="check" />
                    <span className="text-green-600">Automatic</span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <ComparisonIcon type="check" />
                    Manual
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <ComparisonIcon type="warning" />
                    Limited
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-base">Scheduling</TableCell>
                  <TableCell className="bg-primary/5 font-semibold text-primary">Sync w/ OpenDental</TableCell>
                  <TableCell className="text-muted-foreground">Manual</TableCell>
                  <TableCell className="text-muted-foreground">Delayed</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-base">Consistency</TableCell>
                  <TableCell className="bg-primary/5 font-semibold text-primary">Always polite</TableCell>
                  <TableCell className="text-muted-foreground">Depends on staff</TableCell>
                  <TableCell className="text-muted-foreground">Varies</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-base">HIPAA Secure</TableCell>
                  <TableCell className="bg-primary/5 font-semibold">
                    <ComparisonIcon type="check" />
                    <span className="text-green-600">Yes</span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <ComparisonIcon type="check" />
                    Yes
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    <ComparisonIcon type="warning" />
                    Sometimes
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold text-base">ROI</TableCell>
                  <TableCell className="bg-primary/5">
                    <span className="font-bold text-xl">💰 <span className="text-green-600">High</span></span>
                  </TableCell>
                  <TableCell className="text-muted-foreground font-medium">Moderate</TableCell>
                  <TableCell className="text-muted-foreground font-medium">Low</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;