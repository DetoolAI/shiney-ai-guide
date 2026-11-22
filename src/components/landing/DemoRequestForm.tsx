import BookCallButton from "@/components/BookCallButton";

const DemoRequestForm = () => {
  return (
    <section id="demo-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-card text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get started - $297/mo
            </h2>
            <p className="text-gray-500 mb-8">
              Check out now and we&apos;ll build your system in 10 days — you don&apos;t have to do anything.
            </p>
            <BookCallButton className="w-full h-14 text-lg font-semibold">
              Get started - $297/mo
            </BookCallButton>
            <p className="text-sm text-gray-500 mt-6">
              $297/mo · Built in 10 days · No contracts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoRequestForm;
