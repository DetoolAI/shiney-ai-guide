import { CHECKOUT_URL } from "@/lib/constants";

interface BookCallButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const BookCallButton = ({
  className = "",
  children = "Get started - $297/mo",
}: BookCallButtonProps) => {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
};

export default BookCallButton;
