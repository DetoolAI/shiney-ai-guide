import { PLANS, type PlanId } from "@/lib/constants";

interface BookCallLinkProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  /** Which Stripe checkout to open. Defaults to the $297 full system. */
  plan?: PlanId;
}

const BookCallLink = ({
  className = "",
  children,
  onClick,
  plan = "full",
}: BookCallLinkProps) => (
  <a
    href={PLANS[plan].checkoutUrl}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`cursor-pointer ${className}`}
  >
    {children ?? PLANS[plan].label}
  </a>
);

export default BookCallLink;
