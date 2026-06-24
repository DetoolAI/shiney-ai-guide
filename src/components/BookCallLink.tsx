import { BOOK_A_CALL_URL } from "@/lib/constants";

interface BookCallLinkProps {
  className?: string;
  children: React.ReactNode;
}

const BookCallLink = ({ className = "", children }: BookCallLinkProps) => (
  <a href={BOOK_A_CALL_URL} className={className}>
    {children}
  </a>
);

export default BookCallLink;
