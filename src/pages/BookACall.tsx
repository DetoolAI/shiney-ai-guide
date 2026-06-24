import { useEffect } from "react";
import { BOOK_A_CALL_URL } from "@/lib/constants";

const BookACall = () => {
  useEffect(() => {
    window.location.replace(BOOK_A_CALL_URL);
  }, []);

  return (
    <div className="min-h-screen bg-detool-dark flex items-center justify-center">
      <p className="text-white/70">Redirecting to book your call…</p>
    </div>
  );
};

export default BookACall;
