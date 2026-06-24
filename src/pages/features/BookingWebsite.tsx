import FeaturePageLayout from "@/components/landing/FeaturePageLayout";

const benefits = [
  "Your own custom domain — looks like a real business, not a third-party app",
  "Clients book 24/7 without calling or DMing you",
  "Real-time availability — no double-bookings, ever",
  "Automatic confirmation texts and appointment reminders",
  "Mobile-optimized — works perfectly on every phone",
  "Service menu with pricing and descriptions",
  "Multiple staff members and locations supported",
  "Built-in deposit collection at time of booking",
];

const steps = [
  { title: "We design your site", desc: "Custom colors, your logo, your service menu, your prices. Looks like you hired a top design agency." },
  { title: "We connect your booking system", desc: "Real-time availability, automatic confirmations, reminders, and deposit collection all built in." },
  { title: "You go live in 10 days", desc: "Send your clients to your new booking link. Watch the appointments roll in." },
];

const BookingWebsite = () => (
  <FeaturePageLayout
    title="Branded Booking Website"
    subtitle="A professional booking site with your branding, your services, and your prices. Clients book, pay deposits, and confirm — all without you picking up the phone."
    demoLabel="Branded Booking Website"
    benefits={benefits}
    steps={steps}
    testimonial={{
      quote: "Incredibly professional website design! Look no further!",
      author: "Crème de la Crème N/LLC",
      biz: "Nail Salon",
    }}
    ctaTitle="Ready for your own booking website?"
  />
);

export default BookingWebsite;
