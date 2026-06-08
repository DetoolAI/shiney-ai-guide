import { CheckCircle } from "lucide-react";

const QualifierSection = () => {
  const qualifiers = [
    "You're missing calls and losing leads",
    "Follow-up takes too long or doesn't happen",
    "You're getting leads but not booking enough"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Sound familiar?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            If any of these describe you, keep reading — this was built for exactly this.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            {qualifiers.map((qualifier, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-900 font-medium">{qualifier}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-500 mt-8 max-w-2xl mx-auto">
            You shouldn't have to chase every lead manually. That's exactly what Detool.AI fixes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualifierSection;
