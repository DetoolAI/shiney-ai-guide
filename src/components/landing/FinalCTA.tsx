import BookCallButton from "@/components/BookCallButton";

const FinalCTA = () => {
  return (
    <section className="py-24" style={{ background: "#0f1b2d" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Want to schedule a time to talk?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            20 minutes. We'll look at your current situation, tell you exactly what we'd build, and give you a straight answer on whether we're a good fit. No pitch. No pressure.
          </p>

          <BookCallButton className="text-lg px-12 py-7 shadow-lg rounded-lg">
            Book A Free Call
          </BookCallButton>

          <p className="text-sm text-gray-500 mt-6">
            Starting at $297/mo · No contracts · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
