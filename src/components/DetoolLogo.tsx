type MarkProps = {
  size?: number;
  className?: string;
};

type LogoProps = MarkProps & {
  /** Show DETOOL .AI text beside the mark */
  showWordmark?: boolean;
  wordmarkSize?: "sm" | "md" | "lg";
};

const wordmarkClasses = {
  sm: { detool: "text-base", ai: "text-base -mt-1" },
  md: { detool: "text-2xl", ai: "text-2xl -mt-1" },
  lg: { detool: "text-5xl", ai: "text-5xl -mt-2" },
};

/** Orange rounded-square D monogram — favicon, header icon, social */
export const DetoolMark = ({ size = 44, className = "" }: MarkProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden
  >
    <rect width="48" height="48" rx="12" fill="#e8702a" />
    <path
      d="M14 10 H26 C33 10 38 15 38 24 C38 33 33 38 26 38 H14 V10 Z M20 16 V32 H25 C28.5 32 32 28.5 32 24 C32 19.5 28.5 16 25 16 H20 Z"
      fill="white"
    />
  </svg>
);

export const DetoolWordmark = ({
  size = "md",
  className = "",
  inverse = false,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  inverse?: boolean;
}) => {
  const c = wordmarkClasses[size];
  return (
    <div className={`leading-none ${className}`}>
      <span className={`block font-black tracking-tight ${c.detool} ${inverse ? "text-white" : "text-gray-900"}`}>DETOOL</span>
      <span className={`block font-black text-primary tracking-tight ${c.ai}`}>.AI</span>
    </div>
  );
};

const DetoolLogo = ({ size = 44, className = "", showWordmark = true, wordmarkSize = "md" }: LogoProps) => {
  if (!showWordmark) {
    return <DetoolMark size={size} className={className} />;
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <DetoolMark size={size} />
      <DetoolWordmark size={wordmarkSize} />
    </div>
  );
};

export default DetoolLogo;
