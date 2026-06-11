interface RobotLogoProps {
  size?: number;
  className?: string;
}

/** Detool.AI mark — friendly robot head, no hard hat. Square icon for header/footer/favicon. */
const RobotLogo = ({ size = 48, className = "" }: RobotLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Soft glow ring — tech + polish, not construction */}
      <circle cx="40" cy="40" r="38" fill="#e8702a" opacity="0.12" />
      <circle cx="40" cy="40" r="36" fill="#0f1b2d" />

      {/* Head */}
      <rect x="18" y="22" width="44" height="40" rx="14" fill="#1a2035" />
      <rect x="20" y="24" width="40" height="36" rx="12" fill="#0f1b2d" />

      {/* Antenna / sparkle accent */}
      <line x1="40" y1="14" x2="40" y2="22" stroke="#e8702a" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="40" cy="12" r="3" fill="#e8702a" />
      <path
        d="M58 18 L59.5 21.5 L63 23 L59.5 24.5 L58 28 L56.5 24.5 L53 23 L56.5 21.5 Z"
        fill="#e8702a"
        opacity="0.85"
      />

      {/* Eyes */}
      <rect x="26" y="36" width="11" height="8" rx="3" fill="#e8702a" />
      <rect x="43" y="36" width="11" height="8" rx="3" fill="#e8702a" />
      <rect x="28" y="38" width="4" height="2.5" rx="1" fill="white" opacity="0.55" />
      <rect x="45" y="38" width="4" height="2.5" rx="1" fill="white" opacity="0.55" />

      {/* Smile */}
      <path
        d="M30 50 Q40 56 50 50"
        stroke="#e8702a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* Shoulder hint */}
      <path
        d="M14 62 Q18 54 26 58 L54 58 Q62 54 66 62 L66 68 Q40 72 14 68 Z"
        fill="#1a2035"
      />
    </svg>
  );
};

export default RobotLogo;
