import { CHECKOUT_URL } from "@/lib/constants";

interface BookCallLinkProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const BookCallLink = ({
  className = "",
  children = "Get started - $297/mo",
  onClick,
}: BookCallLinkProps) => (
  <a
    href={CHECKOUT_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`cursor-pointer ${className}`}
  >
    {children}
  </a>
);

export default BookCallLink;
