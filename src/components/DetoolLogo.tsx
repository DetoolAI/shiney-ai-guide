type MarkProps = {
  size?: number;
  className?: string;
};

type LogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  inverse?: boolean;
  /** Show avatar mark beside wordmark (default true except xl-only layouts) */
  showMark?: boolean;
};

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-5xl",
  xl: "text-7xl",
};

const markSizes = { sm: 28, md: 36, lg: 48, xl: 64 };

/** Avatar mark — orange circle, white D, sparkle accent */
export const DetoolMark = ({ size = 36, className = "" }: MarkProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`flex-shrink-0 ${className}`}
    aria-hidden
  >
    <circle cx="24" cy="24" r="24" fill="#e8702a" />
    <circle cx="24" cy="24" r="22" fill="url(#detool-grad)" />
    <path
      d="M15 12 H25.5 C31.5 12 36 16.5 36 24 C36 31.5 31.5 36 25.5 36 H15 V12 Z M21 18 V30 H25 C28.5 30 30 27.5 30 24 C30 20.5 28.5 18 25 18 H21 Z"
      fill="white"
    />
    <path
      d="M34 10 L35.2 13.2 L38.5 14.2 L35.2 15.2 L34 18.5 L32.8 15.2 L29.5 14.2 L32.8 13.2 Z"
      fill="white"
      opacity="0.95"
    />
    <defs>
      <linearGradient id="detool-grad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f09040" />
        <stop offset="1" stopColor="#cf5e1a" />
      </linearGradient>
    </defs>
  </svg>
);

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
    <div className={`flex items-center gap-2 ${className}`}>
      <DetoolMark size={markSizes[size]} />
      <DetoolWordmark size={size} inverse={inverse} />
    </div>
  );
};

export default DetoolLogo;
