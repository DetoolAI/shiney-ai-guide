import { Star, Shield, TrendingUp } from "lucide-react";

const TrustSection = () => {
  const stats = [
    { number: "150+", label: "businesses already using this" },
    { number: "50%", label: "more bookings on average" },
    { number: "24/7", label: "responding so you don't have to" },
    { number: "7–10", label: "days to go fully live" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            The numbers don't lie
          </h2>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Trust statements */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/50 p-6 rounded-xl border border-gray-200 text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">No extra staff. Ever.</h3>
              <p className="text-sm text-gray-500">
                You get the output of a full follow-up team without hiring, training, or managing anyone.
              </p>
            </div>
            
            <div className="bg-white/50 p-6 rounded-xl border border-gray-200 text-center">
              <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">If it doesn't work, we make it right.</h3>
              <p className="text-sm text-gray-500">
                60-day ROI guarantee. No results? We don't just walk away — we fix it.
              </p>
            </div>
            
            <div className="bg-white/50 p-6 rounded-xl border border-gray-200 text-center">
              <Star className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Real businesses. Real owners like you.</h3>
              <p className="text-sm text-gray-500">
                Not a Fortune 500 tool. Built for everyday business owners who are tired of losing leads they worked hard to get.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
