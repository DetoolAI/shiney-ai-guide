import BookCallLink from "@/components/BookCallLink";

const HomeAboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                  <img src="/justin.png" alt="Justin — Founder of Detool.AI" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-xl px-5 py-2.5 shadow-lg whitespace-nowrap">
                  <p className="text-xs text-gray-400 font-medium">Founder</p>
                  <p className="text-sm font-black text-gray-900">Justin — Detool.AI</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-primary font-bold tracking-widest text-sm uppercase mb-3">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Built by someone who was sick of seeing good businesses lose for dumb reasons.
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  I'm Justin. I started Detool.AI after seeing the same thing over and over — business owners busting their ass to get leads, then losing them because follow-up was too slow or they didn't have a decent website.
                </p>
                <p>
                  That's not a hustle problem. That's a systems problem. And it's fixable.
                </p>
                <p>
                  So I built the fix. A real website that makes you look like a legit business. Automated follow-up so you never miss a lead. Review requests that go out without you thinking about it. 150+ businesses are running on it. Yours can too.
                </p>
              </div>
              <BookCallLink className="inline-block mt-8 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-md">
                Work With Us
              </BookCallLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
