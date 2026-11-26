import { PLANS, type PlanId } from "@/lib/constants";

interface BookCallButtonProps {
  className?: string;
  children?: React.ReactNode;
  plan?: PlanId;
}

const BookCallButton = ({
  className = "",
  children,
  plan = "full",
}: BookCallButtonProps) => {
  return (
    <a
      href={PLANS[plan].checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md cursor-pointer ${className}`}
    >
      {children ?? PLANS[plan].label}
    </a>
  );
};

export default BookCallButton;
