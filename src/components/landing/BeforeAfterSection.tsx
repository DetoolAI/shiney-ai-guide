import { X, Check } from "lucide-react";

const before = [
  "Miss calls and lose leads who don't leave voicemails",
  "Spend hours manually following up with no-shows",
  "Leads go cold because response time is too slow",
  "No consistent way to ask clients for reviews",
  "Marketing campaigns take days to put together",
  "Website doesn't convert visitors into leads",
  "No idea which leads are qualified or not",
];

const after = [
  "Every missed call gets an instant text-back automatically",
  "AI follows up 24/7 until the lead responds or books",
  "Respond to every inquiry in seconds, not hours",
  "Review requests sent automatically after every job",
  "One-click campaigns go out to your entire list instantly",
  "High-converting website built and live in 3 days",
  "AI qualifies every lead before it reaches your calendar",
];

const BeforeAfterSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Life Before vs. After <span className="text-primary">Detool.AI</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Stop working harder. Start working smarter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Before Detool.AI</h3>
              </div>
              <ul className="space-y-3">
                {before.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500 text-sm">
                    <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">After Detool.AI</h3>
              </div>
              <ul className="space-y-3">
                {after.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-900 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stat bar */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: "< 10s", label: "Avg. lead response time" },
              { stat: "50%", label: "Average booking increase" },
              { stat: "24/7", label: "AI works around the clock" },
              { stat: "3 days", label: "Time to go fully live" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-primary mb-1">{item.stat}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
