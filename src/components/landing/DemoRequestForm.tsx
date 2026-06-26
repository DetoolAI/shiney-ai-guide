import BookCallButton from "@/components/BookCallButton";

const DemoRequestForm = () => {
  return (
    <section id="demo-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-card text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Book Your Free Meeting
            </h2>
            <p className="text-gray-500 mb-8">
              See how Detool.AI can get you more detailing leads — pick a time that works for you.
            </p>
            <BookCallButton className="w-full h-14 text-lg font-semibold">
              Book Your Free Meeting
            </BookCallButton>
            <p className="text-sm text-gray-500 mt-6">
              20 minutes · No pressure · No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoRequestForm;
