import BookCallButton from "@/components/BookCallButton";

const FinalCTA = () => {
  return (
    <section className="py-24" style={{ background: "#0f1b2d" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Check out, we build your system in 10 days, and it goes live — you don't have to do anything.
          </p>

          <BookCallButton className="text-lg px-12 py-7 shadow-lg rounded-lg">
            Get started - $297/mo
          </BookCallButton>

          <p className="text-sm text-gray-500 mt-6">
            $297/mo · No contracts · Built in 10 days
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
