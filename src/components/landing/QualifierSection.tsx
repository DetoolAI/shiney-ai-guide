import { CheckCircle } from "lucide-react";

const QualifierSection = () => {
  const qualifiers = [
    "Real estate agents",
    "Sales teams handling inbound leads",
    "Agents receiving 10+ leads per week"
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Who Detool.AI Is For
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            {qualifiers.map((qualifier, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{qualifier}</span>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto">
            Built for professionals who handle inbound leads daily and don't have time to manually follow up with every prospect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualifierSection;
