import { useLocation, useNavigate } from "react-router-dom";

interface BookCallButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const BookCallButton = ({ className = "", children = "Book A Free Call" }: BookCallButtonProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (pathname === "/") {
      document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md ${className}`}
    >
      {children}
    </button>
  );
};

export default BookCallButton;
