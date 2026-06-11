import { useNavigate } from "react-router-dom";

interface BookCallButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const BookCallButton = ({ className = "", children = "Book A Free Call" }: BookCallButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/book-a-call")}
      className={`inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default BookCallButton;
