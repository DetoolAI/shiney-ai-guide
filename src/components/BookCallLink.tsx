import { BOOK_A_CALL_URL } from "@/lib/constants";

interface BookCallLinkProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const BookCallLink = ({ className = "", children, onClick }: BookCallLinkProps) => (
  <a
    href={BOOK_A_CALL_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`cursor-pointer ${className}`}
  >
    {children}
  </a>
);

export default BookCallLink;
