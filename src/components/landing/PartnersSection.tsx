const partners = [
  "Square",
  "GoHighLevel",
  "Supabase",
  "Twilio",
  "Cloudflare",
  "Stripe",
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            Just so you know we're legit, we partner with…
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((name) => (
              <div
                key={name}
                className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 font-bold text-sm md:text-base tracking-tight"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
