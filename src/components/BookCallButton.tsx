import { BOOK_A_CALL_URL } from "@/lib/constants";

interface BookCallButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const BookCallButton = ({ className = "", children = "Book A Free Call" }: BookCallButtonProps) => {
  return (
    <a
      href={BOOK_A_CALL_URL}
      className={`inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md ${className}`}
    >
      {children}
    </a>
  );
};

export default BookCallButton;
