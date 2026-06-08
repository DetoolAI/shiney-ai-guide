const businesses = [
  "Real Estate Agents", "Nail Salons", "Barbershops", "Landscapers",
  "Pressure Washers", "Pest Control", "Moving Companies", "HVAC",
  "Plumbers", "Electricians", "Handymen", "Painters",
  "Roofers", "Pool Services", "Auto Detailers", "Personal Trainers",
  "Cleaning Services", "Dog Groomers", "Tree Services", "General Contractors",
  "Flooring & Carpet", "Home Builders",
];

const WhoWeServeSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Who we work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We serve these businesses and more...
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto">
            If you run a service business and you're tired of having a sh*tty website (or none at all), we got you.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {businesses.map((b, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-900 hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
