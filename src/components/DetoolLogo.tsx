type MarkProps = {
  size?: number;
  className?: string;
  /** Flat orange silhouette (favicon-style) vs full-color mascot */
  variant?: "mascot" | "flat";
};

type LogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  inverse?: boolean;
  showMark?: boolean;
};

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-5xl",
  xl: "text-7xl",
};

const markSizes = { sm: 30, md: 38, lg: 52, xl: 72 };

/** Detool.AI robot mascot — Stone-style icon, beauty-tech friendly */
export const DetoolMark = ({ size = 36, className = "", variant = "mascot" }: MarkProps) => {
  if (variant === "flat") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${className}`}
        aria-hidden
      >
        <path
          fill="#e8702a"
          d="M24 4a3 3 0 0 1 3 3v3h-6V7a3 3 0 0 1 3-3Zm-12 11a10 10 0 0 1 10-10h16a10 10 0 0 1 10 10v12a10 10 0 0 1-10 10H22a10 10 0 0 1-10-10V15Zm6 10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v1ZM8 36c0-4 3.5-7 8-7h16c4.5 0 8 3 8 7v2H8v-2Z"
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 ${className}`}
      aria-hidden
    >
      <circle cx="40" cy="40" r="38" fill="#e8702a" opacity="0.1" />
      <line x1="40" y1="10" x2="40" y2="20" stroke="#e8702a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="40" cy="8" r="4" fill="#e8702a" />
      <rect x="18" y="20" width="44" height="38" rx="14" fill="#1a2035" />
      <rect x="20" y="22" width="40" height="34" rx="12" fill="#0f1b2d" />
      <rect x="26" y="34" width="12" height="9" rx="3" fill="#e8702a" />
      <rect x="42" y="34" width="12" height="9" rx="3" fill="#e8702a" />
      <rect x="28" y="36" width="4" height="3" rx="1" fill="white" opacity="0.6" />
      <rect x="44" y="36" width="4" height="3" rx="1" fill="white" opacity="0.6" />
      <path
        d="M30 50 Q40 56 50 50"
        stroke="#e8702a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M12 62 Q18 54 28 58 H52 Q62 54 68 62 V70 Q40 76 12 70 Z"
        fill="#1a2035"
      />
    </svg>
  );
};

export const DetoolWordmark = ({ size = "md", className = "", inverse = false }: LogoProps) => (
  <span
    className={`font-black tracking-tight leading-none whitespace-nowrap ${sizeClasses[size]} ${className}`}
  >
    <span className={inverse ? "text-white" : "text-gray-900"}>Detool</span>
    <span className="text-primary">.AI</span>
  </span>
);

const DetoolLogo = ({ size = "md", className = "", inverse = false, showMark = true }: LogoProps) => {
  if (!showMark) {
    return <DetoolWordmark size={size} className={className} inverse={inverse} />;
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <DetoolMark size={markSizes[size]} />
      <DetoolWordmark size={size} inverse={inverse} />
    </div>
  );
};

export default DetoolLogo;
