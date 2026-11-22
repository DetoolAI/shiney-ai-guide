import { useState } from "react";
import { ONBOARDING_FORM_URL } from "@/lib/constants";

interface EmailCaptureProps {
  title?: string;
  subtitle?: string;
  source?: string;
  buttonLabel?: string;
  dark?: boolean;
  className?: string;
}

const EmailCapture = ({
  title = "Get the onboarding link",
  subtitle = "Enter the email you used at checkout.",
  source = "site",
  buttonLabel = "Send me the form",
  dark = false,
  className = "",
}: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/capture-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to send");

      setStatus("ok");
      setMessage("Check your inbox — onboarding link is on the way.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Try the form link below.");
    }
  };

  const shell = dark
    ? "bg-white/5 border border-white/10 text-white"
    : "bg-detool-cream border border-gray-200 text-gray-900";
  const input = dark
    ? "bg-white/10 border-white/20 text-white placeholder:text-white/40"
    : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400";
  const muted = dark ? "text-white/60" : "text-gray-500";

  return (
    <div className={`rounded-2xl p-6 ${shell} ${className}`}>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className={`text-sm mb-4 ${muted}`}>{subtitle}</p>

      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@business.com"
          className={`flex-1 rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 ${input}`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 text-sm transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : buttonLabel}
        </button>
      </form>

      {message && (
        <p className={`text-sm mt-3 ${status === "error" ? "text-red-400" : dark ? "text-green-300" : "text-green-700"}`}>
          {message}
        </p>
      )}

      <p className={`text-xs mt-4 ${muted}`}>
        Or open the form directly:{" "}
        <a href={ONBOARDING_FORM_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
          {ONBOARDING_FORM_URL.replace(/^https?:\/\//, "")}
        </a>
      </p>
    </div>
  );
};

export default EmailCapture;
