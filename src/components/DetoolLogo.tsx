type MarkProps = {
  size?: number;
  className?: string;
};

type LogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  inverse?: boolean;
  showMark?: boolean;
};

const sizeClasses = {
  sm: "text-[28px] leading-none",
  md: "text-[28px] leading-none",
  lg: "text-5xl",
  xl: "text-7xl",
};

const markSizes = { sm: 28, md: 28, lg: 40, xl: 56 };

/** Abstract node mark — three connected circles, automation & connection */
export const DetoolMark = ({ size = 28, className = "" }: MarkProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`flex-shrink-0 ${className}`}
    aria-hidden
  >
    <line x1="16" y1="8" x2="7" y2="24" stroke="#e8702a" strokeWidth="2" strokeLinecap="round" />
    <line x1="7" y1="24" x2="25" y2="24" stroke="#e8702a" strokeWidth="2" strokeLinecap="round" />
    <line x1="25" y1="24" x2="16" y2="8" stroke="#e8702a" strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="8" r="4.5" fill="#e8702a" />
    <circle cx="7" cy="24" r="4.5" fill="#e8702a" />
    <circle cx="25" cy="24" r="4.5" fill="#e8702a" />
  </svg>
);

export const DetoolWordmark = ({ size = "md", className = "", inverse = false }: LogoProps) => (
  <span
    className={`font-bold tracking-tight leading-none whitespace-nowrap ${sizeClasses[size]} ${className}`}
  >
    <span className={inverse ? "text-white" : "text-gray-900"}>Detool</span>
    <span className="text-[#e8702a]">.AI</span>
  </span>
);

const DetoolLogo = ({ size = "md", className = "", inverse = false, showMark = true }: LogoProps) => {
  if (!showMark) {
    return <DetoolWordmark size={size} className={className} inverse={inverse} />;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <DetoolMark size={markSizes[size]} />
      <DetoolWordmark size={size} inverse={inverse} />
    </div>
  );
};

export default DetoolLogo;
