type WordmarkProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  /** White Detool text for dark backgrounds */
  inverse?: boolean;
};

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-5xl",
  xl: "text-7xl",
};

/** Inline Detool.AI wordmark — no icon, agency-style lockup */
export const DetoolWordmark = ({ size = "md", className = "", inverse = false }: WordmarkProps) => (
  <span
    className={`font-black tracking-tight leading-none whitespace-nowrap ${sizeClasses[size]} ${className}`}
  >
    <span className={inverse ? "text-white" : "text-gray-900"}>Detool</span>
    <span className="text-primary">.AI</span>
  </span>
);

const DetoolLogo = (props: WordmarkProps) => <DetoolWordmark {...props} />;

export default DetoolLogo;
